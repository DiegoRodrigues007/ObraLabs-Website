import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ObraLabs" },
      { name: "description", content: "Talk to the ObraLabs team. Request a demo, ask a question or start your free trial." },
      { property: "og:title", content: "Contact ObraLabs" },
      { property: "og:description", content: "Talk to our team and see ObraLabs in action." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="py-20 md:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              align="center"
              eyebrow="Contact"
              title={<>Let's build something <span className="text-gradient-brand">great together</span></>}
              description="Tell us about your projects and we'll show you how ObraLabs fits in."
            />
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6">
              {[
                { icon: Mail, t: "Email", d: "hello@obralabs.com" },
                { icon: Phone, t: "Phone", d: "+55 11 4000-0000" },
                { icon: MapPin, t: "Office", d: "São Paulo, Brazil · Remote-first" },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--ink)] text-primary"><Icon className="h-5 w-5" /></div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--ink)]">{t}</p>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft"
            >
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <h3 className="font-display text-2xl font-bold text-[var(--ink)]">Thanks — message received.</h3>
                  <p className="mt-2 text-muted-foreground">A member of our team will reach out within one business day.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <Field label="Name"><input required type="text" className="input" /></Field>
                  <Field label="Work email"><input required type="email" className="input" /></Field>
                  <Field label="Company"><input type="text" className="input" /></Field>
                  <Field label="How can we help?">
                    <textarea required rows={4} className="input resize-none" />
                  </Field>
                  <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
                    Send message <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--border);
          background: var(--background);
          padding: 0.7rem 0.9rem;
          font-size: 0.875rem;
          color: var(--ink);
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px oklch(0.69 0.19 45 / 0.15);
        }
      `}</style>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
