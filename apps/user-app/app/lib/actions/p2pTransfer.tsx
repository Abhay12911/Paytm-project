// "use server"
// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth";
// import prisma from "@repo/db/client";

// export async function p2pTransfer(to: string, amount: number) {
//     console.log("Initiating transfer", { to, amount });
//     const session = await getServerSession(authOptions);
//     const from = session?.user?.id;
//     console.log("Current user ID:", from);
//     if (!from) {
//         return {
//             message: "Error while sending"
//         }
//     }
//     const toUser = await prisma.user.findFirst({
//         where: {
//             number: to
//         }
//     });
//      console.log("To user found:", toUser);
//     if (!toUser) {
//         return {
//             message: "User not found",
           
//         }

//     }
//     console.log("to user is",toUser);
    
//     await prisma.$transaction(async (tx) => {
//     console.log("Transaction started");

//     await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(from)} FOR UPDATE`;

//     const fromBalance = await tx.balance.findUnique({
//         where: { userId: Number(from) },
//     });

//     console.log("From balance:", fromBalance);

//     if (!fromBalance || fromBalance.amount < amount) {
//         throw new Error('Insufficient funds');
//     }

//     // await tx.balance.update({
//     //     where: { userId: Number(from) },
//     //     data: { amount: { decrement: amount } },
//     // });

//     await tx.balance.upsert({
//   where: { userId: toUser.id },
//   update: { amount: { increment: amount } },
//   create: {
//     userId: toUser.id,
//     amount: amount,
//   },
// });


//     await tx.balance.update({
//         where: { userId: toUser.id },
//         data: { amount: { increment: amount } },
//     });

//     const createdTransfer = await tx.p2pTransfer.create({
//         data: {
//             fromUserId: Number(from),
//             toUserId: toUser.id,
//             amount: amount,
//             timestamp: new Date(),
//         }
//     });

//     console.log("Transfer record created:", createdTransfer);
// });

// }

"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function p2pTransfer(to: string, amount: number) {
  console.log("Initiating transfer", { to, amount });

  const session = await getServerSession(authOptions);
  const from = session?.user?.id;
  console.log("Current user ID:", from);

  if (!from) {
    return {
      message: "Error while sending",
    };
  }

  const toUser = await prisma.user.findFirst({
    where: {
      number: to,
    },
  });

  console.log("To user found:", toUser);

  if (!toUser) {
    return {
      message: "User not found",
    };
  }

  console.log("to user is", toUser);

  await prisma.$transaction(async (tx) => {
    console.log("Transaction started");

    await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(
      from
    )} FOR UPDATE`;

    const fromBalance = await tx.balance.findUnique({
      where: { userId: Number(from) },
    });

    console.log("From balance:", fromBalance);

    if (!fromBalance || fromBalance.amount < amount) {
      throw new Error("Insufficient funds");
    }

    // Decrement sender's balance
    await tx.balance.update({
      where: { userId: Number(from) },
      data: { amount: { decrement: amount } },
    });

    // Increment recipient's balance or create if doesn't exist
    await tx.balance.upsert({
      where: { userId: toUser.id },
      update: { amount: { increment: amount } },
      create: {
        userId: toUser.id,
        amount: amount,
        locked: 0, // or another default value as appropriate
      },
    });

    // Record the transfer
    const createdTransfer = await tx.p2pTransfer.create({
      data: {
        fromUserId: Number(from),
        toUserId: toUser.id,
        amount: amount,
        timestamp: new Date(),
      },
    });

    console.log("Transfer record created:", createdTransfer);
  });
}
