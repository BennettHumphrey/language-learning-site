"use server"

import { usePrismaClient } from "@/prisma/prismaClient";



interface User {
    name:string;
    email:string;
    image?:string;
}


export const addUser = async (user:User) => {

    // console.log('addUser email:', user.email)
    let existingUser;
    existingUser = await usePrismaClient().user.findUnique({
        where: {
            email: user.email
        }
    })

    if(!existingUser) {
        existingUser = await usePrismaClient().user.create({
            data: {
                email: user.email,
                name: user.name
            }
        })
        // Set createdUser to existingUser if not previously existing
        // console.log(`Created new user ${user.name}:`, JSON.stringify(existingUser))
    }

    // console.log('addUser existingUser:', JSON.stringify(existingUser))
    return existingUser;
}



