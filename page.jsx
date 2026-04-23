export default function MHFragranceShop() {
  const products = [
    {
      id: 1,
      name: "Spirit of the Ocean",
      price: "29 €",
      description:
        "Maritime Textur, maskuline Tiefe und ein Duftbild zwischen Küste, Holz und Ruhe.",
    },
    {
      id: 2,
      name: "Ocean Trial Set",
      price: "12 €",
      description:
        "Für Erstkäufer: testen, fühlen, tragen.",
    },
    {
      id: 3,
      name: "Founder Edition",
      price: "49 €",
      description:
        "Limitierte Edition für frühe Käufer.",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* HERO */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-white/50">
          MH Fragrance
        </p>
        <h1 className="mt-6 text-5xl font-semibold leading-tight">
          Spirit of the Ocean
        </h1>
        <p className="mt-6 text-lg text-white/70">
          Salz. Duft. Präsenz. Ein Produkt, das wirkt – nicht erklärt.
        </p>
        <button className="mt-10 rounded-full bg-white px-8 py-3 text-black text-sm font-medium">
          Jetzt kaufen
        </button>
      </section>

      {/* PRODUCT */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
          <div className="mb-6 h-64 rounded-xl bg-gradient-to-b from-neutral-800 to-neutral-950" />
          <h2 className="text-3xl font-semibold">Spirit of the Ocean</h2>
          <p className="mt-4 text-white/70">
            Struktur für dein Haar. Duft für deine Präsenz.
          </p>
          <p className="mt-6 text-2xl font-semibold">29 €</p>
          <button className="mt-6 rounded-full bg-white px-6 py-3 text-black text-sm">
            Kaufen
          </button>
        </div>
      </section>

      {/* MORE PRODUCTS */}
      <section className="mx-auto max-w-4xl px-6 py-16 space-y-10">
        {products.slice(1).map((product) => (
          <div
            key={product.id}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
          >
            <div className="mb-4 h-40 rounded-lg bg-gradient-to-b from-neutral-800 to-neutral-950" />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="mt-2 text-white/70">{product.description}</p>
            <p className="mt-4 font-semibold">{product.price}</p>
            <button className="mt-4 rounded-full bg-white px-5 py-2 text-black text-sm">
              Kaufen
            </button>
          </div>
        ))}
      </section>

      {/* STORY */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold">Keine Ablenkung</h2>
        <p className="mt-6 text-white/70 leading-8">
          Kein Menü. Keine Klicks. Nur Scrollen. Der Kunde sieht das Produkt,
          versteht es und kauft.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24 text-center">
        <button className="rounded-full bg-white px-8 py-4 text-black text-sm font-medium">
          Jetzt kaufen
        </button>
      </section>
    </div>
  );
}
