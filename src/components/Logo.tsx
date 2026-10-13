type LogoVariant = "horizontal" | "horizontal-reversed" | "primary" | "reversed";

const files: Record<LogoVariant, { src: string; width: number; height: number }> = {
  horizontal: { src: "/brand/logo-horizontal.svg", width: 536, height: 120 },
  "horizontal-reversed": {
    src: "/brand/logo-horizontal-reversed.svg",
    width: 536,
    height: 120,
  },
  primary: { src: "/brand/logo-primary.svg", width: 500, height: 300 },
  reversed: { src: "/brand/logo-reversed.svg", width: 500, height: 300 },
};

export function Logo({
  variant,
  className,
}: {
  variant: LogoVariant;
  className?: string;
}) {
  const file = files[variant];
  return (
    // Brand SVGs stay vectors. Rasterising them through the image optimiser softens the mark.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={file.src}
      alt="Havilah Agro Ghana Limited"
      width={file.width}
      height={file.height}
      className={className}
    />
  );
}
