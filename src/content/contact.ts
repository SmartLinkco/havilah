const whatsappE164 = "233200000000";
const whatsappMessage =
  "Hello Havilah Agro Ghana Limited. I would like to enquire about export produce.";

export const contact = {
  eyebrow: "Contact",
  title: "Inquire about export produce",
  lede: "Send a note to the farm, or use WhatsApp. Phone, email, the map and social profiles below are placeholders until Havilah Agro confirms them. There is no online shop.",
  whatsapp: {
    e164: whatsappE164,
    display: "+233 20 000 0000",
    confirmed: false,
    note: "Placeholder number. Replace it in src/content/contact.ts when the farm confirms the real WhatsApp line.",
    prefilledMessage: whatsappMessage,
    href: `https://wa.me/${whatsappE164}?text=${encodeURIComponent(whatsappMessage)}`,
  },
  phone: {
    display: "+233 20 000 0000",
    href: "tel:+233200000000",
    confirmed: false,
    note: "Placeholder number, same stand-in as WhatsApp until the farm confirms a telephone line.",
  },
  email: {
    display: "hello@havilahagro.example",
    href: "mailto:hello@havilahagro.example",
    confirmed: false,
    note: "Placeholder address on the reserved .example domain. It is not a working farm inbox.",
  },
  address: {
    lines: ["Farm location to be confirmed", "Ghana"],
    confirmed: false,
  },
  map: {
    embedUrl: null as string | null,
    title: "Map of the farm",
    emptyTitle: "Farm map coming",
    emptyText:
      "The map pin will be embedded when Havilah Agro confirms the farm location. No approximate pin is shown in its place.",
  },
  socials: [
    { id: "linkedin", label: "LinkedIn", href: null },
    { id: "instagram", label: "Instagram", href: null },
    { id: "facebook", label: "Facebook", href: null },
  ],
  socialNote: "Social links will be added when the farm sends the profile addresses.",
} as const;

export const forms = {
  inquiry: {
    id: "inquiry",
    intent: "inquiry" as const,
    title: "Make an inquiry",
    lede: "Share a little about the produce you need. Fields marked required must be completed. This form does not place an order.",
    submit: "Send inquiry",
    success:
      "Thank you. Your inquiry has been sent to Havilah Agro. If you need a faster reply, use WhatsApp.",
  },
  quote: {
    id: "quote",
    intent: "quote" as const,
    title: "Request a quote",
    lede: "Tell the farm what you want priced. Volume can be approximate. This request does not reserve stock.",
    submit: "Request a quote",
    success:
      "Thank you. Your quote request has been sent to Havilah Agro. If you need a faster reply, use WhatsApp.",
  },
  consent:
    "I agree that Havilah Agro may contact me about this inquiry, and I have read the privacy notice.",
  fallback:
    "We could not send this by email yet. Please message us on WhatsApp instead.",
  rateLimit:
    "Too many messages from this connection. Please wait a few minutes, or message us on WhatsApp.",
  sendFailed:
    "We could not send your message just now. Please try again, or message us on WhatsApp.",
  validation: "Please check the highlighted fields.",
  another: "Send another message",
} as const;
