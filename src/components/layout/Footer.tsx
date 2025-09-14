import React from "react";
import { useTranslation } from "react-i18next";
import BlurText from "../ui/BlurText";

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.55v-5.6c0-1.34-.02-3.06-1.87-3.06-1.88 0-2.17 1.47-2.17 2.96v5.7H9.31V9h3.41v1.56h.05c.47-.88 1.62-1.8 3.33-1.8 3.56 0 4.22 2.34 4.22 5.37v6.32ZM5.34 7.43A2.06 2.06 0 0 1 3.3 5.38c0-1.14.92-2.06 2.06-2.06s2.06.92 2.06 2.06a2.06 2.06 0 0 1-2.07 2.05ZM7.12 20.45H3.55V9h3.57v11.45Z"
      />
    </svg>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.8-.25.8-.56v-2c-3.26.71-3.95-1.4-3.95-1.4-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.8 1.2 1.8 1.2 1.04 1.78 2.72 1.26 3.38.96.11-.76.41-1.26.75-1.55-2.6-.3-5.33-1.3-5.33-5.79 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.51.12-3.15 0 0 .98-.31 3.21 1.2.93-.26 1.92-.4 2.9-.4.98 0 1.97.14 2.9.4 2.23-1.51 3.2-1.2 3.2-1.2.65 1.64.25 2.85.12 3.15.75.82 1.2 1.87 1.2 3.15 0 4.5-2.74 5.49-5.35 5.78.43.37.81 1.1.81 2.22v3.29c0 .31.21.68.82.56A11.5 11.5 0 0 0 12 .5Z"
      />
    </svg>
  );
}

export default function Footer() {
  const { t } = useTranslation("common");
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      <div className="container py-10">
        {/* Ligne animée (BlurText) */}
        <div className="flex items-center justify-center">
          <BlurText
            text={t("footer.line")}
            delay={150}
            animateBy="words"
            direction="top"
            className="text-center text-sm text-muted-foreground"
          />
        </div>

        {/* Socials + © (texte normal, sans shiny) */}
        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <nav aria-label={t("footer.socials_aria")} className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/loan-lavigne-813086356/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md p-1.5 text-foreground/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedInIcon className="h-4 w-4" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="https://github.com/loanlvn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md p-1.5 text-foreground/80 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="GitHub"
              title="GitHub"
            >
              <GitHubIcon className="h-4 w-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </nav>

          <div className="text-center text-xs text-muted-foreground">
            {t("footer.rights", { year })}
          </div>
        </div>
      </div>
    </footer>
  );
}
