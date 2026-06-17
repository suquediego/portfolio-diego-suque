import type { Translation } from "@/data/translations/pt";

export const es: Translation = {
  language: {
    ariaLabel: "Seleccionar idioma",
    options: {
      pt: "Portugués",
      en: "Inglés",
      es: "Español",
    },
  },
  nav: {
    ariaLabel: "Navegación principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    links: {
      home: "Inicio",
      projects: "Proyectos",
      portfolio: "Portafolio",
      about: "Sobre mí",
      frontend: "Front-end",
      contact: "Contacto",
    },
  },
  hero: {
    productLabel: "Product",
    interfaceLabel: "Interface",
    designerTitle: "designer",
    coderTitle: "<coder>",
    designerText:
      "Product Designer Pleno con experiencia en productos B2B, fintechs, KYC, dashboards operativos, sistemas internos y flujos críticos.",
    coderText:
      "Construyo interfaces responsivas con foco en claridad, estructura e implementación.",
    portfolioCta: "Ver portafolio",
    frontendCta: "Ver front-end",
  },
  featuredWork: {
    eyebrow: "Proyectos destacados",
  },
  works: {
    defaultCta: "Ver proyecto",
    items: {
      vanir: {
        title: "Vanir",
        category: "GATEWAY DE PAGO",
        description:
          "Transformé una operación Pix de alto volumen en una experiencia más trazable, con dashboards, filtros y status claros para soporte, operación, producto y tecnología.",
        ctaLabel: "Ver caso completo",
      },
      heimdall: {
        title: "Heimdall",
        category: "KYC / Compliance",
        description:
          "Producto de KYC para validación de CPF/CNPJ, análisis cadastral, señales de riesgo y apoyo a la decisión operativa en identidad digital.",
      },
      parkingpix: {
        title: "ParkingPix",
        category: "PIX para estacionamiento",
        description:
          "Solución de pago PIX para tickets de estacionamiento, conectando la jornada física y digital con validación rápida y menor fricción.",
      },
    },
  },
  footer: {
    copyright: "© 2026 Diego Suque",
    backToTop: "Volver arriba",
    ariaLabel: "Enlaces del pie de página",
  },
  pages: {
    portfolio: {
      eyebrow: "Portafolio",
      title: "Proyectos",
      description:
        "Una selección de productos digitales, interfaces y experiencias creadas para contextos financieros, operativos y digitales.",
      otherProjectsTitle: "Otros proyectos",
      reservedText:
        "Base reservada para contenido, imágenes y recortes del proyecto.",
      inProgress: "En estructuración",
    },
    about: {
      eyebrow: "Diego Suque",
      title: "Sobre mí",
      description:
        "Soy Diego Suque, Product Designer con experiencia en UX/UI, design systems, investigación, prototipado, productos financieros e implementación front-end. Trabajo creando interfaces para productos digitales complejos, conectando reglas de negocio, experiencia de usuario y ejecución visual.",
      blocks: [
        {
          title: "Actuación",
          text: "Estructuración de jornadas, flujos, interfaces y sistemas visuales para productos digitales complejos.",
        },
        {
          title: "Experiencia",
          text: "Base para detallar trayectorias, tipos de producto, responsabilidades y aprendizajes relevantes.",
        },
        {
          title: "Herramientas",
          text: "Espacio para organizar herramientas de diseño, documentación, prototipado, investigación e implementación.",
        },
        {
          title: "Design + Front-end",
          text: "Conexión entre decisiones de producto, calidad visual, componentización y viabilidad técnica.",
        },
      ],
    },
    contact: {
      eyebrow: "Conversación",
      title: "Contacto",
      description:
        "Ponte en contacto para oportunidades, proyectos, colaboraciones o conversaciones sobre producto, diseño y tecnología.",
    },
    frontend: {
      steps: [
        {
          title: "Product Design con base técnica",
          text: "Mi foco no es solo dibujar pantallas bonitas. Diseño experiencias considerando contexto, reglas de negocio, claridad y ejecución. Tener base técnica me ayuda a tomar decisiones más cercanas a la realidad del producto y del equipo.",
          support:
            "Product Designer que entiende lo que ocurre después de Figma.",
          stack: ["Product Design", "UX/UI", "Design System"],
          cta: "",
        },
        {
          title: "Del problema a la interfaz",
          text: "Antes de abrir el layout, busco entender quién lo usa, qué dolor necesita resolverse, qué decisiones debe facilitar la interfaz y cómo transformar complejidad en una experiencia más simple.",
          support:
            "La pantalla es consecuencia de la estrategia, no el punto de partida.",
          stack: ["Figma", "FigJam", "Prototipado"],
          cta: "",
        },
        {
          title: "Diseño que conversa con código",
          text: "Trabajo pensando en componentes, estados, responsividad, accesibilidad y handoff. Entender React, Next.js, TypeScript, Tailwind y shadcn/ui me ayuda a crear interfaces más consistentes y viables para implementación.",
          support:
            "No se trata de vender código. Se trata de diseñar mejor para productos reales.",
          stack: ["React", "Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
          cta: "",
        },
        {
          title: "IA como acelerador de proceso",
          text: "Uso IA para explorar caminos, organizar ideas, probar variaciones, estructurar flujos, apoyar prototipos y acelerar el paso entre intención, interfaz y entrega. El criterio sigue siendo de diseño.",
          support: "La velocidad solo importa cuando mejora la decisión.",
          stack: ["IA", "Prompting", "Prototipado", "Iteración rápida"],
          cta: "",
        },
        {
          title: "De Figma al deploy, si hace falta",
          text: "Mi diferencial es atravesar mejor la distancia entre diseño, producto y entrega. Puedo diseñar la experiencia, prototipar, validar caminos y, cuando sea necesario, poner una interfaz navegable en línea.",
          support:
            "Product Design con repertorio para sacar ideas de lo estático.",
          stack: ["Git", "GitHub", "Vercel", "Deploy"],
          cta: "Ver proyectos",
        },
      ],
      canvasLabel: "Avatar guía de la experiencia front-end",
    },
  },
  cases: {
    common: {
      overview: "Visión general",
      productContext: "Contexto del producto",
      operationalContext: "Contexto operativo",
      mainPainPoints: "Principales dolores",
      myRole: "Mi rol",
      designChallenge: "El desafío de diseño",
      designDecisions: "Decisiones de diseño",
      impact: "Impacto",
      learnings: "Aprendizajes",
      confidentiality: "Confidencialidad",
      backToProjects: "Volver a proyectos",
      learningLabel: "Aprendizaje",
    },
    vanir: {
      hero: {
        title:
          "Vanir: trazabilidad para operaciones financieras de alto volumen.",
        description:
          "Producto financiero B2B para Pix y alto volumen transaccional. Trabajé en discovery, mapeo de jornada operativa, prototipado y validación para transformar status, logs y motivos de error en una experiencia más clara, trazable y confiable.",
      },
      overview: [
        "Vanir es un gateway de pago B2B para procesar Pix, acompañar transacciones y dar visibilidad a operaciones financieras de alto volumen.",
        "El producto es usado por soporte, operación, producto, tecnología y clientes que necesitan entender qué ocurrió en cada transacción sin depender siempre de lectura técnica.",
        "Antes de la solución, investigué el flujo operativo, conversé con áreas internas y mapeé dudas recurrentes para identificar dónde se trababa el análisis.",
      ],
      productContext: [
        "El producto conectaba clientes integrados vía API, operaciones white label, merchants y equipos internos responsables de soporte, finanzas, producto y tecnología.",
        "Necesitaba atender perfiles técnicos y no técnicos en la misma experiencia, manteniendo consistencia entre permisos, marcas y formas de operación.",
        "En la práctica, el dashboard se convirtió en una capa de decisión operativa: ayudaba a monitorear Pix, localizar fallas y reducir dependencia de equipos técnicos en dudas recurrentes.",
      ],
      role: {
        paragraphs: [
          "Conduje discovery con stakeholders de soporte, operación, producto y tecnología para entender cómo las áreas investigaban transacciones y dónde surgían dudas, errores o retrabajo.",
          "A partir de conversaciones y análisis de tareas, mapeé la jornada operativa, levanté dolores y organicé la arquitectura de información para aproximar indicadores, filtros, status y detalle de transacción.",
          "Diseñé user flows, wireframes, prototipos navegables e interfaces para dashboards, tablas y estados de error. Después apoyé handoff para ingeniería, validación con usuarios internos e iteración a partir de feedbacks.",
        ],
        note: "Más que diseñar pantallas, mi trabajo fue transformar una operación financiera compleja en una experiencia trazable, accionable y escalable.",
      },
      macroDetail: {
        title: "De la visión macro al detalle operativo",
        paragraphs: [
          "La lógica de diseño partía de indicadores macro hacia la investigación detallada. El usuario podía salir de volumen, saldo y status general hacia filtros, logs, motivos de error y detalle de una transacción específica.",
        ],
      },
      operationalContext: {
        paragraphs: [
          "La operación lidiaba con alto volumen de Pix, saldos, fallas, múltiples merchants e información que debía leerse rápidamente.",
          "Cuando la interfaz no explicaba contexto, una duda simple se convertía en retrabajo: localizar una transacción, entender el status o descubrir por qué ocurrió una falla.",
        ],
        note: "La experiencia debía organizar estas capas sin esconder la complejidad real de la operación.",
        cards: [
          {
            title: "Volumen transaccional",
            description:
              "Entradas, salidas, status y eventos financieros necesitaban leerse en escala.",
          },
          {
            title: "Equipos en la misma base",
            description:
              "Soporte, finanzas, producto y clientes necesitaban consultar la misma información.",
          },
          {
            title: "Investigación lenta",
            description:
              "Las fallas exigían salir del resumen al detalle sin perder contexto.",
          },
          {
            title: "Escala operativa",
            description:
              "La experiencia necesitaba funcionar en distintas marcas, permisos y contextos.",
          },
        ],
      },
      painPoints: {
        title: "Principales dolores",
        paragraphs: [
          "Los dolores vinieron de conversaciones con áreas internas, análisis del flujo operativo y recurrencia de dudas abiertas por soporte y operación.",
          "El problema no era solo volumen. Era la dificultad de encontrar una transacción, interpretar status genéricos, entender motivos de error y responder clientes sin activar tecnología.",
          "Esa dependencia generaba retrabajo, aumentaba el tiempo de investigación y dejaba señales de falla o anomalía menos visibles para quien necesitaba actuar rápido.",
        ],
        note: "Estos dolores orientaron la estructura del dashboard: trazabilidad, filtros, lectura de status y acceso rápido al detalle de cada transacción.",
        cards: [
          {
            title: "Dependencia técnica",
            description:
              "Problemas simples todavía dependían de logs, lectura técnica o apoyo de desarrolladores.",
          },
          {
            title: "Datos fragmentados",
            description:
              "Transacciones, identificadores, status y motivos de error eran difíciles de localizar rápidamente.",
          },
          {
            title: "Status poco accionable",
            description:
              "Status genéricos no explicaban etapa, motivo probable del error o próxima acción.",
          },
          {
            title: "Baja autonomía",
            description:
              "Soporte tenía poca autonomía para responder clientes sin activar tecnología.",
          },
        ],
      },
      challenge: {
        paragraphs: [
          "El desafío central fue transformar un flujo financiero complejo en una experiencia operativa clara, trazable y confiable.",
          "La interfaz necesitaba lidiar con alto volumen, riesgo operativo, múltiples status y necesidad de respuesta rápida. Al mismo tiempo, soporte y operación necesitaban investigar sin depender de tecnología para cada duda simple.",
        ],
        note: "El papel del diseño fue aproximar datos técnicos de decisiones operativas, creando caminos claros para investigar, interpretar y actuar.",
      },
      solution: {
        title: "La solución",
        paragraphs: [
          "La solución conectó los principales dolores a una capa de operación: dashboard para visión macro, filtros para reducir el universo de análisis y tabla para acompañar transacciones en tiempo real.",
          "En el detalle de la transacción, status, etapa, identificadores y motivos de error quedaron organizados para apoyar diagnóstico y respuesta al cliente.",
          "Con feedback de soporte, operación y tecnología, refinamos la experiencia para reducir pasos de investigación, aumentar autonomía operativa y disminuir dudas recurrentes.",
        ],
        note: "La idea era simple: salir de una visión macro de la operación hacia el detalle de una transacción en pocos clics.",
      },
      realtime: {
        title: "Operación en tiempo real",
        paragraphs: [
          "La experiencia combinaba visión ejecutiva y lectura operativa en una misma interfaz.",
          "El usuario acompañaba saldo, entrada, salida y settlement, mientras visualizaba transacciones en tiempo real con status claros y actualización constante.",
          "Esta estructura ayudaba a soporte, finanzas y operación a trabajar con la misma fuente de información, acelerando investigaciones y reduciendo ruido entre áreas.",
        ],
      },
      searchFilters: {
        title: "Búsqueda, filtros y trazabilidad",
        paragraphs: [
          "En un gateway de pago, búsqueda y filtros no son solo recursos de conveniencia. Funcionan como herramientas de investigación para localizar transacciones, cruzar criterios y entender qué ocurrió en cada flujo.",
          "En operaciones de alto volumen, el usuario necesita combinar merchant, status, período, tipo de operación e identificadores para llegar al dato correcto con confianza. Por eso, la estructura de filtros fue pensada para reducir el universo de análisis y llevar rápidamente al detalle de la transacción.",
        ],
        note: "El objetivo era dar autonomía para investigar transacciones sin depender inmediatamente de lectura técnica o soporte.",
      },
      statusErrors: {
        title: "Claridad de status y errores",
        paragraphs: [
          "En productos financieros, mostrar que una transacción falló no es suficiente. El usuario necesita entender el status, en qué etapa ocurrió la falla, cuál pudo haber sido el motivo y qué acción tiene sentido a partir de ahí.",
          "Por eso, la interfaz necesitaba tratar status, mensajes de error y detalles transaccionales como parte del diagnóstico operativo, no solo como información complementaria.",
          "La experiencia organizaba señales importantes para reducir ambigüedad: situación de la transacción, origen probable del error, identificadores relevantes y contexto necesario para orientar soporte, finanzas, operación o cliente.",
        ],
        note: "La claridad de status ayudaba al usuario a salir de la duda genérica hacia un diagnóstico más objetivo, con menos interpretación manual entre áreas.",
      },
      whiteLabel: {
        title: "White label",
        paragraphs: [
          "Vanir también necesitaba funcionar como solución white label, pero eso no significaba solo cambiar color o logo. La decisión involucraba escalabilidad, consistencia y gobernanza de la experiencia.",
          "La base de la interfaz necesitaba seguir estable para preservar patrones de navegación, lectura de datos y mantenimiento del producto. La personalización quedaba concentrada en puntos controlados, como marca, llamadas, CTAs y navegación.",
          "Este enfoque permitía atender diferentes marcas sin fragmentar la experiencia, evitando que cada cliente se volviera una variación aislada y difícil de evolucionar.",
        ],
        note: "El desafío era equilibrar identidad de marca con una estructura operativa única, consistente y sostenible para producto, diseño y desarrollo.",
      },
      designDecisions: {
        paragraphs: [
          "Las decisiones de diseño fueron guiadas por tres prioridades: reducir ambigüedad, acelerar la investigación y dar más autonomía a usuarios internos y clientes.",
        ],
        cards: [
          {
            title: "Indicadores arriba",
            description:
              "Antes de investigar una transacción específica, el usuario necesitaba entender rápidamente el estado de la operación: volumen, status, movimiento y señales de atención.",
          },
          {
            title: "Filtros como investigación",
            description:
              "En alto volumen, buscar una transacción exige cruzar período, status, operación, merchant e identificadores. La búsqueda necesitaba funcionar como diagnóstico, no solo como consulta.",
          },
          {
            title: "Detalle transaccional",
            description:
              "La tabla ayudaba a encontrar registros, pero el detalle explicaba contexto, status, información principal y posibles motivos de error.",
          },
          {
            title: "Base neutra para white label",
            description:
              "La interfaz necesitaba atender diferentes marcas sin fragmentar la experiencia, preservando usabilidad, mantenimiento y coherencia visual.",
          },
        ],
      },
      impactIntro: [
        "Antes de las mejoras, el análisis de transacciones en Vanir dependía de una rutina altamente técnica. Para entender si una transacción estaba pagada, pendiente, con error o en otro estado, los equipos necesitaban consultar webhooks en Axiom e interpretar archivos JSON antes de responder a clientes.",
        "Con la evolución de la interfaz, Vanir pasó a centralizar información crítica en dashboards, filtros, tablas y gráficos, dando más autonomía a soporte, operación, comercial y clientes para acompañar transacciones e identificar problemas con más claridad.",
      ],
      learningsIntro: {
        paragraphs: [
          "Vanir reforzó que, en productos financieros, el diseño de producto necesita organizar complejidad sin simplificar demasiado la realidad operativa.",
          "La principal lección fue que claridad antes que estética no significa renunciar a calidad visual. En dashboards financieros, claridad visual y claridad funcional necesitan ir juntas para que los datos se conviertan en acción.",
          "El proyecto también mostró que el producto se construye cerca de la operación. Trabajar cerca de soporte, comercial, finanzas y tecnología ayudó a entender dudas recurrentes, flujos reales y puntos en los que la interfaz debía apoyar la decisión.",
        ],
        note: "El aprendizaje central fue que los datos financieros solo generan valor cuando están organizados en una experiencia comprensible, trazable y accionable.",
      },
      confidentiality: [
        "Por tratarse de un producto financiero con datos sensibles, este case preserva nombres de clientes, merchants, CPFs, documentos, valores identificables, información privada de la operación y datos estratégicos.",
        "Las pantallas presentadas en el portafolio pueden utilizar mockups, datos simulados o volúmenes agregados. El objetivo es mostrar la estructura de la experiencia y las decisiones de producto sin revelar información confidencial.",
      ],
      impactCards: [
        {
          label: "Eficiencia operativa",
          metric: "Cerca de 70% menos dudas operativas",
          description:
            "Reducción estimada en dudas recurrentes después de mejoras en trazabilidad, status, filtros y motivos de error.",
        },
        {
          label: "Reducción de volumen",
          metric: "Menos dudas recurrentes",
          description:
            "Centralizar información crítica en dashboards, filtros y gráficos redujo preguntas repetidas sobre transacciones.",
        },
        {
          label: "Escala de soporte",
          metric: "Más autonomía para soporte y operación",
          description:
            "Los equipos internos pudieron investigar dudas simples con más contexto antes de activar tecnología.",
        },
        {
          label: "Autonomía técnica",
          metric: "Menos dependencia técnica",
          description:
            "Los desarrolladores pasaron a ser accionados solo cuando había indicio real de problema interno o necesidad de investigación técnica.",
        },
        {
          label: "Impacto para clientes",
          metric: "Más autonomía para clientes y merchants",
          description:
            "Los clientes pasaron a acceder a dashboards y consultas con los mismos datos referentes a sus propias transacciones.",
        },
        {
          label: "Impacto para áreas internas",
          metric: "Más claridad para soporte, operación y comercial",
          description:
            "Las áreas pasaron a identificar si el problema era interno, del cliente o externo, como fallas relacionadas con Pix/BACEN.",
        },
      ],
      impactComparison: [
        {
          title: "Antes",
          items: [
            "Consulta manual de webhooks en Axiom",
            "Interpretación de JSON para entender status",
            "Dependencia de dev para investigar casos simples",
            "Soporte con poca autonomía",
            "Operación sin visión rápida de volumen, fallas y anomalías",
          ],
        },
        {
          title: "Después",
          items: [
            "Dashboard centralizado de pagos",
            "Filtros por período y status",
            "Indicadores de Balance, Payin, Payout y Settlement",
            "Gráficos de volumen por período y en tiempo real",
            "Áreas internas y clientes con más autonomía de consulta",
          ],
        },
      ],
      learningCards: [
        {
          title: "Claridad antes que estética",
          description:
            "En dashboards financieros, la claridad visual y funcional van juntas.",
        },
        {
          title: "Los datos necesitan volverse acción",
          description:
            "Cada información debe apoyar investigación, lectura o decisión.",
        },
        {
          title: "Producto cerca de la operación",
          description:
            "Los dolores reales aparecen cerca de quien usa y sostiene el producto.",
        },
        {
          title: "La complejidad debe organizarse",
          description: "Reducir esfuerzo sin esconder profundidad.",
        },
      ],
    },
    heimdall: {
      hero: {
        title:
          "Heimdall: inteligencia de KYC para validación y riesgo operativo",
        description:
          "Producto de KYC y validación operativa para consulta, análisis e interpretación de datos cadastrais, apoyando decisiones con más claridad, seguridad y trazabilidad.",
      },
      overview: [
        "Heimdall es una solución de KYC, identidad digital y análisis cadastral orientada a operaciones que necesitan validar CPF/CNPJ, investigar vínculos, renta presumida, PEP, historial y señales de riesgo.",
        "La plataforma centraliza información de diferentes fuentes en una interfaz única, reduciendo la alternancia entre sistemas, planillas y consultas manuales. Con eso, los analistas pueden leer datos complejos, identificar alertas y construir una visión más completa para decisión operativa.",
      ],
      productContext: [
        "En operaciones financieras y reguladas, validar un CPF o CNPJ no es solo confirmar datos básicos. Es necesario entender historial, vínculos, exposición política, relaciones empresariales, señales de fraude y posibles inconsistencias.",
        "Antes de una experiencia centralizada, este proceso tiende a ser fragmentado. Heimdall fue pensado para organizar esa complejidad en una jornada más fluida, permitiendo que el analista salga de una consulta simple hacia una investigación más profunda sin perder contexto.",
      ],
      macroDetail: {
        title: "Visión macro y detalle",
        paragraphs: [
          "La experiencia fue diseñada para funcionar en dos niveles: visión macro para lectura rápida del riesgo y visión detallada para investigación profunda.",
          "En el primer contacto, el analista necesita entender rápidamente si ese cadastro presenta señales de atención. Luego necesita acceder a datos consolidados, vínculos, historial, fuentes consultadas y evidencias que sostengan la decisión.",
        ],
      },
      operationalContext: [
        "Heimdall atiende una rutina en la que velocidad y precisión necesitan ir juntas. Los analistas lidian con múltiples consultas, diferentes niveles de riesgo y decisiones que deben ser justificables.",
        "En este escenario, la interfaz no podía solo exhibir datos. Necesitaba organizar la investigación, indicar prioridad, reducir dudas y apoyar decisiones auditables para analistas, gestores y áreas responsables de conformidad.",
      ],
      painPointsIntro: [
        "Los principales dolores estaban ligados a la fragmentación del análisis y a la dificultad de transformar datos brutos en decisión. Los analistas necesitaban consultar múltiples fuentes para montar un perfil completo, aumentando tiempo de investigación y riesgo de omisiones.",
        "Señales importantes como vínculos empresariales, relaciones familiares, exposición política, historial de direcciones e inconsistencias cadastrais quedaban dispersas, dificultando una lectura rápida del riesgo.",
      ],
      challenge: {
        paragraphs: [
          "El principal desafío fue transformar una masa de datos cadastrais, relacionales y operativos en una experiencia comprensible para quien necesita tomar decisiones rápidas.",
          "La interfaz necesitaba entregar profundidad sin sobrecargar al usuario, organizando información sensible de forma clara, jerárquica y accionable para compliance, fraude y riesgo.",
        ],
        note: "El desafío no era solo mostrar más datos, sino ayudar al analista a entender qué exigía atención, qué vínculos podrían indicar riesgo y qué evidencias sostenían la decisión.",
      },
      role: [
        "Trabajé en la estructuración de la experiencia y de la interfaz de Heimdall, organizando la jornada de análisis cadastral desde la consulta inicial hasta la lectura de datos consolidados y señales de riesgo.",
        "El trabajo involucró transformar información técnica y sensible en pantallas más claras, con jerarquía visual, organización de contenido y flujos pensados para reducir esfuerzo operativo para analistas, gestores y compliance.",
      ],
      validation: {
        title: "Consulta y validación",
        paragraphs: [
          "La consulta cadastral fue pensada como el punto de entrada del análisis. El objetivo era permitir que el analista encontrara personas o empresas con rapidez, usando CPF o CNPJ, sin alternar entre diferentes herramientas.",
          "A partir de la búsqueda, el sistema dirige al usuario hacia una visión consolidada, reuniendo datos cadastrais, contactos, direcciones, vínculos e información relevante para la validación.",
        ],
      },
      riskSignals: {
        title: "Señales de riesgo",
        paragraphs: [
          "Además de presentar datos cadastrais, Heimdall necesitaba destacar señales que exigen atención durante el análisis.",
          "Información como exposición política, vínculos empresariales, relaciones indirectas, historial de datos e inconsistencias ayuda al analista a interpretar mejor el contexto de cada persona o empresa sin transformar la interfaz en un panel excesivamente técnico.",
        ],
      },
      designDecisions: {
        paragraphs: [
          "Las principales decisiones de diseño fueron guiadas por tres objetivos: claridad, trazabilidad y velocidad de análisis.",
        ],
        cards: [
          {
            title: "Lectura progresiva",
            description:
              "La interfaz presenta primero lo esencial y permite profundizar en datos, vínculos y evidencias según la necesidad de la investigación.",
          },
          {
            title: "Lenguaje sobrio",
            description:
              "El producto necesitaba transmitir confianza y criterio por lidiar con datos sensibles, compliance y toma de decisiones en ambientes regulados.",
          },
          {
            title: "Riesgo con evidencia",
            description:
              "Datos cadastrais, vínculos e historial fueron organizados para ayudar al analista a entender qué sostiene cada aprobación, rechazo o investigación adicional.",
          },
        ],
      },
      impactIntro: {
        paragraphs: [
          "El impacto previsto para Heimdall está ligado a la reducción de la dispersión en el análisis cadastral. Al reunir datos, vínculos, historial y señales de riesgo en una misma jornada, la plataforma apoya una rutina de KYC más clara y trazable.",
          "La experiencia busca dar más autonomía a analistas, gestores y equipos de compliance, fraude y riesgo, reduciendo ambigüedad y ayudando al usuario a transformar datos cadastrais en decisiones más seguras.",
        ],
        note: "La propuesta no es afirmar un resultado numérico, sino demostrar una dirección de producto más trazable, accionable y consistente para validación, investigación y riesgo operativo.",
      },
      learningsIntro: [
        "Los productos de KYC exigen una interfaz que organice complejidad con responsabilidad. Los datos sensibles necesitan ser legibles, pero también preservar contexto, criterio y seguridad operativa.",
        "El aprendizaje principal es que una buena experiencia de análisis cadastral no solo muestra información: ayuda al usuario a interpretar señales, recuperar contexto y justificar decisiones en escenarios regulados.",
      ],
      confidentiality: [
        "Por tratarse de una solución de KYC y análisis de riesgo, este case preserva CPFs, nombres, documentos, clientes, consultas, criterios internos y datos sensibles de la operación.",
        "Las pantallas presentadas pueden utilizar mockups, datos simulados o placeholders. El objetivo es demostrar estructura de experiencia, jerarquía de información y decisiones de producto sin revelar información confidencial.",
      ],
      painCards: [
        {
          title: "Consulta fragmentada",
          description:
            "Los analistas necesitaban alternar entre fuentes, planillas y consultas manuales para montar una visión completa.",
        },
        {
          title: "Datos sensibles dispersos",
          description:
            "Vínculos, historial, exposición política e inconsistencias quedaban dispersos en lecturas poco conectadas.",
        },
        {
          title: "Baja trazabilidad",
          description:
            "Consultas y evidencias necesitaban recuperarse con más contexto para justificar decisiones en escenarios regulados.",
        },
        {
          title: "Decisión poco accionable",
          description:
            "Los datos brutos exigían interpretación manual antes de convertirse en aprobación, rechazo o investigación adicional.",
        },
      ],
      impactCards: [
        {
          metric: "Análisis centralizado",
          description:
            "Datos cadastrais, vínculos, historial y señales de riesgo reunidos en una misma jornada de investigación.",
        },
        {
          metric: "Más velocidad",
          description:
            "Los analistas pueden partir de una consulta simple hacia una lectura más profunda sin perder contexto.",
        },
        {
          metric: "Más trazabilidad",
          description:
            "Consultas, fuentes y evidencias quedan más organizadas para apoyar decisiones justificables.",
        },
        {
          metric: "Apoyo al riesgo",
          description:
            "La experiencia ayuda a compliance, fraude y riesgo a identificar inconsistencias y relaciones relevantes.",
        },
      ],
      learningCards: [
        {
          title: "Una señal no es una decisión",
          description:
            "La interfaz debe separar evidencia, contexto y acción para evitar conclusiones precipitadas.",
        },
        {
          title: "El riesgo necesita contexto",
          description:
            "La validación cadastral es más útil cuando el usuario entiende origen, historial, vínculos y recurrencia.",
        },
        {
          title: "La claridad protege la decisión",
          description:
            "Los productos de KYC deben volver datos sensibles comprensibles sin simplificar demasiado el riesgo.",
        },
        {
          title: "La investigación debe ser trazable",
          description:
            "Cada consulta debe ayudar al equipo a reconstruir el camino del análisis con seguridad operativa.",
        },
      ],
    },
    parkingpix: {
      hero: {
        title: "ParkingPix: pago mobile vía PIX para estacionamientos.",
        description:
          "Experiencia de pago por QR Code creada para reducir filas, dar claridad sobre el valor cobrado y permitir que el usuario finalice la jornada del estacionamiento por celular, sin depender de terminal, caja o atención presencial.",
      },
      overview: [
        "ParkingPix propone una jornada mobile simple para estacionamientos: el usuario escanea el QR Code del ticket, visualiza el tiempo de permanencia, entiende el valor final y elige pagar vía PIX.",
        "La experiencia fue pensada para reducir fricciones en una etapa sensible de la jornada: el momento en que el cliente necesita pagar y salir rápidamente, especialmente en horarios pico.",
      ],
      productContext: [
        "En estacionamientos de shopping, el pago es un punto de alto impacto en la percepción de la experiencia. Filas, dudas sobre cobro, fallas en medios tradicionales y dependencia de atención transforman una etapa simple en frustración.",
        "El problema no está solo en el pago en sí, sino en la falta de claridad y trazabilidad: el usuario necesita entender cuánto debe pagar, confirmar que la transacción fue reconocida y salir sin tener que probar manualmente que pagó.",
      ],
      mobileFlow: {
        title: "Flujo mobile",
        paragraphs: [
          "La jornada fue estructurada para ser directa: escanear el QR Code, revisar el resumen, elegir PIX, copiar o escanear el código de pago y esperar la confirmación.",
          "Cada etapa necesitaba reducir ansiedad y dejar claro qué estaba ocurriendo, evitando abandono, dudas o activación innecesaria de atención.",
        ],
      },
      operationalContext: [
        "En estacionamientos, la validación ocurre en el punto de contacto entre atención, fila, comprobante y liberación. La interfaz necesita apoyar una decisión rápida sin exigir lectura extensa.",
        "ParkingPix organiza información esencial para que operador y cliente entiendan si el pago fue iniciado, confirmado, pendiente o necesita nueva verificación.",
      ],
      painPointsIntro: [
        "La operación necesitaba reducir dependencia de comprobantes enviados manualmente y hacer la confirmación más objetiva para quien atiende y para quien paga.",
        "El flujo también necesitaba preservar un contexto mínimo de ticket, valor y horario para evitar dudas recurrentes durante la liberación.",
      ],
      challenge: {
        paragraphs: [
          "El desafío fue diseñar una experiencia simple para un momento de prisa. El usuario no quiere aprender un sistema nuevo: quiere entender el valor, pagar con confianza y salir.",
          "Por eso, la interfaz necesitaba priorizar claridad, feedback de status y lenguaje objetivo, mostrando qué hacer en cada etapa y evitando dudas sobre pago, confirmación y finalización.",
        ],
        note: "La prioridad fue crear una lectura de status que funcionara al ritmo de la operación presencial, con confirmación clara y baja carga cognitiva.",
      },
      role: [
        "Trabajé en la estructuración de la experiencia mobile, organizando el flujo de pago, la jerarquía de información y los estados principales de la jornada.",
        "El trabajo involucró pensar en una experiencia clara para lectura de valor, elección del método de pago, confirmación vía PIX y retorno final para el usuario, manteniendo el foco en reducir fricción operativa.",
      ],
      paymentValidation: {
        title: "Validación de pago",
        paragraphs: [
          "La etapa de pago vía PIX necesitaba dejar claro que el usuario podía escanear el QR Code o copiar el código, además de mostrar el estado de espera mientras la transacción era confirmada.",
          "Mensajes como esperando confirmación y no cierres esta ventana ayudan a reducir ansiedad y evitan que el usuario interrumpa el flujo antes de la finalización.",
        ],
      },
      confirmationStatus: {
        title: "Confirmación y status",
        paragraphs: [
          "Después de la aprobación, la interfaz confirma la transacción y orienta al usuario sobre la finalización de la sesión.",
          "El objetivo es cerrar el flujo con seguridad, reforzando que el pago fue reconocido y que el vehículo ya puede ser retirado.",
        ],
      },
      designDecisions: {
        paragraphs: [
          "Las decisiones fueron guiadas por simplicidad, velocidad de lectura y confianza operativa.",
        ],
        cards: [
          {
            title: "Valor visible antes de la acción",
            description:
              "El usuario necesita entender tiempo de permanencia y valor final antes de elegir cómo pagar.",
          },
          {
            title: "Feedback constante de status",
            description:
              "La interfaz muestra cuándo el pago está en curso, cuándo necesita acción y cuándo fue confirmado.",
          },
          {
            title: "PIX como método familiar",
            description:
              "La elección por PIX reduce aprendizaje y conecta el flujo a un método de pago ya conocido por el usuario.",
          },
          {
            title: "Lenguaje directo para reducir ansiedad",
            description:
              "Mensajes cortos orientan el próximo paso y evitan dudas durante la espera por confirmación.",
          },
          {
            title: "Confirmación clara al final",
            description:
              "El cierre del flujo necesita reducir ansiedad y dejar claro que el usuario ya puede retirar el vehículo.",
          },
        ],
      },
      impactIntro: {
        paragraphs: [
          "El impacto esperado de ParkingPix está en la reducción de fricciones recurrentes ligadas al pago: dudas sobre cobro, pago no reconocido, filas y dependencia de atención manual.",
          "En operaciones de alto flujo, reducir segundos por vehículo y dar más autonomía al usuario puede generar impacto directo en la fluidez de la salida, en el volumen de llamados y en la percepción de eficiencia de la marca.",
        ],
        note: "La propuesta es demostrar un impacto proyectado de producto más claro, trazable y simple para validación de pago en contexto presencial.",
      },
      learningsIntro: [
        "ParkingPix refuerza que soluciones simples pueden tener gran impacto cuando atacan el punto correcto de la jornada.",
        "En productos operativos, la experiencia no necesita ser compleja para generar valor. Necesita reducir duda, dejar claro el próximo paso y dar seguridad para que el usuario concluya la acción sin depender de soporte.",
      ],
      confidentiality: [
        "Por tratarse de una solución de pago y operación presencial, este case preserva datos, placas, valores, clientes, tickets, comprobantes e información operativa.",
        "Las pantallas presentadas pueden utilizar mockups, datos simulados o placeholders. El objetivo es demostrar estructura de la experiencia y decisiones de producto sin revelar información confidencial.",
      ],
      painCards: [
        {
          title: "Pago no reconocido",
          description:
            "Cuando el cliente paga, pero la operación no identifica la transacción con claridad, la fricción aparece en la salida.",
        },
        {
          title: "Dudas en el cobro",
          description:
            "La divergencia entre tiempo, valor cobrado y comprobante aumenta inseguridad y reclamos.",
        },
        {
          title: "Dependencia de atención",
          description:
            "Problemas simples pasan a depender de caja, soporte o validación manual.",
        },
        {
          title: "Fila y frustración",
          description:
            "En horarios pico, pequeños retrasos se multiplican y afectan la percepción de la marca.",
        },
      ],
      impactCards: [
        {
          metric: "Menos fricción en la salida",
          description:
            "El pago por celular reduce dependencia de caja, terminal y atención presencial.",
        },
        {
          metric: "Más claridad para el usuario",
          description:
            "Valor, tiempo de permanencia y método de pago quedan visibles antes de la confirmación.",
        },
        {
          metric: "Menos tickets simples",
          description:
            "La confirmación de status reduce la necesidad de comprobar manualmente el pago.",
        },
        {
          metric: "Más fluidez operativa",
          description:
            "Menos filas y menos interacciones presenciales ayudan a mejorar el flujo en horarios pico.",
        },
      ],
      learningCards: [
        {
          title: "El status debe ser inmediato",
          description:
            "En operaciones presenciales, la interfaz debe responder rápido y con bajo margen de interpretación.",
        },
        {
          title: "Mobile debe reducir fricción",
          description:
            "Cada pantalla debe apoyar una acción clara, sin transformar una validación simple en un proceso complejo.",
        },
        {
          title: "La confianza viene del contexto",
          description:
            "Valor, ticket, horario y situación deben aparecer juntos para sostener la decisión del operador.",
        },
        {
          title: "La operación dicta el ritmo",
          description:
            "El diseño debe considerar fila, prisa, ambiente físico y alternancia entre cliente y operador.",
        },
      ],
    },
  },
};
