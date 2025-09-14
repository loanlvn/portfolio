import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "../components/ui/PageTransition";
import MagicButton from "../components/ui/MagicButton";

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

const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/loan-lavigne-813086356/",
    Icon: LinkedInIcon,
  },
  { name: "GitHub", href: "https://github.com/loanlvn", Icon: GitHubIcon },
];

export default function Landing() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);
  const [paused, setPaused] = useState(false);
  const progress = useMemo(() => ((5 - seconds) / 5) * 100, [seconds]);

  useEffect(() => {
    if (paused) return;
    if (seconds <= 0) {
      navigate("/portfolio");
      return;
    }
    const t = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [seconds, paused, navigate]);

  return (
    <PageTransition>
      <div className="grid place-items-center min-h-[100svh]">
        <section className="container max-w-xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Loan Samuel Lavigne
          </h1>
          <p className="mt-2 text-muted-foreground">Personal portfolio</p>

          {/* Réseaux (avec icônes) */}
          <div className="mt-8 flex items-center justify-center gap-6">
            {SOCIALS.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-foreground/90 hover:text-foreground"
                aria-label={name}
              >
                <Icon className="h-5 w-5 opacity-80 group-hover:opacity-100" />
                <span className="underline-offset-4 group-hover:underline">
                  {name}
                </span>
              </a>
            ))}
          </div>

          {/* Compteur */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="text-sm text-muted-foreground">
              Redirection in{" "}
              <span className="font-semibold text-foreground">{seconds}s</span>
            </div>
            <div className="h-1.5 w-64 rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 transition-[width] duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <MagicButton
              title="Enter now"
              position="right"
              gradient="brand"
              className="w-auto md:w-56"
              icon={<span aria-hidden>↗</span>}
              onClick={() => navigate("/portfolio")}
            />
            <MagicButton
              onClick={() => setPaused((p) => !p)}
              title={paused ? "Restart the counter" : "Stay here"}
              position="right"
              gradient="purple"
              className="w-auto md:w-56"
              icon={<span aria-hidden>{paused ? "↻" : "⏸"}</span>}
            />
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
