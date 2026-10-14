import { InquiryForm } from "@/components/InquiryForm";
import { MapEmbed } from "@/components/MapEmbed";
import { PageHero } from "@/components/PageHero";
import { contact, forms } from "@/content/contact";
import { pages } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: pages.contact.title,
  description: pages.contact.description,
  path: pages.contact.path,
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow={contact.eyebrow} title={contact.title} lede={contact.lede} />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-green-900">Talk to the farm</h2>
            <ul className="mt-4 space-y-4 text-base">
              <li>
                <a href={contact.whatsapp.href} className="font-semibold text-green-700 underline" target="_blank" rel="noopener noreferrer">
                  WhatsApp {contact.whatsapp.display}
                </a>
                <p className="mt-1 text-sm text-soil-700">{contact.whatsapp.note}</p>
              </li>
              <li>
                <a href={contact.phone.href} className="font-semibold text-green-700 underline">
                  Call {contact.phone.display}
                </a>
                <p className="mt-1 text-sm text-soil-700">{contact.phone.note}</p>
              </li>
              <li>
                <a href={contact.email.href} className="font-semibold text-green-700 underline">
                  {contact.email.display}
                </a>
                <p className="mt-1 text-sm text-soil-700">{contact.email.note}</p>
              </li>
              <li>
                <p className="font-semibold text-green-900">{contact.address.lines.join(", ")}</p>
              </li>
            </ul>
          </div>
          <MapEmbed />
          <div>
            <h2 className="font-heading text-2xl font-semibold text-green-900">Social profiles</h2>
            <p className="mt-2 text-sm text-soil-700">{contact.socialNote}</p>
            <ul className="mt-3 space-y-1">
              {contact.socials.map((social) => (
                <li key={social.id} className="text-ink">
                  {social.href ? (
                    <a href={social.href} className="font-semibold text-green-700 underline">
                      {social.label}
                    </a>
                  ) : (
                    <span>
                      {social.label} <span className="text-soil-700">— link to be confirmed</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <InquiryForm copy={forms.inquiry} />
      </section>
    </>
  );
}
