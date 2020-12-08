-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 03 Des 2020 pada 09.53
-- Versi server: 10.4.14-MariaDB
-- Versi PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rekomendasi_laptop`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_laptop`
--

CREATE TABLE `data_laptop` (
  `id` double DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `harga` double DEFAULT NULL,
  `merk` varchar(100) DEFAULT NULL,
  `tipe_memory` varchar(100) DEFAULT NULL,
  `ram` varchar(100) DEFAULT NULL,
  `processor` varchar(100) DEFAULT NULL,
  `kapasitas_penyimpanan` varchar(100) DEFAULT NULL,
  `ukuran_layar` varchar(100) DEFAULT NULL,
  `link` varchar(100) DEFAULT NULL,
  `gambar` varchar(100) DEFAULT NULL,
  `keterangan` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `data_laptop`
--

INSERT INTO `data_laptop` (`id`, `title`, `harga`, `merk`, `tipe_memory`, `ram`, `processor`, `kapasitas_penyimpanan`, `ukuran_layar`, `link`, `gambar`, `keterangan`) VALUES
(1, 'Asus  VivoBook S S430FN', 7599000, 'ASUS', 'SSD', '4GB ', ' Intel® Core™ i3-8145U', '1TB', '14\'', 'https://www.asus.com/id/Laptops/ASUS-VivoBook-S14-S430FN/', 'ASUS VivoBook S14 S430FN.jpg', '\"VivoBook S14 S430 yang baru ini menambahkan sedikit kepribadian untuk gaya hidup mobile Anda'),
(2, 'ASUS VivoBook S14 S433FL', 12299000, 'ASUS', 'SSD', '8GB', ' Intel® Core™ i5-10210U/NVIDIA® GeForce® MX250', '1TB', '14\'', 'https://www.asus.com/id/Laptops/ASUS-VivoBook-S14-S433FL/', 'ASUS VivoBook S14 S433FL.jpg', '\"VivoBook S S433 membuat Anda tetap produktif dan terhibur'),
(3, 'ASUS VivoBook S14 S433FL', 14299000, 'ASUS', 'SSD', '8GB', ' Intel® Core™ i7-10510U/NVIDIA® GeForce® MX250', '1TB', '14\'', 'https://www.asus.com/id/Laptops/ASUS-VivoBook-S14-S433FL/', 'ASUS VivoBook S14 S433FL.jpg', '\"VivoBook S S433 membuat Anda tetap produktif dan terhibur'),
(4, 'ASUS VivoBook 14 K413FA', 8599000, 'ASUS', 'SSD', '8GB', 'Intel® Core™ i3-10110U', '512GB', '14\'', 'https://www.asus.com/id/Laptops/ASUS-VivoBook-14-K413FA/', 'ASUS VivoBook 14 K413FA.jpg', '\"Layar NanoEdge berbezel tipis memberikan pengalaman menonton yang mendalam dengan menghadirkan laya'),
(5, 'ASUS VivoBook 14 K413FA', 9099000, 'ASUS', 'SSD', '8GB', 'Intel® Core™ i3-10110U/Office pre-installed', '512GB', '14\'', 'https://www.asus.com/id/Laptops/ASUS-VivoBook-14-K413FA/', 'ASUS VivoBook 14 K413FA.jpg', '\"Layar NanoEdge berbezel tipis memberikan pengalaman menonton yang mendalam dengan menghadirkan laya'),
(6, 'ASUS VivoBook 14 K413FQ', 10799000, 'ASUS', 'SSD', '8GB', 'Intel® Core™ i5-10210U/MX350', '512GB', '14\'', 'https://www.asus.com/id/Laptops/ASUS-VivoBook-14-K413FQ/', 'ASUS VivoBook 14 K413FQ.jpg', '\"VivoBook Ultra 14 K413 dengan cover logamnya membuka jalan baru dengan mendobrak batas'),
(7, 'ASUS Laptop E203MAH', 3699000, 'ASUS', 'HDD', '4GB', 'Intel® Celeron® N4000', '512GB', '11.6\'', 'https://www.asus.com/id/Laptops/ASUS-Laptop-E203MAH/', 'ASUS Laptop E203MAH.jpg', '\"E203 menawarkan mobilitas yang mudah'),
(8, 'ASUS VivoBook 14 X403FA', 7549000, 'ASUS', 'SSD', '4GB', 'Intel® Core™ i3-8145U', '512GB', '14\'', 'https://www.asus.com/id/Laptops/ASUS-VivoBook-14-X403FA/', 'ASUS VivoBook 14 K413FA.jpg', '\"Anda tidak ingin menghabiskan seluruh hari Anda terjebak di meja saja. VivoBook Ultra K403 menawark'),
(9, 'ASUS ZenBook 14 UX433FAC', 14299000, 'ASUS', 'SSD', '8GB', 'Intel® Core™ i5-10210U', '512GB', '14\'', 'https://www.asus.com/id/Laptops/ASUS-ZenBook-14-UX433FAC/', 'ASUS ZenBook 14 UX433FAC.jpg', '\"Dirancang untuk memberi Anda area layar terbanyak dalam ruang fisik paling sedikit'),
(10, 'ASUS ZenBook 14 UX433FLC', 20299000, 'ASUS', 'SSD', '16GB', 'Intel® Core™ i7-10510U', '512GB', '14\'', 'https://www.asus.com/id/Laptops/ASUS-ZenBook-14-UX433FLC/', 'ASUS ZenBook 14 UX433FLC.jpg', '\"Dirancang untuk memberi Anda area layar terbanyak dalam ruang fisik paling sedikit'),
(11, 'ASUS ZenBook 14 UX433FN', 18299000, 'ASUS', 'SSD', '16GB', 'Intel® Core™ i7-8565U', '512GB', '14\'', 'https://www.asus.com/id/Laptops/ASUS-ZenBook-14-UX433FN/', 'ASUS ZenBook 14 UX433FN.jpg', '\"Dengan ZenBook apa pun'),
(12, 'ASUS ZenBook 14 UX434FAC', 15299000, 'ASUS', 'SSD', '8GB', 'Intel® Core™ i5-10210U', '512GB', '14\'', 'https://www.asus.com/id/Laptops/ASUS-ZenBook-14-UX434FAC/', 'ASUS ZenBook 14 UX434FAC.jpg', '\"Dirancang untuk memberi Anda lebih banyak area layar dalam ruang fisik yang lebih kecil'),
(13, 'ASUS ZenBook 15 UX533FD', 22499000, 'ASUS', 'SSD', '16GB', 'Intel® Core™ i7-8565U', '512GB', '15\'', 'https://www.asus.com/id/Laptops/ASUS-ZenBook-15-UX533FD/', 'ASUS ZenBook 15 UX533FD.jpg', '\"Kreativitas menuntut tampilan layar yang luar biasa'),
(14, 'ASUS ZenBook 15 UX533FTC', 22999000, 'ASUS', 'SSD', '16GB', 'Intel® Core™ i7-10510U', '512GB', '15\'', 'https://www.asus.com/id/Laptops/ASUS-ZenBook-15-UX533FTC/', 'ASUS ZenBook 15 UX533FTC.jpg', '\"Dirancang untuk memberi Anda area layar terbanyak dalam ruang fisik paling sedikit'),
(15, 'ASUS ZenBook Flip 14 UX461FN', 15299000, 'ASUS', 'SSD', '8GB', 'Intel® Core™ i5-8265U', '512GB', '14\'', 'https://www.asus.com/id/Laptops/ASUS-ZenBook-Flip-14-UX461FN/', 'ZenBook_Flip_14_UX461UN_L_1.jpg', '\"Seri ZenBook memang berstandar tinggi sebagai seri khusus untuk laptop tipis'),
(16, 'Aspire 3 Slim (A314-22)', 4655030, 'ACER', 'SSD', '4GB', 'AMD Athlon™ Silver 3050U dual-core processor', '256GB', '14\'', 'https://store.acer.com/en-id/aspire-3-a314-22-athlon-silver', 'Aspire 3 Slim (A314-22).png', 'Desain Modern dengan Narrow Border Display. RAM & Storage yang bisa diupgrade. 46% Performa lebih ba'),
(17, 'Swift 3 (SF314-42)', 9999000, 'ACER', 'SSD', '8GB', 'AMD Ryzen™ 5 4500U', '512GB', '14\'', 'https://store.acer.com/en-id/swift-3-sf314-42-ryzen-5-4500u-silver', 'Swift 3 (SF314-42).png', '\"Performa luar biasa dibalut dalam notebook yg ringan'),
(18, 'Helios 300 (PH315-53)', 19499000, 'ACER', 'SSD', '8GB', 'Intel® Core™ i7-10750H', '512GB', '15.6\'', 'https://store.acer.com/en-id/predator-helios-300-ph315-53-i7-10750h-rtx2060-ohs', 'Helios 300 (PH315-53).png', 'Performa meningkat 11.88% dengan menggunakan Nitro Sense Lebih stabil dan durabilitas tinggi dengan '),
(19, 'HP Pavilion Gaming Laptop - 15-dk1041tx', 15299000, 'HP', 'SSD', '4GB', ' Intel® Core™ i75', '512GB', '14\'', 'https://store.hp.com/id-id/default/laptops-tablets/personal-laptops/pavilion-laptops/hp-pavilion-x36', 'HP Pavilion x360 - 14-dh1055tx.webp', '\"AMD Ryzen™ 7 processor Windows 10 Home Single Language 64 15.6\"\" diagonal'),
(20, 'HP Pavilion x360 - 14-dh1054tx', 14799000, 'HP', 'SSD', '2GB', 'Intel® Core™ i7 processor', '512GB', '14\'', 'https://store.hp.com/id-id/default/laptops-tablets/personal-laptops/pavilion-laptops/hp-pavilion-x36', 'HP Pavilion x360 - 14-dh1054tx.webp', '\"10th Generation Intel® Core™ i7 processor Windows 10 Home Single Language 64 '),
(21, 'HP Pavilion Gaming Laptop 15-ec1071AX', 16299000, 'HP', 'SSD', '4GB', 'AMD Ryzen™ 7 processor', '512GB', '15.6\'', 'https://store.hp.com/id-id/default/laptops-tablets/personal-laptops/pavilion-laptops/hp-pavilion-15-', 'HP Pavilion Gaming Laptop 15-ec1071AX.webp', '\"AMD Ryzen™ 7 processor Windows 10 Home Single Language 64 15.6\"\" diagonal'),
(22, 'HP Pavilion x360 - 14-dh1055tx', 14799000, 'HP', 'SSD', '2GB', 'Intel® Core™ i7 processor', '512GB', '14\'', 'https://store.hp.com/id-id/default/laptops-tablets/personal-laptops/pavilion-laptops/hp-pavilion-x36', 'HP Pavilion x360 - 14-dh1055tx.webp', '\"10th Generation Intel® Core™ i7 processor '),
(23, 'IdeaPad Slim 5i (14) Intel', 10999000, 'LEONOVO', 'SSD', '16GB', 'Intel® Core™ i7-1065G7 Processor', '512GB', '14\'', 'https://www.lenovo.com/id/in/laptops/ideapad/s-series/IdeaPad-5i-14IIL05/p/88IPS501390', 'IdeaPad Slim 5i (14) Intel.webp', '\"deaPad Slim 5i hadir dengan banyak pilihan termasuk port USB-C dengan power delivery yang mengganti'),
(24, 'Lenovo Ideapad 330', 3370838, 'LEONOVO', 'HDD', '4GB', 'AMD A4-9125', '500GB', '14\'', 'https://my-best.id/88066', 'Lenovo IDEAPAD 300.jpg', '\"Prosesor AMD mungkin tidak sering terdengar karena banyaknya produsen yang menggunakan prosesor Int'),
(25, 'Lenovo Ideapad 320', 3271650, 'LEONOVO', 'HDD', '4GB', 'Intel Celeron N3350', '1TB', '14\'', 'https://my-best.id/88066', 'Lenovo Ideapad 320.jpg', '\"Dengan merogoh kocek sekitar 3 jutaan saja'),
(26, 'Lenovo Thinkpad E470', 11450000, 'LEONOVO', 'HDD', '4GB', 'Intel Core i5', '1TB', '14\'', 'https://my-best.id/88066', 'Lenovo Thinkpad E470.jpeg', '\"Laptop Lenovo seri ThinkPad ini sudah menggunakan generasi CPU Intel Core yang cukup terbaru');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
