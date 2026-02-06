# PRD — The Grad Club Homepage (Replica struttura Evaneos.it)

## Obiettivo

Ricreare **esattamente** la struttura e il layout della homepage di **evaneos.it**, adattandola a **The Grad Club**: colori del brand, contenuti, copy e destinazioni. Il risultato deve essere una single-page HTML/CSS/JS (o React) completamente responsive, pixel-perfect rispetto alla struttura Evaneos ma con l'identità visiva di The Grad Club.

**Siti di riferimento:**
- https://www.evaneos.it/ (struttura da replicare 1:1)
- https://www.evaneos.com/ (versione EN per riferimento aggiuntivo)

---

## Tech Stack

- **Framework:** Next.js 14+ (App Router) oppure single-file HTML/CSS/JS se più rapido
- **Styling:** Tailwind CSS + CSS custom properties per il design system
- **Fonts:** Google Fonts — `Helvetica Neue` (o fallback `DM Sans`) per body, `Playfair Display` per accent/display opzionale
- **Animazioni:** CSS transitions + Intersection Observer per reveal on scroll
- **Deploy:** Static export, pronto per Vercel

---

## Design System

### Colori

```css
:root {
  /* Primary */
  --navy-deep: #2B3143;        /* Background principale scuro, navbar scrolled, footer */
  --burgundy-dark: #39252C;    /* Accent scuro, hover states */
  --terracotta: #6F4E44;       /* Elementi warm, bordi, dettagli */
  
  /* Accent */
  --coral-red: #D44452;        /* CTA primarie, bottoni, badge, link hover */
  --sunflower-yellow: #F9E778; /* Highlight, badge, accent logo */
  
  /* Neutral */
  --cream-white: #FDF8F3;      /* Background chiaro principale */
  --warm-gray: #E8E4DF;        /* Bordi, dividers */
  --charcoal: #1A1A1A;         /* Testo principale su sfondo chiaro */
  --off-white: #FAFAF8;        /* Background alternativo sezioni */
  --white: #FFFFFF;
}
```

### Typography

```css
--font-primary: 'Helvetica Neue', 'DM Sans', -apple-system, sans-serif;
--font-display: 'Playfair Display', Georgia, serif; /* Solo per hero title */

/* Scale */
--text-display: clamp(3rem, 6vw, 5.5rem);
--text-h1: clamp(2rem, 4vw, 3.5rem);
--text-h2: clamp(1.5rem, 3vw, 2.25rem);
--text-h3: clamp(1.125rem, 2vw, 1.5rem);
--text-body-lg: 1.125rem;
--text-body: 1rem;
--text-small: 0.875rem;
--text-xs: 0.75rem;

/* Weights */
--font-light: 300;
--font-regular: 400;
--font-medium: 500;
--font-bold: 700;
--font-black: 900;

/* Spacing */
--tracking-tight: -0.02em;
--tracking-wide: 0.05em;
--tracking-wider: 0.1em;
```

### Logo

"THE GRAD CLUB" — versione stacked:
- "THE" sopra in font-weight bold, tracking-wider, dimensione piccola
- "GRAD" al centro, peso black, con effetto ombra/3D color sunflower-yellow
- "CLUB" sotto, stesse caratteristiche di "THE"
- Su sfondo scuro: colore bianco. Su sfondo chiaro: colore navy-deep.

### Bottoni

```
CTA Primaria:   bg coral-red, text white, border-radius 50px, padding 14px 32px, font-medium, uppercase tracking-wide
CTA Secondaria: bg transparent, border 2px white (o navy), text white (o navy), border-radius 50px, stessa dimensione
Hover:          scala(1.02), leggero box-shadow, transizione 0.3s
```

### Card Style

```
Border-radius: 16px
Overflow: hidden
Box-shadow: 0 4px 20px rgba(0,0,0,0.08)
Hover: translateY(-4px), box-shadow più pronunciata
Transition: 0.3s ease
Image aspect-ratio: 3/2 (orizzontali) o 4/5 (verticali tipo destinazione)
```

---

