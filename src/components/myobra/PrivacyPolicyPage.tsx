import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionEyebrow } from "@/components/site/Section";

const COLLECTED_INFORMATION = [
  "Nome completo",
  "E-mail",
  "Telefone",
  "Dados de autenticação",
  "Fotos enviadas pelo usuário",
  "Documentos e arquivos enviados",
  "Informações relacionadas às obras cadastradas",
  "Registros diários da obra",
  "Dados de uso da aplicação",
];

const INFORMATION_USES = [
  "Permitir o funcionamento do aplicativo.",
  "Gerenciar obras e documentos.",
  "Gerar relatórios.",
  "Melhorar a experiência do usuário.",
  "Fornecer suporte técnico.",
  "Garantir segurança e prevenção contra fraudes.",
];

const DATA_SHARING = [
  "Quando exigido por lei.",
  "Para prestação de serviços essenciais.",
  "Mediante autorização do usuário.",
];

const USER_RIGHTS = [
  "Solicitar acesso aos seus dados.",
  "Solicitar correção de informações.",
  "Solicitar exclusão da conta e dos dados.",
  "Solicitar portabilidade dos dados.",
];

export function PrivacyPolicyPage() {
  return (
    <SiteLayout>
      <article>
        <header className="relative overflow-hidden bg-[var(--surface)] py-16 sm:py-20 md:py-24">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-64 bg-[var(--gradient-warm-glow)]"
          />
          <div className="container-page relative">
            <div className="max-w-4xl">
              <SectionEyebrow>MyObra</SectionEyebrow>
              <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-[var(--ink)] sm:text-5xl md:text-6xl md:leading-[1.05]">
                Política de Privacidade – MyObra
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                O aplicativo MyObra é desenvolvido e mantido pela ObraLabs. Esta Política de
                Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos as
                informações dos usuários.
              </p>
            </div>
          </div>
        </header>

        <div className="container-page py-14 sm:py-16 md:py-20">
          <div className="mx-auto max-w-4xl space-y-12 md:space-y-14">
            <PolicySection number="01" title="Informações Coletadas">
              <PolicyList items={COLLECTED_INFORMATION} />
            </PolicySection>

            <PolicySection number="02" title="Como Utilizamos as Informações">
              <PolicyList items={INFORMATION_USES} />
            </PolicySection>

            <PolicySection number="03" title="Compartilhamento de Dados">
              <p>
                A ObraLabs não vende informações pessoais. Os dados somente poderão ser
                compartilhados:
              </p>
              <PolicyList items={DATA_SHARING} />
            </PolicySection>

            <PolicySection number="04" title="Armazenamento e Segurança">
              <p>
                A ObraLabs utiliza medidas técnicas e organizacionais para proteger os dados contra
                acesso não autorizado, alteração, divulgação ou destruição.
              </p>
            </PolicySection>

            <PolicySection number="05" title="Retenção dos Dados">
              <p>
                Os dados serão armazenados enquanto a conta permanecer ativa ou conforme exigido
                pela legislação aplicável.
              </p>
            </PolicySection>

            <PolicySection number="06" title="Direitos do Usuário">
              <p>O usuário poderá:</p>
              <PolicyList items={USER_RIGHTS} />
            </PolicySection>

            <PolicySection number="07" title="Exclusão de Conta e Dados">
              <p>
                Solicitações de exclusão podem ser realizadas através do e-mail:{" "}
                <a
                  href="mailto:contato@obralabs.com.br"
                  className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-[var(--ink)]"
                >
                  contato@obralabs.com.br
                </a>
                .
              </p>
            </PolicySection>

            <PolicySection number="08" title="Cookies e Tecnologias Semelhantes">
              <p>
                O sistema pode utilizar cookies e tecnologias similares para melhorar a experiência
                do usuário.
              </p>
            </PolicySection>

            <PolicySection number="09" title="Alterações nesta Política">
              <p>Esta política poderá ser atualizada periodicamente.</p>
            </PolicySection>

            <PolicySection number="10" title="Contato">
              <address className="not-italic">
                <dl className="grid gap-3 sm:grid-cols-[5.5rem_1fr]">
                  <dt className="font-semibold text-[var(--ink)]">Empresa:</dt>
                  <dd>ObraLabs</dd>
                  <dt className="font-semibold text-[var(--ink)]">E-mail:</dt>
                  <dd>
                    <a
                      href="mailto:contato@obralabs.com.br"
                      className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-[var(--ink)]"
                    >
                      contato@obralabs.com.br
                    </a>
                  </dd>
                  <dt className="font-semibold text-[var(--ink)]">Website:</dt>
                  <dd>
                    <a
                      href="https://obralabs.com.br"
                      className="font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-[var(--ink)]"
                    >
                      https://obralabs.com.br
                    </a>
                  </dd>
                </dl>
              </address>
            </PolicySection>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}

function PolicySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={`policy-section-${number}`}
      className="grid gap-5 md:grid-cols-[4rem_1fr]"
    >
      <span
        className="font-display text-sm font-bold tracking-widest text-primary"
        aria-hidden="true"
      >
        {number}
      </span>
      <div className="border-t border-border pt-5 md:pt-6">
        <h2
          id={`policy-section-${number}`}
          className="text-2xl font-bold tracking-tight text-[var(--ink)] sm:text-3xl"
        >
          {title}
        </h2>
        <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground">{children}</div>
      </div>
    </section>
  );
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
