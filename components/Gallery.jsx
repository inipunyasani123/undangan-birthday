'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import config from '@/lib/data';
import { useDialog } from '@/lib/hooks';

const tilts = ['-3deg', '2deg', '-1deg', '3deg', '-2deg', '1deg'];

// Galeri foto ceria (kartu miring) + lightbox.
export default function Gallery() {
  const { gallery } = config;
  const [active, setActive] = useState(null);
  const tombolTutup = useDialog(active !== null, () => setActive(null));

  return (
    <section className="relative z-10 bg-blush/40 px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-script text-3xl text-rose sm:text-4xl">Momen Seru</p>
        <h2 className="mt-1 font-display text-3xl font-extrabold text-ink">Galeri</h2>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {gallery.map((foto, i) => (
            <motion.button
              key={foto.src}
              style={{ rotate: tilts[i % tilts.length] }}
              whileHover={{ rotate: '0deg', scale: 1.04 }}
              type="button"
              onClick={() => setActive(i)}
              className="relative h-36 w-full overflow-hidden rounded-2xl border-4 border-cream shadow-md sm:h-44"
              aria-label={`Perbesar foto: ${foto.alt}`}
            >
              <Image src={foto.src} alt={foto.alt} fill sizes="(max-width:640px) 45vw, 240px" className="object-cover" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActive(null)} role="dialog" aria-modal="true" aria-label={`Foto ${active + 1} dari ${gallery.length}, diperbesar`}
          >
            <button ref={tombolTutup} type="button" className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full text-cream hover:bg-cream/10" onClick={() => setActive(null)} aria-label="Tutup foto">
              <X size={28} />
            </button>
            <motion.div
              className="relative h-[70vh] w-full max-w-lg overflow-hidden rounded-3xl"
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={gallery[active].src} alt={gallery[active].alt} fill sizes="(max-width: 640px) 100vw, 512px" className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
