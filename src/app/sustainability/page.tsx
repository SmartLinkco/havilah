import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { sustainability } from "@/content/sustainability";
import { pages } from "@/content/site";
import { visitorCopy } from "@/lib/visitor-copy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: pages.sustainability.title,
  description: pages.sustainability.description,
  path: pages.sustainability.path,
});

export default function SustainabilityPage() {
  return (
    <PageTransition>
      <PageHero eyebrow={sustainability.eyebrow} title={sustainability.title} lede={sustainability.lede} />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold text-green-900">{sustainability.practicesTitle}</h2>
        </Reveal>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sustainability.practices.map((practice, index) => {
            const text = visitorCopy(practice.text);
            if (!text) return null;
            return (
            <li key={practice.title}>
              <Reveal delay={index * 70} className="h-full">
            <article className="lift-card h-full rounded-2xl border border-green-100 bg-white p-6">
              <div className="h-1 w-10 rounded-full bg-gold-500" aria-hidden="true" />
              <h3 className="mt-4 font-heading text-xl font-semibold text-green-900">{practice.title}</h3>
              <p className="mt-2 leading-relaxed">{text}</p>
            </article>
              </Reveal>
            </li>
            );
          })}
        </ul>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
          <h2 className="font-heading text-3xl font-semibold text-green-900">{sustainability.commitmentsTitle}</h2>
          <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-5 text-lg">
            {sustainability.commitments.map((item) => {
              const text = visitorCopy(item);
              return text ? <li key={item}>{text}</li> : null;
            })}
          </ul>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
