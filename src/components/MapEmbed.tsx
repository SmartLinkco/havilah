import { contact } from "@/content/contact";

export function MapEmbed() {
  if (!contact.map.embedUrl) {
    return null;
  }

  return (
    <iframe
      title={contact.map.title}
      src={contact.map.embedUrl}
      className="min-h-64 w-full rounded-2xl border border-green-100"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
