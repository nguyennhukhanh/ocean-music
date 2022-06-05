-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 05, 2022 lúc 04:48 PM
-- Phiên bản máy phục vụ: 10.4.22-MariaDB
-- Phiên bản PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `musicapp`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `album`
--

CREATE TABLE `album` (
  `album_id` int(11) NOT NULL,
  `album_name` text COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `album_image` text COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `album`
--

INSERT INTO `album` (`album_id`, `album_name`, `album_image`) VALUES
(1, 'K-Walker, G-Dragon và hơn thế nữa', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fimg1.jpg?alt=media&token=20529d99-fae1-483b-988e-ec241c40a3f4'),
(2, 'Thiều Bảo Trâm và những người bạn', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fimg3.jpg?alt=media&token=76b4940a-b0dd-411b-a73a-0b8d03bb1961'),
(3, 'Cháy với những bản nhạc Âu Mỹ', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fimg4.jpg?alt=media&token=e7d0cb19-e6e4-4f95-a1ad-be01fac2185c'),
(4, 'Lo-fi một chút cùng tôi nhé', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fimg5.jpg?alt=media&token=5fe0e91b-7167-4e70-b8ce-cdae17a8643c'),
(5, 'Nhảy cùng bữa tiệc', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fimg6.jpg?alt=media&token=520ce083-45e3-4c09-9f84-db85dd707bbc'),
(6, 'Cảm hứng cho công việc', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fimg7.jpg?alt=media&token=12d7569b-e1a0-4e20-acab-b66d521483b0'),
(7, 'Một thời đã xa', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fimg8.jpg?alt=media&token=5220bb72-56f3-453e-8c8a-a8c3c557176a'),
(8, 'Lạc Trôi và những bản nhạc triệu view của MTP', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fimg9.jpg?alt=media&token=2e861ece-5837-4497-b194-58f2c0722034'),
(9, 'Nhạc Việt Tropical Hay Nhất', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fimg10.jpg?alt=media&token=4cf67528-d567-47ac-9008-df7eed1d9c2b');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(50) COLLATE utf8mb4_vietnamese_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`) VALUES
(1, 'V-Pop'),
(2, 'Ballad'),
(3, 'EDM'),
(4, 'Dance'),
(5, 'Jazz'),
(6, 'Rap');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `songs`
--

CREATE TABLE `songs` (
  `id` int(11) NOT NULL,
  `title` varchar(70) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `artist` varchar(50) COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `artwork` text COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `url` text COLLATE utf8mb4_vietnamese_ci NOT NULL,
  `category` int(11) DEFAULT NULL,
  `album` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Đang đổ dữ liệu cho bảng `songs`
--

INSERT INTO `songs` (`id`, `title`, `artist`, `artwork`, `url`, `category`, `album`) VALUES
(1, 'Vợ Người Ta', 'Phan Mạnh Quỳnh', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fvonguoita.jpg?alt=media&token=5c5f5d58-bb8a-426a-bfdb-3ef185708f8b', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FVoNguoiTa.mp3?alt=media&token=f1e5a704-9af1-415d-9daf-2ec00ff53729', 1, 7),
(2, 'Buông Đôi Tay Nhau Ra', 'MTP', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fbuongdoitaynhaura.jpg?alt=media&token=408d7758-98ce-44a9-ba06-85168e810214', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FBuongDoiTayNhauRa.mp3?alt=media&token=176b65b3-9b78-4d2d-93d3-a438838157aa', 1, 8),
(3, 'Đám Cưới Nha', 'Hồng Thanh', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fdamcuoinha.jpg?alt=media&token=f77bc97a-9161-45b3-b461-468edcaaf4fb', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2Fdamcuoinha.mp3?alt=media&token=f179a4d6-a4e4-44b0-8f28-26bbb3236cc3', 1, 5),
(4, 'So Far Away', 'Martin Garrix', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2FSoFarAway.png?alt=media&token=76d1078b-02b3-4c66-9ecb-fe9fbbc14ae1', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FSoFarAway-MartinGarrixDavidGuettaJamieScottRomyDya-5298615.mp3?alt=media&token=c33dd135-b0e9-4961-a728-3ff3e8f1d3e4', 2, 3),
(5, 'Chỉ Là Giấc Mơ', 'Bùi Anh Tuấn', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2FChiLaGiacMo.jpg?alt=media&token=c05b1cd9-4d43-47d8-ba55-55a70f592abc', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FChiLaGiacMoNewVersion-BuiAnhTuan-3894643.mp3?alt=media&token=8153fb95-1c2c-48c0-8096-b9b9125b555c', 2, 9),
(6, 'Nụ Hồng Mong Manh', 'Bích Phương', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fnuhongmongmanh.jpg?alt=media&token=1ef25309-2a2b-4efe-bec4-a40674ae8a3c', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FN%E1%BB%A5%20H%E1%BB%93ng%20Mong%20Manh.mp3?alt=media&token=324cd97f-4dc0-49d7-87fd-f02bbb0b5d69', 4, 7),
(7, 'Em Của Ngày Hôm Qua', 'MTP', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2FEm_c%E1%BB%A7a_ng%C3%A0y_h%C3%B4m_qua.png?alt=media&token=84ee4a3d-34c3-44bf-9a00-089ec3e87dc6', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FEmCuaNgayHomQua.mp3?alt=media&token=6cb1c7bd-8434-4bc7-9988-7f3eca1e28f4', 1, 8),
(8, 'Ngày Không Có Em', 'ThịnhK', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fngaykhongcoem.png?alt=media&token=c2d2575b-df12-4e40-8897-d9fbcc1efa05', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2Fyt1s.com%20-%20NG%C3%80Y%20KH%C3%94NG%20C%C3%93%20EM%20%20Th%E1%BB%8BnK%20Century%20Official.mp3?alt=media&token=a0a62e65-dc45-4a98-a422-b48b414d92df', 6, 2),
(9, 'Có Em', 'Madihu', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fcoem.jpg?alt=media&token=87cdda15-cc4a-404e-b5b3-d1a2c0bde99a', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2Fyt1s.com%20-%20Madihu%20%20C%C3%B3%20em%20Feat%20Low%20G%20Official%20MV.mp3?alt=media&token=eee9a9b8-268e-456e-b1bd-e02de7779a58', 6, 2),
(10, 'There Is Nothing Holding Me Back', 'Shawn Mendes', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2FNHMB.jpg?alt=media&token=dd1635eb-9333-46a6-b013-154b67c2dadc', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2Fyt1s.com%20-%20Shawn%20Mendes%20%20Theres%20Nothing%20Holdin%20Me%20Back.mp3?alt=media&token=3aeba8d8-4b23-4bdf-a88e-dbbbdd1db470', 4, 3),
(11, 'Treat U Better', 'Shawn Mendes', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2FSm.jpg?alt=media&token=36551dc4-b3e2-4892-8eee-6b816c2eed23', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2Fyt1s.com%20-%20Shawn%20Mendes%20%20Treat%20You%20Better.mp3?alt=media&token=409bb920-250c-461e-bade-8754337a52fc', 2, 3),
(12, 'Jopping', 'SuperM', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fsuperm.jpg?alt=media&token=f09845c9-d92b-4b95-b09a-03364379a517', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2Fyt1s.com%20-%20SuperM%20%EC%8A%88%ED%8D%BC%EC%97%A0%20Jopping%20MV.mp3?alt=media&token=4ffda3cb-ee0e-4b42-b121-b164714ad646', 5, 6),
(13, 'Dance The Night Away', 'TWICE', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2F276037051_355015566511136_2762832480430351693_n.jpg?alt=media&token=34c52405-e45a-40ea-ab8b-ed95db5d1309\r\n', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2Fyt1s.com%20-%20TWICE%20Dance%20The%20Night%20Away%20MV.mp3?alt=media&token=c71a1cfe-6652-44de-98fd-1729e203a5dc', 4, 4),
(14, 'The Feels', 'TWICE', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2F161684727_2626201037680258_7516008303813182999_n.jpg?alt=media&token=2476dacb-c59f-49d2-8f63-569d6a68c39d', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2Fyt1s.com%20-%20TWICE%20The%20Feels%20MV.mp3?alt=media&token=5a3f7669-6681-449e-8d14-bdaf48452ad3', 5, 6),
(15, 'What Is Love', 'TWICE', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fminaaa.jpg?alt=media&token=c0fe00de-a25e-49fd-9efa-09f6d7cd1366', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2Fyt1s.com%20-%20TWICE%20What%20is%20Love%20MV.mp3?alt=media&token=1fcbb843-4f0c-4b34-9cda-da89c557a04c', 2, 5),
(16, 'Hey Kids', 'Nura Ito', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2F871329.jpg?alt=media&token=2022cbe7-aa81-4f79-8804-1f52b2e5b01c', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2Fyt1s.com%20-%20TV%E3%82%A2%E3%83%8B%E3%83%A1%E5%91%AA%E8%A1%93%E5%BB%BB%E6%88%A6%E3%83%8E%E3%83%B3%E3%82%AF%E3%83%AC%E3%82%B8%E3%83%83%E3%83%88OP%E3%83%A0%E3%83%BC%E3%83%93%E3%83%BC%E7%AC%AC2%E3%82%AF%E3%83%BC%E3%83%ABOP%E3%83%86%E3%83%BC%E3%83%9EWhoya%20ExtendedVIVID%20VICE.mp3?alt=media&token=968587a6-2f13-473c-9233-cf672d73a411', 3, 5),
(17, 'Chúng ta không thuộc về nhau', 'MTP', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fchungtakhongthuocvenhau.jpg?alt=media&token=f2479609-5785-46b2-a1c4-cc0ed7c8eb12', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2FChungTaKhongThuocVeNhau-SonTungMTP-4528181.mp3?alt=media&token=c01e1d71-185c-4267-970d-b1e1c349b599', 1, 8),
(18, 'Akame Ga Kill', 'Akame', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fakame.jpg?alt=media&token=ea570432-83a9-4580-b20a-0df568658aea', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2Fyt1s.com%20-%20Akame%20Ga%20Kill.mp3?alt=media&token=8fb340cc-0f23-4475-9bc0-c5e0174b5543', 4, 3),
(19, 'SunShine', 'Nura Rihan', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Frihan.jpg?alt=media&token=ec6d08f6-921d-4d8c-9546-3741ab0221f1', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2Fyt1s.com%20-%20Nurarihyon%20no%20Mago%20AMV%20%20Sunshine.mp3?alt=media&token=69bf789b-04a4-4663-9c0a-76bc83e743c1', 5, 7),
(20, 'Renai Circulation', 'Kana Hanazawa', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2FIto.jpg?alt=media&token=6e4cf475-3723-4f08-a6cf-689ed523c910', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2Fyt1s.com%20-%20Renai%20Circulation%20%20Kana%20Hanazawa%20LYRICS%20Romaji%20%20English.mp3?alt=media&token=3c37b789-934f-46a0-8f50-4826b7809a10', 3, 7),
(21, 'Sweet but Psycho', 'Ava Max', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/Image%2Fswbut.jpg?alt=media&token=8b76cf22-2fa4-4e5d-8710-293a7c92ec19', 'https://firebasestorage.googleapis.com/v0/b/musicapp-8c6fe.appspot.com/o/songs%2Fsweet-but-psycho.mp3?alt=media&token=988c180a-d8ef-4cfd-bca0-5ff1ecea3f7d', 3, 3);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`album_id`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Chỉ mục cho bảng `songs`
--
ALTER TABLE `songs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`category`,`album`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `album`
--
ALTER TABLE `album`
  MODIFY `album_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `songs`
--
ALTER TABLE `songs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `songs`
--
ALTER TABLE `songs`
  ADD CONSTRAINT `songs_ibfk_1` FOREIGN KEY (`category`) REFERENCES `categories` (`category_id`),
  ADD CONSTRAINT `songs_ibfk_2` FOREIGN KEY (`album`) REFERENCES `album` (`album_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
