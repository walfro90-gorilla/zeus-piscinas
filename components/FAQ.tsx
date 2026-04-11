'use client';

import { useState } from 'react';

const faqs = [
  {
    question: '¿Cuánto cuesta construir una alberca en Ciudad Juárez?',
    answer: 'El costo varía según el tamaño, diseño y acabados. Ofrecemos cotizaciones personalizadas sin costo. Contáctanos por WhatsApp al +52 656 645 2656 y te enviamos una propuesta detallada en menos de 24 horas.',
  },
  {
    question: '¿Cuánto tiempo tarda la construcción de una alberca?',
    answer: 'Una alberca residencial estándar tarda entre 4 y 8 semanas. Proyectos con diseños especiales, mayor tamaño o acabados premium pueden requerir entre 8 y 12 semanas. Te damos un cronograma exacto desde el inicio.',
  },
  {
    question: '¿Qué incluye el servicio de mantenimiento?',
    answer: 'Nuestro mantenimiento incluye: limpieza del agua y paredes, balance químico completo, revisión y servicio de bomba y filtros, aspirado de fondo, limpieza de skimmers y reporte del estado del equipo. Contamos con contratos mensuales y por visita.',
  },
  {
    question: '¿Hacen remodelaciones de albercas antiguas? ¿Qué edad puede tener mi alberca?',
    answer: 'Sí. Remodelamos albercas de cualquier antigüedad en toda Ciudad Juárez: actualizamos acabados, instalamos iluminación LED, agregamos cascadas, modernizamos sistemas de filtración y ampliamos la alberca existente. No importa la edad de tu alberca, la transformamos.',
  },
  {
    question: '¿Ofrecen servicio de revisión y mantenimiento de calderas?',
    answer: 'Sí. Realizamos revisión, mantenimiento y reparación de calderas para albercas y uso residencial. Verificamos el funcionamiento, eficiencia y seguridad de tu caldera para garantizar agua caliente todo el año.',
  },
  {
    question: '¿Atienden toda la zona de Ciudad Juárez?',
    answer: 'Atendemos toda Ciudad Juárez y su zona metropolitana: Campestre, Praderas del Sol, Satélite, Misiones, Quintas del Valle, Bosques de las Lomas, Lomas del Rey y más. Contáctanos para confirmar cobertura en tu zona.',
  },
  {
    question: '¿Trabajan proyectos comerciales y residenciales?',
    answer: 'Sí. Ejecutamos proyectos residenciales (casas, condominios, Airbnb), comerciales (hoteles, jardines, clubes, desarrollos) e industriales. Cada proyecto recibe atención personalizada con ingeniería y acabados a la medida, como tú te mereces.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">Preguntas frecuentes</p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Todo lo que necesitas saber sobre nuestras albercas en Ciudad Juárez.
        </h2>
      </div>
      <div className="divide-y divide-white/10">
        {faqs.map((faq, i) => (
          <div key={faq.question}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
              aria-expanded={open === i}
            >
              <h3 className="text-lg font-medium text-white">{faq.question}</h3>
              <span className={`mt-1 shrink-0 text-brand-aqua transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </span>
            </button>
            {open === i && (
              <p className="pb-6 leading-7 text-slate-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
