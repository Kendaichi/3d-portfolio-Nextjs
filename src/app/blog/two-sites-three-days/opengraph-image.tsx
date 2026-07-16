import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "Two custom websites built in three days for one client";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Case Study — Client Project",
    title: "Two Custom Sites. Three Days.",
    subtitle: "Two distinct brands built for one client — live in 72 hours.",
  });
}
