'use client';
import { Ticket, Star, Heart, CalendarDays } from 'lucide-react';
import config from '@/lib/data';
import { useGuestName } from '@/lib/hooks';
import SakelarMusik from './SakelarMusik';

// Konfeti khusus sampul (di atas latar sampul).
const COLORS = ['#ff4d8d', '#7c3aed', '#ffd23f', '#22c55e', '#38bdf8'];
const PIECES = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 37) % 100,
  delay: (i % 10) * 0.5,
  dur: 4 + (i % 5),
  color: COLORS[i % COLORS.length],
  size: 7 + (i % 4) * 2,
  round: i % 3 === 0,
}));

// Sampul "Confetti Pop Party": angka usia raksasa + party pass. Angka usia (elemen terbesar)
// tampil sejak cat pertama; hanya gerak masuknya yang dianimasikan lewat CSS.
export default function PartyCover({ keluar, onOpen, onSelesai, musik, onMusik }) {
  const guest = useGuestName();
  const { person, opening, party } = config;

  return (
    <section
      data-sampul
      aria-label="Sampul undangan"
      className={`fixed inset-0 z-50 overflow-y-auto bg-cream ${keluar ? 'sampul-keluar' : ''}`}
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget && e.animationName === 'sampul-keluar') onSelesai();
      }}
    >
      {/* Konfeti */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {PIECES.map((p, i) => (
          <span key={i} className="absolute top-0" style={{
            left: `${p.left}%`, width: p.size, height: p.size, background: p.color,
            borderRadius: p.round ? '9999px' : '2px',
            animation: `confetti-fall ${p.dur}s linear ${p.delay}s infinite`,
          }} />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-full max-w-md flex-col items-center justify-between px-6 pb-8 pt-10 text-center">
        {/* Lencana */}
        <span className="masuk hard-shadow-sm inline-block -rotate-3 rounded-full bg-gold px-5 py-2 text-xs font-extrabold uppercase tracking-[0.15em] text-ink">
          {opening.greeting}
        </span>

        {/* Angka usia raksasa */}
        <div className="relative flex w-full flex-1 items-center justify-center py-6">
          <div className="absolute h-56 w-56 rounded-full bg-rose/25 blur-3xl" aria-hidden="true" />
          <div className="absolute h-56 w-56 translate-x-10 -translate-y-8 rounded-full bg-rose-deep/25 blur-3xl" aria-hidden="true" />
          <h1 className="masuk-skala relative z-10 font-display leading-none">
            <span className="sr-only">Ulang tahun ke-{person.age} {person.name}</span>
            <span aria-hidden="true" className="text-hard-shadow block -rotate-6 text-[7rem] font-extrabold text-rose sm:text-[9rem]">{person.age}</span>
          </h1>
          <Star size={34} aria-hidden="true" className="absolute right-6 top-6 animate-spin text-gold [animation-duration:3s]" />
          <Heart size={30} aria-hidden="true" className="absolute bottom-10 left-6 animate-bounce fill-rose text-rose" />
        </div>

        {/* Detail */}
        <div className="masuk z-10 w-full space-y-4" style={{ '--tunda': '0.15s' }}>
          <p className="hard-shadow inline-block rotate-2 bg-blush px-5 py-2 font-display text-2xl font-extrabold text-ink">
            Pesta {person.name}
          </p>
          <p className="mx-auto flex max-w-xs items-center justify-center gap-2 rounded-lg border-2 border-dashed border-rose/40 bg-cream px-3 py-2.5 text-sm font-bold text-ink">
            <CalendarDays size={16} aria-hidden="true" className="shrink-0 text-rose-deep" />
            {party.date} · {party.time.split(' ')[0]} WIB
          </p>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted">Spesial untuk</p>
            <p className="break-words text-base font-extrabold text-ink">{guest}</p>
          </div>
        </div>

        {/* Tombol */}
        <div className="masuk mt-6 w-full" style={{ '--tunda': '0.3s' }}>
          <button
            type="button"
            onClick={onOpen}
            disabled={keluar}
            className="hard-shadow animate-pulse-scale flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-rose py-4 font-display text-lg font-extrabold text-cream transition-colors hover:bg-rose-deep active:translate-y-1 active:shadow-[2px_2px_0_var(--color-ink)]"
          >
            <Ticket size={22} aria-hidden="true" /> Ambil Tiket Pestamu
          </button>
          <div className="mt-3 flex justify-center">
            <SakelarMusik nyala={musik} onUbah={onMusik} className="rounded-full bg-cream/80 px-3 text-xs font-bold text-rose-deep hover:bg-blush" />
          </div>
        </div>
      </div>
    </section>
  );
}
