// import express from "express";
// import db from "@repo/db/client";
// const app = express();

// app.use(express.json())

// app.post("/hdfcWebhook", async (req, res) => {
//     //TODO: Add zod validation here?
//     //TODO: HDFC bank should ideally send us a secret so we know this is sent by them
//     const paymentInformation: {
//         token: string;
//         userId: string;
//         amount: string
//     } = {
//         token: req.body.token,
//         userId: req.body.user_identifier,
//         amount: req.body.amount
//     };

//     try {
//         await db.$transaction([
//             db.balance.updateMany({
//                 where: {
//                     userId: Number(paymentInformation.userId)
//                 },
//                 data: {
//                     amount: {
//                         // You can also get this from your DB
//                         increment: Number(paymentInformation.amount)
//                     }
//                 }
//             }),
//             db.onRampTransaction.upsert({
//                 where: {
//                     token: paymentInformation.token
//                 },
//                 create: {
//                     token: paymentInformation.token,
//                     userId: Number(paymentInformation.userId),
//                     amount: Number(paymentInformation.amount),
//                     status: "Success",
//                     provider: "HDFC", // or the appropriate provider string
//                     startTime: new Date() // or the appropriate start time value
//                 },
//                 update: {
//                     status: "Success"
//                 }
//             })
//         ]);

//         res.json({
//             message: "Captured"
//         })
//     } catch(e) {
//         console.error(e);
//         res.status(411).json({
//             message: "Error while processing webhook"
//         })
//     }

// })

// app.listen(3003);

import express from "express";
import db from "@repo/db/client";
const app = express();

app.use(express.json());

app.post("/hdfcWebhook", async (req, res) => {
    const paymentInformation: {
        token: string;
        userId: string;
        amount: string;
    } = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount,
    };

    try {
        await db.$transaction([
            // ✅ Upsert balance: create if doesn't exist, else increment
            db.balance.upsert({
                where: {
                    userId: Number(paymentInformation.userId)
                },
                create: {
                    userId: Number(paymentInformation.userId),
                    amount: Number(paymentInformation.amount),
                    locked: 0,
                },
                update: {
                    amount: {
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),
            // ✅ Upsert transaction: create if not found, else update status
            db.onRampTransaction.upsert({
                where: {
                    token: paymentInformation.token
                },
                create: {
                    token: paymentInformation.token,
                    userId: Number(paymentInformation.userId),
                    amount: Number(paymentInformation.amount),
                    status: "Success",
                    provider: "HDFC",
                    startTime: new Date()
                },
                update: {
                    status: "Success"
                }
            })
        ]);

        res.json({
            message: "Captured"
        });
    } catch (e) {
        console.error(e);
        res.status(411).json({
            message: "Error while processing webhook"
        });
    }
});

app.listen(3003);
