/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowLeft, Printer, ShoppingCart, ShieldCheck, Phone, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { priceDatabase } from '../data';
import { MediaType, TransactionType } from '../types';

// Let's create compatible inline icon elements or use standard lucide-react icons for maximum safety.
import { MessageSquare } from 'lucide-react';

interface DaftarHargaProps {
  onBack: () => void;
  onAddToCart: (
    transaksi: TransactionType,
    media: MediaType,
    ukuran: string,
    namaDisplay: string,
    hargaDefault: number
  ) => void;
}

export default function DaftarHarga({ onBack, onAddToCart }: DaftarHargaProps) {
  const [activeTab, setActiveTab] = useState<'semua' | 'co2' | 'powder' | 'foam' | 'gas'>('semua');

  // Interactive print function
  const handlePrint = () => {
    window.print();
  };

  const handleQuickAdd = (transaksi: TransactionType, media: MediaType, size: string, labelMedia: string) => {
    const price = priceDatabase[transaksi][media][size] || 0;
    const name = `APAR ${labelMedia} ${size} Kg`;
    onAddToCart(transaksi, media, size, name, price);
  };

  // Format currency helpers
  const formatRupiah = (num: number) => {
    return 'Rp. ' + num.toLocaleString('id-ID');
  };

  // CO2 Data Items Sourced directly from image
  const co2Data = [
    { jenis: 'CD', berat: '2 KG', baru: 495000, refill: 97000, sizeKey: '2' },
    { jenis: 'CD', berat: '3 KG', baru: 595500, refill: 123000, sizeKey: '3' },
    { jenis: 'CD', berat: '5 KG', baru: 806500, refill: 155000, sizeKey: '5' },
    { jenis: 'CD', berat: '6,8 KG', baru: 947500, refill: 197000, sizeKey: '6.8' },
    { jenis: 'CD', berat: '9 KG', baru: 1906000, refill: 369000, sizeKey: '9' },
  ];

  // Dry Chemical Powder Data Items Sourced directly from image
  const powderData = [
    { jenis: 'DCP', berat: '1 KG', baru: 200000, refill: 50000, sizeKey: '1' },
    { jenis: 'DCP', berat: '2 KG', baru: 250000, refill: 87000, sizeKey: '2' },
    { jenis: 'DCP', berat: '3 KG', baru: 295000, refill: 100000, sizeKey: '3' },
    { jenis: 'DCP', berat: '4 KG', baru: 330000, refill: 119000, sizeKey: '4' },
    { jenis: 'DCP', berat: '5 KG', baru: 385000, refill: 155000, sizeKey: '5' },
    { jenis: 'DCP', berat: '6 KG', baru: 440000, refill: 180000, sizeKey: '6' },
    { jenis: 'DCP', berat: '9 KG', baru: 550000, refill: 225000, sizeKey: '9' },
    { jenis: 'DCP', berat: '25 KG', baru: 2300000, refill: 750000, sizeKey: '25' },
    { jenis: 'DCP', berat: '50 KG', baru: 3200000, refill: 1400000, sizeKey: '50' },
  ];

  // Foam Data Items Sourced directly from image
  const foamData = [
    { jenis: 'FM', berat: '1 KG', baru: 275000, refill: 50000, sizeKey: '1' },
    { jenis: 'FM', berat: '2 KG', baru: 325000, refill: 85000, sizeKey: '2' },
    { jenis: 'FM', berat: '3 KG', baru: 375000, refill: 90000, sizeKey: '3' },
    { jenis: 'FM', berat: '4 KG', baru: 425000, refill: 110000, sizeKey: '4' },
    { jenis: 'FM', berat: '5 KG', baru: 475000, refill: 145000, sizeKey: '5' },
    { jenis: 'FM', berat: '6 KG', baru: 525000, refill: 170000, sizeKey: '6' },
    { jenis: 'FM', berat: '9 KG', baru: 645000, refill: 215000, sizeKey: '9' },
    { jenis: 'FM', berat: '25 KG', baru: 2750000, refill: 740000, sizeKey: '25' },
    { jenis: 'FM', berat: '50 KG', baru: 3550000, refill: 1390000, sizeKey: '50' },
  ];

  // Gas Liquid Data Items Sourced directly from image
  const gasData = [
    { jenis: 'FM', berat: '1 KG', baru: 415000, refill: 250000, sizeKey: '1' },
    { jenis: 'FM', berat: '2 KG', baru: 640000, refill: 450000, sizeKey: '2' },
    { jenis: 'FM', berat: '3 KG', baru: 993000, refill: 675000, sizeKey: '3' },
    { jenis: 'FM', berat: '4 KG', baru: 1365000, refill: 900000, sizeKey: '4' },
    { jenis: 'FM', berat: '5 KG', baru: 1598000, refill: 1125000, sizeKey: '5' },
    { jenis: 'FM', berat: '6 KG', baru: 1865000, refill: 1350000, sizeKey: '6' },
    { jenis: 'FM', berat: '9 KG', baru: 2358000, refill: 2025000, sizeKey: '9' },
    { jenis: 'FM', berat: '25 KG', baru: 7560000, refill: 5625000, sizeKey: '25' },
    { jenis: 'FM', berat: '50 KG', baru: 13250000, refill: 11250000, sizeKey: '50' },
  ];

  return (
    <div id="daftar_harga_section" className="bg-slate-50 min-h-screen py-8 md:py-12 px-4 sm:px-6 lg:px-8">
      
      {/* HEADER SECTION CONTROLS - Hidden when printing */}
      <div className="container mx-auto max-w-5xl mb-8 print:hidden flex flex-col sm:flex-row gap-4 items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 hover:border-slate-350 rounded-xl text-slate-700 hover:text-slate-900 shadow-sm transition hover:scale-[1.02] font-semibold cursor-pointer text-sm"
        >
          <ArrowLeft className="h-4 w-4 text-brand-650" />
          Kembali ke Beranda
        </button>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handlePrint}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl shadow-md hover:shadow-lg transition font-semibold cursor-pointer text-sm"
          >
            <Printer className="h-4 w-4" />
            Cetak / Simpan PDF
          </button>
          
          <a
            href="https://wa.me/6285850011989?text=Halo%2520CV.%2520CS%2520FIRE%2520FIGHTER,%2520saya%2520ingin%2520menanyakan%2520penawaran%2520khusus%2520untuk%2520daftar%2520harga."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-md hover:shadow-lg transition font-semibold text-sm"
          >
            <Phone className="h-4 w-4" />
            Nego di WA
          </a>
        </div>
      </div>

      {/* FILTER BUTTONS ROW - Hidden when printing */}
      <div className="container mx-auto max-w-5xl mb-6 print:hidden">
        <div className="bg-white p-1.5 rounded-xl border border-slate-200 shadow-sm flex flex-wrap gap-1">
          <button
            onClick={() => setActiveTab('semua')}
            className={`flex-1 min-w-[80px] py-2 px-3 text-xs md:text-sm font-bold rounded-lg transition-all ${
              activeTab === 'semua'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Semua Media
          </button>
          <button
            onClick={() => setActiveTab('co2')}
            className={`flex-1 min-w-[80px] py-2 px-3 text-xs md:text-sm font-bold rounded-lg transition-all ${
              activeTab === 'co2'
                ? 'bg-sky-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            CO2 (Karbon Dioksida)
          </button>
          <button
            onClick={() => setActiveTab('powder')}
            className={`flex-1 min-w-[85px] py-2 px-3 text-xs md:text-sm font-bold rounded-lg transition-all ${
              activeTab === 'powder'
                ? 'bg-red-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Dry Chemical Powder
          </button>
          <button
            onClick={() => setActiveTab('foam')}
            className={`flex-1 min-w-[80px] py-2 px-3 text-xs md:text-sm font-bold rounded-lg transition-all ${
              activeTab === 'foam'
                ? 'bg-green-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Foam AFFF
          </button>
          <button
            onClick={() => setActiveTab('gas')}
            className={`flex-1 min-w-[80px] py-2 px-3 text-xs md:text-sm font-bold rounded-lg transition-all ${
              activeTab === 'gas'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            Clean Agent Gas
          </button>
        </div>
      </div>

      {/* DETAILED PRICELIST CONTAINER DESIGN */}
      <div className="container mx-auto max-w-5xl bg-white border border-slate-200 rounded-2xl shadow-xl p-6 md:p-10 relative overflow-hidden print:p-0 print:border-none print:shadow-none">
        
        {/* TOP BRAND PORTRAIT - MATCHING THE PHOTO EXTREMELY CLOSELY */}
        <div className="flex flex-col md:flex-row items-center border-b-[3px] border-red-600 pb-5 mb-8 gap-5 md:gap-8 print:flex-row">
          {/* Circular Logo exactly matching requested photo style */}
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-slate-350 p-1 bg-white flex items-center justify-center shrink-0 shadow-sm">
            <img 
              src="/logo.png" 
              alt="CV. CS FIRE FIGHTER" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="text-center md:text-left flex-grow">
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-950 font-outfit uppercase tracking-tight leading-none">
              CV. <span className="text-brand-600">CS</span> FIRE FIGHTER
            </h1>
            <p className="text-sm md:text-md text-slate-800 font-bold mt-2 font-sans">
              Jl. R.A Kartini GgXVI, No 108 Gresik. TLP: 
              <a href="tel:085850011989" className="text-brand-655 hover:underline ml-1">085850011989</a>
            </p>
            <div className="text-xs md:text-sm text-slate-600 font-medium mt-1 select-all flex flex-wrap justify-center md:justify-start gap-x-4">
              <span>Email: <strong className="text-slate-800">dharmawanwisnu113@gmail.com</strong></span>
              <span className="hidden md:inline text-slate-300">|</span>
              <span>Website: <strong className="text-brand-600">www.csfirefighter.com</strong></span>
            </div>
          </div>
        </div>

        {/* PRICE TABLE CONTAINER */}
        <div className="overflow-x-auto rounded-xl border border-slate-250 shadow-sm">
          <table className="w-full text-left border-collapse table-fixed min-w-[650px]">
            {/* TABLE HEADER (YELLOW BACKGROUND - AS SEEN IN THE ATTACHED IMAGE) */}
            <thead>
              <tr className="bg-[#FFFF00] text-slate-950 text-xs md:text-sm font-black tracking-wide uppercase border-b-2 border-slate-950 text-center select-none">
                <th className="py-3 px-4 border-r border-slate-950 w-[15%]">Jenis</th>
                <th className="py-3 px-4 border-r border-slate-950 w-[15%]">Berat Isi</th>
                <th className="py-3 px-4 border-r border-slate-950 w-[35%]">Harga Tabung Baru</th>
                <th className="py-3 px-4 w-[35%]">Harga Isi Ulang</th>
              </tr>
            </thead>
            
            <tbody>
              {/* === SECTION 1: CO2 === */}
              {(activeTab === 'semua' || activeTab === 'co2') && (
                <>
                  {/* Category Header Row - Blue background */}
                  <tr className="bg-[#00A3E0] text-white font-extrabold text-xs md:text-sm uppercase text-center border-b border-t border-slate-950">
                    <td colSpan={4} className="py-2.5 tracking-widest font-outfit">CO2 (Carbon Dioxide)</td>
                  </tr>
                  {co2Data.map((row, idx) => (
                    <tr 
                      key={`co2_${idx}`} 
                      className={`text-slate-900 border-b border-slate-200 font-medium hover:bg-slate-50 transition text-center text-xs md:text-sm ${
                        idx < co2Data.length - 1 ? '' : 'border-b-2 border-slate-950'
                      }`}
                    >
                      {/* Only display "CD" tag in first row cell with rowspan for nice grouping on large screens */}
                      <td className="py-3 px-4 border-r border-slate-200 font-bold bg-slate-50/50 print:bg-transparent">
                        {row.jenis}
                      </td>
                      <td className="py-3 px-4 border-r border-slate-200 font-black font-mono bg-amber-50/10 text-slate-800">
                        {row.berat}
                      </td>
                      <td className="py-3 px-4 border-r border-slate-200 align-middle">
                        <div className="flex items-center justify-between px-2">
                          <span className="font-bold text-slate-900 font-mono">{formatRupiah(row.baru)}</span>
                          <button 
                            onClick={() => handleQuickAdd('baru', 'co2', row.sizeKey, 'CO2')}
                            className="bg-brand-50 hover:bg-brand-100 text-brand-600 rounded-lg p-1.5 opacity-100 sm:opacity-0 group-hover:opacity-100 transition print:hidden shadow-sm border border-brand-150"
                            title="Beli Baru - Tambah ke Keranjang"
                          >
                            <ShoppingCart className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                      <td className="py-3 px-4 align-middle">
                        <div className="flex items-center justify-between px-2">
                          <span className="font-bold text-emerald-700 font-mono">{formatRupiah(row.refill)}</span>
                          <button 
                            onClick={() => handleQuickAdd('refill', 'co2', row.sizeKey, 'CO2')}
                            className="bg-emerald-50 hover:bg-emerald-100 text-emerald-600 rounded-lg p-1.5 opacity-100 sm:opacity-0 group-hover:opacity-100 transition print:hidden shadow-sm border border-emerald-155"
                            title="Refill - Tambah ke Keranjang"
                          >
                            <ShoppingCart className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              )}

              {/* === SECTION 2: DRY CHEMICAL POWDER === */}
              {(activeTab === 'semua' || activeTab === 'powder') && (
                <>
                  {/* Category Header Row - Red background */}
                  <tr className="bg-[#EF4444] text-white font-extrabold text-xs md:text-sm uppercase text-center border-b border-t border-slate-950">
                    <td colSpan={4} className="py-2.5 tracking-widest font-outfit">DRY CHEMICAL POWDER</td>
                  </tr>
                  {powderData.map((row, idx) => (
                    <tr 
                      key={`pwd_${idx}`} 
                      className={`text-slate-900 border-b border-slate-200 font-medium hover:bg-slate-50 transition text-center text-xs md:text-sm ${
                        idx < powderData.length - 1 ? '' : 'border-b-2 border-slate-950'
                      }`}
                    >
                      <td className="py-3 px-4 border-r border-slate-200 font-bold bg-slate-50/50 print:bg-transparent">
                        {row.jenis}
                      </td>
                      <td className="py-3 px-4 border-r border-slate-200 font-black font-mono bg-amber-50/10 text-slate-800">
                        {row.berat}
                      </td>
                      <td className="py-3 px-4 border-r border-slate-200 align-middle">
                        <div className="flex items-center justify-between px-2">
                          <span className="font-bold text-slate-900 font-mono">{formatRupiah(row.baru)}</span>
                          <button 
                            onClick={() => handleQuickAdd('baru', 'powder', row.sizeKey, 'Powder')}
                            className="bg-brand-50 hover:bg-brand-100 text-brand-600 rounded-lg p-1.5 opacity-100 sm:opacity-0 group-hover:opacity-100 transition print:hidden shadow-sm border border-brand-150"
                            title="Beli Baru - Tambah ke Keranjang"
                          >
                            <ShoppingCart className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                      <td className="py-3 px-4 align-middle">
                        <div className="flex items-center justify-between px-2">
                          <span className="font-bold text-emerald-700 font-mono">{formatRupiah(row.refill)}</span>
                          <button 
                            onClick={() => handleQuickAdd('refill', 'powder', row.sizeKey, 'Powder')}
                            className="bg-emerald-50 hover:bg-emerald-100 text-emerald-600 rounded-lg p-1.5 opacity-100 sm:opacity-0 group-hover:opacity-100 transition print:hidden shadow-sm border border-emerald-155"
                            title="Refill - Tambah ke Keranjang"
                          >
                            <ShoppingCart className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              )}

              {/* === SECTION 3: FOAM === */}
              {(activeTab === 'semua' || activeTab === 'foam') && (
                <>
                  {/* Category Header Row - Yellow-Green background */}
                  <tr className="bg-[#8CC63F] sm:bg-[#4CAF50] text-white font-extrabold text-xs md:text-sm uppercase text-center border-b border-t border-slate-950">
                    <td colSpan={4} className="py-2.5 tracking-widest font-outfit">FOAM AFFF (BUSA)</td>
                  </tr>
                  {foamData.map((row, idx) => (
                    <tr 
                      key={`foam_${idx}`} 
                      className={`text-slate-900 border-b border-slate-200 font-medium hover:bg-slate-50 transition text-center text-xs md:text-sm ${
                        idx < foamData.length - 1 ? '' : 'border-b-2 border-slate-950'
                      }`}
                    >
                      <td className="py-3 px-4 border-r border-slate-200 font-bold bg-slate-50/50 print:bg-transparent">
                        {row.jenis}
                      </td>
                      <td className="py-3 px-4 border-r border-slate-200 font-black font-mono bg-amber-50/10 text-slate-800">
                        {row.berat}
                      </td>
                      <td className="py-3 px-4 border-r border-slate-200 align-middle">
                        <div className="flex items-center justify-between px-2">
                          <span className="font-bold text-slate-900 font-mono">{formatRupiah(row.baru)}</span>
                          <button 
                            onClick={() => handleQuickAdd('baru', 'foam', row.sizeKey, 'Foam')}
                            className="bg-brand-50 hover:bg-brand-100 text-brand-600 rounded-lg p-1.5 opacity-100 sm:opacity-0 group-hover:opacity-100 transition print:hidden shadow-sm border border-brand-150"
                            title="Beli Baru - Tambah ke Keranjang"
                          >
                            <ShoppingCart className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                      <td className="py-3 px-4 align-middle">
                        <div className="flex items-center justify-between px-2">
                          <span className="font-bold text-emerald-700 font-mono">{formatRupiah(row.refill)}</span>
                          <button 
                            onClick={() => handleQuickAdd('refill', 'foam', row.sizeKey, 'Foam')}
                            className="bg-emerald-50 hover:bg-emerald-100 text-emerald-600 rounded-lg p-1.5 opacity-100 sm:opacity-0 group-hover:opacity-100 transition print:hidden shadow-sm border border-emerald-155"
                            title="Refill - Tambah ke Keranjang"
                          >
                            <ShoppingCart className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              )}

              {/* === SECTION 4: GAS LIQUID === */}
              {(activeTab === 'semua' || activeTab === 'gas') && (
                <>
                  {/* Category Header Row - Strong Green background */}
                  <tr className="bg-[#00A651] text-white font-extrabold text-xs md:text-sm uppercase text-center border-b border-t border-slate-950">
                    <td colSpan={4} className="py-2.5 tracking-widest font-outfit">GAS LIQUID (CLEAN AGENT)</td>
                  </tr>
                  {gasData.map((row, idx) => (
                    <tr 
                      key={`gas_${idx}`} 
                      className={`text-slate-900 border-b border-slate-200 font-medium hover:bg-slate-50 transition text-center text-xs md:text-sm ${
                        idx < gasData.length - 1 ? '' : 'border-b'
                      }`}
                    >
                      <td className="py-3 px-4 border-r border-slate-200 font-bold bg-slate-50/50 print:bg-transparent">
                        {row.jenis}
                      </td>
                      <td className="py-3 px-4 border-r border-slate-200 font-black font-mono bg-amber-50/10 text-slate-800">
                        {row.berat}
                      </td>
                      <td className="py-3 px-4 border-r border-slate-200 align-middle">
                        <div className="flex items-center justify-between px-2">
                          <span className="font-bold text-slate-900 font-mono">{formatRupiah(row.baru)}</span>
                          <button 
                            onClick={() => handleQuickAdd('baru', 'gas', row.sizeKey, 'Clean Agent Gas')}
                            className="bg-brand-50 hover:bg-brand-100 text-brand-600 rounded-lg p-1.5 opacity-100 sm:opacity-0 group-hover:opacity-100 transition print:hidden shadow-sm border border-brand-150"
                            title="Beli Baru - Tambah ke Keranjang"
                          >
                            <ShoppingCart className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                      <td className="py-3 px-4 align-middle">
                        <div className="flex items-center justify-between px-2">
                          <span className="font-bold text-emerald-700 font-mono">{formatRupiah(row.refill)}</span>
                          <button 
                            onClick={() => handleQuickAdd('refill', 'gas', row.sizeKey, 'Clean Agent Gas')}
                            className="bg-emerald-50 hover:bg-emerald-100 text-emerald-600 rounded-lg p-1.5 opacity-100 sm:opacity-0 group-hover:opacity-100 transition print:hidden shadow-sm border border-emerald-155"
                            title="Refill - Tambah ke Keranjang"
                          >
                            <ShoppingCart className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>

        {/* PRICELIST NOTES FOOTER COUPLING */}
        <div className="mt-8 pt-6 border-t border-slate-200 grid md:grid-cols-2 gap-5 text-xs text-slate-500">
          <div>
            <span className="font-bold text-slate-800 block text-sm mb-1.5 uppercase font-outfit">Sertifikasi & Layanan:</span>
            <ul className="list-disc list-inside space-y-1 font-medium">
              <li>Tabung Baru bersertifikat lulus uji laboratorium</li>
              <li>Free Bracket & Sabuk Pengaman untuk ukuran kecil</li>
              <li>Garansi tekanan media pemadam selama 2 Tahun</li>
              <li>Layanan jemput-antar tabung untuk Isi Ulang (Gresik, Surabaya & Sidoarjo)</li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-slate-800 block text-sm mb-1.5 uppercase font-outfit">Catatan Pembelian:</span>
            <p className="leading-relaxed font-medium">
              Harga di atas adalah daftar harga resmi CV. CS FIRE FIGHTER per Mei 2026 dan dapat berubah sewaktu-waktu sesuai ketentuan perpajakan atau fluktuasi bahan baku. Dapatkan diskon khusus/diskon grosir untuk pengadaan di atas 10 Unit dengan langsung menekan tombol <strong className="text-brand-600">Nego di WA</strong> atau datang langsung ke workshop kami.
            </p>
          </div>
        </div>

        {/* PRINT ONLY DIGITAL SIGNATURE */}
        <div className="hidden print:block mt-12 text-right text-xs text-slate-705">
          <p className="font-bold">CV. CS FIRE FIGHTER Gresik</p>
          <div className="mt-12 inline-block border-t border-slate-400 pt-1 w-48 text-center text-slate-900">
            Fathur Rahman (Workshop Mgr)
          </div>
        </div>

      </div>
    </div>
  );
}
