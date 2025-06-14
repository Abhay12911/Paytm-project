// File: components/P2PTransactions.tsx

"use client";

import { Card } from "@repo/ui/card";

export function P2PTransactions({
  transactions,
}: {
  transactions: {
    toUserId: number;
    amount: number;
    time: Date;
  }[];
}) {
  return (
    <Card title="Recent P2P Transfers">
      <div className="pt-2 space-y-3">
        {transactions.length === 0 ? (
          <div className="text-center text-gray-500">No transactions yet</div>
        ) : (
          transactions.map((t, i) => (
            <div key={i} className="flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-800">
                  To User ID: {t.toUserId}
                </div>
                <div className="text-xs text-gray-500">
                  {new Date(t.time).toDateString()}
                </div>
              </div>
              <div className="text-green-600 font-semibold">
                ₹{t.amount / 100}
              </div>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}
