import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";

export function JsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: site.name,
    url,
    description: site.description,
    logo: `${url}/brand/logo-primary.svg`,
    image: `${url}/og-image.png`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "GH",
    },
    areaServed: "Export markets",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replaceAll("<", "\\u003c") }}
    />
  );
}
