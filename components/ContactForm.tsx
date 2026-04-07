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
