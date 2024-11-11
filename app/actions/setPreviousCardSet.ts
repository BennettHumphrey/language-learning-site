'use server'

import { prismaClient } from "@/prisma/prismaClient"





export async function setPreviousCardSet(userId:string, previousCardSet:string) {



    const resetPreviousCardSet:any = await prismaClient().flashcardSet.updateMany({
        where: {
            previous: true
        },
        data: {
            previous: false
        },
      })

    const setPreviousCardSet:any = await prismaClient().flashcardSet.update({
        where: {
            authorId: userId,
            title: previousCardSet
        },
        data: {
            previous: true
        }
    })

      console.log('setPreviousCardSet in setPreviousCardSet.ts:', setPreviousCardSet)

  }