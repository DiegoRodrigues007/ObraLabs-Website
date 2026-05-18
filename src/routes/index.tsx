import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, CheckCircle2, HardHat, LineChart, Users2, FileText,
  CalendarRange, Smartphone, Camera, LayoutDashboard, Building2, Quote,
  ChevronDown, Star, ShieldCheck, Zap, Clock,
} from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading, SectionEyebrow } from "@/components/site/Section";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import constructionSite from "@/assets/construction-site.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ObraLabs — Construction Management Software for Modern Builders" },
      { name: "description", content: "ObraLabs is the modern platform for construction management: scheduling, real-time progress tracking, reports, photos and team collaboration in one place." },
      { property: "og:title", content: "ObraLabs — Construction Management Software" },
      { property: "og:description", content: "Run every project from one place. Schedules, reports, photos, dashboards and field tools built for engineers and builders." },
    ],
  }),
  component: HomePage,
});

const FEATURES = [
  { icon: Building2, title: "Project Management", desc: "Plan, organize and run every construction project from a single source of truth." },
  { icon: LineChart, title: "Real-time Progress", desc: "Track milestones, percent-complete and field updates as they happen." },
  { icon: Users2, title: "Team Collaboration", desc: "Bring engineers, architects and contractors together with shared workflows." },
  { icon: FileText, title: "Smart Reports", desc: "Generate daily reports, RFIs and documentation in seconds, not hours." },
  { icon: CalendarRange, title: "Scheduling & Timeline", desc: "Visual Gantt planning with dependencies, baselines and critical path." },
  { icon: Smartphone, title: "Mobile Field Access", desc: "Native-feel mobile app for crews to log work, photos and issues on site." },
  { icon: Camera, title: "Photo & File Management", desc: "Geo-tagged photos and drawings, organized by project, phase and location." },
  { icon: LayoutDashboard, title: "Dashboard Analytics", desc: "Executive dashboards with cost, schedule and productivity KPIs." },
  { icon: HardHat, title: "Safety & Compliance", desc: "Inspections, checklists and audit trails keep your sites compliant." },
];

const STATS = [
  { value: "2,400+", label: "Active projects" },
  { value: "98%", label: "On-time delivery" },
  { value: "30+", label: "Countries served" },
  { value: "12hr", label: "Saved per week" },
];

const TESTIMONIALS = [
  { quote: "ObraLabs replaced three tools and gave our project managers their afternoons back. The field-to-office loop is finally seamless.", name: "Carla Mendes", role: "Director of Operations, Vertix Construções" },
  { quote: "We cut report writing time by 70%. The mobile app is the first one our crews actually open every day.", name: "Rafael Souza", role: "Senior Project Engineer, Núcleo Engenharia" },
  { quote: "The dashboards give our executive team real visibility for the first time. It paid for itself in the first quarter.", name: "Patrícia Lima", role: "COO, ArcoBuild" },
];

const FAQ = [
  { q: "How long does it take to onboard a new project?", a: "Most teams import their first project and go live in under a week. Our onboarding specialists guide you through templates and integrations." },
  { q: "Does ObraLabs work offline on construction sites?", a: "Yes. The mobile app captures photos, forms and logs offline and syncs automatically when connectivity returns." },
  { q: "Can I integrate with the tools I already use?", a: "ObraLabs integrates with leading ERP, accounting and BIM tools, plus a full REST API and webhooks for custom workflows." },
  { q: "Is my project data secure?", a: "All data is encrypted in transit and at rest. We are SOC 2 aligned and offer role-based access, SSO and audit logs on Business and Enterprise plans." },
  { q: "Do you offer training and support?", a: "Every plan includes onboarding, documentation and email support. Business and Enterprise include dedicated success managers." },
];

