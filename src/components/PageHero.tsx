export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="border-b border-green-100 bg-green-100">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-green-900 sm:text-5xl">
          {title}
        </h1>
        <div className="mt-4 h-0.5 w-16 bg-gold-500" />
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink">{lede}</p>
      </div>
    </section>
  );
}
