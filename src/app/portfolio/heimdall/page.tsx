"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { MouseEvent } from "react";

import { PageShell } from "@/components/page-shell";
import { ExpandableMedia } from "@/components/expandable-media";
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
  frameClassName?: string;
  imageClassName?: string;
  imageWrapperClassName?: string;
  autoScroll?: boolean;
  scrollDistance?: string;
  scrollDuration?: number;
};

const heimdallImages = {
  clipboard: `${basePath}/images/heimdall/heimdall-area-de-transferência.png`,
  dataSource: `${basePath}/images/heimdall/heimdall-fonte-de-dados.png`,
  queue: `${basePath}/images/heimdall/heimdall-fila-de-requisição.png`,
  registry: `${basePath}/images/heimdall/heimdall-dados-cadastrais.png`,
  relationalSearch: `${basePath}/images/heimdall/heimdall-pesquisa-relacional.png`,
  search: `${basePath}/images/heimdall/heimdall-pesquisa.png`,
};

function BrowserMockup() {
  const [tilt, setTilt] = useState<TiltState>({ rotateX: 0, rotateY: 0 });

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
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
              heimdall.rivuspay.com/kyc
            </div>
          </div>

          <ExpandableMedia
            src={heimdallImages.relationalSearch}
            alt="Mapa relacional de vínculos e sinais de risco no Heimdall"
            className="relative aspect-[2200/954] overflow-hidden bg-white"
          >
            <SafeImage
              src={heimdallImages.relationalSearch}
              alt="Mapa relacional de vínculos e sinais de risco no Heimdall"
              fill
              priority
              sizes="680px"
              className="object-contain object-center"
            />
          </ExpandableMedia>
        </div>
      </div>

      <div className="overflow-hidden rounded-[26px] border border-[#DDDDDD] bg-white shadow-[0_20px_60px_rgba(48,48,48,0.14)] lg:hidden">
        <div className="flex h-10 items-center gap-2 border-b border-[#E2E2E2] bg-[#F7F7F7] px-4">
          <span className="size-2.5 rounded-full bg-[#D9D9D9]" />
          <span className="size-2.5 rounded-full bg-[#CFCFCF]" />
          <span className="size-2.5 rounded-full bg-[#BDBDBD]" />
          <div className="ml-3 h-5 flex-1 rounded-full border border-[#DDDDDD] bg-white" />
        </div>

        <ExpandableMedia
          src={heimdallImages.relationalSearch}
          alt="Mapa relacional de vínculos e sinais de risco no Heimdall"
          className="relative aspect-[2200/954] overflow-hidden bg-white"
        >
          <SafeImage
            src={heimdallImages.relationalSearch}
            alt="Mapa relacional de vínculos e sinais de risco no Heimdall"
            fill
            priority
            sizes="(min-width: 640px) 640px, 100vw"
            className="object-contain object-center"
          />
        </ExpandableMedia>
      </div>
    </motion.div>
  );
}

