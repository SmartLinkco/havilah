import Link from "next/link";
import type { ProduceItem } from "@/content/produce";
import { SitePhoto } from "@/components/SitePhoto";
import { contact } from "@/content/contact";
import { pages } from "@/content/site";
import { visitorCopy, visitorName } from "@/lib/visitor-copy";

function whatsappOrderHref(productName: string) {
  const text = `Hello Havilah Agro Ghana Limited. I would like to place an order for ${productName}.`;
  return `https://wa.me/${contact.whatsapp.e164}?text=${encodeURIComponent(text)}`;
}

export function ProduceCard({ product }: { product: ProduceItem }) {
  const paragraphs = product.paragraphs.flatMap((paragraph) => {
    const text = visitorCopy(paragraph);
    return text ? [text] : [];
  });
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
  const quoteHref = `${pages.contact.path}?product=${product.id}#inquiry`;

  return (
    <article className="lift-card flex h-full flex-col overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm">
      <SitePhoto
        src={product.image.src}
        alt={product.image.alt}
        sizes="(min-width: 768px) 36rem, 100vw"
        aspectClass="aspect-[16/9]"
        className="rounded-none"
      />
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{visitorName(product.name)}</p>
        <h3 className="mt-2 font-heading text-2xl font-semibold text-green-900">{product.headline}</h3>
        {paragraphs.length > 0 ? (
          <div className="mt-3 flex-1 space-y-3 leading-relaxed text-ink">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}
        {product.benefits.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-2">
            {product.benefits.map((benefit) => (
              <li
                key={benefit}
                className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-900"
              >
                {benefit}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={quoteHref} className="btn btn-primary">
            Request a quote
          </Link>
          <a
            href={whatsappOrderHref(product.name)}
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order on WhatsApp
          </a>
        </div>
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
