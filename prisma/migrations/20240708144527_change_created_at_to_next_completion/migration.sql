/*
  Warnings:

  - You are about to drop the column `completedAt` on the `Flashcard` table. All the data in the column will be lost.
  - Added the required column `nextCompletion` to the `Flashcard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Flashcard" DROP COLUMN "completedAt",
ADD COLUMN     "nextCompletion" TIMESTAMP(3) NOT NULL;
