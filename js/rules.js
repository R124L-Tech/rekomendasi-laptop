// array untuk menampung pilihan
var pilihan = []

// aksi ketika tombol ditekan
$(".selector").click(function () {
    // mengambil nilai text dari selector
    var text = $(this).text().toLowerCase().replace(' ', '-');

    // buat pengecualian untuk tombol mulai
    if (text == 'mulai') {
        return
    }

    pilihan.push(text) //save data yang terpilih

    // jika tombol ya/tidak (tombol pilihan terakhir) ditekan
    if (text == 'ya' || text == 'tidak') {
        kodePilihan = ''
        j = 0

        //membuat kode pilihan 
        for (let i = 0; i < opsi.length; i++) {
            if (opsi[i].indexOf(pilihan[j]) == -1) {
                continue
            }
            if (pilihan[j] == 'gaming') {
                kodePilihan = '0200'
                break
            }
            kodePilihan += opsi[i].indexOf(pilihan[j])
            j++
        }
        let i = rules.indexOf(kodePilihan)
        if (i > 9) {
            i %= 9
        }
        let spesifikasi = rekomendasi[i]
        let namaLaptop = ''
        let text = `RAM: ${spesifikasi[0]}, CPU: ${spesifikasi[1]}, Memori: ${spesifikasi[2]} dan Ukuran Layar: ${spesifikasi[3]}.`
        spesifikasi[4].forEach(e => {
            namaLaptop += e + ','
        });
        $("#hs2").text(text);
        document.getElementById('namaLaptop').value = namaLaptop
    }

})



// DATA
var opsi = [
    ['laptop-standar', 'laptop-professional'],                      //'pro'
    ['dibawah-4jt', 'antara-4jt-10jt', 'diatas-10jt'],              //'budget'
    ['gaming', 'programming', 'desain-grafis', 'music-production'], //'khusus'
    ['paling-cepat', 'cukup-cepat', 'standar'],                     //'kecepatan'
    ['cukup-besar', 'normal'],                                      //'memori'
    ['ya', 'tidak'],                                                //'portable'
]

var rules = [
    // standard
    '0000', '0001', '0010', '0011',
    '0100', '0101', '0110', '0111',
    '0200', '0201', '0210', '0211',

    // professional
    '10000', '10001', '10010', '10011',
    '10100', '10101', '10110', '10111',
    '10200', '10201', '10210', '10211',
    '11000', '11001', '11010', '11011',
    '11100', '11101', '11110', '11111',
    '11200', '11201', '11210', '11211',
    '12000', '12001', '12010', '12011',
    '12100', '12101', '12110', '12111',
    '12200', '12201', '12210', '12211',
    '13000', '13001', '13010', '13011',
    '13100', '13101', '13110', '13111',
    '13200', '13201', '13210', '13211',
]

// rekomendasi sesuai dengan urutan index rules diatas
// RAM, CPU, MEMORY, UKURAN LAYAR dan NAMA LAPTOP
var rekomendasi = [
    // data 1
    ["4GB", "core-i3", "512GB-HDD", "11,6'",
        ["ASUS Laptop E203MAH", "ASUS VivoBook 14 K413FA", "ASUS VivoBook 14 K413FQ"]],

    // data 2
    ["4GB", "AMD", "500GB-HDD", "14'",
        ["Aspire 3 Slim (A314-22)", "ASUS Laptop E203MAH", "Asus  VivoBook S S430FN"]],

    // data 3
    ["4GB", "core-i3", "1TB-HDD", "14'",
        ["ASUS VivoBook S14 S433FL", "ASUS ZenBook 14 UX433FAC", "ASUS ZenBook 15 UX533FTC"]],

    // data 4
    ["4GB", "core-i5", "1TB-HDD", "14'",
        ["MacBook Pro 13 Inci Touch Bar", "MacBook Pro 2020", "ASUS ZenBook 14 UX433FN"]],

    // data 5
    ["8GB", "core-i5", "1TB-SSD", "14'",
        ["Helios 300 (PH315-53)", "HP Pavilion Gaming Laptop 15-ec1071AX", "HP Pavilion x360 - 14-dh1055tx"]],

    // data 6
    ["4GB", "core-i3", "1TB-SSD", "14'",
        ["HP Pavilion x360 - 14-dh1054tx", "HP Pavilion Gaming Laptop - 15-dk1041tx", "ASUS ZenBook Flip 14 UX461FN"]],

    // data 7
    ["8GB", "AMD", "512GB-SSD", "15,6'",
        ["Lenovo Thinkpad E470", "Lenovo Ideapad 330", "IdeaPad Slim 5i (14) Intel"]],

    // data 8
    ["8GB", "AMD", "512GB-SSD", "14'",
        ["ASUS ZenBook 15 UX533FTC", "ASUS ZenBook 15 UX533FD", "ASUS ZenBook 15 UX533FTC"]],

    // data 9
    ["16GB", "core-i7", "512-SSD", "15,6'",
        ["HP Pavilion Gaming Laptop 15-ec1071AX", "HP Pavilion Gaming Laptop - 15-dk1041tx", "HP Pavilion x360 - 14-dh1055tx"]],

    // data 10
    ["4GB", "core-i3", "512-SSD", "14'",
        ["ASUS VivoBook S14 S433FL", "MacBook Pro 2020", "ASUS ZenBook 15 UX533FTC"]],
]