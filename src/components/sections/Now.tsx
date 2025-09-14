import { useTranslation } from "react-i18next";
import TechIcon from "../ui/TechIcon";
import ProjectCard from "../ui/ProjectCard";
import ProgressBar from "../ui/ProgressBar";

export default function Now() {
  const { t } = useTranslation("common");

  const current = {
    title: t("now.current.title"),
    description: t("now.current.desc"),
    tech: ["PostgreSQL", "Prisma", "Nodejs", "Docker"],
  };

  const done = {
    title: t("now.done.title"),
    description: t("now.done.desc"),
    tech: ["MongoDB", "Express"],
  };

  return (
    <section id="now" className="container py-20">
      <header className="mb-8">
        <h2 className="text-2xl font-semibold">{t("now.title")}</h2>
        <p className="subtle mt-2">{t("now.subtitle")}</p>
      </header>

      {/* Bandeau */}
      <div className="relative overflow-hidden rounded-2xl border bg-card p-6 shadow-soft">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_400px_at_10%_-20%,rgba(99,102,241,0.15),transparent_60%),radial-gradient(800px_300px_at_90%_120%,rgba(56,189,248,0.12),transparent_60%)]" />
        <p className="relative text-sm text-muted-foreground">
          {t("now.summary")}
        </p>
        <div className="relative mt-4 flex flex-wrap items-center gap-3 text-muted-foreground">
          <TechIcon name="PostgreSQL" />
          <TechIcon name="Prisma" />
          <TechIcon name="Nodejs" />
          <TechIcon name="Docker" />
          <span className="mx-2 opacity-50">•</span>
          <TechIcon name="MongoDB" />
          <TechIcon name="Express" />
        </div>
      </div>

      {/* Progress */}
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <ProgressBar
          label="PostgreSQL"
          value={60}
          icon={<TechIcon name="PostgreSQL" />}
          gradient="purple" 
          ringPaddingPx={1}
          
        />

        <ProgressBar
          label="Prisma"
          value={60}
          icon={<TechIcon name="Prisma" />}
          delay={0.05}
          gradient="purple"
          ringPaddingPx={1}
          
        />
        <ProgressBar
          label="Node.js"
          value={90}
          icon={<TechIcon name="Nodejs" />}
          delay={0.1}
          gradient="purple"
          ringPaddingPx={1}
          
        />
        <ProgressBar
          label="Docker"
          value={10}
          icon={<TechIcon name="Docker" />}
          delay={0.15}
          gradient="purple"
          ringPaddingPx={1}
          
        />
      </div>

      {/* Cartes compactes */}
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <ProjectCard {...current} variant="compact" />
        <ProjectCard {...done} variant="compact" />
      </div>
    </section>
  );
}