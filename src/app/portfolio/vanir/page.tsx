"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
  imageClassName?: string;
  imageWrapperClassName?: string;
  autoScroll?: boolean;
  scrollDistance?: string;
  scrollDuration?: number;
};

const heroPills = [
  "Product Design",
  "Gateway de pagamento",
  "Alta volumetria",
  "Payin & Payout",
  "Rastreabilidade",
  "White label",
];

const impactCards = [
  {
    label: "Eficiência operacional",
    metric: "65% a 75% menos chamados operacionais",
    description:
      "Redução estimada com base em registros no ClickUp e relatórios mensais de chamados e resoluções.",
  },
  {
    label: "Redução de volume",
    metric: "De mais de 100 para 20–25 chamados",
    description:
      "Queda no volume de dúvidas recorrentes por período após a centralização das informações em dashboards, filtros e gráficos.",
  },
  {
    label: "Escala de suporte",
    metric: "Suporte de 6 para 3 pessoas",
    description:
      "A maior autonomia das áreas internas e dos clientes reduziu a necessidade de atendimento para dúvidas operacionais simples.",
  },
  {
    label: "Autonomia técnica",
    metric: "Menos dependência técnica",
    description:
      "Desenvolvedores passaram a ser acionados apenas quando havia indício real de problema interno ou necessidade de investigação técnica.",
  },
  {
    label: "Impacto para clientes",
    metric: "Mais autonomia para clientes e merchants",
    description:
      "Clientes passaram a acessar dashboards e consultas com os mesmos dados referentes às suas próprias transações.",
  },
  {
    label: "Impacto para áreas internas",
    metric: "Mais clareza para suporte, operação e comercial",
    description:
      "As áreas passaram a identificar se o problema era interno, do cliente ou externo, como falhas relacionadas ao Pix/BACEN.",
  },
];

const impactComparison = [
  {
    title: "Antes",
    items: [
      "Consulta manual de webhooks no Axiom",
      "Interpretação de JSON para entender status",
      "Dependência de dev para investigar casos simples",
      "Suporte com pouca autonomia",
      "Operação sem visão rápida de volume, falhas e anomalias",
    ],
  },
  {
    title: "Depois",
    items: [
      "Dashboard centralizado de pagamentos",
      "Filtros por período e status",
      "Indicadores de Balance, Payin, Payout e Settlement",
      "Gráficos de volume por período e em tempo real",
      "Áreas internas e clientes com mais autonomia de consulta",
    ],
  },
];

