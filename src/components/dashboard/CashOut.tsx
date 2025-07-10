'use client';

import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import toast from 'react-hot-toast';
import { mockAccounts } from '../mockData/MockData';
import { AmountEntryDialog, ConfirmationDialog, RecipientSelectionDialog } from './DailogPanels/CashOutDailogs';

export function CashOut({ user, handleLogout, payDialogOpen, setPayDialogOpen }: any) {
  const [payAmount, setPayAmount] = useState('0');
  const [activeAction, setActiveAction] = useState<'pay' | 'request'>('pay');
  const [showRecipientDialog, setShowRecipientDialog] = useState(false);
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
  const [recipient, setRecipient] = useState<{ cashtag: string; fullName: string; profileImg?: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [note, setNote] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(mockAccounts);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery) {
      const filtered = mockAccounts.filter(account => account.cashtag.toLowerCase().includes(searchQuery.toLowerCase()) || account.fullName.toLowerCase().includes(searchQuery.toLowerCase()));
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers(mockAccounts);
    }
  }, [searchQuery]);

  const handleNumberClick = (num: string) => {
    if (payAmount === '0') {
      setPayAmount(num);
    } else {
      setPayAmount(payAmount + num);
    }
  };

  const handleDecimalClick = () => {
    if (!payAmount.includes('.')) {
      setPayAmount(payAmount + '.');
    }
  };

  const handleBackspace = () => {
    if (payAmount.length > 1) {
      setPayAmount(payAmount.slice(0, -1));
    } else {
      setPayAmount('0');
    }
  };

  const validateAmount = () => {
    const amount = parseFloat(payAmount);
    if (isNaN(amount) || amount <= 0) {
      toast.error('Please enter an amount greater than $0');
      return false;
    }

    if (activeAction === 'pay' && amount > user.balance_usd) {
      toast.error('Insufficient funds');
      return false;
    }

    return true;
  };

  const handleAction = () => {
    if (!validateAmount()) return;
    setShowRecipientDialog(true);
  };

  const handleCompleteTransaction = async () => {
  if (!recipient) {
    toast.error('Please select a recipient');
    return;
  }

  setIsLoading(true);
  
  try {
    // Simulate API call or processing
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setShowRecipientDialog(false);
    setShowConfirmationDialog(true);
  } catch (error) {
    toast.error('Transaction failed');
  } finally {
    setIsLoading(false);
  }
};

  const handleCloseConfirmation = () => {
    setShowConfirmationDialog(false);
    setPayDialogOpen(false);
    setPayAmount('0');
    setRecipient(null);
    setSearchQuery('');
    setNote('');
  };

  const handleBackToAmount = () => {
    setShowRecipientDialog(false);
    setRecipient(null);
    setSearchQuery('');
  };

  const clearRecipient = () => {
    setRecipient(null);
    setSearchQuery('');
  };

  return (
    <>
      <button onClick={() => setPayDialogOpen(true)} className="flex-1 bg-[#ececec] text-[#414141] font-semibold p-4 rounded-full flex items-center justify-center space-x-2">
        Cash Out
      </button>

      <Dialog
        open={payDialogOpen}
        onClose={() => {
          setPayDialogOpen(false);
          setShowRecipientDialog(false);
          setShowConfirmationDialog(false);
          setPayAmount('0');
          setRecipient(null);
          setSearchQuery('');
          setNote('');
        }}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center">
          {!showRecipientDialog && !showConfirmationDialog ? (
            <AmountEntryDialog
              user={user}
              payAmount={payAmount}
              activeAction={activeAction}
              setPayDialogOpen={setPayDialogOpen}
              handleNumberClick={handleNumberClick}
              handleDecimalClick={handleDecimalClick}
              handleBackspace={handleBackspace}
              handleAction={handleAction}
              setActiveAction={setActiveAction}
              handleLogout={handleLogout}
            />
          ) : showRecipientDialog ? (
            <RecipientSelectionDialog
              activeAction={activeAction}
              payAmount={payAmount}
              recipient={recipient}
              searchQuery={searchQuery}
              note={note}
              filteredUsers={filteredUsers}
              handleBackToAmount={handleBackToAmount}
              handleCompleteTransaction={handleCompleteTransaction}
              clearRecipient={clearRecipient}
              setRecipient={setRecipient}
              setSearchQuery={setSearchQuery}
              setNote={setNote}
              isLoading={isLoading}
            />
          ) : (
            <ConfirmationDialog user={user} activeAction={activeAction} payAmount={payAmount} recipient={recipient} handleCloseConfirmation={handleCloseConfirmation} />
          )}
        </div>
      </Dialog>
    </>
  );
}
