"use client";

import { motion } from "framer-motion";

import { PageShell } from "@/components/page-shell";
import { ExpandableMedia } from "@/components/expandable-media";
import { SafeImage } from "@/components/safe-image";
import { useTranslation } from "@/hooks/use-translation";
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
        <ExpandableMedia
          src={parkingPixImages.paymentQr}
          alt="Tela de pagamento PIX com QR Code no ParkingPix"
          className="relative aspect-[910/2278] w-full max-w-[240px] drop-shadow-[0_24px_45px_rgba(0,0,0,0.14)] md:max-w-[260px] lg:max-w-[300px]"
        >
          <SafeImage
            src={parkingPixImages.paymentQr}
            alt="Tela de pagamento PIX com QR Code no ParkingPix"
            fill
            priority
            sizes="(min-width: 1024px) 300px, 70vw"
            className="scale-[0.92] object-contain object-center"
          />
        </ExpandableMedia>
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
          <ExpandableMedia
            src={src}
            alt={alt}
            className={`relative w-full ${maxWidthClassName} ${aspectClassName}`}
          >
            <SafeImage
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 300px, 78vw"
              className={imageClassName}
            />
          </ExpandableMedia>
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
      <ExpandableMedia
        src={src}
        alt={alt}
        className={`relative mx-auto w-full overflow-hidden rounded-[30px] border border-[#DADADA] bg-white shadow-[0_18px_50px_rgba(48,48,48,0.1)] ${maxWidthClassName} ${aspectClassName}`}
      >
        <SafeImage
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 280px, 76vw"
          className={imageClassName}
        />
      </ExpandableMedia>
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
            <ExpandableMedia
              src={image.src}
              alt={image.alt}
              className="h-full w-full"
            >
              <SafeImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 240px, 72vw"
                className="object-contain object-center"
              />
            </ExpandableMedia>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function ParkingPixPage() {
  const t = useTranslation();
  const common = t.cases.common;
  const caseText = t.cases.parkingpix;
  const painCards = caseText.painCards;
  const impactCards = caseText.impactCards;
  const learningCards = caseText.learningCards;

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
                {caseText.hero.title}
              </h1>

              <p className="mt-7 max-w-[520px] text-left text-base leading-8 text-[#727272] md:text-xl md:leading-9">
                {caseText.hero.description}
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
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
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
                {caseText.mobileFlow.title}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.mobileFlow.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
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
                {common.operationalContext}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.operationalContext.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
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
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
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
          <div className="mx-auto grid min-h-[560px] max-w-[1240px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: "easeInOut" }}
              className="max-w-[540px]"
            >
              <h2 className="text-left text-[36px] font-bold leading-[1] tracking-[-0.035em] text-[#303030] md:text-[44px] lg:text-[48px]">
                {caseText.paymentValidation.title}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.paymentValidation.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
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
                {caseText.confirmationStatus.title}
              </h2>

              <div className="mt-7 space-y-5 text-left text-base leading-8 text-[#686868] md:text-xl md:leading-9">
                {caseText.confirmationStatus.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
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
