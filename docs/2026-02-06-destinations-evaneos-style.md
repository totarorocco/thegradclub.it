# Redesign Sezione Destinazioni — Stile Evaneos

**Data:** 2026-02-06
**Stato:** Implementazione Completata (2026-02-06)

## Obiettivo

Sostituire la sezione TrendingDestinations attuale con una nuova sezione ispirata a Evaneos:
- Titolo "Viaggia oltre i luoghi comuni" + payoff adattato a TGC
- 3 tab: "I nostri preferiti", "Viaggi in estate", "Viaggi di Pasqua"
- Carousel orizzontale con effetto expand on hover
- Nomi destinazioni in font Chicle

## Destinazioni (stesse per tutti i tab)
- Mexico
- Repubblica Dominicana
- Vietnam
- Indonesia
- Grecia

## Implementazione

### Componente: TrendingDestinations.tsx (riscrittura completa)
- `"use client"` — serve per stato tab, hover, scroll ref
- **Header**: titolo centrato con "luoghi comuni" in Chicle + payoff adattato
- **Tabs**: 3 pulsanti con stile active (bordo/bg) e inactive
- **Carousel**: flex container con cards a altezza fissa (~400px)
  - Default: tutte le card stessa larghezza
  - Hover: card hovered si espande (flex-grow animato), le altre si restringono
  - Ogni card: immagine di sfondo, nome destinazione sotto in Chicle
- **Freccia scroll**: bottone per scorrere a destra

### Animazione Expand
- Usare CSS `flex` con `transition` per l'espansione fluida
- Card default: `flex: 1`
- Card hovered: `flex: 2.5` (o simile)
- Transizione: ~500ms ease

## File Modificati
- `components/TrendingDestinations.tsx` — riscrittura completa
