import type { Metadata } from "next";
import BlogClient from "./blog-client";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Case studies and insights — deep dives into real projects: the problems, the process, and the results.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Franclloyd D. Dagdag",
    description:
      "Case studies and insights — deep dives into real projects: the problems, the process, and the results.",
    url: "/blog",
    type: "website",
  },
};

export default function Page() {
  return <BlogClient />;
}
