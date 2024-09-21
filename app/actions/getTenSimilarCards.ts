"use server";

import { usePrismaClient } from "@/prisma/prismaClient";

export const getTenSimilarCards = async (
  flashcardSetTitle: string,
  targetTerm: string
) => {
  console.log(
    `params in getTenSimilarCards: flashcardSetTitle: ${flashcardSetTitle}, targetTerm: ${targetTerm}`
  );
  const flashcards = await usePrismaClient().$queryRaw`
        SELECT *
          FROM "Flashcard"
          WHERE "flashcardSetTitle" = ${flashcardSetTitle}
            AND similarity("targetLanguageContent", ${targetTerm}) >= 0
            AND "targetLanguageContent" != ${targetTerm}
          ORDER BY similarity("targetLanguageContent", ${targetTerm}) DESC
          LIMIT 10;

  `;
  console.log("flashcards in getTenSimilarCards.ts:", flashcards);
  return flashcards;
};
