import { CompanyProfile } from "@/components/CompanyProfile";
import { FounderSection } from "@/components/Founder";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { SitePhoto } from "@/components/SitePhoto";
import { about } from "@/content/about";
import { pages } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: pages.about.title,
  description: pages.about.description,
  path: pages.about.path,
});

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="border-b border-green-100 bg-green-100">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <h1 className="max-w-3xl font-heading text-4xl font-semibold tracking-tight text-green-900 sm:text-5xl">
              {about.title}
            </h1>
            <div className="mt-4 h-0.5 w-16 bg-gold-500" />
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink">{about.statement}</p>
          </Reveal>
          <Reveal delay={80}>
            <SitePhoto
              src={about.storyImage.src}
              alt={about.storyImage.alt}
              sizes="(min-width: 1024px) 28rem, 100vw"
              className="rounded-2xl"
            />
          </Reveal>
        </div>
      </section>
      <FounderSection />
      <CompanyProfile showAbout={false} />
    </PageTransition>
  );
}
