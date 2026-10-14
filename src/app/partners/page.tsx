import { LogoWall } from "@/components/LogoWall";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { certificationEmpty, certifications, partnersIntro } from "@/content/partners";
import { pages } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: pages.partners.title,
  description: pages.partners.description,
  path: pages.partners.path,
});

export default function PartnersPage() {
  return (
    <PageTransition>
      <PageHero eyebrow={partnersIntro.eyebrow} title={partnersIntro.title} lede={partnersIntro.lede} />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Reveal>
          <LogoWall />
        </Reveal>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
          <h2 className="font-heading text-3xl font-semibold text-green-900">{certificationEmpty.title}</h2>
          {certifications.length === 0 ? (
            <p className="mt-4 max-w-3xl text-lg leading-relaxed">{certificationEmpty.text}</p>
          ) : (
            <ul className="mt-8 grid gap-5 md:grid-cols-2">
              {certifications.map((item) => (
                <li key={item.id} className="rounded-2xl border border-green-100 bg-cream p-6">
                  <h3 className="font-heading text-xl font-semibold text-green-900">{item.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-soil-700">{item.issuer}</p>
                  <p className="mt-3 leading-relaxed">{item.summary}</p>
                </li>
              ))}
            </ul>
          )}
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