## Struttura della Pagina (Sezione per Sezione)

La homepage replica **esattamente** l'ordine e la struttura di evaneos.it. Di seguito ogni sezione con il mapping Evaneos → Grad Club.

---

### SEZIONE 1 — Navbar (Fixed Top)

**Struttura Evaneos:** Logo a sinistra, menu centrale (Destinazioni, Tipo di viaggio, I nostri impegni), CTA "Accedi" a destra.

**Adattamento Grad Club:**

```
[Logo THE GRAD CLUB]    [Destinazioni]  [Come Funziona]  [Esperienze]  [Recensioni]    [Prenota Ora ↗]
```

- **Comportamento:** Trasparente con testo bianco sopra l'hero. Al scroll (>80px), diventa solida `--navy-deep` con leggera box-shadow.
- **Mobile:** Hamburger menu a destra, logo a sinistra. Menu apre overlay full-screen con sfondo navy-deep.
- **CTA "Prenota Ora":** Bottone coral-red, sempre visibile anche su mobile (nella navbar).

**Menu Destinazioni (dropdown on hover/click):**
- Grecia (Mykonos, Santorini, Zante, Creta, Ios, Corfù, Rodi)
- Spagna (Ibiza, Barcellona, Maiorca, Tenerife)
- Croazia (Spalato, Hvar, Dubrovnik)
- Messico (Cancún, Playa del Carmen, Tulum)
- Caraibi (Punta Cana, Cuba)

---

### SEZIONE 2 — Hero (Full Viewport)

**Struttura Evaneos:** Immagine full-screen di sfondo, titolo grande centrato, sottotitolo, barra di ricerca con input "Dove vuoi andare?" e bottone "Cerca", link secondario "Non sai ancora? Prova il nostro Trip Finder".

**Adattamento Grad Club:**

```
[Immagine/Video full-screen: gruppo di neolaureati in barca al tramonto, estetica film photography]

                    Titolo:  "Il viaggio di laurea che ricorderai per sempre"
                 Sottotitolo: "Esperienze esclusive per neolaureati nelle destinazioni più iconiche del Mediterraneo e oltre"

                 [🔍 Dove vuoi festeggiare la tua laurea?  |  Cerca  ]

                 Non sai ancora dove andare? Scopri la destinazione perfetta per te →
```

- **Background:** Immagine statica con leggero overlay gradient (dal basso, rgba(0,0,0,0.4)) OPPURE video loop muted di 10-15 secondi (scegliere la versione più performante).
- **Search bar:** Input con placeholder "Dove vuoi festeggiare la tua laurea?", bordo arrotondato (50px), sfondo bianco semi-trasparente, bottone "Cerca" integrato a destra con sfondo coral-red.
- **Al click sulla search bar:** Dropdown con destinazioni principali raggruppate per area (Grecia, Spagna, Croazia, Messico, Caraibi).
- **Link secondario:** Testo piccolo sotto la search bar, link a sezione "Come Funziona" o quiz destinazione.
- **Altezza:** 100dvh (dynamic viewport height per mobile).
- **Animazioni:** Titolo fade-in dal basso (delay 0.2s), sottotitolo (delay 0.4s), search bar (delay 0.6s).

**Immagini placeholder da usare:** Unsplash search "graduation trip beach sunset friends boat mediterranean". Usare immagini con estetica calda, golden hour, toni analog/film.

---

### SEZIONE 3 — Value Proposition Statement

**Struttura Evaneos:** Breve frase centrata che sintetizza la visione: "La nostra visione del viaggio? Più locale, più sostenibile, e interamente su misura per te."

**Adattamento Grad Club:**

```
Background: --cream-white
Padding: 80px verticale

"La nostra visione del viaggio di laurea? 
Esclusivo, curato nei dettagli, e pensato per celebrare il tuo traguardo."
```

- Font: var(--text-h2), font-weight medium, colore navy-deep, text-align center, max-width 800px, margin auto.
- Sotto la frase, opzionale: piccola linea decorativa (4px wide, 60px, colore coral-red).

---

