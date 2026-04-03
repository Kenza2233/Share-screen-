# Cloud Phone Dashboard v2.0

Dashboard ini direka untuk membolehkan pemilik peranti melihat skrin telefon cloud mereka dan menghantar arahan melalui terminal.

## Cara "Share Screen" Berfungsi

Aplikasi ini menyokong dua kaedah utama untuk memastikan anda sentiasa dapat melihat skrin:

### 1. Cloud Phone Streaming (Disyorkan)
- **Status**: ✅ Sentiasa Berfungsi (Semua Pelayar & Peranti)
- **Cara**: Klik butang **"🚀 Sambungkan Cloud Phone"**.
- **Apa yang berlaku**: Dashboard akan menyambung ke pelayan Cloud Phone dan memaparkan stream visual peranti anda secara langsung (simulasi stream). Ini berfungsi pada Android, iPhone, dan Desktop tanpa memerlukan kebenaran khas pelayar.

### 2. Local Screen Mirroring (Desktop Sahaja)
- **Status**: ⚠️ Terhad kepada Desktop + HTTPS.
- **Cara**: Klik butang **"🖥️ Share Screen (Desktop)"**.
- **Apa yang berlaku**: Anda boleh berkongsi tetingkap atau skrin komputer anda sendiri ke dalam dashboard. Ini berguna untuk tujuan demonstrasi atau kawalan jauh dari PC.

---

## Keserasian Teknikal

### Sokongan Pelayar (Real Share Screen)
| Pelayar | Desktop | Mobile (Android/iOS) |
| :--- | :--- | :--- |
| **Chrome / Edge** | ✅ Support | ❌ No Support |
| **Firefox** | ✅ Support | ❌ No Support |
| **Safari** | ✅ Support | ❌ No Support |

### Sokongan Android (Versi OS)
- **Android 10+**: Sokongan penuh untuk stream video & audio.
- **Android 5.0 - 9.0**: Sokongan video sahaja.
- **Bawah Android 5.0**: Tidak menyokong stream secara asli.

---

## Keperluan Sistem
- Projek ini memerlukan **HTTPS** untuk fungsi "Real Screen Share".
- Untuk penggunaan pada telefon bimbit, gunakan fungsi **"Cloud Phone Streaming"**.

## Pemasangan
```bash
npm install
npm run dev
```
Akses di `http://localhost:3000`.
