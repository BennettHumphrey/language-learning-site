/*
  Warnings:

  - You are about to drop the column `TargetLanguageContent` on the `Flashcard` table. All the data in the column will be lost.
  - Added the required column `targetLanguageContent` to the `Flashcard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Flashcard" DROP COLUMN "TargetLanguageContent",
ADD COLUMN     "targetLanguageContent" TEXT NOT NULL,
ALTER COLUMN "consecutiveSuccesses" DROP NOT NULL;
