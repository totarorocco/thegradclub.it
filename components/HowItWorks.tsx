const steps = [
  {
    number: "1",
    title: "Scegli la destinazione",
    description:
      "Esplora le nostre mete e trova quella perfetta per il tuo gruppo. Dalle spiagge tropicali alle capitali europee, ogni destinazione è selezionata per offrirti un'esperienza indimenticabile.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&q=80",
  },
  {
    number: "2",
    title: "Personalizza il viaggio",
    description:
      "Il tuo travel designer crea l'itinerario su misura per te. Ogni dettaglio viene pensato in base ai tuoi gusti, al tuo budget e al tuo stile di viaggio.",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=700&q=80",
  },
  {
    number: "3",
    title: "Prenota in sicurezza",
    description:
      "Pagamento rateizzabile, conferma immediata, zero stress. Tutto è incluso e trasparente, senza sorprese dell'ultimo minuto.",
    image:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=700&q=80",
  },
  {
    number: "4",
    title: "Parti e goditi ogni momento",
    description:
      "Assistenza 24/7 e un coordinatore sempre presente. Dal primo giorno all'ultimo, sei in buone mani.",
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=700&q=80",
  },
];

export default function HowItWorks() {
  return (
    <section id="come-funziona" className="relative">
      {/* Sticky background image with noise overlay */}
      <div className="sticky top-0 h-screen w-full overflow-hidden -z-10">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Noise overlay */}
        <div className="absolute inset-0 film-noise" />
      </div>

      {/* Sticky title — separate layer, stays above cards */}
      <div className="sticky top-[12vh] z-30 -mt-[100vh] h-0 overflow-visible text-center px-6 pointer-events-none">
        <h2 className="text-white font-medium text-center" style={{ fontSize: "var(--text-h1)" }}>
          <em className="font-display not-italic">The Grad Club</em>, come funziona?
        </h2>
      </div>

      {/* Stacking cards */}
      <div className="relative z-20" style={{ marginTop: "55vh", paddingBottom: "10vh" }}>
        {steps.map((step, i) => (
          <div
            key={step.number}
            className="sticky px-6 md:px-12"
            style={{
              top: `${200 + i * 40}px`,
              marginBottom: i < steps.length - 1 ? "60vh" : "15vh",
            }}
          >
            <div className="max-w-[1000px] mx-auto bg-white rounded-md shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 h-[350px]">
                {/* Text side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="font-display text-4xl md:text-5xl text-light-gray leading-none mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-charcoal font-medium text-xl md:text-2xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-medium-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {/* Image side */}
                <div className="hidden md:block h-full">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
