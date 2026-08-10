"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Gauge,
  Search,
  PenTool,
  Zap,
  Server,
  Globe,
  Languages,
  Eye,
  ShieldCheck,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
} from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
import Lightbox from "@/components/Lightbox";

const solutionImg = "/assets/guardion/new-website.png";
const challengeimg = "/assets/guardion/old-website.png";
const oldPerfImg = "/assets/guardion/old-website-performance-assessment.png";
const newPerfImg = "/assets/guardion/new-website-performance-assessment.png";

/* ── animation variants ─────────────────────────────────────── */

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

/* scrapbook-style tilts */
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
    rotate: 1.5,
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
      {/* Tape strip */}
      {tapePosition === "top" && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 w-16 h-6 bg-foreground/[0.07] backdrop-blur-sm border border-foreground/[0.06] rounded-sm rotate-[1deg]" />
      )}
      {tapePosition === "corner" && (
        <>
          <div className="absolute -top-2 -left-2 z-10 w-10 h-5 bg-foreground/[0.07] backdrop-blur-sm border border-foreground/[0.06] rounded-sm -rotate-[12deg]" />
          <div className="absolute -top-2 -right-2 z-10 w-10 h-5 bg-foreground/[0.07] backdrop-blur-sm border border-foreground/[0.06] rounded-sm rotate-[12deg]" />
        </>
      )}

      {/* Image frame */}
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

/* ── sticky note component ──────────────────────────────────── */

