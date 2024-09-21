"use server"

import { usePrismaClient } from "@/prisma/prismaClient"



export const deleteCardSets = async(cardSetTitle:string) => {

    const cardSets = usePrismaClient().flashcardSet.delete({
        where: {
            title: cardSetTitle
        }
    })

    // console.log('Trigger deleteCardSets')
    return cardSets
}




