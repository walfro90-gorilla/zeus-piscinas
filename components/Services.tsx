const services = [
  { title: 'Construcción de piscinas de lujo', description: 'Proyecto completo desde el concepto hasta la entrega final, con enfoque en estética, durabilidad y funcionalidad.' },
  { title: 'Mantenimiento profesional', description: 'Limpieza, balance químico, revisión de equipos y conservación para mantener el agua cristalina todo el año.' },
  { title: 'Remodelación y modernización', description: 'Actualizamos piscinas existentes con acabados premium, iluminación, sistemas eficientes y detalles de alto impacto.' },
  { title: 'Tecnología y automatización', description: 'Integración de sistemas inteligentes para control de filtración, iluminación y operación más eficiente.' },
];

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-aqua">Servicios</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Soluciones premium para piscinas que exigen nivel ejecutivo.</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
            <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-aqua to-brand-gold" />
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 leading-7 text-slate-300">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
