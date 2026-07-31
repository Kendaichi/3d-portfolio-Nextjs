import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt =
  "Website vs. social media for business — why you still need a website.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Insight — Owned vs. Rented",
    title: "Website vs. Social Media",
    subtitle:
      "Social media rents you an audience. A website is the one you own.",
  });
}
