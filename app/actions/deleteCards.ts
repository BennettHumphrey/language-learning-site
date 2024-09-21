"use server"

import { usePrismaClient } from "@/prisma/prismaClient"



export const deleteCards = async(cardId:string) => {

    const cards = usePrismaClient().flashcard.delete({
        where: {
            id: cardId
        }
    })

    // console.log('Trigger deleteCards')
    return cards
}




