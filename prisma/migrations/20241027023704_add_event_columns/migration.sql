/*
  Warnings:

  - You are about to drop the column `CHEVRONGBM` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Users` DROP COLUMN `CHEVRONGBM`,
    ADD COLUMN `CDMSMITH` INTEGER NOT NULL DEFAULT 0;
