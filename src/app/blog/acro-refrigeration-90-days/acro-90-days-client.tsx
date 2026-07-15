"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  TrendingUp,
  Search,
  Bot,
  Sparkles,
  CheckCircle2,
  FileText,
} from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
import Lightbox from "@/components/Lightbox";

/* ── assets ─────────────────────────────────────────────────── */

const analyticsImg = "/assets/acro60daysafter/analytics.webp";
const searchConsoleImg = "/assets/acro60daysafter/googleconsoleanalytics.webp";
const pageSpeedImg = "/assets/acro60daysafter/pagespeedresult.webp";

/* Top pages pulled from the Vercel Analytics screenshot */
const TOP_PAGES = [
  { path: "/resources/pink-mould-in-ice-machine", visitors: 667 },
  { path: "/resources/refrigeration-compressor-replacement-cost", visitors: 459 },
  { path: "/resources/how-much-does-it-cost-to-build-a-cold-room", visitors: 398 },
  { path: "/services/mobile-cold-rooms", visitors: 287 },
];

/* Top queries pulled from the Google Search Console screenshot */
const TOP_QUERIES = [
  { query: "acro refrigeration", clicks: 118, impressions: 296 },
  { query: "acro refrigeration service", clicks: 37, impressions: 89 },
  { query: "acro", clicks: 17, impressions: 838 },
  { query: "commercial refrigeration brisbane", clicks: 6, impressions: 1746 },
  { query: "coldrooms for sale", clicks: 4, impressions: 70 },
];

/* ── animation variants ─────────────────────────────────────── */

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const tiltLeft: Variants = {
  hidden: { opacity: 0, rotate: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    rotate: -1.6,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const tiltRight: Variants = {
  hidden: { opacity: 0, rotate: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    rotate: 1.6,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "backOut" },
  },
};

/* ── reusable scrapbook image slot ──────────────────────────── */

function ScrapbookImage({
  src,
  alt,
  caption,
  rotate = "left",
  tapePosition = "top",
}: {
  src?: string;
  alt: string;
  caption?: string;
  rotate?: "left" | "right" | "none";
  tapePosition?: "top" | "corner";
}) {
  const [zoomed, setZoomed] = useState(false);

  const rotateClass =
    rotate === "left"
      ? "-rotate-[1.6deg]"
      : rotate === "right"
      ? "rotate-[1.6deg]"
      : "";

  return (
    <div className={`relative ${rotateClass} group`}>
      {tapePosition === "top" && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 w-16 h-6 bg-foreground/[0.07] backdrop-blur-sm border border-foreground/[0.06] rounded-sm rotate-[1deg]" />
      )}
      {tapePosition === "corner" && (
        <>
          <div className="absolute -top-2 -left-2 z-10 w-10 h-5 bg-foreground/[0.07] backdrop-blur-sm border border-foreground/[0.06] rounded-sm -rotate-[12deg]" />
          <div className="absolute -top-2 -right-2 z-10 w-10 h-5 bg-foreground/[0.07] backdrop-blur-sm border border-foreground/[0.06] rounded-sm rotate-[12deg]" />
        </>
      )}

      <div className="bg-card border border-border/40 rounded-sm p-2 shadow-lg shadow-black/20 group-hover:shadow-xl group-hover:shadow-black/30 transition-shadow duration-300">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className="w-full h-auto rounded-sm cursor-zoom-in"
            loading="lazy"
            role="button"
            tabIndex={0}
            onClick={() => setZoomed(true)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setZoomed(true);
              }
            }}
          />
        ) : (
          <div className="w-full aspect-video bg-accent/30 rounded-sm flex items-center justify-center border border-dashed border-border/40">
            <p className="text-xs text-muted-foreground/60 font-mono text-center px-4">
              {alt}
            </p>
          </div>
        )}
        {caption && (
          <p className="text-[11px] text-muted-foreground/70 font-mono mt-2 text-center italic">
            {caption}
          </p>
        )}
      </div>

      {src && (
        <Lightbox
          open={zoomed}
          src={src}
          alt={alt}
          onClose={() => setZoomed(false)}
        />
      )}
    </div>
  );
}

