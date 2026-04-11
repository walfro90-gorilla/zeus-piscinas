const services = [
  {
    title: 'Construcción de albercas en Ciudad Juárez',
    description: 'Diseño y construcción de albercas residenciales y comerciales en Ciudad Juárez desde el concepto hasta la entrega final. Trabajamos con materiales de primera y acabados premium que elevan el valor de tu propiedad.',
  },
  {
    title: 'Remodelación de obra y cascadas',
    description: 'Modernizamos albercas existentes con nuevos acabados, iluminación LED, sistemas de filtración eficientes y cascadas decorativas. Transformamos cualquier espacio acuático sin importar su antigüedad.',
  },
  {
    title: 'Mantenimiento y revisión de calderas',
    description: 'Servicio de mantenimiento periódico: limpieza, balance químico, revisión de bombas, filtros y calderas. Agua cristalina y equipo en óptimas condiciones todo el año.',
  },
  {
    title: 'Instalación de climas',
    description: 'Instalación profesional de sistemas de climatización para tu hogar o negocio. Mayor eficiencia energética, confort total y servicio técnico especializado.',
  },
  {
    title: 'Proyectos residenciales y comerciales',
    description: 'Atendemos casas, Airbnb, jardines, hoteles y comunidades. Cada proyecto recibe atención personalizada con ingeniería y acabados a la medida, porque te lo mereces.',
  },
];

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-aqua">Servicios</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Soluciones premium para cada proyecto. Mejoramos cualquier presupuesto.</h2>
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
