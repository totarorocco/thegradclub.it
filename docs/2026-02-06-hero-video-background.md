# Hero Video Background

**Data:** 2026-02-06
**Stato:** Implementazione Completata (2026-02-06)

## Obiettivo

Sostituire l'immagine statica nella Hero con un video di sfondo, senza compromettere le performance di caricamento.

## Problema

Il video originale e 23MB (1920x1080, 30fps) — troppo pesante per un background web. Serve:
1. Comprimere il video
2. Caricarlo in modo non-bloccante

## Strategia Performance

### 1. Compressione video con ffmpeg
- Ridurre a 720p (sufficiente per un background con overlay scuro sopra)
- CRF 28-30 (qualita ridotta ma accettabile con overlay)
- 24fps invece di 30fps
- Rimuovere traccia audio (e un background muto)
- Target: **2-4MB** invece di 23MB

**Richiede installazione ffmpeg:** `brew install ffmpeg`

### 2. Caricamento lazy del video
- Mantenere `hero.jpg` come **poster/fallback** — mostrato subito
- Video con `preload="none"` — non scaricato finche non serve
- Caricare il video solo dopo che la pagina e montata (useEffect)
- Transizione fluida: immagine → video con fade

### 3. Implementazione nel componente Hero
- Background: immagine statica hero.jpg (caricamento immediato)
- Sopra: `<video>` nascosto che parte dopo il mount
- Attributi video: `muted autoPlay loop playsInline`
- Quando il video e pronto (`onCanPlay`), fade-in del video sopra l'immagine
- Su mobile potrebbe non autoplay — il fallback immagine resta visibile

## File Modificati
- `public/hero-bg.mp4` — video compresso (nuovo, 3.7MB da 23MB originale)
- `public/hero.jpg` — mantenuto come poster/fallback
- `components/Hero.tsx` — aggiunto elemento video con lazy loading

## Risultati Compressione
- Originale: 23MB, 1920x1080, 30fps, 34s
- Compresso: 3.7MB, 1280x720, 24fps, 34s (-84%)
- Parametri ffmpeg: CRF 30, preset slow, no audio, movflags +faststart
