export function PlaceholderImage({
  title,
  caption,
  className = "",
  aspectClass = "aspect-[4/3]",
}: {
  title: string;
  caption?: string;
  className?: string;
  aspectClass?: string;
}) {
  return (
    <figure className={`overflow-hidden rounded-2xl ${className}`}>
      <div className={`photo-tile relative ${aspectClass}`}>
        <div className="absolute inset-0 bg-green-900/10" />
        <figcaption className="absolute inset-x-4 bottom-4 rounded-xl bg-cream/95 px-4 py-3 text-ink shadow-sm">
          <span className="block font-heading text-base font-semibold text-green-900">Photo coming</span>
          <span className="mt-1 block text-sm leading-snug text-soil-700">
            {caption ?? title}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}
