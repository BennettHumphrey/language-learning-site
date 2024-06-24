/*
  Warnings:

  - You are about to drop the column `flashcardSetId` on the `Flashcard` table. All the data in the column will be lost.
  - Added the required column `consecutiveSuccesses` to the `Flashcard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `flashcardId` to the `Flashcard` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Flashcard" DROP CONSTRAINT "Flashcard_flashcardSetId_fkey";

-- AlterTable
ALTER TABLE "Flashcard" DROP COLUMN "flashcardSetId",
ADD COLUMN     "consecutiveSuccesses" INTEGER NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "flashcardId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Flashcard" ADD CONSTRAINT "Flashcard_flashcardId_fkey" FOREIGN KEY ("flashcardId") REFERENCES "FlashcardSet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
