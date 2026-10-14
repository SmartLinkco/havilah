import { contact } from "@/content/contact";

export function WhatsAppButton() {
  return (
    <a
      href={contact.whatsapp.href}
      className="btn btn-primary fixed right-4 bottom-4 z-40 shadow-lg sm:right-6 sm:bottom-6"
      style={{ viewTransitionName: "site-whatsapp" }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 14.04c-.24.68-1.4 1.3-1.94 1.38-.5.07-1.12.1-1.81-.11-.42-.13-.95-.3-1.64-.59-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.27.64-.39 1.02-.39.12 0 .23 0 .33.01.3.01.45.03.65.5.24.58.83 2 .9 2.15.07.14.12.32.02.51-.09.19-.14.31-.27.48-.14.16-.29.36-.41.49-.14.14-.28.28-.12.55.16.26.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.17 1.34.26.13.42.11.57-.07.16-.19.66-.77.84-1.03.17-.27.35-.22.58-.13.24.08 1.5.71 1.76.84.26.13.43.19.49.3.07.11.07.64-.17 1.32Z" />
      </svg>
      WhatsApp
    </a>
  );
}
