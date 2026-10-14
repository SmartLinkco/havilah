import { FeatureCard } from "@/components/FeatureCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { about } from "@/content/about";

export function CompanyProfile({ showAbout = true }: { showAbout?: boolean }) {
  return (
    <>
      {showAbout ? (
        <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8" aria-labelledby="about-us-heading">
          <Reveal>
            <SectionHeading id="about-us-heading" title={about.title} lede={about.statement} />
          </Reveal>
        </section>
      ) : null}

      <section className={showAbout ? "bg-white" : ""} aria-labelledby="why-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <SectionHeading id="why-heading" title={about.whyTitle} />
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {about.why.map((point, index) => (
              <li key={point}>
                <Reveal delay={index * 70} className="h-full">
                  <article className="lift-card h-full rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
                    <div className="h-1 w-10 rounded-full bg-gold-500" aria-hidden="true" />
                    <h3 className="mt-4 font-heading text-xl font-semibold text-green-900">{point}</h3>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={showAbout ? "" : "bg-white"} aria-labelledby="vision-heading">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-2">
          <Reveal>
            <article className="lift-card h-full rounded-2xl border border-green-100 bg-cream p-8">
              <h2 id="vision-heading" className="font-heading text-2xl font-semibold text-green-900">
                {about.visionTitle}
              </h2>
              <p className="mt-4 text-lg leading-relaxed">{about.vision}</p>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="lift-card h-full rounded-2xl bg-green-900 p-8 text-white">
              <h2 className="font-heading text-2xl font-semibold">{about.missionTitle}</h2>
              <p className="mt-4 text-lg leading-relaxed text-green-100">{about.mission}</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className={showAbout ? "bg-white" : ""} aria-labelledby="values-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <SectionHeading id="values-heading" title={about.valuesTitle} />
          </Reveal>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {about.values.map((value, index) => (
              <li key={value.title}>
                <Reveal delay={index * 70} className="h-full">
                  <FeatureCard title={value.title} text={value.text} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8" aria-labelledby="work-heading">
        <Reveal>
          <SectionHeading id="work-heading" title={about.workTitle} />
        </Reveal>
        <ul className="mt-10 grid gap-5 lg:grid-cols-3">
          {about.work.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 70} className="h-full">
                <FeatureCard title={item.title} text={item.text} />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
