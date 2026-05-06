export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  github: string;
  live: string;
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: 'souhail-portfolio',
    title: 'Souhail Portfolio',
    description: "Portfolio personnel développé avec Next.js et TypeScript. Intègre un chatbot IA multi-provider (Gemini, Groq, Mistral, Cerebras) avec persistance MongoDB, animations Framer Motion et architecture Atomic Design.",
    fullDescription: "Portfolio personnel conçu et développé de A à Z avec Next.js 14 et TypeScript. Le projet met en avant une architecture Atomic Design rigoureuse et intègre un chatbot IA multi-provider capable de basculer entre Gemini, Groq, Mistral et Cerebras selon disponibilité. Les conversations sont persistées en MongoDB, le tout animé avec Framer Motion pour une expérience utilisateur fluide et moderne.",
    tech: ['Next.js', 'TypeScript', 'Styled Components', 'Framer Motion', 'MongoDB', 'LangChain'],
    github: 'https://github.com/souhail-ss/souhail-portfolio',
    live: '',
    highlights: [
      "Architecture Atomic Design avec composants réutilisables (atoms, molecules, organisms)",
      "Chatbot IA multi-provider avec fallback automatique entre Gemini, Groq, Mistral et Cerebras",
      "Persistance des conversations en MongoDB avec gestion des sessions",
      "Animations avancées avec Framer Motion : transitions de page, scroll-triggered, hover effects",
      "Design system cohérent avec variables CSS et thème sombre",
      "Déploiement continu sur Vercel avec CI/CD",
    ],
  },
  {
    slug: 'weneeds',
    title: 'Weneeds — Plateforme de Recrutement IA',
    description: "Plateforme full-stack de recrutement boostée par l'IA. Architecture microservices avec NX monorepo, NestJS backend, Next.js frontend.",
    fullDescription: "Weneeds est une plateforme de recrutement innovante propulsée par l'intelligence artificielle. Le projet repose sur une architecture microservices avec NX monorepo, combinant NestJS pour le backend API et Next.js pour le frontend, le tout en TypeScript. La plateforme intègre un système de matching IA entre candidats et offres, un moteur de recherche avancé avec filtres dynamiques, et un système de widgets draggables sur les profils utilisateurs.",
    tech: ['NestJS', 'Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Django', 'Docker', 'NX Monorepo'],
    github: '',
    live: '',
    highlights: [
      "Architecture microservices avec NX monorepo pour scalabilité et maintenabilité",
      "Système de matching IA (Django/Python) intégré dans le backend NestJS",
      "Moteur de recherche avancé avec filtres dynamiques : localisation, salaire, type de contrat",
      "Système de widgets draggables et personnalisables avec React DnD",
      "Onboarding utilisateur multi-étapes personnalisé pour améliorer la rétention",
      "Intégration d'API externes : LinkedIn, GitHub, RapidApi pour enrichissement de profils",
      "Tests unitaires et d'intégration avec Jest",
    ],
  },
  {
    slug: 'notes-app',
    title: 'Notes App',
    description: "Application full-stack de gestion de notes personnelles. Backend NestJS avec API REST, frontend React moderne. PostgreSQL en production, SQLite pour le développement local.",
    fullDescription: "Application full-stack de gestion de notes personnelles avec une architecture propre et bien structurée. Le backend NestJS expose une API REST complète avec authentification JWT, tandis que le frontend React offre une interface moderne et réactive. La base de données est PostgreSQL en production et SQLite en développement local pour faciliter l'onboarding des développeurs.",
    tech: ['NestJS', 'React', 'TypeScript', 'PostgreSQL', 'SQLite'],
    github: 'https://github.com/souhail-ss',
    live: '',
    highlights: [
      "API REST complète avec NestJS et authentification JWT",
      "Frontend React avec gestion d'état et interface réactive",
      "Double base de données : PostgreSQL en production, SQLite en développement",
      "Architecture modulaire et scalable",
    ],
  },
  {
    slug: 'stellantis-mobile',
    title: 'Application Mobile Stellantis',
    description: "Application mobile multiplateforme (iOS/Android) de gestion des réservations internes pour les employés de Stellantis.",
    fullDescription: "Application mobile interne développée pour Stellantis, permettant aux employés de gérer leurs réservations de ressources internes (salles, véhicules, équipements). L'application est multiplateforme (iOS et Android) grâce à Flutter, avec une interface moderne et ergonomique respectant les chartes graphiques de Stellantis. Firebase assure l'authentification et la synchronisation des données en temps réel.",
    tech: ['Flutter', 'Dart', 'Firebase'],
    github: '',
    live: '',
    highlights: [
      "Application multiplateforme iOS/Android avec Flutter et Dart",
      "Authentification et synchronisation temps réel via Firebase",
      "Interface moderne et ergonomique conforme aux maquettes design Stellantis",
      "Gestion complète du cycle de développement : implémentation, tests, livraison",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
