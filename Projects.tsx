import { useState } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../ui/ProjectCard";
import TechIcon from "../ui/TechIcon";
import MagicButton from "../ui/MagicButton";

export default function Projects() {
  const [showMore, setShowMore] = useState(false);
  const { t } = useTranslation("common");

  // ===== 3 projets principaux =====
  const featured = [
    {
      title: "RentEase (TypeScript) Final Front-End Project",
      description:
        "Plateforme de locations avec dashboard, auth, et gestion d’annonces. Stack full TS.",
      tech: ["React", "TypeScript", "Vite", "Tailwind", "Firebase", "Cloudinary", "Framer"],
      image: "/projects/rentease-ts.jpg",
      liveUrl: "#",
      repoUrl: "https://github.com/loanlvn/RentEase-React",
    },
    {
      title: "RentEase (JavaScript)",
      description:
        "Version JavaScript de RentEase. Focus sur les bases React, routing, formulaires et CRUD.",
      tech: ["React", "JavaScript", "Vite", "Tailwind", "Firebase"],
      image: "/projects/rentease-js.jpg",
      liveUrl: "#",
      repoUrl: "https://github.com/loanlvn/Rent-Ease-JavaScript",
    },
    {
      title: "Portfolio v2",
      description:
        "Portfolio moderne (thème dark), navbar flottante à bordure animée, sections modulaires et motion.",
      tech: ["React", "TypeScript", "Vite", "Tailwind", "Framer"],
      image: "/projects/portfolio-v2.jpg",
      liveUrl: "#",
      repoUrl: "#",
    },
  ];

  // ===== autres projets compactés (cartes) =====
  const moreFront = [
    {
      title: "UI Components Pack",
      description: "Petite lib maison de composants réutilisables.",
      tech: ["React", "Tailwind"],
      repoUrl: "https://github.com/loanlvn/UI-components",
    },
    {
      title: "Landing SaaS",
      description: "Page marketing optimisée (A11y, perf, SEO).",
      tech: ["React", "TypeScript", "Vite"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Dashboard filtrable, charts et state management.",
      tech: ["React", "Zustand", "Tailwind"],
      repoUrl: "#",
    },
  ];

  const moreBack = [
    {
      title: "REST API Rentals",
      description: "API CRUD pour annonces/locations, filtres, pagination.",
      tech: ["Node", "Express", "MongoDB"],
      repoUrl: "#",
    },
    {
      title: "Auth Service",
      description: "Service JWT, refresh tokens, RBAC.",
      tech: ["Node", "Fastify", "JWT"],
      repoUrl: "#",
    },
  ];

  return (
    <section id="projects" className="container py-24">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold">{t("projects.title")}</h2>
        <p className="subtle mt-2">{t("projects.subtitle")}</p>
      </header>

      {/* Grid des 3 projets principaux */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

      {/* Bouton “Afficher / Masquer” */}
      <div className="mt-8">
        <MagicButton
          title={showMore ? t("projects.hide_more") : t("projects.show_more")}
          icon={
            showMore ? (
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path fill="currentColor" d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path fill="currentColor" d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6z" />
              </svg>
            )
          }
          position="right"
          onClick={() => setShowMore((v) => !v)}
          gradient="brand"
          className="w-auto"
        />
      </div>

      {/* Bloc repliable : cartes compactes */}
      {showMore && (
        <div className="mt-10 space-y-10">
          {/* FRONT */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <h3 className="text-lg font-semibold">{t("projects.front")}</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <TechIcon name="React" />
                <TechIcon name="TypeScript" />
                <TechIcon name="Tailwind" />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {moreFront.map((p) => (
                <ProjectCard key={p.title} {...p} variant="compact" />
              ))}
            </div>
          </div>

          {/* BACK */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <h3 className="text-lg font-semibold">{t("projects.back")}</h3>
              <div className="flex items-center gap-2 text-muted-foreground">
                <TechIcon name="Node" />
                <TechIcon name="Express" />
                <TechIcon name="MongoDB" />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {moreBack.map((p) => (
                <ProjectCard key={p.title} {...p} variant="compact" />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
