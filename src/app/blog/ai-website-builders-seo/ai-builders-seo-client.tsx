"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Sparkles,
  Wand2,
  Rocket,
  EyeOff,
  FileWarning,
  Layers,
  Gauge,
  Code2,
  Bot,
  Lightbulb,
  PenLine,
  Search,
  Quote,
  Globe,
  Clock,
  Scale,
  CheckCircle2,
  XCircle,
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

/* ── main page ──────────────────────────────────────────────── */

export default function AiBuildersSeoClient() {
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
            {["AI Builders", "Lovable", "SEO", "AI Content", "Field Notes"].map(
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
            Insight — AI & Search
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4"
          >
            Are AI Builders
            <br />
            <span className="text-gradient">Good for SEO?</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            An AI website builder can turn an idea into a live interface before
            your coffee's cold. Whether that site can actually be{" "}
            <span className="text-foreground/80">found</span> is a very different
            question — and the honest answer is more nuanced than either the hype
            or the backlash admits.
          </motion.p>

          <motion.p
            variants={fadeIn}
            className="mt-6 text-sm italic text-muted-foreground/50 font-mono"
          >
            Written from the trenches — after rebuilding AI-prototyped sites for
            search.
          </motion.p>
        </motion.header>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 1: WHY AI BUILDERS FEEL LIKE MAGIC
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
                01 — The Honest Case for AI Builders
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Why They Feel Like Magic
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Let's be fair. Tools like Lovable, Bolt, and v0 are a genuine leap
                — and dismissing them outright would be dishonest.
              </p>
              <p>
                You describe what you want in plain English and watch a working
                interface appear. No boilerplate, no setup, no blank editor. For a
                prototype, a demo, or an MVP that needs to exist{" "}
                <span className="text-foreground/80">this afternoon</span>, that
                speed is genuinely hard to beat.
              </p>
              <p>
                The trouble is that they optimize for{" "}
                <span className="text-foreground/80">looks live</span> — not{" "}
                <span className="text-foreground/80">gets found</span>. And those
                are two very different problems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Sparkles,
                  color: "green" as const,
                  rotate: -2,
                  title: "Idea to UI in Minutes",
                  body: "Describe it in plain English and a working interface appears. For prototypes and demos, nothing gets you to 'something real' faster.",
                },
                {
                  icon: Wand2,
                  color: "blue" as const,
                  rotate: 1.5,
                  title: "No Boilerplate",
                  body: "Routing, state, styling, components — all scaffolded for you. You skip the tedious setup and start from a running app.",
                },
                {
                  icon: Rocket,
                  color: "yellow" as const,
                  rotate: -1,
                  title: "Perfect for MVPs",
                  body: "Validating an idea or pitching a client? An AI builder gets a clickable product in front of people the same day.",
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

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 2: THE SEO CATCH
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
                02 — The Catch Nobody Demos
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Where AI Builders Quietly Cost You Rankings
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                The trouble starts the moment "looks live" has to become "gets
                found." Most builders generate a working interface fast — not the
                technical scaffolding search engines actually read. None of these
                show up in a demo. All of them show up in your rankings.
              </p>
            </motion.div>

            {/* SEO weak points */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-4"
            >
              {[
                {
                  icon: EyeOff,
                  title: "Client-Side Rendering",
                  body: "Many builders ship a single-page app where the real content loads via JavaScript after the page does. Google can render JS, but it's slower and less reliable — and other crawlers and AI engines often see an empty shell.",
                },
                {
                  icon: FileWarning,
                  title: "Thin, Templated Metadata",
                  body: "Title tags, descriptions, canonical URLs, Open Graph — the metadata that decides how you appear in results is often generic, duplicated across pages, or missing entirely unless you wire it up by hand.",
                },
                {
                  icon: Layers,
                  title: "No Structured Data",
                  body: "The schema markup that wins rich results and gets you cited by AI assistants rarely comes out of the box. Without it, engines understand your pages less — and quote them less.",
                },
                {
                  icon: Gauge,
                  title: "Performance Bloat",
                  body: "Generated code favors 'works' over 'lean.' Unused components, heavy client bundles, and unoptimized images drag down Core Web Vitals — a direct ranking and user-experience signal.",
                },
                {
                  icon: Code2,
                  title: "A Customization Ceiling",
                  body: "The moment you need a redirect rule, a sitemap tweak, or a rendering change the tool didn't anticipate, you're fighting the abstraction instead of editing code you control.",
                },
                {
                  icon: Bot,
                  title: "Generic by Default",
                  body: "Everyone prompting the same tools gets similar structure and copy. Search rewards distinctive, genuinely useful pages — not another near-identical AI-scaffolded template.",
                },
              ].map(({ icon: Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  variants={i % 2 === 0 ? tiltLeft : tiltRight}
                  className="relative bg-card/60 border border-border/30 rounded-lg p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-red-500/20 bg-red-500/[0.05] flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-red-400/60" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {body}
                      </p>
                    </div>
                  </div>
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
                It renders fine in the preview — until Googlebot sees a blank
                page.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 3: THE LOVABLE QUESTION
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
                03 — The Lovable Question
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Are Lovable Websites Good for SEO?
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Lovable is one of the best tools at turning a prompt into a
                polished React app. But "good for SEO" depends entirely on what
                you're building.
              </p>
              <p>
                Its default output is a client-rendered Vite single-page app —
                where text and metadata arrive via JavaScript. That's a great fit
                for dashboards and logged-in tools where SEO is irrelevant, and a
                weak fit for content and marketing sites that live or die by
                search.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                variants={tiltLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-green-500/20 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400/70" />
                  <h3 className="text-lg font-semibold">A great fit for…</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Internal tools and dashboards behind a login.",
                    "Web apps where users act, not where Google reads.",
                    "Fast prototypes, demos, and investor pitches.",
                    "MVPs validating an idea before you invest more.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400/50 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={tiltRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-red-500/20 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <XCircle className="h-5 w-5 text-red-400/60" />
                  <h3 className="text-lg font-semibold">A weak fit for…</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "Blogs and content sites that must rank on Google.",
                    "Landing pages where organic traffic drives leads.",
                    "Local business sites competing in search results.",
                    "Anything that needs to be cited by AI assistants.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-400/50 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
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
                  <Lightbulb className="h-5 w-5 text-yellow-400/60 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground/80 mb-1">
                      The honest trade-off
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      You can make a Lovable site rank — add prerendering or SSR,
                      real meta tags, and structured data. But that's engineering
                      work bolted onto generated code. For an SEO-critical site,
                      the cleaner pattern is to prototype in Lovable, then ship on
                      a framework built for rendering, like Next.js.
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
            SECTION 4: IS AI-GENERATED CONTENT GOOD FOR SEO?
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
                04 — Content, Not Just Code
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Is AI-Generated Content Good for SEO?
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                Google's position is clearer than the panic suggests: it rewards
                helpful content however it's made, and penalizes content made only
                to game rankings. The method isn't the problem — the quality is.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                variants={tiltLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <StickyNote color="green" rotate={-1.5}>
                  <PenLine className="h-5 w-5 text-green-400/60 mb-2" />
                  <p className="text-sm font-semibold text-foreground/80 mb-1">
                    What ranks
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    AI drafts refined by a human with real expertise and
                    first-hand experience — accurate, specific, and genuinely
                    useful. Google rewards the result, not the method. That's
                    E-E-A-T in practice.
                  </p>
                </StickyNote>
              </motion.div>

              <motion.div
                variants={tiltRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <StickyNote color="red" rotate={1.5}>
                  <FileWarning className="h-5 w-5 text-red-400/60 mb-2" />
                  <p className="text-sm font-semibold text-foreground/80 mb-1">
                    What gets filtered
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Unedited, mass-produced pages published only to rank. Google's
                    spam policies explicitly target scaled content abuse — thin,
                    generic output gets buried or deindexed.
                  </p>
                </StickyNote>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 5: IS SEO DEAD?
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
                05 — The Bigger Picture
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Is SEO Dead? No — It's Splitting in Two
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                The biggest threat isn't AI builders — it's{" "}
                <span className="text-foreground/80">zero-click search</span>. AI
                Overviews and chatbots answer more queries on the page itself, so
                fewer people click through. SEO isn't being replaced; it's
                expanding into a wider game.
              </p>
              <p>
                Nothing is "better than SEO now" — the winning move is SEO plus
                answer-engine visibility, on a foundation you actually own.
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
                  icon: Search,
                  title: "Still: Technical SEO",
                  body: "Fast, crawlable, well-structured pages remain the foundation. If engines can't read you, nothing else matters.",
                },
                {
                  icon: Quote,
                  title: "New: Answer-Engine Visibility",
                  body: "GEO and AEO — structuring content so AI Overviews, ChatGPT, and Perplexity cite you as a source, not just rank you.",
                },
                {
                  icon: Globe,
                  title: "Insurance: Owned Channels",
                  body: "Email, an audience, referrals. The less you depend on any single algorithm, the safer your traffic.",
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
            SECTION 6: THE VERDICT
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
                06 — So Should You Use One?
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Prototype With AI, Ship for Search
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mb-12"
            >
              <p className="text-lg text-foreground/90">
                This was never about AI builders being "bad." It's about matching
                the tool to the job — and being clear-eyed about whether that job
                depends on search.
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
                  <Clock className="h-5 w-5 text-blue-400/60" />
                  <h3 className="text-lg font-semibold">
                    Reach for an AI builder when…
                  </h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "You're prototyping or need a demo today.",
                    "It's an internal tool or app behind a login.",
                    "You're validating an MVP before investing more.",
                    "Organic search genuinely doesn't matter here.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-blue-400/50 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={tiltRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card/60 border border-border/30 rounded-lg p-6 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Scale className="h-5 w-5 text-green-400/60" />
                  <h3 className="text-lg font-semibold">Build for search when…</h3>
                </div>
                <ul className="space-y-2.5">
                  {[
                    "The site has to rank and drive leads or revenue.",
                    "You need full control over content and metadata.",
                    "Server-rendered, crawlable pages are non-negotiable.",
                    "It's a long-lived business asset, not a throwaway.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400/60 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl mt-12"
            >
              <p>
                For most serious businesses, the honest answer is to use AI
                builders for what they're brilliant at — moving fast — then
                graduate the SEO-critical work onto a real framework, where
                rendering, metadata, and structured data are yours to control. You
                get the speed <span className="text-foreground/80">and</span> the
                search.
              </p>
              <p>
                Framer sits at the polished end of that same spectrum —
                genuinely good, until the SEO stakes get serious. I mapped out
                exactly where it wins and where it hits a ceiling in{" "}
                <Link
                  href="/blog/framer-ai-vs-custom-coded"
                  className="text-foreground/90 underline decoration-border/50 underline-offset-4 hover:decoration-foreground/60 transition-colors"
                >
                  Framer AI vs. custom-coded
                </Link>
                .
              </p>
              <p>
                It's the same lesson as the{" "}
                <Link
                  href="/blog/wordpress-vs-hardcoded"
                  className="text-foreground/90 underline decoration-border/50 underline-offset-4 hover:decoration-foreground/60 transition-colors"
                >
                  WordPress vs. hardcoded
                </Link>{" "}
                debate: convenience up front, control over the long run — and for
                anything that has to be found, control wins.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* ── Divider ── */}
        <div className="container max-w-4xl">
          <div className="h-px bg-border/20" />
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            SECTION 7: PEOPLE ALSO ASK (FAQ)
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
                07 — People Also Ask
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                AI, Builders & SEO: Quick Answers
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
              Prototyped in an AI builder — and now it needs to rank?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              If your AI-built site looks great but can't be found, let's talk
              about turning it into a fast, crawlable platform search engines and
              AI assistants actually surface.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/blog/wordpress-vs-hardcoded"
                className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-md border border-border/40 text-foreground/80 hover:text-foreground hover:border-border/60 transition-all"
              >
                Read: WordPress vs. Hardcoded →
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
