"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { SafeImage } from "@/components/safe-image";
import type { Work } from "@/data/works";

type WorkCardProps = {
  work: Work;
};

export function WorkCard({ work }: WorkCardProps) {
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!cardRef.current) return;

    const bounds = cardRef.current.getBoundingClientRect();

    setPosition({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    });
  }

  return (
    <Link
      ref={cardRef}
      href={work.href}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="group relative block overflow-hidden rounded-[24px] border border-[#E2E2E2] bg-[#E8E8E8] p-[10px] shadow-[8px_8px_18px_#cfcfcf,-8px_-8px_18px_#ffffff] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[13px_13px_28px_#c9c9c9,-13px_-13px_28px_#ffffff]"
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute z-0 size-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(235,235,235,0.9)_38%,rgba(232,232,232,0)_72%)] blur-2xl transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: position.y - 160,
          left: position.x - 160,
        }}
      />

      <div className="relative z-10 overflow-hidden rounded-[18px] bg-[#F2F2F2] transition duration-300 group-hover:bg-[#F5F5F5]">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[18px] bg-[#EDEDED] p-[7px] shadow-[inset_2px_2px_6px_#d6d6d6,inset_-2px_-2px_6px_#ffffff] transition duration-300 group-hover:shadow-[inset_3px_3px_8px_#d1d1d1,inset_-3px_-3px_8px_#ffffff]">
          <div className="relative h-full w-full overflow-hidden rounded-[14px] bg-[#F7F7F7]">
            <SafeImage
              src={work.image}
              alt={work.title}
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-contain transition duration-500 ease-out group-hover:scale-[1.04]"
            />

            <SafeImage
              src={work.hoverImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-contain opacity-0 transition duration-500 ease-out group-hover:scale-[1.04] group-hover:opacity-100"
            />
          </div>
        </div>

        <div className="px-4 pb-5 pt-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#777777] transition-colors duration-300 group-hover:text-[#5F5F5F]">
            {work.category}
          </p>

          <h3 className="mt-3 text-[25px] font-black leading-[0.95] tracking-[-0.045em] text-[#787878] transition-colors duration-300 group-hover:text-[#202020]">
            {work.title}
          </h3>

          <p className="mt-4 min-h-[78px] text-[14px] font-normal leading-[1.55] text-[#727272] transition-colors duration-300 group-hover:text-[#5F5F5F]">
            {work.description}
          </p>

          <div className="mt-5 flex items-center justify-between">
            <span className="inline-flex h-[48px] min-w-[150px] items-center justify-center rounded-[30px] border border-[#8F9092] bg-[linear-gradient(to_top,#D8D9DB_0%,#fff_80%,#FDFDFD_100%)] px-6 text-[14px] font-semibold text-[#606060] shadow-none outline-none transition-all duration-300 [text-shadow:0_1px_#fff] hover:text-[#303030] hover:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_3px_3px_#CECFD1]">
              Ver projeto
            </span>

            <span className="grid size-11 place-items-center rounded-full border border-[#8F9092] bg-[linear-gradient(to_top,#D8D9DB_0%,#fff_80%,#FDFDFD_100%)] text-[#606060] shadow-none outline-none transition-all duration-300 hover:translate-x-1 hover:text-[#202020] hover:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_3px_3px_#CECFD1] active:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_5px_3px_#999,inset_0_0_30px_#aaa]">
              <ArrowRight className="size-5 stroke-[1.9] transition duration-300" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}