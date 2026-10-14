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
      <div className={`photo-tile relative ${aspectClass}`} role="img" aria-label={caption ?? title}>
        <div className="absolute inset-0 bg-green-900/10" />
      </div>
    </figure>
  );
}
