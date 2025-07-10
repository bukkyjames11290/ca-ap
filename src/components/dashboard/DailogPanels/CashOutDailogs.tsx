'use client';

import { Home, CreditCard, DollarSign, Search, Clock, CircleUser, X, User, Check, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { NumberPad } from '@/components/number-pad';
import Link from 'next/link';
import { DialogPanel } from '@headlessui/react';
import { CashAppAccount } from '@/utils/types';
import { getRandomColor } from '@/components/getRandomColor';
import { mockUsers } from '@/components/mockData/UserMockData';

// Amount Entry Dialog
export function AmountEntryDialog({ user, payAmount, activeAction, setPayDialogOpen, handleNumberClick, handleDecimalClick, handleBackspace, handleAction, setActiveAction }: any) {
  return (
    <DialogPanel className="bg-green-500 w-full h-full flex items-center justify-center">
      <div className="bg-green-500 text-white h-full w-full max-w-md mx-auto flex flex-col">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex justify-start relative z-10">
            <button onClick={() => setPayDialogOpen(false)} className="text-white">
              <X className="w-6 h-6" />
            </button>
          </div>
          <div>
            {user.profileImg ? (
              <Image src={user.profileImg} width={40} height={40} className="w-[50px] h-[50px] rounded-full" alt="avatar" />
            ) : (
              <Link href="/dashboard/profile">
                <CircleUser size={27} className="text-[#414141]" />
              </Link>
            )}
          </div>
        </div>

        <div className="py-24 flex flex-col items-center justify-center w-full px-4 overflow-hidden">
          <div
            className={`font-light mb-8 w-full text-center truncate ${payAmount.length > 12 ? 'text-3xl' : payAmount.length > 10 ? 'text-4xl' : payAmount.length > 8 ? 'text-5xl' : 'text-6xl'}`}
            style={{ letterSpacing: '0.5px' }}
          >
            ${payAmount}
          </div>
          {activeAction === 'pay' && <div className="text-xl opacity-80">Cash Balance</div>}
        </div>

        <div className="mb-12">
          <NumberPad onNumberClick={handleNumberClick} onDecimalClick={handleDecimalClick} onBackspace={handleBackspace} textColor="text-white" />
        </div>

        <div className="flex items-center gap-3 justify-around px-8 mb-12">
          <button
            onClick={() => {
              setActiveAction('request');
              handleAction();
            }}
            className={`flex-1 ${
              activeAction === 'request' ? 'bg-white text-green-500' : 'bg-transparent text-white border border-green-400'
            } font-semibold p-4 rounded-full flex items-center justify-center space-x-2 transition-colors`}
          >
            Request
          </button>
          <button
            onClick={() => {
              setActiveAction('pay');
              handleAction();
            }}
            className={`flex-1 ${
              activeAction === 'pay' ? 'bg-white text-green-500' : 'bg-transparent text-white border border-green-400'
            } font-semibold p-4 rounded-full flex items-center justify-center space-x-2 transition-colors`}
          >
            Pay
          </button>
        </div>

        <div className="flex justify-around items-center px-8 pb-6">
          <button onClick={() => setPayDialogOpen(false)}>
            <Home className="w-6 h-6 text-white" />
          </button>
          <button>
            <DollarSign className="w-6 h-6 text-white" />
          </button>
          <Link href="/dashboard/activity">
            <Clock className="w-6 h-6 text-white" />
          </Link>
        </div>
      </div>
    </DialogPanel>
  );
}

// Recipient Selection Dialog
export function RecipientSelectionDialog({
  activeAction,
  payAmount,
  recipient,
  searchQuery,
  note,
  handleBackToAmount,
  handleCompleteTransaction,
  clearRecipient,
  setRecipient,
  setSearchQuery,
  setNote,
  isLoading
}: any) {
   const filteredUsers = mockUsers.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.cashtag.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <DialogPanel className="bg-white w-full h-full flex items-center justify-center">
      <div className="bg-white text-black h-full w-full max-w-md mx-auto flex flex-col">
        <div className="flex justify-between px-6 py-4 border-b border-gray-200">
          <button onClick={handleBackToAmount} className="text-gray-600 relative -top-2">
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-lg text-[#414141] leading-4 flex flex-col items-center font-medium">
            <span>${payAmount}</span>
            <span className="text-[#6b6b6b] text-xs">{activeAction === 'pay' && 'Cash Balance'}</span>
          </h2>
          <button
            onClick={handleCompleteTransaction}
            disabled={!recipient || isLoading}
            className={`relative -top-2 bg-green-500 text-white px-4 py-1 rounded-full font-semibold flex items-center gap-2 ${!recipient || isLoading ? 'opacity-65' : ''}`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
              </>
            ) : activeAction === 'pay' ? (
              'Pay'
            ) : (
              'Request'
            )}
          </button>
        </div>

        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-1">
            <label htmlFor="To">To</label>
            <div className="relative w-full">
              <input
                type="text"
                value={recipient ? `${recipient.fullName} (${recipient.cashtag})` : searchQuery}
                onChange={e => {
                  if (!e.target.value) {
                    clearRecipient();
                  } else if (!recipient) {
                    setSearchQuery(e.target.value);
                  }
                }}
                placeholder="Name, $Cashtag"
                className="w-full border-l border-gray-200 text-black py-2 px-1 pr-10 outline-none"
                onClick={() => {
                  if (recipient) {
                    clearRecipient();
                  }
                }}
              />
              {recipient && (
                <button onClick={clearRecipient} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="px-6 py-4 flex items-center gap-1 border-b border-gray-200">
          <label htmlFor="For">For</label>
          <input type="text" value={note} onChange={e => setNote(e.target.value)} placeholder="Add a note" className="w-full border-l border-gray-200 text-black rounded-lg py-2 px-1 outline-none" />
        </div>

        <div className="flex-1 overflow-y-auto">
          {filteredUsers.map(user => (
            <div
              key={user.id}
              onClick={() => {
                setRecipient({
                  cashtag: user.cashtag,
                  fullName: user.name,
                  profileImg: user.profileUrl
                });
                setSearchQuery('');
              }}
              className={`flex items-center py-4 px-6 border-b border-gray-100 ${recipient?.cashtag === user.cashtag ? 'bg-green-50' : ''}`}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3 overflow-hidden">
                {user.profileUrl ? (
                  <Image src={user.profileUrl} width={40} height={40} className="w-full h-full rounded-full object-cover" alt={user.name} />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${getRandomColor(user.name.charAt(0))} text-white font-medium`}>{user.name.charAt(0).toUpperCase()}</div>
                )}
              </div>

              <div className="flex-1">
                <div className="font-medium">{user.name}</div>
                <div className="text-gray-500 text-sm">{user.cashtag}</div>
              </div>

              {recipient?.cashtag === user.cashtag && (
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </DialogPanel>
  );
}

// Confirmation Dialog
export function ConfirmationDialog({ user, activeAction, payAmount, recipient, handleCloseConfirmation }: any) {
  return (
    <DialogPanel className="bg-white w-full h-full relative pt-20">
      <div className="bg-white text-black h-full w-full max-w-md mx-auto p-6">
        {user.transaction_mgs_code.lastStepText ? (
          <>
            <h2 className="text-1xl font-bold mb-4">Transaction Issue:</h2>
            <p className="font-semibold text-gray-600 flex flex-col gap-1 mb-8">
              <span className="text-lg">{user.transaction_mgs_code.headerText}</span>
              <span>{user.transaction_mgs_code.lastStepText}</span>
            </p>
            <button className="w-full font-semibold text-base flex items-center justify-center bg-red-500 text-white py-2 rounded-lg" onClick={handleCloseConfirmation}>
              Close x
            </button>
          </>
        ) : (
          <>
            <div className="mt-10">
              <div className="flex flex-col gap-2">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <Check className="w-7 h-7 text-white" />
                </div>
                <p className="text-gray-600 text-lg font-semibold mb-8 leading-5">
                  {activeAction === 'pay' ? (
                    <>
                      You sent ${payAmount}
                      <br />
                      to {recipient?.cashtag}
                    </>
                  ) : (
                    <>
                      You requested ${payAmount}
                      <br />
                      from {recipient?.cashtag}
                    </>
                  )}
                </p>
                <button className="w-full font-semibold text-base flex items-center justify-center bg-green-500 text-white py-2 rounded-lg" onClick={handleCloseConfirmation}>
                  Done
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </DialogPanel>
  );
}
