/*
  Warnings:

  - Made the column `consecutiveSuccesses` on table `Flashcard` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Flashcard" ALTER COLUMN "consecutiveSuccesses" SET NOT NULL,
ALTER COLUMN "consecutiveSuccesses" SET DEFAULT 0;
