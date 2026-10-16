'use client';
import { useEffect, useRef } from 'react';
import { MotionConfig } from 'framer-motion';

import Decorations from './Decorations';
import Hero from './Hero';
import TicketPass from './TicketPass';
import CountdownTimer from './CountdownTimer';
import Wishlist from './Wishlist';
import Gallery from './Gallery';
import MapEmbed from './MapEmbed';
import RSVPForm from './RSVPForm';
import WishesForm from './WishesForm';
import Footer from './Footer';

// Isi undangan pesta setelah tiket diambil. Dimuat terpisah (next/dynamic) supaya JavaScript halaman pertama
// hanya berisi sampul; framer-motion dan seluruh bagian isi ikut di potongan ini.
export default function Isi() {
  const ref = useRef(null);

  // Tombol pembuka sudah hilang; fokus pindah ke awal isi.
  useEffect(() => {
    ref.current?.focus({ preventScroll: true });
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Decorations />
      <div ref={ref} tabIndex={-1} className="relative z-10 outline-none">
        <Hero />
        <TicketPass />
        <CountdownTimer />
        <Wishlist />
        <Gallery />
        <MapEmbed />
        <RSVPForm />
        <WishesForm />
        <Footer />
      </div>
    </MotionConfig>
  );
}
