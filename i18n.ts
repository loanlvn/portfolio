import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    common: {
      brand: "Portfolio",
      nav: { home: "Home", projects: "Projects", contact: "Contact" },
      actions: { theme: "Theme", language: "Language", enter: "Enter now" },
      hero: {
        title_prefix: "Loan LAVIGNE's",
        title_highlight: "Portfolio",
        blurb:
          "I’m a junior web developer with a strong appetite for learning, highly motivated to grow in the tech industry. Soon to graduate from the TechOf programming school in Lisbon, I’m eager to contribute to real-world projects and keep sharpening my craft with modern React and TypeScript.",
        cta_contact: "Contact me",
        cta_cv: "Download CV",
      },
      projects: {
        title: "Projects",
        subtitle:
          "Three featured projects. Others are collapsed to keep the page clean.",
        front: "Front-end",
        back: "Back-end",
        show_more: "Show more projects",
        hide_more: "Hide extra projects",
      },
      contact: {
        title: "Contact",
        subtitle: "Let’s talk about your project or an opportunity.",
        card_title: "Get in touch",
        quick_reply: "Quick response via email or LinkedIn.",
        copy_email: "Copy email",
        copy: "Copy",
        copied: "Copied!",
        open: "Open",
        form: {
          title: "Send me a message",
          labels: { name: "Name", email: "Email", message: "Message" },
          placeholders: {
            name: "Your name",
            email: "you@example.com",
            message: "Your message…",
          },
          send: "Send",
          sending: "Sending…",
          open_email: "Open email app",
          sent: "Message sent ✔",
          error: "Failed to send. Try again.",
          hint_api:
            "Tip: set VITE_FORMS_ENDPOINT in your .env to send via API (Formspree/Web3Forms). Otherwise, your email client will open.",
        },
      },
    },
  },
  fr: {
    common: {
      brand: "Portfolio",
      nav: { home: "Accueil", projects: "Projets", contact: "Contact" },
      actions: {
        theme: "Thème",
        language: "Langue",
        enter: "Entrer maintenant",
      },
      hero: {
        title_prefix: "Le portfolio de Loan LAVIGNE",
        title_highlight: "Portfolio",
        blurb:
          "Développeur web junior, avide d’apprendre et motivé pour évoluer dans la tech. Bientôt diplômé de l’école de programmation TechOf à Lisbonne, je souhaite contribuer à des projets concrets et perfectionner mes compétences en React et TypeScript.",
        cta_contact: "Contactez-moi",
        cta_cv: "Télécharger le CV",
      },
      projects: {
        title: "Projets",
        subtitle:
          "Trois projets principaux. Le reste est replié pour garder la page épurée.",
        front: "Front-end",
        back: "Back-end",
        show_more: "Afficher le reste des projets",
        hide_more: "Masquer les autres projets",
      },
      contact: {
        title: "Contact",
        subtitle: "Discutons de votre projet ou d’une opportunité.",
        card_title: "Me joindre",
        quick_reply: "Réponse rapide par email ou LinkedIn.",
        copy_email: "Copier l’email",
        copy: "Copier",
        copied: "Copié !",
        open: "Ouvrir",
        form: {
          title: "M’écrire",
          labels: { name: "Nom", email: "Email", message: "Message" },
          placeholders: {
            name: "Votre nom",
            email: "vous@exemple.com",
            message: "Votre message…",
          },
          send: "Envoyer",
          sending: "Envoi…",
          open_email: "Ouvrir l’email",
          sent: "Message envoyé ✔",
          error: "Échec d’envoi. Réessaie.",
          hint_api:
            "Astuce : définis VITE_FORMS_ENDPOINT dans ton .env pour envoyer via API (Formspree/Web3Forms). Sinon, ouverture du client mail.",
        },
      },
    },
  },
  pt: {
    common: {
      brand: "Portefólio",
      nav: { home: "Início", projects: "Projetos", contact: "Contacto" },
      actions: { theme: "Tema", language: "Idioma", enter: "Entrar agora" },
      hero: {
        title_prefix: "O portefólio de Loan LAVIGNE",
        title_highlight: "Portefólio",
        blurb:
          "Desenvolvedor web júnior com grande vontade de aprender e motivado para crescer no setor de tecnologia. Em breve formado na escola de programação TechOf em Lisboa, quero contribuir para projetos reais e aprimorar minhas habilidades com React e TypeScript.",
        cta_contact: "Contacte-me",
        cta_cv: "Descarregar CV",
      },
      projects: {
        title: "Projetos",
        subtitle:
          "Três projetos em destaque. Os restantes ficam recolhidos para manter a página limpa.",
        front: "Front-end",
        back: "Back-end",
        show_more: "Mostrar mais projetos",
        hide_more: "Ocultar projetos extra",
      },
      contact: {
        title: "Contacto",
        subtitle: "Vamos falar sobre o seu projeto ou uma oportunidade.",
        card_title: "Entrar em contacto",
        quick_reply: "Resposta rápida por email ou LinkedIn.",
        copy_email: "Copiar email",
        copy: "Copiar",
        copied: "Copiado!",
        open: "Abrir",
        form: {
          title: "Envie-me uma mensagem",
          labels: { name: "Nome", email: "Email", message: "Mensagem" },
          placeholders: {
            name: "O seu nome",
            email: "voce@exemplo.com",
            message: "A sua mensagem…",
          },
          send: "Enviar",
          sending: "A enviar…",
          open_email: "Abrir cliente de email",
          sent: "Mensagem enviada ✔",
          error: "Falha no envio. Tente novamente.",
          hint_api:
            "Dica: defina VITE_FORMS_ENDPOINT no seu .env para enviar via API (Formspree/Web3Forms). Caso contrário, o cliente de email será aberto.",
        },
      },
    },
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    supportedLngs: ["en", "fr", "pt"],
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
  });

// Synchronise <html lang="">
i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
  }
});
// valeur initiale
if (typeof document !== "undefined") {
  document.documentElement.lang = i18n.language || "en";
}

export default i18n;
