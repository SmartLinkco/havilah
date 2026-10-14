import { GalleryGrid } from "@/components/GalleryGrid";
import { PageHero } from "@/components/PageHero";
import { PageTransition } from "@/components/PageTransition";
import { galleryIntro } from "@/content/gallery";
import { pages } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: pages.gallery.title,
  description: pages.gallery.description,
  path: pages.gallery.path,
});

export default function GalleryPage() {
  return (
    <PageTransition>
      <PageHero eyebrow={galleryIntro.eyebrow} title={galleryIntro.title} lede={galleryIntro.lede} />
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <GalleryGrid />
      </section>
    </PageTransition>
  );
}
