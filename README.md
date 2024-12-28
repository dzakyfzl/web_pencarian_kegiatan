# Perbandingan Algoritma Iteratif dan Rekursif pada Pencarian Kegiatan
Berikut adalah deskripsi program yang dibuat bertujuan untuk memenuhi tugas besar

## Spesifikasi Program
program menggunakan beberapa node.js library diantaranya : 
- tailwind.css
- chart.js
- express.js
- microseconds
- file system

## Cara Menjalankannya
Terdapat beberapa langkah agar program berjalan
- Pastikan [**Node.js**](https://nodejs.org/en/download/) terinstal pada perangkat
- Gunakan perintah `$ npm run build` untuk menjalankan program
- Pergi ke web browser dan masuk pada alamat `localhost:3000/`

## Folder
Terdapat beberapa folder yang memiliki fungsinya masing-masing :
- `/src` menyimpan berkas yang dibutuhkan page
- `/Runtime` menyimpan data riwayat runtime per algoritma yang akan diproses
- `/page` berisi halaman yang akan ditampilkan ke client
- `/Logs` menyimpan riwayat log yang disimpan per-harinya per-file
- `/Backend` berisi sourcecode dari backend untuk pemrosesan data
- `/node_modules` berisi modul-modul node.js yang terinstall

folder yang ada pada `/page` adalah bagaimana halaman dibentuk dalam menampilkan tampilan depan

folder yang ada didalam `/src` hanyalah folder `/src/img` yang bertujuan menyimpan

lalu ada pula sub-folder didalam folder `/Backend` :
- `/Backend/System` menyimpan kode yang berkaitan dengan sistematis backend
- `/Backend/Data` menyimpan file yang berisi 10.080 kegiatan dan kode yang men-generatenya
- `/Backend/MainAlgoritm` berisi algoritma pencarian secara rekursif dan iteratif


