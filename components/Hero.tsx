'use client';

import { useEffect, useState } from 'react';
import hero1 from '../assets/hero.jpeg';
import g1 from '../assets/gallery/g1.jpeg';
import g2 from '../assets/gallery/g2.jpeg';
import g3 from '../assets/gallery/g3.jpeg';
import g4 from '../assets/gallery/g4.jpeg';

const slides = [hero1, g1, g2, g3, g4];

const WHATSAPP_URL = 'https://wa.me/526566452656?text=Hola%20ZEUS%20Piscinas%2C%20quiero%20cotizar%20mi%20proyecto.';
const MESSENGER_URL = 'https://m.me/61573671871897';

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">

      {/* Carousel de imágenes */}
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-30 transition-opacity duration-1000"
          style={{ opacity: i === current ? 0.3 : 0 }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(250,204,21,0.12),_transparent_35%)]" />

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
            Piscinas de lujo en Ciudad Juárez
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Construimos la piscina de tus sueños.
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
              Agenda tu cita por WhatsApp
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

          {/* Indicadores */}
          <div className="mt-8 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir a imagen ${i + 1}`}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === current ? '2rem' : '0.5rem',
                  backgroundColor: i === current ? '#3AACAC' : 'rgba(255,255,255,0.3)',
                }}
              />
            ))}
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
          {/* Logo oficial Messenger */}
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.652V24l4.088-2.242c1.092.3 2.246.464 3.443.464 6.627 0 12-4.975 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963-3.055-3.26-5.963 3.26L10.732 8l3.131 3.259L19.752 8l-6.561 6.963z"/>
          </svg>
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Abrir WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/30 transition hover:scale-105"
        >
          {/* Logo oficial WhatsApp */}
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
