# Redesign "Come funziona" — Stacking Cards con Background Immagine

**Data:** 2026-02-06

## Cosa viene implementato

Sostituzione della sezione "Come funziona" con un layout a card impilabili (stacking cards) su sfondo immagine con effetto noise vintage, ispirato alla sezione "Evaneos, come funziona?" del reference.

## Struttura

### Background
- Immagine panoramica full-width (Unsplash, montagna/lago) con `position: sticky; top: 0`
- Overlay noise vintage (classe `.film-noise` esistente)
- Overlay scuro semi-trasparente per leggibilità
- Titolo centrato: "The Grad Club, come funziona?"

### Card impilabili
- 4 card bianche con `position: sticky` e valori `top` crescenti
- Man mano che si scrolla, ogni card sale e si sovrappone alla precedente
- Ogni card: numero (sinistra) + titolo + descrizione + immagine (destra)
- Box shadow leggera per effetto profondità tra card sovrapposte

### I 4 Step
1. **Scegli la destinazione** — Esplora le nostre mete e trova quella perfetta per il tuo gruppo
2. **Personalizza il viaggio** — Il tuo travel designer crea l'itinerario su misura per te
3. **Prenota in sicurezza** — Pagamento rateizzabile, conferma immediata, zero stress
4. **Parti e goditi ogni momento** — Assistenza 24/7 e un coordinatore sempre presente

## Approccio tecnico

- Pure CSS con `position: sticky` — nessun JS necessario (server component)
- Ogni card ha `margin-bottom` sufficiente per creare spazio di scroll
- `top` incrementale: 80px, 120px, 160px, 200px
- Shadow: `shadow-xl` per profondità

## File modificati
- `components/HowItWorks.tsx` — riscrittura completa
