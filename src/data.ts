/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PricingDatabase } from './types';

// Price database sourced exactly from CV. CS FIRE FIGHTER official physical pricelist
export const priceDatabase: PricingDatabase = {
  refill: {
    co2: { 
      '2': 97000, 
      '3': 123000, 
      '5': 155000, 
      '6.8': 197000, 
      '9': 369000 
    },
    powder: { 
      '1': 50000, 
      '2': 87000, 
      '3': 100000, 
      '4': 119000, 
      '5': 155000, 
      '6': 180000, 
      '9': 225000, 
      '25': 750000, 
      '50': 1400000 
    },
    foam: { 
      '1': 50000, 
      '2': 85000, 
      '3': 90000, 
      '4': 110000, 
      '5': 145000, 
      '6': 170000, 
      '9': 215000, 
      '25': 740000, 
      '50': 1390000 
    },
    gas: { 
      '1': 250000, 
      '2': 450000, 
      '3': 675000, 
      '4': 900000, 
      '5': 1125000, 
      '6': 1350000, 
      '9': 2025000, 
      '25': 5625000, 
      '50': 11250000 
    }
  },
  baru: {
    co2: { 
      '2': 495000, 
      '3': 595500, 
      '5': 806500, 
      '6.8': 947500, 
      '9': 1906000 
    },
    powder: { 
      '1': 200000, 
      '2': 250000, 
      '3': 295000, 
      '4': 330000, 
      '5': 385000, 
      '6': 440000, 
      '9': 550000, 
      '25': 2300000, 
      '50': 3200000 
    },
    foam: { 
      '1': 275000, 
      '2': 325000, 
      '3': 375000, 
      '4': 425000, 
      '5': 475000, 
      '6': 525000, 
      '9': 645000, 
      '25': 2750000, 
      '50': 3550000 
    },
    gas: { 
      '1': 415000, 
      '2': 640000, 
      '3': 993000, 
      '4': 1365000, 
      '5': 1598000, 
      '6': 1865000, 
      '9': 2358000, 
      '25': 7560000, 
      '50': 13250000 
    }
  }
};

export const mediaLabels = {
  powder: 'Dry Chemical Powder',
  co2: 'Carbon Dioxide (CO2)',
  foam: 'Foam AFFF',
  gas: 'Clean Agent Gas Liquid'
};

export interface ProductCatalogItem {
  id: string;
  name: string;
  categoryCode: 'powder' | 'co2' | 'foam' | 'gas';
  size: string;
  price: number;
  originalPrice: number;
  badge: string;
  subTypeLabel: string;
  imgUrl: string;
  benefits: string[];
}

export const productCatalog: ProductCatalogItem[] = [
  {
    id: 'baru_powder_1',
    name: 'APAR Powder Portable 1 Kg',
    categoryCode: 'powder',
    size: '1',
    price: 200000,
    originalPrice: 250000,
    badge: 'Pilihan Mobil',
    subTypeLabel: 'Dry Chemical Powder',
    imgUrl: '/powder.png',
    benefits: ['Sangat pas untuk Mobil & Dapur', 'Termasuk Bracket & Sabuk Pengaman']
  },
  {
    id: 'baru_powder_3',
    name: 'APAR Powder Standard 3 Kg',
    categoryCode: 'powder',
    size: '3',
    price: 295000,
    originalPrice: 350000,
    badge: 'Produk Terlaris',
    subTypeLabel: 'Dry Powder - Standard Office',
    imgUrl: '/powder.png',
    benefits: ['Standar Kantor, Ruko & Gudang', 'Sertifikasi K3 & Hanger Dinding Gratis']
  },
  {
    id: 'baru_co2_2',
    name: 'APAR CO2 Elektrikal 2 Kg',
    categoryCode: 'co2',
    size: '2',
    price: 495000,
    originalPrice: 570000,
    badge: 'Proteksi Panel',
    subTypeLabel: 'CO2 - Electrical Hazard',
    imgUrl: '/co2.png',
    benefits: ['Terbaik untuk Panel Listrik & Server', 'Tanpa Ampas, Residu & Karat']
  },
  {
    id: 'baru_foam_6',
    name: 'APAR Foam Busa 6 Kg',
    categoryCode: 'foam',
    size: '6',
    price: 525000,
    originalPrice: 600000,
    badge: 'Terbaik Dapur',
    subTypeLabel: 'Foam AFFF - Kitchen & Liquids',
    imgUrl: '/foam.png',
    benefits: ['Sangat Efektif untuk Minyak & Cairan', 'Serta Bahan Padat Kertas/Kain']
  },
  {
    id: 'baru_gas_3',
    name: 'APAR Gas Liquid Clean Agent 3 Kg',
    categoryCode: 'gas',
    size: '3',
    price: 993000,
    originalPrice: 1150000,
    badge: 'Teknologi Tinggi',
    subTypeLabel: 'Gas Liquid - Premium Clean',
    imgUrl: '/gas.png',
    benefits: ['Pengganti Halon Ramah Lingkungan', 'Aman untuk Alat Elektronik Presisi']
  }
];

export const categoryCards = [
  {
    id: 'cat_powder',
    code: 'powder' as const,
    title: 'Dry Chemical Powder',
    badge: 'Sangat Populer',
    classes: 'Kelas Api: A, B, C',
    imgUrl: '/powder.png',
    desc: 'Bahan powder serbaguna untuk memadamkan kebakaran akibat material padat non-logam, cairan mudah terbakar, serta korsleting listrik. Ideal untuk rumah, ruko, toko, kantor, dan kendaraan.'
  },
  {
    id: 'cat_co2',
    code: 'co2' as const,
    title: 'Carbon Dioxide (CO2)',
    badge: 'Proteksi IT',
    classes: 'Kelas Api: B, C',
    imgUrl: '/co2.png',
    desc: 'Pemadam gas bersih yang tidak meninggalkan residu ampas atau kotoran. Sangat tepat untuk ruang komputer/server, panel distribusi listrik, lab, laboratorium, dan ruang gawat medis.'
  },
  {
    id: 'cat_foam',
    code: 'foam' as const,
    title: 'Foam AFFF (Busa)',
    badge: 'Khusus Cairan',
    classes: 'Kelas Api: A, B',
    imgUrl: '/foam.png',
    desc: 'Menyelimuti benda cair yang mudah terbakar seperti bensin, solar, alkohol, atau minyak masak sehingga pasokan oksigen terputus. Paling direkomendasikan untuk SPBU, dapur komersial, pabrik, dan industri.'
  },
  {
    id: 'cat_gas',
    code: 'gas' as const,
    title: 'Clean Agent Gas Liquid',
    badge: 'Ramah Lingkungan',
    classes: 'Kelas Api: A, B, C',
    imgUrl: '/gas.png',
    desc: 'Agen pembersih gas cair premium ramah lingkungan pengganti Halon. Menghentikan kebakaran tanpa meninggalkan sisa kimiawi, aman untuk mesin kapal, server vital, kelistrikan, dan peralatan telekomunikasi.'
  }
];
