<!doctype html>
<html lang="id">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">


    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <link rel="stylesheet" href="../css/rekomendasi.css">
    <link rel="stylesheet" href="../css/responsive.css">

    <title>Rekomendasi</title>
</head>

<body>
    <div class="judul">
        Contoh Laptop yang sesuai dengan kebutuhan kamu:<br>

        <!-- ini nama-nama laptop dari index root tipe string -->
        <!-- Contoh data: ASUS ZenBook 15 UX533FTC,ASUS ZenBook 15 UX533FD,ASUS ZenBook 15 UX533FTC, -->
        <!-- kalau perlu dibuat dalam bentuk array bisa langsung d split sja -->
        <?php
        //mysql

        function rp($angka)
        {
            $hasil_rupiah = "Rp " . number_format($angka, 2, ',', '.');
            return $hasil_rupiah;
        }

        // DB LOCAL
        // $link = mysqli_connect("localhost", "root", "", "rek_laptop");

        // DB HOSTINGER
        $link = mysqli_connect("localhost", "u288944321_rek_laptop", "yY1cxgHNeN;3", "u288944321_rek_laptop");

        $nmlp = explode(",", $_POST["namaLaptop"]);

        $sql = "SELECT * FROM data_laptop WHERE ";
        for ($i = 0; $i < count($nmlp) - 1; $i++) {
            $sql .= " `title`='$nmlp[$i]'";
            if ($i != count($nmlp) - 2) {
                $sql .= " OR";
            }
        }
        $i;
        $query = mysqli_query($link, $sql);
        ?>
    </div>

    <div class="container">
        <div class="row">

            <!-- ITERASI KONTEN DISINI -->
            <?php while ($row = mysqli_fetch_array($query)) { ?>
                <div class="col-sm-4">
                    <div class="card">
                        <img src="../img/data-laptop/<?= $row['gambar'] ?>" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title"><?= $row['title'] ?></h5>
                            <div class="label"><?= $_POST['jp1'] ?></div>
                            <p class="card-text">
                                <?= $row['keterangan'] ?>
                                <div style="display: none;" id="c<?= $i ?>">
                                    <!-- Tingaal buat css untuk percantik tampilannya -->
                                    Ram : <?= $row['ram'] ?> <br>
                                    Merk : <?= $row['merk'] ?> <br>
                                    Kapasistas : <?= $row['kapasitas_penyimpanan'] . ' ' . $row['tipe_memory'] ?> <br>
                                    Harga : <?= rp($row['harga']) ?> <br>
                                    Processor : <?= $row['processor'] ?> <br>
                                    Ukuran Layar : <?= $row['ukuran_layar'] ?> <br>
                                </div>
                            </p>
                            <div class="card-btn">
                                <button class="btn btn-primary" onclick=" document.getElementById('c<?= $i ?>').style.display = (document.getElementById('c<?= $i ?>').style.display == 'none') ? 'block' : 'none';" id="s<?= $i ?>">Spesifikasi</button>
                                <a href="<?= $row['link'] ?>" class="btn btn-success">Beli online</a>
                            </div>
                        </div>
                    </div>
                </div>
            <?php $i++;
            } ?>
            <!-- END ITERASI -->

        </div>
    </div>

</body>

</html>