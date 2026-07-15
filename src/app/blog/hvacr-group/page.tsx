import type { Metadata } from "next";
import HvacrGroupClient from "./hvacr-group-client";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const title = "HVACR Group — One Client, Four Websites";
const description =
  "Case study: after rebuilding Acro Refrigeration, the same group came back to redesign three more of their brands — Shelair, HVACR Group, and Koolacube. Migrated off WordPress onto one shared Next.js + Supabase stack, every site scoring 90+ performance and 100 SEO.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/hvacr-group" },
  openGraph: {
    title,
    description,
    url: "/blog/hvacr-group",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `${SITE_URL}/blog/hvacr-group`,
  image: `${SITE_URL}/blog/hvacr-group/opengraph-image`,
  author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  publisher: { "@type": "Person", name: SITE_NAME },
  keywords: [
    "Next.js",
    "Supabase",
    "Vercel",
    "Custom CMS",
    "SEO",
    "WordPress migration",
    "Repeat client",
    "HVACR Group",
    "Shelair",
    "Koolacube",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
    {
      "@type": "ListItem",
      position: 3,
      name: "HVACR Group — One Client, Four Websites",
      item: `${SITE_URL}/blog/hvacr-group`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <HvacrGroupClient />
    </>
  );
}