### SEZIONE 4 — Agenzie Locali / Il Nostro Team

**Struttura Evaneos:** Card grande con numero "2.000 agenzie locali nel mondo", descrizione, immagine di un agente locale, link "Scopri di più sui nostri agenti".

**Adattamento Grad Club:**

```
Layout: 2 colonne (testo sx, immagine dx) — come Evaneos

Colonna Sinistra:
  Badge:        "Il tuo team sul posto"
  Titolo:       "Un concierge dedicato in ogni destinazione"
  Descrizione:  "Non sarai mai solo. Per ogni viaggio Grad Club, avrai un travel designer 
                 che conosce la destinazione come le sue tasche. Ti consiglia i posti giusti, 
                 organizza tutto nei minimi dettagli e ti assiste 24/7 durante il viaggio."
  CTA:          "Scopri come funziona →"

Colonna Destra:
  Immagine:     Foto di un giovane travel designer/coordinatore in una destinazione esotica,
                estetica film photography, sorridente, con landscape dietro.
  Bordi:        border-radius 16px
```

---

### SEZIONE 5 — Itinerari / Tipologie di Viaggio (Carousel Orizzontale)

**Struttura Evaneos:** Titolo "8.000 itinerari da sfogliare e personalizzare", sottotitolo, griglia/carousel di card con categorie (Trekking, Cultura, Safari, Road Trip, ecc.). Ogni card ha immagine, titolo categoria, breve descrizione. Scroll orizzontale su mobile.

**Adattamento Grad Club:**

```
Background: --off-white
Titolo:     "Scegli la tua esperienza"
Sottotitolo: "Ogni viaggio è diverso. Trova lo stile che fa per te."
CTA:         "Esplora tutte le esperienze →"

Cards (carousel orizzontale, 4 visibili su desktop, 1.5 su mobile):

1. 🏖️ Beach & Party
   "Spiagge iconiche e vita notturna"
   Immagine: beach club al tramonto

2. 🛥️ Boat & Island Hopping  
   "Esplora isole e coste in barca"
   Immagine: gruppo su barca tra le isole greche

3. 🏛️ Culture & City Break
   "Scopri la storia tra cocktail e rooftop"
   Immagine: rooftop bar con vista su città storica

4. 🌅 All-Inclusive Resort
   "Relax totale, zero pensieri"
   Immagine: resort con piscina infinity

5. 🎉 Festival & Events
   "Vivi i festival più esclusivi d'Europa"
   Immagine: festival estivo/evento con folla

6. 🏔️ Adventure & Nature
   "Per chi vuole qualcosa di diverso"
   Immagine: escursione con panorama mozzafiato

7. 💑 Coppie & Romantic
   "Il viaggio perfetto in due"
   Immagine: coppia al tramonto

8. 👥 Gruppi Grandi (10+)
   "Organizza il viaggio per tutta la comitiva"
   Immagine: grande gruppo che festeggia
```

- **Card design:** Immagine verticale (aspect-ratio 4/5), titolo bold sotto, descrizione piccola. Hover: leggero zoom immagine (scale 1.05) con overlay gradient.
- **Carousel:** Scroll orizzontale con snap-points. Frecce di navigazione sui lati (desktop). Scrollbar nascosta.
- **Transizione:** Cards appaiono con stagger animation (fade-in + translateY) al primo scroll.

---

### SEZIONE 6 — Social Proof / Recensioni

**Struttura Evaneos:** Titolo "800.000 viaggiatori e un tasso di soddisfazione del 97%", rating Trustpilot (4.7/5), carousel di card recensioni con foto del viaggio, citazione, nome del viaggiatore, destinazione.

**Adattamento Grad Club:**

