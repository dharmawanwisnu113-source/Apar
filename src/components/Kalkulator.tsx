/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sliders, Receipt, ShoppingCart, Plus, Minus, MessageSquareCode } from 'lucide-react';
import { priceDatabase, mediaLabels } from '../data';
import { MediaType, TransactionType } from '../types';

interface KalkulatorProps {
  transaksi: TransactionType;
  media: MediaType;
  size: string;
  quantity: number;
  onChangeTransaksi: (val: TransactionType) => void;
  onChangeMedia: (val: MediaType) => void;
  onChangeSize: (val: string) => void;
  onChangeQuantity: (val: number) => void;
  onAddFromCalculator: () => void;
}

export default function Kalkulator({
  transaksi,
  media,
  size,
  quantity,
  onChangeTransaksi,
  onChangeMedia,
  onChangeSize,
  onChangeQuantity,
  onAddFromCalculator
}: KalkulatorProps) {

  // Sourced from true CV. CS FIRE FIGHTER price lists
  const sizeOptions: Record<MediaType, { value: string; label: string }[]> = {
    co2: [
      { value: '2', label: '2 Kg (Portable)' },
      { value: '3', label: '3 Kg (Portable)' },
      { value: '5', label: '5 Kg (Portable)' },
      { value: '6.8', label: '6.8 Kg (Portable)' },
      { value: '9', label: '9 Kg (Heavy)' }
    ],
    powder: [
      { value: '1', label: '1 Kg (Portable)' },
      { value: '2', label: '2 Kg (Portable)' },
      { value: '3', label: '3 Kg (Portable)' },
      { value: '4', label: '4 Kg (Portable)' },
      { value: '5', label: '5 Kg (Portable)' },
      { value: '6', label: '6 Kg (Portable)' },
      { value: '9', label: '9 Kg (Heavy)' },
      { value: '25', label: '25 Kg (Trolley)' },
      { value: '50', label: '50 Kg (Trolley)' }
    ],
    foam: [
      { value: '1', label: '1 Kg (Portable)' },
      { value: '2', label: '2 Kg (Portable)' },
      { value: '3', label: '3 Kg (Portable)' },
      { value: '4', label: '4 Kg (Portable)' },
      { value: '5', label: '5 Kg (Portable)' },
      { value: '6', label: '6 Kg (Portable)' },
      { value: '9', label: '9 Kg (Heavy)' },
      { value: '25', label: '25 Kg (Trolley)' },
      { value: '50', label: '50 Kg (Trolley)' }
    ],
    gas: [
      { value: '1', label: '1 Kg (Portable)' },
      { value: '2', label: '2 Kg (Portable)' },
      { value: '3', label: '3 Kg (Portable)' },
      { value: '4', label: '4 Kg (Portable)' },
      { value: '5', label: '5 Kg (Portable)' },
      { value: '6', label: '6 Kg (Portable)' },
      { value: '9', label: '9 Kg (Heavy)' },
      { value: '25', label: '25 Kg (Trolley)' },
      { value: '50', label: '50 Kg (Trolley)' }
    ]
  };

  const currentSizes = sizeOptions[media] || sizeOptions.powder;

  // Fetch unit cost from database based on state
  const unitCost = priceDatabase[transaksi][media][size] || 0;
  const totalCost = unitCost * quantity;

  const handleAdjustQuantity = (amount: number) => {
    const newVal = quantity + amount;
    if (newVal >= 1) {
      onChangeQuantity(newVal);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val >= 1) {
      onChangeQuantity(val);
    } else {
      onChangeQuantity(1);
    }
  };

  // Construct dynamic WhatsApp direct consultation link
  const waNumber = '6285850011989';
  const labelTransaksi = transaksi === 'refill' ? 'Isi Ulang (Refill)' : 'Pembelian Unit Baru';
  const labelMedia = mediaLabels[media];
  const formattedTotal = `Rp ${totalCost.toLocaleString('id-ID')}`;
  
  let customMessage = `*🔥 KONSULTASI & ESTIMASI APAR - CS FIRE FIGHTER 🔥*\n`;
  customMessage += `--------------------------------------------------\n`;
  customMessage += `Saya tertarik dengan rincian estimasi otomatis berikut dari website:\n\n`;
  customMessage += `• *Nama Produk:* APAR ${labelMedia} ${size} Kg\n`;
  customMessage += `• *Keperluan:* ${labelTransaksi}\n`;
  customMessage += `• *Ukuran Tabung:* *${size} Kg*\n`;
  customMessage += `• *Jumlah/Kuantitas:* *${quantity} Tabung*\n`;
  customMessage += `• *Estimasi Total Biaya:* *${formattedTotal}*\n`;
  customMessage += `• *Metode Pembayaran Preferensi:* COD / Transfer Bank\n`;
  customMessage += `--------------------------------------------------\n\n`;
  customMessage += `Mohon dibantu konfirmasi ketersediaan stok, penjadwalan, atau syarat kerja sama resmi perusahaan. Terima kasih!`;

  const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(customMessage)}`;

  return (
    <section id="kalkulator" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-brand-950 text-white relative">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-brand-400 font-bold text-sm tracking-widest uppercase">Kalkulator Interaktif</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-outfit">
            Hitung Estimasi Biaya Anda
          </h2>
          <p className="text-slate-300">
            Dapatkan transparansi harga dalam hitungan detik untuk unit baru maupun isi ulang (refill) tabung pemadam api di CS FIRE FIGHTER.
          </p>
        </div>

        {/* Calculator Card Container */}
        <div className="max-w-4xl mx-auto bg-white text-slate-800 rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
          
          {/* LEFT PANEL: CONFIGURATION INPUTS */}
          <div className="p-6 md:p-8 flex flex-col gap-6 bg-slate-50 border-r border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 font-outfit border-b border-slate-200 pb-3 flex items-center gap-2">
              <Sliders className="h-5 w-5 text-brand-600 shrink-0" /> 
              <span>Konfigurasi Pesanan</span>
            </h3>

            {/* Transaction Type Radio Selector */}
            <div className="flex flex-col gap-2">
              <span className="text-sm font-bold text-slate-700">Jenis Transaksi</span>
              <div className="grid grid-cols-2 gap-3">
                
                {/* Refill option */}
                <label 
                  className={`relative flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer hover:bg-slate-100 transition-all select-none group ${
                    transaksi === 'refill' ? 'border-brand-500 bg-brand-50/50' : 'border-slate-200'
                  }`}
                >
                  <input 
                    type="radio" 
                    name="transaksi" 
                    value="refill" 
                    checked={transaksi === 'refill'}
                    onChange={() => onChangeTransaksi('refill')}
                    className="sr-only" 
                  />
                  <div className="text-center flex flex-col items-center">
                    <span className={`text-[11px] font-bold mt-1 uppercase tracking-wider ${transaksi === 'refill' ? 'text-brand-600' : 'text-slate-600'}`}>
                      Isi Ulang (Refill)
                    </span>
                  </div>
                </label>

                {/* Purchase New unit option */}
                <label 
                  className={`relative flex items-center justify-center p-3 rounded-xl border-2 cursor-pointer hover:bg-slate-100 transition-all select-none group ${
                    transaksi === 'baru' ? 'border-brand-500 bg-brand-50/50' : 'border-slate-200'
                  }`}
                >
                  <input 
                    type="radio" 
                    name="transaksi" 
                    value="baru" 
                    checked={transaksi === 'baru'}
                    onChange={() => onChangeTransaksi('baru')}
                    className="sr-only" 
                  />
                  <div className="text-center flex flex-col items-center">
                    <span className={`text-[11px] font-bold mt-1 uppercase tracking-wider ${transaksi === 'baru' ? 'text-brand-600' : 'text-slate-600'}`}>
                      Beli Unit Baru
                    </span>
                  </div>
                </label>
              </div>
            </div>

            {/* Media Type Select */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="mediaTypeInput" className="text-sm font-bold text-slate-700">Pilih Media Pemadam</label>
              <select 
                id="mediaTypeInput" 
                value={media}
                onChange={(e) => onChangeMedia(e.target.value as MediaType)}
                className="bg-white border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-semibold focus:border-brand-500 focus:outline-none transition-all cursor-pointer"
              >
                <option value="powder">Dry Chemical Powder</option>
                <option value="co2">Carbon Dioxide (CO2)</option>
                <option value="foam">Foam AFFF (Busa)</option>
                <option value="gas">Clean Agent Gas Liquid</option>
              </select>
            </div>

            {/* Capacity Size Select */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="aparSizeInput" className="text-sm font-bold text-slate-700">Kapasitas / Ukuran Tabung</label>
              <select 
                id="aparSizeInput"
                value={size}
                onChange={(e) => onChangeSize(e.target.value)}
                className="bg-white border-2 border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-semibold focus:border-brand-500 focus:outline-none transition-all cursor-pointer"
              >
                {currentSizes.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            {/* Quantity Selector */}
            <div className="flex flex-col gap-1.5">
              <span className="text-sm font-bold text-slate-700">Jumlah Tabung</span>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => handleAdjustQuantity(-1)}
                  className="w-12 h-12 rounded-xl border-2 border-slate-200 hover:bg-slate-200 hover:border-slate-300 flex items-center justify-center text-xl font-bold transition-all select-none cursor-pointer"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <input 
                  type="number" 
                  value={quantity} 
                  min="1"
                  onChange={handleInputChange}
                  className="w-full h-12 text-center text-xl font-extrabold text-slate-800 border-2 border-slate-200 rounded-xl focus:border-brand-500 focus:outline-none transition-all" 
                />
                <button 
                  onClick={() => handleAdjustQuantity(1)}
                  className="w-12 h-12 rounded-xl border-2 border-slate-200 hover:bg-slate-200 hover:border-slate-300 flex items-center justify-center text-xl font-bold transition-all select-none cursor-pointer"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: PRICE RECEIPT SUMMARY & CTA */}
          <div className="p-6 md:p-8 flex flex-col justify-between gap-8 bg-slate-900 text-white">
            <div>
              <h3 className="text-xl font-bold font-outfit border-b border-slate-800 pb-3 flex items-center gap-2">
                <Receipt className="h-5 w-5 text-brand-500" /> 
                <span>Ringkasan Estimasi</span>
              </h3>

              <div className="space-y-4 mt-6">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Pekerjaan</span>
                  <span className="font-bold text-slate-150 uppercase tracking-wider">
                    {transaksi === 'refill' ? 'Isi Ulang (Refill)' : 'Beli Baru'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Media</span>
                  <span className="font-bold text-slate-150">{mediaLabels[media]}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Kapasitas</span>
                  <span className="font-bold text-slate-150">{size} Kg</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Harga Satuan</span>
                  <span className="font-bold text-slate-150">Rp {unitCost.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">Jumlah Unit</span>
                  <span className="font-bold text-slate-150">{quantity} Unit</span>
                </div>

                <div className="border-t border-dashed border-slate-850 pt-4 flex flex-col gap-1.5">
                  <span className="text-xs text-brand-400 font-bold uppercase tracking-wider">Total Estimasi Biaya</span>
                  <div className="text-3xl md:text-3xl font-extrabold font-outfit text-white tracking-tight">
                    Rp {totalCost.toLocaleString('id-ID')}
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col gap-3">
              <button 
                onClick={onAddFromCalculator}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 px-6 rounded-2xl transition-all shadow-lg shadow-brand-600/20 hover:scale-[1.01] text-center flex items-center justify-center gap-2 cursor-pointer font-outfit"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Masukkan ke Keranjang</span>
              </button>
              <a 
                href={waHref}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 py-2.5 rounded-xl text-xs transition-all text-center font-semibold"
              >
                <MessageSquareCode className="h-4 w-4 text-emerald-500" />
                <span>Konsultasi WA Langsung</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
