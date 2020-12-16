let opsi = [
    ['laptop-standar', 'laptop-professional'],                      //'pro'
    ['dibawah-4jt', 'antara-4jt-10jt', 'diatas-10jt'],              //'budget'
    ['gaming', 'programming', 'desain-grafis', 'music-production'], //'khusus'
    ['paling-cepat', 'cukup-cepat', 'standar'],                     //'kecepatan'
    ['cukup-besar', 'normal'],                                      //'memori'
    ['ya', 'tidak'],                                                //'portable'
]

// membuat rules (kemungkinan kombinasi antar opsi)
let rules = [
    // standard
    [0, 0, '-', '-', 0, 0], [0, 0, '-', '-', 0, 1], [0, 0, '-', '-', 1, 0], [0, 0, '-', '-', 1, 1],
    [0, 1, '-', '-', 0, 0], [0, 1, '-', '-', 0, 1], [0, 1, '-', '-', 1, 0], [0, 1, '-', '-', 1, 1],
    [0, 2, '-', '-', 0, 0], [0, 2, '-', '-', 0, 1], [0, 2, '-', '-', 1, 0], [0, 2, '-', '-', 1, 1],

    // professional
    [1, '-', 0, 0, 0, 0], [1, '-', 0, 0, 0, 1], [1, '-', 0, 0, 1, 0], [1, '-', 0, 0, 1, 1],
    [1, '-', 0, 1, 0, 0], [1, '-', 0, 1, 0, 1], [1, '-', 0, 1, 1, 0], [1, '-', 0, 1, 1, 1],
    [1, '-', 0, 2, 0, 0], [1, '-', 0, 2, 0, 1], [1, '-', 0, 2, 1, 0], [1, '-', 0, 2, 1, 1],
    [1, '-', 1, 0, 0, 0], [1, '-', 1, 0, 0, 1], [1, '-', 1, 0, 1, 0], [1, '-', 1, 0, 1, 1],
    [1, '-', 1, 1, 0, 0], [1, '-', 1, 1, 0, 1], [1, '-', 1, 1, 1, 0], [1, '-', 1, 1, 1, 1],
    [1, '-', 1, 2, 0, 0], [1, '-', 1, 2, 0, 1], [1, '-', 1, 2, 1, 0], [1, '-', 1, 2, 1, 1],
    [1, '-', 2, 0, 0, 0], [1, '-', 2, 0, 0, 1], [1, '-', 2, 0, 1, 0], [1, '-', 2, 0, 1, 1],
    [1, '-', 2, 1, 0, 0], [1, '-', 2, 1, 0, 1], [1, '-', 2, 1, 1, 0], [1, '-', 2, 1, 1, 1],
    [1, '-', 2, 2, 0, 0], [1, '-', 2, 2, 0, 1], [1, '-', 2, 2, 1, 0], [1, '-', 2, 2, 1, 1],
    [1, '-', 3, 0, 0, 0], [1, '-', 3, 0, 0, 1], [1, '-', 3, 0, 1, 0], [1, '-', 3, 0, 1, 1],
    [1, '-', 3, 1, 0, 0], [1, '-', 3, 1, 0, 1], [1, '-', 3, 1, 1, 0], [1, '-', 3, 1, 1, 1],
    [1, '-', 3, 2, 0, 0], [1, '-', 3, 2, 0, 1], [1, '-', 3, 2, 1, 0], [1, '-', 3, 2, 1, 1],
]

// rekomendasi sesuai dengan urutan index rules diatas
// RAM, CPU, MEMORY, UKURAN LAYAR dan NAMA LAPTOP
let rekomendasi = [
    // data 1
    ["4GB", "core-i3", "512GB-HDD", "11,6'",
        ["ASUS Laptop E203MAH", "ASUS VivoBook 14 K413FA", "ASUS VivoBook 14 K413FQ"]],

    // data 2
    ["4GB", "AMD", "500GB-HDD", "14'",
        ["Aspire 3 Slim (A314-22)", "ASUS Laptop E203MAH", "Asus  VivoBook S S430FN"]],

    // data 3
    ["4GB", "core-i3", "1TB-HDD", "14'",
        ["ASUS VivoBook S14 S433FL", "ASUS ZenBook 14 UX433FAC", "ASUS ZenBook 15 UX533FTC"]],
]

// export data
export { opsi, rekomendasi, rules }