function StickyNote({
  children,
  color = "yellow",
  rotate = -3,
}: {
  children: React.ReactNode;
  color?: "yellow" | "blue" | "pink" | "green";
  rotate?: number;
}) {
  const bgMap = {
    yellow: "bg-yellow-500/[0.08] border-yellow-500/20",
    blue: "bg-blue-500/[0.08] border-blue-500/20",
    pink: "bg-pink-500/[0.08] border-pink-500/20",
    green: "bg-green-500/[0.08] border-green-500/20",
  };

  return (
    <div
      className={`${bgMap[color]} border rounded-sm p-4 shadow-md shadow-black/10`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}

/* ── main page ──────────────────────────────────────────────── */

export default function GuardionClient() {
  /* image state — allows user to upload/set images later */
  const [challengeImage] = useState<string | undefined>(challengeimg);
  const [solutionImage] = useState<string | undefined>(solutionImg);

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
            All Case Studies
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
              "EN / 中文",
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
            Case Study — Client Project
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4"
          >
            Rebuilding Guardion
            <br />
            <span className="text-gradient">Protection &amp; Intelligence</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            An elite Australian close-protection and investigations firm —
            trusted by executives, dignitaries, and high-profile individuals —
            came to me through a referral. Their operation was world-class. Their
            website, a thin starter page, wasn&apos;t. So I rebuilt it from the
            ground up, bilingual and SEO-first, in one week.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6">
            <a
              href="https://guardion.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-card border border-border/40 text-foreground/80 hover:text-foreground hover:border-border/60 transition-all"
            >
              <ExternalLink className="h-4 w-4" />
              Visit Live Site
            </a>
          </motion.div>
        </motion.header>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 1: THE PROBLEM
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
                01 — The Problem
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                A Starter Site for a Specialist Brand
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                In personal security, trust is the entire product. Guardion
                protects executives, dignitaries, and high-net-worth clients who
                vet quietly — and the website is often the first thing they see.
              </p>
              <p>
                The existing site was a single-page starter: three menu items, a
                generic template feel, no depth, no proof of the firm&apos;s
                global reach, and nowhere to publish. It looked like a placeholder
                — not the calm, precise operation standing behind it. For a brand
                whose clients pay for discretion and control, the site quietly
                worked against the sale.
              </p>
            </motion.div>

            {/* ── Scrapbook: Problem Evidence ── */}
            <motion.div variants={fadeUp} className="relative">
              {/* The main problem image — tilted like a photo pinned to a board */}
              <motion.div
                variants={tiltLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-lg mx-auto mb-8"
              >
                <ScrapbookImage
                  src={challengeImage}
                  alt="Screenshot: Old Guardion website — a thin, single-page starter site with a generic template feel"
                  caption="The old site — a single-page starter with three menu items"
                  rotate="left"
                  tapePosition="corner"
                />
              </motion.div>

              {/* Pain point sticky notes scattered around */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                <motion.div
                  variants={popIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <StickyNote color="pink" rotate={-2.5}>
                    <PenTool className="h-5 w-5 text-pink-400/60 mb-2" />
                    <p className="text-sm font-semibold text-foreground/80 mb-1">
                      Thin &amp; Generic
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      One page, a stock-template look, and three menu items — it
                      read as a placeholder, not a premium protection firm.
                    </p>
                  </StickyNote>
                </motion.div>

                <motion.div
                  variants={popIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <StickyNote color="yellow" rotate={1.5}>
                    <Globe className="h-5 w-5 text-yellow-400/60 mb-2" />
                    <p className="text-sm font-semibold text-foreground/80 mb-1">
                      No Depth, No Proof
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      No detailed services, no global-reach story, no case work,
                      no blog — nothing to build authority or answer a prospect&apos;s
                      real questions.
                    </p>
                  </StickyNote>
                </motion.div>

                <motion.div
                  variants={popIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <StickyNote color="blue" rotate={-1}>
                    <AlertTriangle className="h-5 w-5 text-blue-400/60 mb-2" />
                    <p className="text-sm font-semibold text-foreground/80 mb-1">
                      Weak Foundations
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Best Practices at 73 and a middling performance score —
                      shaky technical footing under a brand that sells precision.
                    </p>
                  </StickyNote>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 2: THE CHALLENGE
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
                02 — The Challenge
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Establish Authority — Fast, and in Two Languages
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                This wasn&apos;t a migration — there was nothing to preserve. The
                job was to build credibility from a near-blank slate, and to do
                it before the brand&apos;s momentum cooled.
              </p>
              <p>
                A one-week window. An international, high-net-worth clientele that
                needed the site in both English and Chinese. And an SEO
                foundation laid from the first commit — for a brand with almost no
                search footprint yet.
              </p>
            </motion.div>

            {/* ── Scrapbook: Challenge Cards ── */}
            <div className="space-y-6">
              {/* Challenge cards in a staggered scrapbook layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <motion.div
                  variants={tiltLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center">
                        <ShieldCheck className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold">Trust Is the Product</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Clients hand this firm their safety. The site had to project
                      calm, competence, and absolute discretion in the first three
                      seconds — every pixel earning confidence rather than
                      spending it.
                    </p>
                    {/* Decorative pin */}
                    <div className="absolute -top-2 right-6 w-4 h-4 rounded-full bg-red-500/20 border-2 border-red-500/40 shadow-sm" />
                  </div>
                </motion.div>

                <motion.div
                  variants={tiltRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center">
                        <Languages className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold">A Bilingual Audience</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Guardion&apos;s clientele spans borders. The site needed a
                      first-class English and Chinese (中文) experience — not a
                      bolt-on translation, but proper bilingual structure that
                      search engines could index in both languages.
                    </p>
                    <div className="absolute -top-2 right-6 w-4 h-4 rounded-full bg-blue-500/20 border-2 border-blue-500/40 shadow-sm" />
                  </div>
                </motion.div>

                <motion.div
                  variants={tiltRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative lg:col-span-2 lg:max-w-md lg:mx-auto"
                >
                  <div className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold">A One-Week Window</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Design, build, bilingual content, SEO groundwork, and launch
                      — all inside a single week. Fast, without the corner-cutting
                      that fast usually implies.
                    </p>
                    <div className="absolute -top-2 right-6 w-4 h-4 rounded-full bg-green-500/20 border-2 border-green-500/40 shadow-sm" />
                  </div>
                </motion.div>
              </div>

              {/* Annotation scribble — handwritten feel */}
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center pt-4"
              >
                <p className="text-sm italic text-muted-foreground/50 font-mono">
                  &quot;Look effortless. Miss nothing.&quot;
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 3: THE SOLUTION
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
                03 — The Solution
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                A Proven Stack. A Premium Brand.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                I reached for the same stack that carried the Acro rebuild —
                built for speed, scale, and control — then shaped it into a
                cinematic, bilingual brand platform the client fully owns.
              </p>
            </motion.div>

            {/* ── Tech Stack Breakdown ── */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16"
            >
              {[
                {
                  icon: Zap,
                  title: "Next.js + TypeScript",
                  desc: "Server-rendered, statically optimized pages for instant loads and rock-solid Core Web Vitals — with type safety across the codebase.",
                },
                {
                  icon: Server,
                  title: "Supabase",
                  desc: "A PostgreSQL backend powering services, case work, and the blog — so content is structured, queryable, and ready to scale.",
                },
                {
                  icon: Gauge,
                  title: "Vercel Deployment",
                  desc: "Edge-distributed hosting so pages render fast for clients in Australia and abroad, on any device.",
                },
                {
                  icon: PenTool,
                  title: "Custom CMS",
                  desc: "A tailored editing layer so the Guardion team can publish services, case studies, and blog posts — in both languages — without a developer.",
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

            {/* ── Solution Image — Scrapbook Style ── */}
            <motion.div
              variants={tiltRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-lg mx-auto mb-12"
            >
              <ScrapbookImage
                src={solutionImage}
                alt="Screenshot: New Guardion website — cinematic, discreet, premium design with full navigation and a bilingual toggle"
                caption="The new site — cinematic, discreet, and fast in both languages"
                rotate="right"
                tapePosition="top"
              />
            </motion.div>

            {/* ── Key Solution Highlights ── */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="space-y-8 max-w-2xl"
            >
              <motion.div variants={fadeUp}>
                <h3 className="text-lg font-semibold flex items-center gap-3 mb-3">
                  <Languages className="h-5 w-5 text-muted-foreground" />
                  Bilingual From the Ground Up
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                  English and Chinese (中文) were designed in as first-class
                  citizens, not an afterthought — an EN/中文 toggle across the
                  site with the underlying structure search engines need to index
                  each language cleanly. One brand, two audiences, no compromise.
                </p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="text-lg font-semibold flex items-center gap-3 mb-3">
                  <Search className="h-5 w-5 text-muted-foreground" />
                  SEO-First Architecture
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                  Every page ships with structured metadata, semantic HTML, clean
                  heading hierarchies, an XML sitemap, and structured data — with
                  Google Search Console wired up from launch. The foundation is
                  built to rank; the content strategy to fill it is already
                  underway.
                </p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="text-lg font-semibold flex items-center gap-3 mb-3">
                  <Eye className="h-5 w-5 text-muted-foreground" />
                  A Discreet, Cinematic Identity
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                  A dark, understated design language — deep contrast, restrained
                  motion, a lion motif — that signals control without shouting. It
                  expanded the site into real depth: detailed services, a global
                  reach story, case work, a blog, and a confidential-consultation
                  path for new clients.
                </p>
              </motion.div>

              <motion.div variants={fadeUp}>
                <h3 className="text-lg font-semibold flex items-center gap-3 mb-3">
                  <Lightbulb className="h-5 w-5 text-muted-foreground" />
                  A Platform They Own
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed pl-8">
                  The custom CMS puts publishing in the team&apos;s hands — new
                  services, case studies, and blog posts in either language —
                  turning a static brochure into a platform that can grow with the
                  brand.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 4: THE RESULTS
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
                04 — The Results
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Launched in a Week. Built to Rank.
              </h2>
            </motion.div>

            {/* ── Result Metrics — Scrapbook Cards ── */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
            >
              {[
                {
                  metric: "1 wk",
                  label: "Concept to Launch",
                  sublabel: "Design → live",
                },
                {
                  metric: "100",
                  label: "Performance",
                  sublabel: "up from 75",
                },
                {
                  metric: "100",
                  label: "Lighthouse",
                  sublabel: "Perf · A11y · BP · SEO",
                },
                {
                  metric: "EN /中文",
                  label: "Bilingual",
                  sublabel: "Two audiences",
                },
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

            {/* ── Performance Before & After ── */}
            <motion.div variants={fadeUp} className="mb-12">
              <h3 className="text-lg font-semibold mb-6 text-center">
                PageSpeed Insights — Before &amp; After
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  variants={tiltLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <ScrapbookImage
                    src={oldPerfImg}
                    alt="Old Guardion website performance assessment — Performance: 75, Accessibility: 95, Best Practices: 73, SEO: 92"
                    caption="Before — Aug 3, 2026 (desktop)"
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
                    src={newPerfImg}
                    alt="New Guardion website performance assessment — Performance: 100, Accessibility: 100, Best Practices: 100, SEO: 100"
                    caption="After — Aug 4, 2026 (desktop)"
                    rotate="right"
                    tapePosition="corner"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* ── Result Summary ── */}
            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                In one week, Guardion went from a placeholder to a platform that
                finally matches the caliber of the business behind it.
              </p>
              <p>
                Every Lighthouse category now scores a perfect 100 —
                performance, accessibility, best practices, and SEO — up from a
                desktop baseline of 75 / 95 / 73 / 92, with the Agentic Browsing
                check climbing from 1/2 to 3/3. The brand now reads as premium in
                two languages, with real depth and a blog ready to fill.
              </p>
              <p>
                And this is the launchpad, not the finish line. I&apos;m now
                personally building Guardion&apos;s SEO — content, authority, and
                local and international search — and a data-driven results
                follow-up is coming next quarter, the same way the Acro story
                earned its &quot;90 Days Later&quot; sequel.
              </p>
              <p>
                Shipping something this complete on a one-week clock isn&apos;t a
                fluke, either — it&apos;s a system. I once built{" "}
                <Link
                  href="/blog/two-sites-three-days"
                  className="text-foreground/90 underline decoration-border/50 underline-offset-4 hover:decoration-foreground/60 transition-colors"
                >
                  two distinct brands in 72 hours
                </Link>{" "}
                the same way.
              </p>
            </motion.div>

            {/* ── Checklist — final scrapbook element ── */}
            <motion.div
              variants={tiltLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-md"
            >
              <StickyNote color="green" rotate={-1.5}>
                <p className="text-sm font-semibold text-foreground/80 mb-3">
                  Delivery Checklist
                </p>
                <div className="space-y-2">
                  {[
                    "Full brand platform designed & built in one week",
                    "Bilingual English / Chinese (中文) experience",
                    "Custom CMS for services, case work & blog",
                    "SEO-first architecture + Google Search Console",
                    "Perfect 100 — performance, accessibility, best practices & SEO",
                    "Edge-deployed on Vercel CDN",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400/60 mt-0.5 shrink-0" />
                      <p className="text-xs text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </StickyNote>
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
              Have a similar project in mind?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Whether it&apos;s a brand launch, a bilingual build, or a
              performance overhaul — let&apos;s talk about what your website could
              become.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                Get in Touch
              </Link>
              <a
                href="https://guardion.com.au/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md border border-border/40 text-foreground/80 hover:text-foreground hover:border-border/60 transition-all"
              >
                <ExternalLink className="h-4 w-4" />
                View Live Site
              </a>
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