const PRICING = [
  {
    name: "Starter",
    price: "$49",
    desc: "For small teams running their first projects in ObraLabs.",
    features: ["Up to 3 active projects", "10 team members", "Mobile field app", "Photo & file storage", "Email support"],
    cta: "Start free trial",
    featured: false,
  },
  {
    name: "Business",
    price: "$129",
    desc: "Scale across portfolios with advanced planning and analytics.",
    features: ["Unlimited projects", "50 team members", "Gantt scheduling & baselines", "Custom reports & dashboards", "Integrations & API", "Priority support"],
    cta: "Request a demo",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "For construction groups with advanced security and SLAs.",
    features: ["Unlimited everything", "SSO & SCIM", "Dedicated success manager", "Advanced security & audit", "Custom integrations", "99.9% uptime SLA"],
    cta: "Talk to sales",
    featured: false,
  },
];

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <LogoStrip />
      <Features />
      <ProjectShowcase />
      <Benefits />
      <Stats />
      <Pricing />
      <Testimonials />
      <FAQSection />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.95_0.06_55_/_0.7),transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[linear-gradient(180deg,oklch(0.985_0.005_60)_0%,transparent_100%)]" />
      <div className="container-page pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="animate-fade-up">
            <SectionEyebrow>Construction Management Platform</SectionEyebrow>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              Build smarter. <br />
              Deliver on <span className="text-gradient-brand">time and budget.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
              ObraLabs is the modern operating system for construction teams — scheduling, real-time progress, reports, photos and field workflows in one elegant platform.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Start Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/features"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
              >
                See the Platform
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["14-day free trial", "No credit card required", "Setup in minutes"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-[var(--gradient-warm-glow)] blur-2xl" />
            <div className="relative rounded-2xl">
              <img
                src={dashboardMockup}
                alt="ObraLabs construction management dashboard"
                width={1600}
                height={1200}
                className="w-full drop-shadow-2xl"
              />
            </div>
            <FloatingCard className="absolute -left-2 top-12 hidden md:flex" icon={<Zap className="h-4 w-4 text-primary" />} title="Live progress" sub="Tower B · 64%" />
            <FloatingCard className="absolute -right-2 bottom-16 hidden md:flex" icon={<ShieldCheck className="h-4 w-4 text-primary" />} title="Safety check" sub="12 of 12 passed" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({ className = "", icon, title, sub }: { className?: string; icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className={`animate-float items-center gap-3 rounded-xl border border-border bg-white/95 px-4 py-3 shadow-elevated backdrop-blur ${className}`}>
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10">{icon}</div>
      <div>
        <p className="text-xs font-semibold text-[var(--ink)]">{title}</p>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}

function LogoStrip() {
  const items = ["VERTIX", "NÚCLEO", "ARCOBUILD", "TERRA", "FUNDARE", "MASTRO+CO"];
  return (
    <section className="border-y border-border bg-[var(--surface)]">
      <div className="container-page py-8">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Trusted by leading builders & engineering firms
        </p>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 md:grid-cols-6">
          {items.map((name) => (
            <div key={name} className="text-center font-display text-lg font-bold tracking-widest text-muted-foreground/60 transition-colors hover:text-[var(--ink)]">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Platform"
            title={<>Everything your team needs to <span className="text-gradient-brand">deliver</span></>}
            description="One platform that connects the office and the field — from blueprints to handover."
          />
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--ink)] text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--ink)]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/0 blur-2xl transition-colors group-hover:bg-primary/15" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectShowcase() {
  const blocks = [
    { icon: LayoutDashboard, t: "Unified project view", d: "See cost, schedule, quality and safety in one workspace per project." },
    { icon: Clock, t: "Critical path planning", d: "Build schedules with dependencies, baselines and what-if scenarios." },
    { icon: Camera, t: "Daily site logs", d: "Photos, weather, headcount and notes captured from any mobile device." },
  ];
  return (
    <section className="bg-[var(--ink)] py-24 text-white md:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src={constructionSite}
              alt="Engineers reviewing project on construction site"
              width={1600} height={1200} loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-white/10 bg-[var(--ink)] p-5 shadow-elevated sm:block">
            <p className="text-xs uppercase tracking-widest text-white/50">This week</p>
            <p className="mt-1 font-display text-3xl font-bold">+24%</p>
            <p className="text-xs text-white/60">Productivity vs. baseline</p>
          </div>
        </div>

        <div>
          <SectionEyebrow>Built for the field</SectionEyebrow>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.05]">
            From blueprint to handover, <span className="text-primary">in control.</span>
          </h2>
          <p className="mt-4 max-w-lg text-white/70">
            Standardize how projects are planned, executed and reported across your entire portfolio — without forcing your teams into clunky software.
          </p>

          <div className="mt-10 space-y-6">
            {blocks.map(({ icon: Icon, t, d }) => (
              <div key={t} className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">{t}</h3>
                  <p className="mt-1 text-sm text-white/60">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const audiences = [
    { tag: "For Engineers", title: "Spend less time on paperwork.", points: ["Automated daily reports", "Mobile checklists & RFIs", "Live KPI dashboards"] },
    { tag: "For Architects", title: "Keep design intent on track.", points: ["Drawing management & markups", "Issue tracking with photos", "Version-controlled docs"] },
    { tag: "For Builders", title: "Run every site, every day.", points: ["Schedule & resource planning", "Safety & quality compliance", "Real-time progress visibility"] },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Built for your team"
          title={<>Made for the people who actually <span className="text-gradient-brand">build</span></>}
          description="ObraLabs adapts to the way engineers, architects and builders work — in the office and on site."
        />
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.tag} className="rounded-2xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-elevated">
              <span className="inline-flex rounded-full bg-[var(--ink)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">{a.tag}</span>
              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-[var(--ink)]">{a.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {a.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="bg-[var(--surface)] py-16">
      <div className="container-page grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl font-bold tracking-tight text-[var(--ink)] md:text-5xl">{s.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            align="center"
            eyebrow="Pricing"
            title={<>Simple pricing that scales with your <span className="text-gradient-brand">portfolio</span></>}
            description="Start free. Upgrade when you're ready. No setup fees, no surprises."
          />
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PRICING.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                p.featured
                  ? "border-transparent bg-[var(--ink)] text-white shadow-elevated lg:-translate-y-2"
                  : "border-border bg-card text-[var(--ink)] shadow-soft hover:-translate-y-1 hover:shadow-elevated"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl font-bold tracking-tight">{p.price}</span>
                {p.price !== "Custom" && <span className={p.featured ? "text-white/60" : "text-muted-foreground"}>/mo</span>}
              </div>
              <p className={`mt-2 text-sm ${p.featured ? "text-white/70" : "text-muted-foreground"}`}>{p.desc}</p>
              <ul className="my-8 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className={p.featured ? "text-white/85" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  p.featured ? "bg-primary text-primary-foreground" : "bg-[var(--ink)] text-white"
                }`}
              >
                {p.cta} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-[var(--surface)] py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Customers"
          title={<>Trusted by teams that ship <span className="text-gradient-brand">real projects</span></>}
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
              <Quote className="h-7 w-7 text-primary" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-[var(--ink)]">"{t.quote}"</blockquote>
              <div className="mt-6 flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <figcaption className="mt-4 border-t border-border pt-4">
                <p className="text-sm font-semibold text-[var(--ink)]">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl md:leading-[1.1]">
            Questions? <br /> We've got answers.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Can't find what you're looking for?{" "}
            <Link to="/contact" className="font-medium text-primary hover:underline">Talk to our team →</Link>
          </p>
        </div>
        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            return (
              <button
                key={item.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="block w-full px-6 py-5 text-left transition-colors hover:bg-muted/40"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-base font-semibold text-[var(--ink)]">{item.q}</h3>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`} />
                </div>
                {isOpen && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="pb-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--ink)] px-8 py-16 text-white md:px-16 md:py-20">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.7_0.2_45_/_0.35),transparent_60%)]" />
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.05]">
                Ready to transform how you <span className="text-primary">build?</span>
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Join hundreds of construction teams running better projects with ObraLabs. Get started in minutes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
                Start Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/5">
                Request a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
