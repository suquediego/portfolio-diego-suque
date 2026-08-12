"use client";

import { PageShell } from "@/components/page-shell";
import { WorkCard } from "@/components/work-card";
import { works } from "@/data/works";
import { useTranslation } from "@/hooks/use-translation";

const otherProjects = ["Caronte", "Vale Pix", "Prize Tech", "Payco", "Jobs.bet"];

export default function PortfolioPage() {
  const t = useTranslation();

  return (
    <PageShell>
      <section className="mx-auto max-w-[1180px]">
        <p className="text-[11px] font-black uppercase tracking-[0.34em] text-[#777777]">
          {t.pages.portfolio.eyebrow}
        </p>

        <h1 className="mt-5 text-[56px] font-black leading-[0.92] tracking-[-0.055em] text-[#303030] sm:text-[74px] lg:text-[96px]">
          {t.pages.portfolio.title}
        </h1>

        <p className="mt-7 max-w-[780px] text-[18px] leading-[1.7] text-[#727272] sm:text-[20px]">
          {t.pages.portfolio.description}
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-[1180px]">
        <div className="grid gap-7 md:grid-cols-3">
          {works.map((work) => (
            <WorkCard key={work.title} work={work} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-[1180px]">
        <div className="mb-8 flex items-center gap-8">
          <h2 className="shrink-0 text-[32px] font-black leading-none tracking-[-0.045em] text-[#303030]">
            {t.pages.portfolio.otherProjectsTitle}
          </h2>

          <div className="h-px w-full bg-[#D0D0D0]" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {otherProjects.map((project) => (
            <article
              key={project}
              className="rounded-[22px] border border-[#E2E2E2] bg-[#F2F2F2] p-6 shadow-[7px_7px_16px_#d0d0d0,-7px_-7px_16px_#ffffff]"
            >
              <h3 className="text-[22px] font-black leading-none tracking-[-0.04em] text-[#303030]">
                {project}
              </h3>

              <p className="mt-4 text-[14px] leading-[1.6] text-[#727272]">
                {t.pages.portfolio.reservedText}
              </p>

              <p className="mt-6 text-[13px] font-semibold text-[#606060]">
                Em breve
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}