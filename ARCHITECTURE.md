# Architecture Technique : Portfolio Thierry Thiesson

## 1. Stack Technologique
Conformément aux directives BMAD :
- **Framework** : Next.js (App Router) pour garantir le meilleur rendu (SSR/SSG), optimisé pour le SEO et les performances.
- **Langage** : TypeScript (Mode strict, Zéro `any`).
- **Styling** : Tailwind CSS.
- **Déploiement** : Vercel ou GitHub Pages (Export statique).

## 2. Structure du Projet
```text
/
├── src/
│   ├── app/                # Pages Next.js (layout.tsx, page.tsx)
│   ├── components/         # Composants UI réutilisables (Hero, Card, Timeline)
│   ├── data/               # Données statiques extraites du CV (experiences.ts, skills.ts)
│   ├── styles/             # Fichiers CSS globaux
│   └── utils/              # Helpers (SEO, formatage JSON-LD)
├── public/                 # Assets (images WebP/AVIF optimisées)
├── PRD.md                  # Spécifications produit
├── ARCHITECTURE.md         # Architecture technique
└── TODO.md                 # Suivi de projet
```

## 3. Design System
Inspiré par le CV fourni et orienté UI moderne (Glassmorphism possible) :
- **Couleurs** :
  - Primary (Fond/Texte foncé) : `#2d3436`
  - Secondary (Texte léger) : `#636e72`
  - Accentuation (Bleu Tech) : `#0984e3`
  - Fond de base : `#ffffff` / `#f9f9f9`
- **Typographie** : `Plus Jakarta Sans` (Google Fonts).

## 4. Règles Qualité (BMAD Enforced)
- **A11Y** : Utilisation stricte de HTML5 sémantique (`<main>`, `<section>`, `<article>`, `<aside>`). Contraste validé. Attributs ARIA si nécessaire.
- **SEO** : Meta-tags dynamiques, balise `title` pertinente, intégration de données structurées JSON-LD (type `Person`).
- **Performance** : Composants React isolés pour limiter les re-renders. `next/image` pour l'optimisation des visuels.
