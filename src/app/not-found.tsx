import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";
import { pages, site } from "@/content/site";

export default function NotFound() {
  return (
    <PageTransition>
    <section className="hero-enter mx-auto max-w-2xl px-5 py-24 text-center sm:px-8">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-heading text-4xl font-semibold text-green-900">That page is not on the farm site</h1>
      <p className="mt-4 text-lg">
        The address may be mistyped. {site.shortName} keeps its pages short: the farm, the approach, and a way to inquire.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href={pages.home.path} className="btn btn-primary">
          Back to home
        </Link>
        <Link href={`${pages.contact.path}#inquiry`} className="btn btn-secondary">
          Make an inquiry
        </Link>
      </div>
    </section>
    </PageTransition>
  );
}
