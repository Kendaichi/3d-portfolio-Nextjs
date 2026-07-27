import type { Metadata } from "next";
import AiBuildersSeoClient from "./ai-builders-seo-client";
import { FAQS } from "./faqs";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const title =
  "Are AI Website Builders Good for SEO? — The Honest Take on Lovable, Bolt & v0";
const description =
  "AI website builders like Lovable, Bolt, and v0 ship UIs in minutes — but are they good for SEO? A field-notes breakdown of where AI builders and AI-generated content help your rankings, where client-rendered SPAs quietly hurt them, and whether SEO is dead or just evolving in 2026.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/ai-website-builders-seo" },
  openGraph: {
    title,
    description,
    url: "/blog/ai-website-builders-seo",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `${SITE_URL}/blog/ai-website-builders-seo`,
  image: `${SITE_URL}/blog/ai-website-builders-seo/opengraph-image`,
  author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  publisher: { "@type": "Person", name: SITE_NAME },
  keywords: [
    "AI Website Builders",
    "Lovable",
    "SEO",
    "AI-Generated Content",
    "Generative Engine Optimization",
    "Answer Engine Optimization",
    "Next.js",
    "Core Web Vitals",
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
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
      name: "Are AI Website Builders Good for SEO?",
      item: `${SITE_URL}/blog/ai-website-builders-seo`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AiBuildersSeoClient />
    </>
  );
}
