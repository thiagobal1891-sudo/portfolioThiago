import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-12 glass mt-20">
      <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#" className="text-xl font-bold tracking-tighter">
            Thiago<span className="text-primary">.dev</span>
          </a>
          <p className="text-sm text-muted-foreground">
            Building digital experiences that matter.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/thiagobal1891-sudo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaGithub size={20} />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/thiago-baltrons-90678b235/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <FaLinkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:thiagobalrami17@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="text-sm text-muted-foreground flex flex-col items-center md:items-end gap-1">
          <p>© {currentYear} Thiago. All rights reserved.</p>
          <p>Designed & Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
