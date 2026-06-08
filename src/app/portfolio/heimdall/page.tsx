"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import type { MouseEvent } from "react";

import { PageShell } from "@/components/page-shell";
import { SafeImage } from "@/components/safe-image";
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

const painCards = [
  {
    title: "Consulta fragmentada",
    description:
      "Analistas precisavam alternar entre fontes, planilhas e consultas manuais para montar uma visão completa.",
  },
  {
    title: "Dados sensíveis dispersos",
    description:
      "Vínculos, histórico, exposição política e inconsistências ficavam espalhados em leituras pouco conectadas.",
  },
  {
    title: "Baixa rastreabilidade",
    description:
      "Consultas e evidências precisavam ser recuperadas com mais contexto para justificar decisões em cenários regulados.",
  },
  {
    title: "Decisão pouco acionável",
    description:
      "Dados brutos exigiam interpretação manual antes de virar uma aprovação, reprovação ou investigação adicional.",
  },
];

const impactCards = [
  {
    metric: "Análise centralizada",
    description:
      "Dados cadastrais, vínculos, histórico e sinais de risco reunidos em uma mesma jornada de investigação.",
  },
  {
    metric: "Mais velocidade",
    description:
      "Analistas conseguem partir de uma consulta simples para uma leitura mais profunda sem perder contexto.",
  },
  {
    metric: "Mais rastreabilidade",
    description:
      "Consultas, fontes e evidências ficam mais organizadas para apoiar decisões justificáveis.",
  },
  {
    metric: "Apoio ao risco",
    description:
      "A experiência ajuda compliance, fraude e risco a identificar inconsistências e relações relevantes.",
  },
];

