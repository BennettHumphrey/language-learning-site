'use server'

import { usePrismaClient } from "@/prisma/prismaClient"





export async function setPreviousCardSet(userId:string, previousCardSet:string) {



    const resetPreviousCardSet:any = await usePrismaClient().flashcardSet.updateMany({
        where: {
            previous: true
        },
        data: {
            previous: false
        },
      })

    const setPreviousCardSet:any = await usePrismaClient().flashcardSet.update({
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