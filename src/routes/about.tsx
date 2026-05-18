import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Heart, Sparkles, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading, SectionEyebrow } from "@/components/site/Section";
import constructionSite from "@/assets/construction-site.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ObraLabs" },
      { name: "description", content: "ObraLabs builds innovative software solutions for the construction and engineering industry — making projects clearer, faster and safer to deliver." },
      { property: "og:title", content: "About ObraLabs" },
      { property: "og:description", content: "We build software that helps construction teams deliver real projects with clarity and control." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <section className="py-20 md:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionEyebrow>About ObraLabs</SectionEyebrow>
            <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl md:leading-[1.05]">
              Software for the people who <span className="text-gradient-brand">build the world.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              ObraLabs develops innovative software solutions for the construction and engineering market. We bridge the gap between site and office — turning chaotic spreadsheets, photos and reports into a single, beautifully organized platform.
            </p>
            <p className="mt-4 text-muted-foreground">
              Founded by engineers and product designers, we obsess over the day-to-day reality of construction work — and we build tools that respect it.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
              Work with us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-elevated">
            <img src={constructionSite} alt="Construction team on site" width={1600} height={1200} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-20 md:py-28">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Our values"
            title={<>What we <span className="text-gradient-brand">stand for</span></>}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, t: "Built with builders", d: "Every feature is shaped by real conversations with project managers, engineers and crews." },
              { icon: Heart, t: "Respect for the craft", d: "Construction is hard. Our software should make it easier — not add friction." },
              { icon: Sparkles, t: "Beautifully practical", d: "Modern design and ruthless focus on the workflows that move projects forward." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--ink)] text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--ink)]">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
