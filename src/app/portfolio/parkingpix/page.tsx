"use client";

import { motion } from "framer-motion";

import { PageShell } from "@/components/page-shell";
import { SafeImage } from "@/components/safe-image";
import { basePath } from "@/lib/base-path";

type MobileShowcaseProps = {
  src?: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  aspectClassName?: string;
  maxWidthClassName?: string;
};

type EditorialImageShowcaseProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  aspectClassName?: string;
  maxWidthClassName?: string;
};

type FlowShowcaseProps = {
  images: {
    src: string;
    alt: string;
    aspectClassName: string;
  }[];
};

const painCards = [
  {
    title: "Pagamento nao reconhecido",
    description:
      "Quando o cliente paga, mas a operacao nao identifica a transacao com clareza, o atrito aparece na saida.",
  },
  {
    title: "Duvidas na cobranca",
    description:
      "Divergencia entre tempo, valor cobrado e comprovante aumenta inseguranca e reclamacoes.",
  },
  {
    title: "Dependencia de atendimento",
    description:
      "Problemas simples passam a depender de guiche, SAC ou validacao manual.",
  },
  {
    title: "Fila e frustracao",
    description:
      "Em horarios de pico, pequenos atrasos se multiplicam e afetam a percepcao da marca.",
  },
];

const impactCards = [
  {
    metric: "Menos atrito na saida",
    description:
      "Pagamento pelo celular reduz dependencia de guiche, maquininha e atendimento presencial.",
  },
  {
    metric: "Mais clareza para o usuario",
    description:
      "Valor, tempo de permanencia e metodo de pagamento ficam visiveis antes da confirmacao.",
  },
  {
    metric: "Menos chamados simples",
    description:
      "A confirmacao de status reduz a necessidade de comprovar manualmente o pagamento.",
  },
  {
    metric: "Mais fluidez operacional",
    description:
      "Menos filas e menos interacoes presenciais ajudam a melhorar o fluxo em horarios de pico.",
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

const parkingPixImages = {
  camera: `${basePath}/images/parkingpix/parkingpix-camera-escaneia.png`,
  paymentConfirmed: `${basePath}/images/parkingpix/parkingpix-pagamento-processado.png`,
  paymentWaiting: `${basePath}/images/parkingpix/parkingpix-pagamento-processando.png`,
  paymentQr: `${basePath}/images/parkingpix/parkingpix-pagamento-processando-1.png`,
  summary: `${basePath}/images/parkingpix/parkingpix-resumo-do-tempo.png`,
  ticket: `${basePath}/images/parkingpix/parkingpix-ticket.jpg`,
};

function HeroMobileMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 44, filter: "blur(10px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ delay: 0.2, duration: 0.85, ease: "easeInOut" }}
      className="w-full"
    >
      <div className="relative mx-auto flex w-full items-center justify-center lg:justify-end lg:pt-14">
        <div className="relative aspect-[910/2278] w-full max-w-[240px] drop-shadow-[0_24px_45px_rgba(0,0,0,0.14)] md:max-w-[260px] lg:max-w-[300px]">
          <SafeImage
            src={parkingPixImages.paymentQr}
            alt="Tela de pagamento PIX com QR Code no ParkingPix"
            fill
            priority
            sizes="(min-width: 1024px) 300px, 70vw"
            className="scale-[0.92] object-contain object-center"
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
  imageClassName = "object-contain object-center",
  aspectClassName = "aspect-[910/2094]",
  maxWidthClassName = "max-w-[300px]",
}: MobileShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className={["w-full", className].join(" ")}
    >
      <div className="relative mx-auto flex w-full items-center justify-center">
        {src ? (
          <div className={`relative w-full ${maxWidthClassName} ${aspectClassName}`}>
            <SafeImage
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 300px, 78vw"
              className={imageClassName}
            />
          </div>
        ) : (
          <div className="flex aspect-[910/2094] w-full max-w-[320px] items-center justify-center rounded-[28px] border border-dashed border-[#CFCFCF] bg-white px-8 text-center">
            <span className="text-sm font-semibold leading-6 text-[#8A8A8A]">
              Placeholder para tela mobile do ParkingPix
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function EditorialImageShowcase({
  src,
  alt,
  className = "",
  imageClassName = "object-contain object-center",
  aspectClassName = "aspect-[396/1194]",
  maxWidthClassName = "max-w-[280px]",
}: EditorialImageShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className={["w-full", className].join(" ")}
    >
      <div className={`relative mx-auto w-full overflow-hidden rounded-[30px] border border-[#DADADA] bg-white shadow-[0_18px_50px_rgba(48,48,48,0.1)] ${maxWidthClassName} ${aspectClassName}`}>
        <SafeImage
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 280px, 76vw"
          className={imageClassName}
        />
      </div>
    </motion.div>
  );
}

function FlowShowcase({ images }: FlowShowcaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className="w-full"
    >
      <div className="relative mx-auto grid w-full items-start gap-8 sm:grid-cols-3 lg:gap-5">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={[
              `relative mx-auto w-full ${image.aspectClassName}`,
              index === 1 ? "max-w-[220px] sm:translate-y-6 lg:max-w-[240px]" : "max-w-[190px] lg:max-w-[210px]",
              index === 2 ? "sm:translate-y-8" : "",
            ].join(" ")}
          >
            <SafeImage
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 240px, 72vw"
              className="object-contain object-center"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ParkingPixPage() {
  return (
    <PageShell variant="case">
      <article className="bg-white text-[#303030]">
        <section className="relative overflow-hidden px-5 pb-24 pt-16 md:px-8 md:pb-32 md:pt-24">
          <div className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[#F2F2F2] blur-3xl" />

          <div className="relative mx-auto grid max-w-[1240px] items-start gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -44, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="max-w-[560px] pt-2 lg:pt-20"
            >
              <h1 className="text-left text-[38px] font-black leading-[0.98] tracking-[-0.045em] text-[#303030] md:text-[48px] lg:text-[54px]">
                ParkingPix: pagamento mobile via PIX para estacionamentos.
              </h1>

              <p className="mt-7 max-w-[520px] text-left text-base leading-8 text-[#727272] md:text-xl md:leading-9">
                Experiencia de pagamento por QR Code criada para reduzir filas,
                dar clareza sobre o valor cobrado e permitir que o usuario
                finalize a jornada do estacionamento pelo celular, sem depender
                de maquininha, guiche ou atendimento presencial.
              </p>
            </motion.div>

            <HeroMobileMockup />
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F3F3F3] px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <MobileShowcase
              src={parkingPixImages.summary}
              alt="Resumo do tempo de permanencia e valor final no ParkingPix"
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
                  O ParkingPix propoe uma jornada mobile simples para
                  estacionamentos: o usuario escaneia o QR Code do ticket,
                  visualiza o tempo de permanencia, entende o valor final e
                  escolhe pagar via PIX.
                </p>

                <p>
                  A experiencia foi pensada para reduzir atritos em uma etapa
                  sensivel da jornada: o momento em que o cliente precisa pagar
                  e sair rapidamente, especialmente em horarios de pico.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F3F3F3] px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
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
                  Em estacionamentos de shopping, o pagamento e um ponto de alto
                  impacto na percepcao da experiencia. Filas, duvidas sobre
                  cobranca, falhas em meios tradicionais e dependencia de
                  atendimento transformam uma etapa simples em frustracao.
                </p>

                <p>
                  O problema nao esta apenas no pagamento em si, mas na falta de
                  clareza e rastreabilidade: o usuario precisa entender quanto
                  deve pagar, confirmar que a transacao foi reconhecida e sair
                  sem precisar provar manualmente que pagou.
                </p>
              </div>
            </motion.div>

            <EditorialImageShowcase
              src={parkingPixImages.ticket}
              alt="Ticket com QR Code para pagamento via ParkingPix"
              imageClassName="object-contain object-center"
              maxWidthClassName="max-w-[250px]"
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <FlowShowcase
              images={[
                {
                  src: parkingPixImages.summary,
                  alt: "Resumo do tempo de permanencia e valor final",
                  aspectClassName: "aspect-[910/2094]",
                },
                {
                  src: parkingPixImages.paymentQr,
                  alt: "Tela de pagamento PIX com QR Code",
                  aspectClassName: "aspect-[910/2278]",
                },
                {
                  src: parkingPixImages.paymentConfirmed,
                  alt: "Pagamento confirmado no ParkingPix",
                  aspectClassName: "aspect-[910/1990]",
                },
              ]}
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
                  A jornada foi estruturada para ser direta: escanear o QR Code,
                  conferir o resumo, escolher PIX, copiar ou escanear o codigo
                  de pagamento e aguardar a confirmacao.
                </p>

                <p>
                  Cada etapa precisava reduzir ansiedade e deixar claro o que
                  estava acontecendo, evitando abandono, duvidas ou acionamento
                  desnecessario do atendimento.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F3F3F3] px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
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

            <EditorialImageShowcase
              src={parkingPixImages.camera}
              alt="Camera escaneando QR Code do ticket no ParkingPix"
              aspectClassName="aspect-[780/1688]"
              imageClassName="object-contain object-center"
              maxWidthClassName="max-w-[270px]"
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
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
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
                  O desafio foi desenhar uma experiencia simples para um momento
                  de pressa. O usuario nao quer aprender um sistema novo: ele
                  quer entender o valor, pagar com confianca e sair.
                </p>

                <p>
                  Por isso, a interface precisava priorizar clareza, feedback de
                  status e linguagem objetiva, mostrando o que fazer em cada
                  etapa e evitando duvidas sobre pagamento, confirmacao e
                  finalizacao.
                </p>
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                A prioridade foi criar uma leitura de status que funcionasse no
                ritmo da operacao presencial, com confirmacao clara e baixa
                carga cognitiva.
              </p>
            </motion.div>

            <MobileShowcase
              src={parkingPixImages.paymentQr}
              alt="Pagamento PIX com QR Code e codigo para copiar"
              aspectClassName="aspect-[910/2278]"
              maxWidthClassName="max-w-[300px]"
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <MobileShowcase
              src={parkingPixImages.paymentConfirmed}
              alt="Tela de pagamento confirmado no ParkingPix"
              aspectClassName="aspect-[910/1990]"
              maxWidthClassName="max-w-[280px]"
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
                  Atuei na estruturacao da experiencia mobile, organizando o
                  fluxo de pagamento, a hierarquia das informacoes e os estados
                  principais da jornada.
                </p>

                <p>
                  O trabalho envolveu pensar em uma experiencia clara para
                  leitura de valor, escolha do metodo de pagamento, confirmacao
                  via PIX e retorno final para o usuario, mantendo o foco em
                  reduzir atrito operacional.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F3F3F3] px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
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
                  A etapa de pagamento via PIX precisava deixar claro que o
                  usuario poderia escanear o QR Code ou copiar o codigo, alem de
                  mostrar o estado de espera enquanto a transacao era confirmada.
                </p>

                <p>
                  Mensagens como aguardando confirmacao e nao feche esta janela
                  ajudam a reduzir ansiedade e evitam que o usuario interrompa o
                  fluxo antes da finalizacao.
                </p>
              </div>
            </motion.div>

            <MobileShowcase
              src={parkingPixImages.paymentWaiting}
              alt="Tela de pagamento PIX aguardando confirmacao"
              aspectClassName="aspect-[910/1790]"
              maxWidthClassName="max-w-[280px]"
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-white px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
            <MobileShowcase
              src={parkingPixImages.paymentConfirmed}
              alt="Confirmacao de pagamento aprovado no ParkingPix"
              aspectClassName="aspect-[910/1990]"
              maxWidthClassName="max-w-[280px]"
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
                  Apos a aprovacao, a interface confirma a transacao e orienta o
                  usuario sobre a finalizacao da sessao.
                </p>

                <p>
                  O objetivo e fechar o fluxo com seguranca, reforcando que o
                  pagamento foi reconhecido e que o veiculo ja pode ser retirado.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#F3F3F3] px-5 py-24 md:px-8 lg:min-h-[760px]">
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
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
                    Valor visivel antes da acao
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#686868] md:text-base md:leading-8">
                    O usuario precisa entender tempo de permanencia e valor final
                    antes de escolher como pagar.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-6 tracking-[-0.02em] text-[#303030] md:text-xl">
                    Feedback constante de status
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#686868] md:text-base md:leading-8">
                    A interface mostra quando o pagamento esta em andamento,
                    quando precisa de acao e quando foi confirmado.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-6 tracking-[-0.02em] text-[#303030] md:text-xl">
                    PIX como metodo familiar
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#686868] md:text-base md:leading-8">
                    A escolha por PIX reduz aprendizado e conecta o fluxo a um
                    metodo de pagamento ja conhecido pelo usuario.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-6 tracking-[-0.02em] text-[#303030] md:text-xl">
                    Linguagem direta para reduzir ansiedade
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#686868] md:text-base md:leading-8">
                    Mensagens curtas orientam o proximo passo e evitam duvidas
                    durante a espera pela confirmacao.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold leading-6 tracking-[-0.02em] text-[#303030] md:text-xl">
                    Confirmacao clara no final
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#686868] md:text-base md:leading-8">
                    O fechamento do fluxo precisa reduzir ansiedade e deixar
                    claro que o usuario ja pode retirar o veiculo.
                  </p>
                </div>
              </div>
            </motion.div>

            <MobileShowcase
              src={parkingPixImages.summary}
              alt="Resumo do tempo e valor como base das decisoes de design"
              maxWidthClassName="max-w-[280px]"
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
                      Impacto projetado
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
                  O impacto esperado do ParkingPix esta na reducao de atritos
                  recorrentes ligados ao pagamento: duvidas sobre cobranca,
                  pagamento nao reconhecido, filas e dependencia de atendimento
                  manual.
                </p>

                <p>
                  Em operacoes de alto fluxo, reduzir segundos por veiculo e dar
                  mais autonomia ao usuario pode gerar impacto direto na fluidez
                  da saida, no volume de chamados e na percepcao de eficiencia da
                  marca.
                </p>
              </div>

              <p className="mt-7 border-l border-[#BDBDBD] pl-5 text-left text-sm font-semibold leading-7 text-[#303030] md:text-base md:leading-8">
                A proposta e demonstrar um impacto projetado de produto mais
                claro, rastreavel e simples para validacao de pagamento em
                contexto presencial.
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
                  O ParkingPix reforca que solucoes simples podem ter grande
                  impacto quando atacam o ponto certo da jornada.
                </p>

                <p>
                  Em produtos operacionais, a experiencia nao precisa ser
                  complexa para gerar valor. Ela precisa reduzir duvida, deixar
                  o proximo passo claro e dar seguranca para que o usuario
                  conclua a acao sem depender de suporte.
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
