export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>ZEUS Piscinas · Ciudad Juárez, Chihuahua</p>
        <p>Contacto profesional para construcción y mantenimiento de piscinas de lujo.</p>
        <p>© {new Date().getFullYear()} ZEUS Piscinas. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
