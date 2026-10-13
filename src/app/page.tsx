import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FeatureCard } from "@/components/FeatureCard";
import { LogoWall } from "@/components/LogoWall";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ProduceCard } from "@/components/ProduceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { StatStrip } from "@/components/StatStrip";
import { products } from "@/content/produce";
import { cta, highlights, home, pages, site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: pages.home.title,
  description: pages.home.description,
  path: pages.home.path,
  absolute: true,
});

export default function HomePage() {
  return (
    <>
      <section className="border-b border-green-100">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div>
            <p className="eyebrow">{home.eyebrow}</p>
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-green-900 sm:text-5xl lg:text-6xl">
              {site.tagline}
            </h1>
            <div className="mt-4 h-0.5 w-16 bg-gold-500" />
            <p className="mt-5 max-w-xl text-lg leading-relaxed">{home.lede}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`${pages.contact.path}#inquiry`} className="btn btn-primary">
                {cta.inquiry}
              </Link>
              <Link href={pages.farm.path} className="btn btn-secondary">
                {cta.produce}
              </Link>
            </div>
          </div>
          <PlaceholderImage
            title="Farm hero"
            caption="Hero photograph of the farm. Photo coming."
            aspectClass="aspect-[4/5] sm:aspect-[5/4]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8" aria-labelledby="intro-heading">
        <SectionHeading id="intro-heading" title={home.introTitle} lede={home.intro} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {highlights.map((item) => (
            <FeatureCard key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </section>

      <section className="bg-white" aria-labelledby="produce-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <SectionHeading id="produce-heading" eyebrow="Produce" title={home.produceTitle} lede={home.produceLede} />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {products.slice(0, 4).map((product) => (
              <ProduceCard key={product.id} product={product} />
            ))}
          </div>
          <Link href={`${pages.farm.path}#quote`} className="btn btn-primary mt-8">
            {cta.quote}
          </Link>
        </div>
      </section>

      <StatStrip />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8" aria-labelledby="partners-heading">
        <SectionHeading id="partners-heading" eyebrow="Partners" title={home.partnersTitle} lede={home.partnersLede} />
        <div className="mt-8">
          <LogoWall />
        </div>
      </section>

      <section className="bg-green-100" aria-labelledby="approach-heading">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <SectionHeading
            id="approach-heading"
            eyebrow="Sustainability"
            title={home.sustainabilityTitle}
            lede={home.sustainabilityLede}
          />
          <div>
            <Link href={pages.sustainability.path} className="btn btn-primary">
              {cta.sustainability}
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
