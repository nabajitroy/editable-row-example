-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2021 at 12:23 PM
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
-- Database: `procure_to_pay`
--

-- --------------------------------------------------------

--
-- Table structure for table `procure_list`
--

CREATE TABLE `procure_list` (
  `id` int(11) NOT NULL,
  `receipt_date` datetime NOT NULL,
  `invoice_no` varchar(100) NOT NULL,
  `invoice_date` date NOT NULL,
  `company_name` varchar(200) NOT NULL,
  `ifs_inward_date` datetime NOT NULL,
  `placed_to_qc_date` datetime NOT NULL,
  `received_from_qc_date` datetime NOT NULL,
  `status` varchar(100) NOT NULL,
  `given_to_purchase_date` datetime NOT NULL,
  `received_from_purchase_date` datetime NOT NULL,
  `received_by_a_cs` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `procure_list`
--

INSERT INTO `procure_list` (`id`, `receipt_date`, `invoice_no`, `invoice_date`, `company_name`, `ifs_inward_date`, `placed_to_qc_date`, `received_from_qc_date`, `status`, `given_to_purchase_date`, `received_from_purchase_date`, `received_by_a_cs`) VALUES
(8, '2021-05-20 00:00:00', '90909', '2021-05-03', 'Sidney transfar', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Cleared', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, '2021-05-12 00:00:00', '90909', '2021-05-28', 'Complet...', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Complete/Partially Scrapped', '0000-00-00 00:00:00', '2021-05-03 00:00:00', '0000-00-00 00:00:00'),
(10, '0000-00-00 00:00:00', '444', '0000-00-00', 'Complet...', '2021-05-20 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Complet...', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, '0000-00-00 00:00:00', 'wrewrew', '2021-05-26', 'My company', '2021-05-19 00:00:00', '2021-05-28 00:00:00', '0000-00-00 00:00:00', 'Cleared', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, '0000-00-00 00:00:00', '49000', '2021-05-20', 'Hell Dot com', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'Cleared', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '2021-05-05 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `procure_list`
--
ALTER TABLE `procure_list`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `procure_list`
--
ALTER TABLE `procure_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
