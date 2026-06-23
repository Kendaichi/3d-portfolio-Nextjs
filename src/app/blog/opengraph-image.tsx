import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Blog — Case Studies & Insights by Franclloyd D. Dagdag";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Blog — Case Studies",
    title: "Real projects. Real results.",
    subtitle: "Deep dives into client work — the problems, process, and results.",
  });
}
