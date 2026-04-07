const items = ['Diseño arquitectónico de alto impacto', 'Acabados premium y detalles dorados', 'Iluminación ambiental para noches exclusivas', 'Mantenimiento técnico con estándares profesionales'];

export default function Gallery() {
  return (
    <section id="galeria" className="border-y border-white/10 bg-white/3 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">Galería</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Una presencia visual que comunica confianza, lujo y precisión.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div key={item} className="rounded-3xl border border-white/10 bg-brand-blue/40 p-6">
              <div className="mb-6 h-40 rounded-2xl bg-gradient-to-br from-brand-aqua/30 via-white/5 to-brand-gold/20" />
              <p className="text-lg font-semibold text-white">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
