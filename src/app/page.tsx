import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { FeatureCard } from "@/components/FeatureCard";
import { FounderTeaser } from "@/components/Team";
import { LogoWall } from "@/components/LogoWall";
import { PageTransition } from "@/components/PageTransition";
import { ProductGroups } from "@/components/ProductGroups";
import { Reveal } from "@/components/Reveal";
import { HeroVideo } from "@/components/HeroVideo";
import { SectionHeading } from "@/components/SectionHeading";
import { StatStrip } from "@/components/StatStrip";
import { partners } from "@/content/partners";
import { cta, highlights, home, pages } from "@/content/site";
import { visitorCopy } from "@/lib/visitor-copy";
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
      <section className="relative isolate overflow-hidden border-b border-green-100 bg-green-900">
        <div className="absolute inset-0 z-0 hero-enter-late">
          <HeroVideo className="h-full min-h-full" />
        </div>
        <div className="pointer-events-none relative z-20 mx-auto flex min-h-[38rem] max-w-6xl items-center px-5 py-16 sm:px-8 lg:min-h-[46rem] lg:py-24">
          <div className="hero-enter max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-100">{home.eyebrow}</p>
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {home.heroLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <div className="mt-4 h-0.5 w-16 bg-gold-500" />
            {visitorCopy(home.lede) ? (
              <p className="mt-5 max-w-xl text-justify text-lg leading-relaxed text-white/90 hyphens-none [-webkit-hyphens:none] break-normal [text-align-last:left]">
                {visitorCopy(home.lede)}
              </p>
            ) : null}
            <div className="pointer-events-auto mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={pages.enquiry.path} className="btn btn-primary">
                {cta.inquiry}
              </Link>
              <Link href={pages.farm.path} className="btn btn-hero">
                {cta.produce}
              </Link>
            </div>
          </div>
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

      <FounderTeaser />

      <section className="bg-white" aria-labelledby="produce-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <SectionHeading id="produce-heading" title={home.produceTitle} lede={home.produceLede} />
          </Reveal>
          <div className="mt-10">
            <ProductGroups heading="h3" />
          </div>
        </div>
      </section>

      <StatStrip />

      {partners.length > 0 ? (
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8" aria-labelledby="partners-heading">
        <Reveal>
          <SectionHeading id="partners-heading" title={home.partnersTitle} lede={home.partnersLede} />
        </Reveal>
        <Reveal className="mt-8" delay={80}>
          <LogoWall />
        </Reveal>
      </section>
      ) : null}

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
