'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CashAppAccount } from '@/utils/types';
import Link from 'next/link';
import TransactionHistory from './ActivityPage';
import Header from './header/Header';
import { formatCurrency } from '../formatCurrency';
import { IoIosArrowForward } from 'react-icons/io';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Loader from '../Loader';
import { BillIcon, CardIcon } from '../svgIcons';
import { ArrowUpRight, ArrowDownLeft, Plus, CreditCard, Smartphone, Settings, Bell, Eye, EyeOff, MoreHorizontal, TrendingUp, DollarSign, Home, Clock } from 'lucide-react';
import RecentActivity from './RecentActivity';
import { AddCash } from './AddCash';
import { CashOut } from './CashOut';

const getFormattedDate = () => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  };
  const today = new Date();
  return today.toLocaleDateString('en-US', options);
};

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<CashAppAccount | null>(null);
  const [showBalance, setShowBalance] = useState(true);
  const [payDialogOpen, setPayDialogOpen] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    } else {
      router.push('/');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    router.push('/');
  };

  if (!user) {
    return <Loader />;
  }

  const date = new Date();
  const hour = date.getHours();
  const formattedDate = getFormattedDate();

  return (
    <div className="relative">
      <div className="min-h-screen px-4 text-black">
        {/* Header */}
        <Header user={user} handleLogout={handleLogout} />

        {/* Balance Card */}
        <div className="mt-6 mb-8">
          <div className="bg-white rounded-2xl p-6 py-10 border">
            <div className="mb-6 flex items-center justify-center flex-col gap-1">
              <div className="flex items-center gap-1">
                <h2 className="text-3xl font-bold text-[#414141]">{showBalance ? formatCurrency(user.balance_usd) : '••••••'}</h2>
                <button onClick={() => setShowBalance(!showBalance)} className="p-1">
                  {showBalance ? <Eye className="w-5 h-5 text-[#414141]" /> : <EyeOff className="w-5 h-5 text-[#414141]" />}
                </button>
              </div>
              <p className="text-[#414141] text-sm">Cash Balance</p>
            </div>
            <div className="flex space-x-3 pt-5">
              <AddCash user={user} />
              <CashOut user={user} handleLogout={handleLogout} payDialogOpen={payDialogOpen} setPayDialogOpen={setPayDialogOpen} />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-8 hidden">
          <div className="grid grid-cols-4 gap-4">
            <button className="flex flex-col items-center space-y-2 p-4">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center border border-gray-800">
                <Plus className="w-6 h-6 text-[#00D632]" />
              </div>
              <span className="text-xs text-[#414141]">Add Cash</span>
            </button>
            <button className="flex flex-col items-center space-y-2 p-4">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center border border-gray-800">
                <CreditCard className="w-6 h-6 text-[#00D632]" />
              </div>
              <span className="text-xs text-[#414141]">Cash Card</span>
            </button>
            <button className="flex flex-col items-center space-y-2 p-4">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center border border-gray-800">
                <TrendingUp className="w-6 h-6 text-[#00D632]" />
              </div>
              <span className="text-xs text-[#414141]">Investing</span>
            </button>
            <button className="flex flex-col items-center space-y-2 p-4">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center border border-gray-800">
                <Smartphone className="w-6 h-6 text-[#00D632]" />
              </div>
              <span className="text-xs text-[#414141]">Boost</span>
            </button>
          </div>
        </div>

        {/* Recent Activity */}

        <RecentActivity transactions={user.transaction_history} />
      </div>
      <div className="fixed w-full z-50 bottom-0 bg-white flex justify-around items-center px-8 py-6">
        <button onClick={() => setPayDialogOpen(false)}>
          <Home className="w-6 h-6 text-black" />
        </button>
        <button onClick={() => setPayDialogOpen(true)}>
          <DollarSign className="w-6 h-6 text-black" />
        </button>
        <Link href="/dashboard/activity">
          <Clock className="w-6 h-6 text-black" />
        </Link>
      </div>
    </div>
  );
}
