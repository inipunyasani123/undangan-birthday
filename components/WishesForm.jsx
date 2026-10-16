'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';

const initial = [
  { id: 1, name: 'Tante Dina', message: 'Happy birthday Kayla! Makin pinter & sehat selalu ya sayang 🎂' },
  { id: 2, name: 'Om Reza', message: 'Selamat ulang tahun! Semoga semua keinginanmu terwujud 🎈' },
];
const colors = ['bg-rose/15', 'bg-rose-deep/15', 'bg-gold/25'];

// Ucapan ulang tahun.
export default function WishesForm() {
  const [wishes, setWishes] = useState(initial);
  const [form, setForm] = useState({ name: '', message: '' });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setWishes((p) => [{ id: Date.now(), name: form.name.trim(), message: form.message.trim() }, ...p]);
    setForm({ name: '', message: '' });
  };

  const field = 'w-full rounded-xl border-2 border-rose/30 bg-cream px-4 py-3 text-sm font-semibold outline-none focus:border-rose';
  const lab = 'mb-1 block text-xs font-bold uppercase tracking-wide text-muted';

  return (
    <section className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-md text-center">
        <p className="font-script text-3xl text-rose sm:text-4xl">Selamat ulang tahun!</p>
        <h2 className="mt-1 font-display text-3xl font-extrabold text-ink">Ucapan</h2>

        <form onSubmit={submit} className="mt-7 space-y-3 text-left">
          <div>
            <label htmlFor="ucapan-nama" className={lab}>Nama</label>
            <input id="ucapan-nama" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Nama kamu" autoComplete="name" maxLength={60} className={field} required />
          </div>
          <div>
            <label htmlFor="ucapan-pesan" className={lab}>Ucapan</label>
            <textarea id="ucapan-pesan" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tulis ucapan ulang tahun…" rows={3} maxLength={500} className={`${field} resize-none`} required />
          </div>
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-rose px-6 py-3 text-sm font-extrabold text-cream transition hover:bg-rose-deep">
            <Send size={15} aria-hidden="true" /> Kirim Ucapan
          </button>
        </form>

        <div className="mt-7 grid gap-3 text-left" aria-live="polite">
          {wishes.map((w, i) => (
            <div key={w.id} className={`rounded-2xl p-4 ${colors[i % colors.length]}`}>
              <p className="font-display font-bold text-ink">{w.name}</p>
              <p className="mt-1 text-sm leading-snug text-ink/80">{w.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
