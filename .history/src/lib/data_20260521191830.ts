import { Mail } from "lucide-react";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "@/components/ui/icons";

export const siteConfig = {
  name: "Thiago",
  role: "Frontend Engineer",
  description: "Construyendo interfaces web rápidas, accesibles y estéticamente precisas.",
  email: "hello@thiago.dev",
  socials: [
    { name: "GitHub", url: "https://github.com/thiagobal1891-sudo?.com", icon: GithubIcon },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/thiago-baltrons-90678b235/", icon: LinkedinIcon },
    { name: "Twitter", url: "https://twitter.com/thiago", icon: TwitterIcon },
    { name: "Email", url: "thiagobalrami17@gmail.com", icon: Mail },
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
  id: "juco-barber",
  title: "Sistema de Barbería Online",
  year: "2025",
  description: "Sistema de turnos online para una barbería, con frontend, API y base de datos.",
  problem: "Coordinar el deploy de un sistema con frontend y backend separados, asegurando que la comunicación entre ambos funcionara correctamente en producción. El sistema de turnos requería validar disponibilidad en tiempo real y el panel administrativo necesitaba autenticación segura.",
  solution: "Deployé el backend en Vercel con variables de entorno separadas por ambiente. Resolví los problemas de CORS entre servicios y conecté Supabase para manejar sesiones del panel admin y la lógica de turnos. El resultado es un flujo completo: el cliente reserva, el admin ve y gestiona desde su panel.",
  what: "Proyecto fullstack estructurado como monorepo con Turborepo. API REST en TypeScript con integración a Supabase para gestión de turnos y clientes.",
  stack: ["TypeScript", "Turborepo", "Supabase", "Docker"],
  demoUrl: "https://juco-barber-api.vercel.app/",
  githubUrl: "https://github.com/thiagobal1891-sudo/juco-barber",
  image: "/projects/juco-barber-hero.png",
  imagePanel: "/projects/juco-barber-panel.png",
  },
  {
  id: "vue-cart",
  title: "Vue Cart System",
  year: "2025",
  description: "Aplicación e-commerce construida con Vue 3 con manejo de estado global y navegación dinámica.",
  what: "Implementé el flujo completo de carrito: agregar, quitar y actualizar productos con Pinia como store central. Vue Router para la navegación entre vistas.",
  problem: "Mantener el estado del carrito sincronizado entre múltiples vistas sin que los datos se perdieran al navegar entre páginas.",
  solution: "Centralicé toda la lógica del carrito en un store de Pinia accesible desde cualquier componente, logrando que el estado persista durante toda la sesión de navegación.",
  stack: ["Vue 3", "Pinia", "Vue Router"],
  image: "/projects/vue-ecommerce-cart.png",
  imagePanel: "/projects/vue-ecommerce-cart-panel.png",
  demoUrl: "https://vue-ecommerce-ruddy-zeta.vercel.app/#/",
  githubUrl: "https://github.com/thiagobal1891-sudo/vue-ecommerce",
  },
  {
    id: "web-cosmeticología",
    title: "Web Cosmetología",
    description: "Web personalizada para una cosmetóloga, mostrando sus servicios, portafolio y contacto.",
    stack: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://prettyfacefd.netlify.app/",
    githubUrl: "https://github.com/thiagobal1891-sudo/paginaweb",
    image: "/projects/web-cosmetic-hero.png"
  }
];
