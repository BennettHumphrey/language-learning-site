import { PrismaClient } from '@prisma/client'


let prisma : PrismaClient;


export const usePrismaClient = () => prisma ? prisma : prisma = new PrismaClient() 


