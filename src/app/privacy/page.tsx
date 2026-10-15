import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/content/contact";
import { privacy } from "@/content/privacy";
import { pages } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: pages.privacy.title,
  description: pages.privacy.description,
  path: pages.privacy.path,
});

function PolicyContact() {
  return (
    <ul className="mt-4 space-y-2">
      <li>
        <a href={contact.email.href} className="font-semibold text-green-800 underline">
          {contact.email.display}
        </a>
      </li>
      <li>
        <a href={contact.phone.href} className="font-semibold text-green-800 underline">
          {contact.phone.display}
        </a>
      </li>
      <li>{contact.address.lines.join(", ")}</li>
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <PageTransition>
      <PageHero title={privacy.title} lead={`Last updated ${privacy.updated}.`} lede={privacy.lede} />
      <div className="mx-auto max-w-3xl space-y-10 px-5 py-16 sm:px-8">
        {privacy.sections.map((section, index) => (
          <Reveal key={section.title} delay={index * 40}>
            <section>
              <h2 className="font-heading text-2xl font-semibold text-green-900">{section.title}</h2>
              <div className="mt-3 space-y-3 leading-relaxed">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.contact ? <PolicyContact /> : null}
            </section>
          </Reveal>
        ))}
      </div>
    </PageTransition>
  );
}
