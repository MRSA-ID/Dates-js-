var dates = new Date().toLocaleDateString('en-us',{weekday:"long", year:"numeric", month:"short", day:"numeric"})

// how to format Dates in JS

// date Methods in Javascript
/*
	getFullYear() - mendapatkan tahun dalam format empat digit nomer (yyyy)
	getMonth() - mendapatkan bulan sebagai angka (0-11)
	getDate() - mendapatkan hari sebagai angka (1-31)
	getHours() - mendapatkan jam (0-23)
*/

// example How to get month 
var currentMonth = new Date();
const months = ["january", "February", "March", "April", "May", "June", "July", "Agust", "September", "October", "November", "Desember"];
console.log(months[currentMonth.getMonth()])

/* 
  toDateString() mengembalikan bagian tanggal dari objek tanggal dalam bentuk string:
  -Tiga huruf pertama dari nama hari minggu
  -Tiga huruf pertama nama bulan
  -Dua digit hari dalam sebulan, diisi di sebelah kiri nol jika perlu
  -Empat digit tahun (setidaknya), diisi di sebelah kiri dengan nol jika perlu
*/
var date = new Date().toDateString();

// toLocaleDateString()
/*
	Metode ini mengembalikan objek tanggal sebagai string menggunakan konvensi lokal. Ini juga menggunakan opsi sebagai argumen yang memungkinkan Anda/aplikasi Anda menyesuaikan perilaku fungsi.
*/
// Syntax :
// tolocaleDateString()
// tolocaleDateString(locales)
// tolocaleDateString(locales, option)

const currrentDate = new Date();
const options = {
	weekday:'long',
	year:'numeric',
	month:'short',
	day:'numeric'
};

console.log(currrentDate.toLocaleDateString('de-DE', options));

console.log(currrentDate.toLocaleDateString('ar-EG', options));

console.log(currrentDate.toLocaleDateString('en-us', options));

// juga dapat tidak menggunakan lokal atau opsi
var localDate = new Date().toLocaleDateString();
console.log(localDate);

// juga dapat menggunakan locales saja
var locales = new Date().toLocaleDateString('en-US');
console.log(locales);

// dapat memutuskan  option yang sesuai keinginan, Terdapat 4 pilihan dasar:
/*
	weekday - menampilkan hari dalam seminggu tergantung ingin menampilkan (pendek atau panjang)
	tahun - ini menampilkan tahun sebagai angka
	bulan - ini menampilkan bulan dalam setahun tergantung ingin menampilkan (pendek atau panjang)
	hari - menampilkan hari sebagai angka
*/ 

var threeOption = new Date().toLocaleDateString('en-us',{weekday:"long", year:"numeric", month:"short"});
var twoOption = new Date().toLocaleDateString('en-us', {year:"numeric", month:"long"});
console.log(threeOption);
console.log(twoOption);

