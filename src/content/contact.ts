const whatsappMessage =
  "Hello Havilah Agro Ghana Limited. I would like to enquire about export produce.";

export const contact = {
  eyebrow: "Contact",
  title: "Inquire about export produce",
  lead: "Order direct from the farm.",
  lede: "Call us or send a message on WhatsApp — we take all orders personally.",
  whatsapp: {
    e164: "233244869488",
    display: "0244 869 488",
    confirmed: true,
    note: "",
    prefilledMessage: whatsappMessage,
    href: "https://wa.me/233244869488",
  },
  phone: {
    display: "0244 869 488",
    href: "tel:+233244869488",
    confirmed: true,
    note: "",
  },
  email: {
    published: true,
    display: "info@havilahagroghana.com",
    href: "mailto:info@havilahagroghana.com",
    confirmed: true,
    note: "",
  },
  address: {
    lines: ["P.O. Box CS 8435", "Tema, Ghana"],
    confirmed: true,
  },
  map: {
    embedUrl: "https://maps.google.com/maps?q=6.270051,0.843154&z=15&output=embed",
    directionsUrl: "https://maps.google.com/?q=6.270051,0.843154",
    title: "Map of the farm",
    emptyTitle: "",
    emptyText: "",
  },
  socials: [
    { id: "linkedin", label: "LinkedIn", href: null },
    { id: "instagram", label: "Instagram", href: null },
    { id: "facebook", label: "Facebook", href: null },
  ],
  socialNote: "",
} as const;

export const forms = {
  inquiry: {
    id: "inquiry",
    intent: "inquiry" as const,
    title: "Send an enquiry",
    lede: "Tell us what you need and we'll get back to you with pricing and availability. Volumes can be approximate.",
    submit: "Send enquiry",
    success:
      "Thank you. Your inquiry has been sent to Havilah Agro. If you need a faster reply, use WhatsApp.",
  },
  quote: {
    id: "quote",
    intent: "quote" as const,
    title: "Send an enquiry",
    lede: "Tell us what you need and we'll get back to you with pricing and availability. Volumes can be approximate.",
    submit: "Send enquiry",
    success:
      "Thank you. Your quote request has been sent to Havilah Agro. If you need a faster reply, use WhatsApp.",
  },
  consent:
    "I agree that Havilah Agro may contact me about this inquiry, and I have read the privacy policy.",
  fallback: "We could not send this by email. Please message us on WhatsApp instead.",
  rateLimit:
    "Too many messages from this connection. Please wait a few minutes, or message us on WhatsApp.",
  sendFailed:
    "We could not send your message just now. Please try again, or message us on WhatsApp.",
  validation: "Please check the highlighted fields.",
  another: "Send another message",
} as const;
