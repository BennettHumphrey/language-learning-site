"use server"

import { prismaClient } from "@/prisma/prismaClient"



export const getCardSets = async(userId:string) => {
    const cardSets = await prismaClient().flashcardSet.findMany({
        where: {
            authorId: {
                equals: userId
            }
        },
        select: {
            id: true,
            authorId: true,
            author: true,
            title: true,
            color: true,
            flashcards: true,
            _count: {
                select: {
                    flashcards: true
                }
            }
        }
    })
    console.log('cardSets in getCardSets:', cardSets)
    return cardSets
}




