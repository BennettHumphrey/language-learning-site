/*
  Warnings:

  - You are about to drop the column `previousCardSet` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FlashcardSet" ADD COLUMN     "previous" BOOLEAN;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "previousCardSet";
