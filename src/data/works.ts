export type Work = {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
};

export const works: Work[] = [
  {
    title: "Vanir",
    category: "Gateway de pagamento",
    description:
      "Gateway de pagamento para operações PIX com foco em performance, estabilidade, monitoramento operacional e experiência para merchants.",
    image: "/images/vanir-preview1.png",
    href: "/portfolio/vanir",
  },
  {
    title: "Heimdall",
    category: "KYC / Compliance",
    description:
      "Plataforma de KYC para análise de identidade, validação cadastral, compliance e tomada de decisão em ambientes financeiros.",
    image: "/images/heimdall-preview1.png",
    href: "/portfolio/heimdall",
  },
  {
    title: "ParkingPix",
    category: "PIX para estacionamento",
    description:
      "Solução de pagamento PIX para tickets de estacionamento, conectando jornada física e digital com validação rápida e redução de fricção.",
    image: "/images/parkingpix-preview2.png",
    href: "/portfolio/parkingpix",
  },
];