```
Background: --cream-white

Badge:       "⭐ 4.9/5 su 500+ recensioni"
Titolo:      "Il viaggio di laurea che tutti ricordano"
Sottotitolo: "Più di 2.000 neolaureati hanno già scelto The Grad Club"

Card Recensione Featured (grande, a sinistra):
  Immagine:    Foto del viaggio (landscape, grande)
  Citazione:   "La settimana più bella della mia vita. Tutto organizzato alla perfezione, 
                non avremmo potuto chiedere di meglio."
  Nome:        "Sofia M. — Mykonos, Luglio 2024"
  CTA:         "Leggi la storia completa →"

Cards Laterali (griglia 2x2 o carousel):
  Card 1: Foto + "Esperienza incredibile" — Marco e 8 amici, Cancún
  Card 2: Foto + "Un viaggio indimenticabile" — Giulia, Ibiza con il suo gruppo
  Card 3: Foto + "Superato ogni aspettativa" — Luca e Alessia, Punta Cana
  Card 4: Foto + "Il modo migliore di festeggiare" — Gruppo di 15, Zante
```

- **Layout:** Esattamente come Evaneos — card featured grande a sinistra, grid/carousel più piccolo a destra.
- **Ogni card:** border-radius 16px, immagine con overlay leggero, citazione in corsivo (Playfair Display), nome in font-medium.

---

### SEZIONE 7 — I Vantaggi (4 Colonne Icone)

**Struttura Evaneos:** 4 colonne con icona + titolo + breve descrizione: "Esperti locali", "100% su misura", "Prezzo senza intermediari", "Le nostre garanzie".

**Adattamento Grad Club:**

```
Background: --navy-deep (testo bianco)
Layout: 4 colonne affiancate, centrate

1. 🎯 Esperienze Curate
   "Ogni viaggio è progettato nei minimi dettagli da chi conosce la destinazione"

2. 🔒 Prenota Senza Pensieri
   "Pagamenti sicuri, assistenza 24/7 e garanzia soddisfatti o rimborsati"

3. 💰 Prezzo Trasparente
   "Nessun costo nascosto. Tutto incluso nel prezzo che vedi"

4. 👥 Community Esclusiva
   "Viaggia con persone come te, colleghi di università e futuri professionisti"
```

- **Icone:** SVG minimaliste, colore sunflower-yellow su sfondo navy.
- **Card:** Nessun bordo, solo icona (48x48), titolo (font-bold, bianco), descrizione (font-regular, rgba bianco 0.8).
- **Responsive:** 4 colonne → 2x2 su tablet → stack verticale su mobile.

---

### SEZIONE 8 — Destinazioni Trending / "Cosa c'è di nuovo"

**Struttura Evaneos:** Titolo "What's trending at Evaneos", grid asimmetrica con: 1 card grande (destinazione del momento), 3 card medie con articoli/guide di viaggio. Ogni card ha immagine, tag (es. "Travel Guide"), titolo, descrizione, CTA "Scopri di più".

**Adattamento Grad Club:**

```
Background: --off-white
Titolo:      "Le destinazioni del momento"

Card Grande (50% width):
  Tag:         "⭐ La nostra scelta"
  Immagine:    Mykonos — vista panoramica con mulini
  Titolo:      "Mykonos"
  Sottotitolo: "La destinazione più richiesta dell'estate 2025"
  CTA:         "Scopri i pacchetti →"

Card Media 1:
  Tag:         "Novità 2025"
  Immagine:    Cancún/Riviera Maya
  Titolo:      "Cancún & Riviera Maya"
  Descrizione: "Il nuovo pacchetto all-inclusive con escursione a Tulum e Isla Mujeres"
  CTA:         "Scopri di più →"

Card Media 2:
  Tag:         "Guida"
  Immagine:    Ibiza
  Titolo:      "Ibiza: non solo party"
  Descrizione: "Beach club, tramonti e cala segrete. La guida definitiva per neolaureati."
  CTA:         "Leggi la guida →"

Card Media 3:
  Tag:         "Gruppo"
  Immagine:    Zante/Grecia
  Titolo:      "Viaggi di gruppo in Grecia"
  Descrizione: "Come organizzare il viaggio di laurea perfetto per 10+ persone."
  CTA:         "Scopri di più →"
```

