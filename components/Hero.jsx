'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import config from '@/lib/data';

// Hero pesta: angka usia raksasa di belakang foto, vibe meriah.
export default function Hero() {
  const { person, opening } = config;

  return (
    <section className="relative z-10 flex min-h-svh flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <motion.p
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="font-script text-4xl text-rose sm:text-5xl"
      >
        Hore, aku {person.age} tahun!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
        className="relative mt-6"
      >
        {/* Angka usia raksasa di belakang */}
        <span aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 font-display text-[10rem] font-extrabold leading-none text-rose-deep/10 sm:text-[16rem]">
          {person.age}
        </span>
        <div className="relative mx-auto h-56 w-56 overflow-hidden rounded-[2.5rem] border-[6px] border-rose shadow-xl">
          <Image src={person.photo} alt={person.fullName} fill priority sizes="224px" className="object-cover" />
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-7 break-words font-display text-5xl font-extrabold text-ink sm:text-6xl md:text-7xl"
      >
        {person.name}
      </motion.h1>
      <p className="mt-2 font-display text-lg font-bold text-rose-deep">{opening.tagline}</p>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-rose-deep"
        animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <ChevronDown size={30} />
      </motion.div>
    </section>
  );
}
