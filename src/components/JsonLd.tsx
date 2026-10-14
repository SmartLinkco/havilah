import { contact } from "@/content/contact";
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
    telephone: "+233244869488",
    address: {
      "@type": "PostalAddress",
      postOfficeBoxNumber: "CS 8435",
      addressLocality: "Tema",
      addressCountry: "GH",
    },
    hasMap: contact.map.directionsUrl,
    areaServed: "Ghana and international markets",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replaceAll("<", "\\u003c") }}
    />
  );
}
