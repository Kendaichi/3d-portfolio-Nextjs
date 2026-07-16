import type { Metadata } from "next";
import TwoSitesThreeDaysClient from "./two-sites-three-days-client";
import { SITE_URL, SITE_NAME } from "@/lib/site";

const title = "Two Custom Sites in Three Days — HydraWellnessLux & LimitlessKBL";
const description =
  "Case study: two complete, custom-built React websites delivered in 72 hours for one client — a premium Kangen water wellness brand and a high-ticket sales coaching platform. Two distinct brands, one fixed deadline, both live on time and fully custom.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog/two-sites-three-days" },
  openGraph: {
    title,
    description,
    url: "/blog/two-sites-three-days",
    type: "article",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `${SITE_URL}/blog/two-sites-three-days`,
  image: `${SITE_URL}/blog/two-sites-three-days/opengraph-image`,
  author: { "@type": "Person", name: SITE_NAME, url: SITE_URL },
  publisher: { "@type": "Person", name: SITE_NAME },
  keywords: [
    "React",
    "Custom web design",
    "Fast delivery",
    "Landing page",
    "Wellness brand",
    "Coaching website",
    "Freelance web developer",
    "HydraWellnessLux",
    "LimitlessKBL",
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
      name: "Two Custom Sites in Three Days",
      item: `${SITE_URL}/blog/two-sites-three-days`,
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
      <TwoSitesThreeDaysClient />
    </>
  );
}
