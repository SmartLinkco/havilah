import Link from "next/link";
import { Logo } from "@/components/Logo";
import { contact } from "@/content/contact";
import { navItems, pages, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Logo variant="horizontal-reversed" className="h-14 w-auto rounded-md" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-green-100">{site.description}</p>
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
              <a href={contact.whatsapp.href} className="hover:text-white">
                WhatsApp {contact.whatsapp.display}
              </a>
              {contact.whatsapp.confirmed ? null : <span className="mt-1 block text-gold-100">Number to be confirmed</span>}
            </li>
            <li>
              <a href={contact.phone.href} className="hover:text-white">
                {contact.phone.display}
              </a>
            </li>
            <li>
              <a href={contact.email.href} className="hover:text-white">
                {contact.email.display}
              </a>
            </li>
            <li>{contact.address.lines.join(", ")}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-4 text-xs text-green-100 sm:px-8">
          © 2026 {site.name}. Inquiry site. No online sales.
        </p>
      </div>
    </footer>
  );
}
