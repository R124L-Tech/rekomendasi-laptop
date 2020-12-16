import * as data from './data-rules.js'

var pilihan = []

console.log(data);
console.log("hello");

// aksi ketika tombol ditekan
$(".selector").click(function () {
    // mengambil nilai text dari selector
    var text = $(this).text().toLowerCase().replace(' ', '-');

    // buat pengecualian untuk tombol mulai
    if (text == 'mulai') {
        return
    }

    pilihan.push(text)
    if (text == 'ya' || text == 'tidak') {
        console.log(pilihan);
    }

})

