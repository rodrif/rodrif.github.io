export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  duration?: string;
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
  };
  experience: Experience[];
  education: Education[];
  skills: string[];
  certifications: Certification[];
  languages: Language[];
}

export const cvData: CVData = {
  personal: {
    name: "Facundo Rodriguez",
    email: "rodrif89@gmail.com",
    linkedin: "https://www.linkedin.com/in/facundorodriguez-b1332191",
    location: "Argentina",
    currentRole: "Technical Leader en Avature",
  },
  experience: [
    {
      company: "Avature",
      role: "Technical Leader",
      startDate: "septiembre de 2020",
      endDate: "Presente",
      duration: "6 años",
    },
    {
      company: "Avature",
      role: "Desarrollador de software",
      startDate: "julio de 2015",
      endDate: "septiembre de 2020",
      duration: "5 años 3 meses",
    },
    {
      company: "Ingemática SA",
      role: "Programador Jr",
      startDate: "julio de 2014",
      endDate: "junio de 2015",
      duration: "1 año",
    },
  ],
  education: [
    {
      institution: "Universidad de Buenos Aires",
      degree: "Ingeniería en Informática",
      period: "2009 - 2015",
    },
    {
      institution: "Universidad Nacional de La Matanza",
      degree: "Diplomatura Energía y Desarrollo Sostenible: Herramientas para la práctica",
      period: "2017",
    },
    {
      institution: "Consejo Profesional en Ciencias Informáticas",
      degree: "Curso de peritaje informático",
      period: "2018",
    },
  ],
  skills: ["PHP", "MySQL", "JavaScript"],
  certifications: [
    {
      name: "First Certificate in English (FCE)",
      issuer: "Checkout Pro",
    },
    {
      name: "Timonel de yate a vela y motor",
    },
  ],
  languages: [
    {
      name: "Español",
    },
    {
      name: "Inglés",
    },
  ],
};
