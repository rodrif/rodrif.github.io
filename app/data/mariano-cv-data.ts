export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  duration?: string;
  location?: string;
  description?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period?: string;
}

export interface Certification {
  name: string;
  issuer?: string;
}

export interface Language {
  name: string;
  level?: string;
}

export interface CVData {
  personal: {
    name: string;
    email: string;
    phone: string;
    linkedin: string;
    location: string;
    currentRole: string;
    summary?: string;
  };
  experience: Experience[];
  education: Education[];
  skills: string[];
  certifications?: Certification[];
  languages: Language[];
}

export const marianoCVData: CVData = {
  personal: {
    name: "Mariano Damian Sacco",
    email: "sacco.md@gmail.com",
    phone: "(15) 64941835",
    linkedin: "https://www.linkedin.com/in/ingmariano-damian-sacco/",
    location: "Ciudad Autónoma de Buenos Aires, Argentina",
    currentRole: "Manager Negocio",
    summary:
      "Profesional Comercial y Marketing con amplia trayectoria en la gestión integral de unidades de negocio, desarrollo de productos y ejecución de estrategias de posicionamiento en el mercado. Especialista en liderar planes de expansión y lanzamientos comerciales, combinando una visión analítica basada en datos con la formación de equipos de trabajo enfocados en resultados.",
  },
  experience: [
    {
      company: "Grupo Corven",
      role: "Manager Negocio (Gerente Negocio Producto + Ventas + Marketing) de Kawasaki",
      startDate: "Octubre 2024",
      endDate: "Presente",
      location: "Argentina",
      description: [
        "Liderazgo de Fuerza de Ventas Nacional: Dirección estratégica, motivación y desarrollo continuo del equipo de vendedores zonales en todo el país, impulsando una cultura de alto desempeño y orientación al logro.",
        "Gestión Comercial en Terreno y Viajes: Presencia activa en el campo mediante viajes frecuentes a las distintas provincias, visitando clientes clave (B2B/B2C) junto a los vendedores para cerrar acuerdos estratégicos.",
        "Dirección Estratégica por Zonas Geográficas: Planificación integral de la comercialización y distribución por canales y regiones, adaptando la estrategia nacional a las demandas específicas de cada mercado local.",
        "Desarrollo de Clientes y Concesionarios: Evaluación y optimización continua de la performance de la red de concesionarios y del equipo interno, garantizando una cobertura total del territorio.",
        "Cercanía con el Usuario Final y Trade Marketing: Coordinación de acciones comerciales y eventos de marca en los puntos de venta para captar las necesidades del usuario final y asegurar el posicionamiento del producto.",
        "Gestión por Objetivos (KPIs): Definición, seguimiento y evaluación diaria de las métricas de venta, auditando el desempeño individual de cada vendedor y el cumplimiento de las metas de cada zona.",
        "Planificación de Demanda y Pricing: Coordinación directa con fábrica para el forecasting de stock según el comportamiento de cada región, implementando políticas de precios (PVP) y financiación competitivas.",
        "Business Intelligence: Elaboración de reportes analíticos basados en la realidad detectada en el campo, facilitando a la dirección comercial la toma de decisiones estratégicas eficaces.",
      ],
    },
    {
      company: "La Emilia",
      role: "Manager Marca Brand Manager (Producto + Marketing) de Suzuki+SYM+Teknial",
      startDate: "Junio 2022",
      endDate: "Octubre 2024",
      location: "Argentina",
      description: [
        "Gestión Integral de Producto (End-to-End): Responsabilidad total sobre el ciclo de vida del producto, coordinando de manera estratégica con Comercio Exterior (Comex), Planeamiento de Producción, Control de Gestión y Administración de Ventas para maximizar la rentabilidad y el posicionamiento de mercado.",
        "Estrategia de Marketing Mix (4Ps): Liderazgo y ejecución táctica de las variables de Producto, Precio, Plaza y Promoción en sinergia con el equipo de Marketing, garantizando la competitividad y la alineación con los objetivos corporativos.",
        "Desarrollo de Canales y Nuevos Negocios: Diseño y apertura de canales comerciales exclusivos, redes de retail y modelos de negocio para terceros, expandiendo la cobertura y la presencia de la compañía.",
        "Innovación y Lanzamientos de Portafolio: Planeamiento e introducción al mercado de nuevas categorías y productos de vanguardia, incluyendo unidades de movilidad muscular, asistencia eléctrica y vehículos 100% eléctricos para marcas propias (Tekinial) y representadas globales (Suzuki y SYM).",
        "Business Intelligence e Investigación de Mercado: Realización de estudios competitivos y análisis de tendencias del sector. Manejo analítico de herramientas de importación (Softrade / TeSys) para la detección de oportunidades comerciales y el monitoreo de la competencia.",
      ],
    },
    {
      company: "Volta + Forte",
      role: "Manager Producto Product Manager",
      startDate: "Enero 2020",
      endDate: "Junio 2022",
      location: "Argentina",
      description: [
        "Estrategia y Ciclo de Vida: Definición de la propuesta de valor, roadmap y estrategia competitiva a largo plazo, liderando el ciclo completo del producto desde el origen y la planta hasta su lanzamiento al mercado.",
        "Gestión de P&L y Control Operativo: Evaluación de la viabilidad económica del negocio mediante el control de presupuestos, business cases, riesgos y el seguimiento diario de sell-in, sell-out, inventarios y precios.",
        "Estrategia Go-to-Market y Habilitación: Diseño del plan integral de marketing y lanzamientos comerciales, implementando procesos de venta replicables y capacitando a la fuerza de venta directa y canales de distribución.",
      ],
    },
    {
      company: "Saint-Gobain",
      role: "Coordinador Comercial para sus marcas DobleA / Webber / Ceresita",
      startDate: "Diciembre 2015",
      endDate: "Enero 2020",
      location: "Argentina",
      description: [
        "Desarrollo de Mercados Internacionales: Liderazgo en la introducción de líneas importadas y ejecución de lanzamientos estratégicos en Argentina y Brasil, actuando como nexo clave y reportando KPIs de ciclo de vida a la casa matriz.",
        "Estrategia de Canales B2B, Retail e Industria: Negociación y desarrollo de acuerdos comerciales con grandes superficies, distribuidores y clientes industriales, definiendo la rentabilidad por segmento, precios sugeridos y el comportamiento de compra.",
        "Activación de Demanda y Trade Marketing: Dirección de la estrategia publicitaria, gestión de repositores en góndola y coordinación de eventos masivos de alto impacto, incluyendo la presencia de las marcas en salones internacionales del sector.",
      ],
    },
    {
      company: "Grupo Newsan (SIAM)",
      role: "Líder de Coordinación de Proyectos",
      startDate: "Junio 2013",
      endDate: "Diciembre 2015",
      location: "Argentina",
      description: [
        "Gestión de Proyectos (PMO): Dirección del roadmap de nuevos productos, lanzamientos y nacionalización de componentes en la planta Avellaneda, articulando cronogramas (Gantt) transversales entre Marketing, Compras, Producción e Ingeniería.",
        "Comité de Innovación: Participación activa en el Comité de Innovación corporativo de Newsan, evaluando la viabilidad técnica junto a Costos y elaborando reportes ejecutivos de estatus para Directores y Gerencia.",
      ],
    },
  ],
  education: [
    {
      institution: "Facultad de Ingeniería del Ejército",
      degree: "Ingeniero Mecánico con una especialización en Automotores",
      period: "2008 - 2015",
    },
    {
      institution: "Técnico Electrónico",
      degree: "Técnico Electrónico",
      period: "2002 - 2007",
    },
  ],
  skills: [
    "Gestión de Negocios / Business Management",
    "Marketing Mix / Estrategia de Marketing",
    "Gestión de Producto / Product Management",
    "Ventas y Comercialización",
    "Gestión de Proyectos / Project Management",
    "Supply Chain / Gestión de Cadena de Suministro",
    "Análisis de Mercado / Business Intelligence",
    "Liderazgo de Equipos",
    "Trade Marketing",
  ],
  certifications: [
    {
      name: "First Certificate in English (FCE)",
      issuer: "Cambridge English",
    },
    {
      name: "PMI Especialización de Postgrado en UBA de Project Manager (Coordinador de proyectos)",
      issuer: "Universidad de Buenos Aires",
    },
    {
      name: "SCM Especialización de Postgrado en UTN de Supply Chain Manager (Coordinador cadena de suministro)",
      issuer: "Universidad Tecnológica Nacional",
    },
    {
      name: "MARKETING Diplomatura en MKT y Comercialización orientación digital en UCES",
      issuer: "Universidad de Ciencias Empresariales y Sociales",
    },
  ],
  languages: [
    {
      name: "Inglés",
      level: "First Certificate",
    },
  ],
};
