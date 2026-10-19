import { contact } from "@/content/contact";
import { interestLabel, type InquiryInput } from "@/lib/inquiry";

const siteOrigin = "https://www.havilahagroghana.com";
const logoUrl = `${siteOrigin}/brand/logo-horizontal.png`;

export const confirmationSubject = "We've Received Your Inquiry";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function formatInquiryFrom(value: string): string {
  const trimmed = value.trim().replace(/^['"]+|['"]+$/g, "");
  const named = trimmed.match(/^(.*?)\s*<\s*([^>\s]+)\s*>\s*$/);
  if (!named) return trimmed;
  const email = named[2].trim();
  const name = named[1].trim().replace(/^['"]+|['"]+$/g, "");
  if (!name) return email;
  const quoted = /[\s"<>]/.test(name) ? `"${name.replaceAll('"', "")}"` : name;
  return `${quoted} <${email}>`;
}

export function parseInquiryRecipients(value: string): string[] {
  const seen = new Set<string>();
  const recipients: string[] = [];
  let dropped = 0;

  for (const part of value.split(/[,;]+/)) {
    const address = part.trim();
    if (!address) continue;
    if (!emailPattern.test(address)) {
      dropped += 1;
      continue;
    }
    const key = address.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    recipients.push(address);
  }

  if (dropped > 0) {
    console.warn(
      `Dropped ${dropped} invalid inquiry recipient ${dropped === 1 ? "address" : "addresses"}.`,
    );
  }

  return recipients;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function subjectField(value: string): string {
  return value.replaceAll("\r", "").replaceAll("\n", "").trim();
}

function typeLabel(intent: InquiryInput["intent"]): string {
  return intent === "quote" ? "Quote" : "Inquiry";
}

function formatSubmitted(submittedAt: Date): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Accra",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
    timeZoneName: "short",
  }).format(submittedAt);
}

function detailRows(data: InquiryInput, submittedAt: Date): [string, string][] {
  const rows: [string, string][] = [
    ["Type", typeLabel(data.intent)],
    ["Name", data.name],
  ];
  if (data.company.trim()) rows.push(["Company", data.company.trim()]);
  rows.push(["Country", data.country], ["Email", data.email]);
  if (data.phone.trim()) rows.push(["Phone", data.phone.trim()]);
  rows.push(["Product of interest", interestLabel(data.interest)]);
  if (data.volume.trim()) rows.push(["Estimated volume", data.volume.trim()]);
  rows.push(["Message", data.message], ["Submitted", formatSubmitted(submittedAt)]);
  return rows;
}

function detailText(rows: [string, string][]): string {
  return rows.map(([label, value]) => `${label}: ${value}`).join("\n");
}

function detailTable(rows: [string, string][]): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;border:1px solid #E6DCC8;">${rows
    .map(([label, value], index) => {
      const background = index % 2 === 0 ? "#ffffff" : "#F7F3EA";
      const safeValue = escapeHtml(value).replaceAll("\r\n", "<br>").replaceAll("\n", "<br>").replaceAll("\r", "<br>");
      return `<tr>
        <td style="padding:12px 16px;border-bottom:1px solid #E6DCC8;background:${background};font-family:Arial,Helvetica,sans-serif;">
          <p style="margin:0;font-size:12px;line-height:1.4;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:#6B4A2E;">${escapeHtml(label)}</p>
          <p style="margin:4px 0 0;font-size:16px;line-height:1.5;color:#1B1F1A;">${safeValue}</p>
        </td>
      </tr>`;
    })
    .join("")}</table>`;
}

function emailDocument(title: string, preheader: string, body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:#F7F3EA;">
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;background:#F7F3EA;">
  <tr>
    <td align="center" style="padding:24px 12px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid #E6DCC8;">
        <tr>
          <td style="padding:24px 28px 18px;background:#F7F3EA;border-bottom:4px solid #C9A13B;">
            <img src="${logoUrl}" alt="Havilah Agro Ghana Limited" width="220" height="49" style="display:block;width:220px;max-width:100%;height:auto;border:0;">
          </td>
        </tr>
        <tr>
          <td style="padding:28px 28px 24px;font-family:Arial,Helvetica,sans-serif;color:#1B1F1A;">
            ${body}
          </td>
        </tr>
        <tr>
          <td style="padding:20px 28px 24px;background:#1E5631;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#F7F3EA;">
            <p style="margin:0;font-size:14px;font-weight:700;color:#ffffff;">Havilah Agro Ghana Limited</p>
            <p style="margin:8px 0 0;"><a href="${siteOrigin}" style="color:#C9A13B;text-decoration:underline;">www.havilahagroghana.com</a></p>
            <p style="margin:4px 0 0;"><a href="${siteOrigin}/privacy" style="color:#F7F3EA;text-decoration:underline;">Privacy policy</a></p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

export function inquirySubject(data: InquiryInput): string {
  return `New Inquiry from ${subjectField(data.name)}, ${subjectField(data.country)}`;
}

export function inquiryText(data: InquiryInput, submittedAt: Date): string {
  return [
    "New Inquiry",
    "",
    "A new message has arrived through the website. Reply to this email to reach the sender.",
    "",
    detailText(detailRows(data, submittedAt)),
    "",
    "Havilah Agro Ghana Limited",
    siteOrigin,
    `Privacy policy: ${siteOrigin}/privacy`,
  ].join("\n");
}

export function inquiryHtml(data: InquiryInput, submittedAt: Date): string {
  const body = `
    <h1 style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:26px;line-height:1.3;font-weight:700;color:#1E5631;">New Inquiry</h1>
    <p style="margin:0 0 20px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:#1B1F1A;">A new message has arrived through the website. Reply to this email to reach the sender.</p>
    ${detailTable(detailRows(data, submittedAt))}`;
  return emailDocument(
    "New Inquiry",
    "A new message has arrived through the website.",
    body,
  );
}

export function acknowledgementText(data: InquiryInput, submittedAt: Date): string {
  return [
    `Dear ${data.name},`,
    "",
    "Thank you for contacting Havilah Agro Ghana Limited. We have received your message, and the team will reply soon.",
    "",
    "Here is a summary of what you sent:",
    "",
    detailText(detailRows(data, submittedAt)),
    "",
    `You can also reach us at ${contact.email.display} or on WhatsApp at ${contact.whatsapp.display} (${contact.whatsapp.href}).`,
    "",
    "This note confirms that your message arrived. It is not a quotation or an acceptance of an order.",
    "",
    "Havilah Agro Ghana Limited",
    siteOrigin,
    `Privacy policy: ${siteOrigin}/privacy`,
  ].join("\n");
}

export function acknowledgementHtml(data: InquiryInput, submittedAt: Date): string {
  const body = `
    <h1 style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:26px;line-height:1.3;font-weight:700;color:#1E5631;">We&#39;ve Received Your Inquiry</h1>
    <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:#1B1F1A;">Dear ${escapeHtml(data.name)},</p>
    <p style="margin:0 0 12px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:#1B1F1A;">Thank you for contacting Havilah Agro Ghana Limited. We have received your message, and the team will reply soon.</p>
    <p style="margin:0 0 16px;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:#1B1F1A;">Here is a summary of what you sent.</p>
    ${detailTable(detailRows(data, submittedAt))}
    <p style="margin:20px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.6;color:#1B1F1A;">You can also reach us at <a href="${escapeHtml(contact.email.href)}" style="color:#1E5631;font-weight:700;text-decoration:underline;">${escapeHtml(contact.email.display)}</a> or on WhatsApp at <a href="${escapeHtml(contact.whatsapp.href)}" style="color:#1E5631;font-weight:700;text-decoration:underline;">${escapeHtml(contact.whatsapp.display)}</a>.</p>
    <p style="margin:16px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.6;color:#6B4A2E;">This note confirms that your message arrived. It is not a quotation or an acceptance of an order.</p>`;
  return emailDocument(confirmationSubject, "We have received your message and will reply soon.", body);
}
