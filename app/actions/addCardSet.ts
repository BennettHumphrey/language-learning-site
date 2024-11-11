    'use server'

import { prismaClient } from "@/prisma/prismaClient"
import { revalidatePath } from "next/cache"




export async function addCardSet(userId: string, cardSetTitle: string) {

    if (typeof cardSetTitle !== 'string') {
      throw new Error('Invalid form data: title must be a string');
    }

    const user = await prismaClient().flashcardSet.create({
        data: {
          title: cardSetTitle,
          authorId: userId
        },
      })

 

    revalidatePath('/cards')
  }