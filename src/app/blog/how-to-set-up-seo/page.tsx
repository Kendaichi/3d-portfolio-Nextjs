import type { Metadata } from "next";
import SeoSetupClient from "./seo-setup-client";
import { FAQS } from "./faqs";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const title =
  "How to Set Up SEO: From Your Website to Social Media & LinkedIn";
const description =
  "A practical, step-by-step guide to setting up SEO across every channel — your website's technical and on-page foundation, Google Business Profile, social media profiles, LinkedIn, YouTube and directories, and how to get cited by AI. Everything you need to get found, plus the 'People also ask' answers.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/how-to-set-up-seo" },
  openGraph: {
    title,
    description,
    url: "/blog/how-to-set-up-seo",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `${SITE_URL}/blog/how-to-set-up-seo`,
  image: `${SITE_URL}/blog/how-to-set-up-seo/opengraph-image`,
  author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  publisher: { "@type": "Person", name: SITE_NAME },
  keywords: [
    "How to Set Up SEO",
    "SEO for Beginners",
    "Technical SEO",
    "On-Page SEO",
    "Off-Page SEO",
    "Local SEO",
    "Google Business Profile",
    "LinkedIn SEO",
    "Social Media SEO",
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
      name: "How to Set Up SEO",
      item: `${SITE_URL}/blog/how-to-set-up-seo`,
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
      <SeoSetupClient />
    </>
  );
}
