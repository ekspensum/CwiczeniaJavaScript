-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 11 Lis 2018, 16:01
-- Wersja serwera: 10.1.34-MariaDB
-- Wersja PHP: 5.6.37

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `alieninvaders`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `score`
--

CREATE TABLE `score` (
  `idScore` int(11) NOT NULL,
  `score` int(11) NOT NULL,
  `dateTime` datetime NOT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `score`
--

INSERT INTO `score` (`idScore`, `score`, `dateTime`, `idUser`) VALUES
(1, 10, '0000-00-00 00:00:00', 1),
(2, 30, '0000-00-00 00:00:00', 2),
(3, 0, '0000-00-00 00:00:00', 4),
(7, 22, '0000-00-00 00:00:00', 1),
(8, 39, '0000-00-00 00:00:00', 4),
(9, 22, '0000-00-00 00:00:00', 1),
(10, 55, '0000-00-00 00:00:00', 1),
(11, 28, '0000-00-00 00:00:00', 5),
(12, 106, '0000-00-00 00:00:00', 6),
(13, 0, '2018-11-10 18:23:45', 6),
(14, 0, '2018-11-10 18:24:51', 6),
(15, 19, '2018-11-10 18:46:50', 6),
(16, 31, '2018-11-10 19:02:15', 6),
(17, 21, '2018-11-10 19:07:25', 6),
(18, 20, '2018-11-10 19:09:39', 6),
(19, 25, '2018-11-10 19:11:48', 6),
(20, 49, '2018-11-10 19:36:32', 5),
(21, 49, '2018-11-10 19:38:48', 2),
(22, 6, '2018-11-10 20:09:46', 9),
(23, 6, '2018-11-10 20:25:41', 1),
(24, 61, '2018-11-10 20:32:16', 1),
(25, 30, '2018-11-10 20:57:19', 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user`
--

CREATE TABLE `user` (
  `idUser` int(11) NOT NULL,
  `login` varchar(12) COLLATE utf8_polish_ci NOT NULL,
  `password` varchar(12) COLLATE utf8_polish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `user`
--

INSERT INTO `user` (`idUser`, `login`, `password`) VALUES
(1, 'adam', 'adam'),
(2, 'Karol', 'karol'),
(4, 'adam1', 'adam1'),
(5, 'Franek', 'franek'),
(6, 'janek', 'janek'),
(9, 'stasio', 'stasio');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `score`
--
ALTER TABLE `score`
  ADD PRIMARY KEY (`idScore`),
  ADD UNIQUE KEY `idScore` (`idScore`),
  ADD KEY `idUser` (`idUser`);

--
-- Indeksy dla tabeli `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`idUser`),
  ADD UNIQUE KEY `idUser` (`idUser`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `score`
--
ALTER TABLE `score`
  MODIFY `idScore` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT dla tabeli `user`
--
ALTER TABLE `user`
  MODIFY `idUser` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `score`
--
ALTER TABLE `score`
  ADD CONSTRAINT `score_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `user` (`idUser`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
