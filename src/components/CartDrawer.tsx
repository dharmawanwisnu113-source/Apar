/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShoppingBag, X, Trash2, ShieldCheck, ShoppingCart, CreditCard, Copy, Check } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  cart: CartItem[];
  onClose: () => void;
  onUpdateQuantity: (index: number, change: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
  onScrollToCatalog: () => void;
}

export default function CartDrawer({
  isOpen,
  cart,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onScrollToCatalog
}: CartDrawerProps) {
  const [paymentMethod, setPaymentMethod] = useState<string>('COD (Bayar di Tempat saat Antar/Jemput)');
  const [copied, setCopied] = useState(false);

  const handleCopyAccount = () => {
    navigator.clipboard.writeText('0888777132')
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
  };
  
  if (!isOpen) return null;

  // Calculate Subtotal for the entire cart selection
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalCartUnits = cart.reduce((total, item) => total + item.quantity, 0);

  // checkout to WhatsApp
  const handleCheckout = () => {
    if (cart.length === 0) return;

    const waNumber = '6285850011989'; // Business Admin WhatsApp
    
    // Generate beautiful receipt-like WhatsApp layout
    let messageText = `*🔥 SURAT PESANAN - CS FIRE FIGHTER 🔥*\n`;
    messageText += `--------------------------------------------------\n`;
    messageText += `*Detail Item Pesanan:*\n\n`;

    cart.forEach((item, index) => {
      const totalItemPrice = item.price * item.quantity;
      messageText += `${index + 1}. *${item.name}*\n` +
                     `   • *Keperluan:* _${item.labelTransaksi}_\n` +
                     `   • *Media Bahan:* _${item.labelMedia}_\n` +
                     `   • *Ukuran Tabung:* *${item.size} Kg*\n` +
                     `   • *Jumlah/Qty:* *${item.quantity} Unit*\n` +
                     `   • *Harga Satuan:* Rp ${item.price.toLocaleString('id-ID')}\n` +
                     `   • *Subtotal:* *Rp ${totalItemPrice.toLocaleString('id-ID')}*\n\n`;
    });

    messageText += `--------------------------------------------------\n`;
    messageText += `*RINGKASAN TRANSAKSI:*\n`;
    messageText += `• *Total Unit:* ${totalCartUnits} Tabung Alat Pemadam\n`;
    messageText += `• *Layanan Pengiriman:* GRATIS (Gresik & Sekitarnya)\n`;
    messageText += `• *Metode Pembayaran:* *${paymentMethod}*\n`;
    messageText += `• 💰 *TOTAL PEMBAYARAN:* *Rp ${cartSubtotal.toLocaleString('id-ID')}*\n`;
    messageText += `--------------------------------------------------\n\n`;
    messageText += `Mohon segera dikonfirmasi pesanan saya di atas untuk pengiriman barang (atau penjadwalan pengambilan tabung jika jasa isi ulang). Terima kasih!`;

    window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(messageText)}`, '_blank');
  };

  return (
    <>
      {/* OVERLAY BG FOR INTEGRAL ACCESSIBILITIES & EXIT CONTROL */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 transition-opacity duration-300"
      ></div>

      {/* CART DRAWER SLIDE PANEL */}
      <div 
        className="fixed top-0 right-0 h-full w-full sm:max-w-md bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out flex flex-col animate-slideInRight"
      >
        {/* Header Drawer info */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="bg-brand-600 text-white p-2.5 rounded-lg shadow-md shadow-brand-600/10 shrink-0">
              <ShoppingCart className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 font-outfit text-md uppercase tracking-wide">
                Keranjang Belanja
              </h3>
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider -mt-0.5">
                <span className="text-brand-600 font-extrabold">{totalCartUnits}</span> Item Terpilih
              </p>
            </div>
          </div>
          <button 
            id="cart_close_btn"
            onClick={onClose} 
            className="w-10 h-10 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-650 transition cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Dynamic Items list */}
        <div className="p-5 flex-grow overflow-y-auto space-y-4">
          {cart.length === 0 ? (
            
            /* EMPTY CART STATE VIEW */
            <div className="flex flex-col items-center justify-center h-full text-center gap-4 py-12">
              <div className="bg-slate-100 text-slate-450 w-20 h-20 rounded-full flex items-center justify-center text-3xl shrink-0">
                <ShoppingBag className="h-9 w-9 text-slate-400" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-slate-800 font-outfit text-base">
                  Keranjang Masih Kosong
                </h4>
                <p className="text-xs text-slate-550 px-6 leading-relaxed">
                  Pilih produk APAR terbaik dari katalog kami atau gunakan kalkulator estimasi biaya untuk menambahkan pesanan Anda.
                </p>
              </div>
              <button 
                onClick={() => { onClose(); onScrollToCatalog(); }}
                className="bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold py-2.5 px-5 rounded-xl transition cursor-pointer font-outfit"
              >
                Lihat Produk APAR
              </button>
            </div>
          ) : (
            
            /* CART POPULATED ITEM RENDERING */
            cart.map((item, index) => {
              const itemTotalCost = item.price * item.quantity;
              return (
                <div 
                  key={index} 
                  className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex gap-3 relative group animate-fadeIn"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div className="flex-grow flex flex-col gap-1">
                    <span className="text-[9px] bg-slate-200 text-slate-700 font-bold px-1.5 py-0.5 rounded w-fit uppercase tracking-wider">
                      {item.labelTransaksi}
                    </span>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm mt-0.5 leading-snug">
                      {item.name}
                    </h4>
                    <p className="text-xs font-semibold text-brand-600 mt-0.5">
                      Rp {item.price.toLocaleString('id-ID')} <span className="text-slate-400 font-normal">/ unit</span>
                    </p>
                    
                    {/* Quantity selectors */}
                    <div className="flex items-center gap-2 mt-2">
                      <button 
                        onClick={() => onUpdateQuantity(index, -1)}
                        className="w-6 h-6 bg-white border border-slate-300 hover:bg-slate-100 rounded flex items-center justify-center text-xs font-bold transition select-none cursor-pointer"
                      >
                        -
                      </button>
                      <span className="text-xs font-extrabold text-slate-800 w-6 text-center">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => onUpdateQuantity(index, 1)}
                        className="w-6 h-6 bg-white border border-slate-300 hover:bg-slate-100 rounded flex items-center justify-center text-xs font-bold transition select-none cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Pricing metrics and item trash bin deletions */}
                  <div className="flex flex-col justify-between items-end shrink-0">
                    <button 
                        onClick={() => onRemoveItem(index)}
                        className="text-slate-400 hover:text-brand-600 text-sm transition p-1 cursor-pointer" 
                        title="Hapus Item"
                    >
                      <Trash2 className="h-4.5 w-4.5" />
                    </button>
                    <span className="text-xs font-black text-slate-900 mt-2 font-mono">
                      Rp {itemTotalCost.toLocaleString('id-ID')}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* BOTTOM METRICS RINGKASAN & WHATSAPP CHECKOUT */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-slate-100 bg-slate-50 flex flex-col gap-4">
            
            {/* Pilihan Metode Pembayaran */}
            <div className="flex flex-col gap-1.5 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
              <label htmlFor="drawerPaymentMethod" className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5 select-none">
                <CreditCard className="h-4 w-4 text-brand-600 shrink-0" />
                <span>Metode Pembayaran</span>
              </label>
              <select
                id="drawerPaymentMethod"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-2 text-xs text-slate-800 font-semibold focus:border-brand-500 focus:outline-none transition cursor-pointer"
              >
                <option value="COD (Bayar di Tempat saat Antar/Jemput)">COD (Bayar di Tempat saat Antar/Jemput)</option>
                <option value="Transfer Bank BCA (No. Rek: 0888777132)">Transfer Bank BCA (No. Rek: 0888777132)</option>
                <option value="Bayar Tunai / Cash Langsung di Kantor">Bayar Tunai / Cash Langsung di Kantor</option>
              </select>

              {paymentMethod.includes('Transfer Bank BCA') && (
                <div className="mt-2.5 bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-xs text-slate-900 flex flex-col gap-2.5 animate-fadeIn">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <span className="bg-blue-600 text-white font-extrabold px-2 py-0.5 rounded text-[10px] uppercase font-mono tracking-wide">BCA</span>
                      <span className="font-bold text-slate-800 text-xs">Transfer Bank BCA</span>
                    </div>
                  </div>
                  
                  <div className="bg-white p-2.5 rounded-lg border border-slate-150 flex items-center justify-between shadow-xs">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">No. Rekening</span>
                      <span className="font-mono text-[13px] font-black text-slate-900 tracking-wide">0888777132</span>
                    </div>
                    <button
                      onClick={handleCopyAccount}
                      className={`flex items-center gap-1 px-2.5 py-1.5 rounded-md text-[11px] font-bold transition duration-200 select-none cursor-pointer ${
                        copied 
                          ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 active:scale-95'
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check className="h-3 w-3 shrink-0" />
                          <span>Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3 shrink-0" />
                          <span>Salin No. Rek</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="text-slate-600 leading-relaxed text-xs">
                    <div className="flex justify-between">
                      <span className="font-medium text-slate-500">Atas Nama:</span>
                      <span className="font-bold text-slate-800">CV. CS FIRE FIGHTER</span>
                    </div>
                  </div>

                  <div className="mt-1 bg-amber-50/70 border border-amber-200 p-2.5 rounded-lg text-amber-800 text-[11px] font-medium leading-relaxed flex gap-2">
                    <div className="shrink-0 text-amber-500 font-bold">⚠️</div>
                    <div>
                      <p className="font-bold text-amber-900 mb-0.5">Penting (Sertakan Bukti Transfer):</p>
                      Mohon lampirkan atau kirimkan <strong className="text-amber-950 font-extrabold">bukti transfer</strong> saat berkonsultasi/konfirmasi pesanan via WhatsApp agar transaksi Anda dapat segera diproses.
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-2 mt-1">
              <div className="flex justify-between text-xs text-slate-500 font-semibold uppercase tracking-wider">
                <span>Subtotal Produk</span>
                <span className="font-bold font-mono">Rp {cartSubtotal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between text-xs text-slate-500 font-semibold uppercase tracking-wider">
                <span>Layanan Pengiriman</span>
                <span className="text-emerald-600 font-bold uppercase shrink-0">
                  GRATIS (Gresik)
                </span>
              </div>
              <div className="border-t border-dashed border-slate-200 pt-3 flex justify-between items-center">
                <span className="font-bold text-slate-900 font-outfit text-sm">Total Pembayaran</span>
                <span className="text-xl font-extrabold text-brand-600 font-outfit">
                  Rp {cartSubtotal.toLocaleString('id-ID')}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button 
                id="checkout_cart_wa_btn"
                onClick={handleCheckout}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2.5 cursor-pointer font-outfit"
              >
                <span>Kirim Pesanan Sekarang (WhatsApp)</span>
              </button>
              <button 
                onClick={onClearCart}
                className="text-xs text-slate-450 hover:text-brand-600 font-semibold py-1.5 transition cursor-pointer"
              >
                Kosongkan Keranjang Belanja
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
