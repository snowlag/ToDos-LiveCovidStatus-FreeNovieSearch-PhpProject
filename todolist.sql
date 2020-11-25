-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 25, 2020 at 04:50 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todolist`
--

-- --------------------------------------------------------

--
-- Table structure for table `completedlist`
--

CREATE TABLE `completedlist` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `item` varchar(40) NOT NULL,
  `completed` date NOT NULL DEFAULT current_timestamp(),
  `created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `completedlist`
--

INSERT INTO `completedlist` (`id`, `userid`, `item`, `completed`, `created`) VALUES
(7, 15, 'Buy Oranges', '2020-10-12', '2020-10-12'),
(8, 15, 'Visit Hagrid', '2020-10-12', '2020-10-12'),
(13, 15, 'Do assignment', '2020-10-12', '2020-10-12'),
(15, 16, 'Do homework', '2020-10-13', '2020-10-12');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `phone` int(10) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` text NOT NULL,
  `timestamp` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `name`, `phone`, `email`, `password`, `timestamp`) VALUES
(15, 'Ankit Joshi', 2147483647, 'ankitjoshicr7@gmail', 'e807f1fcf82d132f9bb018ca6738a19f', '2020-10-11'),
(16, 'Vaibhav', 2147483647, 'ankitplays5050@gmail', 'e807f1fcf82d132f9bb018ca6738a19f', '2020-10-12'),
(17, 'John', 2147483647, 'instructor@example', 'e807f1fcf82d132f9bb018ca6738a19f', '2020-10-12'),
(18, 'Sam', 2147483647, 'sasas@g', 'e807f1fcf82d132f9bb018ca6738a19f', '2020-10-13');

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

CREATE TABLE `todos` (
  `id` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `item` varchar(40) NOT NULL,
  `created` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `todos`
--

INSERT INTO `todos` (`id`, `userid`, `item`, `created`) VALUES
(22, 17, 'Complete assignment', '2020-10-12'),
(24, 16, 'Complete Project', '2020-10-13'),
(25, 15, 'Submit Assignment', '2020-10-19'),
(26, 15, 'Prepare presentation', '2020-10-19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `completedlist`
--
ALTER TABLE `completedlist`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `completedlist`
--
ALTER TABLE `completedlist`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `todos`
--
ALTER TABLE `todos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