- **Layout:** CSS Grid — card grande occupa 1 colonna larga, 3 card medie occupano 1 colonna stretta impilate. Su mobile: tutte full-width in stack.
- **Card grande:** Immagine di sfondo con overlay gradient + testo bianco posizionato in basso a sinistra. Min-height 500px.
- **Card medie:** Layout orizzontale (immagine sx, testo dx). Border-radius 16px. Hover translateX(4px).

---

### SEZIONE 9 — Sezione "Come Funziona" (ripetizione agenti locali di Evaneos)

**Struttura Evaneos:** In fondo, prima della newsletter, Evaneos ripete il concetto "2.000 agenzie locali nel mondo" con breve testo e logo.

**Adattamento Grad Club:**

```
Background: --cream-white
Layout: centrato, max-width 700px

Titolo:      "Come funziona The Grad Club"

Step 1: "📍 Scegli la destinazione"
        "Esplora le nostre mete e trova quella perfetta per il tuo gruppo"

Step 2: "✏️ Personalizza il viaggio"  
        "Il tuo travel designer crea l'itinerario su misura per te"

Step 3: "💳 Prenota in sicurezza"
        "Pagamento rateizzabile, conferma immediata, zero stress"

Step 4: "🎉 Parti e goditi ogni momento"
        "Assistenza 24/7 e un coordinatore sempre presente"
```

- **Layout:** Timeline verticale con linea connettrice, numeri/icone a sinistra, testo a destra. Animazione: ogni step appare al scroll.

---

### SEZIONE 10 — Newsletter / CTA Finale

**Struttura Evaneos:** Banner con sfondo, titolo "Continua a viaggiare tutto l'anno!", sottotitolo invito a iscriversi alla newsletter, input email + bottone "Iscriviti".

**Adattamento Grad Club:**

```
Background: --navy-deep con pattern geometrico sottile o texture grain
Layout: centrato

Titolo:      "Non perderti le offerte esclusive"
Sottotitolo: "Iscriviti alla lista d'attesa e ricevi per primo le promozioni early bird 
              e i posti limitati per le destinazioni più richieste."

[📧 La tua email universitaria  |  Iscriviti →]

Nota piccola: "Unisciti a 3.000+ studenti. Niente spam, solo offerte che contano."
```

- **Input:** Largo, bordi arrotondati (50px), sfondo bianco, bottone integrato coral-red.
- **Sotto:** Loghi università partner (se disponibili) o icone social.

---

### SEZIONE 11 — Footer

**Struttura Evaneos:** Multi-colonna: Lingue, "Chi siamo" (Team, Legal, Cookie, T&C, Privacy, Sitemap), "Comunicazione" (Magazine, Partnership, Press), "Contatti" (Carriere, Diventa partner). Badge B-Corp, ASTA, Frommer's. Copyright.

**Adattamento Grad Club:**

```
Background: --navy-deep (o --burgundy-dark), testo bianco/grigio chiaro

Colonna 1 — The Grad Club
  Logo (versione bianca)
  "Il viaggio di laurea che ricorderai per sempre"
  Social icons: Instagram, TikTok, LinkedIn

Colonna 2 — Destinazioni
  Grecia, Spagna, Croazia, Messico, Caraibi

Colonna 3 — Informazioni
  Come Funziona, Chi Siamo, FAQ, Blog/Magazine

Colonna 4 — Legal & Contatti
  Termini e Condizioni, Privacy Policy, Cookie Policy
  info@thegradclub.com
  +39 XXX XXX XXXX

--- Divider ---

"© 2025 The Grad Club — Parte del gruppo Iugo. Tutti i diritti riservati."
```

---

## Comportamenti e Interazioni

### Scroll Animations
- Tutte le sezioni: fade-in + translateY(30px) → translateY(0) al primo ingresso nel viewport (Intersection Observer, threshold 0.15).
- Cards: stagger animation con delay incrementale (0.1s per card).
- Numeri/statistiche: count-up animation al primo ingresso.

### Navbar
- Stato iniziale: `position: fixed`, `background: transparent`, testo bianco.
- Dopo scroll >80px: `background: var(--navy-deep)`, `box-shadow: 0 2px 20px rgba(0,0,0,0.15)`, transizione 0.4s.
- Mobile: hamburger → overlay full-screen.

