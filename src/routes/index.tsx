import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Camera,
  CheckCircle2,
  ClipboardList,
  FileText,
  HardHat,
  Layers3,
  LineChart,
  MessageSquareText,
  ShieldCheck,
  Smartphone,
  Users2,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading, SectionEyebrow } from "@/components/site/Section";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import constructionSite from "@/assets/construction-site.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ObraLabs | Tecnologia para gestão de obras" },
      {
        name: "description",
        content:
          "A ObraLabs desenvolve ferramentas digitais para construtoras, engenheiros e equipes que precisam gerir obras com mais controle, clareza e agilidade.",
      },
      { property: "og:title", content: "ObraLabs | Tecnologia para gestão de obras" },
      {
        property: "og:description",
        content:
          "Soluções digitais para planejamento, acompanhamento e controle de obras, conectando escritório e campo.",
      },
    ],
  }),
  component: HomePage,
});

const FOCUS_AREAS = [
  {
    icon: Building2,
    title: "Gestão de obras",
    desc: "Organizamos processos, registros e acompanhamento para dar mais controle à operação.",
  },
  {
    icon: Smartphone,
    title: "Aplicativos para campo",
    desc: "Levamos a tecnologia para perto de quem executa, com fluxos simples e objetivos.",
  },
  {
    icon: LineChart,
    title: "Dados para decisão",
    desc: "Transformamos informações de campo em visões úteis para gestão, cobrança e planejamento.",
  },
];

const PROBLEMS = [
  "Informações importantes espalhadas em grupos, planilhas e anotações",
  "Pouca rastreabilidade sobre o que foi executado em campo",
  "Relatórios manuais que consomem tempo e atrasam decisões",
  "Dificuldade para enxergar pendências, responsáveis e prioridades",
];

const METHOD = [
  {
    step: "01",
    title: "Entender a rotina",
    desc: "Mapeamos como a equipe planeja, executa, registra e acompanha a obra.",
  },
  {
    step: "02",
    title: "Simplificar o fluxo",
    desc: "Desenhamos ferramentas que reduzem atrito e deixam claro o que precisa ser registrado.",
  },
  {
    step: "03",
    title: "Conectar a gestão",
    desc: "A informação sai do canteiro organizada para quem precisa acompanhar, cobrar e decidir.",
  },
];

const PLATFORM_ITEMS = [
  { icon: ClipboardList, title: "Tarefas e pendências", desc: "Acompanhamento claro do que precisa ser feito e quem é responsável." },
  { icon: Camera, title: "Fotos e evidências", desc: "Registros de campo organizados para consulta e histórico da obra." },
  { icon: FileText, title: "Relatórios e diário", desc: "Base mais confiável para registrar rotina, ocorrências e evolução." },
  { icon: Users2, title: "Equipes alinhadas", desc: "Campo, engenharia e gestão trabalhando com a mesma informação." },
  { icon: ShieldCheck, title: "Rastreabilidade", desc: "Histórico para reduzir ruído, perda de informação e retrabalho." },
  { icon: Layers3, title: "Padronização", desc: "Processos mais consistentes entre obras, etapas e equipes." },
];

