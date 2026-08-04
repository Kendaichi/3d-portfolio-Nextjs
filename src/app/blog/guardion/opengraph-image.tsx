import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt =
  "Guardion — an elite protection brand built from the ground up in one week";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Case Study — Client Project",
    title: "Rebuilding Guardion",
    subtitle:
      "An elite protection brand, built bilingual and SEO-first in one week — PageSpeed 75 → 100, a perfect Lighthouse sweep.",
  });
}
