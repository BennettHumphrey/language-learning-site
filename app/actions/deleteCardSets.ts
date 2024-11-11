"use server"

import { prismaClient } from "@/prisma/prismaClient"



export const deleteCardSets = async(cardSetTitle:string) => {

    const cardSets = prismaClient().flashcardSet.delete({
        where: {
            title: cardSetTitle
        }
    })

    // console.log('Trigger deleteCardSets')
    return cardSets
}




