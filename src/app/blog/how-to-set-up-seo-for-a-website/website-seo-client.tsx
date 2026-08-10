"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Wrench,
  FileText,
  Link2,
  Search,
  Gauge,
  Rocket,
  ShieldCheck,
  Braces,
  Smartphone,
  Zap,
  Timer,
  AlertTriangle,
  KeyRound,
  Type,
  Image as ImageIcon,
  Target,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
import { FAQS } from "./faqs";

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

const tiltLeft: Variants = {
  hidden: { opacity: 0, rotate: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    rotate: -1.5,
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

/* ── sticky note component ──────────────────────────────────── */

function StickyNote({
  children,
  color = "yellow",
  rotate = -3,
}: {
  children: React.ReactNode;
  color?: "yellow" | "blue" | "pink" | "green" | "red";
  rotate?: number;
}) {
  const bgMap = {
    yellow: "bg-yellow-500/[0.08] border-yellow-500/20",
    blue: "bg-blue-500/[0.08] border-blue-500/20",
    pink: "bg-pink-500/[0.08] border-pink-500/20",
    green: "bg-green-500/[0.08] border-green-500/20",
    red: "bg-red-500/[0.08] border-red-500/20",
  };

  return (
    <div
      className={`${bgMap[color]} border rounded-sm p-4 shadow-md shadow-black/10 h-full`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {children}
    </div>
  );
}

/* ── reusable checklist ─────────────────────────────────────── */

function Checklist({
  items,
  accent = "green",
}: {
  items: string[];
  accent?: "green" | "blue";
}) {
  const c = accent === "blue" ? "text-blue-400/60" : "text-green-400/60";
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <CheckCircle2 className={`h-4 w-4 ${c} mt-0.5 shrink-0`} />
          <span className="text-sm text-muted-foreground leading-relaxed">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ── section eyebrow + heading ──────────────────────────────── */

function StepHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div variants={fadeUp} className="mb-12">
      <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
    </motion.div>
  );
}

function Divider() {
  return (
    <div className="container max-w-4xl">
      <div className="h-px bg-border/20" />
    </div>
  );
}

/* ── main page ──────────────────────────────────────────────── */

export default function WebsiteSeoClient() {
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
              "SEO",
              "Technical SEO",
              "On-Page SEO",
              "Core Web Vitals",
              "Search Console",
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
            Insight — Website SEO Setup
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4"
          >
            How to Set Up SEO
            <br />
            for a <span className="text-gradient">Website</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Your website is the one part of SEO you completely own — no algorithm,
            no rented reach. This is the exact{" "}
            <span className="text-foreground/80">on-site setup</span>: the
            technical and on-page work, in the order I run it on every site I
            build. Eight steps, top to bottom, nothing missed.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground/70"
          >
            <span className="italic font-mono text-muted-foreground/50">
              Looking for the whole system — Google Business Profile, social,
              LinkedIn?
            </span>
            <Link
              href="/blog/how-to-set-up-seo"
              className="text-foreground/90 underline decoration-border/50 underline-offset-4 hover:decoration-foreground/60 transition-colors"
            >
              Start with the channel-by-channel guide
            </Link>
            <span className="text-muted-foreground/50">
              — then come here for the website itself.
            </span>
          </motion.div>
        </motion.header>

        <Divider />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 0: WHY THE WEBSITE COMES FIRST
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <StepHeading
              eyebrow="00 — Orientation"
              title="Two Layers, One Website"
            />

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                On-site SEO splits into two layers, and you build them in this
                order. Get one wrong and the other can't save it.
              </p>
              <p>
                <span className="text-foreground/80">Technical SEO</span> makes
                sure Google can crawl, render, and index your pages at all.{" "}
                <span className="text-foreground/80">On-page SEO</span> makes each
                page clearly about something worth ranking. Everything below is one
                of these two — nothing else on your site matters for search until
                these are right.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                {
                  icon: Wrench,
                  title: "Technical SEO",
                  body: "Crawlable HTML, sitemap, robots.txt, canonical tags, HTTPS, structured data, and Core Web Vitals — so search engines can read and trust the site.",
                },
                {
                  icon: FileText,
                  title: "On-Page SEO",
                  body: "Keyword-mapped pages, title tags, meta descriptions, one H1 with logical headings, genuinely useful content, clean URLs, internal links, and alt text.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-2 hover:border-green-500/30 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full border border-green-500/20 bg-green-500/[0.05] flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-green-400/70" />
                  </div>
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <Divider />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            STEP 1: MAP KEYWORDS TO PAGES
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <StepHeading
              eyebrow="01 — Before you touch code"
              title="Map One Keyword to Each Page"
            />

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                This is the step almost everyone skips — and the reason so many
                sites get impressions but no clicks. Before a single tag, decide
                what each page is <em>for</em>.
              </p>
              <p>
                Give every page one primary search intent. Two pages chasing the
                same keyword compete with each other and split their own
                authority — that's cannibalization, and it quietly caps your
                rankings. One page, one job.
              </p>
            </motion.div>

            <motion.div
              variants={tiltLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card/60 border border-border/30 rounded-lg p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full border border-green-500/20 bg-green-500/[0.05] flex items-center justify-center shrink-0">
                  <KeyRound className="h-5 w-5 text-green-400/70" />
                </div>
                <h3 className="text-lg font-semibold">The keyword map</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                <Checklist
                  items={[
                    "List the terms your actual customers search for.",
                    "Match search intent — informational vs. buying.",
                    "Assign exactly one primary keyword per page.",
                  ]}
                />
                <Checklist
                  items={[
                    "Give each intent its own dedicated URL.",
                    "Note secondary terms to support, not duplicate.",
                    "Kill or merge pages that chase the same term.",
                  ]}
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        <Divider />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            STEP 2: CRAWLABLE & INDEXABLE
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <StepHeading
              eyebrow="02 — The gate"
              title="Make the Site Crawlable & Indexable"
            />

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                None of the rest matters if Google can't read the page. This is
                the gate every URL has to pass before it can rank.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={tiltLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Wrench className="h-5 w-5 text-blue-400/60" />
                  <h3 className="text-lg font-semibold">Crawl & index setup</h3>
                </div>
                <Checklist
                  accent="blue"
                  items={[
                    "Serve real HTML — server-rendered, not a blank JS shell.",
                    "Publish an XML sitemap listing every indexable URL.",
                    "Add a robots.txt that allows Google and points to the sitemap.",
                    "Make sure no key page carries an accidental \"noindex\".",
                    "Keep important pages within a few clicks of the homepage.",
                  ]}
                />
              </motion.div>

              <motion.div
                variants={tiltRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-yellow-400/60" />
                  <h3 className="text-lg font-semibold">
                    The JavaScript trap
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  If your content only appears after JavaScript runs — the default
                  for many single-page-app builders — Google may index a nearly
                  empty page. Server-side rendering or static generation (what
                  Next.js does by default) ships the words in the initial HTML, so
                  crawlers and AI assistants see them instantly. View source: if
                  your headline isn't in the raw HTML, that's your first fix.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            STEP 3: TITLE TAGS & META DESCRIPTIONS
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <StepHeading
              eyebrow="03 — The click layer"
              title="Write Title Tags & Meta Descriptions"
            />

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                The title tag is the single highest-leverage on-page element — it's
                both a top ranking signal and the blue link people decide whether
                to click. Ranking on page one with a weak title is exactly how you
                rack up impressions and zero clicks.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={tiltLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Type className="h-5 w-5 text-green-400/60" />
                  <h3 className="text-lg font-semibold">Title tags</h3>
                </div>
                <Checklist
                  items={[
                    "One unique title per page — never repeat them.",
                    "Front-load the primary keyword; keep it ~50–60 characters.",
                    "Follow a pattern: Primary Keyword — Benefit or Brand.",
                    "Write for a human — earn the click, don't just stuff.",
                  ]}
                />
              </motion.div>

              <motion.div
                variants={tiltRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-blue-400/60" />
                  <h3 className="text-lg font-semibold">Meta descriptions</h3>
                </div>
                <Checklist
                  accent="blue"
                  items={[
                    "~150 characters that sell the click, not keywords.",
                    "Include the search term so Google bolds the match.",
                    "Make a promise the page actually keeps.",
                    "Unique per page — no site-wide boilerplate.",
                  ]}
                />
              </motion.div>
            </div>

            <motion.div
              variants={tiltLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-xl mx-auto mt-12"
            >
              <StickyNote color="yellow" rotate={-1.5}>
                <div className="flex items-start gap-3">
                  <Search className="h-5 w-5 text-yellow-400/60 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground/80 mb-1">
                      Impressions but no clicks? Start here.
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      If Search Console shows a page earning impressions with a
                      near-zero click-through rate, the title and description are
                      usually the fix — long before you touch rankings. Rewrite
                      them to match what people typed, then watch the CTR column.
                    </p>
                  </div>
                </div>
              </StickyNote>
            </motion.div>
          </motion.div>
        </section>

        <Divider />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            STEP 4: HEADINGS & CONTENT
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <StepHeading
              eyebrow="04 — The page itself"
              title="Structure Headings & Content"
            />

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Headings are the outline Google reads to understand the page.
                Content is what actually earns the ranking. Structure the first,
                and make the second genuinely the best answer to the query.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={tiltLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-green-400/60" />
                  <h3 className="text-lg font-semibold">Heading structure</h3>
                </div>
                <Checklist
                  items={[
                    "Exactly one H1 per page, matching the search intent.",
                    "Logical H2/H3 nesting — an outline a person could follow.",
                    "Work the keyword and its variants in naturally.",
                    "Use headings to answer the questions people ask.",
                  ]}
                />
              </motion.div>

              <motion.div
                variants={tiltRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-blue-400/60" />
                  <h3 className="text-lg font-semibold">Content that ranks</h3>
                </div>
                <Checklist
                  accent="blue"
                  items={[
                    "Actually answer the query — better than page-one rivals.",
                    "Write for people first; keywords fall out naturally.",
                    "Add depth, specifics, and real experience Google rewards.",
                    "Keep it fresh — update pages instead of letting them rot.",
                  ]}
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            STEP 5: URLS, LINKS & IMAGES
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <StepHeading
              eyebrow="05 — The connective tissue"
              title="URLs, Internal Links & Images"
            />

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                These are the details that tie a site together — cheap to get
                right, expensive to ignore. They spread ranking power between your
                pages and make every one easier to understand.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Link2,
                  color: "blue" as const,
                  rotate: -1.5,
                  title: "Clean URLs",
                  body: "Short, readable, keyword-bearing slugs. /website-seo-setup, not /page?id=42. Set one and keep it — redirect if it ever changes.",
                },
                {
                  icon: Link2,
                  color: "green" as const,
                  rotate: 1.5,
                  title: "Internal links",
                  body: "Link related pages with descriptive anchor text. This is how ranking power flows through the site and how Google finds deep pages.",
                },
                {
                  icon: ImageIcon,
                  color: "yellow" as const,
                  rotate: -1,
                  title: "Images",
                  body: "Descriptive alt text, compressed files, explicit width and height, and next-gen formats — accessibility, speed, and image search in one.",
                },
              ].map(({ icon: Icon, color, rotate, title, body }) => (
                <motion.div
                  key={title}
                  variants={popIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <StickyNote color={color} rotate={rotate}>
                    <Icon className="h-5 w-5 text-foreground/40 mb-2" />
                    <p className="text-sm font-semibold text-foreground/80 mb-1">
                      {title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {body}
                    </p>
                  </StickyNote>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            STEP 6: TECHNICAL MUST-HAVES
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <StepHeading
              eyebrow="06 — Under the hood"
              title="The Technical Must-Haves"
            />

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Set these once and they quietly work forever. They don't change a
                word on the page — they tell search engines how to interpret and
                trust what's already there.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={tiltLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-green-400/60" />
                  <h3 className="text-lg font-semibold">Trust & duplication</h3>
                </div>
                <Checklist
                  items={[
                    "Force HTTPS everywhere — it's a baseline ranking signal.",
                    "Add a canonical tag to every page to prevent duplicates.",
                    "Redirect www/non-www and trailing-slash variants to one URL.",
                    "Confirm the site is fully mobile-friendly (Google indexes mobile-first).",
                  ]}
                />
              </motion.div>

              <motion.div
                variants={tiltRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Braces className="h-5 w-5 text-blue-400/60" />
                  <h3 className="text-lg font-semibold">Structured data</h3>
                </div>
                <Checklist
                  accent="blue"
                  items={[
                    "Add JSON-LD schema so engines understand each page.",
                    "Organization or Person for the site's identity.",
                    "Article + Breadcrumb on posts; FAQPage for Q&A blocks.",
                    "Validate it in Google's Rich Results Test before shipping.",
                  ]}
                />
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mt-10 text-sm text-muted-foreground/70"
            >
              <Smartphone className="h-4 w-4 text-muted-foreground/50" />
              <span>
                Multilingual site? Add <code className="text-foreground/70">hreflang</code>{" "}
                tags so each language version ranks in the right region.
              </span>
            </motion.div>
          </motion.div>
        </section>

        <Divider />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            STEP 7: CORE WEB VITALS
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <StepHeading
              eyebrow="07 — The tiebreaker"
              title="Pass Core Web Vitals"
            />

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Speed rarely wins a ranking outright, but it's the tiebreaker
                between otherwise-equal pages — and a slow site loses visitors
                before they ever convert. Google grades three real-world metrics.
                Aim for the green thresholds.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {[
                {
                  icon: Timer,
                  metric: "LCP",
                  label: "Loading",
                  target: "≤ 2.5s",
                  body: "Largest Contentful Paint — how fast the main content appears. Fix with image sizing, caching, and a fast host.",
                },
                {
                  icon: Zap,
                  metric: "INP",
                  label: "Responsiveness",
                  target: "≤ 200ms",
                  body: "Interaction to Next Paint — how quickly the page reacts to taps and clicks. Trim and split heavy JavaScript.",
                },
                {
                  icon: Gauge,
                  metric: "CLS",
                  label: "Stability",
                  target: "≤ 0.1",
                  body: "Cumulative Layout Shift — how much the page jumps as it loads. Reserve space for images, fonts, and ads.",
                },
              ].map(({ icon: Icon, metric, label, target, body }) => (
                <motion.div
                  key={metric}
                  variants={fadeUp}
                  className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-2 hover:border-blue-500/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-full border border-blue-500/20 bg-blue-500/[0.05] flex items-center justify-center shrink-0">
                      <Icon className="h-4 w-4 text-blue-400/70" />
                    </div>
                    <span className="text-xs font-mono text-green-400/70">
                      {target}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold">
                    {metric}{" "}
                    <span className="text-muted-foreground font-normal">
                      · {label}
                    </span>
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {body}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm text-muted-foreground/70 leading-relaxed max-w-2xl mt-8"
            >
              This is where the platform you build on shows. A hand-built or
              framework-rendered site clears these by default; a plugin-heavy
              build fights them forever — the case I make in{" "}
              <Link
                href="/blog/wordpress-vs-hardcoded"
                className="text-foreground/90 underline decoration-border/50 underline-offset-4 hover:decoration-foreground/60 transition-colors"
              >
                WordPress vs. hardcoded
              </Link>
              .
            </motion.p>
          </motion.div>
        </section>

        <Divider />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            STEP 8: SUBMIT & GET INDEXED
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <StepHeading
              eyebrow="08 — Go live in search"
              title="Submit to Google & Get Indexed"
            />

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                You don't pay or wait to be listed — you tell Google you exist.
                This is the step that turns a finished site into a findable one,
                and it's free.
              </p>
            </motion.div>

            <motion.div
              variants={tiltLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card/60 border border-border/30 rounded-lg p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full border border-green-500/20 bg-green-500/[0.05] flex items-center justify-center shrink-0">
                  <Rocket className="h-5 w-5 text-green-400/70" />
                </div>
                <h3 className="text-lg font-semibold">The launch checklist</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                <Checklist
                  items={[
                    "Verify the site in Google Search Console.",
                    "Submit your XML sitemap under Sitemaps.",
                    "Use URL Inspection to request indexing of key pages.",
                  ]}
                />
                <Checklist
                  items={[
                    "Do the same in Bing Webmaster Tools while you're at it.",
                    "Connect Google Analytics to see what visitors do.",
                    "Confirm robots.txt and meta tags aren't blocking anything.",
                  ]}
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        <Divider />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            VERIFY & TROUBLESHOOT
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <StepHeading
              eyebrow="09 — When it doesn't show up"
              title="Verify It Worked — and Fix It If It Didn't"
            />

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Setup done doesn't mean indexed. Search{" "}
                <code className="text-foreground/70">site:yourdomain.com</code> in
                Google to see what's live, then inspect any missing URL in Search
                Console — it tells you exactly why. Nine times out of ten it's one
                of these.
              </p>
            </motion.div>

            <motion.div
              variants={tiltRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card/60 border border-border/30 rounded-lg p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full border border-red-500/20 bg-red-500/[0.05] flex items-center justify-center shrink-0">
                  <AlertTriangle className="h-5 w-5 text-red-400/70" />
                </div>
                <h3 className="text-lg font-semibold">
                  Why a page isn't indexed
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                <Checklist
                  items={[
                    "A leftover \"noindex\" tag from staging or a template.",
                    "robots.txt disallowing the path or the whole site.",
                    "A canonical tag pointing at a different URL.",
                  ]}
                />
                <Checklist
                  items={[
                    "Content that only renders in JavaScript Google can't run.",
                    "The page is too thin or duplicates another page.",
                    "It's simply too new — request indexing and give it days.",
                  ]}
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center pt-10"
            >
              <p className="text-sm italic text-muted-foreground/50 font-mono">
                Setup makes you eligible. Content, links, and time earn the
                ranking — and the work you do now keeps compounding.
              </p>
            </motion.div>
          </motion.div>
        </section>

        <Divider />

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            PEOPLE ALSO ASK (FAQ)
            Verbatim question headings + concise answers so Google
            can lift them into "People also ask" / featured snippets.
        ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="container max-w-4xl py-20 lg:py-28">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <StepHeading
              eyebrow="10 — People Also Ask"
              title="Website SEO Setup: Quick Answers"
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.08 }}
              className="space-y-4"
            >
              {FAQS.map(({ q, a }) => (
                <motion.div
                  key={q}
                  variants={fadeUp}
                  className="bg-card/60 border border-border/30 rounded-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full border border-border/40 bg-accent/40 flex items-center justify-center shrink-0">
                      <HelpCircle className="h-4 w-4 text-foreground/50" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{q}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {a}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
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
              Want a website that's built to be found?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Every step above is baked into the sites I build — server-rendered,
              schema-marked, and passing Core Web Vitals on day one. If your
              current site is fighting its own foundation, let's fix that.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/blog/how-to-set-up-seo"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md border border-border/40 text-foreground/80 hover:text-foreground hover:border-border/60 transition-all"
              >
                Read: How to Set Up SEO (All Channels) →
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
