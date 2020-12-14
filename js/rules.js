// RULES
pilihan = [
    ['laptop-standar', 'laptop-professional'],                      //pro       => 2 pilihan
    ['dibawah-4jt', 'antara-4jt-10jt', 'diatas-10jt'],              //budget    => 3 pilihan
    ['gaming', 'programming', 'desain-grafis', 'music-production'], //khusus    => 4 pilihan
    ['paling-cepat', 'cukup-cepat', 'standar'],                     //kecepatan => 3 pilihan
    ['cukup-besar', 'normal'],                                      //memori    => 2 pilihan
    ['ya', 'tidak'],                                                //portable  => 2 pilihan
]

$(".selector").click(function () {
    let text = $(this).text().toLowerCase().replace(' ', '-');

    if (text == 'mulai') {
        return
    }

    for (e in pilihan) {
        pilihan.e.forEach(data => {
            console.log(data);
        });
    }
})