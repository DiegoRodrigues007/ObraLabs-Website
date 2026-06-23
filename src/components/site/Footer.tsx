import { Link } from "@tanstack/react-router";
import { Github, Instagram, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--ink)] text-white/80">
      <div className="container-page py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="[&_span]:text-white [&_.text-primary]:text-primary">
              <Logo />
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/60">
              A ObraLabs desenvolve ferramentas digitais para levar mais clareza, controle e
              rastreabilidade à gestão de obras.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Produtos" links={[{ to: "/products", label: "Myobra" }]} />
          <FooterCol
            title="Empresa"
            links={[
              { to: "/", label: "Início" },
              { to: "/about", label: "Sobre" },
              { to: "/contact", label: "Contato" },
            ]}
          />

          <div>
            <h4 className="font-display text-sm font-semibold text-white">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-primary" /> obralabs.oficial@gmail.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                Caraguatatuba, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} ObraLabs. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link to="/myobra/privacy-policy" className="hover:text-white">
              Privacidade
            </Link>
            <a href="#" className="hover:text-white">
              Termos
            </a>
            <a href="#" className="hover:text-white">
              Segurança
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold text-white">{title}</h4>
      <ul className="mt-4 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-white/60 transition-colors hover:text-primary">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
