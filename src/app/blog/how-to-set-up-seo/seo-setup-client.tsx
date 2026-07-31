"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Wrench,
  FileText,
  Link2,
  MapPin,
  Share2,
  Linkedin,
  Youtube,
  Building2,
  Bot,
  BarChart3,
  Search,
  AtSign,
  Briefcase,
  Mail,
  Activity,
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

/* ── main page ──────────────────────────────────────────────── */

export default function SeoSetupClient() {
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
            {["SEO", "Technical SEO", "Local SEO", "LinkedIn", "Getting Found"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-accent/50 text-muted-foreground border border-border/30"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-3"
          >
            Insight — SEO Setup
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4"
          >
            How to Set Up
            <br />
            <span className="text-gradient">SEO</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            SEO isn't one setting you flip on — it's a system you build across
            every place people search. This is the practical, channel-by-channel
            setup: your{" "}
            <span className="text-foreground/80">website</span> first, then Google
            Business Profile, social media, LinkedIn, and the rest — in the order
            that actually moves rankings.
          </motion.p>

          <motion.p
            variants={fadeIn}
            className="mt-6 text-sm italic text-muted-foreground/50 font-mono"
          >
            Written from the trenches — the same checklist I run on every site I
            build.
          </motion.p>
        </motion.header>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 1: THE FOUNDATION — HOW SEO WORKS
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
                01 — Start Here
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                The Three Layers of SEO
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Before touching a single setting, it helps to know the shape of
                the whole thing. Every SEO task you'll ever do falls into one of
                three layers — and a real setup covers all three.
              </p>
              <p>
                Your website is the hub. Everything else — social, LinkedIn,
                directories — points back to it and vouches for it. Get the order
                right and the work compounds instead of scattering.
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
                  icon: Wrench,
                  title: "Technical SEO",
                  body: "Making your site fast, crawlable, and indexable — so search engines can actually read and store your pages in the first place.",
                },
                {
                  icon: FileText,
                  title: "On-Page SEO",
                  body: "Titles, headings, content, and keywords on each page — telling search engines (and people) exactly what every page is about.",
                },
                {
                  icon: Link2,
                  title: "Off-Page SEO",
                  body: "Signals from outside your site — backlinks, Google Business Profile, social and LinkedIn profiles, reviews, and mentions vouching for you.",
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

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 2: YOUR WEBSITE (THE FOUNDATION)
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
                02 — Step 1: The Website
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Set Up SEO on Your Website First
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Everything else amplifies your website — so it has to be right
                first. Work through the technical layer, then the on-page layer.
                Here's the exact checklist.
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
                  <h3 className="text-lg font-semibold">Technical setup</h3>
                </div>
                <Checklist
                  accent="blue"
                  items={[
                    "Serve crawlable HTML — server-rendered, not a blank JS shell.",
                    "Ship an XML sitemap and a robots.txt that doesn't block Google.",
                    "Add a canonical tag to every page to avoid duplicates.",
                    "Force HTTPS and pass Core Web Vitals — fast, stable, mobile-first.",
                    "Add structured data (schema) so engines understand your pages.",
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
                  <FileText className="h-5 w-5 text-green-400/60" />
                  <h3 className="text-lg font-semibold">On-page setup</h3>
                </div>
                <Checklist
                  items={[
                    "A unique title tag and meta description on every page.",
                    "One clear H1, then logical H2/H3 headings down the page.",
                    "Target real keywords inside genuinely useful content.",
                    "Clean, readable URLs and descriptive image alt text.",
                    "Internal links connecting related pages together.",
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
                      Then: add your site to Google
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      You don't pay to be listed. Verify your site in{" "}
                      <span className="text-foreground/70">
                        Google Search Console
                      </span>
                      , submit your sitemap, and use URL Inspection to request
                      indexing of key pages. Google crawls and indexes the rest on
                      its own.
                    </p>
                  </div>
                </div>
              </StickyNote>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 3: GOOGLE BUSINESS PROFILE (LOCAL)
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
                03 — Step 2: Local Presence
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Claim Your Google Business Profile
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                If you serve any kind of local or regional customer, this is the
                fastest win in all of SEO — and it's free. A complete profile can
                start showing up in Maps and the local pack within weeks.
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
                  <MapPin className="h-5 w-5 text-green-400/70" />
                </div>
                <h3 className="text-lg font-semibold">The local checklist</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                <Checklist
                  items={[
                    "Claim and verify the listing for your business.",
                    "Get your NAP (name, address, phone) exactly right.",
                    "Pick the most specific primary category you can.",
                  ]}
                />
                <Checklist
                  items={[
                    "Add real photos, hours, and services.",
                    "Ask happy customers for reviews — and reply to them.",
                    "Match this NAP everywhere else you appear online.",
                  ]}
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 4: SOCIAL MEDIA SEO
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
                04 — Step 3: Social Media
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Optimize Your Social Profiles
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Social links are mostly "nofollow," so they don't pass direct
                ranking power — but they're still off-page SEO. Your profiles
                themselves rank in search, drive brand searches, and get your
                content discovered and linked to. Set each one up like a mini
                landing page.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: AtSign,
                  color: "blue" as const,
                  rotate: -1.5,
                  title: "Consistent identity",
                  body: "Same name, handle, and NAP across every platform. Consistency is what ties your profiles to your brand in search.",
                },
                {
                  icon: FileText,
                  color: "green" as const,
                  rotate: 1.5,
                  title: "Keyword-rich bios",
                  body: "Put the terms people actually search into your bio and description — not just clever taglines only you understand.",
                },
                {
                  icon: Link2,
                  color: "yellow" as const,
                  rotate: -1,
                  title: "Link back home",
                  body: "Every profile should link to your website. Social is discovery; your site is where that attention converts.",
                },
                {
                  icon: Share2,
                  color: "pink" as const,
                  rotate: 2,
                  title: "Post toward your site",
                  body: "Share content that points people back to owned pages, so borrowed reach turns into real, trackable traffic.",
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

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-sm text-muted-foreground/70 leading-relaxed max-w-2xl mt-8"
            >
              Prefer the deeper argument on owned vs. rented reach? See{" "}
              <Link
                href="/blog/website-vs-social-media"
                className="text-foreground/90 underline decoration-border/50 underline-offset-4 hover:decoration-foreground/60 transition-colors"
              >
                website vs. social media
              </Link>
              .
            </motion.p>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 5: LINKEDIN SEO
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
                05 — Step 4: LinkedIn
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Turn LinkedIn Into a Ranking Asset
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                LinkedIn is one of the highest-authority domains you can put your
                name on — its profiles and company pages routinely rank on page
                one of Google for personal and brand searches. Treat your profile
                like a page you're optimizing.
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
                  <Linkedin className="h-5 w-5 text-blue-400/60" />
                  <h3 className="text-lg font-semibold">Your personal profile</h3>
                </div>
                <Checklist
                  accent="blue"
                  items={[
                    "A keyword-rich headline — not just your job title.",
                    "An About section full of the terms people search.",
                    "A custom public URL (linkedin.com/in/your-name).",
                    "Your website, skills, and experience filled in fully.",
                    "Regular posts or published articles to stay active.",
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
                  <Briefcase className="h-5 w-5 text-green-400/60" />
                  <h3 className="text-lg font-semibold">Your company page</h3>
                </div>
                <Checklist
                  items={[
                    "Complete every field — tagline, About, industry, location.",
                    "Use your real keywords in the description.",
                    "Link to your website and keep branding consistent.",
                    "Post updates so the page stays live and credible.",
                    "Encourage the team to list it as their employer.",
                  ]}
                />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 6: THE OTHERS
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
                06 — Step 5: Everywhere Else
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                YouTube, Directories & AI Search
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                "Being found" now spans more than Google's ten blue links. Once
                the core is set, extend the same identity to the surfaces where
                your customers actually search and where AI assistants look for
                sources to cite.
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
                  icon: Youtube,
                  title: "YouTube",
                  body: "The world's second-largest search engine. Keyword-rich titles, descriptions, and chapters get your videos found — on YouTube and inside Google.",
                },
                {
                  icon: Building2,
                  title: "Directories & Citations",
                  body: "Industry directories and review sites (with identical NAP) build the citations and backlinks that reinforce your off-page authority.",
                },
                {
                  icon: Bot,
                  title: "AI & Answer Engines",
                  body: "Structured, crawlable, genuinely authoritative pages are what ChatGPT, Perplexity, and AI Overviews cite. GEO/AEO is the new off-page frontier.",
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

            <motion.div
              variants={tiltRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-xl mx-auto mt-12"
            >
              <StickyNote color="green" rotate={1.5}>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-green-400/60 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground/80 mb-1">
                      Don't forget the channels you own
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Email lists, referrals, and reviews don't run through an
                      algorithm at all. They make your traffic resilient — the
                      insurance policy behind everything else in your SEO setup.
                    </p>
                  </div>
                </div>
              </StickyNote>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 7: MEASURE & ITERATE
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
                07 — Step 6: Keep It Working
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Measure, Then Iterate
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                SEO isn't a launch; it's a habit. Setup gets you indexed — data
                tells you what to improve next. Expect three to six months before
                real movement, then let the compounding do its work.
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
                  icon: BarChart3,
                  title: "Search Console",
                  body: "Your source of truth: which queries you appear for, click-through rates, indexing issues, and Core Web Vitals — straight from Google.",
                },
                {
                  icon: Activity,
                  title: "Analytics",
                  body: "See which channels send traffic and what visitors actually do. Connect rankings to real outcomes — leads, sales, sign-ups.",
                },
                {
                  icon: Target,
                  title: "Iterate",
                  body: "Double down on pages that climb, refresh the ones that stall, and keep publishing. Small, consistent improvements compound.",
                },
              ].map(({ icon: Icon, title, body }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-2 hover:border-blue-500/30 transition-colors"
                >
                  <div className="w-9 h-9 rounded-full border border-blue-500/20 bg-blue-500/[0.05] flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-blue-400/70" />
                  </div>
                  <h3 className="text-sm font-semibold">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {body}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center pt-10"
            >
              <p className="text-sm italic text-muted-foreground/50 font-mono">
                SEO you set up today keeps paying off — unlike ads that stop the
                moment you stop paying.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 8: PEOPLE ALSO ASK (FAQ)
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
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-sm font-mono tracking-widest uppercase text-muted-foreground mb-2">
                08 — People Also Ask
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Setting Up SEO: Quick Answers
              </h2>
            </motion.div>

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
              Want the foundation set up right the first time?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              The whole system only compounds if the website underneath it is
              fast, crawlable, and built for search. That's exactly what I build —
              let's make sure yours can be found.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/blog/ai-website-builders-seo"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md border border-border/40 text-foreground/80 hover:text-foreground hover:border-border/60 transition-all"
              >
                Read: AI Builders & SEO →
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
