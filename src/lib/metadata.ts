import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { visitorCopy } from "@/lib/visitor-copy";

const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Havilah Agro Ghana Limited. Grown in Ghana. Trusted worldwide.",
} as const;

export function pageMetadata(input: {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
}): Metadata {
  const canonical = new URL(input.path, getSiteUrl()).toString();
  const description = visitorCopy(input.description);

  return {
    title: input.absolute ? { absolute: input.title } : input.title,
    description,
    alternates: { canonical: input.path },
    openGraph: {
      title: input.title,
      description,
      url: canonical,
      images: [ogImage],
    },
  };
}
