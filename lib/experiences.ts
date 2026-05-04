export interface Experience {
  slug: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  type: string;
  description: string;
  skills: string[];
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    slug: 'weneeds',
    company: 'Weneeds',
    role: 'Développeur Full Stack',
    period: 'Juillet 2024 – Mars 2025',
    location: 'Paris, France',
    type: 'Plateforme de recrutement boostée par IA',
    description: "En tant que Développeur Full Stack chez Weneeds, j'ai contribué à la conception et au développement d'une plateforme de recrutement innovante propulsée par l'intelligence artificielle. Le projet reposait sur une architecture microservices avec NX monorepo, combinant NestJS pour le backend API et Next.js pour le frontend, le tout en TypeScript. Mon rôle couvrait l'ensemble du cycle de développement : de la création d'interfaces responsives et de composants réutilisables à l'intégration d'endpoints IA pour le matching intelligent entre candidats et offres d'emploi, en passant par la mise en place de moteurs de recherche avancés et l'optimisation de l'expérience utilisateur.",
    skills: ['TypeScript', 'NestJS', 'Next.js', 'React', 'styled-components', 'TypeORM', 'PostgreSQL', 'Jest', 'React DnD', 'Python', 'Django', 'Docker', 'NX Monorepo', 'REST API'],
    bullets: [
      "Développement d'une plateforme en architecture microservices avec NX monorepo, intégrant NestJS (backend API) et Next.js (frontend) avec TypeScript pour scalabilité et maintenabilité",
      "Développement d'interfaces web responsives avec Next.js, React, TypeScript et styled-components, conformes aux maquettes design avec composants réutilisables",
      "Conception et mise en place d'un processus d'onboarding utilisateur multi-étapes personnalisé et guidé, améliorant significativement l'accessibilité, l'engagement et la rétention des utilisateurs",
      "Développement d'un système de widgets draggables et personnalisables sur les profils utilisateurs avec React DnD (drag-and-drop)",
      "Intégration des endpoints IA (Django, Python) dans le backend NestJS pour le matching intelligent entre candidats et offres d'emploi",
      "Mise en œuvre d'un moteur de recherche avancé avec filtres dynamiques multiples (localisation, salaire, type de contrat) incluant endpoints backend REST avec TypeORM, PostgreSQL et interface utilisateur interactive avec debouncing et pagination",
      "Intégration et optimisation d'API externes REST (LinkedIn, GitHub, RapidApi) pour enrichissement de profils et gestion dynamique des données en temps réel",
      "Optimisation de l'expérience utilisateur (UX/UI) avec feedbacks visuels interactifs, animations, notifications toast, et navigation intuitive",
      "Tests unitaires et d'intégration avec Jest pour assurer une couverture robuste du code et la qualité",
    ],
  },
  {
    slug: 'stellantis',
    company: 'Stellantis',
    role: 'Développeur Front-end',
    period: 'Mai 2022 – Juillet 2022',
    location: 'Casablanca, Maroc',
    type: 'Application mobile interne de gestion des réservations',
    description: "Chez Stellantis, j'ai été chargé du développement d'une application mobile interne dédiée à la gestion des réservations des employés. Utilisant Flutter et Dart, j'ai conçu des interfaces modernes et ergonomiques en respectant les maquettes design fournies. Ce stage m'a permis de maîtriser le cycle complet de développement mobile, de l'implémentation des fonctionnalités aux tests finaux, tout en suivant les meilleures pratiques du développement mobile.",
    skills: ['Flutter', 'Dart', 'Firebase', 'Mobile', 'UI/UX'],
    bullets: [
      "Développement d'une application mobile interne de gestion des réservations des employés avec Flutter",
      "Création d'interfaces modernes et ergonomiques conformes aux maquettes design",
      "Implémentation et test rigoureux des fonctionnalités techniques en suivant les meilleures pratiques de développement mobile",
      "Réalisation complète du projet, de l'implémentation des fonctionnalités aux tests finaux",
    ],
  },
  {
    slug: 'eqdom',
    company: 'EQDOM',
    role: 'Développeur Front-End',
    period: 'Mars 2021 – Juin 2021',
    location: 'Casablanca, Maroc',
    type: 'Refonte du back-office interne',
    description: "Au sein d'EQDOM, filiale du groupe Société Générale spécialisée dans le crédit à la consommation, j'ai participé à la refonte complète du back-office interne. Ma mission principale consistait à moderniser les interfaces utilisateur existantes pour améliorer l'ergonomie et l'efficacité des workflows internes. J'ai travaillé sur le développement d'interfaces modernes avec HTML5, CSS3 et JavaScript, tout en procédant à la correction de bugs visuels et à la refactorisation du code front-end.",
    skills: ['HTML5', 'CSS3', 'JavaScript', 'UX/UI'],
    bullets: [
      "Refonte du back-office interne pour améliorer l'expérience utilisateur et l'ergonomie",
      "Développement d'interfaces utilisateur modernes et ergonomiques",
      "Optimisation des workflows et de l'ergonomie des outils internes",
      "Correction de bugs visuels et refactorisation du code front-end",
    ],
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((exp) => exp.slug === slug);
}
