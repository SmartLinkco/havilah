import Link from "next/link";
import { Logo } from "@/components/Logo";
import { PageHero } from "@/components/PageHero";
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
    <>
      <PageHero eyebrow={about.eyebrow} title={about.title} lede={about.lede} />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h2 className="font-heading text-3xl font-semibold text-green-900">{about.storyTitle}</h2>
          <div className="mt-4 h-0.5 w-16 bg-gold-500" />
          <div className="mt-5 space-y-4 text-lg leading-relaxed">
            {about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <Logo variant="primary" className="h-auto w-48" />
          <SitePhoto
            src={about.storyImage.src}
            alt={about.storyImage.alt}
            sizes="(min-width: 1024px) 28rem, 100vw"
            className="rounded-2xl"
          />
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-2">
          <article className="rounded-2xl bg-green-900 p-8 text-white">
            <h2 className="font-heading text-2xl font-semibold">{about.missionTitle}</h2>
            <p className="mt-4 text-lg leading-relaxed text-green-100">{about.mission}</p>
          </article>
          <article className="rounded-2xl border border-green-100 bg-cream p-8">
            <h2 className="font-heading text-2xl font-semibold text-green-900">{about.visionTitle}</h2>
            <p className="mt-4 text-lg leading-relaxed">{about.vision}</p>
          </article>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-heading text-3xl font-semibold text-green-900">{about.teamTitle}</h2>
        <p className="mt-4 max-w-2xl text-lg">{about.teamLede}</p>
        <ul className="mt-8 grid gap-5 md:grid-cols-3">
          {about.team.map((person) => (
            <li key={person.id} className="overflow-hidden rounded-2xl border border-green-100 bg-white">
              <SitePhoto
                src={person.image.src}
                alt={person.image.alt}
                sizes="(min-width: 768px) 22rem, 100vw"
                aspectClass="aspect-square"
                imageClassName="object-cover object-[center_30%]"
              />
              <div className="p-5">
                <h3 className="font-heading text-xl font-semibold text-green-900">{person.role}</h3>
                <p className="mt-2 text-sm leading-relaxed">{person.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="bg-green-100">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-heading text-3xl font-semibold text-green-900">{about.approachTitle}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed">{about.approach}</p>
          <Link href={pages.sustainability.path} className="btn btn-primary mt-8">
            Read the sustainability page
          </Link>
        </div>
      </section>
    </>
  );
}
