import Link from "next/link";
import { SafeImage } from "@/components/safe-image";

const navLinks = [
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

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M7.8 2h8.4A5.81 5.81 0 0 1 22 7.8v8.4a5.81 5.81 0 0 1-5.8 5.8H7.8A5.81 5.81 0 0 1 2 16.2V7.8A5.81 5.81 0 0 1 7.8 2Zm0 2.1a3.7 3.7 0 0 0-3.7 3.7v8.4a3.7 3.7 0 0 0 3.7 3.7h8.4a3.7 3.7 0 0 0 3.7-3.7V7.8a3.7 3.7 0 0 0-3.7-3.7H7.8Zm4.2 3.1a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2.1a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm5.05-2.48a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z" />
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
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: InstagramIcon,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/",
    icon: BehanceIcon,
  },
];

const navButtonClass =
  "inline-flex h-[46px] items-center justify-center rounded-[0.5em] border border-[#e8e8e8] bg-[#e8e8e8] px-[1.7em] py-[0.7em] text-[15px] font-semibold leading-none text-[#090909] shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] transition-all duration-300 hover:-translate-y-[1px] active:translate-y-0 active:text-[#666666] active:shadow-[inset_4px_4px_12px_#c5c5c5,inset_-4px_-4px_12px_#ffffff]";

const iconButtonClass =
  "grid size-[46px] place-items-center rounded-[0.5em] border border-[#e8e8e8] bg-[#e8e8e8] text-[#090909] shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] transition-all duration-300 hover:-translate-y-[1px] active:translate-y-0 active:text-[#666666] active:shadow-[inset_4px_4px_12px_#c5c5c5,inset_-4px_-4px_12px_#ffffff]";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#e8e8e8] shadow-[0_10px_28px_rgba(0,0,0,0.08)]">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex h-[104px] max-w-[1320px] items-center justify-between px-6 md:px-10"
      >
        <Link
          href="/"
          className="relative block h-[66px] w-[66px] shrink-0 transition duration-300 hover:scale-[1.03]"
          aria-label="Diego Suque"
        >
          <SafeImage
            src="/images/logo-suque.png"
            alt="Logo Diego Suque"
            fill
            priority
            sizes="66px"
            className="object-contain"
          />
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navButtonClass}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
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
      </nav>
    </header>
  );
}
