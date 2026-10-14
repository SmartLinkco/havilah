import { contact } from "@/content/contact";

export function MapEmbed() {
  if (!contact.map.embedUrl) {
    return (
      <div className="flex min-h-64 flex-col justify-end rounded-2xl border border-dashed border-soil-400/70 bg-green-100 p-6">
        <h3 className="font-heading text-xl font-semibold text-green-900">{contact.map.emptyTitle}</h3>
        <p className="mt-2 max-w-md leading-relaxed text-ink">{contact.map.emptyText}</p>
        <p className="mt-4 text-sm text-soil-700">{contact.address.lines.join(", ")}</p>
      </div>
    );
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
