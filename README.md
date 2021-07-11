# Dates-js-
How to Format Dates in Javascript
## Date Methods in Javascript
- getFullYear() - mendapatkan tahun dalam format empat digit nomer (yyyy)
- getMonth() - mendapatkan bulan sebagai angka (0-11)
- getDate() - mendapatkan hari sebagai angka (1-31)
- getHours() - mendapatkan jam (0-23)

## toDateString() mengembalikan bagian tanggal dari objek tanggal dalam bentuk string:
- Tiga huruf pertama dari nama hari minggu
- Tiga huruf pertama nama bulan
- Dua digit hari dalam sebulan, diisi di sebelah kiri nol jika perlu
- Empat digit tahun (setidaknya), diisi di sebelah kiri dengan nol jika perlu

## toLocaleDateString() :
Metode ini mengembalikan objek tanggal sebagai string menggunakan konvensi lokal. Ini juga menggunakan opsi sebagai argumen yang memungkinkan Anda/aplikasi Anda menyesuaikan perilaku fungsi.

**Syntax :**

- tolocaleDateString()
- tolocaleDateString(locales)
- tolocaleDateString(locales, option)

