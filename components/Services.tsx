const services = [
  {
    title: 'Construcción de albercas en Ciudad Juárez',
    description: 'Diseño y construcción de albercas residenciales y comerciales en Ciudad Juárez desde el concepto hasta la entrega final. Trabajamos con materiales de primera y acabados premium que elevan el valor de tu propiedad.',
  },
  {
    title: 'Mantenimiento profesional de albercas',
    description: 'Servicio de mantenimiento periódico en toda la zona de Ciudad Juárez: limpieza, balance químico, revisión de bombas y filtros. Agua cristalina y equipo en óptimas condiciones todo el año.',
  },
  {
    title: 'Remodelación de albercas en Juárez',
    description: 'Modernizamos albercas existentes en Ciudad Juárez con nuevos acabados, iluminación LED, sistemas de filtración eficientes y detalles arquitectónicos de alto impacto.',
  },
  {
    title: 'Automatización y tecnología',
    description: 'Instalación de sistemas inteligentes para el control de filtración, temperatura, iluminación y operación de tu alberca. Mayor eficiencia, menor consumo y comodidad total desde tu teléfono.',
  },
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
