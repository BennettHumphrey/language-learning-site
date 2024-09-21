"use server"

import { usePrismaClient } from "@/prisma/prismaClient"



export const getPreviousCardSet = async(userId:string) => {
    const previousCardSet = await usePrismaClient().flashcardSet.findFirst({
        where: {
            authorId: userId,
            previous: true
        },
    })
    console.log('previousCardSet in getPreviousCardSet:', previousCardSet)
    return previousCardSet
}




