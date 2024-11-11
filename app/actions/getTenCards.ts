"use server"

import { prismaClient } from "@/prisma/prismaClient"



export const getTenCards = async(flashcardSetTitle:string, first:boolean=false) => {

    const currentDate = new Date()

    const cards = await prismaClient().flashcard.findMany({
        where: {
            flashcardSetTitle: {
                equals: flashcardSetTitle
            },
            nextCompletion: {
                lte: currentDate
            }
        },
        take:10,
        skip:(first ? 0 : 1)

    })
    console.log('cards in getTenCards:', cards)
    return cards
}




