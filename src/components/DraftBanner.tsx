import { site } from "@/content/site";

export function DraftBanner() {
  return (
    <div className="bg-gold-100 text-ink">
      <p className="mx-auto max-w-6xl px-5 py-3 text-sm leading-relaxed sm:px-8">{site.draftNotice}</p>
    </div>
  );
}
