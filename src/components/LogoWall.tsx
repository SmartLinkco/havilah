import { partnerEmpty, partners } from "@/content/partners";

export function LogoWall() {
  if (partners.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-soil-400/70 bg-white px-6 py-10 text-center">
        <h3 className="font-heading text-xl font-semibold text-green-900">{partnerEmpty.title}</h3>
        <p className="mx-auto mt-3 max-w-2xl leading-relaxed text-ink">{partnerEmpty.text}</p>
      </div>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {partners.map((partner) => (
        <li key={partner.id} className="rounded-2xl border border-green-100 bg-white p-6">
          {partner.logoSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={partner.logoSrc} alt={partner.logoAlt ?? partner.name} className="h-12 w-auto" />
          ) : null}
          <h3 className="font-heading text-lg font-semibold text-green-900">{partner.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink">{partner.blurb}</p>
        </li>
      ))}
    </ul>
  );
}
