import type { Metadata } from "next";
import GuardionClient from "./guardion-client";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const title =
  "Guardion — Building an Elite Protection Brand From the Ground Up in One Week";
const description =
  "Case study: launching Guardion, an elite Australian close-protection and investigations firm. A thin starter site rebuilt on Next.js + Supabase with a custom CMS — bilingual English/Chinese, SEO-first, and shipped in a single week, lifting PageSpeed from 75 to a perfect 100 across performance, accessibility, best practices, and SEO.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/guardion" },
  openGraph: {
    title,
    description,
    url: "/blog/guardion",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `${SITE_URL}/blog/guardion`,
  image: `${SITE_URL}/blog/guardion/opengraph-image`,
  author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  publisher: { "@type": "Person", name: SITE_NAME },
  keywords: [
    "Next.js",
    "Supabase",
    "Vercel",
    "Custom CMS",
    "SEO",
    "Bilingual",
    "Brand launch",
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
      name: "Guardion",
      item: `${SITE_URL}/blog/guardion`,
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
      <GuardionClient />
    </>
  );
}