/* ── score pill ─────────────────────────────────────────────── */

function ScorePill({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-center gap-2 rounded-md border border-border/40 bg-card/60 px-3 py-1.5">
      <span className="text-lg font-bold font-mono text-green-400/80">
        {value}
      </span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

/* ── main page ──────────────────────────────────────────────── */

export default function Acro90DaysClient() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CustomCursor />

      {/* Grid background */}
      <div
        className="fixed inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <main className="relative z-10">
        {/* ── Navigation ── */}
        <div className="container max-w-4xl pt-12 pb-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            All Case Studies & Insights
          </Link>
        </div>

        {/* ── Hero ── */}
        <motion.header
          className="container max-w-4xl pt-8 pb-16"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            {[
              "Next.js",
              "Supabase",
              "Vercel",
              "SEO",
              "Core Web Vitals",
              "Analytics",
            ].map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-mono rounded bg-accent/50 text-muted-foreground border border-border/30"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-3"
          >
            Case Study — 90 Days Later
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4"
          >
            Ninety Days,
            <br />
            <span className="text-gradient">Real Numbers</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Back in April I rebuilt{" "}
            <span className="text-foreground/80">Acro Refrigeration</span> off
            WordPress and onto a Next.js + Supabase stack. A launch screenshot
            proves a site is fast on day one. The real question is what happens
            once it's live — so here's what the analytics, Search Console, and
            speed tests actually say three months in.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6">
            <a
              href="https://www.acrorefrigeration.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-card border border-border/40 text-foreground/80 hover:text-foreground hover:border-border/60 transition-all"
            >
              <ExternalLink className="h-4 w-4" />
              Visit Live Site
            </a>
          </motion.div>
        </motion.header>

        {/* ── Stat strip ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="container max-w-4xl grid grid-cols-2 lg:grid-cols-4 gap-4 pb-8"
        >
          {[
            { metric: "+110%", label: "Visitors", sublabel: "month over month" },
            { metric: "91.5K", label: "Impressions", sublabel: "in Google, 90 days" },
            { metric: "95", label: "PageSpeed", sublabel: "100 SEO, still" },
            { metric: "3/3", label: "Agentic Browsing", sublabel: "AI-assistant ready" },
          ].map(({ metric, label, sublabel }, i) => (
            <motion.div
              key={label}
              variants={popIn}
              className="bg-card/60 border border-border/30 rounded-lg p-5 text-center space-y-1"
              style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
            >
              <p className="text-2xl sm:text-3xl font-bold tracking-tight">
                {metric}
              </p>
              <p className="text-sm font-semibold text-foreground/80">{label}</p>
              <p className="text-xs text-muted-foreground">{sublabel}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 1: THE TRAFFIC
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
                01 — The Traffic
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Visitors More Than Doubled
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                In the last 30 days the site pulled{" "}
                <span className="text-foreground font-semibold">
                  5,827 visitors
                </span>{" "}
                and{" "}
                <span className="text-foreground font-semibold">
                  7,375 page views
                </span>{" "}
                — up 110% and 97% on the month before.
              </p>
              <p>
                That's not a launch-week spike settling back down. It's a curve
                that keeps trending up, three months after go-live — the sign of
                a site Google is steadily trusting with more traffic.
              </p>
            </motion.div>

            <motion.div
              variants={tiltLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-12"
            >
              <ScrapbookImage
                src={analyticsImg}
                alt="Vercel Web Analytics for acrorefrigeration.com.au — 5,827 visitors (+110%), 7,375 page views (+97%), 83% bounce rate over the last 30 days"
                caption="Vercel Web Analytics — last 30 days"
                rotate="left"
                tapePosition="corner"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-8"
            >
              <p>
                Look at the top pages and the strategy shows. The homepage isn't
                the biggest draw — the migrated resource guides are. Every one of
                the 100+ posts carried over from WordPress is now pulling its own
                organic traffic:
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-2 max-w-2xl"
            >
              {TOP_PAGES.map((page) => (
                <motion.div
                  key={page.path}
                  variants={fadeUp}
                  className="flex items-center justify-between gap-4 bg-card/50 border border-border/30 rounded-md px-4 py-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                    <code className="text-xs sm:text-sm text-muted-foreground truncate">
                      {page.path}
                    </code>
                  </div>
                  <span className="text-sm font-mono font-semibold text-foreground/80 shrink-0">
                    {page.visitors.toLocaleString()}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-xs text-muted-foreground/50 font-mono mt-4 max-w-2xl italic"
            >
              A high bounce rate is expected here — most of these are
              question-and-answer guides. Someone searches &ldquo;why is there
              pink mould in my ice machine,&rdquo; gets the answer, and leaves
              satisfied. That&rsquo;s the content doing its job.
            </motion.p>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 2: THE SEARCH FOOTPRINT
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
                02 — The Search Footprint
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                91.5K Impressions in 90 Days
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Over the last three months Acro appeared in Google search{" "}
                <span className="text-foreground font-semibold">
                  91,500 times
                </span>
                , earning{" "}
                <span className="text-foreground font-semibold">532 clicks</span>{" "}
                at an average position of{" "}
                <span className="text-foreground font-semibold">19</span>.
              </p>
              <p>
                Here's the part I like most. Brand searches — &ldquo;acro
                refrigeration&rdquo; and &ldquo;acro refrigeration service&rdquo;
                — convert well, as you'd expect. But the migrated content is
                already pulling non-brand demand: &ldquo;commercial refrigeration
                brisbane&rdquo; alone racked up{" "}
                <span className="text-foreground/90 font-semibold">
                  1,746 impressions
                </span>
                . An average position of 19 means most of that reach is still
                sitting on page two — a pool of ranking momentum that converts to
                clicks as those pages keep climbing.
              </p>
            </motion.div>

            <motion.div
              variants={tiltRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mb-12"
            >
              <ScrapbookImage
                src={searchConsoleImg}
                alt="Google Search Console for acrorefrigeration.com.au — 532 total clicks, 91.5K impressions, 0.6% average CTR, average position 19 over the last 3 months"
                caption="Google Search Console — last 3 months"
                rotate="right"
                tapePosition="corner"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="max-w-2xl">
              <p className="text-sm font-semibold text-foreground/70 mb-3">
                Top queries
              </p>
              <div className="overflow-hidden rounded-lg border border-border/30">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-card/60 text-left text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      <th className="px-4 py-2.5 font-medium">Query</th>
                      <th className="px-4 py-2.5 font-medium text-right">
                        Clicks
                      </th>
                      <th className="px-4 py-2.5 font-medium text-right">
                        Impressions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {TOP_QUERIES.map((row) => (
                      <tr
                        key={row.query}
                        className="border-t border-border/20 bg-card/30"
                      >
                        <td className="px-4 py-2.5 text-muted-foreground">
                          {row.query}
                        </td>
                        <td className="px-4 py-2.5 text-right font-mono text-foreground/80">
                          {row.clicks}
                        </td>
                        <td className="px-4 py-2.5 text-right font-mono text-muted-foreground">
                          {row.impressions.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 3: THE SPEED HELD
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
                03 — The Speed Held
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Still 95. Ninety Days On.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                WordPress sites tend to get slower with age — plugins stack up,
                images go unoptimized, and bloat quietly creeps in. This one went
                the other way: it's exactly as fast as the day it launched.
              </p>
              <p>
                Ninety days in, a fresh PageSpeed run still scores{" "}
                <span className="text-green-400/80 font-semibold">95</span>{" "}
                performance and a perfect{" "}
                <span className="text-green-400/80 font-semibold">100</span> for
                SEO — with a First Contentful Paint of 0.3s, Largest Contentful
                Paint of 0.7s, and a near-zero 0.01 layout shift.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-2 mb-10"
            >
              <ScorePill value="95" label="Performance" />
              <ScorePill value="96" label="Accessibility" />
              <ScorePill value="96" label="Best Practices" />
              <ScorePill value="100" label="SEO" />
            </motion.div>

            <motion.div
              variants={tiltLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <ScrapbookImage
                src={pageSpeedImg}
                alt="PageSpeed Insights for acrorefrigeration.com.au — Performance 95, Accessibility 96, Best Practices 96, SEO 100, Agentic Browsing 3/3, FCP 0.3s, LCP 0.7s, CLS 0.01"
                caption="PageSpeed Insights — Jul 15, 2026, desktop"
                rotate="left"
                tapePosition="corner"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 4: HUMAN AND MACHINE
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
                04 — Human and Machine
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Now Showing Up in AI Assistants
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Google still sends the lion's share of traffic — roughly 3,000
                referrals last month. But there's a new name in the referrer
                list:{" "}
                <span className="text-foreground font-semibold">
                  chatgpt.com
                </span>
                .
              </p>
              <p>
                It's a small number today, but it's the leading edge of how
                people are starting to find businesses — asking an AI assistant
                instead of scrolling a results page. Because the rebuild is built
                on clean, semantic markup, the site is legible to those agents:
                its PageSpeed{" "}
                <span className="text-foreground/90 font-semibold">
                  Agentic Browsing score is a perfect 3/3
                </span>
                , a direct measure of how well autonomous AI agents can read and
                navigate it.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Search,
                  title: "Found by Google",
                  body: "~3K referrals a month and climbing, backed by a perfect 100 SEO score and structured metadata on every page.",
                },
                {
                  icon: Bot,
                  title: "Read by AI Agents",
                  body: "chatgpt.com is now a referrer. A 3/3 Agentic Browsing score means assistants can parse and recommend the site cleanly.",
                },
                {
                  icon: Sparkles,
                  title: "Built to Be Cited",
                  body: "Semantic HTML and clean structure make the content easy to quote — whether the reader is a person or a model.",
                },
              ].map(({ icon: Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  variants={popIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="bg-card/60 border border-border/30 rounded-lg p-5 space-y-2"
                  style={{ transform: `rotate(${i % 2 === 0 ? -1.2 : 1}deg)` }}
                >
                  <Icon className="h-5 w-5 text-foreground/50 mb-1" />
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 5: THE TAKEAWAY
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
                05 — The Takeaway
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                The Rebuild Is Compounding
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Ninety days is long enough to see a trajectory, not just a
                launch. And the trajectory is up.
              </p>
              <p>
                The speed-first, SEO-first, content-preserving rebuild isn't just
                holding the line — it's compounding. Traffic has doubled, search
                impressions are in the tens of thousands, rankings are climbing
                off page two, and the site is now discoverable by both people and
                the AI assistants they're starting to rely on. Nothing here is a
                one-off screenshot; it's the same numbers moving in the same
                direction, month after month.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-card/40 border border-border/20 rounded-xl p-6"
            >
              <p className="text-sm font-semibold text-foreground/80 mb-4">
                Where Acro stands, 90 days on
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Visitors up 110% month over month",
                  "91.5K Google search impressions in 90 days",
                  "95 performance / 100 SEO — no regression",
                  "100+ migrated guides now the top traffic drivers",
                  "Ranking for non-brand commercial terms",
                  "Discoverable by AI assistants (Agentic Browsing 3/3)",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400/60 mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-center gap-2 mt-8 text-xs text-muted-foreground/50 font-mono"
            >
              <TrendingUp className="h-3.5 w-3.5 shrink-0" />
              <span>Same site. Ninety days. Every arrow pointing up.</span>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Closing CTA ── */}
        <section className="container max-w-4xl py-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card/40 border border-border/20 rounded-xl p-8 sm:p-12 text-center space-y-4"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Want numbers like these?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              A fast, SEO-first rebuild doesn't just look good at launch — it
              keeps paying off. Let's talk about what yours could do over the
              next 90 days.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/blog/acro-refrigeration"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md border border-border/40 text-foreground/80 hover:text-foreground hover:border-border/60 transition-all"
              >
                Read the Original Rebuild →
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/20 py-8">
          <div className="container max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 — Engineered with precision.</p>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-foreground transition-colors">
                Portfolio
              </Link>
              <Link
                href="/blog"
                className="hover:text-foreground transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