### Search Bar (Hero)
- Focus: espande leggermente, border-color coral-red, dropdown con destinazioni.
- Dropdown: raggruppato per area geografica, ogni destinazione ha mini-thumbnail e prezzo "da €XXX".

### Carousel (Sezione 5 e 6)
- Desktop: frecce laterali, 4 card visibili.
- Mobile: scroll orizzontale con snap, 1.2 card visibili (peek della successiva).
- Dots indicator sotto.

### Hover Effects
- Card: `transform: translateY(-4px)`, `box-shadow` più pronunciata.
- Bottoni: `transform: scale(1.02)`, leggero glow.
- Link: underline animation da sinistra.
- Immagini nelle card: `scale(1.05)` con `overflow: hidden` sul container.

---

## Responsive Breakpoints

```css
/* Mobile first */
@media (min-width: 640px)  { /* sm — tablet portrait */ }
@media (min-width: 768px)  { /* md — tablet landscape */ }
@media (min-width: 1024px) { /* lg — desktop */ }
@media (min-width: 1280px) { /* xl — large desktop */ }
@media (min-width: 1536px) { /* 2xl — ultrawide */ }
```

- **Mobile (< 640px):** Stack verticale tutto, hero 100dvh, search bar full-width, cards a 1 colonna, footer 1 colonna.
- **Tablet (640-1024px):** Grid a 2 colonne dove possibile, carousel mostra 2.5 card.
- **Desktop (> 1024px):** Layout completo come Evaneos, max-width container 1280px centrato.

---

## Performance

- **Immagini:** WebP con fallback, lazy loading (`loading="lazy"`), `srcset` per responsive.
- **Font:** `font-display: swap`, preconnect a Google Fonts.
- **Above-the-fold:** Hero image preloaded, critical CSS inline.
- **Target:** Lighthouse 90+ su Performance, 100 Accessibility.

---

## Immagini Placeholder

Per la build iniziale, usare immagini da **Unsplash** con questi search terms:
- Hero: `graduation friends beach sunset boat mediterranean`
- Destinazioni: `mykonos greece`, `cancun mexico beach`, `ibiza sunset`, `croatia coast boat`
- Esperienze: `beach club party`, `island hopping boat`, `rooftop bar city`, `resort pool infinity`
- Recensioni: `group friends travel celebration`
- Team: `young travel coordinator beach`

Formato: tutte le immagini devono avere aspect-ratio coerente (hero 16/9, card destinazione 4/5, card esperienza 3/2, recensione 1/1 o 3/2).

---

## Copy Tone of Voice

- **Lingua:** Italiano
- **Tono:** Aspirazionale ma accessibile. Non turistico/commerciale. Più lifestyle/community.
- **Evitare:** "Offerta imperdibile", "Last minute", "Solo per oggi", linguaggio da agenzia tradizionale.
- **Preferire:** "Esperienze curate", "Il viaggio che ricorderai", "Pensato per te", "Community esclusiva".
- **Target:** Parlare a un 23enne bocconiano che va a Porto Cervo d'estate. Tono da amico che ti consiglia, non da venditore.

---

## Note per Claude Code

1. **PRIORITÀ #1:** La struttura deve essere identica a evaneos.it. Apri il sito, ispezionalo, e replica sezione per sezione nell'ordine esatto descritto sopra.
2. Il design system è definito sopra — usalo rigorosamente per colori, font e spacing.
3. Tutte le immagini sono placeholder. Usa `https://images.unsplash.com/` con query parameters appropriati.
4. Il sito deve funzionare perfettamente su mobile (iPhone 14 Pro come reference device).
5. La navbar deve avere il comportamento di cambio colore allo scroll esattamente come Evaneos.
6. Il carousel deve funzionare con touch/swipe su mobile.
7. Includi meta tags Open Graph e favicon placeholder.
8. Il codice deve essere pulito, commentato, e facilmente modificabile per future iterazioni.