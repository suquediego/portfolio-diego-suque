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
      className="group relative block overflow-hidden rounded-[24px] border border-[#E2E2E2] bg-[#E8E8E8] p-[10px] shadow-[8px_8px_18px_#cfcfcf,-8px_-8px_18px_#ffffff] transition duration-300 hover:-translate-y-[2px]"
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute z-0 size-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(232,232,232,0.78)_38%,rgba(232,232,232,0)_72%)] blur-2xl transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          top: position.y - 144,
          left: position.x - 144,
        }}
      />

      <div className="relative z-10 overflow-hidden rounded-[18px] bg-[#F2F2F2]">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[18px] bg-[#EDEDED] p-[7px] shadow-[inset_3px_3px_8px_#d2d2d2,inset_-3px_-3px_8px_#ffffff]">
          <div className="relative h-full w-full overflow-hidden rounded-[14px] bg-[#F7F7F7]">
            <SafeImage
              src={work.image}
              alt={work.title}
              fill
              sizes="(min-width: 1024px) 360px, 100vw"
              className="object-contain transition duration-500 ease-out group-hover:scale-[1.035]"
            />
          </div>
        </div>

        <div className="px-4 pb-5 pt-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#777777]">
            {work.category}
          </p>

          <h3 className="mt-3 text-[25px] font-black leading-[0.95] tracking-[-0.045em] text-[#787878] transition-colors duration-300 group-hover:text-[#303030]">
            {work.title}
          </h3>

          <p className="mt-4 min-h-[78px] text-[14px] font-normal leading-[1.55] text-[#727272]">
            {work.description}
          </p>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-[13px] font-bold text-[#303030]">
              Ver projeto
            </span>

            <span className="grid size-10 place-items-center rounded-full border border-[#E8E8E8] bg-[#E8E8E8] text-[#303030] shadow-[5px_5px_10px_#c9c9c9,-5px_-5px_10px_#ffffff] transition duration-300 group-hover:translate-x-1 group-hover:shadow-[7px_7px_14px_#c9c9c9,-7px_-7px_14px_#ffffff] active:shadow-[inset_4px_4px_8px_#c9c9c9,inset_-4px_-4px_8px_#ffffff]">
              <ArrowRight className="size-5 stroke-[1.8] transition duration-300 group-hover:translate-x-[1px]" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}