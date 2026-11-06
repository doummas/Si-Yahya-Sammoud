-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2026 at 04:03 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gestion_parking`
--

-- --------------------------------------------------------

--
-- Table structure for table `parking`
--

CREATE TABLE `parking` (
  `NumPark` int(3) NOT NULL,
  `NomPark` varchar(20) NOT NULL,
  `AdrPark` varchar(50) NOT NULL,
  `Capacite` int(2) DEFAULT NULL,
  `TarifHeur` decimal(6,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `place_dispo`
--

CREATE TABLE `place_dispo` (
  `numplace` int(3) NOT NULL,
  `NumPark` int(3) NOT NULL,
  `codedispo` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `station`
--

CREATE TABLE `station` (
  `NumPark` int(3) NOT NULL,
  `NumPlace` int(3) NOT NULL,
  `ImmatVoit` varchar(11) NOT NULL,
  `DateStat` date DEFAULT NULL,
  `HeurEnt` time NOT NULL,
  `HeurSort` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `voiture`
--

CREATE TABLE `voiture` (
  `ImmatVoit` varchar(11) NOT NULL,
  `CarVoit` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `parking`
--
ALTER TABLE `parking`
  ADD PRIMARY KEY (`NumPark`),
  ADD UNIQUE KEY `NomPark` (`NomPark`);

--
-- Indexes for table `place_dispo`
--
ALTER TABLE `place_dispo`
  ADD PRIMARY KEY (`numplace`,`NumPark`),
  ADD KEY `NumPark` (`NumPark`);

--
-- Indexes for table `station`
--
ALTER TABLE `station`
  ADD PRIMARY KEY (`NumPark`,`NumPlace`,`ImmatVoit`,`HeurEnt`,`HeurSort`),
  ADD KEY `NumPlace` (`NumPlace`,`NumPark`),
  ADD KEY `ImmatVoit` (`ImmatVoit`);

--
-- Indexes for table `voiture`
--
ALTER TABLE `voiture`
  ADD PRIMARY KEY (`ImmatVoit`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `place_dispo`
--
ALTER TABLE `place_dispo`
  ADD CONSTRAINT `place_dispo_ibfk_1` FOREIGN KEY (`NumPark`) REFERENCES `parking` (`NumPark`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `station`
--
ALTER TABLE `station`
  ADD CONSTRAINT `station_ibfk_1` FOREIGN KEY (`NumPlace`,`NumPark`) REFERENCES `place_dispo` (`numplace`, `NumPark`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `station_ibfk_2` FOREIGN KEY (`ImmatVoit`) REFERENCES `voiture` (`ImmatVoit`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
