-- MySQL dump 10.16  Distrib 10.1.34-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: PetHub
-- ------------------------------------------------------
-- Server version	10.1.34-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `doacaos`
--

DROP TABLE IF EXISTS `doacaos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `doacaos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_usuario` int(10) unsigned NOT NULL,
  `porte` enum('pequeno','medio','grande') COLLATE utf8mb4_unicode_ci NOT NULL,
  `pelagem` enum('curto','longo') COLLATE utf8mb4_unicode_ci NOT NULL,
  `castrado` enum('0','1') COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` enum('cachorro','gato') COLLATE utf8mb4_unicode_ci NOT NULL,
  `sexo` enum('M','F') COLLATE utf8mb4_unicode_ci NOT NULL,
  `ano_nascimento` int(10) unsigned NOT NULL,
  `descricao` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tel_contato` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `site_contato` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `endereco` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cidade` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nome_pet` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagem` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `doacaos_id_usuario_foreign` (`id_usuario`),
  CONSTRAINT `doacaos_id_usuario_foreign` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doacaos`
--

LOCK TABLES `doacaos` WRITE;
/*!40000 ALTER TABLE `doacaos` DISABLE KEYS */;
INSERT INTO `doacaos` VALUES (1,1,'pequeno','curto','0','gato','M',2016,'Iste nihil ad optio vel culpa. Recusandae animi et aut quam. Molestias placeat explicabo aut voluptatibus dolor quos.','11 995891104',NULL,'5650 Kaitlyn Circle\nEast Nayeliview, IL 34409','Braganca Paulista','Prof. Tillman Johnson','Itzel','2018-07-29 19:58:49','2018-07-29 19:58:49',NULL),(2,1,'pequeno','curto','1','cachorro','F',2006,'Quos illum nobis accusantium voluptas ipsam. Velit eos libero placeat.','11 995891104',NULL,'2011 Neal Hill\nPort Selmerhaven, NY 14962-1423','Braganca Paulista','Mr. Leone Fritsch IV','Blaze','2018-07-29 19:58:49','2018-07-29 19:58:49',NULL),(3,1,'grande','longo','1','cachorro','F',2000,'Mollitia nemo eos quia aliquid corrupti in maiores suscipit. Delectus omnis est aut qui odio. Omnis dicta quidem et dolores tenetur et voluptatem. Labore assumenda dolores consequatur incidunt saepe quod.','11 995891104',NULL,'36267 Leopoldo Land Apt. 219\nNorth Christianview, WA 35354-7492','Braganca Paulista','Adolfo Jenkins','Lorenzo','2018-07-29 19:58:49','2018-07-29 19:58:49',NULL),(4,1,'pequeno','longo','1','gato','F',2015,'Malaysia','11 995891104',NULL,'49746 Waters Ports\nEast Simeonburgh, LA 17657-4108','Braganca Paulista','Cyrus Kozey','Vivien','2018-07-29 20:00:19','2018-07-29 20:00:19',NULL),(5,1,'pequeno','curto','0','gato','M',2004,'Canada','11 995891104',NULL,'9725 Zella Rest Apt. 273\nLake Mohamed, HI 28464-4078','Braganca Paulista','Johnnie Rau','Clementine','2018-07-29 20:00:19','2018-07-29 20:00:19',NULL),(6,1,'pequeno','curto','1','cachorro','F',2018,'Norway','11 995891104',NULL,'92601 Lakin Centers Apt. 603\nNew Twilaborough, IN 61161-6482','Braganca Paulista','Erling Hartmann','Pauline','2018-07-29 20:00:20','2018-07-29 20:00:20',NULL),(7,1,'pequeno','longo','1','cachorro','M',2007,'Palestinian Territories','11 995891104',NULL,'58001 Genesis Route\nJastton, VT 00264','Braganca Paulista','Cordell Dach','Constance','2018-07-29 20:00:20','2018-07-29 20:00:20',NULL),(8,1,'medio','curto','0','cachorro','F',2004,'El Salvador','11 995891104',NULL,'40374 Ruecker Crossing Suite 543\nPort Darrin, HI 98187-5895','Braganca Paulista','Adah Marquardt','Justina','2018-07-29 20:00:20','2018-07-29 20:00:20',NULL),(9,1,'medio','longo','0','gato','F',2014,'Bulgaria','11 995891104',NULL,'82257 Crona Village Apt. 348\nGeovannyfurt, AK 19037-1223','Braganca Paulista','Mrs. Lottie Conroy','Nayeli','2018-07-29 20:00:20','2018-07-29 20:00:20',NULL),(10,1,'medio','longo','0','cachorro','M',2011,'Dominica','11 995891104',NULL,'86685 Pamela Orchard Suite 095\nPort Cecile, GA 77620','Braganca Paulista','Aric Turcotte','Nikita','2018-07-29 20:00:20','2018-07-29 20:00:20',NULL),(11,1,'grande','longo','1','cachorro','F',2006,'Grenada','11 995891104',NULL,'9264 Jessyca Flat Apt. 644\nSchadenberg, ME 99443-3754','Braganca Paulista','Mr. Marcelo Roberts DDS','Unique','2018-07-29 20:00:20','2018-07-29 20:00:20',NULL),(12,1,'pequeno','curto','0','gato','M',2003,'Indonesia','11 995891104',NULL,'864 Herman Avenue\nSouth Coy, ID 61189','Braganca Paulista','Viola Littel','Tavares','2018-07-29 20:00:20','2018-07-29 20:00:20',NULL),(13,1,'pequeno','curto','1','gato','F',2010,'Burkina Faso','11 995891104',NULL,'7535 Cronin Roads\nLake Sheridan, MD 33048-3278','Braganca Paulista','Ms. Shania Schumm','Daren','2018-07-29 20:00:20','2018-07-29 20:00:20',NULL),(14,1,'grande','curto','0','cachorro','F',2001,'Heard Island and McDonald Islands','11 995891104',NULL,'173 Sean Estates Suite 414\nPriscillaview, AZ 53005-5655','Braganca Paulista','Velva Wehner Jr.','Ines','2018-07-29 20:00:20','2018-07-29 20:00:20',NULL),(15,1,'pequeno','longo','1','cachorro','M',2007,'Slovenia','11 995891104',NULL,'4093 Lauryn Throughway\nKozeyton, AR 67604','Braganca Paulista','Ryleigh Bruen','Alyce','2018-07-29 20:00:20','2018-07-29 20:00:20',NULL),(16,1,'pequeno','curto','0','gato','F',2015,'Singapore','11 995891104',NULL,'198 Emard Crossroad Apt. 226\nEast Emeryberg, SC 40766','Braganca Paulista','Mrs. Greta Witting II','Nella','2018-07-29 20:00:20','2018-07-29 20:00:20',NULL),(17,1,'grande','longo','1','cachorro','F',2003,'Montserrat','11 995891104',NULL,'56200 Calista Pike Suite 731\nWest Hassan, WV 57891-7598','Braganca Paulista','Kole Pagac','Vickie','2018-07-29 20:00:20','2018-07-29 20:00:20',NULL),(18,1,'pequeno','longo','1','cachorro','M',2008,'Syrian Arab Republic','11 995891104',NULL,'14946 Veum Key\nNorth Katelynchester, AR 84660-1444','Braganca Paulista','Weldon Olson','Raegan','2018-07-29 20:00:20','2018-07-29 20:00:20',NULL),(19,1,'medio','longo','0','cachorro','F',2000,'Dominican Republic','11 995891104',NULL,'6762 Candido Village\nMadilynside, AZ 72472-3603','Braganca Paulista','Mohammed Kuhn','Kacie','2018-07-29 20:00:20','2018-07-29 20:00:20',NULL),(34,1,'pequeno','curto','0','cachorro','F',2018,'a','aaaaaaaaaaaa',NULL,'a','a','a','pets/dmDQtUoPBTmiwP1be2RGS1CDGXQNP5uQLEF7dXFY.jpeg','2018-08-05 08:19:27','2018-08-05 08:19:27',NULL),(35,1,'pequeno','curto','0','cachorro','F',2018,'aaaaaaaaaaa','aaaaaaaaaaaa',NULL,'a','a','aa','pets/VnyG6izUHphZrsfWLW8abG1CnZpt6AWEizH2IyXO.jpeg','2018-08-05 08:25:12','2018-08-05 08:25:12',NULL),(36,1,'pequeno','curto','0','cachorro','F',2018,'a','aaaaaaaaaa',NULL,'a','a','a','pets/OCBGQ8S61RvNPD88QuldebJd3l8SziKGg2Vp2Jvb.jpeg','2018-08-05 08:25:55','2018-08-05 08:25:55',NULL),(37,1,'pequeno','curto','0','cachorro','F',2018,'a','aaaaaaaaaa',NULL,'a','a','a','pets/f3mZzy2ipsGbJgyfGIoUKtzdD8vIJo2otH6iACFu.jpeg','2018-08-05 08:25:59','2018-08-05 08:25:59',NULL),(38,1,'pequeno','curto','0','cachorro','F',2018,'a','aaaaaaaaaa',NULL,'a','a','a','pets/Xn7bPbiPpOatfq1PSnTX0uO4RSK9SBb7tOKGhUqd.jpeg','2018-08-05 08:26:03','2018-08-05 08:26:03',NULL),(39,1,'pequeno','curto','0','cachorro','F',2018,'a','aaaaaaaaaa',NULL,'a','a','a','pets/QzNeuY6UvpjBMnTNDLie8jeOHwhGwkyRWGZULKee.jpeg','2018-08-05 08:26:06','2018-08-05 08:26:06',NULL),(40,1,'pequeno','curto','0','cachorro','F',2018,'a','aaaaaaaaaa',NULL,'a','a','a','pets/kOAFBfRmNIJMXKD83s9KSnS7Stcok0e74kbQFSB9.jpeg','2018-08-05 08:26:13','2018-08-05 08:26:13',NULL),(42,1,'grande','longo','0','cachorro','M',2013,'Curte Rock N\' Roll.','11-995891104',NULL,'CDHU','Braganca','Marquin','pets/PiTFNCwuOX93zCNssB3AmzDa8RCF5j3N5VFsgf4Y.jpeg','2018-08-06 17:24:38','2018-08-06 17:24:38',NULL),(43,1,'pequeno','curto','1','cachorro','M',2001,'Humilde. Ronca de noite. Paraquedista.','11-999999999',NULL,'null','null','Edilsu','pets/svWz1ZHnhYoYQsenRv3xE2aBfMVoltHRd9EWWOho.jpeg','2018-08-06 17:25:49','2018-08-06 17:25:49',NULL),(56,1,'pequeno','curto','1','cachorro','M',2001,'Paraquedista.','11995891104',NULL,'São Miguel','Braganca','Edilso','pets/wWXXMlQltYVecdxsjw9Gwvi096okypsmejFbWlEL.jpeg','2018-08-06 17:31:21','2018-08-06 17:31:21',NULL),(61,1,'medio','curto','0','cachorro','M',2009,'Humilde.','19999999999',NULL,'Residencial das Ilhas','Braganca','Spina','pets/HeLbRPhFRgowUFJlInA2BapQcNOWOVQA8gg8aFJ1.jpeg','2018-08-06 17:34:42','2018-08-06 17:34:42',NULL),(62,1,'pequeno','curto','1','gato','F',2017,'Disney','1999999999',NULL,'Residencial dos Lagos','Braganca','Tuquinho','pets/9OofmAPzYnxPvEmSL856LosaRpLp16fNnkbGd6Om.jpeg','2018-08-06 17:35:29','2018-08-06 17:35:29',NULL),(63,1,'pequeno','curto','0','gato','M',2006,'Faz piadas ruins.','119999999999',NULL,'Algum lugar','Braganca','Sandris','pets/dePFNbBWXMjl9kiqvURvYayfO3Zk4bnEXYrP8JvT.jpeg','2018-08-06 17:36:18','2018-08-06 17:36:18',NULL),(64,1,'medio','longo','0','gato','M',2007,'Oloco bicho.','1199999999',NULL,'aaaaa','Braganca','Faustão','pets/LfZifOWLWZbfYKLd4Dd3TYZqGzqHu0IquMBxmxLz.jpeg','2018-08-06 17:37:47','2018-08-06 17:37:47',NULL),(65,1,'medio','curto','0','gato','F',2015,'Saiu o auxílio?','11111111111',NULL,'aaaa','Braganca','Tucão','pets/b0I02KdpJbt0ZSFnnPo8HdAt1Hx39vvlcMKkWyIy.jpeg','2018-08-06 17:38:34','2018-08-06 17:38:34',NULL),(66,1,'medio','curto','0','cachorro','F',2011,'IIIIIIIIIhhhhhhh','777777777777',NULL,'Henedina Cortez','Braganca','RexSai','pets/l3pfN7iLwVPLBomkH0w0VgaFlgUz5OXCHc0xaDrV.jpeg','2018-08-06 18:24:02','2018-08-06 18:24:02',NULL),(67,1,'pequeno','curto','0','gato','M',2018,'A','11-995881104',NULL,'Aaa','Braganca','Moro','pets/RnKM8tnLdqskQwfCne0Y9EyBbzWREEPBmm0Y9YY4.jpeg','2018-08-10 10:56:55','2018-08-10 10:56:55',NULL),(68,1,'medio','curto','1','gato','M',2016,'Aaaa','11-995881104',NULL,'São Lourenço','Braganca','Billy','pets/Yxxfk9K6cXnHCsD5s9NizvdBxge9wZYGnTdZxMwg.jpeg','2018-08-10 11:00:06','2018-08-10 11:00:06',NULL),(69,1,'grande','curto','1','gato','F',2009,'Aaaa','117373737377',NULL,'São miguel','Braganca','Lula preso','pets/xIZxMoVJgz46z72nOMDnDST6xUy5TcZvYrgVI0xZ.jpeg','2018-08-10 11:11:23','2018-08-10 11:11:23',NULL),(70,1,'medio','curto','1','gato','F',2018,'Lindo','1199887654',NULL,'Cidade Satelite','Atibaia','Elis','pets/RpMr9DnAvsh4vZdfb6rR7sRpJ4SC1tEQmu4oZVNu.jpeg','2018-08-10 11:15:41','2018-08-10 11:15:41',NULL),(71,1,'pequeno','curto','1','cachorro','F',2018,'s','ssssssssss',NULL,'aaa','Braganca','aa','pets/rQJrVa12aML6KpY2hXk5aVoRVRmqgWqsE2NLEEe5.jpeg','2018-08-11 16:42:18','2018-08-11 16:42:18',NULL),(72,1,'medio','curto','1','cachorro','F',2018,'N','Nhhhbjjbhjb',NULL,'K','Braganca','Jj','pets/CxA1dEGwuGGE0M4SHpl3EFCTfhd4HjAscfaok7aw.jpeg','2018-08-11 16:51:37','2018-08-11 16:51:37',NULL),(73,1,'grande','curto','1','gato','M',2016,'Lindão','11-88589000',NULL,'São Lourenço','Braganca','Billy','pets/D5jXiSjIiC6otqH8vOpaJlvuogZA9DCmz0FhiXRh.jpeg','2018-08-11 17:16:23','2018-08-11 17:16:23',NULL),(74,5,'pequeno','curto','1','cachorro','F',2018,'aa','111111111111',NULL,'aa','Braganca','Teste Token','pets/gESuecG57gkScIsIII6m537gMwpSJwBJZGkdDGJH.jpeg','2018-08-21 16:58:52','2018-08-21 16:58:52',NULL),(76,5,'pequeno','curto','1','cachorro','F',2018,'asdf','111111111111',NULL,'aa','Braganca','gato 3','pets/pmAThVcSEOOjVuIAP1YvZwuG3znf0FPCmASHMXUF.jpeg','2018-09-02 17:51:23','2018-09-02 17:51:23',NULL),(77,5,'medio','curto','1','gato','M',2016,'Billy zika lindão','11995891104',NULL,'São Lourenço','Braganca','Billy','pets/7GgfnJppchNbm8zHoPzMuXFJO4f3AWVTgqUytfLB.jpeg','2018-09-02 20:56:14','2018-09-02 20:56:14',NULL);
/*!40000 ALTER TABLE `doacaos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2018_04_27_113444_create_users_table',1),(2,'2018_04_27_113742_create_doacaos_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome_user` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagem` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user.jpg',
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `senha` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `localizacao` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sexo` enum('M','F') COLLATE utf8mb4_unicode_ci NOT NULL,
  `nota_avaliacao` decimal(2,1) DEFAULT NULL,
  `data_nasc` date NOT NULL,
  `comercial` enum('0','1') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Matheus Mendes','user.jpg','pequeno','123123123','Braganca','M',NULL,'2001-05-06','0','2018-07-29 19:54:40','2018-07-29 19:54:40'),(2,'aa','user.jpg','pequeno','123123123','Braganca','M',NULL,'2001-05-06','0','2018-07-29 19:57:05','2018-07-29 19:57:05'),(3,'Matheus','user.jpg','teste@teste.com','123456','Braganca','M',NULL,'2012-02-01','0','2018-08-20 16:48:16','2018-08-20 16:48:16'),(4,'Matheus','user.jpg','matheus@teste.com','123456','Braganca','M',NULL,'2012-02-01','0','2018-08-20 18:03:15','2018-08-20 18:03:15'),(5,'Matheus','user.jpg','matheus.iba@icloud.com','123456','Braganca','M',NULL,'2001-05-06','0','2018-08-20 18:46:20','2018-08-20 18:46:20'),(6,'Marcos','user.jpg','marcos@teste.com','123456','Braganca','M',NULL,'2012-02-01','0','2018-08-21 17:35:37','2018-08-21 17:35:37'),(7,'Edilson','user.jpg','edilson@teste.com','123456','Braganca','M',NULL,'2012-02-01','0','2018-08-21 17:39:40','2018-08-21 17:39:40'),(8,'teste@tes.com','user.jpg','aaaa@aaa','123456','aa','M',NULL,'2012-02-01','0','2018-08-21 17:40:11','2018-08-21 17:40:11'),(9,'aa@aaaa.com','user.jpg','asdf@adf','123456','a','M',NULL,'2012-02-01','0','2018-08-21 17:40:44','2018-08-21 17:40:44');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-06 22:24:31
