import { basePath } from "@/lib/base-path";

export type Work = {
  title: string;
  category: string;
  description: string;
  image: string;
  hoverImage: string;
  href: string;
};

export const works: Work[] = [
  {
    title: "Vanir",
    category: "Gateway de pagamento",
    description:
      "Gateway de pagamento para operações PIX com foco em performance, estabilidade, monitoramento operacional e experiência para merchants.",
    image: `${basePath}/images/vanir/vanir-preview.png`,
    hoverImage: `${basePath}/images/vanir/vanir-previwe2.png`,
    href: "/portfolio/vanir",
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
