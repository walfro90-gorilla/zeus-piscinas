const WHATSAPP_URL = 'https://wa.me/526561234567?text=Hola%20ZEUS%20Piscinas%2C%20quiero%20cotizar%20mi%20proyecto.';
const MESSENGER_URL = 'https://m.me/zeuspiscinas';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(250,204,21,0.12),_transparent_35%)]" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
            Piscinas de lujo en Ciudad Juárez
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Construimos experiencias acuáticas que elevan tu propiedad.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Diseño, construcción, remodelación y mantenimiento profesional con estética premium,
            ingeniería precisa y atención inmediata por WhatsApp o Messenger.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
            >
              Cotizar por WhatsApp
            </a>
            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Escribir por Messenger
            </a>
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href={MESSENGER_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir Messenger"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-lg shadow-blue-500/30 transition hover:scale-105"
        >
          <span className="text-xl font-black">M</span>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/30 transition hover:scale-105"
        >
          <span className="text-xl font-black">W</span>
        </a>
      </div>
    </section>
  );
}
