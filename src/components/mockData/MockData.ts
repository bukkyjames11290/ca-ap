import { CashAppAccount } from '@/utils/types';

export const mockAccounts: CashAppAccount[] = [
  {
    account_id: 'ACC001',
    cashtag: '$markhana',
    fullName: 'Mark Smith',
    email: 'sample@sample.com',
    phoneNumber: '489-178-0042',
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
    cashtag: '$hana',
    fullName: 'Hana Lee',
    email: 'hana@sample.com',
    phoneNumber: '202-555-0199',
    password: 'hana123',
    profileImg: '',
    pin: '4848',
    balance_usd: 72000.0,
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
      headerText: 'Transaction Verification',
      lastStepText: 'Your verification was successful.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'January 10, 2022',
        description: 'Sent to $markhana',
        status: 'Success',
        amount_usd: -1000.0
      },
      {
        dateTime: 'February 12, 2022',
        description: 'Cashback from Boost',
        status: 'Success',
        amount_usd: 20.0
      },
      {
        dateTime: 'March 4, 2022',
        description: 'Received from $elena',
        status: 'Success',
        amount_usd: 500.0
      }
    ]
  },
  {
    account_id: 'ACC003',
    cashtag: '$elena',
    fullName: 'Elena Johnson',
    email: 'elena@sample.com',
    phoneNumber: '303-555-0145',
    password: 'elena456',
    profileImg: '',
    pin: '9911',
    balance_usd: 153000.0,
    linkedBank: {
      bank_name: 'Bank of America',
      account_number: '****8899',
      routing_number: '****6655'
    },
    linkedCard: {
      card_brand: 'Visa',
      last4: '8899'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'Enter your Cash App code',
      headerText: 'Security Notice',
      lastStepText: 'Code entered successfully.',
      wireDate: false
    },
    transaction_history: [
      {
        dateTime: 'March 18, 2023',
        description: 'Received from $hana',
        status: 'Success',
        amount_usd: 200.0
      },
      {
        dateTime: 'April 20, 2023',
        description: 'Sent to $markhana',
        status: 'Success',
        amount_usd: -750.0
      }
    ]
  },
  {
    account_id: 'ACC004',
    cashtag: '$johnny',
    fullName: 'Johnny Blaze',
    email: 'johnny@sample.com',
    phoneNumber: '415-555-0178',
    password: 'johnny789',
    profileImg: '',
    pin: '5622',
    balance_usd: 987000.0,
    linkedBank: {
      bank_name: 'Ally Bank',
      account_number: '****4455',
      routing_number: '****7722'
    },
    linkedCard: {
      card_brand: 'Discover',
      last4: '4455'
    },
    transaction_mgs_code: {
      transaction_text_msg: 'Confirm your payment',
      headerText: 'Alert!',
      lastStepText: 'Your transaction has been flagged. Contact support.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'May 5, 2023',
        description: 'Received from $markhana',
        status: 'Success',
        amount_usd: 1000000.0
      },
      {
        dateTime: 'June 10, 2023',
        description: 'Sent to $elena',
        status: 'Success',
        amount_usd: -300.0
      }
    ]
  }
];
