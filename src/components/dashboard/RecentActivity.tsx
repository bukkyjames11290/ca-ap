'use client';

import { CashAppTransaction } from '@/utils/types';
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { formatCurrency } from '../formatCurrency';

interface Props {
  transactions: CashAppTransaction[];
}

export default function RecentActivity({ transactions }: Props) {
  const [recentHistory, setRecentHistory] = useState<CashAppTransaction[]>([]);

  useEffect(() => {
    setRecentHistory(transactions.slice(0, 6));
  }, [transactions]);

  const renderTransaction = (tx: CashAppTransaction) => {
    const statusColor = tx.status === 'Pending' ? 'text-yellow-600' : tx.status === 'Failed' ? 'text-red-600' : 'text-green-600';

    const isDebit = tx.amount_usd < 0;
    const Icon = isDebit ? ArrowUpRight : ArrowDownLeft;

    return (
      <div key={tx.transaction_id} className="border-b py-3">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
              <Icon className={`w-4 h-4 ${isDebit ? 'text-red-500' : 'text-green-500'}`} />
            </div>
            <div>
              <p className="text-sm uppercase font-medium w-[250px] sm:max-w-full">{tx.description}</p>
              <p className="text-xs text-gray-400">{tx.dateTime}</p>
            </div>
          </div>
          <div className="text-right">
            <p className={`text-sm text-nowrap font-semibold ${isDebit ? 'text-red-600' : 'text-black'}`}>{isDebit ? '-' : '+'}${Math.abs(tx.amount_usd).toLocaleString()}</p>
            <span className={`text-[10px] font-medium relative -top-1 ${statusColor}`}>{tx.status}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8 px-4 py-6 bg-white rounded-2xl">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[#414141]">Recent Activity</h3>
          <button className="text-[#414141] text-sm">See All</button>
        </div>
        <div className="space-y-2">{recentHistory.length > 0 ? recentHistory.map(renderTransaction) : <p className="text-sm text-gray-500">No transactions found.</p>}</div>
      </div>
    </div>
  );
}
