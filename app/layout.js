import './globals.css';
import { Outfit, Shrikhand, Plus_Jakarta_Sans } from 'next/font/google';
import config from '@/lib/data';

const display = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});
const script = Shrikhand({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-shrikhand',
  display: 'swap',
});
const body = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Undangan Ulang Tahun Digital — Pesta Kayla","description":"Contoh undangan ulang tahun anak bergaya party pass: tiket pesta, hitung mundur, wishlist kado, RSVP, ucapan, dan musik latar.","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://undangan-birthday.pintuweb.id"),
  title: "Undangan Ulang Tahun Digital — Kayla",
  description: "Undangan ulang tahun digital ceria dan penuh warna: detail pesta, galeri, lokasi, dan RSVP. Buat momen spesial makin berkesan.",
  applicationName: "Undangan Digital",
  keywords: ["undangan ulang tahun", "undangan ultah digital", "birthday invitation", "undangan pesta anak"],
  authors: [{ name: "Undangan Digital" }],
  creator: "Undangan Digital",
  publisher: "Undangan Digital",
  alternates: { canonical: "https://undangan-birthday.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://undangan-birthday.pintuweb.id",
    siteName: "Undangan Digital",
    title: "Undangan Ulang Tahun Digital — Kayla",
    description: "Undangan ulang tahun digital ceria dan penuh warna: detail pesta, galeri, lokasi, dan RSVP. Buat momen spesial makin berkesan.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Undangan Ulang Tahun Digital — Kayla" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Undangan Ulang Tahun Digital — Kayla",
    description: "Undangan ulang tahun digital ceria dan penuh warna: detail pesta, galeri, lokasi, dan RSVP. Buat momen spesial makin berkesan.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport = {
  themeColor: '#ff4d8d',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${script.variable} ${body.variable}`}>
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 76px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=birthday" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
