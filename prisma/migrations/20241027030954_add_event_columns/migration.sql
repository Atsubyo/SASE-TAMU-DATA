/*
  Warnings:

  - You are about to drop the column `COMSOC2` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `COMSOC3` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `COMSOC4` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `COMSOC5` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `DOWGBM` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `ETAMGBM` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Users` DROP COLUMN `COMSOC2`,
    DROP COLUMN `COMSOC3`,
    DROP COLUMN `COMSOC4`,
    DROP COLUMN `COMSOC5`,
    DROP COLUMN `DOWGBM`,
    DROP COLUMN `ETAMGBM`,
    ADD COLUMN `GEVERNOVA` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `KDASOCIAL` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `KIMCHISCAVENGERHUNT` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `RESUMEROAST` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `SQUIDSQUADGAMES` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `SWRIGBM` INTEGER NOT NULL DEFAULT 0;
