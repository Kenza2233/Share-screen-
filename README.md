# Cloud Phone Dashboard v3.0 (Root Access)

Dashboard pengurusan peranti awan yang dipertingkatkan dengan sokongan akses **Root** dan sistem pelbagai pandangan (Owner Views).

## Ciri Utama

### 1. Root Authorized Terminal
- **Cara Penggunaan**: Taip `su` atau `sudo` dalam terminal untuk mendapatkan akses root.
- **Kesan**: Prompt akan bertukar dari `>` (Owner) kepada `#` (Root).
- **Kelebihan**: Membolehkan arahan sistem tahap rendah dijalankan (cth: memadam cache sistem, akses direktori `/system`).

### 2. Owner Views (Multi-Tab)
Kini pemilik mempunyai tiga pandangan utama untuk menguruskan peranti:
- **Terminal**: Kawalan baris perintah (command-line) secara langsung.
- **File Manager**: Lihat struktur fail sistem peranti (Root access diperlukan untuk kawalan penuh).
- **Analytics**: Pantau prestasi CPU, RAM, Network, dan Bateri secara visual.

### 3. Cloud Remote Streaming
- Mendukung **Cloud Phone Streaming** yang berfungsi secara universal pada semua peranti (Android, iOS, Desktop).
- Lencana **ROOT ACTIVE** akan muncul apabila sambungan berjaya dilakukan.

---

## Keserasian Pelayar

| Ciri | Desktop | Mobile |
| :--- | :--- | :--- |
| **Cloud Streaming** | ✅ Berfungsi | ✅ Berfungsi |
| **Terminal / Root** | ✅ Berfungsi | ✅ Berfungsi |
| **Local Screen Share**| ✅ Berfungsi | ❌ Tidak Berfungsi |

---

## Keperluan Pemasangan
```bash
npm install
npm run dev
```
Akses dashboard di `http://localhost:3000`.
