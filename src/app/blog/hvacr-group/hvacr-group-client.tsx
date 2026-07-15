"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Handshake,
  Layers,
  Zap,
  Server,
  Bot,
  Search,
  PenTool,
  Repeat,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
import Lightbox from "@/components/Lightbox";

/* ── assets ─────────────────────────────────────────────────── */

const SITES = [
  {
    name: "Shelair",
    tagline: "Refrigeration & Air Conditioning",
    url: "https://shelair.com.au/",
    image: "/assets/shelair/homepage.webp",
    description:
      "One contractor for refrigeration, HVAC, and beer systems — keeping critical commercial systems running 24/7. From cold rooms and glycol lines to air conditioning, all repaired, maintained, and installed by one ARC-licensed team with 30+ years behind it.",
    scores: { performance: 96, seo: 100 },
  },
  {
    name: "HVACR Group",
    tagline: "Refrigeration & Climate Control Group",
    url: "https://hvacrgroup.com.au/",
    image: "/assets/hvacrgroup/homepage.webp",
    description:
      "The parent group that ties it all together — trusted trade services since 1972. Three specialist brands under one banner, serving commercial, industrial, healthcare and hospitality clients across QLD and NSW.",
    scores: { performance: 96, seo: 100 },
  },
  {
    name: "Koolacube",
    tagline: "Cold Room Hire & Sales",
    url: "https://koolacube.com.au/",
    image: "/assets/koolacube/homepage.webp",
    description:
      "Relocatable cold rooms and freezer rooms for businesses across Brisbane, the Gold Coast, Sunshine Coast and SE Queensland — long-term monthly hire without the capital cost. Backed by Acro Refrigeration.",
    scores: { performance: 99, seo: 100 },
  },
];

