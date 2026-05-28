/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type MediaType = 'powder' | 'co2' | 'foam' | 'gas';
export type TransactionType = 'refill' | 'baru';

export interface CartItem {
  id: string; // combining type, media, size, e.g. "baru_powder_3"
  name: string;
  transaksi: TransactionType;
  labelTransaksi: string;
  media: MediaType;
  labelMedia: string;
  size: string; // e.g. "1", "2", "3", "4.5", "6", "9"
  price: number;
  quantity: number;
}

export interface PricingDatabase {
  refill: {
    powder: Record<string, number>;
    co2: Record<string, number>;
    foam: Record<string, number>;
    gas: Record<string, number>;
  };
  baru: {
    powder: Record<string, number>;
    co2: Record<string, number>;
    foam: Record<string, number>;
    gas: Record<string, number>;
  };
}

export interface ContactFormInput {
  name: string;
  phone: string;
  subject: string;
  message: string;
  company?: string;
}
