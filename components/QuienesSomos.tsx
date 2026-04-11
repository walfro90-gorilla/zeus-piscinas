export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="border-y border-white/10 bg-white/3 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-aqua">Quiénes somos</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Nuestra misión y visión.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
            <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-aqua to-brand-gold" />
            <h3 className="text-xl font-semibold text-white">Misión</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Construir, remodelar y mantener piscinas con los más altos estándares de calidad, ofreciendo atención personalizada a cada cliente. Nos comprometemos a transformar espacios con soluciones innovadoras, transparencia y un servicio que supera expectativas.
            </p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
            <div className="mb-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-gold to-brand-aqua" />
            <h3 className="text-xl font-semibold text-white">Visión</h3>
            <p className="mt-3 leading-7 text-slate-300">
              Ser la empresa líder en construcción y mantenimiento de piscinas en Ciudad Juárez, reconocida por la excelencia en cada proyecto, la confianza de nuestros clientes y la innovación constante en soluciones acuáticas y de climatización.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
