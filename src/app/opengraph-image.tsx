import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Franclloyd D. Dagdag — Full-Stack Web Developer";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Portfolio",
    title: "Franclloyd D. Dagdag",
    subtitle: "Full-Stack Web Developer — systems, performance, precision.",
  });
}
