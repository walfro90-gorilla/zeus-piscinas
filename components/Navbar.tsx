import logoZeus from '../assets/logo-zeus.png';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-slate/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logoZeus.src} alt="Logo ZEUS Piscinas" className="h-11 w-11 object-contain" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-aqua">ZEUS Piscinas</p>
            <p className="text-xs text-slate-300">Construcción y mantenimiento premium</p>
          </div>
        </a>
        <nav className="hidden gap-8 text-sm text-slate-200 md:flex">
          <a href="#servicios" className="transition hover:text-brand-aqua">Servicios</a>
          <a href="#galeria" className="transition hover:text-brand-aqua">Galería</a>
          <a href="#testimonios" className="transition hover:text-brand-aqua">Testimonios</a>
          <a href="#contacto" className="transition hover:text-brand-aqua">Contacto</a>
        </nav>
        <a href="#contacto" className="rounded-full border border-brand-gold/40 px-4 py-2 text-sm font-semibold text-brand-gold transition hover:bg-brand-gold hover:text-brand-slate">Cotizar ahora</a>
      </div>
    </header>
  );
}
