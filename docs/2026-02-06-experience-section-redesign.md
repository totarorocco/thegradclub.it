# Redesign Sezione Esperienze — Accordion Cards

**Data:** 2026-02-06

## Cosa viene implementato

Sostituzione dell'attuale carousel orizzontale a 8 card con un layout a 3 card in stile accordion, ispirato al design della seconda immagine di riferimento.

## Comportamento

- **Default:** tutte e 3 le card mostrano solo l'immagine e il titolo, dimensioni uguali
- **Hover (desktop):** la card su cui si passa il cursore si espande, mostrando il testo descrittivo sotto il titolo. Le altre card si restringono leggermente per far spazio
- **Touch (mobile):** tap per espandere una card, le altre si chiudono
- Le immagini hanno angoli arrotondati (come nel riferimento, `rounded-lg`)

## Le 3 Card

### 1. Dove andare nel 2026?
- **Testo:** "Vuoi partire all'avventura nel 2026? Scopri le nostre destinazioni del cuore. Che tu sogni mete lontane, fughe lontano dalla folla o avventure dietro l'angolo, c'è un viaggio perfetto che ti aspetta."
- **Immagine:** treno/viaggio (stile reference)

### 2. Viaggi di gruppo
- **Testo:** "Riunisci la tua crew e parti. Organizzare un viaggio di gruppo non è mai stato così semplice: pensano a tutto i nostri travel designer, tu porta solo la voglia di divertirti."
- **Immagine:** gruppo di amici

### 3. Viaggi a tema
- **Testo:** "Dal surf al vino, dalla musica alla cucina locale. Scegli il tema che ti appassiona e trasformalo nel viaggio della tua vita. Ogni esperienza è pensata per chi vuole qualcosa di unico."
- **Immagine:** esperienza tematica

## Approccio tecnico

### Layout
- 3 colonne su desktop con `flex` e transizione sulla larghezza (`flex-grow`/`flex-basis`)
- Card attiva: `flex: 2` (occupa ~50%), card inattive: `flex: 1` (occupa ~25% ciascuna)
- Su mobile: stack verticale, accordion-style con altezza animata
- Transizione smooth con `transition-all duration-500 ease-out`

### Struttura card
```
[Immagine rounded-lg, aspect-[4/5]]
[Titolo (sempre visibile)]
[Descrizione (visibile solo su card attiva, con animazione opacity/max-height)]
```

### Stato
- `useState` per tracciare la card attiva (null = nessuna attiva di default)
- `onMouseEnter` per attivare la card su desktop
- `onMouseLeave` sul container per resettare (nessuna attiva)
- `onClick` per toggle su touch

### Rimozione
- Rimosso l'header "Scegli la tua esperienza" e il sottotitolo (non presenti nel riferimento)
- Rimosso il CTA "Esplora tutte le esperienze"
- Rimosso lo scroll orizzontale e tutte le 8 card precedenti

## File modificati
- `components/ExperienceCarousel.tsx` — riscrittura completa

## Nessuna dipendenza aggiuntiva
