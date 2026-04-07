import g1 from '../assets/gallery/g1.jpeg';
import g2 from '../assets/gallery/g2.jpeg';
import g3 from '../assets/gallery/g3.jpeg';
import g4 from '../assets/gallery/g4.jpeg';

const items = [
  { img: g1, label: 'Diseño arquitectónico de alto impacto' },
  { img: g2, label: 'Acabados premium y detalles dorados' },
  { img: g3, label: 'Iluminación ambiental para noches exclusivas' },
  { img: g4, label: 'Mantenimiento técnico con estándares profesionales' },
];

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
            <div key={item.label} className="rounded-3xl border border-white/10 bg-brand-blue/40 overflow-hidden">
              <img src={item.img.src} alt={item.label} className="h-48 w-full object-cover" />
              <p className="p-5 text-lg font-semibold text-white">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
