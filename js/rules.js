pilihan = [
    ['laptop-standar', 'laptop-professional'],                      //'pro'
    ['dibawah-4jt', 'antara-4jt-10jt', 'diatas-10jt'],              //'budget'
    ['gaming', 'programming', 'desain-grafis', 'music-production'], //'khusus'
    ['paling-cepat', 'cukup-cepat', 'standar'],                     //'kecepatan'
    ['cukup-besar', 'normal'],                                      //'memori'
    ['ya', 'tidak'],                                                //'portable'
]

// BUAT SETIAP KEMUNGKINAN PASANGAN ANTAR PILIHAN BERDASARKAN RULES YANG ADA
pilihan.forEach(e => {
    // jika pilihan 1 = laptop standard
    if (e[0]) {
        
    }
});

$(".selector").click(function () {
    // mengambil nilai text dari selector
    let text = $(this).text().toLowerCase().replace(' ', '-');
    console.log(text);
})