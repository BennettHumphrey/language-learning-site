"use server"

import { usePrismaClient } from "@/prisma/prismaClient"



export const getFirstTenCards = async(flashcardSetTitle:string) => {
    const cards = await usePrismaClient().flashcard.findMany({
        where: {
            flashcardSetTitle: {
                equals: flashcardSetTitle
            }
        },
        select: {
            targetLanguageContent: true,
            sourceLanguageContent: true
        },
        take:10

    })
    console.log('cards in getFirstTenCards:', cards)
    return cards
}




