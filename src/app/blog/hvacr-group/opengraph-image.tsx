import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "HVACR Group — one client, four websites rebuilt off WordPress";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Case Study — Repeat Client",
    title: "One Client, Four Websites",
    subtitle: "After Acro Refrigeration, the same group came back for three more brand sites.",
  });
}
