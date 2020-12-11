//aktifkan ini untuk mencegah tombol refresh atau back tidak sengaja di tekan
// window.onbeforeunload = function() {
//   return "Apakah anda akan meninggalkan halaman ini?";
// };

// scroll up
window.onload = function () {
    window.scrollBy(0, -5000)
};


//Mulai
$("#mulai").click(function () {
    // button
    $(this).hide();
    $("#standar").show();
    $("#professional").show();

    // chats
    $("#ch_mulai").show();
    $("#ch_ad_p1").show();

});

//pertanyaan 1
//standar
$("#standar").click(function () {
    //button hide
    $(this).hide();
    $("#professional").hide();

    // chats
    $("#ch_user_j1").show();
    var text = $(this).text();
    $("#ch_user_j1").text(text);
    $("#jp1").val(text);

    $("#ch_ad_p2").text("Mau beli laptop dengan budget berapa?");
    $("#ch_ad_p2").show();

    //button show
    $("#budgetdo_2").show();
    $("#budget2-5").show();
    $("#budget_up_5").show();
    $("#chats").height();

});

// professional
$("#professional").click(function () {
    //button
    $(this).hide();
    $("#standar").hide();

    // chats
    $("#ch_user_j1").show();
    var text = $(this).text();
    $("#ch_user_j1").text(text);
    $("#jp1").val(text);
    $("#ch_ad_p2").text("Laptopnya khusus buat apa nih ?");
    $("#ch_ad_p2").show();

    //button show
    $("#pro_gaming").show();
    $("#pro_programming").show();
    $("#pro_desainG").show();
    $("#pro_musicP").show();

});


//pertanyaan 2
//pro pilihan pertanyaan 2
$("#pro_gaming").click(function () {
    pro($(this).text());
});
$("#pro_programming").click(function () {
    pro($(this).text());
});
$("#pro_desainG").click(function () {
    pro($(this).text());
});
$("#pro_musicP").click(function () {
    pro($(this).text());
});


function pro(ss) {
    $("#pro_gaming").hide();
    $("#pro_programming").hide();
    $("#pro_desainG").hide();
    $("#pro_musicP").hide();

    $('#ch_ad_p3').text("Seberapa cepat laptop yang kamu butuhkan ?");
    $('#ch_ad_p3').show();
    $("#ch_user_j2").text(ss);
    $("#ch_user_j2").show();

    $("#jp2").val(ss);

    $("#kec_1").show();
    $("#kec_2").show();
    $("#kec_3").show();
}


//standar pilihan pertanyaan 2
$("#budgetdo_2").click(function () {
    std2($(this).text());
});
$("#budget2-5").click(function () {
    std2($(this).text());
});
$("#budget_up_5").click(function () {
    std2($(this).text());
});

function std2(ss) {
    $('#ch_ad_p3').text("Apakah kamu butuh kapasitas memori yang cukup besar?");
    $('#ch_ad_p3').show();
    $("#ch_user_j2").text(ss);
    $("#ch_user_j2").show();
    $("#jp2").val(ss);

    $("#budgetdo_2").hide();
    $("#budget2-5").hide();
    $("#budget_up_5").hide();

    $("#uk_1").show();
    $("#uk_2").show();

}



//pertanyaan 3 unutk pro

$("#kec_1").click(function () {
    pertkec($(this).text());
});
$("#kec_2").click(function () {
    pertkec($(this).text());
});
$("#kec_3").click(function () {
    pertkec($(this).text());
});


function pertkec(ss) {
    $("#kec_1").hide();
    $("#kec_2").hide();
    $("#kec_3").hide();

    $('#ch_ad_p4').text("Apakah kamu butuh kapasitas memori yang cukup besar?");
    $('#ch_ad_p4').show();
    $("#ch_user_j3").text(ss);
    $("#ch_user_j3").show();
    $("#jp3").val(ss);


    $("#uk_1").show();
    $("#uk_2").show();

}

//pertanyaan 3 unutk standar dan 4 untuk pro

$("#uk_1").click(function () {
    ukP($(this).text());
});

$("#uk_2").click(function () {
    ukP($(this).text());
});

function ukP(ss) {

    $('#ch_ad_p5').text("Laptopnya akan sering dibawa pindah-pindah tempat?");
    $('#ch_ad_p5').show();


    if ($("#jp3").val() == "") {
        $("#jp3").val(ss);
        $("#ch_user_j3").text(ss);
        $("#ch_user_j3").show();
    } else {
        $("#jp4").val(ss);
        $("#ch_user_j4").text(ss);
        $("#ch_user_j4").show();
    }

    $("#uk_1").hide();
    $("#uk_2").hide();
    $("#lo_1").show();
    $("#lo_2").show();

}


//pertanyaan 4 unutk standar dan 5 untuk pro

$("#lo_1").click(function () {
    loP($(this).text());
});

$("#lo_2").click(function () {
    loP($(this).text());
});

function loP(ss) {

    $('#ch_ad_p5').text("Laptopnya akan sering dibawa pindah-pindah tempat?");
    $('#ch_ad_p5').show();


    if ($("#jp4").val() == "") {
        $("#jp4").val(ss);
        $("#ch_user_j5").text(ss);
        $("#ch_user_j5").show();
    } else {
        $("#jp5").val(ss);
        $("#ch_user_j5").text(ss);
        $("#ch_user_j5").show();
    }

    $("#lo_1").hide();
    $("#lo_2").hide();


    $("#lfull").show();
    $("#hs1").show();
    $("#hs2").text("Hello");
    $("#hs2").show();
    $("#hs3").show();

}

// SCROLLING
$(".selector").click(function () {
    window.scrollBy(0, 150)
});