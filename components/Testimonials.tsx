const testimonials = [
  { name: 'Ing. Ricardo Salazar', role: 'Residencial en Campestre', quote: 'ZEUS Piscinas entregó una remodelación impecable. El nivel de detalle y la comunicación técnica fueron excelentes.' },
  { name: 'Mariana Torres', role: 'Propietaria de casa premium', quote: 'Nuestro mantenimiento mensual mejoró muchísimo. El agua se mantiene cristalina y el equipo siempre responde a tiempo.' },
  { name: 'Carlos Méndez', role: 'Desarrollo residencial', quote: 'Trabajar con ZEUS fue sinónimo de orden, tecnología y acabados de alto nivel. Totalmente recomendados.' },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-aqua">Testimonios</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">La confianza se construye con resultados visibles.</h2>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote key={testimonial.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-lg leading-8 text-slate-200">“{testimonial.quote}”</p>
            <footer className="mt-6">
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="text-sm text-slate-400">{testimonial.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
