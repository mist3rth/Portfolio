# Product Requirements Document (PRD) : Portfolio Thierry Thiesson

## 1. Vision et Objectifs
Le site a pour objectif de présenter le profil de Thierry Thiesson en tant qu'Expert CRM Technique et Email Architect Senior. 
Il doit refléter l'excellence technique (approche "bulletproof"), la séniorité, l'accessibilité et les performances irréprochables exigées dans son domaine.

## 2. Public Cible
- Recruteurs spécialisés IT / Marketing / CRM.
- Directeurs CRM, CTOs, et décideurs d'entreprises grands comptes.

## 3. Parcours Utilisateur & Flow Cognitif (CRO & UX)
Pour éviter toute interruption du flow, le site se présentera comme un parcours narratif fluide (One-Page avancée) exploitant les biais cognitifs suivants :

**A. L'Accroche (Effet de Halo & Biais d'Autorité)**
- **Contenu** : "Je ne me contente pas de coder des emails. Je sécurise vos actifs marketing les plus précieux." (Hero Banner focalisée sur la valeur et la réassurance).
- **Micro-animation** : Apparition progressive (Fade-in + blur reveal) avec un effet de typographie "Terminal/Code" qui se transforme en texte épuré.

**B. La Démonstration (Biais de Preuve Visuelle & Effet Zeigarnik)**
- **Contenu** : Section "Defensive Design & Parcours No-Images".
- **Fonctionnalité Interactive** : Un switch/toggle interactif "Désactiver les images". L'utilisateur clique et voit instantanément comment un e-mail standard s'effondre, tandis que le "Code Bulletproof" (avec Ghost Tables & styled alt-text) reste parfait.
- **Micro-animation** : Transition de rupture (glitch subtil) sur le faux email, stabilité absolue sur l'email de Thierry.

**C. L'Expertise Technique (Biais d'Ancrage & Hiérarchie)**
- **Contenu** : Mise en avant de "25 ans d'expertise", le VML, et le code natif vs Drag&Drop.
- **UX Mobile** : Conversion de la grille d'expertises en un carrousel horizontal (scroll-snap) pour une navigation tactile fluide et un gain d'espace vertical.
- **Micro-animation** : Au survol des cartes d'expertise (ex: VML ou Ghost Tables), le fond de la carte révèle subtilement la syntaxe de code (`<v:roundrect>`, `<!--[if mso]>`) en opacité réduite.

**D. La Preuve Sociale (Biais de Conformité & Rareté)**
- **Contenu** : Les Design Systems créés pour Peugeot, Aldi, Mercedes, Chanel. Met en avant la réduction de 70% du temps de production (Industrialisation).
- **Micro-animation** : Carrousel infini très lent (Marquee) des logos ou noms de marques pour insuffler une notion d'industrie lourde et de confiance.

**E. Le Parcours Professionnel (Timeline Narrative)**
- **Contenu** : Chronologie fluide (de 2000 à aujourd'hui chez Proximity Paris), démontrant la fidélité et l'évolution vers le Lead Technique.
- **Micro-animation** : Ligne de progression verticale qui se remplit au scroll (Scroll-linked animation) guidant l'œil de bout en bout sans casser le rythme de lecture.

**F. La Conversion (Aversion à la perte)**
- **Contenu** : "Ne laissez plus vos campagnes se briser sur Outlook. Optimisons vos conversions."
- **Call-to-Action** : Un bouton de contact flottant ou final avec un effet "Magnetic pull" au survol de la souris.

## 4. Métriques de Succès (KPIs BMAD)
- **Performance** : Lighthouse score 100/100, LCP < 2.5s, CLS < 0.1.
- **SEO** : Optimisation On-Page (JSON-LD, balisage Hn structuré).
- **Accessibilité** : Conformité WCAG AA (navigation clavier, contrastes).
