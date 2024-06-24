/*
  Warnings:

  - You are about to drop the column `flashcardSetId` on the `Flashcard` table. All the data in the column will be lost.
  - Added the required column `flashcardSetTitle` to the `Flashcard` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Flashcard" DROP CONSTRAINT "Flashcard_flashcardSetId_fkey";

-- AlterTable
ALTER TABLE "Flashcard" DROP COLUMN "flashcardSetId",
ADD COLUMN     "flashcardSetTitle" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Flashcard" ADD CONSTRAINT "Flashcard_flashcardSetTitle_fkey" FOREIGN KEY ("flashcardSetTitle") REFERENCES "FlashcardSet"("title") ON DELETE RESTRICT ON UPDATE CASCADE;
