import Link from 'next/link';

export const metadata = { title: 'Halaman tidak ditemukan — Pesta Kayla', robots: { index: false }, alternates: { canonical: null } };

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream px-5 py-14 text-ink flex flex-col items-center justify-center text-center">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-rose-deep">Ups!</p>
      <h1 className="mt-1 font-display text-4xl font-black text-ink sm:text-5xl">Pestanya bukan di sini</h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted mx-auto">Mungkin tautannya terpotong saat dikirim. Undangan lengkapnya ada di halaman utama.</p>
      <Link href="/" className="mt-8 hard-shadow-sm inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-rose-deep font-bold text-cream transition hover:-translate-y-0.5 px-6 py-3 text-sm">Ke pesta Kayla</Link>
    </main>
  );
}
