import { createFileRoute } from "@tanstack/react-router";
import {
  Building2, LineChart, Users2, FileText, CalendarRange, Smartphone,
  Camera, LayoutDashboard, HardHat, ShieldCheck, Zap, Database,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — ObraLabs" },
      { name: "description", content: "Scheduling, real-time progress, smart reports, mobile field tools, photo management and dashboards — everything in one platform." },
      { property: "og:title", content: "Features — ObraLabs" },
      { property: "og:description", content: "Every feature your construction team needs, from blueprint to handover." },
    ],
  }),
  component: FeaturesPage,
});

const ALL = [
  { icon: Building2, title: "Project Management", desc: "Plan, organize and run every construction project from a single source of truth." },
  { icon: LineChart, title: "Real-time Progress", desc: "Track milestones, percent-complete and field updates as they happen." },
  { icon: Users2, title: "Team Collaboration", desc: "Engineers, architects and contractors with shared workflows." },
  { icon: FileText, title: "Smart Reports", desc: "Generate daily reports, RFIs and documentation in seconds." },
  { icon: CalendarRange, title: "Scheduling & Timeline", desc: "Visual Gantt planning with dependencies, baselines and critical path." },
  { icon: Smartphone, title: "Mobile Field Access", desc: "Native-feel mobile app for crews to log work, photos and issues on site." },
  { icon: Camera, title: "Photo & File Management", desc: "Geo-tagged photos and drawings, organized by project and phase." },
  { icon: LayoutDashboard, title: "Dashboard Analytics", desc: "Executive dashboards with cost, schedule and productivity KPIs." },
  { icon: HardHat, title: "Safety & Compliance", desc: "Inspections, checklists and audit trails keep your sites compliant." },
  { icon: ShieldCheck, title: "Enterprise Security", desc: "SSO, role-based access and SOC 2-aligned controls." },
  { icon: Zap, title: "Automations", desc: "Trigger reports, notifications and workflows automatically." },
  { icon: Database, title: "API & Integrations", desc: "Open API, webhooks and connectors to your ERP and BIM stack." },
];

function FeaturesPage() {
  return (
    <SiteLayout>
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Features"
              title={<>One platform, every feature your <span className="text-gradient-brand">project needs</span></>}
              description="From blueprint to handover, ObraLabs gives your team the tools to run construction with clarity and control."
            />
          </div>
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ALL.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--ink)] text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-[var(--ink)]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
