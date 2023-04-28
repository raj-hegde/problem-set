-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: practice
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `DEPTNO`
--

DROP TABLE IF EXISTS `DEPTNO`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DEPTNO` (
  `DEPTNO` int DEFAULT NULL,
  `DNAME` varchar(255) DEFAULT NULL,
  `LOC` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DEPTNO`
--

LOCK TABLES `DEPTNO` WRITE;
/*!40000 ALTER TABLE `DEPTNO` DISABLE KEYS */;
INSERT INTO `DEPTNO` VALUES (10,'ACCOUNTING','NEW YORK'),(20,'RESEARCH','DALLAS'),(30,'SALES','CHICAGO'),(40,'OPERATIONS','BOSTON');
/*!40000 ALTER TABLE `DEPTNO` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EMP`
--

DROP TABLE IF EXISTS `EMP`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EMP` (
  `EMPNO` int DEFAULT NULL,
  `ENAME` varchar(255) DEFAULT NULL,
  `JOB` varchar(255) DEFAULT NULL,
  `MGR` int DEFAULT NULL,
  `HIREDATE` date DEFAULT NULL,
  `SAL` int DEFAULT NULL,
  `COMM` int DEFAULT NULL,
  `DEPTNO` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EMP`
--

LOCK TABLES `EMP` WRITE;
/*!40000 ALTER TABLE `EMP` DISABLE KEYS */;
INSERT INTO `EMP` VALUES (7369,'SMITH','CLERK',7902,'2005-12-17',800,NULL,20),(7499,'ALLEN','SALESMAN',7698,'2006-02-26',1600,300,30),(7521,'WARD','SALESMAN',7698,'2006-02-22',1250,500,30),(7521,'JONES','MANAGER',7839,'2006-04-02',2975,NULL,20),(7654,'MARTIN','SALESMAN',7698,'2006-09-28',1250,1400,30),(7698,'BLAKE','MANAGER',7839,'2006-05-01',2850,NULL,30),(7782,'CLARK','MANAGER',7839,'2006-06-09',2450,NULL,10),(7788,'SCOTT','ANALYST',7566,'2007-12-09',3000,NULL,20),(7839,'KING','PRESIDENT',NULL,'2006-11-17',5000,NULL,10),(7844,'TURNER','SALESMAN',7698,'2006-09-08',1500,0,30),(7876,'ADAMSR','CLERK',7788,'2008-01-12',1100,NULL,20),(7900,'JAMES','CLERK',7698,'2006-12-03',950,NULL,30),(7902,'FORD','ANALYST',7566,'2006-12-03',3000,NULL,20),(7934,'MILLER','CLERK',7782,'2007-01-23',1300,NULL,10);
/*!40000 ALTER TABLE `EMP` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-28 19:58:53
