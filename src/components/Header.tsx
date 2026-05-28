/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, Flame, ShoppingCart, Menu, X, Phone } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  cart: CartItem[];
  onOpenCart: () => void;
  onScrollToSection: (id: string) => void;
}

export default function Header({ cart, onOpenCart, onScrollToSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Calculate total items count in the cart
  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onScrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        
        {/* Logo Brand */}
        <a href="#beranda" onClick={(e) => handleNavClick('beranda', e)} className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center bg-slate-50 border border-slate-100 p-1 rounded-xl shadow-sm group-hover:scale-105 transition-all w-11 h-11 shrink-0 overflow-hidden">
            <img 
              src="/logo.png" 
              alt="CV. CS FIRE FIGHTER" 
              className="w-full h-full object-contain" 
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight block font-outfit uppercase leading-none">
              CS <span className="text-brand-600">Fire Fighter</span>
            </span>
            <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase block mt-1 leading-none">
              Safety & Fire Protection
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-slate-600 text-sm">
          <a href="#beranda" onClick={(e) => handleNavClick('beranda', e)} className="hover:text-brand-600 transition-colors">Beranda</a>
          <a href="#layanan" onClick={(e) => handleNavClick('layanan', e)} className="hover:text-brand-600 transition-colors">Layanan</a>
          <a href="#produk" onClick={(e) => handleNavClick('produk', e)} className="hover:text-brand-600 transition-colors">Katalog APAR</a>
          <a href="#daftar-harga" onClick={(e) => handleNavClick('daftar-harga', e)} className="hover:text-brand-700 font-bold text-brand-600 bg-brand-50/50 px-2.5 py-1 rounded-full border border-brand-100 transition-colors">Daftar Harga</a>
          <a href="#kalkulator" onClick={(e) => handleNavClick('kalkulator', e)} className="hover:text-brand-600 transition-colors">Kalkulator Biaya</a>
          <a href="#kontak" onClick={(e) => handleNavClick('kontak', e)} className="hover:text-brand-600 transition-colors">Kontak Kami</a>
        </nav>

        {/* CTA Actions */}
        <div className="flex items-center gap-3 md:gap-5">
          {/* Cart Header Button with Badge */}
          <button 
            id="header_cart_btn"
            onClick={onOpenCart} 
            className="relative p-2 text-slate-700 hover:text-brand-600 transition duration-300 focus:outline-none flex items-center" 
            aria-label="Keranjang Belanja"
          >
            <ShoppingCart className="h-6 w-6" />
            {totalCartItems > 0 && (
              <span className="absolute -top-1 -right-1.5 bg-brand-600 text-white text-[10px] font-bold w-5 h-5 rounded-full border border-white flex items-center justify-center animate-bounce">
                {totalCartItems}
              </span>
            )}
          </button>

          {/* Contact WA Header CTA */}
          <a 
            href="https://wa.me/6285850011989?text=Halo%20CS%20FIRE%20FIGHTER,%20saya%20ingin%20konsultasi%20mengenai%20APAR." 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs md:text-sm font-semibold py-2 px-4 rounded-full transition-all shadow-md shadow-emerald-600/10"
          >
            <Phone className="h-4 w-4" />
            <span>Hubungi WA</span>
          </a>

          {/* Mobile Menu Button */}
          <button 
            id="mobile_menu_toggle_btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="md:hidden text-slate-700 hover:text-brand-600 focus:outline-none p-2 rounded-lg hover:bg-slate-100 transition" 
            aria-label="Menu Utama"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 shadow-lg absolute w-full left-0 animate-fadeIn">
          <nav className="flex flex-col gap-4 font-semibold text-slate-700">
            <a href="#beranda" onClick={(e) => handleNavClick('beranda', e)} className="hover:text-brand-600 hover:bg-slate-50 py-2 px-3 rounded-lg transition-all">Beranda</a>
            <a href="#layanan" onClick={(e) => handleNavClick('layanan', e)} className="hover:text-brand-600 hover:bg-slate-50 py-2 px-3 rounded-lg transition-all">Layanan</a>
            <a href="#produk" onClick={(e) => handleNavClick('produk', e)} className="hover:text-brand-600 hover:bg-slate-50 py-2 px-3 rounded-lg transition-all">Katalog APAR</a>
            <a href="#daftar-harga" onClick={(e) => handleNavClick('daftar-harga', e)} className="hover:text-brand-600 hover:bg-slate-50 py-2 px-3 rounded-lg transition-all text-brand-600 font-bold bg-brand-50/40">Daftar Harga Resmi</a>
            <a href="#kalkulator" onClick={(e) => handleNavClick('kalkulator', e)} className="hover:text-brand-600 hover:bg-slate-50 py-2 px-3 rounded-lg transition-all">Kalkulator Biaya</a>
            <a href="#kontak" onClick={(e) => handleNavClick('kontak', e)} className="hover:text-brand-600 hover:bg-slate-50 py-2 px-3 rounded-lg transition-all">Kontak Kami</a>
            <div className="flex gap-2 mt-2">
              <button 
                onClick={() => { setIsMobileMenuOpen(false); onOpenCart(); }} 
                className="flex-1 flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white py-2.5 rounded-lg transition-all font-bold"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Buka Keranjang ({totalCartItems})</span>
              </button>
              <a 
                href="https://wa.me/6285850011989?text=Halo%20CS%20FIRE%20FIGHTER,%20saya%20ingin%20konsultasi%20mengenai%20APAR." 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-lg transition-all"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
