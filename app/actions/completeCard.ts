'use server'

import { usePrismaClient } from "@/prisma/prismaClient"
import { Flashcard } from "@prisma/client"




export async function completeCard(card:Flashcard, success:boolean=false) {

    console.log('card in completeCard.ts:', JSON.stringify(card))

    if (!card.id) {
        throw new Error("Card ID is undefined");
    }

    const generateNextCompletion = (consecutiveSuccesses:number, success:boolean) => {
        let days = 0

        let date = new Date()


        switch(consecutiveSuccesses) {
            case 0: days = 0; break;
            case 1: days = 1; break;
            case 2: days = 3; break;
            case 3: days = 5; break;
            case 4: days = 7; break;
            case 5: days = 14; break;
            case 6: days = 30; break;
            case 7: days = 30*2; break;
            case 8: days = 30*3; break;
            case 9: days = 30*6; break;
            case 10: days = 365; break;
            default: days = 365*2; break;
        }

        // date.setMinutes(date.getMinutes() + days)
        if(!success || days === 0) {
            date.setMinutes(date.getMinutes() + 1)
        } else {
            date.setDate(date.getDate() + days)
        }
        return date
    }

    // console.log("generateNextCompletion in completeCard.ts:", (generateNextCompletion(success ? card.consecutiveSuccesses : 0)))

    const updateCard = await usePrismaClient().flashcard.update({
        where: {
            id: card.id
        },
        data: {
            nextCompletion: (generateNextCompletion(card.consecutiveSuccesses, success)),
            consecutiveSuccesses: (success ? card.consecutiveSuccesses + 1 : 0),
        },
      })

      console.log('updateCard in completeCard.ts:', updateCard)

  }