function StaticBrowserMockup({
  imageSrc,
  alt = "Imagem do produto Heimdall",
  address = "heimdall.rivuspay.com/product",
  frameClassName = "h-[390px]",
  imageClassName = "object-contain object-center",
  imageWrapperClassName = "h-full",
  autoScroll = false,
  scrollDistance = "-24%",
  scrollDuration = 20,
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

          <div className={`relative overflow-hidden bg-white ${frameClassName}`}>
            {imageSrc ? (
              <ExpandableMedia
                src={imageSrc}
                alt={alt}
                className="h-full w-full"
              >
                {autoScroll ? (
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
                )}
              </ExpandableMedia>
            ) : (
              <div className="flex h-full items-center justify-center px-6">
                <div className="flex h-[78%] w-full max-w-[520px] items-center justify-center rounded-[22px] border border-dashed border-[#CFCFCF] bg-white text-center">
                  <span className="max-w-[240px] text-sm font-semibold leading-6 text-[#8A8A8A]">
                    Placeholder para tela real do Heimdall
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

export default function HeimdallPage() {
  const t = useTranslation();
  const common = t.cases.common;
  const caseText = t.cases.heimdall;
  const painCards = caseText.painCards;
  const impactCards = caseText.impactCards;
  const learningCards = caseText.learningCards;

  return (
    <PageShell variant="case">
      <article className="bg-white text-[#303030]">
        <section className="relative overflow-hidden px-5 pb-24 pt-16 md:px-8 md:pb-32 md:pt-24">
          <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[#F2F2F2] blur-3xl" />

          <div className="relative mx-auto grid max-w-[1240px] items-start gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -44, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="max-w-[560px] pt-2 lg:pt-20"
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

        <section className="relative overflow-hidden bg-[#F3F3F3] px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <StaticBrowserMockup
              imageSrc={heimdallImages.registry}
              alt="Dados cadastrais consolidados no Heimdall"
              address="heimdall.rivuspay.com/overview"
              imageWrapperClassName="h-[1180px]"
              autoScroll
              scrollDistance="-34%"
              scrollDuration={28}
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
                {common.productContext}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.productContext.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <StaticBrowserMockup
              imageSrc={heimdallImages.search}
              alt="Busca de CPF e CNPJ no Heimdall"
              address="heimdall.rivuspay.com/search"
              frameClassName="aspect-[2980/1528]"
              imageClassName="object-contain object-center"
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <div className="grid gap-5">
              <StaticBrowserMockup
                imageSrc={heimdallImages.registry}
                alt="Visão detalhada de dados cadastrais consolidados no Heimdall"
                address="heimdall.rivuspay.com/registry"
                imageWrapperClassName="h-[1180px]"
                autoScroll
                scrollDistance="-34%"
                scrollDuration={30}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                {caseText.macroDetail.title}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.macroDetail.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

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
                {caseText.operationalContext.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <StaticBrowserMockup
              imageSrc={heimdallImages.queue}
              alt="Fila de requisições e rastreabilidade operacional no Heimdall"
              address="heimdall.rivuspay.com/requests"
              frameClassName="aspect-[2200/954]"
              imageClassName="object-contain object-center"
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="grid w-full gap-5 sm:grid-cols-2"
            >
              {painCards.map((card, index) => (
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
                      {common.operationalContext}
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

            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                {common.mainPainPoints}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.painPointsIntro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

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
              imageSrc={heimdallImages.relationalSearch}
              alt="Pesquisa relacional com mapa de vínculos no Heimdall"
              address="heimdall.rivuspay.com/relations"
              frameClassName="aspect-[2200/954]"
              imageClassName="object-contain object-center"
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <StaticBrowserMockup
              imageSrc={heimdallImages.clipboard}
              alt="Área de transferência com coleções de análise no Heimdall"
              address="heimdall.rivuspay.com/workspace"
              frameClassName="aspect-[2200/954]"
              imageClassName="object-contain object-center"
            />

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
                {caseText.role.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
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
                {caseText.validation.title}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.validation.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            <StaticBrowserMockup
              imageSrc={heimdallImages.search}
              alt="Fluxo de consulta e validação de CPF no Heimdall"
              address="heimdall.rivuspay.com/validation"
              frameClassName="aspect-[2980/1528]"
              imageClassName="object-contain object-center"
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <StaticBrowserMockup
              imageSrc={heimdallImages.relationalSearch}
              alt="Sinais de risco e vínculos relacionais no Heimdall"
              address="heimdall.rivuspay.com/risk"
              frameClassName="aspect-[2200/954]"
              imageClassName="object-contain object-center"
            />

            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                {caseText.riskSignals.title}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.riskSignals.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

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
              imageSrc={heimdallImages.dataSource}
              alt="Configuração de fontes de dados no Heimdall"
              address="heimdall.rivuspay.com/data-sources"
              frameClassName="aspect-[2200/954]"
              imageClassName="object-contain object-center"
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="grid w-full gap-5 sm:grid-cols-2"
            >
              {impactCards.map((card, index) => (
                <div
                  key={card.metric}
                  className={[
                    "flex min-h-[250px] flex-col gap-6 rounded-[32px] border border-[#DADADA] bg-[#F7F7F7] p-7 shadow-[0_24px_70px_rgba(48,48,48,0.06)]",
                    index === 1 ? "sm:translate-y-10" : "",
                    index === 2 ? "sm:-translate-y-2" : "",
                    index === 3 ? "sm:translate-y-8" : "",
                  ].join(" ")}
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A9A9A]">
                      {common.impact}
                    </span>

                    <h3 className="mt-4 text-[26px] font-bold leading-[1.05] tracking-[-0.035em] text-[#303030] md:text-[30px]">
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
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                {common.impact}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.impactIntro.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                {caseText.impactIntro.note}
              </p>
            </motion.div>
          </div>
        </section>

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
                {common.learnings}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.learningsIntro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
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
                    "flex min-h-[250px] flex-col gap-6 rounded-[32px] border border-[#DADADA] bg-white p-7 shadow-[0_24px_70px_rgba(48,48,48,0.08)]",
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
