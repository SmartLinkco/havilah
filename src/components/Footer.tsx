import Link from "next/link";
import { ContactActions } from "@/components/ContactActions";
import { Logo } from "@/components/Logo";
import { contact } from "@/content/contact";
import { navItems, pages, site } from "@/content/site";
import { visitorCopy } from "@/lib/visitor-copy";

export function Footer() {
  return (
    <footer className="bg-green-900 text-white" style={{ viewTransitionName: "site-footer" }}>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Logo variant="horizontal-reversed" className="h-14 w-auto rounded-md" />
          <p className="mt-4 max-w-xs font-heading text-lg font-semibold leading-snug text-white">{site.tagline}</p>
        </div>
        <div>
          <h2 className="font-heading text-lg font-semibold">Visit</h2>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link href={item.path} className="text-sm text-green-100 hover:text-white">
                  {item.navLabel}
                </Link>
              </li>
            ))}
            <li>
              <Link href={pages.privacy.path} className="text-sm text-green-100 hover:text-white">
                {pages.privacy.navLabel}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-heading text-lg font-semibold">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-green-100">
            <li>
              <ContactActions tone="dark" />
            </li>
            <li>{contact.address.lines.filter((line) => visitorCopy(line)).join(", ")}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-green-100 sm:px-8">
          © 2026 {site.name}.
        </p>
      </div>
    </footer>
  );
}
