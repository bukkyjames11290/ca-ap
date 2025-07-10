'use client';

import { useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { X } from 'lucide-react';
import { NumberPad } from '@/components/number-pad';
import toast from 'react-hot-toast';
import { AddCashConfirmationDialog } from './DailogPanels/AddCashDailogs';

export function AddCash({ user }: { user: any }) {
  const [addCashAmount, setAddCashAmount] = useState('0');
  const [addCashDialogOpen, setAddCashDialogOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleNumberClick = (num: string) => {
    if (addCashAmount === '0') {
      setAddCashAmount(num);
    } else {
      setAddCashAmount(addCashAmount + num);
    }
  };

  const handleDecimalClick = () => {
    if (!addCashAmount.includes('.')) {
      setAddCashAmount(addCashAmount + '.');
    }
  };

  const handleBackspace = () => {
    if (addCashAmount.length > 1) {
      setAddCashAmount(addCashAmount.slice(0, -1));
    } else {
      setAddCashAmount('0');
    }
  };

  const handleAddCash = () => {
    const amount = parseFloat(addCashAmount);
    if (isNaN(amount) || amount <= 0) {
      toast.error('Please enter an amount greater than $0');
      return;
    }

    setShowConfirmation(true);
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    setAddCashDialogOpen(false);
    setAddCashAmount('0');
  };

  return (
    <>
      <button 
        onClick={() => setAddCashDialogOpen(true)} 
        className="flex-1 bg-[#ececec] text-[#414141] font-semibold p-4 rounded-full flex items-center justify-center space-x-2"
      >
        Add Cash
      </button>

      <Dialog 
        open={addCashDialogOpen} 
        onClose={() => {
          setAddCashDialogOpen(false);
          setShowConfirmation(false);
          setAddCashAmount('0');
        }} 
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex items-center justify-center">
          {!showConfirmation ? (
            <DialogPanel className="bg-white w-full h-full flex items-center justify-center">
              <div className="bg-white h-full w-full max-w-md mx-auto flex flex-col">
                {/* Close Button */}
                <div className="flex justify-start px-6 py-4 relative z-10">
                  <button 
                    onClick={() => setAddCashDialogOpen(false)} 
                    className="text-green-500"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Title */}
                <div className="text-center w-full flex items-center justify-center absolute top-4 mb-8">
                  <h2 className="text-lg font-medium text-black">Add Cash</h2>
                </div>

                {/* Amount Display */}
                <div className="py-24 flex flex-col items-center justify-center w-full px-4 overflow-hidden">
                  <div
                    className={`font-light mb-16 text-green-500 w-full text-center truncate ${
                      addCashAmount.length > 12 ? 'text-3xl' : 
                      addCashAmount.length > 10 ? 'text-4xl' : 
                      addCashAmount.length > 8 ? 'text-5xl' : 'text-6xl'
                    }`}
                    style={{ letterSpacing: '0.5px' }}
                  >
                    ${addCashAmount}
                  </div>
                </div>

                {/* Number Pad */}
                <div className="mb-20">
                  <NumberPad 
                    onNumberClick={handleNumberClick} 
                    onDecimalClick={handleDecimalClick} 
                    onBackspace={handleBackspace} 
                    textColor="text-black" 
                  />
                </div>

                {/* Add Button */}
                <div className="px-6 mb-8">
                  <button
                    onClick={handleAddCash}
                    disabled={addCashAmount === '0'}
                    className="w-full bg-green-500 hover:bg-green-600 text-white text-xl font-medium py-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            </DialogPanel>
          ) : (
            <DialogPanel className="bg-white w-full h-full flex items-center justify-center">
              <AddCashConfirmationDialog
                amount={addCashAmount}
                onClose={handleCloseConfirmation}
                user={user}
              />
            </DialogPanel>
          )}
        </div>
      </Dialog>
    </>
  );
}