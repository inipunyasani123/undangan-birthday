'use client';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import config from '@/lib/data';

// Wishlist kado — ide hadiah yang disukai.
export default function Wishlist() {
  const { wishlist } = config;
  return (
    <section className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-md text-center">
        <p className="font-script text-3xl text-rose sm:text-4xl">Wishlist {config.person.name}</p>
        <h2 className="mt-1 font-display text-3xl font-extrabold text-ink">Ide Kado 🎁</h2>
        <p className="mt-2 text-sm text-muted">Datangmu sudah cukup, tapi kalau mau bawa kado:</p>

        <ul className="mt-8 grid grid-cols-2 gap-4">
          {wishlist.map((w, i) => (
            <motion.li
              key={w.item}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{ rotate: ['-2deg', '1.5deg', '1deg', '-1.5deg'][i % 4] }}
              className={`hard-shadow-sm relative flex flex-col items-center gap-2 rounded-2xl px-3 pb-4 pt-6 text-center ${['bg-gold/40', 'bg-blush', 'bg-rose-deep/10', 'bg-cream'][i % 4]}`}
            >
              <span className="absolute left-1/2 top-2 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-ink bg-cream" aria-hidden="true" />
              <span className="mt-1 text-3xl" aria-hidden="true">{w.emoji || <Gift size={26} />}</span>
              <span className="text-sm font-bold leading-snug text-ink">{w.item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
