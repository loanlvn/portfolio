import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    common: {
      brand: "Portfolio",
      nav: {
        home: "Home",
        now: "Now",
        projects: "Projects",
        contact: "Contact",
      },
      actions: { theme: "Theme", language: "Language", enter: "Enter now" },
      hero: {
        title_prefix: "Loan LAVIGNE's",
        title_highlight: "Portfolio",
        blurb:
          "Junior full-stack developer, eager to learn and motivated to grow in tech. Soon to graduate from the TechOf programming school in Lisbon, I want to contribute to real-world projects and sharpen my skills in React and TypeScript (front end), Node.js (back end), with PostgreSQL and MongoDB for databases.",
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
        },
      },
      now: {
        title: "Now",
        subtitle: "What I’m focusing on and what I recently completed.",
        summary:
          "I’ve finished the MongoDB module and I’m currently learning PostgreSQL. Exploring Prisma as the ORM, relational modeling, and migrations, with a Docker-based setup.",
        current: {
          title: "Currently learning — PostgreSQL",
          desc: "Relational schemas, foreign keys, joins, indexes, views, and Prisma migrations.",
        },
        done: {
          title: "Completed — MongoDB module",
          desc: "Document modeling, queries, aggregations, and basic API hardening.",
        },
        roadmap: {
          next: "Next steps",
          practice: "Practice",
          devops: "DevOps",
          items: {
            schema: "Relational schema design",
            rel: "N:N, 1:N, 1:1 relationships",
            crud: "Full CRUD with Prisma + validation",
            migrate: "Migrations & rollbacks",
            docker: "Docker Compose (DB + API)",
            seed: "Seed & fixtures scripts",
          },
        },
      },
      footer: {
        line: "Thanks for visiting, let’s build something great together.",
        rights: "© {{year}} Loan Lavigne — All rights reserved.",
        socials_aria: "Social links",
      },
    },
  },
  fr: {
    common: {
      brand: "Portfolio",
      nav: {
        home: "Accueil",
        now: "Maintenant",
        projects: "Projets",
        contact: "Contact",
      },
      actions: {
        theme: "Thème",
        language: "Langue",
        enter: "Entrer maintenant",
      },
      hero: {
        title_prefix: "Le portfolio de Loan LAVIGNE",
        title_highlight: "Portfolio",
        blurb:
          "Développeur full-stack junior, avide d’apprendre et motivé pour évoluer dans la tech. Bientôt diplômé de l’école de programmation TechOf à Lisbonne, je souhaite contribuer à des projets concrets et perfectionner mes compétences en React et TypeScript (front-end), Node.js (back-end), avec PostgreSQL et MongoDB pour les bases de données.",
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
        },
      },
      now: {
        title: "En ce moment",
        subtitle: "Ce sur quoi je travaille et ce que j’ai récemment terminé.",
        summary:
          "J’ai terminé le module MongoDB et j’apprends actuellement PostgreSQL. J’explore Prisma pour l’ORM, la modélisation relationnelle et les migrations, avec un setup Docker pour un environnement reproductible.",
        current: {
          title: "Apprentissage en cours — PostgreSQL",
          desc: "Schémas relationnels, clés étrangères, jointures, index, vues et migrations avec Prisma.",
        },
        done: {
          title: "Terminé — Module MongoDB",
          desc: "Modélisation orientée documents, requêtes, agrégations, et sécurisation basique côté API.",
        },
        roadmap: {
          next: "Prochaines étapes",
          practice: "Pratique",
          devops: "DevOps",
          items: {
            schema: "Conception de schémas relationnels",
            rel: "Relations N:N, 1:N, 1:1",
            crud: "CRUD complet avec Prisma + validation",
            migrate: "Migrations et rollbacks",
            docker: "Docker Compose (DB + API)",
            seed: "Scripts de seed & fixtures",
          },
        },
      },
      footer: {
        line: "Merci de votre visite, construisons quelque chose de grand ensemble.",
        rights: "© {{year}} Loan Lavigne — Tous droits réservés.",
        socials_aria: "Liens sociaux",
      },
    },
  },
  pt: {
    common: {
      brand: "Portefólio",
      nav: {
        home: "Início",
        now: "Agora",
        projects: "Projetos",
        contact: "Contacto",
      },
      actions: { theme: "Tema", language: "Idioma", enter: "Entrar agora" },
      hero: {
        title_prefix: "O portefólio de Loan LAVIGNE",
        title_highlight: "Portefólio",
        blurb:
          "Programador full-stack júnior, ávido por aprender e motivado para evoluir na área tecnológica. Em breve diplomado pela escola de programação TechOf, em Lisboa, pretendo contribuir para projetos concretos e aperfeiçoar as minhas competências em React e TypeScript (front-end), Node.js (back-end), com PostgreSQL e MongoDB para bases de dados.",
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
        },
      },
      now: {
        title: "Agora",
        subtitle: "No que estou focado e o que completei recentemente.",
        summary:
          "Terminei o módulo de MongoDB e estou atualmente a aprender PostgreSQL. Estou a explorar o Prisma como ORM, modelação relacional e migrações, com uma configuração baseada em Docker para um ambiente reprodutível.",
        current: {
          title: "A aprender — PostgreSQL",
          desc: "Esquemas relacionais, chaves estrangeiras, joins, índices, views e migrações com Prisma.",
        },
        done: {
          title: "Concluído — Módulo MongoDB",
          desc: "Modelação orientada a documentos, queries, agregações e hardening básico do lado da API.",
        },
        roadmap: {
          next: "Próximos passos",
          practice: "Prática",
          devops: "DevOps",
          items: {
            schema: "Design de esquemas relacionais",
            rel: "Relações N:N, 1:N, 1:1",
            crud: "CRUD completo com Prisma + validação",
            migrate: "Migrações e rollbacks",
            docker: "Docker Compose (DB + API)",
            seed: "Scripts de seed & fixtures",
          },
        },
      },
      footer: {
        line: "Obrigado pela visita, vamos construir algo incrível juntos.",
        rights: "© {{year}} Loan Lavigne — Todos os direitos reservados.",
        socials_aria: "Links sociais",
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
