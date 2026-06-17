import type { Translation } from "@/data/translations/pt";

export const en: Translation = {
  language: {
    ariaLabel: "Select language",
    options: {
      pt: "Portuguese",
      en: "English",
      es: "Spanish",
    },
  },
  nav: {
    ariaLabel: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    links: {
      home: "Home",
      projects: "Projects",
      portfolio: "Portfolio",
      about: "About",
      frontend: "Front-end",
      contact: "Contact",
    },
  },
  hero: {
    productLabel: "Product",
    interfaceLabel: "Interface",
    designerTitle: "designer",
    coderTitle: "<coder>",
    designerText:
      "Mid-level Product Designer experienced in B2B products, fintechs, KYC, operational dashboards, internal systems, and critical flows.",
    coderText:
      "I build responsive interfaces focused on clarity, structure, and implementation.",
    portfolioCta: "View portfolio",
    frontendCta: "View front-end",
  },
  featuredWork: {
    eyebrow: "Featured work",
  },
  works: {
    defaultCta: "View project",
    items: {
      vanir: {
        title: "Vanir",
        category: "PAYMENT GATEWAY",
        description:
          "I turned a high-volume Pix operation into a more traceable experience, with dashboards, filters, and clear statuses for support, operations, product, and technology.",
        ctaLabel: "View full case",
      },
      heimdall: {
        title: "Heimdall",
        category: "KYC / Compliance",
        description:
          "A KYC product for CPF/CNPJ validation, registration analysis, risk signals, and operational decision support in digital identity.",
      },
      parkingpix: {
        title: "ParkingPix",
        category: "PIX for parking",
        description:
          "A PIX payment solution for parking tickets, connecting physical and digital journeys with fast validation and lower friction.",
      },
    },
  },
  footer: {
    copyright: "© 2026 Diego Suque",
    backToTop: "Back to top",
    ariaLabel: "Footer links",
  },
  pages: {
    portfolio: {
      eyebrow: "Portfolio",
      title: "Projects",
      description:
        "A selection of digital products, interfaces, and experiences created for financial, operational, and digital contexts.",
      otherProjectsTitle: "Other projects",
      reservedText:
        "Reserved base for content, images, and project excerpts.",
      inProgress: "In progress",
    },
    about: {
      eyebrow: "Diego Suque",
      title: "About",
      description:
        "I am Diego Suque, a Product Designer with experience in UX/UI, design systems, research, prototyping, financial products, and front-end implementation. I create interfaces for complex digital products, connecting business rules, user experience, and visual execution.",
      blocks: [
        {
          title: "Practice",
          text: "Structuring journeys, flows, interfaces, and visual systems for complex digital products.",
        },
        {
          title: "Experience",
          text: "A base for detailing career paths, product types, responsibilities, and relevant learnings.",
        },
        {
          title: "Tools",
          text: "Space to organize design, documentation, prototyping, research, and implementation tools.",
        },
        {
          title: "Design + Front-end",
          text: "Connection between product decisions, visual quality, componentization, and technical feasibility.",
        },
      ],
    },
    contact: {
      eyebrow: "Conversation",
      title: "Contact",
      description:
        "Get in touch for opportunities, projects, collaborations, or conversations about product, design, and technology.",
    },
    frontend: {
      steps: [
        {
          title: "Product Design with technical grounding",
          text: "My focus is not just drawing beautiful screens. I design experiences considering context, business rules, clarity, and execution. Technical grounding helps me make decisions closer to product and team reality.",
          support:
            "A Product Designer who understands what happens after Figma.",
          stack: ["Product Design", "UX/UI", "Design System"],
          cta: "",
        },
        {
          title: "From problem to interface",
          text: "Before opening the layout, I try to understand who uses it, what pain needs to be solved, which decisions the interface should make easier, and how to turn complexity into a simpler experience.",
          support:
            "The screen is a consequence of strategy, not the starting point.",
          stack: ["Figma", "FigJam", "Prototyping"],
          cta: "",
        },
        {
          title: "Design that speaks with code",
          text: "I work with components, states, responsiveness, accessibility, and handoff in mind. Understanding React, Next.js, TypeScript, Tailwind, and shadcn/ui helps me create more consistent and feasible interfaces.",
          support:
            "It is not about selling code. It is about designing better for real products.",
          stack: ["React", "Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
          cta: "",
        },
        {
          title: "AI as a process accelerator",
          text: "I use AI to explore directions, organize ideas, test variations, structure flows, support prototypes, and speed up the path between intent, interface, and delivery. Design judgment remains the filter.",
          support: "Speed only matters when it improves the decision.",
          stack: ["AI", "Prompting", "Prototyping", "Fast iteration"],
          cta: "",
        },
        {
          title: "From Figma to deploy, when needed",
          text: "My difference is crossing the distance between design, product, and delivery more effectively. I can design the experience, prototype, validate paths, and, when needed, put a navigable interface live.",
          support:
            "Product Design with the range to move ideas beyond static artifacts.",
          stack: ["Git", "GitHub", "Vercel", "Deploy"],
          cta: "View projects",
        },
      ],
      canvasLabel: "Guide avatar for the front-end experience",
    },
  },
  cases: {
    common: {
      overview: "Overview",
      productContext: "Product context",
      operationalContext: "Operational context",
      mainPainPoints: "Main pain points",
      myRole: "My role",
      designChallenge: "Design challenge",
      designDecisions: "Design decisions",
      impact: "Impact",
      learnings: "Learnings",
      confidentiality: "Confidentiality",
      backToProjects: "Back to projects",
      learningLabel: "Learning",
    },
    vanir: {
      hero: {
        title: "Vanir: traceability for high-volume financial operations.",
        description:
          "A B2B financial product for Pix and high transaction volume. I worked on discovery, operational journey mapping, prototyping, and validation to turn statuses, logs, and error reasons into a clearer, traceable, and reliable experience.",
      },
      overview: [
        "Vanir is a B2B payment gateway for processing Pix, tracking transactions, and giving visibility to high-volume financial operations.",
        "The product is used by support, operations, product, technology, and clients who need to understand what happened in each transaction without always depending on technical reading.",
        "Before the solution, I investigated the operational flow, spoke with internal teams, and mapped recurring questions to identify where analysis was getting stuck.",
      ],
      productContext: [
        "The product connected API-integrated clients, white-label operations, merchants, and internal teams responsible for support, finance, product, and technology.",
        "It needed to serve technical and non-technical profiles in the same experience, while keeping consistency across permissions, brands, and operating models.",
        "In practice, the dashboard became an operational decision layer: it helped monitor Pix, locate failures, and reduce dependency on technical teams for recurring questions.",
      ],
      role: {
        paragraphs: [
          "I led discovery with support, operations, product, and technology stakeholders to understand how teams investigated transactions and where questions, errors, or rework appeared.",
          "Based on conversations and task analysis, I mapped the operational journey, identified pain points, and organized the information architecture to bring indicators, filters, statuses, and transaction details closer together.",
          "I designed user flows, wireframes, navigable prototypes, and interfaces for dashboards, tables, and error states. Then I supported engineering handoff, internal user validation, and iteration based on feedback.",
        ],
        note: "More than designing screens, my work was to turn a complex financial operation into a traceable, actionable, and scalable experience.",
      },
      macroDetail: {
        title: "From macro view to operational detail",
        paragraphs: [
          "The design logic moved from macro indicators to detailed investigation. Users could go from volume, balance, and overall status to filters, logs, error reasons, and the detail of a specific transaction.",
        ],
      },
      operationalContext: {
        paragraphs: [
          "The operation handled high Pix volume, balances, failures, multiple merchants, and information that needed to be read quickly.",
          "When the interface did not explain context, a simple question became rework: locating a transaction, understanding its status, or discovering why a failure happened.",
        ],
        note: "The experience needed to organize these layers without hiding the real complexity of the operation.",
        cards: [
          {
            title: "Transaction volume",
            description:
              "Inflows, outflows, statuses, and financial events needed to be read at scale.",
          },
          {
            title: "Teams on one base",
            description:
              "Support, finance, product, and clients needed to consult the same information.",
          },
          {
            title: "Slow investigation",
            description:
              "Failures required moving from summary to detail without losing context.",
          },
          {
            title: "Operational scale",
            description:
              "The experience needed to work across different brands, permissions, and contexts.",
          },
        ],
      },
      painPoints: {
        title: "Main pain points",
        paragraphs: [
          "The pain points came from conversations with internal teams, analysis of the operational flow, and recurring questions raised by support and operations.",
          "The issue was not only volume. It was the difficulty of finding a transaction, interpreting generic statuses, understanding error reasons, and answering clients without involving technology.",
          "That dependency created rework, increased investigation time, and made failure or anomaly signals less visible to the people who needed to act quickly.",
        ],
        note: "These pains guided the dashboard structure: traceability, filters, status reading, and quick access to each transaction detail.",
        cards: [
          {
            title: "Technical dependency",
            description:
              "Simple issues still depended on logs, technical reading, or developer support.",
          },
          {
            title: "Fragmented data",
            description:
              "Transactions, identifiers, statuses, and error reasons were hard to locate quickly.",
          },
          {
            title: "Low-actionability status",
            description:
              "Generic statuses did not explain stage, likely error reason, or next action.",
          },
          {
            title: "Low autonomy",
            description:
              "Support had limited autonomy to answer clients without involving technology.",
          },
        ],
      },
      challenge: {
        paragraphs: [
          "The central challenge was turning a complex financial flow into a clear, traceable, and reliable operational experience.",
          "The interface needed to handle high volume, operational risk, multiple statuses, and the need for fast responses. At the same time, support and operations needed to investigate without depending on technology for every simple question.",
        ],
        note: "Design's role was to bring technical data closer to operational decisions, creating clear paths to investigate, interpret, and act.",
      },
      solution: {
        title: "The solution",
        paragraphs: [
          "The solution connected the main pains to an operational layer: dashboard for macro view, filters to narrow the analysis, and table to monitor transactions in real time.",
          "In the transaction detail, status, stage, identifiers, and error reasons were organized to support diagnosis and client response.",
          "With feedback from support, operations, and technology, we refined the experience to reduce investigation steps, increase operational autonomy, and lower recurring questions.",
        ],
        note: "The idea was simple: move from a macro view of the operation to a transaction detail in a few clicks.",
      },
      realtime: {
        title: "Real-time operation",
        paragraphs: [
          "The experience combined executive view and operational reading in the same interface.",
          "Users could follow balance, inflow, outflow, and settlement while viewing real-time transactions with clear statuses and constant updates.",
          "This structure helped support, finance, and operations work from the same source of information, speeding up investigations and reducing noise between areas.",
        ],
      },
      searchFilters: {
        title: "Search, filters, and traceability",
        paragraphs: [
          "In a payment gateway, search and filters are not just convenience features. They work as investigation tools to locate transactions, cross criteria, and understand what happened in each flow.",
          "In high-volume operations, users need to combine merchant, status, period, operation type, and identifiers to reach the right data with confidence. The filter structure was designed to narrow the analysis universe and quickly lead to the transaction detail.",
        ],
        note: "The goal was to give users autonomy to investigate transactions without immediately depending on technical reading or support.",
      },
      statusErrors: {
        title: "Status and error clarity",
        paragraphs: [
          "In financial products, showing that a transaction failed is not enough. Users need to understand the status, where the failure happened, what may have caused it, and which action makes sense from there.",
          "For that reason, the interface needed to treat statuses, error messages, and transaction details as part of the operational diagnosis, not just complementary information.",
          "The experience organized important signals to reduce ambiguity: transaction status, likely error origin, relevant identifiers, and the context needed to guide support, finance, operations, or the client.",
        ],
        note: "Status clarity helped users move from a generic question to a more objective diagnosis, with less manual interpretation between areas.",
      },
      whiteLabel: {
        title: "White label",
        paragraphs: [
          "Vanir also needed to work as a white-label solution, but that did not mean only changing colors or logos. The decision involved scalability, consistency, and experience governance.",
          "The interface foundation needed to remain stable to preserve navigation patterns, data reading, and product maintenance. Customization stayed concentrated in controlled points such as brand, calls, CTAs, and navigation.",
          "This approach made it possible to serve different brands without fragmenting the experience or turning each client into an isolated variation that would be hard to evolve.",
        ],
        note: "The challenge was balancing brand identity with a single operational structure that remained consistent and sustainable for product, design, and development.",
      },
      designDecisions: {
        paragraphs: [
          "Design decisions were guided by three priorities: reducing ambiguity, accelerating investigation, and giving internal users and clients more autonomy.",
        ],
        cards: [
          {
            title: "Indicators at the top",
            description:
              "Before investigating a specific transaction, users needed to quickly understand the state of the operation: volume, status, movement, and attention signals.",
          },
          {
            title: "Filters as investigation",
            description:
              "At high volume, finding a transaction requires crossing period, status, operation, merchant, and identifiers. Search needed to work as diagnosis, not only as lookup.",
          },
          {
            title: "Transactional detail",
            description:
              "The table helped users find records, but the detail explained context, status, key information, and possible error reasons.",
          },
          {
            title: "Neutral base for white label",
            description:
              "The interface needed to serve different brands without fragmenting the experience, preserving usability, maintenance, and visual coherence.",
          },
        ],
      },
      impactIntro: [
        "Before the improvements, transaction analysis in Vanir depended on a highly technical routine. To understand whether a transaction was paid, pending, failed, or in another state, teams needed to check webhooks in Axiom and interpret JSON files before responding to clients.",
        "With the interface evolution, Vanir started centralizing critical information in dashboards, filters, tables, and charts, giving support, operations, sales, and clients more autonomy to monitor transactions and identify issues with more clarity.",
      ],
      learningsIntro: {
        paragraphs: [
          "Vanir reinforced that, in financial products, product design needs to organize complexity without oversimplifying operational reality.",
          "The main lesson was that clarity before aesthetics does not mean giving up visual quality. In a financial dashboard, visual clarity and functional clarity need to move together so data becomes action.",
          "The project also showed that product is built close to operations. Working close to support, sales, finance, and technology helped uncover recurring questions, real flows, and the points where the interface needed to support decisions.",
        ],
        note: "The core learning was that financial data only creates value when organized into an understandable, traceable, and actionable experience.",
      },
      confidentiality: [
        "Because this is a financial product with sensitive data, this case preserves client names, merchants, tax IDs, documents, identifiable values, private operational information, and strategic data.",
        "The screens shown in the portfolio may use mockups, simulated data, or aggregated volumes. The goal is to show the experience structure and product decisions without revealing confidential information.",
      ],
      impactCards: [
        {
          label: "Operational efficiency",
          metric: "Around 70% fewer operational questions",
          description:
            "Estimated reduction in recurring questions after improvements in traceability, statuses, filters, and error reasons.",
        },
        {
          label: "Volume reduction",
          metric: "Fewer recurring questions",
          description:
            "Centralizing critical information in dashboards, filters, and charts reduced repeated questions about transactions.",
        },
        {
          label: "Support scale",
          metric: "More autonomy for support and operations",
          description:
            "Internal teams could investigate simple questions with more context before involving technology.",
        },
        {
          label: "Technical autonomy",
          metric: "Less technical dependency",
          description:
            "Developers started being involved only when there was real evidence of an internal issue or a need for technical investigation.",
        },
        {
          label: "Client impact",
          metric: "More autonomy for clients and merchants",
          description:
            "Clients began accessing dashboards and searches with the same data related to their own transactions.",
        },
        {
          label: "Internal team impact",
          metric: "More clarity for support, operations, and sales",
          description:
            "Teams could identify whether an issue was internal, client-side, or external, such as Pix/BACEN-related failures.",
        },
      ],
      impactComparison: [
        {
          title: "Before",
          items: [
            "Manual webhook lookup in Axiom",
            "JSON interpretation to understand status",
            "Developer dependency to investigate simple cases",
            "Support with limited autonomy",
            "Operations without a quick view of volume, failures, and anomalies",
          ],
        },
        {
          title: "After",
          items: [
            "Centralized payment dashboard",
            "Filters by period and status",
            "Balance, Payin, Payout, and Settlement indicators",
            "Volume charts by period and in real time",
            "Internal teams and clients with more search autonomy",
          ],
        },
      ],
      learningCards: [
        {
          title: "Clarity before aesthetics",
          description:
            "In financial dashboards, visual clarity and functional clarity move together.",
        },
        {
          title: "Data needs to become action",
          description:
            "Each piece of information must support investigation, reading, or decision-making.",
        },
        {
          title: "Product close to operations",
          description:
            "Real pains appear close to the people who use and sustain the product.",
        },
        {
          title: "Complexity needs organization",
          description: "Reduce effort without hiding depth.",
        },
      ],
    },
    heimdall: {
      hero: {
        title:
          "Heimdall: KYC intelligence for validation and operational risk",
        description:
          "A KYC and operational validation product for querying, analyzing, and interpreting registration data, supporting decisions with more clarity, safety, and traceability.",
      },
      overview: [
        "Heimdall is a KYC, digital identity, and registration analysis solution for operations that need to validate CPF/CNPJ data, investigate relationships, presumed income, PEP, history, and risk signals.",
        "The platform centralizes information from different sources in a single interface, reducing the need to switch between systems, spreadsheets, and manual queries. As a result, analysts can read complex data, identify alerts, and build a more complete view for operational decisions.",
      ],
      productContext: [
        "In financial and regulated operations, validating an individual or company ID is not just about confirming basic data. It requires understanding history, relationships, political exposure, business connections, fraud signals, and possible inconsistencies.",
        "Before a centralized experience, this process tends to be fragmented. Heimdall was designed to organize that complexity into a more fluid journey, allowing the analyst to move from a simple query to a deeper investigation without losing context.",
      ],
      macroDetail: {
        title: "Macro view and detail",
        paragraphs: [
          "The experience was designed to work at two levels: a macro view for fast risk reading and a detailed view for deeper investigation.",
          "On first contact, the analyst needs to quickly understand whether a registration shows attention signals. Then they need access to consolidated data, relationships, history, queried sources, and evidence that supports the decision.",
        ],
      },
      operationalContext: [
        "Heimdall supports a routine where speed and precision need to move together. Analysts deal with multiple queries, different risk levels, and decisions that need to be justifiable.",
        "In this scenario, the interface could not only display data. It needed to organize the investigation, indicate priority, reduce doubts, and support auditable decisions for analysts, managers, and compliance areas.",
      ],
      painPointsIntro: [
        "The main pain points were tied to analysis fragmentation and the difficulty of turning raw data into decisions. Analysts had to consult multiple sources to build a complete profile, increasing investigation time and omission risk.",
        "Important signals such as business relationships, family links, political exposure, address history, and registration inconsistencies were scattered, making a quick risk reading harder.",
      ],
      challenge: {
        paragraphs: [
          "The main challenge was turning a mass of registration, relational, and operational data into an understandable experience for people who need to make quick decisions.",
          "The interface needed to deliver depth without overwhelming the user, organizing sensitive information in a clear, hierarchical, and actionable way for compliance, fraud, and risk.",
        ],
        note: "The challenge was not only to show more data, but to help the analyst understand what required attention, which relationships could indicate risk, and which evidence supported the decision.",
      },
      role: [
        "I worked on structuring Heimdall's experience and interface, organizing the registration analysis journey from the initial query to the reading of consolidated data and risk signals.",
        "The work involved turning technical and sensitive information into clearer screens, with visual hierarchy, content organization, and flows designed to reduce operational effort for analysts, managers, and compliance.",
      ],
      validation: {
        title: "Search and validation",
        paragraphs: [
          "Registration search was designed as the entry point for the analysis. The goal was to allow analysts to find people or companies quickly using CPF or CNPJ, without switching between different tools.",
          "From the search, the system guides the user to a consolidated view, bringing together registration data, contacts, addresses, relationships, and information relevant to validation.",
        ],
      },
      riskSignals: {
        title: "Risk signals",
        paragraphs: [
          "In addition to presenting registration data, Heimdall needed to highlight signals that require attention during analysis.",
          "Information such as political exposure, business relationships, indirect links, data history, and inconsistencies helps the analyst better interpret the context of each person or company without turning the interface into an overly technical panel.",
        ],
      },
      designDecisions: {
        paragraphs: [
          "The main design decisions were guided by three goals: clarity, traceability, and analysis speed.",
        ],
        cards: [
          {
            title: "Progressive reading",
            description:
              "The interface presents the essentials first and allows users to go deeper into data, relationships, and evidence as the investigation requires.",
          },
          {
            title: "Sober language",
            description:
              "The product needed to convey trust and criteria because it deals with sensitive data, compliance, and decision-making in regulated environments.",
          },
          {
            title: "Risk with evidence",
            description:
              "Registration data, relationships, and history were organized to help the analyst understand what supports each approval, rejection, or additional investigation.",
          },
        ],
      },
      impactIntro: {
        paragraphs: [
          "The expected impact for Heimdall is tied to reducing dispersion in registration analysis. By bringing data, relationships, history, and risk signals into the same journey, the platform supports a clearer and more traceable KYC routine.",
          "The experience aims to give analysts, managers, and compliance, fraud, and risk teams more autonomy, reducing ambiguity and helping users turn registration data into safer decisions.",
        ],
        note: "The proposal is not to claim a numerical result, but to demonstrate a more traceable, actionable, and consistent product direction for validation, investigation, and operational risk.",
      },
      learningsIntro: [
        "KYC products require an interface that organizes complexity responsibly. Sensitive data needs to be readable, while preserving context, criteria, and operational safety.",
        "The main learning is that a good registration analysis experience does not only show information: it helps users interpret signals, recover context, and justify decisions in regulated scenarios.",
      ],
      confidentiality: [
        "Because this is a KYC and risk analysis solution, this case preserves CPFs, names, documents, clients, queries, internal criteria, and sensitive operational data.",
        "The screens shown may use mockups, simulated data, or placeholders. The goal is to demonstrate experience structure, information hierarchy, and product decisions without revealing confidential information.",
      ],
      painCards: [
        {
          title: "Fragmented search",
          description:
            "Analysts had to switch between sources, spreadsheets, and manual queries to build a complete view.",
        },
        {
          title: "Scattered sensitive data",
          description:
            "Relationships, history, political exposure, and inconsistencies were spread across poorly connected readings.",
        },
        {
          title: "Low traceability",
          description:
            "Queries and evidence needed to be recovered with more context to justify decisions in regulated scenarios.",
        },
        {
          title: "Low-actionability decisions",
          description:
            "Raw data required manual interpretation before becoming an approval, rejection, or additional investigation.",
        },
      ],
      impactCards: [
        {
          metric: "Centralized analysis",
          description:
            "Registration data, relationships, history, and risk signals brought together in the same investigation journey.",
        },
        {
          metric: "More speed",
          description:
            "Analysts can move from a simple search to a deeper reading without losing context.",
        },
        {
          metric: "More traceability",
          description:
            "Queries, sources, and evidence are better organized to support justifiable decisions.",
        },
        {
          metric: "Risk support",
          description:
            "The experience helps compliance, fraud, and risk teams identify inconsistencies and relevant relationships.",
        },
      ],
      learningCards: [
        {
          title: "A signal is not a decision",
          description:
            "The interface must separate evidence, context, and action to avoid premature conclusions.",
        },
        {
          title: "Risk needs context",
          description:
            "Registration validation becomes more useful when the user understands origin, history, relationships, and recurrence.",
        },
        {
          title: "Clarity protects the decision",
          description:
            "KYC products need to make sensitive data understandable without oversimplifying risk.",
        },
        {
          title: "Investigation must be traceable",
          description:
            "Each query must help the team reconstruct the analysis path with operational safety.",
        },
      ],
    },
    parkingpix: {
      hero: {
        title: "ParkingPix: mobile PIX payment for parking lots.",
        description:
          "A QR Code payment experience created to reduce lines, clarify the charged amount, and let users finish the parking journey on their phone without depending on a card machine, booth, or in-person service.",
      },
      overview: [
        "ParkingPix proposes a simple mobile journey for parking lots: the user scans the ticket QR Code, views the parking time, understands the final amount, and chooses to pay via PIX.",
        "The experience was designed to reduce friction in a sensitive part of the journey: the moment when the customer needs to pay and leave quickly, especially at peak times.",
      ],
      productContext: [
        "In shopping mall parking lots, payment is a high-impact point in the perception of the experience. Lines, billing questions, failures in traditional payment methods, and service dependency turn a simple step into frustration.",
        "The problem is not only payment itself, but the lack of clarity and traceability: the user needs to understand how much to pay, confirm that the transaction was recognized, and leave without manually proving that they paid.",
      ],
      mobileFlow: {
        title: "Mobile flow",
        paragraphs: [
          "The journey was structured to be direct: scan the QR Code, check the summary, choose PIX, copy or scan the payment code, and wait for confirmation.",
          "Each step needed to reduce anxiety and make clear what was happening, avoiding abandonment, doubts, or unnecessary support contact.",
        ],
      },
      operationalContext: [
        "In parking lots, validation happens at the contact point between service, line, receipt, and exit clearance. The interface needs to support a quick decision without requiring extensive reading.",
        "ParkingPix organizes essential information so operators and clients understand whether payment was started, confirmed, pending, or needs a new check.",
      ],
      painPointsIntro: [
        "The operation needed to reduce dependency on manually submitted receipts and make confirmation more objective for both the person serving and the person paying.",
        "The flow also needed to preserve minimal ticket, amount, and time context to avoid recurring questions during clearance.",
      ],
      challenge: {
        paragraphs: [
          "The challenge was to design a simple experience for a rushed moment. The user does not want to learn a new system: they want to understand the amount, pay with confidence, and leave.",
          "That is why the interface needed to prioritize clarity, status feedback, and objective language, showing what to do at each step and avoiding doubts about payment, confirmation, and completion.",
        ],
        note: "The priority was to create a status reading that worked at the pace of in-person operations, with clear confirmation and low cognitive load.",
      },
      role: [
        "I worked on structuring the mobile experience, organizing the payment flow, the information hierarchy, and the main journey states.",
        "The work involved thinking through a clear experience for amount reading, payment method choice, PIX confirmation, and final feedback for the user, while keeping the focus on reducing operational friction.",
      ],
      paymentValidation: {
        title: "Payment validation",
        paragraphs: [
          "The PIX payment step needed to make clear that the user could scan the QR Code or copy the code, while also showing the waiting state as the transaction was confirmed.",
          "Messages such as waiting for confirmation and do not close this window help reduce anxiety and prevent the user from interrupting the flow before completion.",
        ],
      },
      confirmationStatus: {
        title: "Confirmation and status",
        paragraphs: [
          "After approval, the interface confirms the transaction and guides the user on closing the session.",
          "The goal is to close the flow safely, reinforcing that the payment was recognized and that the vehicle can now be picked up.",
        ],
      },
      designDecisions: {
        paragraphs: [
          "The decisions were guided by simplicity, reading speed, and operational trust.",
        ],
        cards: [
          {
            title: "Amount visible before action",
            description:
              "The user needs to understand parking time and final amount before choosing how to pay.",
          },
          {
            title: "Constant status feedback",
            description:
              "The interface shows when payment is in progress, when action is needed, and when it has been confirmed.",
          },
          {
            title: "PIX as a familiar method",
            description:
              "Choosing PIX reduces learning effort and connects the flow to a payment method already known by users.",
          },
          {
            title: "Direct language to reduce anxiety",
            description:
              "Short messages guide the next step and avoid doubts while waiting for confirmation.",
          },
          {
            title: "Clear final confirmation",
            description:
              "The flow closure needs to reduce anxiety and make clear that the user can now pick up the vehicle.",
          },
        ],
      },
      impactIntro: {
        paragraphs: [
          "The expected impact of ParkingPix is in reducing recurring friction related to payment: billing questions, unrecognized payment, lines, and dependency on manual service.",
          "In high-flow operations, reducing seconds per vehicle and giving users more autonomy can directly impact exit flow, ticket volume, and brand efficiency perception.",
        ],
        note: "The proposal is to demonstrate a clearer, more traceable, and simpler projected product impact for payment validation in an in-person context.",
      },
      learningsIntro: [
        "ParkingPix reinforces that simple solutions can have a major impact when they address the right point in the journey.",
        "In operational products, the experience does not need to be complex to create value. It needs to reduce doubt, make the next step clear, and give users confidence to complete the action without depending on support.",
      ],
      confidentiality: [
        "Because this is a payment and in-person operations solution, this case preserves data, license plates, amounts, clients, tickets, receipts, and operational information.",
        "The screens shown may use mockups, simulated data, or placeholders. The goal is to demonstrate experience structure and product decisions without revealing confidential information.",
      ],
      painCards: [
        {
          title: "Payment not recognized",
          description:
            "When the client pays but operations cannot clearly identify the transaction, friction appears at exit.",
        },
        {
          title: "Billing questions",
          description:
            "Divergence between time, charged amount, and receipt increases insecurity and complaints.",
        },
        {
          title: "Service dependency",
          description:
            "Simple issues start depending on a booth, support, or manual validation.",
        },
        {
          title: "Lines and frustration",
          description:
            "At peak times, small delays multiply and affect brand perception.",
        },
      ],
      impactCards: [
        {
          metric: "Less exit friction",
          description:
            "Phone payment reduces dependency on booths, card machines, and in-person service.",
        },
        {
          metric: "More clarity for the user",
          description:
            "Amount, parking time, and payment method are visible before confirmation.",
        },
        {
          metric: "Fewer simple tickets",
          description:
            "Status confirmation reduces the need to manually prove payment.",
        },
        {
          metric: "More operational flow",
          description:
            "Fewer lines and fewer in-person interactions help improve flow at peak times.",
        },
      ],
      learningCards: [
        {
          title: "Status needs to be immediate",
          description:
            "In in-person operations, the interface must respond quickly and with little room for interpretation.",
        },
        {
          title: "Mobile should reduce friction",
          description:
            "Each screen must support a clear action without turning simple validation into a complex process.",
        },
        {
          title: "Trust comes from context",
          description:
            "Amount, ticket, time, and status need to appear together to support the operator's decision.",
        },
        {
          title: "Operations set the pace",
          description:
            "The design must consider lines, urgency, physical environment, and switching between client and operator.",
        },
      ],
    },
  },
};