const learningCards = [
  {
    title: "Sinal não é decisão",
    description:
      "A interface precisa separar evidência, contexto e ação para evitar conclusões precipitadas.",
  },
  {
    title: "Risco precisa de contexto",
    description:
      "Validação cadastral fica mais útil quando o usuário entende origem, histórico, vínculos e recorrência.",
  },
  {
    title: "Clareza protege a decisão",
    description:
      "Produtos de KYC precisam tornar dados sensíveis compreensíveis sem simplificar demais o risco.",
  },
  {
    title: "Investigação deve ser rastreável",
    description:
      "Cada consulta precisa ajudar o time a reconstruir o caminho da análise com segurança operacional.",
  },
];

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

          <div className="relative aspect-[2200/954] overflow-hidden bg-white">
            <SafeImage
              src={heimdallImages.relationalSearch}
              alt="Mapa relacional de vínculos e sinais de risco no Heimdall"
              fill
              priority
              sizes="680px"
              className="object-contain object-center"
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

        <div className="relative aspect-[2200/954] overflow-hidden bg-white">
          <SafeImage
            src={heimdallImages.relationalSearch}
            alt="Mapa relacional de vínculos e sinais de risco no Heimdall"
            fill
            priority
            sizes="(min-width: 640px) 640px, 100vw"
            className="object-contain object-center"
          />
        </div>
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
                Heimdall: inteligência de KYC para validação e risco
                operacional
              </h1>

              <p className="mt-7 max-w-[520px] text-left text-base leading-8 text-[#727272] md:text-xl md:leading-9">
                Plataforma de análise cadastral criada para apoiar times de
                compliance, fraude e risco na validação de pessoas e empresas
                com mais velocidade, rastreabilidade e segurança.
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
                Visão geral
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  O Heimdall é uma solução de KYC e análise cadastral voltada
                  para operações que precisam validar identidades, investigar
                  vínculos e tomar decisões com base em dados confiáveis.
                </p>

                <p>
                  A plataforma centraliza informações de diferentes fontes em
                  uma interface única, reduzindo a necessidade de alternar entre
                  sistemas, planilhas e consultas manuais durante uma análise.
                  Com isso, analistas conseguem identificar inconsistências e
                  construir uma visão mais completa sobre pessoas e empresas.
                </p>
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
                Contexto do produto
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  Em operações financeiras e reguladas, validar um CPF ou CNPJ
                  não é apenas confirmar dados básicos. É preciso entender
                  histórico, vínculos, exposição política, relações
                  empresariais, sinais de fraude e possíveis inconsistências.
                </p>

                <p>
                  Antes de uma experiência centralizada, esse processo tende a
                  ser fragmentado. O Heimdall foi pensado para organizar essa
                  complexidade em uma jornada mais fluida, permitindo que o
                  analista saia de uma consulta simples para uma investigação
                  mais profunda sem perder contexto.
                </p>
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
                Visão macro e detalhe
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  A experiência foi desenhada para funcionar em dois níveis:
                  visão macro para leitura rápida do risco e visão detalhada
                  para investigação aprofundada.
                </p>

                <p>
                  No primeiro contato, o analista precisa entender rapidamente
                  se aquele cadastro apresenta sinais de atenção. Em seguida,
                  precisa acessar dados consolidados, vínculos, histórico,
                  fontes consultadas e evidências que sustentem a decisão.
                </p>
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
                Contexto operacional
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  O Heimdall atende uma rotina em que velocidade e precisão
                  precisam andar juntas. Analistas lidam com múltiplas
                  consultas, diferentes níveis de risco e decisões que precisam
                  ser justificáveis.
                </p>

                <p>
                  Nesse cenário, a interface não poderia apenas exibir dados.
                  Ela precisava organizar a investigação, indicar prioridade,
                  reduzir dúvidas e apoiar decisões auditáveis para analistas,
                  gestores e áreas responsáveis por conformidade.
                </p>
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
                      Dor operacional
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
                Principais dores
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  As principais dores estavam ligadas à fragmentação da análise
                  e à dificuldade de transformar dados brutos em decisão.
                  Analistas precisavam consultar múltiplas fontes para montar um
                  perfil completo, aumentando tempo de investigação e risco de
                  omissões.
                </p>

                <p>
                  Sinais importantes como vínculos empresariais, relações
                  familiares, exposição política, histórico de endereços e
                  inconsistências cadastrais ficavam espalhados, dificultando uma
                  leitura rápida do risco.
                </p>
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
                O desafio de design
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  O principal desafio foi transformar uma massa de dados
                  cadastrais, relacionais e operacionais em uma experiência
                  compreensível para quem precisa tomar decisões rápidas.
                </p>

                <p>
                  A interface precisava entregar profundidade sem sobrecarregar
                  o usuário, organizando informações sensíveis de forma clara,
                  hierárquica e acionável para compliance, fraude e risco.
                </p>
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                O desafio não era apenas mostrar mais dados, mas ajudar o
                analista a entender o que exigia atenção, quais vínculos
                poderiam indicar risco e quais evidências sustentavam a decisão.
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
                Meu papel
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  Atuei na estruturação da experiência e da interface do
                  Heimdall, organizando a jornada de análise cadastral desde a
                  consulta inicial até a leitura dos dados consolidados e sinais
                  de risco.
                </p>

                <p>
                  O trabalho envolveu transformar informações técnicas e
                  sensíveis em telas mais claras, com hierarquia visual,
                  organização de conteúdo e fluxos pensados para reduzir esforço
                  operacional para analistas, gestores e compliance.
                </p>
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
                Consulta e validação
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  A consulta cadastral foi pensada como o ponto de entrada da
                  análise. O objetivo era permitir que o analista encontrasse
                  pessoas ou empresas com rapidez, usando CPF ou CNPJ, sem
                  alternar entre diferentes ferramentas.
                </p>

                <p>
                  A partir da busca, o sistema direciona o usuário para uma
                  visão consolidada, reunindo dados cadastrais, contatos,
                  endereços, vínculos e informações relevantes para a validação.
                </p>
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
                Sinais de risco
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  Além de apresentar dados cadastrais, o Heimdall precisava
                  destacar sinais que exigem atenção durante a análise.
                </p>

                <p>
                  Informações como exposição política, vínculos empresariais,
                  relações indiretas, histórico de dados e inconsistências
                  ajudam o analista a interpretar melhor o contexto de cada
                  pessoa ou empresa sem transformar a interface em um painel
                  excessivamente técnico.
                </p>
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
                Decisões de design
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  As principais decisões de design foram guiadas por três
                  objetivos: clareza, rastreabilidade e velocidade de análise.
                </p>
              </div>

              <div className="mt-8 space-y-6 text-left">
                <div>
                  <h3 className="text-lg font-bold leading-6 tracking-[-0.02em] text-[#303030] md:text-xl">
                    Leitura progressiva
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#686868] md:text-base md:leading-8">
                    A interface apresenta primeiro o essencial e permite
                    aprofundar em dados, vínculos e evidências conforme a
                    necessidade da investigação.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-6 tracking-[-0.02em] text-[#303030] md:text-xl">
                    Linguagem sóbria
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#686868] md:text-base md:leading-8">
                    O produto precisava transmitir confiança e critério por
                    lidar com dados sensíveis, compliance e tomada de decisão em
                    ambientes regulados.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-6 tracking-[-0.02em] text-[#303030] md:text-xl">
                    Risco com evidência
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#686868] md:text-base md:leading-8">
                    Dados cadastrais, vínculos e histórico foram organizados
                    para ajudar o analista a entender o que sustenta cada
                    aprovação, reprovação ou investigação adicional.
                  </p>
                </div>
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
                      Impacto percebido
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
                Impacto
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  O impacto previsto para o Heimdall está ligado à redução da
                  dispersão na análise cadastral. Ao reunir dados, vínculos,
                  histórico e sinais de risco em uma mesma jornada, a plataforma
                  apoia uma rotina de KYC mais clara e rastreável.
                </p>

                <p>
                  A experiência busca dar mais autonomia para analistas,
                  gestores e times de compliance, fraude e risco, reduzindo
                  ambiguidade e ajudando o usuário a transformar dados
                  cadastrais em decisões mais seguras.
                </p>
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                A proposta não é afirmar resultado numérico, mas demonstrar uma
                direção de produto mais rastreável, acionável e consistente para
                validação, investigação e risco operacional.
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
                Aprendizados
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  Produtos de KYC exigem uma interface que organize complexidade
                  com responsabilidade. Dados sensíveis precisam ser legíveis,
                  mas também precisam preservar contexto, critério e segurança
                  operacional.
                </p>

                <p>
                  O aprendizado principal é que uma boa experiência de análise
                  cadastral não apenas mostra informações: ela ajuda o usuário a
                  interpretar sinais, recuperar contexto e justificar decisões
                  em cenários regulados.
                </p>
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
                      Aprendizado
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
                Confidencialidade
              </h2>

              <div className="mx-auto mt-7 max-w-[760px] space-y-5 text-center text-base leading-8 text-[#686868] md:text-lg md:leading-8">
                <p>
                  Por se tratar de uma solução de KYC e análise de risco, este
                  case preserva CPFs, nomes, documentos, clientes, consultas,
                  critérios internos e dados sensíveis da operação.
                </p>

                <p>
                  As telas apresentadas podem utilizar mockups, dados simulados
                  ou placeholders. O objetivo é demonstrar estrutura de
                  experiência, hierarquia de informação e decisões de produto
                  sem revelar informações confidenciais.
                </p>
              </div>

              <div className="mt-9 flex justify-center">
                <a
                  href={`${basePath}/portfolio`}
                  className="btn-soft-3d h-[46px] min-w-[210px] px-[26px]"
                >
                  Voltar para projetos
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </article>
    </PageShell>
  );
}
