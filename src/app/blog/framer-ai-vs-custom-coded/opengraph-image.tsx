import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt =
  "Framer AI vs. Custom-Coded — is Framer good for SEO, and what are you really paying for?";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Insight — Tools & Search",
    title: "Framer AI vs. Custom-Coded",
    subtitle:
      "Is Framer good for SEO — and what are you really paying for? The honest, from-the-trenches take.",
  });
}
