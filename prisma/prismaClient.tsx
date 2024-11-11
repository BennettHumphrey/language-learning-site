import { PrismaClient } from '@prisma/client'


let prisma : PrismaClient;


export const prismaClient = () => prisma ? prisma : prisma = new PrismaClient() 


