import { basePath } from "@/lib/base-path";

export type CaseMetric = {
  value: string;
  label: string;
};

export type CaseCard = {
  title: string;
  description: string;
};

export type CaseImage = {
  src: string;
  alt: string;
};

export type CaseSolutionBlock = {
  title: string;
  description: string;
  image?: CaseImage;
};

export type CaseData = {
  slug: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  role: string;
  scope: string;
  focus: string;
  coverImage?: CaseImage;
  heroImage?: CaseImage;
  overview: {
    label: string;
    value: string;
  }[];
  context: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  problem: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    cards?: CaseCard[];
  };
  roleDetails: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    items?: CaseCard[];
  };
  metrics?: CaseMetric[];
  experience?: {
    eyebrow: string;
    title: string;
    description?: string;
    steps: CaseCard[];
  };
  decisions?: {
    eyebrow: string;
    title: string;
    description?: string;
    cards: CaseCard[];
  };
  solution?: {
    eyebrow: string;
    title: string;
    description?: string;
    blocks: CaseSolutionBlock[];
  };
  impact?: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    learnings?: CaseCard[];
  };
  nextProject?: string;
};

export const cases: CaseData[] = [
  {
    slug: "vanir",
    title: "Vanir",
    category: "Gateway PIX white label",
    subtitle: "Operações PIX mais claras, rastreáveis e escaláveis.",
    description:
      "Desenhei a experiência operacional do Vanir, um gateway PIX white label criado para monitorar transações, saldos, liquidações e merchants em operações financeiras de alto volume.",
    role: "Product Designer",
    scope:
      "Arquitetura da informação, dashboards operacionais, Payin, Payout, settlement, filtros, transações e experiência white label.",
    focus: "Dashboard, Payin, Payout e rastreabilidade",
    coverImage: {
      src: `${basePath}/images/vanir/vanir-preview.png`,
      alt: "Preview do case Vanir",
    },
    heroImage: {
      src: `${basePath}/images/cases/vanir/dashboard-hero.png`,
      alt: "Dashboard operacional do Vanir",
    },
    overview: [
      {
        label: "Projeto",
        value: "Vanir",
      },
      {
        label: "Modelo",
        value: "Gateway PIX white label",
      },
      {
        label: "Papel",
        value: "Product Designer",
      },
      {
        label: "Foco",
        value: "Dashboard, Payin, Payout e rastreabilidade",
      },
    ],
    context: {
      eyebrow: "Contexto",
      title: "Um gateway PIX para operações de alto volume.",
      paragraphs: [
        "O Vanir nasceu para dar mais transparência a operações PIX de alto volume. Além da API, o produto precisava oferecer uma camada visual para acompanhar saldo, entradas, saídas, liquidações, merchants e status em tempo quase real.",
        "No modelo white label, a plataforma mantém a estrutura operacional e pode ser adaptada visualmente para diferentes clientes, preservando a consistência da experiência.",
      ],
    },
    problem: {
      eyebrow: "O desafio",
      title: "Reduzir dependência técnica e acelerar a investigação.",
      paragraphs: [
        "Clientes e times internos ainda dependiam de suporte ou análise técnica para entender falhas, localizar transações e acompanhar movimentações críticas.",
      ],
      cards: [
        {
          title: "Encontrar transações",
          description:
            "Localizar rapidamente uma operação por merchant, status, período ou identificador.",
        },
        {
          title: "Entender falhas",
          description:
            "Dar clareza sobre o motivo de erro sem exigir leitura técnica ou apoio de desenvolvimento.",
        },
        {
          title: "Acompanhar volume",
          description:
            "Permitir análise financeira de janelas curtas até períodos históricos mais amplos.",
        },
      ],
    },
    roleDetails: {
      eyebrow: "Meu papel",
      title: "Da estrutura técnica à experiência operacional.",
      paragraphs: [
        "Atuei do desenho dos fluxos à interface final, estruturando dashboards, filtros, áreas de Payin/Payout, detalhe de transações e a experiência white label.",
      ],
      items: [
        {
          title: "Arquitetura da informação",
          description:
            "Organização da navegação, hierarquia de dados e leitura progressiva da operação.",
        },
        {
          title: "Dashboards operacionais",
          description:
            "Estruturação de indicadores para leitura rápida de saldo, volume e status.",
        },
        {
          title: "Fluxos de Payin e Payout",
          description:
            "Desenho de jornadas para consulta e acompanhamento de entradas e saídas.",
        },
        {
          title: "Filtros personalizados",
          description:
            "Priorização de filtros por merchant, período, status e identificadores.",
        },
        {
          title: "Detalhamento de transações",
          description:
            "Organização das informações críticas para investigação em poucos cliques.",
        },
        {
          title: "Experiência white label",
          description:
            "Base visual adaptável sem comprometer a consistência operacional.",
        },
      ],
    },
    metrics: [
      {
        value: "+50",
        label: "merchants preparados para operação",
      },
      {
        value: "Milhões/dia",
        label: "em movimentação transacional",
      },
      {
        value: "30min-6m",
        label: "de janela para análise financeira",
      },
      {
        value: "Tempo quase real",
        label: "para acompanhamento de transações",
      },
    ],
    experience: {
      eyebrow: "Experiência",
      title: "Como organizei a jornada de investigação.",
      description:
        "A interface foi pensada para partir da visão macro da operação e avançar para a análise pontual de cada transação.",
      steps: [
        {
          title: "Visão macro primeiro",
          description:
            "O usuário começa entendendo saldo, entradas, saídas e liquidações antes de investigar uma transação específica.",
        },
        {
          title: "Investigação por filtros",
          description:
            "Merchant, status, período e identificadores ajudam a localizar transações com menos esforço operacional.",
        },
        {
          title: "Detalhe em um clique",
          description:
            "Cada transação precisava responder rapidamente o que aconteceu, quando aconteceu e qual foi o motivo do erro.",
        },
        {
          title: "Relatórios para rotina",
          description:
            "Payin, Payout e settlement foram estruturados para apoiar conferência diária e análise financeira.",
        },
      ],
    },
    decisions: {
      eyebrow: "Decisões de design",
      title: "Escolhas orientadas por operação, suporte e tomada de decisão.",
      cards: [
        {
          title: "Métricas antes das tabelas",
          description:
            "Antes de investigar detalhes, o usuário precisava entender se o comportamento era pontual ou sistêmico. Por isso, os indicadores financeiros aparecem como primeira camada de leitura.",
        },
        {
          title: "Busca como parte central do produto",
          description:
            "Em operações de alto volume, encontrar uma transação rapidamente é tão importante quanto visualizar o dashboard. Os filtros foram tratados como parte essencial da experiência.",
        },
        {
          title: "Status com leitura operacional",
          description:
            "A interface precisava deixar claro quando uma transação estava paga, pendente, expirada ou com erro, reduzindo a dependência de suporte técnico.",
        },
        {
          title: "White label sem perder consistência",
          description:
            "A base visual foi pensada para receber variações de marca sem comprometer a estrutura operacional, a navegação e a leitura dos dados.",
        },
      ],
    },
    solution: {
      eyebrow: "Solução",
      title: "Mockups grandes para mostrar a experiência em contexto.",
      description:
        "A apresentação das telas foi pensada como uma vitrine do produto: primeiro a visão operacional, depois a investigação específica de transações.",
      blocks: [
        {
          title: "Dashboard operacional",
          description:
            "A visão principal reúne saldo, Payin, Payout, settlement, volume e merchants para dar clareza sobre o estado da operação.",
          image: {
            src: `${basePath}/images/cases/vanir/dashboard-full.png`,
            alt: "Dashboard operacional do Vanir",
          },
        },
        {
          title: "Consulta de Payin",
          description:
            "A listagem de Payin apoia a investigação de transações com filtros, status, valores, horários e identificadores em uma única experiência.",
          image: {
            src: `${basePath}/images/cases/vanir/payin-list.png`,
            alt: "Tela de consulta de Payin do Vanir",
          },
        },
      ],
    },
    impact: {
      eyebrow: "Impacto e aprendizados",
      title: "Mais autonomia para operar, investigar e decidir.",
      paragraphs: [
        "A evolução da interface aumentou a autonomia de clientes e times internos para acompanhar operações, encontrar transações e entender falhas sem depender constantemente de suporte ou análise técnica.",
        "O projeto reforçou a importância de desenhar produtos financeiros com foco em clareza, rastreabilidade e tomada de decisão. Em operações críticas, uma boa interface precisa reduzir ruído e orientar investigação.",
      ],
    },
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((caseData) => caseData.slug === slug);
}
