# GeoPlanner Muda

Simulasi interaktif perencanaan wilayah untuk pembelajaran Geografi kelas XII. Aplikasi menggunakan React, Vite, Tailwind CSS, React Router, Dexie/IndexedDB, Recharts, Framer Motion, dan Lucide React.

## Menjalankan aplikasi

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite. Untuk membuat build produksi, jalankan `npm run build`.

## Alur aplikasi

1. Beranda → identitas siswa → briefing misi.
2. Di simulator, pilih fasilitas lalu pilih petak. Tinjau prediksi sebelum menyetujui pembangunan.
3. Selesaikan simulasi untuk membuka laporan dan refleksi.
4. Ruang Guru menyediakan anggaran awal, rubrik, ekspor/impor arsip JSON, dan reset lokal.

## Penyimpanan dan batasan model

Data siswa, simulasi, peta, keputusan, pengaturan, dan refleksi disimpan di IndexedDB pada browser/perangkat yang digunakan. Ekspor JSON dapat dipakai untuk memindahkan data. Impor mengganti data GeoPlanner lokal yang ada. Belum ada backend atau sinkronisasi otomatis antarperangkat.

Indeks kebahagiaan dan dampak fasilitas merupakan model deterministik untuk pembelajaran, bukan ukuran resmi atau data statistik wilayah nyata. Peta Kawasan Harmoni adalah data demo fiktif.