const learningCards = [
  {
    title: "Clareza antes de estética",
    description:
      "Em dashboards financeiros, clareza visual e funcional andam juntas.",
  },
  {
    title: "Dados precisam virar ação",
    description:
      "Cada informação precisa apoiar investigação, leitura ou decisão.",
  },
  {
    title: "Produto perto da operação",
    description:
      "Dores reais surgem perto de quem usa e sustenta o produto.",
  },
  {
    title: "Complexidade precisa ser organizada",
    description:
      "Reduzir esforço sem esconder profundidade.",
  },
];

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
  return (
    <PageShell variant="case">
      <article className="bg-white text-[#303030]">
        {/* HERO */}
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
                Vanir: rastreabilidade para operações financeiras de alto volume.
              </h1>

              <p className="mt-7 max-w-[520px] text-left text-base leading-8 text-[#727272] md:text-xl md:leading-9">
                Design de uma experiência para rastrear transações, interpretar
                falhas e apoiar decisões em tempo real.
              </p>

              <div className="mt-8 flex max-w-[540px] flex-wrap gap-2.5">
                {heroPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-[14px] border border-[#DADADA] bg-[#F4F4F4] px-4 py-2 text-[13px] font-semibold leading-none tracking-[-0.01em] text-[#4A4A4A] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition-colors duration-200 hover:border-[#C9C9C9] hover:bg-white"
                  >
                    {pill}
                  </span>
                ))}
              </div>
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
                Visão geral
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  O Vanir é um gateway de pagamento criado para centralizar e
                  rastrear transações, saldos e movimentações financeiras em
                  tempo real.
                </p>

                <p>
                  O desafio geral era transformar dados dispersos de pay-in,
                  payout, settlement e falhas operacionais em uma experiência
                  clara para monitoramento, investigação e tomada de decisão.
                </p>
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
                Contexto do produto
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  O produto vivia entre clientes integrados via API, operações
                  white label e times internos responsáveis por suporte,
                  financeiro, produto e tecnologia.
                </p>

                <p>
                  Ele precisava atender perfis técnicos e não técnicos dentro de
                  uma mesma base de experiência, sem perder consistência entre
                  diferentes marcas, permissões e formas de operação.
                </p>

                <p>
                  Essa posição tornava o dashboard um ponto de encontro entre
                  integração, acompanhamento financeiro e resolução de dúvidas
                  operacionais.
                </p>
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
                Meu papel
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  Atuei na organização da experiência do produto, conectando
                  fluxos operacionais, hierarquia de informação e necessidades
                  reais de investigação.
                </p>

                <p>
                  Desenhei dashboards, filtros, tabelas e detalhes
                  transacionais para tornar a leitura da operação mais clara e
                  acionável.
                </p>

                <p>
                  A atuação exigiu colaboração próxima com produto, tecnologia e
                  operação para preservar consistência, escalabilidade e
                  rastreabilidade na experiência.
                </p>
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                Mais do que desenhar telas, meu trabalho foi estruturar uma
                camada visual e funcional para decisões operacionais recorrentes.
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
                Da visão macro ao detalhe operacional
              </h2>

              <p className="mt-7 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                A interface foi desenhada para permitir que o usuário acompanhe
                a operação em diferentes níveis: dos indicadores consolidados até
                a investigação de transações específicas.
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
                Contexto operacional
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  A operação exigia lidar com alto volume, saldos, status,
                  falhas, múltiplos merchants e informações financeiras que
                  precisavam ser interpretadas rapidamente.
                </p>

                <p>
                  Quanto maior o fluxo, maior era o risco de uma dúvida simples
                  virar retrabalho: entender uma transação, localizar uma
                  ocorrência ou descobrir o contexto de uma falha.
                </p>
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                A experiência precisava organizar essas camadas sem esconder a
                complexidade real da operação.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="grid w-full gap-5 sm:grid-cols-2"
            >
              {[
                {
                  title: "Fluxo transacional",
                  description:
                    "Acompanhar entradas, saídas, status e eventos financeiros com precisão.",
                },
                {
                  title: "Times conectados",
                  description:
                    "Suporte, financeiro, produto e clientes operando sobre a mesma base.",
                },
                {
                  title: "Investigação recorrente",
                  description:
                    "Falhas e atrasos exigiam ir do resumo ao detalhe com rapidez.",
                },
                {
                  title: "Escala white label",
                  description:
                    "Consistência operacional mesmo em diferentes marcas e contextos.",
                },
              ].map((card, index) => (
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
              {[
                {
                  title: "Dependência técnica",
                  description:
                    "Consultas dependiam de logs, suporte ou leitura técnica.",
                },
                {
                  title: "Dados fragmentados",
                  description:
                    "Informações espalhadas dificultavam análises rápidas.",
                },
                {
                  title: "Status pouco acionável",
                  description:
                    "Falhar não bastava. Era preciso entender motivo, etapa e ação.",
                },
                {
                  title: "Baixa autonomia",
                  description:
                    "Clientes e times internos dependiam de suporte para investigar.",
                },
              ].map((card, index) => (
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
                Principais dores
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  A complexidade não estava apenas no volume de transações, mas
                  na dificuldade de transformar eventos técnicos e financeiros
                  em respostas claras para a operação.
                </p>

                <p>
                  O produto precisava diminuir o caminho entre identificar uma
                  dúvida, encontrar o dado correto e entender o que poderia ser
                  feito em seguida.
                </p>
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                Essas dores orientaram a estrutura do dashboard: rastreabilidade,
                filtros, leitura de status e acesso rápido ao detalhe de cada
                transação.
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
                O desafio de design
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  Minha missão foi traduzir esse cenário em uma interface que
                  ajudasse o usuário a entender onde olhar, o que comparar e
                  como avançar em uma investigação.
                </p>

                <p>
                  O design precisava aproximar informação técnica e leitura
                  operacional, criando caminhos claros para status, filtros,
                  detalhes transacionais e decisões do dia a dia.
                </p>
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                O papel do design foi dar forma a uma experiência rastreável,
                clara e acionável para usuários internos, clientes e merchants.
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
                A solução
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  A solução foi criar um dashboard operacional com leitura
                  rápida, atualização constante e foco em rastreabilidade.
                </p>

                <p>
                  A interface passou a permitir que usuários acompanhassem
                  indicadores essenciais, investigassem transações específicas e
                  entendessem o comportamento da operação em diferentes períodos.
                </p>

                <p>
                  A experiência conectava dados de balance, payin, payout,
                  settlement, volume transacional e transações em tempo real em
                  uma visão mais clara e acionável.
                </p>
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                A ideia era simples: sair de uma visão macro da operação para o
                detalhe de uma transação em poucos cliques.
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
                Operação em tempo real
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  A experiência combinava visão executiva e leitura operacional em uma
                  mesma interface.
                </p>

                <p>
                  O usuário acompanhava saldo, entrada, saída e settlement, enquanto
                  visualizava transações em tempo real com status claros e atualização
                  constante.
                </p>

                <p>
                  Essa estrutura ajudava suporte, financeiro e operação a trabalharem
                  com a mesma fonte de informação, acelerando investigações e reduzindo
                  ruídos entre áreas.
                </p>
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
                Busca, filtros e rastreabilidade
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  Em um gateway de pagamento, busca e filtros não são apenas
                  recursos de conveniência. Eles funcionam como ferramentas de
                  investigação para localizar transações, cruzar critérios e
                  entender o que aconteceu em cada fluxo.
                </p>

                <p>
                  Em operações com alto volume, o usuário precisa combinar
                  merchant, status, período, tipo de operação e identificadores
                  para chegar ao dado certo com confiança. Por isso, a estrutura
                  de filtros foi pensada para reduzir o universo de análise e
                  levar rapidamente ao detalhe da transação.
                </p>
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                O objetivo era dar autonomia para investigar transações sem
                depender imediatamente de leitura técnica ou suporte.
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
                Clareza de status e erros
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  Em produtos financeiros, mostrar que uma transação falhou não
                  é suficiente. O usuário precisa entender o status, em que etapa
                  a falha ocorreu, qual pode ter sido o motivo e qual ação faz
                  sentido a partir dali.
                </p>

                <p>
                  Por isso, a interface precisava tratar status, mensagens de
                  erro e detalhes transacionais como parte do diagnóstico
                  operacional, não apenas como informação complementar.
                </p>

                <p>
                  A experiência organizava sinais importantes para reduzir
                  ambiguidade: situação da transação, origem provável do erro,
                  identificadores relevantes e contexto necessário para orientar
                  suporte, financeiro, operação ou cliente.
                </p>
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                A clareza de status ajudava o usuário a sair da dúvida genérica
                para um diagnóstico mais objetivo, com menos interpretação
                manual entre áreas.
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
                White label
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  O Vanir também precisava funcionar como solução white label,
                  mas isso não significava apenas trocar cor ou logo. A decisão
                  envolvia escalabilidade, consistência e governança da
                  experiência.
                </p>

                <p>
                  A base da interface precisava continuar estável para preservar
                  padrões de navegação, leitura de dados e manutenção do produto.
                  A personalização ficava concentrada em pontos controlados,
                  como marca, chamadas, CTAs e navegação.
                </p>

                <p>
                  Essa abordagem permitia atender diferentes marcas sem
                  fragmentar a experiência, evitando que cada cliente se tornasse
                  uma variação isolada e difícil de evoluir.
                </p>
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                O desafio era equilibrar identidade de marca com uma estrutura
                operacional única, consistente e sustentável para produto,
                design e desenvolvimento.
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
                Decisões de design
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  As decisões de design foram guiadas por três prioridades:
                  reduzir ambiguidade, acelerar a investigação e dar mais
                  autonomia para usuários internos e clientes.
                </p>
              </div>

              <div className="mt-8 space-y-6 text-left">
                <div>
                  <h3 className="text-lg font-bold leading-6 tracking-[-0.02em] text-[#303030] md:text-xl">
                    Indicadores no topo
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#686868] md:text-base md:leading-8">
                    Antes de investigar uma transação específica, o usuário
                    precisava entender rapidamente o estado da operação: volume,
                    status, movimentação e sinais de atenção.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-6 tracking-[-0.02em] text-[#303030] md:text-xl">
                    Filtros como investigação
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#686868] md:text-base md:leading-8">
                    Em alto volume, buscar uma transação exige cruzar período,
                    status, operação, merchant e identificadores. A busca
                    precisava funcionar como diagnóstico, não apenas como
                    pesquisa.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-6 tracking-[-0.02em] text-[#303030] md:text-xl">
                    Detalhe transacional
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#686868] md:text-base md:leading-8">
                    A tabela ajudava a encontrar registros, mas o detalhe
                    explicava contexto, status, informações principais e
                    possíveis motivos de erro.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-6 tracking-[-0.02em] text-[#303030] md:text-xl">
                    Base neutra para white label
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#686868] md:text-base md:leading-8">
                    A interface precisava atender diferentes marcas sem
                    fragmentar a experiência, preservando usabilidade,
                    manutenção e coerência visual.
                  </p>
                </div>
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
                  Impacto da solução
                </h2>

                <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                  <p>
                    Antes das melhorias, a análise de transações no Vanir
                    dependia de uma rotina altamente técnica. Para entender se
                    uma transação estava paga, pendente, com erro ou em outro
                    estado, as equipes precisavam consultar webhooks no Axiom e
                    interpretar arquivos JSON antes de responder clientes.
                  </p>

                  <p>
                    Com a evolução da interface, o Vanir passou a centralizar
                    informações críticas em dashboards, filtros, tabelas e
                    gráficos, dando mais autonomia para suporte, operação,
                    comercial e clientes acompanharem transações e identificarem
                    problemas com mais clareza.
                  </p>
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
                Aprendizados
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  O Vanir reforçou que, em produtos financeiros, design de
                  produto precisa organizar complexidade sem simplificar demais a
                  realidade operacional.
                </p>

                <p>
                  A principal lição foi que clareza antes de estética não
                  significa abrir mão de qualidade visual. Em dashboard
                  financeiro, clareza visual e clareza funcional precisam andar
                  juntas para que dados virem ação.
                </p>

                <p>
                  O projeto também mostrou que produto se constrói perto da
                  operação. Trabalhar próximo de suporte, comercial, financeiro e
                  tecnologia ajudou a entender dúvidas recorrentes, fluxos reais
                  e pontos em que a interface precisava apoiar decisão.
                </p>
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                O aprendizado central foi que dados financeiros só geram valor
                quando são organizados em uma experiência compreensível,
                rastreável e acionável.
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
                Confidencialidade
              </h2>

              <div className="mx-auto mt-7 max-w-[760px] space-y-5 text-center text-base leading-8 text-[#686868] md:text-lg md:leading-8">
                <p>
                  Por se tratar de um produto financeiro com dados sensíveis, este case
                  preserva nomes de clientes, merchants, CPFs, documentos, valores
                  identificáveis, informações privadas da operação e dados estratégicos.
                </p>

                <p>
                  As telas apresentadas no portfólio podem utilizar mockups,
                  dados simulados ou volumes agregados. O objetivo é mostrar a
                  estrutura da experiência e as decisões de produto sem revelar
                  informações confidenciais.
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
