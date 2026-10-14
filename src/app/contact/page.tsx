import { InquiryForm } from "@/components/InquiryForm";
import { MapEmbed } from "@/components/MapEmbed";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { contact, forms } from "@/content/contact";
import { pages } from "@/content/site";
import { visitorCopy } from "@/lib/visitor-copy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: pages.contact.title,
  description: pages.contact.description,
  path: pages.contact.path,
});

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHero eyebrow={contact.eyebrow} title={contact.title} lede={contact.lede} />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-green-900">Talk to the farm</h2>
            <ul className="mt-4 space-y-4 text-base">
              <li>
                <a href={contact.whatsapp.href} className="font-semibold text-green-700 underline" target="_blank" rel="noopener noreferrer">
                  WhatsApp {contact.whatsapp.display}
                </a>
                {visitorCopy(contact.whatsapp.note) ? (
                  <p className="mt-1 text-sm text-soil-700">{visitorCopy(contact.whatsapp.note)}</p>
                ) : null}
              </li>
              <li>
                <a href={contact.phone.href} className="font-semibold text-green-700 underline">
                  Call {contact.phone.display}
                </a>
                {visitorCopy(contact.phone.note) ? (
                  <p className="mt-1 text-sm text-soil-700">{visitorCopy(contact.phone.note)}</p>
                ) : null}
              </li>
              <li>
                <a href={contact.email.href} className="font-semibold text-green-700 underline">
                  {contact.email.display}
                </a>
                {visitorCopy(contact.email.note) ? (
                  <p className="mt-1 text-sm text-soil-700">{visitorCopy(contact.email.note)}</p>
                ) : null}
              </li>
              <li>
                <p className="font-semibold text-green-900">
                  {contact.address.lines.filter((line) => visitorCopy(line)).join(", ")}
                </p>
              </li>
            </ul>
          </div>
          <MapEmbed />
          {contact.socials.some((social) => social.href) ? (
          <div>
            <h2 className="font-heading text-2xl font-semibold text-green-900">Social profiles</h2>
            {visitorCopy(contact.socialNote) ? (
              <p className="mt-2 text-sm text-soil-700">{visitorCopy(contact.socialNote)}</p>
            ) : null}
            <ul className="mt-3 space-y-1">
              {contact.socials.map((social) =>
                social.href ? (
                <li key={social.id} className="text-ink">
                    <a href={social.href} className="font-semibold text-green-700 underline">
                      {social.label}
                    </a>
                </li>
                ) : null,
              )}
            </ul>
          </div>
          ) : null}
        </Reveal>
        <Reveal delay={80}>
          <InquiryForm copy={forms.inquiry} />
        </Reveal>
      </section>
    </PageTransition>
  );
}
