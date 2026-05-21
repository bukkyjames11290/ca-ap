import React, { ReactNode } from 'react';
import { CashAppAccount } from '@/utils/types';

export const mockAccounts: CashAppAccount[] = [
  {
    account_id: 'ACC001',
    cashtag: '$markhana',
    fullName: 'Mark Smith',
    phoneNumber: '489-178-0042',
    email: 'sample@sample.com',
    password: 'sample',
    profileImg: '',
    pin: '3773',
    balance_usd: 4900100.0,
    linkedBank: {
      bank_name: 'Wells Fargo',
      account_number: '****2323',
      routing_number: '****8491'
    },
    linkedCard: {
      card_brand: 'Visa',
      last4: '2323'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      headerText: 'Dear valued Customer',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'November 23, 2013',
        description: 'Received from $hana',
        status: 'Success',
        amount_usd: 200000000.0
      },
      {
        dateTime: 'March 23, 2013',
        description: 'Sent to $mark',
        status: 'Success',
        amount_usd: -500000.0
      },
      {
        dateTime: 'April 4, 2011',
        description: 'Direct deposit from MHunlimiteds USA',
        status: 'Success',
        amount_usd: 2500000.0
      },
      {
        dateTime: 'February 20, 2009',
        description: 'Received from $hana',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'February 2, 2009',
        description: 'Sent to $johnny',
        status: 'Success',
        amount_usd: -1000000.0
      }
    ]
  },
  {
    account_id: 'ACC002',
    cashtag: '$mfleming',
    fullName: 'Mike Fleming',
    email: 'mdfdcm@yahoo.com',
    password: 'Forwhateverno000',
    profileImg: '',
    pin: '4848',
    balance_usd: 2105.0,
    linkedBank: {
      bank_name: 'Chase',
      account_number: '****1122',
      routing_number: '****3311'
    },
    linkedCard: {
      card_brand: 'Mastercard',
      last4: '1122'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'Please confirm this transaction with the code sent to your phone',
      headerText: 'Dear Valued Customer,',
      lastStepText: "To make a transaction in your account a withdrawal fee of $150.00 is required to be able to withdraw your money. Thank you for your continued trust and cooperation. Best regards, Cash app",
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'August 16, 2025',
        description: 'BTC',
        status: 'Success',
        amount_usd: 115.0
      },
      {
        dateTime: 'August 16, 2025',
        description: 'BTC',
        status: 'Success',
        amount_usd: 25.0
      },
      {
        dateTime: 'August 16, 2025',
        description: 'BTC',
        status: 'Success',
        amount_usd: 125.0
      },
      {
        dateTime: 'August 16, 2025',
        description: 'BTC',
        status: 'Success',
        amount_usd: 155.0
      },
      {
        dateTime: 'August 14, 2025',
        description: 'BTC',
        status: 'Success',
        amount_usd: 204.0
      },
    ]
  },
  {
    account_id: 'ACC003',
    cashtag: '$MaCraw2000',
    fullName: 'MALCOLM CRAWFORD',
    email: 'cashapp070132@gmail.com',
    password: 'Crawford0',
    profileImg: '',
    pin: '4848',
    balance_usd: 8534900.0,
    linkedBank: {
      bank_name: 'Chase',
      account_number: '****1122',
      routing_number: '****3311'
    },
    linkedCard: {
      card_brand: 'Mastercard',
      last4: '1122'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'Please confirm this transaction with the code sent to your phone',
      headerText: 'Dear Valued Customer,',
      lastStepText: "Transaction Restricted: We have temporarily paused activity on your account. To resume normal transactions, please reach out to our support team at your earliest convenience. Best regards, Cash app",
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'May 20, 2026',
        description: 'Wire transfer to Wells Fargo',
        status: 'Pending',
        amount_usd: -34900.0
      },
      {
        dateTime: 'May 20, 2026',
        description: 'Wire transfer to Wells Fargo',
        status: 'Pending',
        amount_usd: -390000.0
      },
      {
        dateTime: 'May 19, 2026',
        description: 'Coinbase',
        status: 'Success',
        amount_usd: 34900.0
      },
      {
        dateTime: 'December 28, 2025',
        description: 'Coinbase',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'December 20, 2025',
        description: 'Coinbase',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'December 12, 2025',
        description: 'Coinbase',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'November 15, 2025',
        description: 'Coinbase',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'November 8, 2025',
        description: 'Coinbase',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'October 25, 2025',
        description: 'Coinbase',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'September 18, 2025',
        description: 'Coinbase',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'August 23, 2025',
        description: 'Coinbase',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'July 17, 2025',
        description: 'Coinbase',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 26, 2025',
        description: 'Coinbase',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'May 1, 2025',
        description: 'Coinbase',
        status: 'Success',
        amount_usd: 1000000.0
      },
    ]
  },
];
