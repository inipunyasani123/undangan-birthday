'use client';
import { motion } from 'framer-motion';
import { CalendarDays, Clock, MapPin, Shirt, CalendarPlus, Ticket } from 'lucide-react';
import config from '@/lib/data';
import { googleCalendarUrl } from '@/lib/utils';
import { useGuestName } from '@/lib/hooks';

// Komponen tanda tangan: detail pesta dikemas sebagai TIKET berperforasi.
export default function TicketPass() {
  const { party, person, meta, location } = config;
  const guest = useGuestName();
  const calUrl = googleCalendarUrl(
    { ...party, name: `Ulang Tahun ${person.name}` },
    { title: meta.title, location: location.label }
  );

  return (
    <section className="relative z-10 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: -1 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="ticket mx-auto max-w-md overflow-hidden"
      >
        {/* Header tiket */}
        <div className="flex items-center justify-between gap-2 bg-rose-deep px-6 py-4 text-cream">
          <span className="inline-flex items-center gap-2 font-script text-2xl">
            <Ticket size={20} aria-hidden="true" /> Party Pass
          </span>
          <span className="rounded-full bg-cream/20 px-3 py-1 text-xs font-bold uppercase tracking-wide">Tamu Spesial</span>
        </div>

        {/* Garis perforasi */}
        <div className="border-t-2 border-dashed border-rose/30" />

        {/* Isi tiket */}
        <div className="px-7 py-7">
          <h2 className="sr-only">Detail pesta</h2>
          <p className="text-xs font-bold uppercase tracking-widest text-muted">Pemegang tiket</p>
          <p className="break-words font-display text-3xl font-extrabold text-ink">{guest}</p>
          <p className="mt-1 text-sm font-semibold text-rose-deep">Pesta ulang tahun {person.name} yang ke-{person.age}</p>

          <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
            <Info icon={CalendarDays} label="Tanggal" value={party.date} />
            <Info icon={Clock} label="Waktu" value={party.time} />
            <Info icon={MapPin} label="Tempat" value={party.venue} full />
            <Info icon={Shirt} label="Dresscode" value={party.dresscode} />
            <Info icon={Ticket} label="Kursi" value={party.seat} />
          </div>

          <p className="mt-4 text-xs text-muted">{party.address}</p>

          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-rose py-3 text-sm font-extrabold text-cream transition hover:bg-rose-deep"
          >
            <CalendarPlus size={16} /> Simpan ke Kalender
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function Info({ icon: Icon, label, value, full }) {
  return (
    <div className={full ? 'col-span-2' : ''}>
      <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-muted">
        <Icon size={13} className="text-rose-deep" /> {label}
      </p>
      <p className="mt-0.5 font-semibold text-ink">{value}</p>
    </div>
  );
}