const BENEFITS = [
  "Mais visibilidade sobre a execução",
  "Menos dependência de controles paralelos",
  "Informações de campo mais confiáveis",
  "Gestão preparada para escalar processos",
];

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <FocusAreas />
      <CompanyStory />
      <ProblemSection />
      <MethodSection />
      <VisualShowcase />
      <TechnologySection />
      <ProductTeaser />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.985_0.005_60)_0%,transparent_100%)]" />
      <div className="container-page pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.03fr_1fr]">
          <div className="animate-fade-up">
            <SectionEyebrow>ObraLabs</SectionEyebrow>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl lg:text-[4.1rem]">
              Construímos ferramentas para obras serem geridas com clareza.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
              A ObraLabs desenvolve tecnologia para construtoras, engenheiros e equipes de campo que precisam controlar execução, registrar evidências e tomar decisões com informações confiáveis.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Conhecer o Myobra
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
              >
                Falar com a ObraLabs
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["Gestão de obras", "Campo conectado", "Relatórios e indicadores"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up [animation-delay:120ms]">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
              <img
                src={constructionSite}
                alt="Equipe acompanhando uma obra no canteiro"
                width={1600}
                height={1200}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-7 left-6 right-6 rounded-2xl border border-border bg-white/95 p-5 shadow-elevated backdrop-blur md:left-auto md:w-80">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Obra + dados</p>
              <p className="mt-2 font-display text-xl font-bold text-[var(--ink)]">Informação de campo organizada para decisão.</p>
              <p className="mt-2 text-sm text-muted-foreground">Registros, pendências e histórico em um fluxo mais simples.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FocusAreas() {
  return (
    <section className="border-y border-border bg-[var(--surface)] py-16">
      <div className="container-page grid gap-5 md:grid-cols-3">
        {FOCUS_AREAS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--ink)] text-primary">
              <Icon className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-lg font-semibold text-[var(--ink)]">{title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CompanyStory() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionEyebrow>O que fazemos</SectionEyebrow>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl md:leading-[1.05]">
            Desenvolvemos produtos digitais para simplificar a rotina de quem toca obra.
          </h2>
          <p className="mt-5 text-muted-foreground">
            A ObraLabs nasceu para resolver um problema comum no setor: a gestão precisa de informação confiável, mas boa parte dos dados fica perdida entre mensagens, fotos, anotações e planilhas.
          </p>
          <p className="mt-4 text-muted-foreground">
            Nosso trabalho é criar ferramentas práticas para registrar o que acontece no canteiro, organizar a comunicação e entregar ao gestor uma visão clara do andamento da obra.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
            <img
              src={dashboardMockup}
              alt="Painel de acompanhamento digital para gestão de obras"
              width={1600}
              height={1200}
              loading="lazy"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="bg-[var(--ink)] py-24 text-white md:py-32">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionEyebrow>Por que existimos</SectionEyebrow>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.05]">
            Obras geram muita informação. O problema é quando ela não vira gestão.
          </h2>
          <p className="mt-4 max-w-lg text-white/70">
            Criamos tecnologia para transformar a rotina do canteiro em informação organizada, útil e acessível para todos que precisam acompanhar a execução.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {PROBLEMS.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <MessageSquareText className="h-5 w-5 text-primary" />
              <p className="mt-4 text-sm leading-relaxed text-white/75">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MethodSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Como pensamos produto"
          title={<>Tecnologia útil começa entendendo a <span className="text-gradient-brand">obra real</span></>}
          description="A ObraLabs cria soluções a partir da rotina de campo, sem perder de vista o que a gestão precisa enxergar para decidir melhor."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {METHOD.map((item) => (
            <div key={item.step} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <span className="font-display text-4xl font-bold text-primary">{item.step}</span>
              <h3 className="mt-5 text-xl font-semibold text-[var(--ink)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisualShowcase() {
  return (
    <section className="bg-[var(--surface)] py-24 md:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl border border-border shadow-elevated">
            <img
              src={constructionSite}
              alt="Profissionais analisando informações da obra em campo"
              width={1600}
              height={1200}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionEyebrow>Do canteiro à gestão</SectionEyebrow>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl md:leading-[1.05]">
            A informação precisa nascer onde a obra acontece.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Quando o registro é fácil para quem está em campo, a gestão ganha velocidade. Fotos, apontamentos, tarefas e ocorrências deixam de ser fragmentos soltos e passam a compor um histórico claro da obra.
          </p>
          <div className="mt-8 grid gap-3">
            {BENEFITS.map((item) => (
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

function TechnologySection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Frentes de tecnologia"
          title={<>Ferramentas para organizar a operação da <span className="text-gradient-brand">obra</span></>}
          description="A ObraLabs trabalha em soluções que ajudam empresas a padronizar processos, acompanhar execução e reduzir perda de informação."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PLATFORM_ITEMS.map(({ icon: Icon, title, desc }) => (
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
  );
}

function ProductTeaser() {
  return (
    <section className="bg-[var(--ink)] py-24 text-white md:py-32">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionEyebrow>Produto</SectionEyebrow>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.05]">
            Myobra é o primeiro produto da ObraLabs para gestão mobile de obras.
          </h2>
          <p className="mt-4 max-w-xl text-white/70">
            A página de Produtos apresenta o aplicativo em detalhes: proposta, funcionalidades e como ele ajuda a conectar o canteiro à gestão.
          </p>
          <Link to="/products" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
            Abrir página de produtos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4">
          <img
            src={dashboardMockup}
            alt="Interface digital do Myobra"
            width={1600}
            height={1200}
            loading="lazy"
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--ink)] px-8 py-16 text-white md:px-16 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-primary ring-1 ring-white/10">
                <HardHat className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.05]">
                Vamos transformar informação de campo em gestão de verdade?
              </h2>
              <p className="mt-4 max-w-xl text-white/70">
                Fale com a ObraLabs para entender como nossas ferramentas podem ajudar sua equipe a organizar a rotina da obra.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
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
