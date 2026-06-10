"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { basePath } from "@/lib/base-path";

const START_FRAME = 1;
const END_FRAME = 240;
const TOTAL_FRAMES = END_FRAME - START_FRAME + 1;

const FRAMES_FOLDER = "avatar-canva-frames";
const FALLBACK_VIDEO = "frontend-avatar-canva.mp4";

const MOBILE_FRAME_STEP = 1;
const AVATAR_RENDER_SCALE = 0.82;
const MOBILE_AVATAR_SCALE = 0.64;
const FRAME_SMOOTHING = 0.045;
const PRELOAD_BATCH_SIZE = 60;

/**
 * Nos primeiros 88% de cada section, o avatar anima.
 * Depois disso, segura a pose final para leitura.
 */
const FRAME_PLAY_PORTION = 0.88;

const SHOW_DEBUG = false;

type FrontendStep = {
  title: string;
  text: string;
  support: string;
  stack?: string[];
  cta?: string;
  frameStart: number;
  frameEnd: number;
  avatarX: number;
  avatarY: number;
  avatarScale: number;
};

type AvatarPlacement = Pick<
  FrontendStep,
  "avatarX" | "avatarY" | "avatarScale"
>;

const steps: FrontendStep[] = [
  {
    title: "Product Design com base técnica",
    text: "Meu foco não é apenas desenhar telas bonitas. Projeto experiências pensando em contexto, regra de negócio, clareza e execução. Ter base técnica me ajuda a tomar decisões mais próximas da realidade do produto e do time.",
    support: "Product Designer que entende o que acontece depois do Figma.",
    stack: ["Product Design", "UX/UI", "Design System"],
    frameStart: 1,
    frameEnd: 24,
    avatarX: 0.12,
    avatarY: 0.49,
    avatarScale: 0.94,
  },
  {
    title: "Do problema à interface",
    text: "Antes de abrir o layout, procuro entender quem usa, qual dor precisa ser resolvida, quais decisões a interface precisa facilitar e como transformar complexidade em uma experiência mais simples.",
    support: "A tela é consequência da estratégia, não o ponto de partida.",
    stack: ["Figma", "FigJam", "Prototipação"],
    frameStart: 50,
    frameEnd: 91,
    avatarX: 0.13,
    avatarY: 0.49,
    avatarScale: 0.92,
  },
  {
    title: "Design que conversa com código",
    text: "Trabalho pensando em componentes, estados, responsividade, acessibilidade e handoff. Entender React, Next.js, TypeScript, Tailwind e shadcn/ui me ajuda a criar interfaces mais consistentes e viáveis para implementação.",
    support: "Não é sobre vender código. É sobre desenhar melhor para produto real.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    frameStart: 103,
    frameEnd: 142,
    avatarX: 0.12,
    avatarY: 0.5,
    avatarScale: 0.92,
  },
  {
    title: "IA como acelerador de processo",
    text: "Uso IA para explorar caminhos, organizar ideias, testar variações, estruturar fluxos, apoiar protótipos e acelerar a passagem entre intenção, interface e entrega. O critério continua sendo de design.",
    support: "Velocidade só importa quando melhora a decisão.",
    stack: ["IA", "Prompting", "Prototipação", "Iteração rápida"],
    frameStart: 151,
    frameEnd: 197,
    avatarX: 0.13,
    avatarY: 0.49,
    avatarScale: 0.9,
  },
  {
    title: "Do Figma ao deploy, se precisar",
    text: "Meu diferencial é atravessar melhor a distância entre design, produto e entrega. Posso desenhar a experiência, prototipar, validar caminhos e, quando necessário, colocar uma interface navegável no ar.",
    support: "Product Design com repertório para tirar ideias do estático.",
    stack: ["Git", "GitHub", "Vercel", "Deploy"],
    cta: "Ver projetos",
    frameStart: 199,
    frameEnd: 240,
    avatarX: 0.14,
    avatarY: 0.49,
    avatarScale: 0.86,
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function easeInOutCubic(value: number) {
  return value * value * (3 - 2 * value);
}

function getFramePath(index: number) {
  return `${basePath}/${FRAMES_FOLDER}/frame_${String(index).padStart(4, "0")}.webp`;
}

function findNearestLoadedFrame(
  images: Array<HTMLImageElement | null>,
  targetIndex: number,
) {
  const exactImage = images[targetIndex];

  if (exactImage?.complete && exactImage.naturalWidth) {
    return exactImage;
  }

  let nearestImage: HTMLImageElement | null = null;
  let nearestDistance = Number.POSITIVE_INFINITY;

  images.forEach((image, index) => {
    if (!image?.complete || !image.naturalWidth) {
      return;
    }

    const distance = Math.abs(index - targetIndex);

    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestImage = image;
    }
  });

  return nearestImage;
}

function drawContainedImage(
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  placement: AvatarPlacement,
  isMobile = false,
) {
  const context = canvas.getContext("2d");

  if (!context || !image.naturalWidth || !image.naturalHeight) {
    return;
  }

  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const imageRatio = image.naturalWidth / image.naturalHeight;
  const canvasRatio = canvasWidth / canvasHeight;

  const responsiveScale = isMobile ? MOBILE_AVATAR_SCALE : 1;
  const placementScale =
    placement.avatarScale * AVATAR_RENDER_SCALE * responsiveScale;

  const placementX = isMobile ? 0.5 : placement.avatarX;
  const placementY = isMobile ? 0.28 : placement.avatarY;

  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";

  let drawWidth = canvasWidth * placementScale;
  let drawHeight = canvasHeight * placementScale;

  if (imageRatio > canvasRatio) {
    drawHeight = canvasWidth / imageRatio;
    drawHeight *= placementScale;
  } else {
    drawWidth = canvasHeight * imageRatio;
    drawWidth *= placementScale;
  }

  const centeredX = isMobile
    ? canvasWidth * placementX - drawWidth / 2
    : canvasWidth * placementX;

  const x = clamp(centeredX, 0, Math.max(0, canvasWidth - drawWidth));

  const y = clamp(
    canvasHeight * placementY - drawHeight / 2,
    0,
    Math.max(0, canvasHeight - drawHeight),
  );

  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.drawImage(image, x, y, drawWidth, drawHeight);
}

export function FrontendScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const debugRef = useRef<HTMLDivElement>(null);
  const frameImagesRef = useRef<Array<HTMLImageElement | null>>([]);

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  const lastFrameRef = useRef(-1);
  const activeStepRef = useRef(0);
  const renderedFrameRef = useRef(-1);
  const renderedStepRef = useRef(-1);

  const rafIdRef = useRef<number | null>(null);
  const preloadHandleRef = useRef<number | null>(null);

  const loadedFramesRef = useRef(0);
  const failedFramesRef = useRef(0);
  const isDestroyedRef = useRef(false);
  const isMobileRef = useRef(false);

  const [activeStep, setActiveStep] = useState(0);
  const [isFallbackVisible, setIsFallbackVisible] = useState(false);

  const activeContent = steps[activeStep];
  const TitleTag = activeStep === 0 ? "h1" : "h2";

  const updateDebug = useCallback(
    (
      progress: number,
      stepProgress: number,
      heldProgress: number,
      frame: number,
    ) => {
      if (!SHOW_DEBUG || !debugRef.current) {
        return;
      }

      const currentStep = steps[activeStepRef.current];

      debugRef.current.textContent = [
        `/front-end debug`,
        `step: ${activeStepRef.current + 1}/${steps.length}`,
        `title: ${currentStep.title}`,
        `global progress: ${progress.toFixed(3)}`,
        `step progress: ${stepProgress.toFixed(3)}`,
        `held progress: ${heldProgress.toFixed(3)}`,
        `frame: ${frame}`,
        `avatarX: ${currentStep.avatarX}`,
        `avatarY: ${currentStep.avatarY}`,
        `avatarScale: ${currentStep.avatarScale}`,
      ].join("\n");
    },
    [],
  );

  const drawFrame = useCallback((force = false) => {
    const canvas = canvasRef.current;

    if (!canvas || isDestroyedRef.current) {
      return;
    }

    if (
      !force &&
      renderedFrameRef.current === lastFrameRef.current &&
      renderedStepRef.current === activeStepRef.current
    ) {
      return;
    }

    const frameIndex = clamp(lastFrameRef.current, 0, TOTAL_FRAMES - 1);

    const fallbackImage = findNearestLoadedFrame(
      frameImagesRef.current,
      frameIndex,
    );

    if (!fallbackImage) {
      return;
    }

    drawContainedImage(
      canvas,
      fallbackImage,
      steps[activeStepRef.current],
      isMobileRef.current,
    );

    renderedFrameRef.current = lastFrameRef.current;
    renderedStepRef.current = activeStepRef.current;
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const wrapper = canvas?.parentElement;

    if (!canvas || !wrapper || isDestroyedRef.current) {
      return;
    }

    const rect = wrapper.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.round(rect.width));
    const height = Math.max(1, Math.round(rect.height));

    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const nextCanvasWidth = Math.round(width * dpr);
    const nextCanvasHeight = Math.round(height * dpr);

    if (canvas.width !== nextCanvasWidth) {
      canvas.width = nextCanvasWidth;
    }

    if (canvas.height !== nextCanvasHeight) {
      canvas.height = nextCanvasHeight;
    }

    renderedFrameRef.current = -1;
    renderedStepRef.current = -1;
    drawFrame(true);
  }, [drawFrame]);

  const updateTargetProgress = useCallback(() => {
    const section = sectionRef.current;

    if (!section || isDestroyedRef.current) {
      return;
    }

    const rect = section.getBoundingClientRect();
    const scrollableDistance = Math.max(1, rect.height - window.innerHeight);

    targetProgressRef.current = clamp(-rect.top / scrollableDistance, 0, 1);
  }, []);

  const renderProgress = useCallback(
    (progress: number) => {
      if (!canvasRef.current || isDestroyedRef.current) {
        return;
      }

      const nextStep = Math.min(
        steps.length - 1,
        Math.floor(progress * steps.length),
      );

      const stepStartProgress = nextStep / steps.length;
      const stepProgress = clamp(
        (progress - stepStartProgress) * steps.length,
        0,
        1,
      );

      const heldStepProgress = clamp(stepProgress / FRAME_PLAY_PORTION, 0, 1);

      const frameRange = steps[nextStep].frameEnd - steps[nextStep].frameStart;

      const absoluteFrame = Math.round(
        steps[nextStep].frameStart +
          easeInOutCubic(heldStepProgress) * frameRange,
      );

      const rawFrame = clamp(absoluteFrame - START_FRAME, 0, TOTAL_FRAMES - 1);

      const nextFrame = isMobileRef.current
        ? Math.round(rawFrame / MOBILE_FRAME_STEP) * MOBILE_FRAME_STEP
        : rawFrame;

      const normalizedFrame = clamp(nextFrame, 0, TOTAL_FRAMES - 1);

      const didFrameChange = lastFrameRef.current !== normalizedFrame;
      const didStepChange = activeStepRef.current !== nextStep;

      lastFrameRef.current = normalizedFrame;
      activeStepRef.current = nextStep;

      updateDebug(
        progress,
        stepProgress,
        heldStepProgress,
        normalizedFrame + START_FRAME,
      );

      if (didStepChange) {
        setActiveStep(nextStep);
      }

      if (didFrameChange || didStepChange) {
        drawFrame();
      }
    },
    [drawFrame, updateDebug],
  );

  const animate = useCallback(
    function animateFrame() {
      if (isDestroyedRef.current) {
        return;
      }

      const nextProgress =
        currentProgressRef.current +
        (targetProgressRef.current - currentProgressRef.current) *
          FRAME_SMOOTHING;

      currentProgressRef.current =
        Math.abs(targetProgressRef.current - nextProgress) < 0.0005
          ? targetProgressRef.current
          : nextProgress;

      renderProgress(currentProgressRef.current);

      rafIdRef.current = window.requestAnimationFrame(animateFrame);
    },
    [renderProgress],
  );

  useEffect(() => {
    isDestroyedRef.current = false;
    loadedFramesRef.current = 0;
    failedFramesRef.current = 0;

    targetProgressRef.current = 0;
    currentProgressRef.current = 0;

    lastFrameRef.current = steps[0].frameStart - START_FRAME;
    activeStepRef.current = 0;
    renderedFrameRef.current = -1;
    renderedStepRef.current = -1;

    setActiveStep(0);
    setIsFallbackVisible(false);

    frameImagesRef.current = Array.from({ length: TOTAL_FRAMES }, () => null);

    const clearPreloadHandle = () => {
      if (preloadHandleRef.current !== null) {
        window.clearTimeout(preloadHandleRef.current);
        preloadHandleRef.current = null;
      }
    };

    const loadFrame = (frameIndex: number) => {
      if (
        isDestroyedRef.current ||
        frameIndex < 0 ||
        frameIndex >= TOTAL_FRAMES ||
        frameImagesRef.current[frameIndex]
      ) {
        return;
      }

      const image = new window.Image();
      frameImagesRef.current[frameIndex] = image;

      image.onload = () => {
        if (isDestroyedRef.current) {
          return;
        }

        loadedFramesRef.current += 1;

        if (
          frameIndex === steps[0].frameStart - START_FRAME ||
          frameIndex === steps[0].frameEnd - START_FRAME ||
          frameIndex === lastFrameRef.current
        ) {
          drawFrame(true);
        }
      };

      image.onerror = () => {
        if (isDestroyedRef.current) {
          return;
        }

        failedFramesRef.current += 1;

        if (
          failedFramesRef.current >= TOTAL_FRAMES &&
          loadedFramesRef.current === 0
        ) {
          setIsFallbackVisible(true);
        }
      };

      image.decoding = "async";
      image.src = getFramePath(frameIndex + START_FRAME);
    };

    const priorityFrames = Array.from(
      new Set(
        steps.flatMap((step) => [
          step.frameStart - START_FRAME,
          step.frameEnd - START_FRAME,
        ]),
      ),
    );

    priorityFrames.forEach((frameIndex) => {
      loadFrame(frameIndex);
    });

    for (
      let index = 0;
      index < Math.min(PRELOAD_BATCH_SIZE, TOTAL_FRAMES);
      index += 1
    ) {
      loadFrame(index);
    }

    let nextFrameToPreload = PRELOAD_BATCH_SIZE;

    const preloadBatch = () => {
      if (isDestroyedRef.current) {
        return;
      }

      const batchEnd = Math.min(
        nextFrameToPreload + PRELOAD_BATCH_SIZE,
        TOTAL_FRAMES,
      );

      for (let index = nextFrameToPreload; index < batchEnd; index += 1) {
        loadFrame(index);
      }

      nextFrameToPreload = batchEnd;

      if (nextFrameToPreload < TOTAL_FRAMES) {
        preloadHandleRef.current = window.setTimeout(preloadBatch, 24);
      }
    };

    preloadHandleRef.current = window.setTimeout(preloadBatch, 80);

    return () => {
      isDestroyedRef.current = true;
      clearPreloadHandle();
      frameImagesRef.current = [];
    };
  }, [drawFrame]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateMobileState = () => {
      if (isDestroyedRef.current) {
        return;
      }

      isMobileRef.current = mediaQuery.matches;
      renderedFrameRef.current = -1;
      renderedStepRef.current = -1;

      resizeCanvas();
      updateTargetProgress();
      renderProgress(currentProgressRef.current);
    };

    updateMobileState();

    mediaQuery.addEventListener("change", updateMobileState);

    return () => {
      mediaQuery.removeEventListener("change", updateMobileState);
    };
  }, [renderProgress, resizeCanvas, updateTargetProgress]);

  useEffect(() => {
    resizeCanvas();
    updateTargetProgress();
    renderProgress(currentProgressRef.current);

    if (rafIdRef.current !== null) {
      window.cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }

    rafIdRef.current = window.requestAnimationFrame(animate);

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("orientationchange", resizeCanvas);
    window.addEventListener("scroll", updateTargetProgress, { passive: true });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("orientationchange", resizeCanvas);
      window.removeEventListener("scroll", updateTargetProgress);

      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [animate, renderProgress, resizeCanvas, updateTargetProgress]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[240vh] bg-white md:min-h-[320vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        {isFallbackVisible ? (
          <video
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-contain object-center opacity-100"
            src={`${basePath}/videos/${FALLBACK_VIDEO}`}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
        ) : (
          <canvas
            ref={canvasRef}
            aria-label="Avatar guia da experiência front-end"
            className="pointer-events-none absolute inset-0 z-0 block h-full w-full bg-transparent opacity-100"
          />
        )}

        <div className="relative z-10 mx-auto flex h-full max-w-[1240px] items-center justify-end px-4 pt-[7vh] sm:px-6 md:px-8 md:pt-[6vh] xl:max-w-[1320px]">
          <div className="min-w-0 max-w-[620px] rounded-[28px] bg-white/82 px-4 py-5 backdrop-blur-[3px] md:max-w-[600px] md:-translate-y-[72px] md:rounded-none md:bg-transparent md:px-0 md:py-0 md:backdrop-blur-0 lg:max-w-[620px] xl:max-w-[660px]">
            <div
              key={activeContent.title}
              className="transition-all duration-500 ease-out"
            >
              <TitleTag className="text-[34px] font-black leading-[0.98] tracking-[-0.052em] text-[#303030] sm:text-[48px] lg:text-[58px] xl:text-[64px]">
                {activeContent.title}
              </TitleTag>

              <p className="mt-5 max-w-[560px] text-[15px] leading-[1.75] text-[#727272] sm:mt-6 sm:text-[17px] lg:max-w-[590px] lg:text-[18px]">
                {activeContent.text}
              </p>

              <p className="mt-5 max-w-[520px] text-[13px] font-semibold leading-[1.6] text-[#3f3f3f] sm:text-[14px] lg:max-w-[560px]">
                {activeContent.support}
              </p>

              {activeContent.stack?.length ? (
                <div className="mt-6 flex max-w-[560px] flex-wrap gap-x-3 gap-y-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#8a8a8a] sm:text-[11px]">
                  {activeContent.stack.map((item, index) => (
                    <span key={item} className="inline-flex items-center gap-3">
                      {item}
                      {index < activeContent.stack!.length - 1 ? (
                        <span className="h-1 w-1 rounded-full bg-[#cfcfcf]" />
                      ) : null}
                    </span>
                  ))}
                </div>
              ) : null}

              {activeContent.cta ? (
                <Link
                  href="/portfolio"
                  className="btn-soft-3d mt-9 gap-3 text-[12px] font-black uppercase tracking-[0.18em]"
                >
                  {activeContent.cta}
                  <ArrowUpRight className="size-4 stroke-[2]" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>

        {SHOW_DEBUG ? (
          <div
            ref={debugRef}
            className="pointer-events-none fixed bottom-4 left-4 z-50 max-w-[360px] whitespace-pre-wrap rounded-2xl border border-black/10 bg-black/80 p-4 font-mono text-[11px] leading-relaxed text-white shadow-2xl"
          />
        ) : null}
      </div>
    </section>
  );
}