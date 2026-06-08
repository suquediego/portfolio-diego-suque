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

type IPhone15ProMockupProps = {
  src?: string;
  alt?: string;
  className?: string;
};

type MobileShowcaseProps = {
  src?: string;
  alt?: string;
  className?: string;
};

const painCards = [
  {
    title: "Comprovantes manuais",
    description:
      "A confirmacao dependia de leitura manual e comparacao visual em um fluxo presencial sujeito a pressa.",
  },
  {
    title: "Duvidas na confirmacao",
    description:
      "Operadores e clientes precisavam de uma resposta mais clara sobre pagamento aprovado, pendente ou invalido.",
  },
  {
    title: "Baixa rastreabilidade",
    description:
      "Sem uma leitura organizada, era mais dificil recuperar contexto de pagamento, ticket e atendimento.",
  },
  {
    title: "Fluxo operacional lento",
    description:
      "Em alta rotatividade, qualquer friccao na validacao impacta atendimento, fila e confianca da operacao.",
  },
];

const impactCards = [
  {
    metric: "Confirmacao mais clara",
    description:
      "Status de pagamento apresentado de forma direta para apoiar operador e cliente.",
  },
  {
    metric: "Menos ambiguidade",
    description:
      "A experiencia reduz duvidas sobre comprovante, valor, ticket e situacao da validacao.",
  },
  {
    metric: "Apoio ao atendimento",
    description:
      "O fluxo mobile organiza informacoes essenciais para decisoes rapidas no ponto de operacao.",
  },
  {
    metric: "Fluxo mais simples",
    description:
      "A jornada prioriza leitura rapida, confirmacao objetiva e menor esforco operacional.",
  },
];

const learningCards = [
  {
    title: "Status precisa ser imediato",
    description:
      "Em operacoes presenciais, a interface precisa responder rapido e com baixa margem de interpretacao.",
  },
  {
    title: "Mobile deve reduzir atrito",
    description:
      "Cada tela precisa apoiar uma acao clara, sem transformar uma validacao simples em processo complexo.",
  },
  {
    title: "Confianca vem do contexto",
    description:
      "Valor, ticket, horario e situacao precisam aparecer juntos para sustentar a decisao do operador.",
  },
  {
    title: "Operacao dita o ritmo",
    description:
      "O desenho precisa considerar fila, pressa, ambiente fisico e alternancia entre cliente e operador.",
  },
];

function IPhone15ProMockup({
  src,
  alt = "Tela mobile do ParkingPix",
  className = "",
}: IPhone15ProMockupProps) {
  return (
    <div
      className={[
        "relative mx-auto aspect-[9/19.5] w-full max-w-[300px] rounded-[46px] border border-[#2A2A2A] bg-[#151515] p-2 shadow-[0_30px_80px_rgba(48,48,48,0.2)]",
        className,
      ].join(" ")}
    >
      <div className="absolute left-[-3px] top-[22%] h-12 w-[3px] rounded-l-full bg-[#303030]" />
      <div className="absolute right-[-3px] top-[18%] h-16 w-[3px] rounded-r-full bg-[#303030]" />
      <div className="absolute right-[-3px] top-[30%] h-12 w-[3px] rounded-r-full bg-[#303030]" />

      <div className="relative h-full overflow-hidden rounded-[38px] border border-[#3A3A3A] bg-white">
        <div className="absolute left-1/2 top-3 z-10 h-7 w-24 -translate-x-1/2 rounded-full bg-[#111111]" />

        {src ? (
          <SafeImage
            src={src}
            alt={alt}
            fill
            sizes="320px"
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-white px-8 text-center">
            <span className="text-sm font-semibold leading-6 text-[#8A8A8A]">
              Placeholder para tela mobile do ParkingPix
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function HeroMobileMockup() {
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
        className="relative mx-auto flex min-h-[520px] w-full max-w-[620px] items-center justify-center rounded-[34px] border border-[#DDDDDD] bg-[#F7F7F7] p-8 shadow-[0_26px_70px_rgba(48,48,48,0.14)] transition-shadow duration-300 hover:shadow-[0_34px_90px_rgba(48,48,48,0.2)]"
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 160ms ease-out",
        }}
      >
        <div style={{ transform: "translateZ(24px)" }}>
          <IPhone15ProMockup
            src={`${basePath}/images/parkingpix/parkingpix-preview2.png`}
            alt="Fluxo mobile de validacao de pagamento PIX no ParkingPix"
            className="max-w-[292px]"
          />
        </div>
      </div>
    </motion.div>
  );
}

function MobileShowcase({
  src,
  alt = "Tela mobile do ParkingPix",
  className = "",
}: MobileShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className={["w-full", className].join(" ")}
    >
      <div className="relative mx-auto flex min-h-[520px] w-full items-center justify-center overflow-hidden rounded-[34px] border border-[#DADADA] bg-[#F7F7F7] p-8 shadow-[0_24px_70px_rgba(48,48,48,0.12)]">
        <div className="relative z-10">
          <IPhone15ProMockup src={src} alt={alt} />
        </div>
      </div>
    </motion.div>
  );
}

