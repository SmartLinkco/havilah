import Link from "next/link";
import { ContactActions } from "@/components/ContactActions";
import { LegacyEnquiryRedirect } from "@/components/LegacyEnquiryRedirect";
import { MapEmbed } from "@/components/MapEmbed";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { contact } from "@/content/contact";
import { pages } from "@/content/site";
import { visitorCopy } from "@/lib/visitor-copy";
import { pageMetadata } from "@/lib/metadata";

const legacyHashes = ["#inquiry", "#quote"];

export const metadata = pageMetadata({
  title: pages.contact.title,
  description: pages.contact.description,
  path: pages.contact.path,
});

export default function ContactPage() {
  return (
    <PageTransition>
      <LegacyEnquiryRedirect hashes={legacyHashes} includeProduct />
      <PageHero eyebrow={contact.eyebrow} title={contact.title} lede={contact.lede} />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <Reveal className="max-w-xl space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-green-900">Talk to the farm</h2>
            <div className="mt-4">
              <ContactActions />
            </div>
            <p className="mt-4 font-semibold text-green-900">
              {contact.address.lines.filter((line) => visitorCopy(line)).join(", ")}
            </p>
          </div>
          <MapEmbed />
          <Link href={pages.enquiry.path} className="btn btn-primary">
            {pages.enquiry.title}
          </Link>
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
      </section>
    </PageTransition>
  );
}
