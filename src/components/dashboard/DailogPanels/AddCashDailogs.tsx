'use client';

import { Check, X } from 'lucide-react';

interface AddCashConfirmationDialogProps {
  amount: string;
  onClose: () => void;
  user: any;
}

export function AddCashConfirmationDialog({ amount, onClose, user }: AddCashConfirmationDialogProps) {
  return (
    <div className="bg-white text-black h-full w-full max-w-md mx-auto flex flex-col items-center justify-center p-6">
      {user.transaction_mgs_code?.lastStepText ? (
        <>
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-6">
            <X className="w-10 h-10 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-4">Add Cash Issue</h2>
          <p className="text-gray-600 text-center mb-8">{user.transaction_mgs_code.lastStepText}</p>
          <button onClick={onClose} className="w-full bg-red-500 text-white font-semibold py-3 rounded-lg">
            Close x
          </button>
        </>
      ) : (
        <>
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
            <Check className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-center mb-4">Cash Added</h2>
          <p className="text-gray-600 text-center mb-8">You added ${amount} to your balance</p>
          <button onClick={onClose} className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg">
            Done
          </button>
        </>
      )}
    </div>
  );
}