export default function ParkingPixPage() {
  const parkingPixPreview = `${basePath}/images/parkingpix/parkingpix-preview2.png`;
  const parkingPixDetailPreview = `${basePath}/images/parkingpix/parkingpix-previwe2.png`;

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
                ParkingPix: validacao mobile para pagamentos PIX em
                estacionamentos.
              </h1>

              <p className="mt-7 max-w-[520px] text-left text-base leading-8 text-[#727272] md:text-xl md:leading-9">
                Design de uma experiencia simples para confirmar pagamentos,
                reduzir duvidas operacionais e apoiar fluxos presenciais de alta
                rotatividade.
              </p>
            </motion.div>

            <HeroMobileMockup />
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F3F3F3] px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <MobileShowcase
              src={parkingPixPreview}
              alt="Visao geral mobile do ParkingPix"
            />

            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                Visao geral
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  O ParkingPix foi pensado para operacoes de estacionamento que
                  precisam validar pagamentos PIX de forma rapida, clara e
                  confiavel.
                </p>

                <p>
                  A experiencia organiza pagamento, ticket e confirmacao em uma
                  jornada mobile objetiva para reduzir friccao no atendimento e
                  dar mais seguranca ao fluxo presencial.
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
                  A solucao conecta pagamento, confirmacao e operacao presencial
                  em uma jornada simples, com foco em leitura rapida de status e
                  reducao de friccao no atendimento.
                </p>

                <p>
                  O produto precisa funcionar em um ambiente de alta rotatividade,
                  onde operador e cliente dependem de respostas claras para
                  liberar o fluxo sem criar duvidas sobre comprovantes ou valores.
                </p>
              </div>
            </motion.div>

            <MobileShowcase
              src={parkingPixDetailPreview}
              alt="Tela mobile de confirmacao de pagamento do ParkingPix"
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <MobileShowcase
              src={parkingPixPreview}
              alt="Fluxo principal mobile do ParkingPix"
            />

            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                Fluxo mobile
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  A jornada mobile precisava ser curta, legivel e facil de
                  interpretar em movimento, com foco na confirmacao do pagamento
                  e no estado atual do ticket.
                </p>

                <p>
                  Cada etapa foi pensada para reduzir esforco: identificar o
                  ticket, conferir valor, acompanhar o PIX e exibir um retorno
                  objetivo para continuidade da operacao.
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
                  Em estacionamentos, a validacao acontece no ponto de contato
                  entre atendimento, fila, comprovante e liberacao. A interface
                  precisa apoiar uma decisao rapida sem exigir leitura extensa.
                </p>

                <p>
                  O ParkingPix organiza informacoes essenciais para que operador
                  e cliente entendam se o pagamento foi iniciado, confirmado,
                  pendente ou precisa de nova verificacao.
                </p>
              </div>
            </motion.div>

            <MobileShowcase
              src={parkingPixDetailPreview}
              alt="Status operacional de pagamento no ParkingPix"
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
                  A operacao precisava reduzir dependencia de comprovantes
                  enviados manualmente e tornar a confirmacao mais objetiva para
                  quem atende e para quem paga.
                </p>

                <p>
                  O fluxo tambem precisava preservar contexto minimo de ticket,
                  valor e horario para evitar duvidas recorrentes durante a
                  liberacao.
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
                  Transformar a validacao de pagamentos PIX em uma experiencia
                  mobile simples, clara e confiavel para operadores e clientes.
                </p>

                <p>
                  O desenho precisava equilibrar simplicidade e confianca:
                  mostrar somente o necessario, mas com contexto suficiente para
                  evitar interpretacoes erradas no atendimento.
                </p>
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                A prioridade foi criar uma leitura de status que funcionasse no
                ritmo da operacao presencial, com confirmacao clara e baixa
                carga cognitiva.
              </p>
            </motion.div>

            <MobileShowcase
              src={parkingPixPreview}
              alt="Validacao mobile de pagamento PIX no ParkingPix"
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <MobileShowcase
              src={parkingPixDetailPreview}
              alt="Confirmacao e status de pagamento no ParkingPix"
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
                  Atuei na organizacao da jornada mobile, priorizando clareza de
                  status, reducao de passos e leitura operacional para ambientes
                  de atendimento presencial.
                </p>

                <p>
                  O trabalho conectou fluxo de pagamento, validacao, retorno ao
                  operador e comunicacao com o cliente em uma experiencia simples
                  e rastreavel.
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
                Validacao de pagamento
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  A validacao precisava mostrar o estado do PIX com linguagem
                  direta, destacando quando o pagamento estava confirmado,
                  pendente ou exigia nova acao.
                </p>

                <p>
                  A estrutura prioriza informacoes de decisao: valor, ticket,
                  horario, status e orientacao de continuidade para o operador.
                </p>
              </div>
            </motion.div>

            <MobileShowcase
              src={parkingPixPreview}
              alt="Tela de validacao de pagamento PIX"
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <MobileShowcase
              src={parkingPixDetailPreview}
              alt="Detalhe de status e comprovante no ParkingPix"
            />

            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                Confirmacao e status
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  A confirmacao precisava evitar termos ambiguos e apresentar uma
                  resposta facil de entender em poucos segundos.
                </p>

                <p>
                  O status funciona como ponto de alinhamento entre cliente e
                  operador, reduzindo discussoes sobre comprovante, valor pago ou
                  liberacao do ticket.
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
                Decisoes de design
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                <p>
                  As decisoes foram guiadas por simplicidade, velocidade de
                  leitura e confianca operacional.
                </p>
              </div>

              <div className="mt-8 space-y-6 text-left">
                <div>
                  <h3 className="text-lg font-bold leading-6 tracking-[-0.02em] text-[#303030] md:text-xl">
                    Status em primeiro plano
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#686868] md:text-base md:leading-8">
                    A tela precisa responder rapidamente se o pagamento foi
                    confirmado, esta pendente ou precisa ser revisado.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-6 tracking-[-0.02em] text-[#303030] md:text-xl">
                    Informacao minima suficiente
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#686868] md:text-base md:leading-8">
                    Valor, ticket e horario aparecem como contexto de decisao,
                    sem transformar o fluxo em uma tela administrativa pesada.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-6 tracking-[-0.02em] text-[#303030] md:text-xl">
                    Linguagem operacional
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#686868] md:text-base md:leading-8">
                    A copy prioriza comandos e retornos objetivos para uso em
                    atendimento presencial.
                  </p>
                </div>
              </div>
            </motion.div>

            <MobileShowcase
              src={undefined}
              alt="Placeholder de tela mobile do ParkingPix"
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
                  O impacto percebido do ParkingPix esta ligado a uma
                  confirmacao mais clara, menos ambiguidade no atendimento e um
                  fluxo mais simples para operacoes presenciais.
                </p>

                <p>
                  A experiencia busca apoiar o operador com informacoes
                  essenciais para validar pagamentos PIX sem depender de
                  comprovantes manuais como unica fonte de decisao.
                </p>
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                A proposta e demonstrar uma direcao de produto mais clara,
                rastreavel e simples para validacao de pagamento em contexto
                presencial.
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
                  Em fluxos presenciais, uma boa experiencia mobile precisa ser
                  direta, resistente a duvidas e facil de interpretar em poucos
                  segundos.
                </p>

                <p>
                  O aprendizado central e que pagamento digital em ambiente
                  fisico nao depende apenas do checkout: depende da confirmacao,
                  da linguagem de status e da confianca que a interface transmite
                  no momento de atendimento.
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
                  Por se tratar de uma solucao de pagamento e operacao
                  presencial, este case preserva dados, placas, valores,
                  clientes, tickets, comprovantes e informacoes operacionais.
                </p>

                <p>
                  As telas apresentadas podem utilizar mockups, dados simulados
                  ou placeholders. O objetivo e demonstrar estrutura da
                  experiencia e decisoes de produto sem revelar informacoes
                  confidenciais.
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
