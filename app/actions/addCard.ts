'use server'

import { usePrismaClient } from "@/prisma/prismaClient"




export async function addCard(sourceLanguageContent: string, targetLanguageContent:string, flashcardSetTitle: string) {

    if (typeof flashcardSetTitle !== 'string') {
      throw new Error('Invalid form data: title must be a string');
    }

    // console.log('flashcardSetTitle in addCard.ts:', flashcardSetTitle)
    // console.log('sourceLanguageContent in addCard.ts:', sourceLanguageContent)
    // console.log('targetLanguageContent in addCard.ts:', targetLanguageContent)

    const newCard = await usePrismaClient().flashcard.create({
        data: {
            sourceLanguageContent: sourceLanguageContent,
            targetLanguageContent: targetLanguageContent,
            flashcardSetTitle: flashcardSetTitle
        },
      })

      console.log('newCard in addCard.ts:', newCard)

  }