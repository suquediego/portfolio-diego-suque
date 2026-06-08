"use client";

import Link from "next/link";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { SafeImage } from "@/components/safe-image";
import { basePath } from "@/lib/base-path";

const CODER_HERO_IMAGE = `${basePath}/images/portfolio/dev-hero-3.png`;
const DESIGNER_HERO_IMAGE = `${basePath}/images/portfolio/suque-hero.png`;

const heroButtonClass = "btn-soft-3d";

export function Hero() {
  const mouse = useMotionValue(50);

  const smoothMouse = useSpring(mouse, {
    stiffness: 76,
    damping: 34,
    mass: 0.52,
  });

  const designerClip = useMotionTemplate`inset(0 0 0 ${smoothMouse}%)`;

  const heroImageX = useTransform(smoothMouse, [0, 50, 100], [-80, 0, 80]);

  const coderOpacity = useTransform(
    smoothMouse,
    [0, 42, 50, 58, 100],
    [0, 0, 1, 1, 1],
  );

  const designerOpacity = useTransform(
    smoothMouse,
    [0, 42, 50, 58, 100],
    [1, 1, 1, 0, 0],
  );

  const coderScale = useTransform(smoothMouse, [0, 50, 100], [0.98, 1, 1.08]);

  const designerScale = useTransform(
    smoothMouse,
    [0, 50, 100],
    [1.08, 1, 0.98],
  );

  const coderTextX = useTransform(smoothMouse, [0, 50, 100], [-12, 0, 0]);
  const designerTextX = useTransform(smoothMouse, [0, 50, 100], [0, 0, 12]);

  const coderCtaOpacity = useTransform(smoothMouse, [50, 70, 100], [0, 0.3, 1]);
  const coderCtaY = useTransform(smoothMouse, [50, 100], [10, 0]);

  const designerCtaOpacity = useTransform(
    smoothMouse,
    [0, 30, 50],
    [1, 0.3, 0],
  );

  const designerCtaY = useTransform(smoothMouse, [0, 50], [0, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const rawPercent = ((event.clientX - bounds.left) / bounds.width) * 100;

    if (rawPercent <= 34) {
      mouse.set(100);
      return;
    }

    if (rawPercent >= 66) {
      mouse.set(0);
      return;
    }

    mouse.set(50);
  }

  function handleMouseLeave() {
    mouse.set(50);
  }

  const imageClassName = "object-contain object-center";

  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-background px-4 pt-[104px] md:px-8"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[720px] flex-col items-center pb-10 pt-7 lg:hidden">
        <div className="grid w-full grid-cols-2 items-end gap-4">
          <div className="text-left">
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#A8A8A8]">
              Product
            </p>

            <h1 className="text-[42px] font-black leading-[0.92] tracking-[-0.055em] text-[#303030]">
              designer
            </h1>
          </div>

          <div className="text-right">
            <p className="mb-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#A8A8A8]">
              Interface
            </p>

            <h2 className="whitespace-nowrap text-[38px] font-black leading-[0.92] tracking-[-0.055em] text-[#303030]">
              {"<coder>"}
            </h2>
          </div>
        </div>

        <div className="relative mt-5 aspect-[1638/2048] w-[min(70vw,340px)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[24%] bg-gradient-to-b from-transparent via-background/75 to-background"
          />

          <div className="absolute inset-0 z-10">
            <SafeImage
              src={CODER_HERO_IMAGE}
              alt="Diego Suque"
              fill
              priority
              sizes="340px"
              className={imageClassName}
            />
          </div>

          <div
            className="absolute inset-0 z-20 overflow-hidden"
            style={{ clipPath: "inset(0 0 0 50%)" }}
          >
            <SafeImage
              src={DESIGNER_HERO_IMAGE}
              alt=""
              fill
              priority
              sizes="340px"
              className={imageClassName}
            />
          </div>
        </div>

        <div className="mt-5 grid gap-3 text-center">
          <p className="mx-auto max-w-[360px] text-[15px] font-normal leading-[1.55] text-[#727272]">
            Crio interfaces para produtos digitais complexos, unindo UX, UI e
            design systems.
          </p>

          <p className="mx-auto max-w-[360px] text-[15px] font-normal leading-[1.55] text-[#727272]">
            Construo interfaces responsivas com foco em clareza, estrutura e
            implementação.
          </p>
        </div>

        <div className="mt-6 flex w-full flex-col items-center gap-3 min-[390px]:flex-row min-[390px]:justify-center">
          <Link href="/portfolio" className={heroButtonClass}>
            Ver portfólio
          </Link>

          <Link href="/front-end" className={heroButtonClass}>
            Ver front-end
          </Link>
        </div>
      </div>

      <div className="relative z-10 mx-auto hidden h-[680px] max-h-[calc(100svh-104px)] min-h-[560px] w-full max-w-[1320px] items-center gap-8 lg:grid lg:grid-cols-[0.9fr_minmax(500px,640px)_0.9fr] lg:gap-0 xl:grid-cols-[0.88fr_minmax(560px,680px)_0.88fr]">
        {/* Coder */}
        <motion.div
          className="order-2 text-center md:order-1 md:-mr-10 md:-translate-y-8 md:text-left xl:-mr-14 xl:-translate-y-4"
          style={{
            opacity: coderOpacity,
            scale: coderScale,
            x: coderTextX,
            pointerEvents: "auto",
          }}
        >
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.34em] text-[#A8A8A8]">
            Interface
          </p>

          <motion.h2 className="whitespace-nowrap text-[48px] font-black leading-[0.92] tracking-[-0.055em] text-[#303030] sm:text-[66px] lg:text-[82px] xl:text-[88px]">
            {"<coder>"}
          </motion.h2>

          <p className="mx-auto mt-5 max-w-[390px] text-[16px] font-normal leading-[1.65] text-[#727272] sm:text-[17px] md:mx-0">
            Construo interfaces responsivas com foco em clareza, estrutura e
            implementação.
          </p>

          <motion.div
            className="mt-5"
            style={{ opacity: coderCtaOpacity, y: coderCtaY }}
          >
            <Link href="/front-end" className={heroButtonClass}>
              Ver front-end
            </Link>
          </motion.div>
        </motion.div>

        {/* Imagem central interativa */}
        <motion.div
          className="order-1 mx-auto flex w-full justify-center md:order-2"
          style={{ x: heroImageX }}
        >
          <div className="relative aspect-[1638/2048] w-[400px] sm:w-[500px] lg:w-[620px] xl:w-[660px]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[24%] bg-gradient-to-b from-transparent via-background/75 to-background"
            />

            <div className="absolute inset-0 z-10">
              <SafeImage
                src={CODER_HERO_IMAGE}
                alt="Diego Suque"
                fill
                priority
                sizes="(min-width: 1280px) 660px, (min-width: 1024px) 620px, (min-width: 640px) 500px, 400px"
                className={imageClassName}
              />
            </div>

            <motion.div
              className="absolute inset-0 z-20 overflow-hidden"
              style={{ clipPath: designerClip }}
            >
              <SafeImage
                src={DESIGNER_HERO_IMAGE}
                alt=""
                fill
                priority
                sizes="(min-width: 1280px) 660px, (min-width: 1024px) 620px, (min-width: 640px) 500px, 400px"
                className={imageClassName}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Designer */}
        <motion.div
          className="order-3 text-center md:-ml-10 md:-translate-y-8 md:text-right xl:-ml-14 xl:-translate-y-4"
          style={{
            opacity: designerOpacity,
            scale: designerScale,
            x: designerTextX,
            pointerEvents: "auto",
          }}
        >
          <p className="mb-4 text-[11px] font-black uppercase tracking-[0.34em] text-[#A8A8A8]">
            Product
          </p>

          <motion.h1 className="text-[52px] font-black leading-[0.92] tracking-[-0.055em] text-[#303030] sm:text-[66px] lg:text-[82px] xl:text-[88px]">
            designer
          </motion.h1>

          <p className="mx-auto mt-5 max-w-[390px] text-[16px] font-normal leading-[1.65] text-[#727272] sm:text-[17px] md:mx-0 md:ml-auto">
            Crio interfaces para produtos digitais complexos, unindo UX, UI e
            design systems.
          </p>

          <motion.div
            className="mt-5"
            style={{ opacity: designerCtaOpacity, y: designerCtaY }}
          >
            <Link href="/portfolio" className={heroButtonClass}>
              Ver portfólio
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
