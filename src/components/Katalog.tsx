/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShoppingCart, Check, Sliders } from 'lucide-react';
import { productCatalog, categoryCards, ProductCatalogItem } from '../data';
import { MediaType, TransactionType } from '../types';

interface KatalogProps {
  onAddToCart: (
    transaksi: TransactionType,
    media: MediaType,
    ukuran: string,
    namaDisplay: string,
    hargaDefault: number
  ) => void;
  onSelectForCalculator: (transaksi: TransactionType, media: MediaType, ukuran: string) => void;
  onSelectCategory: (mediaType: MediaType) => void;
}

export default function Katalog({ onAddToCart, onSelectForCalculator, onSelectCategory }: KatalogProps) {
  
  const handleAddToCartClick = (item: ProductCatalogItem) => {
    onAddToCart('baru', item.categoryCode, item.size, item.name, item.price);
  };

  const handleCustomCalculateClick = (item: ProductCatalogItem) => {
    onSelectForCalculator('baru', item.categoryCode, item.size);
  };

  return (
    <section id="produk" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-brand-600 font-bold text-sm tracking-widest uppercase">Katalog Produk Unggulan</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-outfit">
            Contoh Produk APAR CS FIRE FIGHTER
          </h2>
          <p className="text-slate-600">
            Berikut adalah daftar tipe tabung APAR terlaris. Tambahkan langsung ke keranjang belanja Anda dengan menekan tombol belanja di bawah ini.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {productCatalog.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-slate-200 rounded-2xl p-4 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col gap-4 group"
            >
              {/* Product Badge & Image */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100">
                <img 
                  src={item.imgUrl} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-2 left-2 bg-brand-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase z-10">
                  {item.badge}
                </span>
              </div>

              {/* Title & Price */}
              <div>
                <span className="text-xs text-slate-400 font-semibold tracking-wider uppercase block">
                  {item.subTypeLabel}
                </span>
                <h3 className="text-base font-bold text-slate-900 font-outfit mt-0.5">
                  {item.name}
                </h3>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="text-brand-600 font-extrabold text-base">
                    Rp {item.price.toLocaleString('id-ID')}
                  </span>
                  <span className="text-[10px] text-slate-400 line-through">
                    Rp {item.originalPrice.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              {/* Benefits */}
              <div className="text-xs text-slate-500 space-y-1.5">
                {item.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Card CTA Actions */}
              <div className="grid grid-cols-2 gap-2 mt-auto">
                <button 
                  onClick={() => handleAddToCartClick(item)}
                  className="bg-brand-600 hover:bg-brand-700 text-white text-center text-[11px] font-bold py-2 px-2.5 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <ShoppingCart className="h-3.5 w-3.5" />
                  <span>+Keranjang</span>
                </button>
                <button 
                  onClick={() => handleCustomCalculateClick(item)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-center text-[11px] font-bold py-2 px-2 rounded-xl transition-all flex items-center justify-center gap-1 cursor-pointer"
                >
                  <Sliders className="h-3 w-3 text-slate-500" />
                  <span>Hitung Custom</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Media Categories Feature Sections */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-slate-100">
          {categoryCards.map((cat) => (
            <div 
              key={cat.id} 
              className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden flex flex-col h-full group"
            >
              <div className="relative overflow-hidden aspect-[16/9] bg-slate-200">
                <img 
                  src={cat.imgUrl} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow gap-4">
                <div className="flex items-center justify-between">
                  <span className="bg-brand-100 text-brand-850 text-xs font-bold px-2.5 py-1 rounded">
                    {cat.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {cat.classes}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 font-outfit">
                  {cat.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {cat.desc}
                </p>
                <button 
                  onClick={() => onSelectCategory(cat.code)}
                  className="mt-auto bg-white border border-slate-200 text-slate-700 hover:border-brand-500 hover:text-brand-600 font-semibold py-2 px-4 rounded-xl transition-all text-sm w-full cursor-pointer"
                >
                  Lihat Pilihan Ukuran & Estimasi
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
