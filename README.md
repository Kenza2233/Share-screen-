# Cloud Phone Dashboard v3.0

Dashboard pengurusan peranti awan yang dipertingkatkan dengan sistem pelbagai pandangan (Owner Views) dan kawalan terminal langsung.

## Ciri Utama

### 1. Owner Terminal
- **Cara Penggunaan**: Taip arahan dalam terminal untuk menguruskan peranti.
- **Kesan**: Prompt `>` menunjukkan anda sedang mengawal peranti sebagai Owner.
- **Kelebihan**: Membolehkan arahan sistem tahap tinggi dijalankan dan memantau log sistem secara langsung.

### 2. Owner Views (Multi-Tab)
Kini pemilik mempunyai tiga pandangan utama untuk menguruskan peranti:
- **Terminal**: Kawalan baris perintah (command-line) secara langsung.
- **File Manager**: Lihat struktur fail peranti secara visual.
- **Analytics**: Pantau prestasi CPU, RAM, Network, dan Bateri secara visual.

### 3. Cloud Remote Streaming
- Mendukung **Cloud Phone Streaming** yang berfungsi secara universal pada semua peranti (Android, iOS, Desktop).
- Status **Online** akan muncul apabila sambungan berjaya dilakukan.

---

## Keserasian Pelayar

| Ciri | Desktop | Mobile |
| :--- | :--- | :--- |
| **Cloud Streaming** | ✅ Berfungsi | ✅ Berfungsi |
| **Terminal Control**| ✅ Berfungsi | ✅ Berfungsi |
| **Local Screen Share**| ✅ Berfungsi | ❌ Tidak Berfungsi |

---

## Keperluan Pemasangan
```bash
npm install
npm run dev
```
Akses dashboard di `http://localhost:3000`.
