import { basePath } from "@/lib/base-path";

export type Work = {
  title: string;
  category: string;
  description: string;
  image: string;
  hoverImage: string;
  href: string;
  ctaLabel?: string;
};

export const works: Work[] = [
  {
    title: "Vanir",
    category: "GATEWAY DE PAGAMENTO",
    description:
      "Transformei dados técnicos de pagamentos PIX em dashboards operacionais mais claros para suporte, comercial e operação, reduzindo dúvidas recorrentes e aumentando a autonomia dos times.",
    image: `${basePath}/images/vanir/vanir-preview.png`,
    hoverImage: `${basePath}/images/vanir/vanir-previwe2.png`,
    href: "/portfolio/vanir",
    ctaLabel: "Ver case completo",
  },
  {
    title: "Heimdall",
    category: "KYC / Compliance",
    description:
      "Plataforma de KYC para análise de identidade, validação cadastral, compliance e tomada de decisão em ambientes financeiros.",
    image: `${basePath}/images/heimdall/heimdall-preview1.png`,
    hoverImage: `${basePath}/images/heimdall/heimdall-previwe2.png`,
    href: "/portfolio/heimdall",
  },
  {
    title: "ParkingPix",
    category: "PIX para estacionamento",
    description:
      "Solução de pagamento PIX para tickets de estacionamento, conectando jornada física e digital com validação rápida e redução de fricção.",
    image: `${basePath}/images/parkingpix/parkingpix-preview2.png`,
    hoverImage: `${basePath}/images/parkingpix/parkingpix-previwe2.png`,
    href: "/portfolio/parkingpix",
  },
];
