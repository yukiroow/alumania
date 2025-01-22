CREATE DATABASE  IF NOT EXISTS `alumaniadb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `alumaniadb`;
-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: alumaniadb
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alumni`
--

DROP TABLE IF EXISTS `alumni`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumni` (
  `userid` varchar(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `middlename` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) NOT NULL,
  `course` varchar(100) NOT NULL,
  `empstatus` enum('Employed','Unemployed','Underemployed') NOT NULL,
  `location` enum('Domestic','Foreign') NOT NULL,
  `company` varchar(50) DEFAULT NULL,
  `displaypic` mediumblob DEFAULT NULL,
  `diploma` mediumblob DEFAULT NULL,
  `private` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `email` (`email`),
  CONSTRAINT `alumni_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumni`
--

LOCK TABLES `alumni` WRITE;
/*!40000 ALTER TABLE `alumni` DISABLE KEYS */;
/*!40000 ALTER TABLE `alumni` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `applicant`
--

DROP TABLE IF EXISTS `applicant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applicant` (
  `applicantid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(25) NOT NULL,
  `password` longtext NOT NULL,
  `email` varchar(255) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `middlename` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) NOT NULL,
  `course` varchar(100) NOT NULL,
  `empstatus` enum('Employed','Unemployed','Underemployed') NOT NULL,
  `location` enum('Domestic','Foreign') NOT NULL,
  `company` varchar(50) DEFAULT NULL,
  `diploma` mediumblob NOT NULL,
  PRIMARY KEY (`applicantid`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applicant`
--

LOCK TABLES `applicant` WRITE;
/*!40000 ALTER TABLE `applicant` DISABLE KEYS */;
/*!40000 ALTER TABLE `applicant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `eventid` varchar(20) NOT NULL,
  `title` text NOT NULL,
  `description` mediumtext NOT NULL,
  `category` enum('Seminar','Thanksgiving','Festival','Reunion','Campus','Job Fair','Other') NOT NULL,
  `eventtime` time NOT NULL,
  `eventdate` date NOT NULL,
  `eventloc` varchar(255) NOT NULL,
  `publishtimestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `eventphoto` mediumblob NOT NULL,
  `userid` varchar(15) NOT NULL,
  PRIMARY KEY (`eventid`),
  KEY `userid` (`userid`),
  CONSTRAINT `event_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventsponsor`
--

DROP TABLE IF EXISTS `eventsponsor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventsponsor` (
  `sponsorid` int(11) NOT NULL AUTO_INCREMENT,
  `type` enum('Business','Organization','Individual') NOT NULL,
  `amount` int(11) NOT NULL,
  `userid` varchar(15) NOT NULL,
  `eventid` varchar(20) NOT NULL,
  PRIMARY KEY (`sponsorid`),
  KEY `userid` (`userid`),
  KEY `eventid` (`eventid`),
  CONSTRAINT `eventsponsor_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `alumni` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `eventsponsor_ibfk_2` FOREIGN KEY (`eventid`) REFERENCES `event` (`eventid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventsponsor`
--

LOCK TABLES `eventsponsor` WRITE;
/*!40000 ALTER TABLE `eventsponsor` DISABLE KEYS */;
/*!40000 ALTER TABLE `eventsponsor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experience`
--

DROP TABLE IF EXISTS `experience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experience` (
  `xpid` varchar(20) NOT NULL,
  `body` mediumtext NOT NULL,
  `publishtimestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `userid` varchar(15) NOT NULL,
  PRIMARY KEY (`xpid`),
  KEY `userid` (`userid`),
  CONSTRAINT `experience_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `alumni` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experience`
--

LOCK TABLES `experience` WRITE;
/*!40000 ALTER TABLE `experience` DISABLE KEYS */;
/*!40000 ALTER TABLE `experience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experienceimage`
--

DROP TABLE IF EXISTS `experienceimage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experienceimage` (
  `xpimageid` int(11) NOT NULL AUTO_INCREMENT,
  `xpid` varchar(20) NOT NULL,
  `xpimage` mediumblob NOT NULL,
  PRIMARY KEY (`xpimageid`),
  KEY `xpid` (`xpid`),
  CONSTRAINT `experienceimage_ibfk_1` FOREIGN KEY (`xpid`) REFERENCES `experience` (`xpid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experienceimage`
--

LOCK TABLES `experienceimage` WRITE;
/*!40000 ALTER TABLE `experienceimage` DISABLE KEYS */;
/*!40000 ALTER TABLE `experienceimage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experiencelike`
--

DROP TABLE IF EXISTS `experiencelike`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experiencelike` (
  `xpid` varchar(20) NOT NULL,
  `userid` varchar(20) NOT NULL,
  `liketimestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`xpid`,`userid`),
  KEY `userid` (`userid`),
  CONSTRAINT `experiencelike_ibfk_1` FOREIGN KEY (`xpid`) REFERENCES `experience` (`xpid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `experiencelike_ibfk_2` FOREIGN KEY (`userid`) REFERENCES `alumni` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experiencelike`
--

LOCK TABLES `experiencelike` WRITE;
/*!40000 ALTER TABLE `experiencelike` DISABLE KEYS */;
/*!40000 ALTER TABLE `experiencelike` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interestedinevent`
--

DROP TABLE IF EXISTS `interestedinevent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interestedinevent` (
  `eventid` varchar(20) NOT NULL,
  `userid` varchar(15) NOT NULL,
  PRIMARY KEY (`eventid`,`userid`),
  KEY `userid` (`userid`),
  CONSTRAINT `interestedinevent_ibfk_1` FOREIGN KEY (`eventid`) REFERENCES `event` (`eventid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `interestedinevent_ibfk_2` FOREIGN KEY (`userid`) REFERENCES `alumni` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interestedinevent`
--

LOCK TABLES `interestedinevent` WRITE;
/*!40000 ALTER TABLE `interestedinevent` DISABLE KEYS */;
/*!40000 ALTER TABLE `interestedinevent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `interestedinjobpost`
--

DROP TABLE IF EXISTS `interestedinjobpost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interestedinjobpost` (
  `jobpid` varchar(20) NOT NULL,
  `userid` varchar(15) NOT NULL,
  PRIMARY KEY (`jobpid`,`userid`),
  KEY `userid` (`userid`),
  CONSTRAINT `interestedinjobpost_ibfk_1` FOREIGN KEY (`jobpid`) REFERENCES `jobpost` (`jobpid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `interestedinjobpost_ibfk_2` FOREIGN KEY (`userid`) REFERENCES `alumni` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interestedinjobpost`
--

LOCK TABLES `interestedinjobpost` WRITE;
/*!40000 ALTER TABLE `interestedinjobpost` DISABLE KEYS */;
/*!40000 ALTER TABLE `interestedinjobpost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobpost`
--

DROP TABLE IF EXISTS `jobpost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobpost` (
  `jobpid` varchar(20) NOT NULL,
  `title` text NOT NULL,
  `type` enum('Onsite','Remote','Hybrid') NOT NULL,
  `location` varchar(255) NOT NULL,
  `description` mediumtext NOT NULL,
  `companyname` varchar(255) NOT NULL,
  `publishtimestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `contactname` varchar(90) NOT NULL,
  `contactemail` varchar(45) NOT NULL,
  `contactnumber` varchar(45) DEFAULT NULL,
  `userid` varchar(15) NOT NULL,
  PRIMARY KEY (`jobpid`),
  KEY `userid` (`userid`),
  CONSTRAINT `jobpost_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobpost`
--

LOCK TABLES `jobpost` WRITE;
/*!40000 ALTER TABLE `jobpost` DISABLE KEYS */;
/*!40000 ALTER TABLE `jobpost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userid` varchar(15) NOT NULL,
  `username` varchar(25) NOT NULL,
  `password` longtext NOT NULL,
  `usertype` enum('Alumni','Manager','Admin') NOT NULL,
  `jointimestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`userid`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-22 13:37:53
