import { PrismaClient } from "@prisma/client";
declare global {
    var prisma:PrismaClient | undefined
}
{/*global allows you to attach the Prisma Client instance to the global object, making it accessible across different modules in your application. */}


const client =globalThis.prisma || new PrismaClient()
{/*This line checks if a Prisma Client instance already exists on the global object  (globalThis.prisma).
     If it does, it assigns that instance to the client constant.
     If it doesn't, it creates a new PrismaClient instance and assigns it to client. */}
if(process.env.NODE_ENV !=='production') globalThis.prisma=client
 export default client