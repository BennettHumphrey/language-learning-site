-- CreateTable
CREATE TABLE "FlashcardSet" (
    "id" SERIAL NOT NULL,
    "authorId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "FlashcardSet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Flashcard" (
    "id" SERIAL NOT NULL,
    "flashcardSetId" INTEGER NOT NULL,
    "sourceLanguageContent" TEXT NOT NULL,
    "TargetLanguageContent" TEXT NOT NULL,

    CONSTRAINT "Flashcard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FlashcardSet_title_key" ON "FlashcardSet"("title");

-- AddForeignKey
ALTER TABLE "FlashcardSet" ADD CONSTRAINT "FlashcardSet_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Flashcard" ADD CONSTRAINT "Flashcard_flashcardSetId_fkey" FOREIGN KEY ("flashcardSetId") REFERENCES "FlashcardSet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
