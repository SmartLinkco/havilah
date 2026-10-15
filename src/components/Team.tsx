import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { team, teamSection, type TeamMember } from "@/content/team";

function PersonSilhouette() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14 text-gold-100" aria-hidden="true">
      <circle cx="32" cy="22" r="9" fill="currentColor" />
      <path fill="currentColor" d="M14 56c1.2-13 8-19 18-19s16.8 6 18 19H14z" />
    </svg>
  );
}

function TeamPortrait({ member }: { member: TeamMember }) {
  const frame =
    "relative flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full bg-green-900 ring-2 ring-gold-500";

  if (member.portrait.kind === "photo") {
    return (
      <div className={frame}>
        <Image
          src={member.portrait.src}
          alt={member.portrait.alt}
          fill
          sizes="96px"
          className="object-cover"
        />
      </div>
    );
  }

  if (member.portrait.kind === "initials") {
    return (
      <div className={`${frame} font-heading text-2xl font-semibold tracking-wide text-gold-100`} aria-hidden="true">
        {member.portrait.initials}
      </div>
    );
  }

  return (
    <div className={frame} aria-hidden="true">
      <PersonSilhouette />
    </div>
  );
}

export function TeamSection() {
  return (
    <section id={teamSection.id} className="scroll-mt-24 border-t border-green-100 bg-white" aria-labelledby="team-heading">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Reveal>
          <SectionHeading id="team-heading" title={teamSection.title} lede={teamSection.lede} />
        </Reveal>
        <ul className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {team.map((member, index) => (
            <li key={member.id}>
              <Reveal delay={index * 70} className="h-full">
                <article className="lift-card flex h-full flex-col rounded-2xl border border-green-100 bg-cream p-6 shadow-sm">
                  <TeamPortrait member={member} />
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
