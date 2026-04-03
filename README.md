# Cloud Phone Dashboard

Projek ini adalah prototaip untuk papan pemuka (dashboard) peranti awan yang menyokong perkongsian skrin secara langsung dan terminal kawalan untuk pemilik.

## Keserasian Pelayar (Browser Compatibility)

Perkongsian skrin menggunakan API `getDisplayMedia`. Berikut adalah senarai sokongan:

### Desktop
| Pelayar | Status Sokongan | Nota |
| :--- | :--- | :--- |
| **Chrome** | ✅ Menyokong | Versi 72+ |
| **Edge** | ✅ Menyokong | Versi 79+ |
| **Firefox** | ✅ Menyokong | Versi 66+ |
| **Safari** | ✅ Menyokong | Versi 13+ |
| **Opera** | ✅ Menyokong | Versi 60+ |

### Mobile (Penting)
Kebanyakan pelayar mudah alih (mobile) **TIDAK** menyokong perkongsian skrin melalui pelayar web atas sebab keselamatan dan had sistem operasi.

| Platform | Pelayar | Status |
| :--- | :--- | :--- |
| **Android** | Chrome for Android | ❌ Tidak Menyokong |
| **Android** | Firefox for Android | ❌ Tidak Menyokong |
| **Android** | Samsung Internet | ❌ Tidak Menyokong |
| **iOS (iPhone)** | Safari on iOS | ❌ Tidak Menyokong |

---

## Keserasian Android (Versi OS)

Walaupun pelayar web pada Android tidak menyokong perkongsian skrin secara langsung (Direct Screen Share), jika anda menggunakan aplikasi asli (Native App) atau sistem Cloud Phone ini, berikut adalah hadnya:

1.  **Android 10 dan ke atas**: Menyokong rakaman skrin dan perkongsian dengan audio dalaman.
2.  **Android 5.0 hingga 9.0**: Menyokong rakaman skrin tanpa audio dalaman secara rasmi (hanya mikrofon).
3.  **Android di bawah 5.0 (Lollipop)**: **TIDAK MENYOKONG** perkongsian skrin secara asli.

---

## Keperluan Teknikal

1.  **HTTPS**: Perkongsian skrin **WAJIB** dijalankan di atas sambungan selamat (HTTPS) atau `localhost`.
2.  **Izin Pengguna**: Pengguna mesti memberikan kebenaran (Permission) secara manual apabila tetingkap pop-up muncul.
3.  **Simulasi Mode**: Jika pelayar anda tidak menyokong API ini (seperti pada telefon bimbit), sila gunakan butang **"Simulasi Demo"** dalam aplikasi untuk melihat fungsi dashboard.

## Cara Menjalankan Projek

```bash
npm install
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) pada pelayar anda.
