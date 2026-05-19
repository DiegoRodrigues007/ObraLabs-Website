import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Início" },
  { to: "/products", label: "Produtos" },
  { to: "/about", label: "Sobre" },
  { to: "/contact", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="shrink-0"><Logo /></Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Link to="/contact" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            Fale conosco
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:shadow-elevated"
          >
            Conhecer soluções
          </Link>
        </div>
        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Conhecer soluções
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
