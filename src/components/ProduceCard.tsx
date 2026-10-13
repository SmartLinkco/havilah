import type { ProduceItem } from "@/content/produce";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export function ProduceCard({ product }: { product: ProduceItem }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-green-100 bg-white shadow-sm">
      <PlaceholderImage title={product.name} caption={product.name} className="rounded-none" />
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">Example product</p>
        <h3 className="mt-2 font-heading text-2xl font-semibold text-green-900">{product.name}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-ink">{product.summary}</p>
        <dl className="mt-5 space-y-2 text-sm">
          <div>
            <dt className="font-semibold text-soil-700">Season</dt>
            <dd>{product.season}</dd>
          </div>
          <div>
            <dt className="font-semibold text-soil-700">Export markets</dt>
            <dd>{product.markets}</dd>
          </div>
          <div>
            <dt className="font-semibold text-soil-700">Capacity</dt>
            <dd>{product.capacity}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
