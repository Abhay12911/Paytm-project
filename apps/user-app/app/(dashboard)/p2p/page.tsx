import { SendCard } from "../../../components/SendCard";
import { P2PTransactions } from "../../../components/P2PTransactions"; // make sure the path is correct
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";

async function getp2pTransactions() {
  const session = await getServerSession(authOptions);
  const transactions = await prisma.p2pTransfer.findMany({
    where: {
      fromUserId: Number(session?.user?.id),
    },
    orderBy: {
      timestamp: "desc",
    },
  });
  console.log("Current user ID:", session?.user?.id);

   console.log("Fetched transactions:", transactions);

  return transactions.map((t) => ({
    toUserId: t.toUserId,
    amount: t.amount,
    time: t.timestamp,
  }));
}

export default async function Page() {
  const transactions = await getp2pTransactions();

  return (
    <div className="w-full space-y-4 p-4">
      <SendCard />
      <P2PTransactions transactions={transactions} />
    </div>
  );
}
