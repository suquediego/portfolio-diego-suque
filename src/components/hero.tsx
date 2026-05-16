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
   * A camada designer agora aparece pela DIREITA,
   * então no 50/50:
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

  const coderOpacity = useTransform(smoothMouse, [0, 42, 50, 58, 100], [0, 0, 1, 1, 1]);
  const designerOpacity = useTransform(smoothMouse, [0, 42, 50, 58, 100], [1, 1, 1, 0, 0]);

  const coderScale = useTransform(smoothMouse, [0, 50, 100], [0.96, 1, 1.14]);
  const designerScale = useTransform(smoothMouse, [0, 50, 100], [1.14, 1, 0.96]);

  const coderTextX = useTransform(smoothMouse, [0, 50, 100], [-20, 0, 0]);
  const designerTextX = useTransform(smoothMouse, [0, 50, 100], [0, 0, 20]);

  const coderCtaOpacity = useTransform(smoothMouse, [50, 70, 100], [0, 0.3, 1]);
  const coderCtaY = useTransform(smoothMouse, [50, 100], [12, 0]);

  const designerCtaOpacity = useTransform(smoothMouse, [0, 30, 50], [1, 0.3, 0]);
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
            <Link
              href="/front-end"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[#D7D7D7] bg-white px-5 text-sm font-semibold text-[#303030] shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:border-[#BDBDBD] hover:bg-[#F7F7F7]"
            >
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
            <Link
              href="/portfolio"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[#D7D7D7] bg-white px-5 text-sm font-semibold text-[#303030] shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:border-[#BDBDBD] hover:bg-[#F7F7F7]"
            >
              Ver portfólio
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Delimitação suave do final da hero */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-8 bg-gradient-to-b from-transparent via-black/[0.025] to-black/[0.045]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-50 h-px bg-black/10 shadow-[0_10px_24px_rgba(0,0,0,0.14)]" />
    </section>
  );
}
