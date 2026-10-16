import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { directors, founder, teamSection, type TeamPortrait } from "@/content/team";
import { pages } from "@/content/site";

function PersonSilhouette({ large = false }: { large?: boolean }) {
  return (
    <svg viewBox="0 0 64 64" className={large ? "h-16 w-16 text-gold-100" : "h-14 w-14 text-gold-100"} aria-hidden="true">
      <circle cx="32" cy="22" r="9" fill="currentColor" />
      <path fill="currentColor" d="M14 56c1.2-13 8-19 18-19s16.8 6 18 19H14z" />
    </svg>
  );
}

export function TeamPortrait({ portrait, size = "md" }: { portrait: TeamPortrait; size?: "md" | "lg" }) {
  const frame =
    size === "lg"
      ? "relative flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full bg-green-900 font-heading text-4xl font-semibold tracking-wide text-gold-100 ring-2 ring-gold-500"
      : "relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full bg-green-900 font-heading text-2xl font-semibold tracking-wide text-gold-100 ring-2 ring-gold-500";

  if (portrait.kind === "photo") {
    return (
      <div className={frame}>
        <Image src={portrait.src} alt={portrait.alt} fill sizes={size === "lg" ? "128px" : "96px"} className="object-cover" />
      </div>
    );
  }

  if (portrait.kind === "initials") {
    return (
      <div className={frame} aria-hidden="true">
        {portrait.initials}
      </div>
    );
  }

  return (
    <div className={frame} aria-hidden="true">
      <PersonSilhouette large={size === "lg"} />
    </div>
  );
}

export function TeamSection() {
  return (
    <section id={teamSection.id} className="scroll-mt-24 bg-white" aria-labelledby="team-heading">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Reveal>
          <SectionHeading id="team-heading" title={teamSection.title} lede={teamSection.lede} />
        </Reveal>
        <div id={founder.id} className="scroll-mt-24 mt-10 grid items-center gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
          <Reveal>
            <TeamPortrait portrait={founder.portrait} size="lg" />
          </Reveal>
          <Reveal delay={80}>
            <h3 className="font-heading text-3xl font-semibold tracking-tight text-green-900">{founder.name}</h3>
            <p className="mt-2 text-sm font-semibold tracking-wide text-soil-700">{founder.role}</p>
            <div className="mt-5 max-w-3xl space-y-4 text-lg leading-relaxed text-ink">
              {founder.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {directors.map((member, index) => (
            <li key={member.id}>
              <Reveal delay={index * 70} className="h-full">
                <article className="lift-card flex h-full flex-col rounded-2xl border border-green-100 bg-cream p-6 shadow-sm">
                  <TeamPortrait portrait={member.portrait} />
                  <h3 className="mt-5 font-heading text-xl font-semibold text-green-900">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold tracking-wide text-soil-700">{member.role}</p>
                  <p className="mt-4 leading-relaxed text-ink">{member.bio}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FounderTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-4 sm:px-8" aria-labelledby="founder-teaser-heading">
      <Reveal>
        <div className="flex flex-col gap-6 rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
          <TeamPortrait portrait={founder.portrait} />
          <div>
            <h2 id="founder-teaser-heading" className="font-heading text-3xl font-semibold tracking-tight text-green-900">
              {founder.teaserTitle}
            </h2>
            <p className="mt-3 font-heading text-xl font-semibold text-green-900">{founder.name}</p>
            <p className="mt-1 text-sm font-semibold tracking-wide text-soil-700">{founder.role}</p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink">{founder.teaser}</p>
            <Link href={`${pages.about.path}#${founder.id}`} className="btn btn-secondary mt-6">
              Read full bio
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
