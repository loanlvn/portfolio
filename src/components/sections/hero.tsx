import { useTranslation } from "react-i18next";
import AvailabilityBadge from "../ui/AvailabilityBadge";
import MagicButton from "../ui/MagicButton";
import PortraitCard from "../ui/PortraitCard";

type Props = {
  email?: string;
  cvHref?: string;
  portraitSrc?: string;
  id?: string;
};

export default function Hero({
  email = "loanlavigne.pro@gmail.com",
  cvHref = "/cv.pdf",
  portraitSrc = "/CV.2025.LOAN.LAVIGNE.pdf",
  id = "home",
}: Props) {
  const { t } = useTranslation("common");

  return (
    <section
      id={id}
      className="container grid gap-12 py-10 md:py-20 md:grid-cols-2"
    >
      {/* Colonne texte */}
      <div className="flex flex-col justify-center">
        <AvailabilityBadge />

        <h1 className="heading mt-6">
          {t("hero.title_prefix")}{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">
            {t("hero.title_highlight")}
          </span>
        </h1>

        <p className="mt-4 max-w-prose text-balance text-muted-foreground md:text-lg">
          {t("hero.blurb")}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <MagicButton
            i18nKey="hero.cta_contact"
            ariaLabelKey="hero.cta_contact"
            href={`mailto:${email}`}
            position="right"
            gradient="brand"
            className="md:mt-10 w-auto"
            icon={<span aria-hidden>✉️</span>}
          />

          <MagicButton
            i18nKey="hero.cta_cv"
            ariaLabelKey="hero.cta_cv"
            href={cvHref}
            position="left"
            gradient="purple"
            className="md:mt-10 w-auto"
            icon={
              <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4">
                <path
                  fill="currentColor"
                  d="M12 3v10.586l3.293-3.293 1.414 1.414L12 17.414l-4.707-4.707 1.414-1.414L11 13.586V3h1zM5 19h14v2H5z"
                />
              </svg>
            }
          />
        </div>
      </div>

      {/* Colonne image (depuis /public) */}
      <PortraitCard src={portraitSrc} />
    </section>
  );
}
