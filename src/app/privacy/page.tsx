import { PageHero } from "@/components/PageHero";
import { privacy } from "@/content/privacy";
import { pages } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: pages.privacy.title,
  description: pages.privacy.description,
  path: pages.privacy.path,
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow={privacy.eyebrow}
        title={privacy.title}
        lede={`Last updated ${privacy.updated}. This notice matches the inquiry site as it is built today.`}
      />
      <div className="mx-auto max-w-3xl space-y-10 px-5 py-16 sm:px-8">
        {privacy.sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-heading text-2xl font-semibold text-green-900">{section.title}</h2>
            <div className="mt-3 space-y-3 leading-relaxed">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
