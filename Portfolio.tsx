// src/pages/Portfolio.tsx
import PageTransition from "../components/ui/PageTransition";
import Glow from "../components/ui/Glow";
import Header from "../components/layout/header";
import Hero from "../components/sections/hero";
import FloatingNav from "../components/ui/FloatingNavbar";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

export default function Portfolio() {
  const { t } = useTranslation("common");

  const navItems = useMemo(
    () => [
      { name: t("nav.home"), link: "#home" },
      { name: t("nav.projects"), link: "#projects" },
      { name: t("nav.contact"), link: "#contact" },
    ],
    [t]
  );

  return (
    <PageTransition>
      <main className="relative min-h-[100svh] bg-background">
        <Glow />
        <FloatingNav navItems={navItems} />
        <Header />
        <Hero
          id="home"
          email="loanlavigne.pro@gmail.com"
          cvHref="/cv.pdf"
          portraitSrc="/me.jpeg"
        />

        <section id="projects" className="container py-24">
          <Projects />
        </section>

        <section id="contact" className="container py-24">
          <Contact />
        </section>
      </main>
    </PageTransition>
  );
}
