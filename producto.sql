-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 16-02-2024 a las 03:15:41
-- Versión del servidor: 8.2.0
-- Versión de PHP: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `producto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

DROP TABLE IF EXISTS `articulos`;
CREATE TABLE IF NOT EXISTS `articulos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `categoria` int NOT NULL,
  `precio` decimal(30,0) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`id`, `nombre`, `categoria`, `precio`) VALUES
(1, 'Lip Oil', 1, 5164),
(2, 'Gel Tint Cranberry Juice', 1, 4985),
(3, 'Gel Tint Fresh Red', 1, 4985),
(4, 'Gel Tint Summer Coral', 1, 4985),
(5, 'Stay Fix Rana', 1, 6228),
(6, 'Mood Satisfaction', 1, 6339),
(7, 'Delineador Game On', 2, 4920),
(8, 'Delineador Glitter', 2, 4856),
(9, 'Delineador liquido waterproof', 2, 5320),
(10, 'Paleta Ready For', 2, 22690),
(11, 'Paleta Piña Colada', 2, 15500),
(12, 'Paleta Soft Nude', 2, 15500),
(13, 'Paleta Pink Lemonade', 2, 15500),
(14, 'Mascara de Pestañas Trópico', 2, 6990),
(15, 'Base Líquida Feels', 3, 7200),
(16, 'Rubor en Polvo Stay Fix', 3, 5748),
(17, 'Bruma Fijadora Soft Matte', 3, 10320),
(18, 'Bruma Fijadora Perfect Glow', 3, 10320),
(19, 'Contorno en Polvo Feels Marmorizado ', 3, 4102),
(20, 'Corrector Melu', 3, 4690),
(21, 'Cuarteto Rostro Melu', 3, 12390),
(22, 'Iluminador Holográfico Melu', 3, 5632),
(23, 'Polvo Banana Feels', 3, 8420),
(24, 'Polvo Translúcido Feels', 3, 8420),
(25, 'Primer Skin Prep', 3, 5678),
(26, 'Rubor Cheek to Cheek\r\n', 3, 4690);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
