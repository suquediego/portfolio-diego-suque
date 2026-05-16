import Link from "next/link";
import { ChevronUp } from "lucide-react";

const footerLinks = [
  { label: "Sobre", href: "/sobre" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Front-end", href: "/front-end" },
  { label: "Contato", href: "/contato" },
];

const footerTextClass = "!text-[12px] !font-normal !leading-none !text-[#8A8A8A]";

export function Footer() {
  return (
    <footer className="relative border-t border-[#DDDDDD] bg-[#F1F1F1] shadow-[0_-8px_28px_rgba(0,0,0,0.05)]">
      <Link
        href="#top"
        aria-label="Voltar ao topo"
        className="absolute left-1/2 top-0 grid size-[74px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#DDDDDD] bg-[#F7F7F7] text-[#D0D0D0] shadow-[0_-4px_18px_rgba(0,0,0,0.04)] transition hover:text-[#777777]"
      >
        <ChevronUp className="size-9 stroke-[1.4]" />
      </Link>

      <div className="mx-auto flex min-h-[86px] max-w-[960px] flex-col items-center justify-between gap-5 px-4 py-8 text-center md:flex-row md:text-left">
        <p className={footerTextClass}>© 2026 Diego Suque</p>

        <nav
          aria-label="Links do rodapé"
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${footerTextClass} transition hover:!text-[#333333]`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}