"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { pages } from "@/content/site";

export function LegacyEnquiryRedirect({
  hashes,
  includeProduct = false,
}: {
  hashes: readonly string[];
  includeProduct?: boolean;
}) {
  const router = useRouter();
  const hashKey = hashes.join(",");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");
    const hash = window.location.hash;
    const legacyHash = hashKey.split(",").includes(hash);
    if (!legacyHash && !(includeProduct && product)) return;
    const target = new URLSearchParams();
    if (product) target.set("product", product);
    const query = target.toString();
    router.replace(query ? `${pages.enquiry.path}?${query}` : pages.enquiry.path);
  }, [hashKey, includeProduct, router]);

  return null;
}
