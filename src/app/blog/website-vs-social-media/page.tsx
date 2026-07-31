import type { Metadata } from "next";
import WebsiteVsSocialClient from "./website-vs-social-client";
import { FAQS } from "./faqs";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const title =
  "Website vs. Social Media: Do You Still Need a Website in 2026?";
const description =
  "The honest breakdown of website vs. social media for business — the real difference between owning your site and renting a social page, whether social media is enough, the 5 advantages and the disadvantages of a website, and why you still need one in 2026. Answers the 'People also ask' questions.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/website-vs-social-media" },
  openGraph: {
    title,
    description,
    url: "/blog/website-vs-social-media",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `${SITE_URL}/blog/website-vs-social-media`,
  image: `${SITE_URL}/blog/website-vs-social-media/opengraph-image`,
  author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  publisher: { "@type": "Person", name: SITE_NAME },
  keywords: [
    "Website vs Social Media",
    "Do I need a website",
    "Small Business Website",
    "Social Media for Business",
    "Owned vs Rented Audience",
    "Advantages of a Website",
    "Website in 2026",
    "SEO",
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
      name: "Website vs. Social Media",
      item: `${SITE_URL}/blog/website-vs-social-media`,
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
      <WebsiteVsSocialClient />
    </>
  );
}
