-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 14 nov. 2021 à 19:52
-- Version du serveur : 10.4.20-MariaDB
-- Version de PHP : 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `magapp`
--

-- --------------------------------------------------------

--
-- Structure de la table `abonnements`
--

CREATE TABLE `abonnements` (
  `idUser` int(11) NOT NULL,
  `idType` int(11) NOT NULL,
  `start` datetime DEFAULT NULL,
  `end` datetime DEFAULT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `abonnements`
--

INSERT INTO `abonnements` (`idUser`, `idType`, `start`, `end`, `updatedAt`) VALUES
(1, 1, '2021-11-14 15:23:22', '2021-11-14 15:23:22', '2021-11-14 15:23:22');

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`, `description`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Sport', 'Catégorie sport', 'https://github.com/leparfait/magapp-s/tree/main/src', '2021-11-14 15:16:40', '2021-11-14 15:16:40'),
(2, 'Politique', 'Catégorie politique', 'https://courses.nestjs.com/', '2021-11-14 15:16:40', '2021-11-14 15:16:40');

-- --------------------------------------------------------

--
-- Structure de la table `magazinepayers`
--

CREATE TABLE `magazinepayers` (
  `userId` int(11) NOT NULL,
  `magazineId` int(11) NOT NULL,
  `datePaiement` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `magazinepayers`
--

INSERT INTO `magazinepayers` (`userId`, `magazineId`, `datePaiement`, `createdAt`, `updatedAt`) VALUES
(1, 2, '2021-11-14 15:23:53', '2021-11-14 15:23:53', '2021-11-14 15:23:53'),
(2, 1, '2021-11-14 15:23:53', '2021-11-14 15:23:53', '2021-11-14 15:23:53');

-- --------------------------------------------------------

--
-- Structure de la table `magazines`
--

CREATE TABLE `magazines` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `file` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `catId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `magazines`
--

INSERT INTO `magazines` (`id`, `title`, `description`, `image`, `file`, `price`, `catId`, `createdAt`, `updatedAt`) VALUES
(1, 'Magazine 1', 'Get up to speed with NestJS fast.\r\nMaster the building blocks and essentials concepts behind creating your own enterprise-grade applications.', 'file:///D:/formation%20ionic/blog-banner.jpg.jpg', 'file:///D:/formation%20ionic/cedep.pdf', 1500, 2, '2021-11-14 15:18:08', '2021-11-14 15:18:08'),
(2, 'Magazine 2', 'Get up to speed with NestJS fast.\r\nMaster the building blocks and essentials concepts behind creating your own enterprise-grade applications.', 'file:///D:/formation%20ionic/blog-banner.jpg.jpg', 'file:///D:/formation%20ionic/cedep.pdf', 1000, 1, '2021-11-14 15:18:08', '2021-11-14 15:18:08');

-- --------------------------------------------------------

--
-- Structure de la table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `reference` varchar(255) DEFAULT NULL,
  `service` varchar(255) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `transactions`
--

INSERT INTO `transactions` (`id`, `userId`, `reference`, `service`, `amount`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Ab45ejhi2zjr544ee', 'jfjkdd56djsie5sdf', '5000', '2021-11-14 15:24:42', '2021-11-14 15:24:42');

-- --------------------------------------------------------

--
-- Structure de la table `typeabonnements`
--

CREATE TABLE `typeabonnements` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `duree` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `typeabonnements`
--

INSERT INTO `typeabonnements` (`id`, `name`, `duree`, `price`, `createdAt`, `updatedAt`) VALUES
(1, 'Abonnement mensuel', 30, 5000, '2021-11-14 15:21:35', '2021-11-14 15:21:35'),
(2, 'Abonnement trimestriel', 90, 10000, '2021-11-14 15:21:35', '2021-11-14 15:21:35');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'parfaitonana4@gmail.com', '78637863', 'ONANA ONANA Parfait', 'admin', '2021-11-14 15:14:49', '2021-11-14 15:14:49'),
(2, 'parfait.onana50@gmail.com', 'P78637863', 'ONANA Parfait', 'user', '2021-11-14 15:14:49', '2021-11-14 15:14:49');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `abonnements`
--
ALTER TABLE `abonnements`
  ADD PRIMARY KEY (`idUser`,`idType`),
  ADD UNIQUE KEY `Abonnements_idType_idUser_unique` (`idUser`,`idType`),
  ADD KEY `idType` (`idType`);

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `magazinepayers`
--
ALTER TABLE `magazinepayers`
  ADD PRIMARY KEY (`userId`,`magazineId`),
  ADD UNIQUE KEY `MagazinePayers_magazineId_userId_unique` (`userId`,`magazineId`),
  ADD KEY `magazineId` (`magazineId`);

--
-- Index pour la table `magazines`
--
ALTER TABLE `magazines`
  ADD PRIMARY KEY (`id`),
  ADD KEY `catId` (`catId`);

--
-- Index pour la table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Index pour la table `typeabonnements`
--
ALTER TABLE `typeabonnements`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `magazines`
--
ALTER TABLE `magazines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `typeabonnements`
--
ALTER TABLE `typeabonnements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `abonnements`
--
ALTER TABLE `abonnements`
  ADD CONSTRAINT `abonnements_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `abonnements_ibfk_2` FOREIGN KEY (`idType`) REFERENCES `typeabonnements` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `magazinepayers`
--
ALTER TABLE `magazinepayers`
  ADD CONSTRAINT `magazinepayers_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `magazinepayers_ibfk_2` FOREIGN KEY (`magazineId`) REFERENCES `magazines` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `magazines`
--
ALTER TABLE `magazines`
  ADD CONSTRAINT `magazines_ibfk_1` FOREIGN KEY (`catId`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Contraintes pour la table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
