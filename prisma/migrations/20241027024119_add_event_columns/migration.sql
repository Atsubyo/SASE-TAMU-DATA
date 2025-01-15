/*
  Warnings:

  - You are about to drop the column `COMSOC1` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Users` DROP COLUMN `COMSOC1`,
    ADD COLUMN `SQUADREVEALSOCIAL` INTEGER NOT NULL DEFAULT 0;
