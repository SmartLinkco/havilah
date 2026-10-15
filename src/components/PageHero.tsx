import { visitorCopy } from "@/lib/visitor-copy";

export function PageHero({
  eyebrow,
  title,
  lead,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  lede: string;
}) {
  const text = visitorCopy(lede);
  const leadText = lead ? visitorCopy(lead) : "";
  return (
    <section className="border-b border-green-100 bg-green-100">
      <div className="hero-enter mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-3 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-green-900 sm:text-5xl">
          {title}
        </h1>
        <div className="mt-4 h-0.5 w-16 bg-gold-500" />
        {leadText ? (
          <p className="mt-5 max-w-2xl font-heading text-2xl font-semibold tracking-tight text-green-900">{leadText}</p>
        ) : null}
        {text ? (
          <p className={`max-w-2xl text-lg leading-relaxed text-ink ${leadText ? "mt-3" : "mt-5"}`}>{text}</p>
        ) : null}
      </div>
    </section>
  );
}
