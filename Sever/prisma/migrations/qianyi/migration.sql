-- CreateTable
CREATE TABLE `classmeet_photos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `photo_name` VARCHAR(255) NOT NULL,
    `photo_shootime` DATETIME(0) NULL,
    `user_id` INTEGER NOT NULL,
    `photo_describe` TEXT NULL,
    `photo_url` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,
    `deletedAt` DATETIME(0) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `classmeet_users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_name` VARCHAR(255) NOT NULL,
    `password` CHAR(64) NOT NULL,
    `is_admin` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,

    UNIQUE INDEX `user_name`(`user_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

