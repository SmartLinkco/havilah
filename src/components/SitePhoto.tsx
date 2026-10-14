import Image from "next/image";

export function SitePhoto({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
  aspectClass = "aspect-[16/9]",
  imageClassName = "object-cover",
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  aspectClass?: string;
  imageClassName?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${aspectClass} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={imageClassName}
      />
    </div>
  );
}
