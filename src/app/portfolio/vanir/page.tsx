"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { PageShell } from "@/components/page-shell";
import { SafeImage } from "@/components/safe-image";
import { useTranslation } from "@/hooks/use-translation";
import { basePath } from "@/lib/base-path";

type TiltState = {
  rotateX: number;
  rotateY: number;
};

type StaticBrowserMockupProps = {
  imageSrc?: string;
  alt?: string;
  address?: string;
  imageClassName?: string;
  imageWrapperClassName?: string;
  autoScroll?: boolean;
  scrollDistance?: string;
  scrollDuration?: number;
};

/* MOCKUP PRINCIPAL DA HERO COM ANIMAÇÃO DE MOUSE */
function BrowserMockup() {
  const [tilt, setTilt] = useState<TiltState>({ rotateX: 0, rotateY: 0 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    const middleX = bounds.width / 2;
    const middleY = bounds.height / 2;

    const rotateY = ((x - middleX) / middleX) * 5;
    const rotateX = -((y - middleY) / middleY) * 4;

    setTilt({ rotateX, rotateY });
  }

  function handleMouseLeave() {
    setTilt({ rotateX: 0, rotateY: 0 });
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 44, filter: "blur(10px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.2, duration: 0.85, ease: "easeInOut" }}
      className="w-full [perspective:1400px]"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative hidden rounded-[30px] border border-[#DDDDDD] bg-[#F7F7F7] p-3 shadow-[0_26px_70px_rgba(48,48,48,0.14)] transition-shadow duration-300 hover:shadow-[0_34px_90px_rgba(48,48,48,0.2)] lg:block"
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 160ms ease-out",
        }}
      >
        <div
          className="overflow-hidden rounded-[22px] border border-[#E2E2E2] bg-white"
          style={{ transform: "translateZ(24px)" }}
        >
          <div className="flex h-11 items-center gap-3 border-b border-[#E2E2E2] bg-[#F7F7F7] px-5">
            <div className="flex gap-2">
              <span className="size-3 rounded-full bg-[#D9D9D9]" />
              <span className="size-3 rounded-full bg-[#CFCFCF]" />
              <span className="size-3 rounded-full bg-[#BDBDBD]" />
            </div>

            <div className="mx-auto flex h-7 w-[48%] items-center justify-center rounded-full border border-[#DDDDDD] bg-white text-[11px] font-semibold text-[#777777]">
              vanir.rivuspay.com/dashboard
            </div>
          </div>

          <div className="relative h-[430px] overflow-hidden bg-white">
            <SafeImage
              src={`${basePath}/images/cases/vanir/dashboard-hero.png`}
              alt="Dashboard operacional do Vanir"
              fill
              priority
              sizes="680px"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-[26px] border border-[#DDDDDD] bg-white shadow-[0_20px_60px_rgba(48,48,48,0.14)] lg:hidden">
        <div className="flex h-10 items-center gap-2 border-b border-[#E2E2E2] bg-[#F7F7F7] px-4">
          <span className="size-2.5 rounded-full bg-[#D9D9D9]" />
          <span className="size-2.5 rounded-full bg-[#CFCFCF]" />
          <span className="size-2.5 rounded-full bg-[#BDBDBD]" />
          <div className="ml-3 h-5 flex-1 rounded-full border border-[#DDDDDD] bg-white" />
        </div>

        <div className="relative h-[280px] overflow-hidden bg-white sm:h-[360px]">
          <SafeImage
            src={`${basePath}/images/cases/vanir/dashboard-hero.png`}
            alt="Dashboard operacional do Vanir"
            fill
            priority
            sizes="(min-width: 640px) 640px, 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </motion.div>
  );
}

/* MOCKUP ESTÁTICO REUTILIZÁVEL PARA AS SEÇÕES DO CASE */
function StaticBrowserMockup({
  imageSrc,
  alt = "Imagem do produto Vanir",
  address = "vanir.rivuspay.com/product",
  imageClassName = "object-cover object-top",
  imageWrapperClassName = "h-full",
  autoScroll = false,
  scrollDistance = "-24%",
  scrollDuration = 16,
}: StaticBrowserMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className="w-full"
    >
      <div className="overflow-hidden rounded-[30px] border border-[#DADADA] bg-[#F7F7F7] p-3 shadow-[0_24px_70px_rgba(48,48,48,0.12)]">
        <div className="overflow-hidden rounded-[22px] border border-[#E2E2E2] bg-white">
          <div className="flex h-11 items-center gap-3 border-b border-[#E2E2E2] bg-[#F7F7F7] px-5">
            <div className="flex gap-2">
              <span className="size-3 rounded-full bg-[#D9D9D9]" />
              <span className="size-3 rounded-full bg-[#CFCFCF]" />
              <span className="size-3 rounded-full bg-[#BDBDBD]" />
            </div>

            <div className="mx-auto flex h-7 w-[48%] items-center justify-center rounded-full border border-[#DDDDDD] bg-white text-[11px] font-semibold text-[#777777]">
              {address}
            </div>
          </div>

          <div className="relative h-[390px] overflow-hidden bg-white">
            {imageSrc ? (
              autoScroll ? (
                <motion.div
                  role="img"
                  aria-label={alt}
                  className={`absolute inset-x-0 top-0 bg-top bg-no-repeat ${imageWrapperClassName}`}
                  style={{
                    backgroundImage: `url(${imageSrc})`,
                    backgroundSize: "100% auto",
                  }}
                  animate={{ y: ["0%", scrollDistance, "0%"] }}
                  transition={{
                    duration: scrollDuration,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                />
              ) : (
                <SafeImage
                  src={imageSrc}
                  alt={alt}
                  fill
                  sizes="680px"
                  className={imageClassName}
                />
              )
            ) : (
              <div className="flex h-full items-center justify-center px-6">
                <div className="flex h-[78%] w-full max-w-[520px] items-center justify-center rounded-[22px] border border-dashed border-[#CFCFCF] bg-white text-center">
                  <span className="max-w-[220px] text-sm font-semibold leading-6 text-[#8A8A8A]">
                    Espaço reservado para imagem do produto
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* SHOWCASE EM VÍDEO DO DASHBOARD COMPLETO */
function DashboardVideoShowcase() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.playbackRate = 0.65;

    const timeout = window.setTimeout(() => {
      video.playbackRate = 1;
    }, 3500);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.85, ease: "easeInOut" }}
      className="mx-auto w-full max-w-[1240px]"
    >
      <div className="overflow-hidden rounded-[34px] border border-[#DADADA] bg-[#F7F7F7] p-3 shadow-[0_30px_90px_rgba(48,48,48,0.14)]">
        <div className="overflow-hidden rounded-[24px] border border-[#E2E2E2] bg-white">
          <div className="flex h-11 items-center gap-3 border-b border-[#E2E2E2] bg-[#F7F7F7] px-5">
            <div className="flex gap-2">
              <span className="size-3 rounded-full bg-[#D9D9D9]" />
              <span className="size-3 rounded-full bg-[#CFCFCF]" />
              <span className="size-3 rounded-full bg-[#BDBDBD]" />
            </div>

            <div className="mx-auto flex h-7 w-[42%] items-center justify-center rounded-full border border-[#DDDDDD] bg-white text-[11px] font-semibold text-[#777777]">
              vanir.rivuspay.com/dashboard
            </div>
          </div>

          <div className="relative aspect-[21/9] overflow-hidden bg-white">
            <video
              ref={videoRef}
              src={`${basePath}/videos/vanir-dashboard-overview.mp4`}
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full scale-[1.035] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* VISUAL EDITORIAL DOS MÓDULOS DE NAVEGAÇÃO */
function NavigationModulesVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className="relative min-h-[420px] w-full overflow-visible md:min-h-[520px] lg:-ml-10 lg:min-h-[680px] lg:w-[108%] xl:-ml-20 xl:min-h-[760px] xl:w-[116%]"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-3xl lg:h-[620px] lg:w-[620px]" />
      <div className="pointer-events-none absolute -left-10 top-0 h-[260px] w-[260px] rounded-full bg-[#E7E7E7] blur-3xl lg:-left-20 lg:h-[360px] lg:w-[360px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-white blur-3xl lg:h-[360px] lg:w-[360px]" />

      <SafeImage
        src={`${basePath}/images/cases/vanir/vanir-navigation-modules.png`}
        alt="Recortes da navegação e módulos operacionais do Vanir"
        fill
        sizes="(min-width: 1280px) 760px, (min-width: 1024px) 560px, 100vw"
        className="scale-[1.05] object-contain object-center drop-shadow-[0_32px_70px_rgba(48,48,48,0.18)] lg:scale-[1.14] lg:object-cover xl:scale-[1.22]"
      />
    </motion.div>
  );
}

export default function VanirPage() {
  const t = useTranslation();
  const common = t.cases.common;
  const caseText = t.cases.vanir;
  const impactCards = caseText.impactCards;
  const impactComparison = caseText.impactComparison;
  const learningCards = caseText.learningCards;

  return (
    <PageShell variant="case">
      <article className="bg-white text-[#303030]">
        {/* HERO */}
        <section className="relative overflow-hidden px-5 pb-24 pt-16 md:px-8 md:pb-32 md:pt-24">
          <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[#F2F2F2] blur-3xl" />

          <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -44, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="max-w-[560px] pt-2 lg:pt-0"
            >
              <h1 className="text-left text-[38px] font-black leading-[0.98] tracking-[-0.045em] text-[#303030] md:text-[48px] lg:text-[54px]">
                {caseText.hero.title}
              </h1>

              <p className="mt-7 max-w-[520px] text-left text-base leading-8 text-[#727272] md:text-xl md:leading-9">
                {caseText.hero.description}
              </p>
            </motion.div>

            <BrowserMockup />
          </div>
        </section>

        {/* VISÃO GERAL */}
        <section className="relative overflow-hidden bg-[#F3F3F3] px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <StaticBrowserMockup
              imageSrc={`${basePath}/images/cases/vanir/dashboard-full.png`}
              alt="Visão geral do dashboard operacional do Vanir"
              address="vanir.rivuspay.com/dashboard"
              imageClassName="scale-[1.02] object-cover object-top"
            />

            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                {common.overview}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTEXTO DO PRODUTO */}
        <section className="relative overflow-hidden bg-[#F3F3F3] px-5 py-20 md:px-8 lg:min-h-[760px] lg:py-0">
          <div className="mx-auto grid min-h-[620px] max-w-[1240px] items-center gap-12 lg:min-h-[760px] lg:grid-cols-[0.94fr_1.06fr] lg:gap-24 xl:grid-cols-[1fr_1fr] xl:gap-32">
            <NavigationModulesVisual />

            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                {common.productContext}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.productContext.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* MEU PAPEL */}
        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                {common.myRole}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.role.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                {caseText.role.note}
              </p>
            </motion.div>

            <StaticBrowserMockup
              imageSrc={`${basePath}/images/cases/vanir/vanir-product-design-process.png`}
              alt="Processo de design do Vanir com tela de payout, drawer de filtros e especificações para desenvolvimento"
              address="figma.com/vanir/design-process"
              imageClassName="scale-[1.035] object-cover object-center"
            />
          </div>
        </section>

        {/* SHOWCASE DO DASHBOARD */}
        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[860px] text-left">
            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                {caseText.macroDetail.title}
              </h2>

              <p className="mt-7 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.macroDetail.paragraphs[0]}
              </p>
            </motion.div>
          </div>

          <div className="mt-14">
            <DashboardVideoShowcase />
          </div>
        </section>

        {/* CONTEXTO OPERACIONAL */}
        <section className="relative overflow-hidden bg-[#F3F3F3] px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                {common.operationalContext}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.operationalContext.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                {caseText.operationalContext.note}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="grid w-full gap-5 sm:grid-cols-2"
            >
              {caseText.operationalContext.cards.map((card, index) => (
                <div
                  key={card.title}
                  className={[
                    "flex min-h-[230px] flex-col gap-6 rounded-[32px] border border-[#DADADA] bg-white p-7 shadow-[0_24px_70px_rgba(48,48,48,0.08)]",
                    index === 1 ? "sm:translate-y-10" : "",
                    index === 2 ? "sm:-translate-y-2" : "",
                    index === 3 ? "sm:translate-y-8" : "",
                  ].join(" ")}
                >
                  <h3 className="text-[26px] font-bold leading-[1.05] tracking-[-0.035em] text-[#303030] md:text-[30px]">
                    {card.title}
                  </h3>

                  <p className="text-sm leading-6 text-[#686868] md:text-base md:leading-7">
                    {card.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PRINCIPAIS DORES */}
        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="grid w-full gap-5 sm:grid-cols-2"
            >
              {caseText.painPoints.cards.map((card, index) => (
                <div
                  key={card.title}
                  className={[
                    "flex min-h-[230px] flex-col gap-6 rounded-[32px] border border-[#DADADA] bg-[#F7F7F7] p-7 shadow-[0_24px_70px_rgba(48,48,48,0.06)]",
                    index === 1 ? "sm:translate-y-10" : "",
                    index === 2 ? "sm:-translate-y-2" : "",
                    index === 3 ? "sm:translate-y-8" : "",
                  ].join(" ")}
                >
                  <h3 className="text-[26px] font-bold leading-[1.05] tracking-[-0.035em] text-[#303030] md:text-[30px]">
                    {card.title}
                  </h3>

                  <p className="text-sm leading-6 text-[#686868] md:text-base md:leading-7">
                    {card.description}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                {caseText.painPoints.title}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.painPoints.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                {caseText.painPoints.note}
              </p>
            </motion.div>
          </div>
        </section>

        {/* O DESAFIO DE DESIGN */}
        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                {common.designChallenge}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.challenge.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                {caseText.challenge.note}
              </p>
            </motion.div>

            <StaticBrowserMockup
              imageSrc={`${basePath}/images/cases/vanir/axiom-logs-gateway-blur.png`}
              alt="Logs técnicos no Axiom usados para investigação de fluxos do gateway"
              address="axiom.co/logs/gateway"
              imageClassName="scale-[1.04] object-cover object-center"
            />
          </div>
        </section>

        {/* A SOLUÇÃO */}
        <section className="relative overflow-hidden bg-[#F3F3F3] px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <StaticBrowserMockup
              imageSrc={`${basePath}/images/cases/vanir/vanir-solution-dashboard.png`}
              alt="Dashboard operacional do Vanir com indicadores, gráficos e transações"
              address="vanir.rivuspay.com/dashboard"
              imageWrapperClassName="h-[760px]"
              autoScroll
              scrollDistance="-38%"
              scrollDuration={16}
            />

            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                {caseText.solution.title}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.solution.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                {caseText.solution.note}
              </p>
            </motion.div>
          </div>
        </section>

        {/* OPERAÇÃO EM TEMPO REAL */}
        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                {caseText.realtime.title}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.realtime.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <StaticBrowserMockup
              imageSrc={`${basePath}/images/cases/vanir/vanir-realtime-operation.png`}
              alt="Dashboard do Vanir com indicadores operacionais, gráficos de merchants e transações em tempo real"
              address="vanir.rivuspay.com/dashboard"
              imageWrapperClassName="h-[760px]"
              autoScroll
              scrollDistance="-48%"
              scrollDuration={16}
            />
          </div>
        </section>

        {/* BUSCA, FILTROS E RASTREABILIDADE */}
        <section className="relative overflow-hidden bg-[#F3F3F3] px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <StaticBrowserMockup
              imageSrc={`${basePath}/images/cases/vanir/vanir-search-filters.png`}
              alt="Tela do Vanir com drawer de filtros avançados para busca de transações"
              address="vanir.rivuspay.com/payouts"
              imageClassName="scale-[1.02] object-cover object-center"
            />

            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                {caseText.searchFilters.title}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.searchFilters.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                {caseText.searchFilters.note}
              </p>
            </motion.div>
          </div>
        </section>

        {/* CLAREZA DE STATUS E ERROS */}
        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                {caseText.statusErrors.title}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.statusErrors.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                {caseText.statusErrors.note}
              </p>
            </motion.div>

            <StaticBrowserMockup
              imageSrc={`${basePath}/images/cases/vanir/vanir-transaction-status-detail.png`}
              alt="Detalhe de payout no Vanir com status de erro, motivo da falha e identificadores da transação"
              address="vanir.rivuspay.com/payouts/detail"
              imageClassName="scale-[1.02] object-cover object-center"
            />
          </div>
        </section>

        {/* WHITE LABEL */}
        <section className="relative overflow-hidden bg-[#F3F3F3] px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <StaticBrowserMockup
              imageSrc={`${basePath}/images/cases/vanir/vanir-white-label-dashboard.png`}
              alt="Dashboard do Vanir em versão white label com identidade visual personalizada"
              address="cliente.rivuspay.com/dashboard"
              imageWrapperClassName="h-[620px]"
              autoScroll
              scrollDistance="-22%"
              scrollDuration={20}
            />

            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                {caseText.whiteLabel.title}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.whiteLabel.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                {caseText.whiteLabel.note}
              </p>
            </motion.div>
          </div>
        </section>

        {/* DECISÕES DE DESIGN */}
        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                {common.designDecisions}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.designDecisions.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 space-y-6 text-left">
                {caseText.designDecisions.cards.map((card) => (
                <div key={card.title}>
                  <h3 className="text-lg font-bold leading-6 tracking-[-0.02em] text-[#303030] md:text-xl">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#686868] md:text-base md:leading-8">
                    {card.description}
                  </p>
                </div>
                ))}
              </div>
            </motion.div>

            <StaticBrowserMockup
              imageSrc={`${basePath}/images/cases/vanir/vanir-design-decisions.png`}
              alt="Tela do Vanir mostrando decisões de design com timeline, indicadores, gráficos e tabela operacional"
              address="vanir.rivuspay.com/accounts"
              imageWrapperClassName="h-[820px]"
              autoScroll
              scrollDistance="-52%"
              scrollDuration={20}
            />
          </div>
        </section>

        {/* IMPACTO */}
        <section className="relative overflow-hidden bg-[#F3F3F3] px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-[1240px]">
            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20"
            >
              <div className="max-w-[560px]">
                <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                  {common.impact}
                </h2>

                <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                  {caseText.impactIntro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="grid w-full gap-5 sm:grid-cols-2">
                {impactCards.slice(0, 4).map((card, index) => (
                  <div
                    key={card.metric}
                    className={[
                      "flex min-h-[250px] flex-col gap-6 rounded-[32px] border border-[#DADADA] bg-white p-7 shadow-[0_24px_70px_rgba(48,48,48,0.08)]",
                      index === 1 ? "sm:translate-y-10" : "",
                      index === 2 ? "sm:-translate-y-2" : "",
                      index === 3 ? "sm:translate-y-8" : "",
                    ].join(" ")}
                  >
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A9A9A]">
                        {card.label}
                      </span>

                      <h3 className="mt-4 text-[25px] font-bold leading-[1.05] tracking-[-0.035em] text-[#303030] md:text-[28px]">
                        {card.metric}
                      </h3>
                    </div>

                    <p className="text-sm leading-6 text-[#686868] md:text-base md:leading-7">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="mt-20 grid gap-5 md:grid-cols-2 lg:mt-24"
            >
              {impactCards.slice(4).map((card) => (
                <div
                  key={card.metric}
                  className="flex min-h-[220px] flex-col gap-6 rounded-[32px] border border-[#DADADA] bg-white p-7 shadow-[0_24px_70px_rgba(48,48,48,0.08)] md:p-8"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A9A9A]">
                      {card.label}
                    </span>

                    <h3 className="mt-4 text-[25px] font-bold leading-[1.05] tracking-[-0.035em] text-[#303030] md:text-[30px]">
                      {card.metric}
                    </h3>
                  </div>

                  <p className="text-sm leading-6 text-[#686868] md:text-base md:leading-7">
                    {card.description}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="mt-20 grid gap-5 lg:mt-24 lg:grid-cols-2"
            >
              {impactComparison.map((column) => (
                <div
                  key={column.title}
                  className="rounded-[32px] border border-[#DADADA] bg-[#F7F7F7] p-7 shadow-[0_24px_70px_rgba(48,48,48,0.06)] md:p-8"
                >
                  <h3 className="text-[30px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[36px]">
                    {column.title}
                  </h3>

                  <ul className="mt-7 space-y-4 text-left text-sm leading-6 text-[#686868] md:text-base md:leading-7">
                    {column.items.map((item) => (
                      <li
                        key={item}
                        className="border-l border-[#BDBDBD] pl-4"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* APRENDIZADOS */}
        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                {common.learnings}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.learningsIntro.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                {caseText.learningsIntro.note}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="grid w-full gap-5 sm:grid-cols-2"
            >
              {learningCards.map((card, index) => (
                <div
                  key={card.title}
                  className={[
                    "flex min-h-[250px] flex-col gap-6 rounded-[32px] border border-[#DADADA] bg-[#F7F7F7] p-7 shadow-[0_24px_70px_rgba(48,48,48,0.06)]",
                    index === 1 ? "sm:translate-y-10" : "",
                    index === 2 ? "sm:-translate-y-2" : "",
                    index === 3 ? "sm:translate-y-8" : "",
                  ].join(" ")}
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A9A9A]">
                      {common.learningLabel}
                    </span>

                    <h3 className="mt-4 text-[26px] font-bold leading-[1.05] tracking-[-0.035em] text-[#303030] md:text-[30px]">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-6 text-[#686868] md:text-base md:leading-7">
                    {card.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CONFIDENCIALIDADE */}
        <section className="relative overflow-hidden bg-white px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto max-w-[920px]">
            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="rounded-[32px] border border-[#DADADA] bg-[#F7F7F7] p-8 text-center shadow-[0_24px_70px_rgba(48,48,48,0.08)] md:p-12"
            >
              <h2 className="text-center text-[32px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[40px] lg:text-[44px]">
                {common.confidentiality}
              </h2>

              <div className="mx-auto mt-7 max-w-[760px] space-y-5 text-center text-base leading-8 text-[#686868] md:text-lg md:leading-8">
                {caseText.confidentiality.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-9 flex justify-center">
                <a
                  href={`${basePath}/portfolio`}
                  className="btn-soft-3d h-[46px] min-w-[210px] px-[26px]"
                >
                  {common.backToProjects}
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
