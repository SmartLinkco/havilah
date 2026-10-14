import { InquiryForm } from "@/components/InquiryForm";
import { PageTransition } from "@/components/PageTransition";
import { Reveal } from "@/components/Reveal";
import { forms } from "@/content/contact";
import { pages } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: pages.enquiry.title,
  description: pages.enquiry.description,
  path: pages.enquiry.path,
});

export default function EnquiryPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <Reveal>
          <InquiryForm copy={forms.inquiry} pageHeading />
        </Reveal>
      </section>
    </PageTransition>
  );
}
