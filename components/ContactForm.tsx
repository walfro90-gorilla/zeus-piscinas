'use client';

import { useState } from 'react';

type FormState = { name: string; phone: string; message: string };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setStatus('error');
      return;
    }
    const text = `Hola ZEUS Piscinas, les escribo desde su sitio web.\n\n*Nombre:* ${form.name}\n*Teléfono:* ${form.phone}\n*Mensaje:* ${form.message}`;
    const url = `https://wa.me/526566452656?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noreferrer');
    setStatus('success');
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contacto" className="border-t border-white/10 bg-brand-slate/70 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">Contacto</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Cuéntanos en qué podemos apoyarte?</h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">Si buscas una piscina de lujo o un mantenimiento profesional en Ciudad Juárez, este es el punto de partida.</p>
          <div className="mt-8 flex flex-col gap-4">
            <a href="https://wa.me/526566452656?text=Hola%20ZEUS%20Piscinas%2C%20quiero%20cotizar%20mi%20proyecto." target="_blank" rel="noreferrer" className="flex items-center gap-3 text-slate-300 transition hover:text-brand-aqua">
              <svg className="h-5 w-5 shrink-0 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.849L.057 23.535a.75.75 0 0 0 .916.899l5.85-1.53A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.707 9.707 0 0 1-4.951-1.355l-.355-.21-3.676.963.98-3.585-.229-.368A9.71 9.71 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
              +52 656 645 2656
            </a>
            <a href="mailto:ZeusAlbercas@gmail.com" className="flex items-center gap-3 text-slate-300 transition hover:text-brand-aqua">
              <svg className="h-5 w-5 shrink-0 text-brand-aqua" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>
              ZeusAlbercas@gmail.com
            </a>
          </div>

          {/* Redes sociales */}
          <div className="mt-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Síguenos en redes</p>
            <div className="flex gap-4">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61573671871897"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full text-white transition hover:scale-110"
                style={{ backgroundColor: '#1877F2' }}
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/zeusalbercasjrz/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full text-white transition hover:scale-110"
                style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' }}
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@zeus_albercas_jrz"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="flex h-12 w-12 items-center justify-center rounded-full text-white transition hover:scale-110"
                style={{ backgroundColor: '#010101' }}
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
              </a>

            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
          <div className="grid gap-4">
            <input value={form.name} onChange={handleChange('name')} placeholder="Nombre completo" className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-brand-aqua" />
            <input value={form.phone} onChange={handleChange('phone')} placeholder="Teléfono / WhatsApp" className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-brand-aqua" />
            <textarea value={form.message} onChange={handleChange('message')} placeholder="Cuéntanos qué necesitas" rows={5} className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-brand-aqua" />
            <button className="rounded-full bg-brand-gold px-6 py-3 font-semibold text-brand-slate transition hover:opacity-90">Enviar por WhatsApp</button>
            {status === 'success' && <p className="text-sm text-brand-aqua">Mensaje enviado correctamente. Te contactaremos pronto.</p>}
            {status === 'error' && <p className="text-sm text-red-400">Revisa los campos e inténtalo de nuevo.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
