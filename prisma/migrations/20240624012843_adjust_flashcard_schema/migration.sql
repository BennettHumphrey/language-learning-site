/*
  Warnings:

  - You are about to drop the column `flashcardId` on the `Flashcard` table. All the data in the column will be lost.
  - Added the required column `flashcardSetId` to the `Flashcard` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Flashcard" DROP CONSTRAINT "Flashcard_flashcardId_fkey";

-- AlterTable
ALTER TABLE "Flashcard" DROP COLUMN "flashcardId",
ADD COLUMN     "flashcardSetId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Flashcard" ADD CONSTRAINT "Flashcard_flashcardSetId_fkey" FOREIGN KEY ("flashcardSetId") REFERENCES "FlashcardSet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
