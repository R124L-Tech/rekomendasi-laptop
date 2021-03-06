<!doctype html>
<html lang="id">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsive.css">

    <title>Rekomendasi Laptop</title>
</head>

<body>
    <div class="content-container">
        <div class="gambar-admin">
            <img src="img/admin-fliped.png" alt="">
        </div>

        <div class="chats">
            <div class="background">
                <img src="img/store.jpg" alt="">
            </div>
            <h2>
                <!-- CHAT ADMIN -->
                <div class="chat-admin chat-admin-mulai">
                    Mau beli laptop, tapi bingung cara milihnya?
                </div>
                <div class="chat-admin chat-admin-tambah">
                    Silahkan tekan tombol <strong style="color: blueviolet;">MULAI</strong>, kami akan dengan senang
                    hati membantu…
                </div>

                <!-- CHAT CUSTOMER -->
                <div class="chat-customer" id="ch_mulai" hidden>
                    Mulai
                </div>

                <!-- PERTANYAAN 1 (STANDARD VS PRO) -->
                <div class="chat-admin chat-admin-mulai" id="ch_ad_p1" hidden>
                    Mau beli laptop standard atau laptop professional?
                </div>
                <div class="chat-customer" id="ch_user_j1" hidden>
                    <!-- jawaban pertanyaan 1  -->
                </div>

                <!-- PERTANYAAN 2 (BUDGET || Khusus) -->
                <div class="chat-admin chat-admin-mulai" id="ch_ad_p2" hidden>
                    <!-- Isi pertanyaan 2 -->
                </div>
                <div class="chat-customer" id="ch_user_j2" hidden>
                    <!-- jawaban pertanyaan 2  -->
                </div>

                <!-- PERTANYAAN 3 (BUDGET || Khusus) -->
                <div class="chat-admin chat-admin-mulai" id="ch_ad_p3" hidden>
                    <!-- Isi pertanyaan 3 -->
                </div>
                <div class="chat-customer" id="ch_user_j3" hidden>
                    <!-- jawaban pertanyaan 3  -->
                </div>

                <!-- PERTANYAAN 3.2 Kecepatan untuk Pro -->
                <div class="chat-admin chat-admin-mulai" id="ch_ad_p4" hidden>
                    <!-- Isi pertanyaan 3.2 -->
                </div>
                <div class="chat-customer" id="ch_user_j4" hidden>
                    <!-- jawaban pertanyaan 3.2  -->
                </div>

                <!-- PERTANYAAN 4 Ukuran Ukuran -->
                <div class="chat-admin chat-admin-mulai" id="ch_ad_p5" hidden>
                    <!-- Isi pertanyaan 4 -->
                </div>
                <div class="chat-customer" id="ch_user_j5" hidden>
                    <!-- jawaban pertanyaan 4  -->
                </div>

                <div class="chat-admin chat-admin-mulai" id="hs1" hidden>
                    Laptop yang cocok buat kamu adalah laptop dengan spesifikasi:
                </div>
                <div class="chat-admin chat-admin-tambah" id="hs2" hidden>
                    RAM: 8GB, CPU: AMD, Memori: 512GB-SSD dan Ukuran Layar: 15,6'.
                </div>

            </h2>
        </div>

        <div class="action-center">
            <button class="selector" id="mulai">MULAI</button>

            <!-- button pertanyaan 1 -->
            <button class="selector" id="standar" hidden>Laptop Standar</button>
            <button class="selector" id="professional" hidden>Laptop Professional</button>

            <!-- button pertanyaan 2 pilihan standar -->
            <button class="selector" id="budgetdo_2" hidden>Dibawah 4jt</button>
            <button class="selector" id="budget2-5" hidden>Antara 4jt-10jt</button>
            <button class="selector" id="budget_up_5" hidden>Diatas 10jt</button>

            <!-- button pertanyaan 2 pilihan pro-->
            <button class="selector" id="pro_gaming" hidden>Gaming</button>
            <button class="selector" id="pro_programming" hidden>Programming</button>
            <button class="selector" id="pro_desainG" hidden>Desain Grafis</button>
            <button class="selector" id="pro_musicP" hidden>Music Production</button>
            <!-- button pertanyaan 3 pilihan pro -->
            <button class="selector" id="kec_1" hidden>Paling Cepat</button>
            <button class="selector" id="kec_2" hidden>Cukup Cepat</button>
            <button class="selector" id="kec_3" hidden>Standar </button>

            <!-- button pertanyaan 3 standar dan 4 pro -->
            <button class="selector" id="uk_1" hidden>Cukup besar</button>
            <button class="selector" id="uk_2" hidden>Normal</button>

            <!-- button pertanyaan 4 standar dan 5 pro -->
            <button class="selector" id="lo_1" hidden>Ya</button>
            <button class="selector" id="lo_2" hidden>Tidak</button>

            <!-- liat full rekomendasi -->
            <form action="./rekomendasi/index.php" method="post">
                <input type="text" name="namaLaptop" id="namaLaptop" hidden>
                <input type="text" id="jp1" name="jp1" hidden>
                <input type="text" id="jp2" name="jp2" hidden>
                <input type="text" id="jp3" name="jp3" hidden>
                <input type="text" id="jp4" name="jp4" hidden>
                <input type="text" id="jp5" name="jp5" hidden>
                <button type="submit" class="selector rekomendasi" id="lfull" hidden>Rekomendasi</button>
            </form>
        </div>
    </div>

    <!-- input hasil nilai -->

</body>

<script src="https://code.jquery.com
/jquery-3.5.0.js"></script>
<script src="js/script.js"></script>
<script src="js/rules.js"></script>

</html>