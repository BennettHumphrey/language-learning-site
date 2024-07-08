-- DropForeignKey
ALTER TABLE "Flashcard" DROP CONSTRAINT "Flashcard_flashcardSetTitle_fkey";

-- AlterTable
ALTER TABLE "Flashcard" ADD COLUMN     "completedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Flashcard" ADD CONSTRAINT "Flashcard_flashcardSetTitle_fkey" FOREIGN KEY ("flashcardSetTitle") REFERENCES "FlashcardSet"("title") ON DELETE CASCADE ON UPDATE CASCADE;
