import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPolicyPage } from "@/components/myobra/PrivacyPolicyPage";

const pageTitle = "Política de Privacidade – MyObra | ObraLabs";
const pageDescription =
  "Conheça como o aplicativo MyObra, desenvolvido pela ObraLabs, coleta, utiliza, armazena e protege os dados dos usuários.";
const canonicalUrl = "https://obralabs.com.br/myobra/privacy-policy";

export const Route = createFileRoute("/myobra/privacy-policy")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { name: "description", content: pageDescription },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { name: "twitter:title", content: pageTitle },
      { name: "twitter:description", content: pageDescription },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  }),
  component: PrivacyPolicyPage,
});
