import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FeatureCard } from "@/components/FeatureCard";
import { LogoWall } from "@/components/LogoWall";
import { PageTransition } from "@/components/PageTransition";
import { ProduceCard } from "@/components/ProduceCard";
import { Reveal } from "@/components/Reveal";
import { SitePhoto } from "@/components/SitePhoto";
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
    <PageTransition>
      <section className="border-b border-green-100">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div className="hero-enter">
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
          <SitePhoto
            src={home.hero.src}
            alt={home.hero.alt}
            sizes="(min-width: 1024px) 32rem, 100vw"
            priority
            aspectClass="aspect-[4/5] sm:aspect-[5/4]"
            className="hero-enter-late rounded-2xl"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8" aria-labelledby="intro-heading">
        <Reveal>
          <SectionHeading id="intro-heading" title={home.introTitle} lede={home.intro} />
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <FeatureCard title={item.title} text={item.text} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-white" aria-labelledby="produce-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <SectionHeading id="produce-heading" eyebrow="Produce" title={home.produceTitle} lede={home.produceLede} />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {products.slice(0, 4).map((product, index) => (
              <Reveal key={product.id} delay={index * 70}>
                <ProduceCard product={product} />
              </Reveal>
            ))}
          </div>
          <Link href={`${pages.farm.path}#quote`} className="btn btn-primary mt-8">
            {cta.quote}
          </Link>
        </div>
      </section>

      <StatStrip />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8" aria-labelledby="partners-heading">
        <Reveal>
          <SectionHeading id="partners-heading" eyebrow="Partners" title={home.partnersTitle} lede={home.partnersLede} />
        </Reveal>
        <Reveal className="mt-8" delay={80}>
          <LogoWall />
        </Reveal>
      </section>

      <section className="bg-green-100" aria-labelledby="approach-heading">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal>
            <SectionHeading
              id="approach-heading"
              eyebrow="Sustainability"
              title={home.sustainabilityTitle}
              lede={home.sustainabilityLede}
            />
          </Reveal>
          <Reveal delay={80}>
            <Link href={pages.sustainability.path} className="btn btn-primary">
              {cta.sustainability}
            </Link>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <CtaBand />
      </Reveal>
    </PageTransition>
  );
}
