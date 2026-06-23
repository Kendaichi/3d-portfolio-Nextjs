import type { Metadata } from "next";
import HomeClient from "./home-client";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: `${SITE_NAME} — Full-Stack Web Developer` },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} — Full-Stack Web Developer`,
    description: SITE_DESCRIPTION,
    url: "/",
    type: "website",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: "Full-Stack Web Developer",
  description: SITE_DESCRIPTION,
  email: "franclloyd.dagdag@daggerbuilds.com",
  sameAs: [
    "https://github.com/Kendaichi",
    "https://ph.linkedin.com/in/franclloyd-dagdag",
    "https://www.facebook.com/franclloyd.dagdag",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Laravel",
    "System Architecture",
    "Web3",
    "SEO",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
