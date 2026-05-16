import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SafeImage } from "@/components/safe-image";
import type { Work } from "@/data/works";

type WorkCardProps = {
  work: Work;
};

export function WorkCard({ work }: WorkCardProps) {
  return (
    <Link
      href={work.href}
      className="group block rounded-[10px] border border-[#DDDDDD] bg-white p-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.10)]"
    >
      <div className="relative h-[150px] overflow-hidden rounded-[6px] bg-[#F3F3F3]">
        <SafeImage
          src={work.image}
          alt={work.title}
          fill
          sizes="(min-width: 1024px) 280px, 100vw"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black/[0.03]" />
      </div>

      <div className="flex items-end justify-between gap-4 px-[6px] pb-[4px] pt-[14px]">
        <div>
          <h3 className="text-[15px] font-normal leading-tight text-[#3A3A3A]">
            {work.title}
          </h3>

          <p className="mt-[4px] text-[13px] font-normal leading-tight text-[#8A8A8A]">
            {work.category}
          </p>
        </div>

        <span className="grid size-8 shrink-0 place-items-center rounded-full text-[#B0B0B0] opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100">
          <ArrowRight className="size-5 stroke-[1.8]" />
        </span>
      </div>
    </Link>
  );
}