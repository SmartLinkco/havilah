export const privacy = {
  eyebrow: "Privacy",
  title: "How inquiry details are handled",
  updated: "14 October 2026",
  sections: [
    {
      title: "Who this notice covers",
      paragraphs: [
        "This notice is for the website of Havilah Agro Ghana Limited. The site introduces the farm and collects inquiries. It does not sell produce online.",
      ],
    },
    {
      title: "What the forms collect",
      paragraphs: [
        "The inquiry form and the quote form ask for your name, company, country, email, phone or WhatsApp number, the product you are interested in, an optional volume, your message, and your consent to be contacted about that inquiry.",
        "A hidden field is included to catch automated spam. Leave it blank. If it is filled, the message is discarded.",
        "If Cloudflare Turnstile is switched on, the form also sends a spam-check token to Cloudflare. If it is not configured, that check is skipped.",
      ],
    },
    {
      title: "How messages are sent",
      paragraphs: [
        "Messages are sent with Resend to the inbox the farm chooses. The buyer’s email is set as the reply-to address so the farm can reply directly. A short acknowledgement may be sent to the buyer from the same sender.",
        "Until the email service is configured, the form does not pretend to have delivered the message. It asks you to use WhatsApp instead.",
      ],
    },
    {
      title: "What we do not do",
      paragraphs: [
        "Inquiry details are not sold. They are not used to build an advertising profile. The site has no customer accounts and no checkout.",
      ],
    },
    {
      title: "Analytics",
      paragraphs: [
        "Google Analytics 4 is optional. It loads only when a measurement ID is set for the deployment. If it is on, it receives a page view and an inquiry-submitted event after a successful send. If it is off, those scripts are not included.",
      ],
    },
    {
      title: "WhatsApp, phone and maps",
      paragraphs: [
        "WhatsApp, telephone and map links leave this site and are handled by those services. The contact page publishes a phone number, a WhatsApp link, the email address info@havilahagroghana.com, a postal address and a map.",
      ],
    },
    {
      title: "How long messages are kept",
      paragraphs: [
        "The website does not keep a database of inquiries. Delivery and retention then follow the farm’s email inbox and Resend’s own retention. A basic rate limit is kept in server memory and is cleared when the server restarts.",
      ],
    },
    {
      title: "Asking about your details",
      paragraphs: [
        "To ask about an inquiry you sent, use the phone, email or WhatsApp details on the contact page. This notice will be updated if the farm’s process changes.",
      ],
    },
  ],
} as const;
