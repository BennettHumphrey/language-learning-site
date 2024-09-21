'use server'

import { usePrismaClient } from "@/prisma/prismaClient"
import { revalidatePath } from "next/cache"





export async function setFlashcardSetColor(deckTitle:string, userId:string, color:string) {



    const setFlashcardSetColor:any = await usePrismaClient().flashcardSet.update({
        where: {
            authorId: userId,
            title: deckTitle
        },
        data: {
            color: color
        },
      })

      console.log('setFlashcardSetColor in setFlashcardSetColor.ts:', setFlashcardSetColor)

  }