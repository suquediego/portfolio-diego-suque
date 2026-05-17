import Link from "next/link";
import { ChevronUp } from "lucide-react";

const footerLinks = [
  { label: "Sobre", href: "/sobre" },
  { label: "Portfólio", href: "/portfolio" },
  { label: "Front-end", href: "/front-end" },
  { label: "Contato", href: "/contato" },
];

const footerTextClass =
  "!text-[12px] !font-normal !leading-none !text-[#8A8A8A]";

const backToTopButtonClass =
  "absolute left-1/2 top-0 grid size-[74px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#E8E8E8] bg-[#E8E8E8] text-[#303030] shadow-[7px_7px_14px_#c9c9c9,-7px_-7px_14px_#ffffff] transition-all duration-300 hover:-translate-y-[calc(50%+2px)] hover:text-[#090909] hover:shadow-[9px_9px_18px_#c9c9c9,-9px_-9px_18px_#ffffff] active:shadow-[inset_5px_5px_10px_#c9c9c9,inset_-5px_-5px_10px_#ffffff]";

export function Footer() {
  return (
    <footer className="relative border-t border-[#DDDDDD] bg-[#E8E8E8]">
      <Link href="#hero" aria-label="Voltar ao topo" className={backToTopButtonClass}>
        <ChevronUp className="size-8 stroke-[1.8]" />
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