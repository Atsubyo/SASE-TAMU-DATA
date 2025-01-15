/*
  Warnings:

  - You are about to drop the column `SPRINGINFO` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Users` DROP COLUMN `SPRINGINFO`,
    ADD COLUMN `INFORMATIONAL` INTEGER NOT NULL DEFAULT 0;
