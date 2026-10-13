import Link from "next/link";
import { cta, home, pages } from "@/content/site";

export function CtaBand() {
  return (
    <section className="bg-green-700 text-white" aria-labelledby="cta-heading">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <h2 id="cta-heading" className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {home.ctaTitle}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-green-100">{home.ctaText}</p>
        </div>
        <Link href={`${pages.contact.path}#inquiry`} className="btn btn-gold">
          {cta.inquiry}
        </Link>
      </div>
    </section>
  );
}
