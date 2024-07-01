"use server"

import { usePrismaClient } from "@/prisma/prismaClient"



export const getCardSets = async(userId:string) => {
    const cardSets = await usePrismaClient().flashcardSet.findMany({
        where: {
            authorId: {
                equals: userId
            }
        },
        select: {
            title: true
        }
    })
    console.log(cardSets)
    return cardSets
}




