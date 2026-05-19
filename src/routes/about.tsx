import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  Heart,
  Layers3,
  LineChart,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Target,
  Users2,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading, SectionEyebrow } from "@/components/site/Section";
import constructionSite from "@/assets/construction-site.jpg";
import dashboardMockup from "@/assets/dashboard-mockup.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Sobre | ObraLabs" },
      {
        name: "description",
        content:
          "A ObraLabs desenvolve ferramentas digitais para gestão de obras, conectando canteiro e escritório com informações mais claras e confiáveis.",
      },
      { property: "og:title", content: "Sobre | ObraLabs" },
      {
        property: "og:description",
        content: "Conheça a ObraLabs e nossa visão para tecnologia na gestão de obras.",
      },
    ],
  }),
  component: AboutPage,
});

const PRINCIPLES = [
  { icon: Target, title: "Foco no que move a obra", desc: "Priorizamos fluxos que ajudam a acompanhar execução, resolver pendências e manter histórico confiável." },
  { icon: Heart, title: "Respeito pela rotina de campo", desc: "Construção exige velocidade e clareza. A tecnologia precisa ajudar sem criar burocracia desnecessária." },
  { icon: Sparkles, title: "Produto prático e bem desenhado", desc: "Combinamos experiência simples, informação organizada e evolução contínua das ferramentas." },
];

const WHAT_WE_BUILD = [
  { icon: ClipboardList, title: "Processos digitais", desc: "Transformamos rotinas operacionais em fluxos claros para registrar, acompanhar e consultar informações da obra." },
  { icon: LineChart, title: "Visão para gestão", desc: "Organizamos dados para apoiar decisões sobre avanço, pendências, produtividade e prioridades." },
  { icon: Users2, title: "Conexão entre equipes", desc: "Aproximamos campo, engenharia e escritório para reduzir ruído e melhorar a comunicação." },
  { icon: ShieldCheck, title: "Rastreabilidade", desc: "Criamos bases de histórico para dar mais segurança às cobranças, alinhamentos e análises." },
];

const APPROACH = [
  "Entender a rotina real de quem está no canteiro",
  "Reduzir etapas manuais que não agregam controle",
  "Organizar informação para consulta rápida e tomada de decisão",
  "Construir ferramentas simples de usar e preparadas para evoluir",
];

function AboutPage() {
  return (
    <SiteLayout>
      <Hero />
      <MissionSection />
      <WhatWeBuild />
      <ApproachSection />
      <PrinciplesSection />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionEyebrow>Sobre a ObraLabs</SectionEyebrow>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl md:leading-[1.05]">
            Tecnologia para tornar a gestão de obras mais simples, visível e confiável.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A ObraLabs desenvolve soluções digitais para o mercado da construção, com foco em reduzir ruído operacional, organizar registros de campo e dar aos gestores uma visão mais clara da execução.
          </p>
          <p className="mt-4 text-muted-foreground">
            Nosso trabalho é aproximar o canteiro do escritório por meio de produtos práticos, objetivos e preparados para a rotina real de quem constrói.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
            Fale com a ObraLabs <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border shadow-elevated">
          <img src={constructionSite} alt="Equipe acompanhando uma obra" width={1600} height={1200} loading="lazy" className="aspect-[4/3] w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="bg-[var(--ink)] py-20 text-white md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionEyebrow>Missão</SectionEyebrow>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.05]">
            Tirar a gestão da obra do improviso.
          </h2>
          <p className="mt-4 max-w-xl text-white/70">
            Obras geram informações todos os dias: fotos, apontamentos, pendências, decisões, ocorrências e relatórios. A ObraLabs existe para transformar esse volume de dados em organização, rastreabilidade e controle.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: Building2, title: "Para empresas", desc: "Padronizar processos e ganhar mais previsibilidade entre obras." },
            { icon: MessageSquareText, title: "Para equipes", desc: "Reduzir ruído na comunicação e deixar responsabilidades mais claras." },
            { icon: Layers3, title: "Para operações", desc: "Registrar o que acontece e manter histórico acessível." },
            { icon: LineChart, title: "Para decisões", desc: "Transformar rotina de campo em informação útil para gestão." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeBuild() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="O que construímos"
          title={<>Ferramentas digitais para conectar <span className="text-gradient-brand">campo e gestão</span></>}
          description="Nosso foco está em produtos que simplificam a rotina da obra e tornam a informação mais confiável para todos os envolvidos."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {WHAT_WE_BUILD.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--ink)] text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--ink)]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="bg-[var(--surface)] py-20 md:py-28">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
          <img src={dashboardMockup} alt="Painel digital de gestão de obras" width={1600} height={1200} loading="lazy" className="w-full" />
        </div>
        <div>
          <SectionEyebrow>Nossa abordagem</SectionEyebrow>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl md:leading-[1.05]">
            Produto bom para obra precisa ser direto, útil e confiável.
          </h2>
          <p className="mt-5 text-muted-foreground">
            A ObraLabs busca construir tecnologia que respeita a pressão do canteiro e a necessidade de controle da gestão. O resultado são ferramentas com menos atrito, mais clareza e informação melhor estruturada.
          </p>
          <div className="mt-8 grid gap-3">
            {APPROACH.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PrinciplesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Princípios"
          title={<>O que guia a <span className="text-gradient-brand">ObraLabs</span></>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PRINCIPLES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--ink)] text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--ink)]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="pb-24">
      <div className="container-page">
        <div className="rounded-3xl bg-[var(--ink)] px-8 py-16 text-white md:px-16 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.05]">
                Quer conhecer melhor a ObraLabs?
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Fale com nossa equipe para conversar sobre tecnologia, gestão de obras e como nossas ferramentas podem apoiar sua operação.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
                Entrar em contato <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
