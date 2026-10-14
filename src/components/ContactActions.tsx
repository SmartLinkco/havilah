import { contact } from "@/content/contact";

export function ContactActions({ tone = "light" }: { tone?: "light" | "dark" }) {
  const numberClass = tone === "dark" ? "text-sm text-green-100" : "font-semibold text-green-900";
  const buttonClass =
    tone === "dark"
      ? "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10"
      : "inline-flex h-9 w-9 items-center justify-center rounded-full border border-green-700 text-green-700 hover:bg-green-100";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className={numberClass}>{contact.phone.display}</span>
      <a
        href={contact.whatsapp.href}
        className={buttonClass}
        aria-label="WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsAppIcon />
      </a>
      <a href={contact.phone.href} className={buttonClass} aria-label="Call">
        <PhoneIcon />
      </a>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 14.04c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.81-.11-.42-.13-.95-.3-1.64-.59-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.27.64-.39 1.02-.39.12 0 .23 0 .33.01.3.01.45.03.65.5.24.58.83 2 .9 2.15.07.14.12.32.02.51-.09.19-.14.31-.27.48-.14.16-.29.36-.41.49-.14.14-.28.28-.12.55.16.26.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.26.13.42.11.57-.07.16-.19.66-.77.84-1.03.17-.27.35-.22.58-.13.24.08 1.5.71 1.76.84.26.13.43.19.49.3.07.11.07.64-.17 1.32Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.4 11.4 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 7a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .57 3.57 1 1 0 0 1-.25 1.02l-2.2 2.2Z" />
    </svg>
  );
}
