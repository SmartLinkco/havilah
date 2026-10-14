import { contact } from "@/content/contact";

export function MapEmbed() {
  if (!contact.map.embedUrl) {
    return null;
  }

  return (
    <div>
      <iframe
        title={contact.map.title}
        src={contact.map.embedUrl}
        className="min-h-64 w-full rounded-2xl border border-green-100"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={contact.map.directionsUrl}
        className="mt-3 inline-block font-semibold text-green-700 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get directions
      </a>
    </div>
  );
}
