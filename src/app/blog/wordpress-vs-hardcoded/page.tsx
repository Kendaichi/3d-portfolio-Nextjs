import type { Metadata } from "next";
import WpVsHardcodedClient from "./wp-vs-hardcoded-client";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const title = "WordPress vs. Hardcoded — The Long-Run Edge of Custom Code";
const description =
  "WordPress wins the first week; a hardcoded site wins the next five years. A field-notes breakdown of where custom-coded websites gain an edge in speed, security, SEO, and ownership — and how WordPress becomes a disadvantage over the long run.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/wordpress-vs-hardcoded" },
  openGraph: {
    title,
    description,
    url: "/blog/wordpress-vs-hardcoded",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `${SITE_URL}/blog/wordpress-vs-hardcoded`,
  image: `${SITE_URL}/blog/wordpress-vs-hardcoded/opengraph-image`,
  author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  publisher: { "@type": "Person", name: SITE_NAME },
  keywords: [
    "WordPress",
    "Custom Code",
    "Next.js",
    "Web Performance",
    "SEO",
    "Headless CMS",
    "Total Cost of Ownership",
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
      name: "WordPress vs. Hardcoded",
      item: `${SITE_URL}/blog/wordpress-vs-hardcoded`,
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
      <WpVsHardcodedClient />
    </>
  );
}
