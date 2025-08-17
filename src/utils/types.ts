// src/utils/types.ts

export interface CashAppAccount {
  account_id: string;
  cashtag: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  password: string;
  profileImg?: string;
  balance_usd: number;
  pin?: string;
  linkedBank?: {
    bank_name: string;
    account_number: string;
    routing_number: string;
  };
  linkedCard?: {
    card_brand: string;
    last4: string;
  };
  transaction_mgs_code: {
    transaction_text_msg?: string;
    transaction_code?: string;
    headerText?: string;
    lastStepText?: string;
    wireDate: boolean;
  };
  transaction_history: CashAppTransaction[];
}

export interface CashAppTransaction {
  transaction_id?: string;
  dateTime: string;
  description: string;
  status: string; // 'Pending', 'Completed', 'Failed'
  amount_usd: number;
  sender_cashtag?: string;
  recipient_cashtag?: string;
}
