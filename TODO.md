# Suivi du Projet (BMAD)

## Phase 1 : Planification & Architecture (En cours)
- [x] Rédiger le `PRD.md` basé sur les données du CV.
- [x] Rédiger l'`ARCHITECTURE.md`.
- [x] Faire valider l'architecture par l'utilisateur.

## Phase 2 : Initialisation Technique
- [x] Créer le projet Next.js avec TypeScript et Tailwind (`npx create-next-app@latest`).
- [x] Configurer la typographie (`Plus Jakarta Sans`) et le Design System dans `tailwind.config.ts`.
- [x] Extraire et structurer les données du CV dans `/src/data/cvData.ts`.

## Phase 3 : Développement des Composants
- [x] Implémenter la section `Hero` et `Profil`.
- [x] Implémenter la section `ExpertisesClés` (Grille de cartes performante).
- [x] Implémenter la section `Experiences` (Composant Timeline).
- [x] Implémenter les sections `Formations` et `Outils`.

## Phase 4 : Assemblage & Audit
- [x] Intégrer les composants dans la page principale `page.tsx`.
- [x] Implémenter le SEO (Meta tags complets, JSON-LD schema).
- [x] Harmoniser le padding des cartes à 10px sur mobile (`Timeline`, `Testimonials`, `Expertises`, `ValueProp`).
- [x] Améliorer le contraste du footer pour la conformité WCAG (links & infos).
- [x] Réaliser l'audit d'accessibilité final (Navigation full clavier).
- [x] Réaliser l'audit de performance globale (Correctifs: Navbar loop, Hero CSS extraction, Isometric lazy-render).
- [x] Optimiser le score PageSpeed mobile (SSR désactivé sous le pli, optimisation LCP, font-display swap, images opt/).
- [x] Valider auprès de l'utilisateur la conformité finale.

