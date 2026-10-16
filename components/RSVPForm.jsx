'use client';
import { useEffect, useRef, useState } from 'react';
import { PartyPopper } from 'lucide-react';

// Konfirmasi kehadiran gaya pesta. Ini undangan contoh: data tidak dikirim ke mana pun.
const PESAN_URL =
  'https://wa.me/6285190931399?text=' +
  encodeURIComponent('Halo PintuWeb, saya mau pesan undangan ulang tahun digital seperti contoh Kayla.');

export default function RSVPForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', attendance: 'hadir', guests: 1 });
  const [done, setDone] = useState(false);
  const pesanSukses = useRef(null);

  // Form hilang setelah dikirim; pindahkan fokus ke pesan sukses supaya tidak jatuh ke <body>.
  useEffect(() => {
    if (done) pesanSukses.current?.focus();
  }, [done]);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    onSubmit?.(form);
    setDone(true);
  };

  const field = 'w-full rounded-xl border-2 border-rose/30 bg-cream px-4 py-3 text-sm font-semibold outline-none focus:border-rose';
  const lab = 'mb-1 block text-xs font-bold uppercase tracking-wide text-muted';

  return (
    <section className="relative z-10 bg-blush/40 px-6 py-20">
      <div className="mx-auto max-w-md text-center">
        <p className="font-script text-3xl text-rose sm:text-4xl">Kamu datang, kan?</p>
        <h2 className="mt-1 font-display text-3xl font-extrabold text-ink">Konfirmasi Kehadiran</h2>

        {done ? (
          <div className="mt-7 rounded-3xl bg-cream p-8 shadow-md" role="status">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose text-cream">
              <PartyPopper size={26} />
            </div>
            <p ref={pesanSukses} tabIndex={-1} className="mt-4 font-display text-2xl font-extrabold text-ink">Hore, {form.name.trim()}!</p>
            <p className="mt-1 text-sm text-muted">Sampai jumpa di pesta! 🎉</p>
            <p className="mt-4 text-xs font-semibold text-muted">
              Psst, ini undangan contoh, jadi konfirmasimu nggak dikirim ke mana-mana.{' '}
              <a href={PESAN_URL} target="_blank" rel="noopener noreferrer" className="text-rose underline underline-offset-2 hover:text-ink">
                Mau undangan kayak gini?
              </a>
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-7 space-y-4 text-left">
            <div>
              <label htmlFor="rsvp-nama" className={lab}>Nama</label>
              <input id="rsvp-nama" name="name" value={form.name} onChange={handle} placeholder="Nama kamu" autoComplete="name" maxLength={60} className={field} required />
            </div>
            <div>
              <label htmlFor="rsvp-hadir" className={lab}>Kehadiran</label>
              <select id="rsvp-hadir" name="attendance" value={form.attendance} onChange={handle} className={field}>
                <option value="hadir">Iya, aku datang! 🎉</option>
                <option value="tidak">Maaf, belum bisa</option>
                <option value="ragu">Masih ragu</option>
              </select>
            </div>
            {form.attendance === 'hadir' && (
              <div>
                <label htmlFor="rsvp-jumlah" className={lab}>Jumlah yang datang</label>
                <input id="rsvp-jumlah" type="number" name="guests" min={1} max={10} value={form.guests} onChange={handle} className={field} />
              </div>
            )}
            <button type="submit" className="w-full rounded-full bg-rose py-3 text-sm font-extrabold text-cream transition hover:bg-rose-deep">
              Kirim Konfirmasi
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
