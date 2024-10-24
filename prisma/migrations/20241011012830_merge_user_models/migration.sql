/*
  Warnings:

  - You are about to drop the column `name` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the `Attendance` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Event` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `Users` DROP COLUMN `name`;

-- DropTable
DROP TABLE `Attendance`;

-- DropTable
DROP TABLE `Event`;
