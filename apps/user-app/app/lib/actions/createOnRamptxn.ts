"use server"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function createOnRampTransaction(amount: number, provider : string){
        const session = await getServerSession(authOptions);
        const userId = session?.user.id;
        const token = Math.random().toString(); // sent to bank to know that some person is coming to ask for transaction
        if(!userId){
            return{
                message: "User not logged in",
            }
        } 
        await prisma.onRampTransaction.create({
            data:{
                userId : Number(userId),
                amount: amount,
                status: "Processing",
                startTime: new Date(),
                provider, // same as input from fucntion argument
                token: token
            }
        })
        return {
            message: "on RampTransaction added",
        }
         
}