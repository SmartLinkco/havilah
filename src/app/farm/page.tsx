import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { ProduceCard } from "@/components/ProduceCard";
import { Reveal } from "@/components/Reveal";
import { exportSteps, produceIntro, products } from "@/content/produce";
import { forms } from "@/content/contact";
import { pages } from "@/content/site";
import { visitorCopy } from "@/lib/visitor-copy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: pages.farm.title,
  description: pages.farm.description,
  path: pages.farm.path,
});

export default function FarmPage() {
  return (
    <PageTransition>
      <PageHero eyebrow={produceIntro.eyebrow} title={produceIntro.title} lede={produceIntro.lede} />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <ul className="grid gap-5 md:grid-cols-2">
          {products.map((product, index) => (
            <li key={product.id}>
              <Reveal delay={index * 70} className="h-full">
                <ProduceCard product={product} />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-green-900 text-white" aria-labelledby="export-path">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 id="export-path" className="font-heading text-3xl font-semibold">
            From the farm to the buyer
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {exportSteps.map((step, index) => (
              <li key={step.title}>
                <Reveal delay={index * 70} className="h-full">
              <div className="lift-card h-full rounded-2xl bg-white/5 p-5">
                <p className="font-heading text-sm font-semibold tracking-[0.16em] text-gold-100">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-heading text-xl font-semibold">{step.title}</h3>
                {visitorCopy(step.text) ? (
                  <p className="mt-2 text-sm leading-relaxed text-green-100">{visitorCopy(step.text)}</p>
                ) : null}
              </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <Reveal>
          <InquiryForm copy={forms.quote} />
        </Reveal>
      </section>
    </PageTransition>
  );
}
