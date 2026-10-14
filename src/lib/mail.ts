import { contact } from "@/content/contact";
import { intentLabel, interestLabel, type InquiryInput } from "@/lib/inquiry";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function lines(data: InquiryInput): [string, string][] {
  return [
    ["Type", intentLabel(data.intent)],
    ["Name", data.name],
    ["Company", data.company || "Not provided"],
    ["Country", data.country],
    ["Email", data.email],
    ["Phone", data.phone || "Not provided"],
    ["Interest", interestLabel(data.interest)],
    ["Estimated volume", data.volume || "Not provided"],
    ["Message", data.message],
  ];
}

export function inquirySubject(data: InquiryInput): string {
  return `${intentLabel(data.intent)} from ${data.name} (${data.country})`;
}

export function inquiryText(data: InquiryInput): string {
  const body = lines(data)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");
  return `${body}\n\nReply to this email to reach the buyer.`;
}

export function inquiryHtml(data: InquiryInput): string {
  const rows = lines(data)
    .map(
      ([label, value]) =>
        `<p><strong>${escapeHtml(label)}</strong><br>${escapeHtml(value).replaceAll("\n", "<br>")}</p>`,
    )
    .join("");
  return `<div>${rows}<p>Reply to this email to reach the buyer.</p></div>`;
}

export function acknowledgementText(data: InquiryInput): string {
  return [
    `Hello ${data.name},`,
    "",
    `Havilah Agro Ghana Limited has received your ${data.intent === "quote" ? "quote request" : "inquiry"} about ${interestLabel(data.interest)}.`,
    "This note confirms that the message arrived. It is not a quotation or an acceptance of an order.",
    "",
    "If you need to add anything, reply to this email or use WhatsApp:",
    contact.whatsapp.href,
    "",
    "Havilah Agro Ghana Limited",
  ].join("\n");
}

export function acknowledgementHtml(data: InquiryInput): string {
  return `<div><p>Hello ${escapeHtml(data.name)},</p><p>Havilah Agro Ghana Limited has received your ${
    data.intent === "quote" ? "quote request" : "inquiry"
  } about ${escapeHtml(interestLabel(data.interest))}.</p><p>This note confirms that the message arrived. It is not a quotation or an acceptance of an order.</p><p>If you need to add anything, reply to this email or use WhatsApp:<br><a href="${escapeHtml(
    contact.whatsapp.href,
  )}">${escapeHtml(contact.whatsapp.display)}</a></p><p>Havilah Agro Ghana Limited</p></div>`;
}
