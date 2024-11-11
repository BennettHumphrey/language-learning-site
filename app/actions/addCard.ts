'use server'

import { prismaClient } from "@/prisma/prismaClient"




export async function addCard(sourceLanguageContent: string, targetLanguageContent:string, flashcardSetTitle: string) {

    if (typeof flashcardSetTitle !== 'string') {
      throw new Error('Invalid form data: title must be a string');
    }

    // const currentDate = new Date()
    // const weekFromNow = new Date()
    // weekFromNow.setDate(weekFromNow.getDate() + 7)

    // console.log('currentDate in addCard.ts:', currentDate)
    // console.log('weekFromNow in addCard.ts:', weekFromNow)
    // console.log('currentDate.getTime() in addCard.ts:', currentDate.getTime())
    // console.log('weekFromNow.getTime() in addCard.ts:', weekFromNow.getTime())

    // console.log('flashcardSetTitle in addCard.ts:', flashcardSetTitle)
    // console.log('sourceLanguageContent in addCard.ts:', sourceLanguageContent)
    // console.log('targetLanguageContent in addCard.ts:', targetLanguageContent)

    const currentDate = new Date()

    const newCard = await prismaClient().flashcard.create({
        data: {
            sourceLanguageContent: sourceLanguageContent,
            targetLanguageContent: targetLanguageContent,
            nextCompletion: currentDate,
            flashcardSetTitle: flashcardSetTitle
        },
      })

      console.log('newCard in addCard.ts:', newCard)

  }