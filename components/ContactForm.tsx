'use client';

import { useState } from 'react';

type FormState = { name: string; phone: string; message: string };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) throw new Error('Completa todos los campos.');
      await new Promise((resolve) => setTimeout(resolve, 700));
      setStatus('success');
      setForm({ name: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="border-t border-white/10 bg-brand-slate/70 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-gold">Contacto</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Cuéntanos tu proyecto y te respondemos con una propuesta clara.</h2>
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
        </div>
        <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
          <div className="grid gap-4">
            <input value={form.name} onChange={handleChange('name')} placeholder="Nombre completo" className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-brand-aqua" />
            <input value={form.phone} onChange={handleChange('phone')} placeholder="Teléfono / WhatsApp" className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-brand-aqua" />
            <textarea value={form.message} onChange={handleChange('message')} placeholder="Cuéntanos qué necesitas" rows={5} className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-brand-aqua" />
            <button disabled={loading} className="rounded-full bg-brand-gold px-6 py-3 font-semibold text-brand-slate transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60">{loading ? 'Enviando...' : 'Enviar solicitud'}</button>
            {status === 'success' && <p className="text-sm text-brand-aqua">Mensaje enviado correctamente. Te contactaremos pronto.</p>}
            {status === 'error' && <p className="text-sm text-red-400">Revisa los campos e inténtalo de nuevo.</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
