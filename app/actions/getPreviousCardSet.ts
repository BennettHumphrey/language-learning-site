"use server"

import { prismaClient } from "@/prisma/prismaClient"



export const getPreviousCardSet = async(userId:string) => {
    const previousCardSet = await prismaClient().flashcardSet.findFirst({
        where: {
            authorId: userId,
            previous: true
        },
    })
    console.log('previousCardSet in getPreviousCardSet:', previousCardSet)
    return previousCardSet
}




