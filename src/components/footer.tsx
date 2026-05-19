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
  "absolute left-1/2 top-0 grid size-[74px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#8F9092] bg-[linear-gradient(to_top,#D8D9DB_0%,#fff_80%,#FDFDFD_100%)] text-[#606060] shadow-none outline-none transition-all duration-200 [text-shadow:0_1px_#fff] hover:-translate-y-[calc(50%+2px)] hover:text-[#303030] hover:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_3px_3px_#CECFD1] active:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_5px_3px_#999,inset_0_0_30px_#aaa] focus:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_5px_3px_#999,inset_0_0_30px_#aaa]";

export function Footer() {
  return (
    <footer className="relative border-t border-[#DDDDDD] bg-[#E8E8E8]">
      <Link
        href="#hero"
        aria-label="Voltar ao topo"
        className={backToTopButtonClass}
      >
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
