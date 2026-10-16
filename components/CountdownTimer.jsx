'use client';
import { motion } from 'framer-motion';
import config from '@/lib/data';
import { useCountdown } from '@/lib/hooks';

function Bubble({ value, label }) {
  return (
    <div className="flex aspect-square flex-col items-center justify-center rounded-2xl bg-cream shadow-lg ring-4 ring-rose/20">
      <span className="font-display text-3xl font-extrabold tabular-nums text-rose-deep md:text-4xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] font-bold uppercase tracking-wide text-muted">{label}</span>
    </div>
  );
}

// Hitung mundur menuju pesta.
export default function CountdownTimer() {
  const { days, hours, minutes, seconds, passed } = useCountdown(config.mainDate);
  return (
    <section className="relative z-10 bg-blush/40 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-script text-3xl text-rose sm:text-4xl">{passed ? 'Saatnya pesta!' : 'Pesta dimulai dalam'}</p>
        {passed ? (
          <p className="mx-auto mt-5 max-w-sm text-sm font-semibold text-ink">
            Pestanya sudah berlangsung. Terima kasih sudah ikut merayakan bersama Kayla!
          </p>
        ) : (
          <div className="mx-auto mt-7 grid max-w-xs grid-cols-4 gap-2 sm:max-w-md sm:gap-4" role="timer" aria-label={`${days} hari ${hours} jam ${minutes} menit lagi`}>
            <Bubble value={days} label="Hari" />
            <Bubble value={hours} label="Jam" />
            <Bubble value={minutes} label="Menit" />
            <Bubble value={seconds} label="Detik" />
          </div>
        )}
      </motion.div>
    </section>
  );
}
