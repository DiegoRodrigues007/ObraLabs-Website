import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — ObraLabs" },
      { name: "description", content: "Simple pricing that scales with your portfolio. Start free, upgrade when you're ready. No setup fees, no surprises." },
      { property: "og:title", content: "Pricing — ObraLabs" },
      { property: "og:description", content: "Plans that scale with your construction portfolio." },
    ],
  }),
  component: PricingPage,
});

const PRICING = [
  { name: "Starter", price: "$49", desc: "For small teams running their first projects.", features: ["Up to 3 active projects", "10 team members", "Mobile field app", "Photo & file storage", "Email support"], cta: "Start free trial", featured: false },
  { name: "Business", price: "$129", desc: "Scale across portfolios with advanced planning.", features: ["Unlimited projects", "50 team members", "Gantt scheduling & baselines", "Custom reports & dashboards", "Integrations & API", "Priority support"], cta: "Request a demo", featured: true },
  { name: "Enterprise", price: "Custom", desc: "For construction groups with advanced security.", features: ["Unlimited everything", "SSO & SCIM", "Dedicated success manager", "Advanced security & audit", "Custom integrations", "99.9% uptime SLA"], cta: "Talk to sales", featured: false },
];

function PricingPage() {
  return (
    <SiteLayout>
      <section className="py-20 md:py-28">
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
              <div key={p.name} className={`relative flex flex-col rounded-2xl border p-8 transition-all ${p.featured ? "border-transparent bg-[var(--ink)] text-white shadow-elevated lg:-translate-y-2" : "border-border bg-card text-[var(--ink)] shadow-soft hover:-translate-y-1 hover:shadow-elevated"}`}>
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">Most popular</span>
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
                <Link to="/contact" className={`mt-auto inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5 ${p.featured ? "bg-primary text-primary-foreground" : "bg-[var(--ink)] text-white"}`}>
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
