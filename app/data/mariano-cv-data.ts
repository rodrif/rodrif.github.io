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
  period: string;
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
    linkedin: "https://www.linkedin.com/in/ingmarianodamian-sacco",
    location: "Argentina",
    currentRole: "Gerente Comercial",
    summary:
      "Mis virtudes se pueden apreciar en mi dedicación, atención a los detalles, investigación, buen manejo en los tiempos y plazos requeridos así como la capacidad de respuesta ante el trabajo bajo presión.",
  },
  experience: [
    {
      company: "Grupo Corven",
      role: "Gerente comercial Kawasaki",
      startDate: "octubre de 2024",
      endDate: "Presente",
      duration: "1 año 11 meses",
      location: "Argentina",
    },
    {
      company: "Grupo Corven",
      role: "Gerente De Negocio Kawasaki",
      startDate: "octubre de 2024",
      endDate: "Presente",
      location: "Argentina",
    },
    {
      company: "La Emilia",
      role: "Product Manager",
      startDate: "junio de 2022",
      endDate: "octubre de 2024",
      duration: "2 años 5 meses",
      location: "Buenos Aires y alrededores",
      description: [
        "Product Manager para las marcas Suzuki, SYM & Electricos",
      ],
    },
    {
      company: "Grupo Lopez Hnos",
      role: "Brand Manager",
      startDate: "febrero de 2021",
      endDate: "junio de 2022",
      duration: "1 año 5 meses",
      location: "Resistencia, Chaco, Argentina",
    },
    {
      company: "Saint-Gobain Argentina",
      role: "Jefe de producto",
      startDate: "septiembre de 2019",
      endDate: "febrero de 2021",
      duration: "1 año 6 meses",
      location: "Tortuguitas, Buenos Aires, Argentina",
      description: [
        "Responsable de administrar el proceso total para el startup, coordinación, planificación y monitoreo de la categoría Tile Fixing (colocacion porcellanato y ceramicas) desde las etapas conceptuales hasta el ciclo de vida total del producto, y las actualizaciones de ciclo de vida.",
        "Realizar una investigación de mercado continua para identificar y definir nuevas innovaciones de productos.",
        "Marcas competitivas, valor y posicionamiento de precios",
        "Tamaño del mercado y posibles ventas disponibles",
        "Análisis de brechas para optimizar la mezcla en las ofertas de productos",
        "Extensiones de línea y mejoras a productos existentes.",
        "Interactúa en el campo con profesionales, instaladores y distribuidores identificados.",
        "Procesar, gestionar y crear documentos de comunicación, redes sociales y medios.",
        "Diseño de packaging y elementos de merchandising, soporte promocional.",
        "Verificación de descripciones de productos, contenidos, garantías, presentaciones.",
        "Material colateral, material de capacitación del personal de ventas.",
        "Coordinación con Operaciones y Suministros, I + D, Fabricación, Ventas, Trade Marketing, Comunicaciones",
        "Cronogramas del proyecto, cronogramas de ejecución",
      ],
    },
    {
      company: "Saint-Gobain",
      role: "Ingeniero de Producto y Marketing",
      startDate: "mayo de 2015",
      endDate: "septiembre de 2019",
      duration: "4 años 5 meses",
      location: "Buenos Aires",
      description: [
        "Saint Gobain 350 Years (Retail)",
        "Jefe de Producto Abrasivos Argentinos DobleA Jun 2016 – actualidad Argentina",
        "Ingeniero de producto para Abrasivos Doble A. Me encargo de llevar adelante los nuevos proyectos de desarrollo de Productos, y lanzamientos, y Análisis Mercado de productos importados complementando la gama nacional.",
        "Llevando adelante la planificación del Marketing y de Lineup de Productos.",
        "Análisis de Mercado, Forecast de venta.",
        "Coordinación de análisis de producto con los usuarios, clínicas de uso y lanzamiento dentro del plan estratégico de marca.",
        "Gestiono la coordinación del equipo de post venta y de soporte técnico del área técnica para las grandes cuentas.",
        "Reportando micro-strategy a la dirección.",
      ],
    },
    {
      company: "Grupo Newsan",
      role: "Lider coordinacion Proyectos",
      startDate: "agosto de 2014",
      endDate: "mayo de 2016",
      duration: "1 año 10 meses",
    },
    {
      company: "Grupo Newsan",
      role: "Líder de Proyecto planta SIAM (Newsan)",
      startDate: "agosto de 2014",
      endDate: "mayo de 2016",
      duration: "1 año 10 meses",
      description: [
        "Me encargo de llevar adelante los nuevos desarrollos de Productos, nuevos lanzamientos, y nacionalización de componentes.",
        "Llevando adelante la planificación de un Gantt coordinando entre las áreas de compras, abastecimientos, producción, producto e ingeniería.",
        "Elaborando informes para los gerentes y directores, junto con el área de costos.",
      ],
    },
    {
      company: "Grupo Newsan",
      role: "Programador produccion",
      startDate: "2014",
      endDate: "2015",
      duration: "1 año",
      description: [
        "NEWSAN como Analista SSR. de Planificación. Mis tareas en el área de Supply Chain fueron la Planificación de compras de materiales nacionales y seguimiento de materiales críticos.",
        "Planificación de producción; Incluye generación de Ordenes de producción, cálculo de dotaciones líneas.",
        "Planificación de despachos de planta (Hacia deposito en monte chingolo, la reja o directo a Carriers, La Elaboración de diversos informes para Clientes, tanto internos como externos (Planes/reportes de producción y despacho).",
      ],
    },
    {
      company: "YPF",
      role: "Supervisor",
      startDate: "junio de 2014",
      endDate: "agosto de 2014",
      duration: "3 meses",
      description: [
        "YPF Energía como Supervisor, tareas de control in situ, tanto sea de mantenimiento: edilicio, soporte técnico de los elementos mecánicos y electrónicos, personal: cumplimiento normas, de vestimenta, no uso de telefonía móvil, cumplimiento de horarios, Seg e Hig: normas, de seguridad, matafuegos, y limpieza / seguridad",
      ],
    },
    {
      company: "F.H.",
      role: "Ingeniero Mecanico",
      startDate: "junio de 2012",
      endDate: "marzo de 2014",
      duration: "1 año 10 meses",
      description: [
        "Brindo asesoría técnica en el diseño y construcción de monopostos y formulas, Diseño de chasis en CAD, y en Solid edge, calculo torsional del mismo, calculo de suspensión diseño de la geometría de la misma, repotenciación de los motores, en Formula Histórica Argentina (grupo similar a un ONG sin fines de lucro) Damos conferencias y charlas técnicas, y organizamos eventos de regularidad en pista.",
      ],
    },
  ],
  education: [
    {
      institution: "Universidad de Ciencias Empresariales y Sociales",
      degree: "Marketing con Orientacion Digital, Administración y gestión de empresas",
      period: "2018 - 2019",
    },
    {
      institution: "Facultad de Ingeniería del Ejército",
      degree: "Ingeniero Mecanico Especializacion en diseño y fabricacion automotores, Ingeniería mecánica",
      period: "2008 - 2015",
    },
  ],
  skills: ["Planificación", "Ingeniería", "Gestión de proyectos"],
  certifications: [
    {
      name: "First Certificate in English (FCE)",
      issuer: "Cambridge English",
    },
  ],
  languages: [
    {
      name: "Inglés",
      level: "Professional Working",
    },
  ],
};
