import { works } from "@/data/works";
import { WorkCard } from "@/components/work-card";

export function FeaturedWork() {
  return (
    <section className="relative bg-[#F7F7F7] px-4 pb-[92px] pt-[76px]">
      <div className="mx-auto max-w-[960px]">
        <div className="mb-[26px] flex items-center justify-center gap-8">
          <div className="h-px w-full max-w-[260px] bg-[#DADADA]" />

          <p className="shrink-0 text-center text-[11px] font-bold uppercase tracking-[0.32em] text-[#777777]">
            Principais trabalhos
          </p>

          <div className="h-px w-full max-w-[260px] bg-[#DADADA]" />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {works.map((work) => (
            <WorkCard key={work.title} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
}