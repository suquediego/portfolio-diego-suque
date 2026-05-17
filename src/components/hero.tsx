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

const CODER_HERO_IMAGE = "/images/dev-hero-3.png";
const DESIGNER_HERO_IMAGE = "/images/suque-hero.png";

const heroButtonClass =
  "inline-flex h-[50px] w-[150px] items-center justify-center rounded-[30px] border border-[#8F9092] bg-[linear-gradient(to_top,#D8D9DB_0%,#fff_80%,#FDFDFD_100%)] text-[14px] font-semibold text-[#606060] shadow-none outline-none transition-all duration-200 [text-shadow:0_1px_#fff] hover:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_3px_3px_#CECFD1] active:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_5px_3px_#999,inset_0_0_30px_#aaa] focus:shadow-[0_4px_3px_1px_#FCFCFC,0_6px_8px_#D6D7D9,0_-4px_4px_#CECFD1,0_-6px_4px_#FEFEFE,inset_0_0_5px_3px_#999,inset_0_0_30px_#aaa]";

export function Hero() {
  const mouse = useMotionValue(50);

  const smoothMouse = useSpring(mouse, {
    stiffness: 76,
    damping: 34,
    mass: 0.52,
  });

  /**
   * 0   = designer completo
   * 50  = split 50/50
   * 100 = coder completo
   *
   * Importante:
   * A camada designer aparece pela DIREITA.
   * Então no 50/50:
   * - esquerda = coder/P&B
   * - direita = designer/colorida
   */
  const designerClip = useMotionTemplate`inset(0 0 0 ${smoothMouse}%)`;

  /**
   * Lógica:
   * - coder ativo: smoothMouse perto de 100
   * - neutro: smoothMouse em 50
   * - designer ativo: smoothMouse perto de 0
   */
  const heroImageX = useTransform(smoothMouse, [0, 50, 100], [-145, 0, 145]);

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

  const coderScale = useTransform(smoothMouse, [0, 50, 100], [0.96, 1, 1.14]);
  const designerScale = useTransform(
    smoothMouse,
    [0, 50, 100],
    [1.14, 1, 0.96],
  );

  const coderTextX = useTransform(smoothMouse, [0, 50, 100], [-20, 0, 0]);
  const designerTextX = useTransform(smoothMouse, [0, 50, 100], [0, 0, 20]);

  const coderCtaOpacity = useTransform(smoothMouse, [50, 70, 100], [0, 0.3, 1]);
  const coderCtaY = useTransform(smoothMouse, [50, 100], [12, 0]);

  const designerCtaOpacity = useTransform(
    smoothMouse,
    [0, 30, 50],
    [1, 0.3, 0],
  );
  const designerCtaY = useTransform(smoothMouse, [0, 50], [0, 12]);

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const rawPercent = ((event.clientX - bounds.left) / bounds.width) * 100;

    /**
     * Áreas:
     * - esquerda: coder
     * - centro: neutro
     * - direita: designer
     */
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
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-background px-4 pt-20 md:px-8 md:pt-24"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-8 md:grid-cols-[0.78fr_minmax(560px,720px)_0.78fr] md:gap-0">
        {/* Coder */}
        <motion.div
          className="order-2 text-center md:order-1 md:-mr-20 md:text-left"
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

          <motion.h2 className="whitespace-nowrap text-[48px] font-black leading-[0.92] tracking-[-0.055em] text-[#303030] sm:text-[68px] lg:text-[88px]">
            {"<coder>"}
          </motion.h2>

          <p className="mx-auto mt-5 max-w-[390px] text-[16px] font-normal leading-[1.65] text-[#727272] sm:text-[17px] md:mx-0">
            Construo interfaces responsivas com foco em clareza, estrutura e
            implementação.
          </p>

          <motion.div
            className="mt-7"
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
          <div className="relative aspect-[1638/2048] w-[430px] sm:w-[540px] lg:w-[700px]">
            {/* Fade leve na base da imagem, finalizando no stroke */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-[14%] bg-gradient-to-b from-transparent via-background/45 to-background"
            />

            {/* Camada base: coder / P&B */}
            <div className="absolute inset-0 z-10">
              <SafeImage
                src={CODER_HERO_IMAGE}
                alt="Diego Suque"
                fill
                priority
                sizes="(min-width: 1024px) 700px, (min-width: 640px) 540px, 430px"
                className={imageClassName}
              />
            </div>

            {/* Camada superior: designer / colorida */}
            <motion.div
              className="absolute inset-0 z-20 overflow-hidden"
              style={{ clipPath: designerClip }}
            >
              <SafeImage
                src={DESIGNER_HERO_IMAGE}
                alt=""
                fill
                priority
                sizes="(min-width: 1024px) 700px, (min-width: 640px) 540px, 430px"
                className={imageClassName}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Designer */}
        <motion.div
          className="order-3 text-center md:-ml-20 md:text-right"
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

          <motion.h1 className="text-[52px] font-black leading-[0.92] tracking-[-0.055em] text-[#303030] sm:text-[68px] lg:text-[88px]">
            designer
          </motion.h1>

          <p className="mx-auto mt-5 max-w-[390px] text-[16px] font-normal leading-[1.65] text-[#727272] sm:text-[17px] md:mx-0 md:ml-auto">
            Crio interfaces para produtos digitais complexos, unindo UX, UI e
            design systems.
          </p>

          <motion.div
            className="mt-7"
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