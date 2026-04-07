import logoZeus from '../assets/logo-zeus.png';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <img src={logoZeus.src} alt="Logo ZEUS Piscinas" className="h-10 w-10 object-contain opacity-90" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-aqua">ZEUS Piscinas</p>
              <p className="text-xs text-slate-500">Ciudad Juárez, Chihuahua</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 lg:items-start">
            <a href="https://wa.me/526566452656" target="_blank" rel="noreferrer" className="text-sm text-slate-500 transition hover:text-emerald-400">+52 656 645 2656</a>
            <a href="mailto:ZeusAlbercas@gmail.com" className="text-sm text-slate-500 transition hover:text-brand-aqua">ZeusAlbercas@gmail.com</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com/zeuspiscinas" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-slate-500 transition hover:text-[#1877F2]">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
            </a>
            <a href="https://instagram.com/zeuspiscinas" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-slate-500 transition hover:text-[#E1306C]">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="https://tiktok.com/@zeuspiscinas" target="_blank" rel="noreferrer" aria-label="TikTok" className="text-slate-500 transition hover:text-white">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg>
            </a>
          </div>
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} ZEUS Piscinas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
