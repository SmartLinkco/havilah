import type { ProduceItem } from "@/content/produce";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { SitePhoto } from "@/components/SitePhoto";
import { visitorCopy, visitorName } from "@/lib/visitor-copy";

export function ProduceCard({ product }: { product: ProduceItem }) {
  const summary = visitorCopy(product.summary);
  const facts = (
    [
      ["Season", product.season],
      ["Export markets", product.markets],
      ["Capacity", product.capacity],
    ] as const
  ).flatMap(([label, value]) => {
    const text = visitorCopy(value);
    return text ? [{ label, text }] : [];
  });
  return (
    <article className="lift-card flex h-full flex-col overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm">
      {product.image ? (
        <SitePhoto
          src={product.image.src}
          alt={product.image.alt}
          sizes="(min-width: 768px) 36rem, 100vw"
          aspectClass="aspect-[16/9]"
          className="rounded-none"
        />
      ) : (
        <PlaceholderImage title={product.name} caption={product.name} className="rounded-none" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-2xl font-semibold text-green-900">{visitorName(product.name)}</h3>
        {summary ? <p className="mt-3 flex-1 leading-relaxed text-ink">{summary}</p> : null}
        {facts.length > 0 ? (
          <dl className="mt-5 space-y-2 text-sm">
            {facts.map((fact) => (
              <div key={fact.label}>
                <dt className="font-semibold text-soil-700">{fact.label}</dt>
                <dd>{fact.text}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </article>
  );
}
