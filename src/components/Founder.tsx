import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { about } from "@/content/about";
import { pages } from "@/content/site";

export function FounderMark({ size = "md" }: { size?: "md" | "lg" }) {
  const dimensions = size === "lg" ? "h-32 w-32 text-4xl" : "h-24 w-24 text-3xl";
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-green-900 font-heading font-semibold tracking-wide text-gold-100 ring-2 ring-gold-500 ${dimensions}`}
      aria-hidden="true"
    >
      {about.founder.initials}
    </div>
  );
}

export function FounderSection() {
  const founder = about.founder;
  return (
    <section id={founder.id} className="scroll-mt-24 bg-white" aria-labelledby="founder-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[auto_1fr] lg:gap-12">
        <Reveal>
          <FounderMark size="lg" />
        </Reveal>
        <Reveal delay={80}>
          <h2 id="founder-heading" className="font-heading text-3xl font-semibold tracking-tight text-green-900 sm:text-4xl">
            {founder.title}
          </h2>
          <div className="mt-4 h-0.5 w-16 bg-gold-500" />
          <p className="mt-5 font-heading text-2xl font-semibold text-green-900">{founder.name}</p>
          <p className="mt-1 text-sm font-semibold tracking-wide text-soil-700">{founder.role}</p>
          <div className="mt-5 max-w-3xl space-y-4 text-lg leading-relaxed text-ink">
            {founder.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FounderTeaser() {
  const founder = about.founder;
  return (
    <section className="mx-auto max-w-6xl px-5 pb-4 sm:px-8" aria-labelledby="founder-teaser-heading">
      <Reveal>
        <div className="flex flex-col gap-6 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
          <FounderMark />
          <div>
            <h2 id="founder-teaser-heading" className="font-heading text-3xl font-semibold tracking-tight text-green-900">
              {founder.title}
            </h2>
            <p className="mt-3 font-heading text-xl font-semibold text-green-900">{founder.name}</p>
            <p className="mt-1 text-sm font-semibold tracking-wide text-soil-700">{founder.role}</p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink">{founder.teaser}</p>
            <Link href={`${pages.about.path}#${founder.id}`} className="btn btn-secondary mt-6">
              {founder.title}
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
