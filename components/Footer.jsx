'use client';
import Link from 'next/link';
import { Share2, PartyPopper } from 'lucide-react';
import config from '@/lib/data';
import { invitationUrl, whatsappShareUrl } from '@/lib/utils';

// Penutup pesta.
export default function Footer() {
  const { footer, person } = config;

  const share = () => {
    const text = `Yuk hadir di pesta ulang tahun ${person.name}!`;
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({ title: text, url: invitationUrl() }).catch(() => {});
    } else {
      window.open(whatsappShareUrl(text), '_blank', 'noopener');
    }
  };

  return (
    <footer className="relative z-10 overflow-hidden bg-gradient-to-b from-rose to-rose-deep px-6 py-20 text-center text-cream">
      <PartyPopper size={36} className="mx-auto" aria-hidden="true" />
      <p className="mt-5 text-sm font-semibold text-cream/90">{footer.closing}</p>
      <h2 className="mt-6 break-words font-script text-5xl sm:text-6xl">{person.name}</h2>
      <p className="mt-2 font-bold text-gold">{footer.hashtag}</p>

      <button
        onClick={share}
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-extrabold text-rose-deep transition hover:bg-gold hover:text-ink"
      >
        <Share2 size={15} aria-hidden="true" /> Bagikan Undangan
      </button>

      {config.music.enabled && (
        <p className="mt-10 text-xs text-cream/90">
          Musik: {config.music.title} · {config.music.credit}
        </p>
      )}
      <p className="mt-2 text-xs text-cream/90">
        Sampai ketemu di pesta! 🎉 · <Link href="/kirim" className="inline-block py-2 font-bold underline underline-offset-4">Bagikan party pass ke teman</Link>
      </p>
    </footer>
  );
}
