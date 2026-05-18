import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2, HardHat, Hammer, Compass, Factory, Landmark } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — ObraLabs" },
      { name: "description", content: "Solutions for general contractors, engineering firms, architects and developers — purpose-built for the way you build." },
      { property: "og:title", content: "Solutions — ObraLabs" },
      { property: "og:description", content: "Purpose-built construction management software for contractors, engineers, architects and developers." },
    ],
  }),
  component: SolutionsPage,
});

const SOLUTIONS = [
  { icon: Building2, title: "General Contractors", desc: "Run every site, every day — schedule, cost, safety and quality in one place." },
  { icon: HardHat, title: "Engineering Firms", desc: "Coordinate disciplines, manage RFIs and keep documentation traceable." },
  { icon: Compass, title: "Architecture Studios", desc: "Protect design intent with drawing control, markups and version history." },
  { icon: Hammer, title: "Specialty Contractors", desc: "Mobile-first tools for crews — log work, photos and issues in seconds." },
  { icon: Factory, title: "Industrial Builders", desc: "Manage complex sequencing, equipment and compliance across mega-projects." },
  { icon: Landmark, title: "Real Estate Developers", desc: "Portfolio-level visibility on cost, schedule and risk across every asset." },
];

function SolutionsPage() {
  return (
    <SiteLayout>
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Solutions"
              title={<>Built for every kind of <span className="text-gradient-brand">builder</span></>}
              description="From boutique studios to nationwide contractors, ObraLabs adapts to your structure, your standards and your projects."
            />
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SOLUTIONS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--ink)] text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--ink)]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
