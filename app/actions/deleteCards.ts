"use server"

import { prismaClient } from "@/prisma/prismaClient"



export const deleteCards = async(cardId:string) => {

    const cards = prismaClient().flashcard.delete({
        where: {
            id: cardId
        }
    })

    // console.log('Trigger deleteCards')
    return cards
}




