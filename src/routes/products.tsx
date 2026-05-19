import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  ClipboardList,
  FileText,
  HardHat,
  Smartphone,
  Users2,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading, SectionEyebrow } from "@/components/site/Section";
import dashboardMockup from "@/assets/dashboard-mockup.png";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Produtos | ObraLabs" },
      {
        name: "description",
        content:
          "Conheça o Myobra, aplicativo mobile da ObraLabs para gestão de obras, registros de campo, tarefas, fotos e acompanhamento da execução.",
      },
      { property: "og:title", content: "Produtos | ObraLabs" },
      {
        property: "og:description",
        content:
          "Myobra é o aplicativo mobile da ObraLabs para conectar campo e gestão na rotina da obra.",
      },
    ],
  }),
  component: ProductsPage,
});

const PLAY_STORE_URL = "https://play.google.com/store/search?q=Myobra&c=apps";
const APP_STORE_URL = "https://apps.apple.com/br/search?term=Myobra";

const FEATURES = [
  {
    icon: ClipboardList,
    title: "Rotina da obra organizada",
    desc: "Acompanhe tarefas, pendências, responsáveis e andamento sem espalhar informações em mensagens e planilhas.",
  },
  {
    icon: Camera,
    title: "Registros de campo",
    desc: "Centralize fotos, observações e evidências da execução para manter histórico e rastreabilidade.",
  },
  {
    icon: FileText,
    title: "Relatórios mais simples",
    desc: "Transforme os registros do dia a dia em informação útil para acompanhamento, cobrança e tomada de decisão.",
  },
  {
    icon: Users2,
    title: "Equipe alinhada",
    desc: "Conecte gestores, engenheiros e equipes de campo em um fluxo único de acompanhamento da obra.",
  },
];

const OUTCOMES = [
  "Menos perda de informação entre campo e escritório",
  "Mais clareza sobre o que foi feito, o que está pendente e quem é responsável",
  "Histórico da obra organizado por registros, fotos e atualizações",
  "Base mais confiável para acompanhar prazo, produtividade e execução",
];

function ProductsPage() {
  return (
    <SiteLayout>
      <Hero />
      <DownloadSection />
      <Features />
      <Outcomes />
      <CTA />
    </SiteLayout>
  );
}

function DownloadSection() {
  return (
    <section className="border-y border-border bg-[var(--surface)] py-20 md:py-24">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionEyebrow>Download</SectionEyebrow>
            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl md:text-5xl md:leading-[1.05]">
              Aponte a câmera e baixe o Myobra.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Disponibilize o aplicativo para sua equipe de campo pelo Android ou iPhone. Os QR Codes levam diretamente para a loja correspondente.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <StoreQrCard
              title="Play Store"
              description="Download para Android"
              badge="Android"
              url={PLAY_STORE_URL}
            />
            <StoreQrCard
              title="App Store"
              description="Download para iPhone"
              badge="iOS"
              url={APP_STORE_URL}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StoreQrCard({
  title,
  description,
  badge,
  url,
}: {
  title: string;
  description: string;
  badge: string;
  url: string;
}) {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=12&data=${encodeURIComponent(url)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group overflow-hidden rounded-3xl border border-border bg-card text-left shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated"
    >
      <div className="border-b border-border bg-[var(--ink)] p-5 text-white">
        <div className="flex items-center justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              {badge}
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold">{title}</h3>
            <p className="mt-1 text-sm text-white/60">{description}</p>
          </div>
          <Smartphone className="h-8 w-8 text-primary" />
        </div>
      </div>
      <div className="p-6">
        <div className="mx-auto max-w-[240px] rounded-[1.6rem] border border-border bg-white p-4 shadow-soft">
          <img
            src={qrUrl}
            alt={`QR Code para baixar o Myobra na ${title}`}
            width={220}
            height={220}
            loading="lazy"
            className="aspect-square w-full"
          />
        </div>
        <div className="mt-5 rounded-2xl bg-[var(--surface)] px-4 py-3 text-center">
          <span className="text-sm font-semibold text-[var(--ink)]">Escaneie para baixar</span>
          <p className="mt-1 text-xs text-muted-foreground">ou clique neste card para abrir a loja</p>
        </div>
      </div>
    </a>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,oklch(0.985_0.005_60)_0%,transparent_100%)]" />
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <SectionEyebrow>Produtos</SectionEyebrow>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl md:leading-[1.05]">
            Myobra: gestão de obras direto do canteiro.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            O Myobra é um aplicativo mobile da ObraLabs voltado para a gestão de obras. Ele ajuda equipes a registrar a rotina do canteiro, acompanhar pendências, organizar evidências e manter a gestão atualizada com informações confiáveis.
          </p>
          <p className="mt-4 text-muted-foreground">
            A proposta é simples: facilitar o controle da execução sem criar burocracia para quem está em campo.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Quero conhecer
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-colors hover:border-[var(--ink)]"
            >
              Sobre a ObraLabs
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src={dashboardMockup}
            alt="Interface do Myobra para gestão de obras"
            width={1600}
            height={1200}
            className="w-full drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          align="center"
          eyebrow="Myobra"
          title={<>O essencial para acompanhar a <span className="text-gradient-brand">execução</span></>}
          description="O aplicativo foi pensado para a rotina real da obra: rápido de usar, objetivo nos registros e útil para quem precisa acompanhar o avanço do projeto."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--ink)] text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-lg font-semibold text-[var(--ink)]">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="bg-[var(--ink)] py-20 text-white md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionEyebrow>Resultado esperado</SectionEyebrow>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl md:leading-[1.05]">
            Mais controle na mão de quem toca a obra.
          </h2>
          <p className="mt-4 max-w-lg text-white/70">
            O Myobra aproxima o registro da execução de quem precisa analisar, cobrar, corrigir rota e prestar contas.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {OUTCOMES.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <p className="mt-4 text-sm leading-relaxed text-white/75">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--ink)] text-primary">
                <HardHat className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-balance font-display text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
                Quer aplicar o Myobra na sua operação?
              </h2>
              <p className="mt-3 text-muted-foreground">
                Fale com a ObraLabs para entender como o aplicativo pode se encaixar na rotina da sua equipe e nos processos da sua obra.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
                Falar com a equipe <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
