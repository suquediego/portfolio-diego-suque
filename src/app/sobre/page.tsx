"use client";

import { motion } from "framer-motion";

import { PageShell } from "@/components/page-shell";
import { SafeImage } from "@/components/safe-image";
import { useTranslation } from "@/hooks/use-translation";
import { basePath } from "@/lib/base-path";

type AboutText = ReturnType<typeof useTranslation>["pages"]["about"];

const fadeIn = {
  initial: { opacity: 0, y: 28, filter: "blur(10px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: "easeInOut" },
} as const;

// Imagens temporárias. Substituir depois por imagens locais em public/images/about.
const aboutGalleryImages = [
  "https://images.unsplash.com/photo-1709884735646-897b57461d61?q=80&w=3628&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1502085671122-2d218cd434e6?q=80&w=3626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

type ExpandableGalleryProps = {
  images: string[];
  className?: string;
};

function ExpandableGallery({
  images,
  className = "",
}: ExpandableGalleryProps) {
  return (
    <div className={`flex h-96 w-full gap-2 ${className}`}>
      {images.map((image) => (
        <div
          key={image}
          className="relative flex h-full flex-1 cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:flex-[3]"
        >
          <img className="relative h-full w-full object-cover" src={image} alt="" />
        </div>
      ))}
    </div>
  );
}

function AboutHero({ about }: { about: AboutText }) {
  return (
    <section className="mx-auto grid max-w-[1180px] items-center gap-10 lg:grid-cols-[0.92fr_0.78fr] lg:gap-16">
      <motion.div
        initial={{ opacity: 0, x: -32, filter: "blur(10px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.75, ease: "easeInOut" }}
        className="max-w-[720px]"
      >
        <p className="text-[11px] font-black uppercase tracking-[0.34em] text-[#777777]">
          {about.eyebrow}
        </p>

        <h1 className="mt-5 text-[54px] font-black leading-[0.92] tracking-[-0.055em] text-[#303030] sm:text-[72px] lg:text-[92px]">
          {about.title}
        </h1>

        <p className="mt-7 max-w-[680px] text-[18px] leading-[1.7] text-[#727272] sm:text-[20px]">
          {about.description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 32, filter: "blur(10px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ delay: 0.1, duration: 0.75, ease: "easeInOut" }}
        className="relative"
      >
        <div className="overflow-hidden rounded-[36px] border border-[#DADADA] bg-[#F7F7F7] p-5 shadow-[0_26px_70px_rgba(48,48,48,0.12)]">
          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] bg-[#EDEDED] sm:min-h-[500px] lg:min-h-[560px]">
            <SafeImage
              src={`${basePath}/images/portfolio/suque-hero.png`}
              alt="Ilustração de Diego Suque"
              fill
              priority
              sizes="(min-width: 1024px) 440px, 100vw"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ObservationAndMotion() {
  return (
    <section className="mx-auto mt-24 max-w-[1180px]">
      <div className="grid overflow-hidden rounded-[36px] border border-[#DADADA] bg-white p-6 shadow-[0_24px_70px_rgba(48,48,48,0.08)] md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10 lg:p-10">
        <div className="flex min-h-[300px] items-center justify-center md:min-h-[420px] lg:min-h-[500px]">
          <video
            src={`${basePath}/videos/about/about-avatar-meditation-loop.mp4`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="h-[360px] w-full scale-[1.28] object-contain md:h-[440px] lg:h-[520px]"
          />
        </div>

        <div className="mt-8 lg:mt-0">
          <h2 className="text-[38px] font-black leading-[0.98] tracking-[-0.045em] text-[#303030] md:text-[52px]">
            Entre observação e movimento
          </h2>

          <p className="mt-7 max-w-[640px] text-[18px] leading-[1.7] text-[#686868] md:text-[20px]">
            Sou mais de observar antes de falar, entender o contexto e prestar atenção nos detalhes. Ao mesmo tempo, preciso de movimento: treino, rotina e repetição me ajudam a evoluir com presença e constância.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="min-h-[176px] rounded-[28px] border border-[#E0E0E0] bg-white p-7 shadow-[0_18px_50px_rgba(48,48,48,0.06)]">
              <h3 className="text-[28px] font-black leading-none tracking-[-0.04em] text-[#303030] md:text-[34px]">
                Observação
              </h3>
              <p className="mt-5 text-base leading-8 text-[#727272]">
                Silêncio, contexto, detalhe, escuta e clareza.
              </p>
            </div>

            <div className="min-h-[176px] rounded-[28px] border border-[#E0E0E0] bg-white p-7 shadow-[0_18px_50px_rgba(48,48,48,0.06)]">
              <h3 className="text-[28px] font-black leading-none tracking-[-0.04em] text-[#303030] md:text-[34px]">
                Movimento
              </h3>
              <p className="mt-5 text-base leading-8 text-[#727272]">
                Treino, rotina, repetição, presença e evolução.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OriginStory({ origin }: { origin: AboutText["origin"] }) {
  return (
    <motion.section
      {...fadeIn}
      className="mx-auto mt-24 grid max-w-[1180px] gap-7 lg:grid-cols-[0.6fr_1fr]"
    >
      <h2 className="text-[38px] font-black leading-[0.98] tracking-[-0.045em] text-[#303030] md:text-[52px]">
        {origin.title}
      </h2>

      <p className="max-w-[760px] text-[18px] leading-[1.75] text-[#686868] md:text-[21px]">
        {origin.text}
      </p>
    </motion.section>
  );
}

function OffScreenCards({ items }: { items: readonly string[] }) {
  return (
    <motion.section
      {...fadeIn}
      className="mx-auto mt-24 grid max-w-[1180px] gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((item) => (
        <div
          key={item}
          className="flex min-h-[168px] items-end rounded-[30px] border border-[#DADADA] bg-[#F7F7F7] p-7 shadow-[0_22px_60px_rgba(48,48,48,0.07)]"
        >
          <p className="text-[20px] font-bold leading-[1.35] tracking-[-0.025em] text-[#303030]">
            {item}
          </p>
        </div>
      ))}
    </motion.section>
  );
}

function CreativeWay({ content }: { content: AboutText["creativeWay"] }) {
  return (
    <motion.section
      {...fadeIn}
      className="mx-auto mt-24 grid max-w-[1180px] items-center gap-8 lg:grid-cols-[1fr_0.82fr]"
    >
      <div>
        <h2 className="text-[38px] font-black leading-[0.98] tracking-[-0.045em] text-[#303030] md:text-[52px]">
          {content.title}
        </h2>
        <p className="mt-7 max-w-[720px] text-[18px] leading-[1.75] text-[#686868] md:text-[21px]">
          {content.text}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {content.words.map((word) => (
          <div
            key={word}
            className="rounded-[28px] border border-[#DADADA] bg-[#F7F7F7] px-6 py-7 text-center text-[18px] font-black tracking-[-0.02em] text-[#303030] shadow-[0_18px_48px_rgba(48,48,48,0.07)]"
          >
            {word}
          </div>
        ))}
      </div>
    </motion.section>
  );
}

function HumanClosing({ closing }: { closing: AboutText["closing"] }) {
  return (
    <motion.section {...fadeIn} className="mx-auto mt-24 max-w-[920px]">
      <div className="rounded-[36px] border border-[#DADADA] bg-[#F7F7F7] p-8 text-center shadow-[0_24px_70px_rgba(48,48,48,0.08)] md:p-12">
        <div className="mx-auto max-w-[760px] space-y-5 text-[18px] leading-[1.75] text-[#686868] md:text-[21px]">
          {closing.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href={`${basePath}/contato`} className="btn-soft-3d h-[46px] min-w-[180px] px-[26px]">
            {closing.primaryCta}
          </a>
          <a
            href="https://www.linkedin.com/in/diegosuque/"
            target="_blank"
            rel="noreferrer"
            className="btn-soft-3d h-[46px] min-w-[180px] px-[26px]"
          >
            {closing.secondaryCta}
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default function SobrePage() {
  const t = useTranslation();
  const about = t.pages.about;

  return (
    <PageShell variant="white">
      <AboutHero about={about} />
      <ExpandableGallery images={aboutGalleryImages} className="mt-10 p-4" />
      <ObservationAndMotion />
      <OriginStory origin={about.origin} />
      <OffScreenCards items={about.offScreen.items} />
      <CreativeWay content={about.creativeWay} />
      <HumanClosing closing={about.closing} />
    </PageShell>
  );
}
