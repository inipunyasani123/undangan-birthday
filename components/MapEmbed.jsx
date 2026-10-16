import { MapPin } from 'lucide-react';
import config from '@/lib/data';

// Lokasi pesta.
export default function MapEmbed() {
  const { location } = config;
  return (
    <section className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-script text-3xl text-rose sm:text-4xl">Ketemu di sini</p>
        <h2 className="mt-1 font-display text-3xl font-extrabold text-ink">Lokasi Pesta</h2>
        <div className="relative mt-7 overflow-hidden rounded-3xl border-4 border-cream bg-blush/60 shadow-lg">
          <p className="absolute inset-0 flex items-center justify-center gap-2 text-sm font-bold text-muted" aria-hidden="true">
            <MapPin size={16} /> Memuat peta…
          </p>
          <iframe
            src={location.mapEmbed}
            title="Peta lokasi pesta"
            className="relative h-64 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <p className="mt-4 text-sm font-semibold text-ink">{location.label}</p>
        {location.note && <p className="mt-1 text-xs text-muted">{location.note}</p>}
        <a
          href={location.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-rose px-6 py-3 text-sm font-extrabold text-cream transition hover:bg-rose-deep"
        >
          <MapPin size={16} aria-hidden="true" /> Buka di Google Maps
        </a>
      </div>
    </section>
  );
}
