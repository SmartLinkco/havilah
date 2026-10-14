import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { ProductGroups } from "@/components/ProductGroups";
import { Reveal } from "@/components/Reveal";
import { produceIntro } from "@/content/produce";
import { forms } from "@/content/contact";
import { pages } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: pages.farm.title,
  description: pages.farm.description,
  path: pages.farm.path,
});

export default function FarmPage() {
  return (
    <PageTransition>
      <PageHero eyebrow={produceIntro.eyebrow} title={produceIntro.title} lede={produceIntro.lede} />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <ProductGroups />
      </section>
      <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
        <Reveal>
          <InquiryForm copy={forms.quote} />
        </Reveal>
      </section>
    </PageTransition>
  );
}
