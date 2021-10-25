-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 22, 2021 at 08:29 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `roz_webex`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `status` varchar(50) NOT NULL,
  `created` datetime NOT NULL DEFAULT current_timestamp(),
  `updated` datetime NOT NULL DEFAULT current_timestamp(),
  `webex` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `status`, `created`, `updated`, `webex`) VALUES
(28, 'Achim', 'Frankfurth', 'afrankfurth@rotzler.de', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(29, 'Andreas', 'Hülskopf', 'ahuelskopf@rotzler.de', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(30, 'Ankur', 'Katiyar', 'akatiyar@rotzler.com', 'Not Verified', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(31, 'Branko', 'Radovic', 'bradovic@rotzler.de', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(32, 'Christoph', 'Brauns', 'cbrauns@rotzler.de', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(33, 'Cameron', 'Wadden', 'cwadden@rotzler.com', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(34, 'Egbert', 'Heid', 'eheid@rotzler.de', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(35, 'Frank', 'von der Thuesen', 'fvonderthuesen@rotzler.de', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(36, 'Gordon', 'Smith', 'gsmith@rotzler.com', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(37, 'Harish', 'Manjunath', 'hmanjunath@rotzler.com', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(38, 'Johannes', 'Hermanns', 'jhermanns@rotzler.de', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(39, 'Juergen', 'Rotzler', 'jrotzler@rotzler.de', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(40, 'Markus', 'Cavallucci', 'mcavallucci@rotzler.de', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(41, 'Marc', 'Felber', 'mfelber@rotzler.de', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(42, 'Michael', 'Glaser', 'mglaser@rotzler.de', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(43, 'Mona', 'Kern', 'mkern@rotzler.de', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(44, 'Markus', 'Schwer', 'mschwer@rotzler.de', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(45, 'Naresh', 'Hanji', 'nhanji@rotzler.com', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(46, 'Oliver', 'Küpper', 'okuepper@rotzler.de', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(47, 'Paul', 'Ardila', 'pardila@rotzler.com', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(48, 'Stefan', 'Beyersdorff', 'sbeyersdorff@rotzler.de', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(49, 'Stefan', 'Frey', 'sfrey@rotzler.de', 'Active', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(50, 'Ursula', 'Gebhardt', 'ugebhardt@rotzler.de', 'Not Verified', '2020-05-08 13:08:50', '2020-05-08 13:08:50', 1),
(51, 'Sabine', 'Weniger', 'sweniger@rotzler.de', '', '2021-04-22 11:58:03', '2021-04-22 11:58:03', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
