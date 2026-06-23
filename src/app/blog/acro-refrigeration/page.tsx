import type { Metadata } from "next";
import AcroClient from "./acro-client";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const title = "Acro Refrigeration — From WordPress to a Fast, SEO-Optimized Platform";
const description =
  "Case study: rebuilding a 50+ year Australian refrigeration company's website. Migrating 100+ blog posts from WordPress to a Next.js + Supabase custom CMS, with a 10x page-speed boost and zero SEO regression.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/acro-refrigeration" },
  openGraph: {
    title,
    description,
    url: "/blog/acro-refrigeration",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `${SITE_URL}/blog/acro-refrigeration`,
  image: `${SITE_URL}/blog/acro-refrigeration/opengraph-image`,
  author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  publisher: { "@type": "Person", name: SITE_NAME },
  keywords: [
    "Next.js",
    "Supabase",
    "Vercel",
    "Custom CMS",
    "SEO",
    "WordPress migration",
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
      name: "Acro Refrigeration",
      item: `${SITE_URL}/blog/acro-refrigeration`,
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
      <AcroClient />
    </>
  );
}
