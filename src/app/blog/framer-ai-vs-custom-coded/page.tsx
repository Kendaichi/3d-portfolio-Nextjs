import type { Metadata } from "next";
import FramerAiClient from "./framer-ai-client";
import { FAQS } from "./faqs";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const title = "Framer AI vs. Custom-Coded: Is Framer Good for SEO?";
const description =
  "Is Framer AI good for SEO, and what are you really paying for versus a custom-coded site? An honest breakdown of where Framer AI wins, where platform lock-in and SEO ceilings cost you, how to tell a custom site from a template, and Framer vs. WordPress vs. custom code.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/framer-ai-vs-custom-coded" },
  openGraph: {
    title,
    description,
    url: "/blog/framer-ai-vs-custom-coded",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `${SITE_URL}/blog/framer-ai-vs-custom-coded`,
  image: `${SITE_URL}/blog/framer-ai-vs-custom-coded/opengraph-image`,
  author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  publisher: { "@type": "Person", name: SITE_NAME },
  keywords: [
    "Framer",
    "Framer AI",
    "SEO",
    "Custom Code",
    "Web Design",
    "WordPress",
    "Next.js",
    "Website Builder",
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
      name: "Framer AI vs. Custom-Coded",
      item: `${SITE_URL}/blog/framer-ai-vs-custom-coded`,
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
      <FramerAiClient />
    </>
  );
}
