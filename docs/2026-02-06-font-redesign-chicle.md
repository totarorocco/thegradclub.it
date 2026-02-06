# Font Redesign: Rimozione Playfair Display, tutto Helvetica + Chicle per evidenze

**Data:** 2026-02-06
**Stato:** Implementazione Completata (2026-02-06)

## Obiettivo

Rimuovere completamente Playfair Display (il font corsivo/display) dal sito. Tutto il testo passa a Helvetica Neue (font-sans). Le parole attualmente evidenziate con Playfair Display italic verranno rese con il font **Chicle** (Google Font) al posto del corsivo.

## Nota Importante su Chicle

Chicle e un font "playful/kid-friendly" con stile retrò, molto diverso dall'estetica luxury minimal del sito. Se l'intenzione e mantenere un look elegante per le parole in evidenza, potrebbe essere piu adatto un font come:
- **Cormorant Garamond** (elegante serif)
- **Lora** (editorial serif)
- **DM Serif Display** (moderno, pulito)

Se Chicle e confermato, si procede con quello.

## Implementazione Tecnica

### 1. `app/layout.tsx`
- Rimuovere import di `Playfair_Display` da `next/font/google`
- Importare `Chicle` da `next/font/google` (weight: "400", solo normal)
- Cambiare la CSS variable da `--font-display` a `--font-chicle` (o mantenere `--font-display`)
- Aggiornare il body className

### 2. `app/globals.css`
- Cambiare `--font-display` da `"Playfair Display", Georgia, serif` a `"Chicle", cursive`

### 3. Componenti da aggiornare (rimuovere `italic`, mantenere `font-display` che puntera a Chicle)
- `components/Hero.tsx` — linea 36: `<em className="font-display italic font-normal">` → `<em className="font-display font-normal not-italic">`
- `components/Benefits.tsx` — linee 39, 47
- `components/TrendingDestinations.tsx` — linea 39
- `components/HowItWorks.tsx` — linee 35, 44
- `components/Navbar.tsx` — linea 120 (logo)
- `components/ExperienceCarousel.tsx` — linea 61
- `components/TeamSection.tsx` — linea 17
- `components/ReviewsSection.tsx` — linee 73, 101
- `components/ValueProposition.tsx` — linee 12, 15
- `components/Newsletter.tsx` — linea 25

### 4. Per ogni componente:
- Rimuovere la classe `italic`
- Mantenere `font-display` (che ora puntera a Chicle)
- Assicurarsi che `not-italic` sia presente sugli `<em>` per rimuovere il corsivo di default

### 5. Aggiornare documentazione
- CLAUDE.md: aggiornare riferimenti a Playfair Display
- MEMORY.md: aggiornare note sui font

## File Modificati
- `app/layout.tsx`
- `app/globals.css`
- `components/Hero.tsx`
- `components/Benefits.tsx`
- `components/TrendingDestinations.tsx`
- `components/HowItWorks.tsx`
- `components/Navbar.tsx`
- `components/ExperienceCarousel.tsx`
- `components/TeamSection.tsx`
- `components/ReviewsSection.tsx`
- `components/ValueProposition.tsx`
- `components/Newsletter.tsx`
