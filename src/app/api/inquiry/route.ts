import { Resend } from "resend";
import { contact, forms } from "@/content/contact";
import { validateInquiry } from "@/lib/inquiry";
import {
  acknowledgementHtml,
  acknowledgementText,
  formatInquiryFrom,
  inquiryHtml,
  inquirySubject,
  inquiryText,
} from "@/lib/mail";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { verifyTurnstile } from "@/lib/turnstile";

function json(body: unknown, status: number) {
  return Response.json(body, { status });
}

function resendErrorDetails(error: unknown) {
  if (!error || typeof error !== "object") return { name: "Error" };
  const record = error as { name?: unknown; message?: unknown; statusCode?: unknown };
  return {
    name: typeof record.name === "string" ? record.name : "Error",
    statusCode: typeof record.statusCode === "number" ? record.statusCode : undefined,
    message: typeof record.message === "string" ? record.message : undefined,
  };
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  if (!rateLimit(ip)) {
    return json(
      {
        ok: false,
        code: "rate_limited",
        message: forms.rateLimit,
        whatsappUrl: contact.whatsapp.href,
      },
      429,
    );
  }

  let raw = "";
  try {
    raw = await request.text();
  } catch {
    return json({ ok: false, code: "validation", message: forms.validation }, 400);
  }

  if (raw.length > 30_000) {
    return json(
      { ok: false, code: "validation", message: "That message is too large to send." },
      413,
    );
  }

  let payload: unknown;
  try {
    payload = JSON.parse(raw);
  } catch {
    return json(
      { ok: false, code: "validation", message: "Send the inquiry as JSON." },
      400,
    );
  }

  const parsed = validateInquiry(payload);
  if (!parsed.ok) {
    return json(
      {
        ok: false,
        code: "validation",
        message: forms.validation,
        fieldErrors: parsed.fieldErrors,
      },
      400,
    );
  }

  if (parsed.honeypot) {
    return json(
      {
        ok: true,
        message: forms[parsed.data.intent].success,
      },
      200,
    );
  }

  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY?.trim();
  if (turnstileSecret) {
    const turnstile = await verifyTurnstile(turnstileSecret, parsed.data.turnstileToken, ip);
    if (!turnstile.ok) {
      console.error("Turnstile check failed", turnstile.reason);
      return json(
        {
          ok: false,
          code: "validation",
          message: "The spam check did not pass. Please try again.",
          fieldErrors: { turnstileToken: "Please complete the spam check." },
        },
        400,
      );
    }
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.INQUIRY_TO_EMAIL?.trim();
  const from = formatInquiryFrom(process.env.INQUIRY_FROM_EMAIL ?? "");

  if (!apiKey || !to || !from) {
    return json(
      {
        ok: false,
        code: "email_unavailable",
        message: forms.fallback,
        whatsappUrl: contact.whatsapp.href,
      },
      503,
    );
  }

  const resend = new Resend(apiKey);
  const data = parsed.data;

  try {
    const sent = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: inquirySubject(data),
      text: inquiryText(data),
      html: inquiryHtml(data),
    });

    if (sent.error) {
      console.error("Inquiry email failed", resendErrorDetails(sent.error));
      return json(
        {
          ok: false,
          code: "send_failed",
          message: forms.sendFailed,
          whatsappUrl: contact.whatsapp.href,
        },
        502,
      );
    }

    const acknowledgement = await resend.emails.send({
      from,
      to: [data.email],
      replyTo: to,
      subject: `We received your ${data.intent === "quote" ? "quote request" : "inquiry"} — Havilah Agro`,
      text: acknowledgementText(data),
      html: acknowledgementHtml(data),
    });

    if (acknowledgement.error) {
      console.error("Acknowledgement email failed", resendErrorDetails(acknowledgement.error));
    }
  } catch (error) {
    console.error("Inquiry email threw", resendErrorDetails(error));
    return json(
      {
        ok: false,
        code: "send_failed",
        message: forms.sendFailed,
        whatsappUrl: contact.whatsapp.href,
      },
      502,
    );
  }

  return json({ ok: true, message: forms[data.intent].success }, 200);
}
