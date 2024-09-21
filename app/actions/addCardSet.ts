    'use server'

import { usePrismaClient } from "@/prisma/prismaClient"
import { revalidatePath } from "next/cache"




export async function addCardSet(userId: string, cardSetTitle: string) {

    if (typeof cardSetTitle !== 'string') {
      throw new Error('Invalid form data: title must be a string');
    }

    const user = await usePrismaClient().flashcardSet.create({
        data: {
          title: cardSetTitle,
          authorId: userId
        },
      })

 

    revalidatePath('/cards')
  }