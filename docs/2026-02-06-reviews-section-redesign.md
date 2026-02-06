# Redesign ReviewsSection — Stile Evaneos

**Data:** 2026-02-06

## Cosa viene implementato

Ridisegno completo della sezione ReviewsSection per replicare la struttura di Evaneos.it:

1. **Header centrato** con titolo grande bold e badge Trustpilot (stelle verdi + TrustScore)
2. **Sottotitolo** "I ricordi dei nostri viaggiatori" allineato a sinistra con border-bottom
3. **Carousel orizzontale** di review card (scroll con snap), ogni card composta da:
   - Colonna sinistra: nome (bold), testo della recensione, tag in basso (destinazione + tipo viaggio)
   - Colonna destra: foto verticale/portrait
   - Su desktop: ~2.5 card visibili (peek effect)
   - Su mobile: 1 card visibile con peek

## Come viene implementato

### Approccio tecnico
- Il componente rimane `"use client"` (serve useRef per lo scroll del carousel)
- Riuso della classe `.scrollbar-hide` gia presente in globals.css
- Scroll orizzontale con `snap-x snap-mandatory` (stesso pattern di ExperienceCarousel)
- Freccia di navigazione a destra per indicare lo scroll
- Rispetto del design system luxury minimal: no rounded corners, no shadows, border-gray per i bordi

### Struttura della card
```
+----------------------------------------------+
|  Nome (bold)                  |               |
|                               |   Foto        |
|  Testo recensione             |   (portrait)  |
|  (medium-gray)                |               |
|                               |               |
|  [TAG DEST]  [TAG TIPO]      |               |
+----------------------------------------------+
```

- Card: `border border-border-gray`, no rounded, no shadow
- Tags: outlined, uppercase, piccoli
- Immagine: aspect portrait, oggetto cover

### Layout
- Header: centrato, `font-display` per il titolo principale
- Trustpilot: stelle verdi (#00B67A) simulate con CSS (no libreria esterna)
- Sottotitolo: allineato a sinistra, `border-b border-border-gray pb-4`
- Carousel: `overflow-x-auto snap-x`, card width `calc()` responsive

## File modificati
- `components/ReviewsSection.tsx` — riscrittura completa

## File creati
- Nessuno

## Dipendenze
- Nessuna nuova dipendenza

---

## Implementazione Completata

**Data completamento:** 2026-02-06
**Stato:** Completato

### File modificati
- `components/ReviewsSection.tsx` — riscrittura completa del componente

### File creati
- Nessuno

### Funzionalita implementate
- **Header centrato** con titolo bold in Playfair Display + badge Trustpilot (stella verde + 5 stelle + TrustScore 4.9)
- **Sottotitolo** "I ricordi dei nostri viaggiatori" con border-bottom e parola chiave in Playfair italic
- **Carousel orizzontale** con 5 review card, scroll snap, scrollbar nascosta
- **Card layout**: testo (nome, recensione, tag) a sinistra + foto portrait a destra, border sottile
- **Tag outlined** uppercase per destinazione e tipo viaggio
- **Freccia di navigazione** su desktop (hidden su mobile, scroll nativo touch)
- Componente convertito a `"use client"` per useRef (scroll programmatico)
- **Responsive**: 1 card su mobile, 2 su tablet, ~2.5 su desktop (peek effect)

### Verifica
- Build: compilato con successo in 3.5s, 4 pagine statiche generate
- TypeScript: nessun errore
- Nessuna dipendenza aggiunta

### Metriche
- 1 componente riscritto (173 righe)
- 1 sub-componente interno (TrustpilotStars)
- 5 recensioni con dati completi

### Note tecniche
- Stelle Trustpilot simulate con SVG inline + bg #00B67A (nessuna libreria esterna)
- Card width responsive via `calc()`: 100%-1rem (mobile), 50%-0.75rem (sm), 40%-0.75rem (lg)
- Scroll arrow posizionato con absolute + translate per overflow oltre il container

### Possibili miglioramenti futuri
- Integrazione con API Trustpilot reale per recensioni dinamiche
- Aggiunta freccia sinistra quando lo scroll non e all'inizio
- Dots indicator sotto il carousel
