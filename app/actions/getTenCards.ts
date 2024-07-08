"use server"

import { usePrismaClient } from "@/prisma/prismaClient"



export const getTenCards = async(flashcardSetTitle:string, first:boolean) => {
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
    console.log('cards in getTenCards:', cards)
    return cards
}