const koolacubeBeforePerf = "/assets/koolacube/beforepagespeedresult.webp";
const koolacubeAfterPerf = "/assets/koolacube/pagespeedresult.webp";

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
    rotate: -2,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const tiltRight: Variants = {
  hidden: { opacity: 0, rotate: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    rotate: 1.8,
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
      ? "-rotate-[2deg]"
      : rotate === "right"
      ? "rotate-[1.8deg]"
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

function ScorePill({ value, label }: { value: number; label: string }) {
  const good = value >= 90;
  return (
    <div className="flex items-center gap-2 rounded-md border border-border/40 bg-card/60 px-3 py-1.5">
      <span
        className={`text-lg font-bold font-mono ${
          good ? "text-green-400/80" : "text-yellow-400/80"
        }`}
      >
        {value}
      </span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

/* ── main page ──────────────────────────────────────────────── */

export default function HvacrGroupClient() {
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
              "TypeScript",
              "Supabase",
              "Vercel",
              "Custom CMS",
              "SEO",
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
            Case Study — Repeat Client
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4"
          >
            One Client,
            <br />
            <span className="text-gradient">Four Websites</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            After I rebuilt Acro Refrigeration, the group behind it —{" "}
            <span className="text-foreground/80">HVACR Group</span> — came back
            and handed me three more of their brands. Same playbook, same stack,
            same result: fast, modern sites that finally match the businesses
            behind them.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6">
            <a
              href="https://hvacrgroup.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-card border border-border/40 text-foreground/80 hover:text-foreground hover:border-border/60 transition-all"
            >
              <ExternalLink className="h-4 w-4" />
              Visit HVACR Group
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
            { metric: "4", label: "Sites Built", sublabel: "for one client" },
            { metric: "1", label: "Trusted Partner", sublabel: "HVACR Group" },
            {
              metric: "90+",
              label: "Performance",
              sublabel: "across the board",
            },
            { metric: "100", label: "SEO Score", sublabel: "every site" },
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
              <p className="text-sm font-semibold text-foreground/80">
                {label}
              </p>
              <p className="text-xs text-muted-foreground">{sublabel}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 1: WHY THEY CAME BACK
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
                01 — Why They Came Back
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                The Best Proof Is a Second Project
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                A testimonial says a client was happy. A second project says
                they trust you with the rest of their business.
              </p>
              <p>
                The Acro Refrigeration rebuild delivered exactly what it
                promised — a ~10x speed boost, a custom CMS, and zero rankings
                lost in the WordPress migration. So when HVACR Group looked at
                the rest of their web presence — still slow, still dated, still
                on WordPress — they didn't put it out to tender.
              </p>
              <p>
                They came straight back and asked me to give their other three
                brands the same treatment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Handshake,
                  title: "Earned Trust",
                  body: "One delivered project turned into a standing relationship — no re-pitching, no proving myself twice.",
                },
                {
                  icon: Repeat,
                  title: "A Proven Playbook",
                  body: "The Acro build became the template — the same stack and process, ready to run again.",
                },
                {
                  icon: Layers,
                  title: "One Cohesive Family",
                  body: "Four sites under one group, now sharing a consistent, modern foundation instead of four different messes.",
                },
              ].map(({ icon: Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  variants={popIn}
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
            SECTION 2: THE BRAND FAMILY
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
                02 — The Brand Family
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Three More Brands, Rebuilt
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-muted-foreground leading-relaxed max-w-2xl mb-16"
            >
              Each brand serves a different corner of the refrigeration world —
              so each site got its own identity, while sharing the same fast,
              SEO-first foundation underneath.
            </motion.p>
          </motion.div>

          <div className="space-y-20">
            {SITES.map((site, i) => (
              <div
                key={site.name}
                className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center"
              >
                <motion.div
                  variants={i % 2 === 0 ? tiltLeft : tiltRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className={i % 2 === 1 ? "md:order-2" : ""}
                >
                  <ScrapbookImage
                    src={site.image}
                    alt={`${site.name} — ${site.tagline} — redesigned homepage`}
                    caption={`${site.name
                      .toLowerCase()
                      .replace(/\s/g, "")}.com.au`}
                    rotate={i % 2 === 0 ? "left" : "right"}
                    tapePosition="corner"
                  />
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className={`space-y-4 ${i % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div>
                    <p className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-1">
                      Site {String(i + 2).padStart(2, "0")} of 04
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
                      {site.name}
                    </h3>
                    <p className="text-sm text-muted-foreground/80 mt-1">
                      {site.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {site.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <ScorePill
                      value={site.scores.performance}
                      label="Performance"
                    />
                    <ScorePill value={site.scores.seo} label="SEO" />
                  </div>

                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors group pt-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit {site.name}
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </a>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 3: KOOLACUBE BEFORE & AFTER
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
                03 — Receipts
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Koolacube: 44 → 99
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Koolacube's old site is the clearest before-and-after of the
                bunch. It scored a failing{" "}
                <span className="text-red-400/80 font-semibold">44</span> on
                performance. The rebuild lifted it into the green at{" "}
                <span className="text-green-400/80 font-semibold">99</span> —
                with a perfect 100 for SEO.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-8">
              <h3 className="text-lg font-semibold mb-6 text-center">
                PageSpeed Insights — Before & After
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  variants={tiltLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <ScrapbookImage
                    src={koolacubeBeforePerf}
                    alt="Old Koolacube website PageSpeed — Performance 44, Accessibility 95, Best Practices 100, SEO 92"
                    caption="Before — Performance 44"
                    rotate="left"
                    tapePosition="corner"
                  />
                </motion.div>
                <motion.div
                  variants={tiltRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <ScrapbookImage
                    src={koolacubeAfterPerf}
                    alt="Rebuilt Koolacube website PageSpeed — Performance 99, Accessibility 95, Best Practices 100, SEO 100"
                    caption="After — Performance 99"
                    rotate="right"
                    tapePosition="corner"
                  />
                </motion.div>
              </div>
              <motion.p
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-xs text-muted-foreground/50 font-mono mt-4 text-center italic"
              >
                Shelair and HVACR Group landed in the same territory — 96
                performance, 100 SEO.
              </motion.p>
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center justify-center gap-2 mt-3 text-xs text-muted-foreground/60 font-mono"
              >
                <Bot className="h-3.5 w-3.5 shrink-0" />
                <span>
                  Its Agentic Browsing score climbed 1/2 → 3/3, too — ready for
                  the AI assistants now browsing on people's behalf.
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 4: THE SYSTEM THAT SCALED
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
                04 — How It Scaled
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                One Proven System, Reused
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Three sites in quick succession only works because the
                foundation was already proven on Acro. Nothing started from a
                blank page.
              </p>
              <p>
                The same battle-tested stack, the same SEO-first architecture,
                and a shared set of components meant each new brand got a
                bespoke front end on top of infrastructure that already worked —
                fast to ship, and consistent by design.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                {
                  icon: Zap,
                  title: "Next.js + TypeScript",
                  desc: "The same server-rendered, type-safe foundation across all four sites — instant loads, zero bloat.",
                },
                {
                  icon: Server,
                  title: "Supabase + Vercel",
                  desc: "One proven backend-and-hosting pattern, edge-deployed close to every Australian visitor.",
                },
                {
                  icon: PenTool,
                  title: "Custom CMS",
                  desc: "Each brand can manage its own content — no WordPress, no plugin upkeep, no developer bottleneck.",
                },
                {
                  icon: Search,
                  title: "SEO & Agent-Ready",
                  desc: "Semantic markup and structured metadata that read cleanly for search crawlers — and for the AI agents now browsing the web on people's behalf. Hence the straight 100s.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="bg-card/60 border border-border/30 rounded-lg p-5 space-y-2 hover:border-border/60 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-muted-foreground" />
                    <h3 className="text-sm font-semibold">{title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 5: THE RESULTS
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
                05 — The Results
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Four Sites. One Standard.
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
            >
              {SITES.map((site, i) => (
                <motion.div
                  key={site.name}
                  variants={popIn}
                  className="bg-card/60 border border-border/30 rounded-lg p-5 space-y-3"
                  style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1.2}deg)` }}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-green-400/60" />
                    <h3 className="text-sm font-semibold">{site.name}</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-2xl font-bold font-mono text-green-400/80">
                        {site.scores.performance}
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        Performance
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold font-mono text-green-400/80">
                        {site.scores.seo}
                      </p>
                      <p className="text-[11px] text-muted-foreground">SEO</p>
                    </div>
                  </div>
                  {site.name === "Koolacube" && (
                    <p className="text-[11px] text-muted-foreground/70 font-mono">
                      up from 44 performance
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                What started as a single rescue project became the web
                foundation for an entire group.
              </p>
              <p>
                Four brands — Acro Refrigeration, Shelair, HVACR Group, and
                Koolacube — now run on the same fast, maintainable, SEO-first
                system. Consistent where it counts, distinct where it matters,
                and every one of them off WordPress for good.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-card/40 border border-border/20 rounded-xl p-6"
            >
              <p className="text-sm font-semibold text-foreground/80 mb-4">
                Delivered across the group
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Three additional brand sites rebuilt off WordPress",
                  "90+ performance and 100 SEO on every site",
                  "Koolacube performance lifted from 44 to 99",
                  "One shared stack — Next.js, Supabase, Vercel",
                  "A custom CMS per brand, no plugin upkeep",
                  "A consistent design system across four sites",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-400/60 mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
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
              Got more than one site to modernize?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Whether it's a single rebuild or a whole brand family stuck on
              WordPress — let's talk about giving them one fast, cohesive
              foundation.
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
                Read the Acro Case Study →
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/20 py-8">
          <div className="container max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2026 — Engineered with precision.</p>
            <div className="flex gap-6">
              <Link
                href="/"
                className="hover:text-foreground transition-colors"
              >
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
