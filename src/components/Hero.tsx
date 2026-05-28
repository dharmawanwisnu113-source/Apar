/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Flame, ShoppingCart, Calculator, CheckCircle } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (id: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  return (
    <>
      {/* HERO SECTION */}
      <section id="beranda" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-brand-950 text-white py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Decorative background grid and ambient radial light */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-brand-600 rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 flex flex-col gap-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-brand-500/20 text-brand-400 font-bold text-xs md:text-sm tracking-wider uppercase py-2 px-4 rounded-full self-center md:self-start border border-brand-500/30">
              <ShieldCheck className="h-4.5 w-4.5 text-brand-500" /> CS FIRE FIGHTER - Ahli Keselamatan Anda
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight leading-none font-outfit">
              Sedia APAR Sebelum <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-orange-400">Api Membesar!</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl">
              Jangan biarkan aset berharga Anda lenyap dalam hitungan menit. Kami melayani pengadaan unit APAR baru berkualitas tinggi serta isi ulang (refill) bersertifikat dan bergaransi untuk perumahan, perkantoran, ruko, restoran, dan industri.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-2">
              <button 
                onClick={() => onScrollToSection('produk')}
                className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-brand-600/30 hover:shadow-brand-600/10 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingCart className="h-5 w-5" /> 
                <span>Belanja Produk APAR</span>
              </button>
              <button 
                onClick={() => onScrollToSection('kalkulator')}
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold px-8 py-3.5 rounded-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calculator className="h-5 w-5 text-slate-400" />
                <span>Kalkulator Biaya</span>
              </button>
            </div>
          </div>

          {/* Visual card badge showcase */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square md:max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-orange-500 rounded-3xl rotate-6 opacity-20 animate-pulse"></div>
              <div className="relative bg-slate-800 border border-slate-705/50 p-6 md:p-8 rounded-3xl shadow-2xl flex flex-col justify-between h-full transform hover:rotate-1 transition-transform overflow-hidden">
                <div className="flex items-center justify-between relative z-10">
                  <span className="bg-brand-600 text-white font-bold text-xs tracking-wide uppercase px-3 py-1 rounded-full">
                    K3 Certified
                  </span>
                  <CheckCircle className="text-emerald-500 h-6 w-6" />
                </div>
                
                {/* Product image representation with referral policy */}
                <div className="my-4 flex justify-center items-center h-48 rounded-2xl overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1618519764620-7403abdbfee9?auto=format&fit=crop&w=600&q=80" 
                    alt="Tabung Pemadam Api CS Fire Fighter" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                </div>

                <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-700/50 relative z-10">
                  <div className="text-xs text-slate-400 font-bold tracking-wider uppercase mb-1">Status Keamanan</div>
                  <div className="text-md font-bold text-slate-100 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block animate-ping"></span>
                    Rumah & Kantor Siaga APAR bersama CS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS & BENEFIT SEGMENT */}
      <section className="bg-white py-10 border-b border-slate-100 shadow-sm relative z-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border-r last:border-0 border-slate-100">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-600 font-outfit mb-1">100%</div>
              <div className="text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-wider">Garansi Keaslian</div>
            </div>
            <div className="p-4 border-r last:border-0 border-slate-100">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-600 font-outfit mb-1">1 Jam</div>
              <div className="text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-wider">Selesai Refill *</div>
            </div>
            <div className="p-4 border-r last:border-0 border-slate-100">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-600 font-outfit mb-1">FREE</div>
              <div className="text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-wider">Antar & Jemput</div>
            </div>
            <div className="p-4 border-r last:border-0 border-slate-100">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-600 font-outfit mb-1">5+ Tahun</div>
              <div className="text-xs md:text-sm text-slate-500 font-semibold uppercase tracking-wider">Masa Kadaluarsa</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
