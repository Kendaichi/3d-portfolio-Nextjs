import type { Metadata } from "next";
import Acro90DaysClient from "./acro-90-days-client";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const title = "Acro Refrigeration — 90 Days After the Rebuild";
const description =
  "Ninety days after relaunching Acro Refrigeration on Next.js + Supabase: visitors more than doubled, 91.5K Google search impressions, a 95 PageSpeed score that held steady, and AI assistants now discovering the site. The receipts, in real numbers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/acro-refrigeration-90-days" },
  openGraph: {
    title,
    description,
    url: "/blog/acro-refrigeration-90-days",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `${SITE_URL}/blog/acro-refrigeration-90-days`,
  image: `${SITE_URL}/blog/acro-refrigeration-90-days/opengraph-image`,
  author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  publisher: { "@type": "Person", name: SITE_NAME },
  keywords: [
    "Next.js",
    "Supabase",
    "Vercel",
    "SEO",
    "Core Web Vitals",
    "Google Search Console",
    "Web Analytics",
    "WordPress migration",
    "Results",
    "Acro Refrigeration",
    "Agentic Browsing",
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
      name: "Acro Refrigeration — 90 Days After the Rebuild",
      item: `${SITE_URL}/blog/acro-refrigeration-90-days`,
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
      <Acro90DaysClient />
    </>
  );
}
