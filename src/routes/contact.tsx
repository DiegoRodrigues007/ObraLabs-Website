import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contato | ObraLabs" },
      {
        name: "description",
        content:
          "Fale com a ObraLabs para conhecer nossas ferramentas para gestão de obras e entender como podemos ajudar sua operação.",
      },
      { property: "og:title", content: "Contato | ObraLabs" },
      {
        property: "og:description",
        content: "Converse com a ObraLabs sobre tecnologia para gestão de obras.",
      },
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
              eyebrow="Contato"
              title={<>Vamos conversar sobre a <span className="text-gradient-brand">gestão da sua obra</span></>}
              description="Conte um pouco sobre sua operação e a equipe da ObraLabs retorna para entender como nossas ferramentas podem ajudar."
            />
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6">
              {[
                { icon: Mail, t: "E-mail", d: "hello@obralabs.com" },
                { icon: Phone, t: "Telefone", d: "+55 11 4000-0000" },
                { icon: MapPin, t: "Atuação", d: "São Paulo, Brasil · Remoto" },
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
                  <h3 className="font-display text-2xl font-bold text-[var(--ink)]">Mensagem recebida.</h3>
                  <p className="mt-2 text-muted-foreground">A equipe da ObraLabs entrará em contato em breve.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <Field label="Nome"><input required type="text" className="input" /></Field>
                  <Field label="E-mail profissional"><input required type="email" className="input" /></Field>
                  <Field label="Empresa"><input type="text" className="input" /></Field>
                  <Field label="Como podemos ajudar?">
                    <textarea required rows={4} className="input resize-none" />
                  </Field>
                  <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
                    Enviar mensagem <ArrowRight className="h-4 w-4" />
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
