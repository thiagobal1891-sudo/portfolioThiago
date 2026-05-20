import { Mail } from "lucide-react";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "@/components/ui/icons";

export const siteConfig = {
  name: "Thiago",
  role: "Frontend Engineer",
  description: "Construyendo interfaces web rápidas, accesibles y estéticamente precisas.",
  email: "hello@thiago.dev",
  socials: [
    { name: "GitHub", url: "https://github.com/thiago", icon: GithubIcon },
    { name: "LinkedIn", url: "https://linkedin.com/in/thiago", icon: LinkedinIcon },
    { name: "Twitter", url: "https://twitter.com/thiago", icon: TwitterIcon },
    { name: "Email", url: "mailto:hello@thiago.dev", icon: Mail },
  ]
};

export const skills = {
  core: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "HTML5/Semántico"],
  ui: ["Tailwind CSS", "Framer Motion", "Figma", "CSS Modules"],
  architecture: ["App Router", "Server Components", "REST", "GraphQL"],
  workflow: ["Git", "GitHub Actions", "Vercel", "AI Assistants"]
};

export const projects = [
  {
    id: "trackflow",
    title: "TrackFlow",
    description: "Plataforma de exploración musical con un reproductor persistente de alto rendimiento.",
    problem: "Organizar colecciones musicales complejas con fluidez y sin interrupciones durante la navegación.",
    solution: "UI inspirada en plataformas modernas, usando Next.js Server Components para carga inicial y Zustand para el estado del reproductor.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Zustand", "Framer Motion"],
    demoUrl: "#",
    githubUrl: "#",
    image: "/projects/trackflow.webp"
  },
  {
    id: "metricshub",
    title: "MetricsHub",
    description: "Dashboard B2B para visualización de grandes volúmenes de datos.",
    problem: "Mostrar información densa sin abrumar al usuario ni afectar el rendimiento del navegador.",
    solution: "Diseño minimalista apoyado en Tailwind Grid, gráficos ligeros y virtualización de listas.",
    stack: ["React", "Recharts", "Tailwind", "TanStack Table"],
    demoUrl: "#",
    githubUrl: "#",
    image: "/projects/metricshub.webp"
  },
  {
    id: "studiocanvas",
    title: "Studio Canvas",
    description: "Portfolio inmersivo para artistas visuales con interacciones ricas.",
    problem: "Crear una experiencia visualmente impactante que no sacrifique la accesibilidad ni el SEO.",
    solution: "Uso estratégico de Framer Motion para transiciones de página suaves y carga progresiva de imágenes de alta resolución.",
    stack: ["Next.js", "Framer Motion", "Tailwind", "Radix UI"],
    demoUrl: "#",
    githubUrl: "#",
    image: "/projects/studiocanvas.webp"
  }
];
