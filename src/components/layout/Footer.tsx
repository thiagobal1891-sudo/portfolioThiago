import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-muted)] bg-[var(--color-background)] py-12">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-[var(--color-muted-foreground)]">
          © {new Date().getFullYear()} {siteConfig.name}. Construido con Next.js y Tailwind.
        </p>
        <div className="flex gap-4">
          {siteConfig.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors"
              aria-label={social.name}
            >
              <social.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
