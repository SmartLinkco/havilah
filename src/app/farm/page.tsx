import { LegacyEnquiryRedirect } from "@/components/LegacyEnquiryRedirect";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { ProductGroups } from "@/components/ProductGroups";
import { produceIntro } from "@/content/produce";
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
      <LegacyEnquiryRedirect hashes={["#quote"]} />
      <PageHero eyebrow={produceIntro.eyebrow} title={produceIntro.title} lede={produceIntro.lede} />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <ProductGroups />
      </section>
    </PageTransition>
  );
}
