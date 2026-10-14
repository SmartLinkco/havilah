import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { CompanyProfile } from "@/components/CompanyProfile";
import { LogoWall } from "@/components/LogoWall";
import { PageTransition } from "@/components/PageTransition";
import { ProductGroups } from "@/components/ProductGroups";
import { Reveal } from "@/components/Reveal";
import { HeroVideo } from "@/components/HeroVideo";
import { SectionHeading } from "@/components/SectionHeading";
import { partners } from "@/content/partners";
import { cta, home, pages, site } from "@/content/site";
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
      <section className="relative isolate overflow-hidden border-b border-green-100 bg-green-900 lg:bg-transparent">
        <div className="relative mx-auto grid min-h-[38rem] max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:min-h-0 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
          <div className="hero-enter pointer-events-none relative z-20 lg:col-start-1 lg:row-start-1">
            {home.eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-100 lg:text-soil-700">
                {home.eyebrow}
              </p>
            ) : null}
            <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl lg:text-green-900">
              {site.tagline}
            </h1>
            <div className="mt-4 h-0.5 w-16 bg-gold-500" />
            {visitorCopy(home.lede) ? (
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90 lg:text-ink">{visitorCopy(home.lede)}</p>
            ) : null}
            <div className="pointer-events-auto mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`${pages.contact.path}#inquiry`} className="btn btn-primary">
                {cta.inquiry}
              </Link>
              <Link href={pages.farm.path} className="btn btn-hero">
                {cta.produce}
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 z-0 hero-enter-late lg:relative lg:inset-auto lg:z-0 lg:col-start-2 lg:row-start-1">
            <HeroVideo className="h-full min-h-full lg:aspect-[5/4] lg:rounded-2xl" />
          </div>
        </div>
      </section>

      <CompanyProfile />

      <section className="bg-white" aria-labelledby="produce-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <Reveal>
            <SectionHeading id="produce-heading" eyebrow="Produce" title={home.produceTitle} lede={home.produceLede} />
          </Reveal>
          <div className="mt-10">
            <ProductGroups heading="h3" />
          </div>
        </div>
      </section>

      {partners.length > 0 ? (
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8" aria-labelledby="partners-heading">
        <Reveal>
          <SectionHeading id="partners-heading" eyebrow="Partners" title={home.partnersTitle} lede={home.partnersLede} />
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
