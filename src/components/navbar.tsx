"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { SafeImage } from "@/components/safe-image";
import { basePath } from "@/lib/base-path";

const navLinks = [
  { label: "Projetos", href: "/portfolio" },
  { label: "Sobre", href: "/sobre" },
  { label: "Front-end", href: "/front-end" },
  { label: "Contato", href: "/contato" },
];

const mobileNavLinks = [
  { label: "Portfólio", href: "/portfolio" },
  { label: "Sobre", href: "/sobre" },
  { label: "Front-end", href: "/front-end" },
  { label: "Contato", href: "/contato" },
];

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56v-2.14c-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.2-3.08-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18.93-.26 1.93-.39 2.92-.39.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.75.8 1.2 1.83 1.2 3.08 0 4.42-2.69 5.39-5.25 5.67.42.36.79 1.06.79 2.14v3.16c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S.02 4.88.02 3.5 1.14 1 2.5 1s2.48 1.12 2.48 2.5ZM.42 8.02h4.16V23H.42V8.02ZM8.08 8.02h3.98v2.05h.06c.55-1.04 1.91-2.14 3.93-2.14 4.2 0 4.98 2.77 4.98 6.37V23h-4.16v-7.72c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.07V23H8.08V8.02Z" />
    </svg>
  );
}

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M8.48 11.31c1.2-.35 1.98-1.25 1.98-2.67 0-2.22-1.67-3.48-4.37-3.48H0v13.68h6.35c2.83 0 4.71-1.38 4.71-3.95 0-1.83-.96-3.06-2.58-3.58ZM3.02 7.54h2.69c1.09 0 1.72.48 1.72 1.42 0 .98-.72 1.46-1.82 1.46H3.02V7.54Zm2.9 8.88h-2.9v-3.7h2.98c1.3 0 2.02.64 2.02 1.82 0 1.23-.8 1.88-2.1 1.88ZM14.22 6.25h6.15V4.76h-6.15v1.49Zm6.67 9.28c-.48 1.08-1.16 1.55-2.35 1.55-1.59 0-2.46-1.01-2.52-2.75h7.08c.17-3.28-1.55-5.96-4.71-5.96-2.9 0-5.02 2.22-5.02 5.35 0 3.27 2.01 5.44 5.12 5.44 2.25 0 3.86-1.01 4.53-3.63h-2.13Zm-2.57-5.08c1.34 0 2.12.83 2.25 2.27h-4.51c.23-1.45 1.04-2.27 2.26-2.27Z" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/suquediego",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/diegosuque/",
    icon: LinkedInIcon,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/diegocostasuu",
    icon: BehanceIcon,
  },
];

const navButtonClass = "btn-soft-3d h-[46px] min-w-0 px-[26px]";

const iconButtonClass =
  "grid size-[46px] place-items-center rounded-full border border-[#8F9092] bg-[linear-gradient(to_top,#D8D9DB_0%,#fff_80%,#FDFDFD_100%)] text-[#606060] shadow-none outline-none transition-all duration-200 [text-shadow:0_1px_#fff] hover:text-[#303030] hover:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_3px_3px_#CECFD1] active:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_5px_3px_#999,inset_0_0_30px_#aaa] focus:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_5px_3px_#999,inset_0_0_30px_#aaa]";

const logoButtonClass =
  "relative grid h-[66px] w-[66px] shrink-0 place-items-center overflow-hidden rounded-[22px] border border-[#1C1C1C] bg-[#080808] text-white shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] outline-none transition-all duration-200 hover:scale-[1.02] hover:bg-[#111111] hover:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_3px_3px_rgba(255,255,255,0.08)] active:scale-100 active:shadow-[inset_4px_4px_10px_#000000,inset_-4px_-4px_10px_rgba(255,255,255,0.12)] focus:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_3px_3px_rgba(255,255,255,0.08)]";

const mobileMenuButtonClass =
  "grid size-[46px] place-items-center rounded-full border border-[#8F9092] bg-[linear-gradient(to_top,#D8D9DB_0%,#fff_80%,#FDFDFD_100%)] text-[#606060] shadow-none outline-none transition-all duration-200 [text-shadow:0_1px_#fff] hover:text-[#303030] focus-visible:ring-2 focus-visible:ring-[#606060] focus-visible:ring-offset-2 focus-visible:ring-offset-[#E8E8E8]";

const mobileMenuLinkClass =
  "flex min-h-[46px] items-center rounded-[18px] border border-[#DDDDDD] bg-[#F7F7F7] px-5 text-[15px] font-semibold text-[#606060] outline-none transition hover:text-[#303030] focus-visible:ring-2 focus-visible:ring-[#606060] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F2F2F2]";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#e8e8e8]">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-[104px] max-w-[1320px] items-center justify-between px-6 md:px-10"
      >
        <a
          href={`${basePath || ""}/#hero`}
          className={logoButtonClass}
          aria-label="Diego Suque"
        >
          <span className="relative block h-[58px] w-[58px]">
            <SafeImage
              src={`${basePath}/images/logo-suque.png`}
              alt="Logo Diego Suque"
              fill
              priority
              sizes="58px"
              className="object-contain"
            />
          </span>
        </a>

        <div className="hidden items-center gap-4 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navButtonClass}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className={iconButtonClass}
            >
              <Icon className="h-[24px] w-[24px]" />
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          className={`${mobileMenuButtonClass} lg:hidden`}
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          {isMobileMenuOpen ? (
            <X aria-hidden="true" className="size-6 stroke-[1.9]" />
          ) : (
            <Menu aria-hidden="true" className="size-6 stroke-[1.9]" />
          )}
        </button>
      </nav>

      {isMobileMenuOpen ? (
        <div
          id="mobile-navigation"
          className="mx-4 mb-4 rounded-[24px] border border-[#E2E2E2] bg-[#F2F2F2] p-4 shadow-[8px_8px_18px_#cfcfcf,-8px_-8px_18px_#ffffff] lg:hidden"
        >
          <div className="grid gap-3">
            {mobileNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={mobileMenuLinkClass}
                onClick={closeMobileMenu}
              >
                {link.label}
              </Link>
            ))}

            <div className="my-1 h-px bg-[#D0D0D0]" />

            {socialLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={mobileMenuLinkClass}
                onClick={closeMobileMenu}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
