// ============================================================
//  KONFIGURASI UNDANGAN — Birthday (Party Pass / Tiket Pesta)
//  Ubah seluruh isi undangan dari satu tempat ini saja.
//
//  Ini undangan CONTOH: nama dan tempat fiktif. Gambar di
//  /public/images adalah ilustrasi stiker buatan sendiri (tokoh
//  fiktif) — ganti dengan foto asli (foto utama persegi, galeri
//  lanskap 4:3) dan perbarui `alt`-nya.
// ============================================================

const config = {
  // -- Meta / SEO --
  meta: {
    title: 'Pesta Ulang Tahun Kayla ke-7',
    description: 'Kamu diundang! Yuk rayakan pesta ulang tahun Kayla bersama kami.',
  },

  // -- Teks pembuka --
  opening: {
    greeting: 'Kamu Diundang!',
    tagline: 'Yuk, rayakan bareng!',
  },

  // -- Yang berulang tahun --
  person: {
    name: 'Kayla',
    fullName: 'Kayla Arsyifa',
    age: 7,
    photo: '/images/bintang-pesta.webp',
    photoAlt: 'Ilustrasi Kayla bertopi pesta memegang balon angka 7',
  },

  // -- Tanggal pesta (ISO) untuk countdown --
  mainDate: '2027-10-09T16:00:00+07:00',

  // -- Detail pesta (jadi "tiket") --
  party: {
    date: 'Sabtu, 9 Oktober 2027',
    time: '16.00 - 19.00 WIB',
    venue: 'Halaman Belakang Rumah Kayla',
    address: 'Tebet, Jakarta Selatan',
    dresscode: 'Warna-warni ceria',
    seat: 'Bebas pilih',
    start: '2027-10-09T16:00:00+07:00',
    end: '2027-10-09T19:00:00+07:00',
  },

  // -- Lokasi (embed Google Maps) --
  // Contoh ini menunjuk area Tebet. Ganti `q=` dengan nama/koordinat tempat pesta.
  location: {
    label: 'Rumah Kayla, Tebet, Jakarta Selatan',
    note: 'Peta contoh menunjukkan area Tebet.',
    mapEmbed: 'https://www.google.com/maps?q=Tebet,+Jakarta+Selatan&output=embed',
    mapLink: 'https://maps.google.com/?q=Tebet,+Jakarta+Selatan',
  },

  // -- Wishlist kado --
  wishlist: [
    { emoji: '🧸', item: 'Boneka & mainan edukasi' },
    { emoji: '📚', item: 'Buku cerita anak' },
    { emoji: '🎨', item: 'Alat mewarnai & kerajinan' },
    { emoji: '🎁', item: 'Kejutan dari kamu!' },
  ],

  // -- Galeri foto --
  gallery: [
    { src: '/images/foto-1.webp', alt: 'Kayla meniup lilin angka 7 di atas kue bertingkat' },
    { src: '/images/foto-2.webp', alt: 'Kayla berjoget bersama Bima dan Nadia di antara balon' },
    { src: '/images/foto-3.webp', alt: 'Kayla terkejut membuka kado yang menyemburkan konfeti' },
    { src: '/images/foto-4.webp', alt: 'Kayla dan Nadia mewarnai gambar pelangi dengan krayon' },
    { src: '/images/foto-5.webp', alt: 'Kayla meniup gelembung sabun di halaman berlampu untai' },
    { src: '/images/foto-6.webp', alt: 'Meja pesta berisi kue ulang tahun, cupcake, dan jus' },
  ],

  // -- Musik latar (file di /public/music/) --
  music: {
    enabled: true,
    src: '/music/latar.mp3',
    title: 'Maple Leaf Rag — Scott Joplin',
    credit: 'rekaman US Air Force Band, domain publik',
  },

  // -- Footer --
  footer: {
    closing: 'Kehadiranmu bikin pesta makin meriah. Sampai jumpa di hari spesial!',
    hashtag: '#KaylaTurns7',
  },

  // -- Halaman /kirim (party pass per tamu) --
  kirim: {
    pesan:
      'Halo, orang tua {nama}! 🎈\n\nKayla mau merayakan ulang tahun ke-7 dan ingin {nama} ikut berpesta: Sabtu, 9 Oktober 2027, pukul 16.00–19.00 WIB di rumah Kayla.\n\nIni party pass untuk {nama}: {tautan}\n\nKonfirmasi kehadiran bisa langsung lewat tautan itu. Sampai jumpa!',
  },
};

export default config;
