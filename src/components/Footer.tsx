/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, ChevronRight, PhoneCall, Facebook, Instagram, Linkedin, Globe } from 'lucide-react';

interface FooterProps {
  onScrollToSection: (id: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  
  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    onScrollToSection(id);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
        
        {/* BRAND & SOCIAL MEDIA BLOCK */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <div className="bg-brand-600 text-white p-2.5 rounded-lg shadow-md shadow-brand-500/20">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <span className="text-lg font-extrabold text-white tracking-tight font-outfit uppercase">
              CS FIRE FIGHTER
            </span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Penyedia sistem proteksi keselamatan kebakaran berkualitas tinggi untuk menjaga kenyamanan dan ketenangan hati Anda dari segala risiko kebakaran tak terduga.
          </p>
          
          {/* Social media links using compatible Lucide icons */}
          <div className="flex gap-3 mt-2">
            <a href="#facebook" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-brand-600 text-white flex items-center justify-center transition-all shadow-md" aria-label="Facebook CS Fire Fighter">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#instagram" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-brand-600 text-white flex items-center justify-center transition-all shadow-md" aria-label="Instagram CS Fire Fighter">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#linkedin" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-brand-600 text-white flex items-center justify-center transition-all shadow-md" aria-label="LinkedIn CS Fire Fighter">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#website" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-brand-600 text-white flex items-center justify-center transition-all shadow-md" aria-label="Website CS Fire Fighter">
              <Globe className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* QUICK NAVIGATION */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <h4 className="text-white font-bold font-outfit tracking-wide uppercase text-sm">Navigasi Cepat</h4>
          <nav className="flex flex-col gap-2.5 text-sm">
            <a href="#beranda" onClick={(e) => handleLinkClick('beranda', e)} className="hover:text-white transition-colors">Beranda</a>
            <a href="#layanan" onClick={(e) => handleLinkClick('layanan', e)} className="hover:text-white transition-colors">Layanan Kami</a>
            <a href="#produk" onClick={(e) => handleLinkClick('produk', e)} className="hover:text-white transition-colors">Jenis APAR</a>
            <a href="#kalkulator" onClick={(e) => handleLinkClick('kalkulator', e)} className="hover:text-white transition-colors">Kalkulator Biaya</a>
            <a href="#kontak" onClick={(e) => handleLinkClick('kontak', e)} className="hover:text-white transition-colors">Kontak Kami</a>
          </nav>
        </div>

        {/* PRODUCTS DIRECT LINK LIST */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="text-white font-bold font-outfit tracking-wide uppercase text-sm">Produk APAR Kami</h4>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li className="flex items-center gap-1">
              <ChevronRight className="h-4 w-4 text-brand-500 shrink-0" />
              <span>Dry Chemical Powder</span>
            </li>
            <li className="flex items-center gap-1">
              <ChevronRight className="h-4 w-4 text-brand-500 shrink-0" />
              <span>Carbon Dioxide (CO2)</span>
            </li>
            <li className="flex items-center gap-1">
              <ChevronRight className="h-4 w-4 text-brand-500 shrink-0" />
              <span>Foam AFFF</span>
            </li>
            <li className="flex items-center gap-1">
              <ChevronRight className="h-4 w-4 text-brand-500 shrink-0" />
              <span>Clean Agent Liquid Gas</span>
            </li>
            <li className="flex items-center gap-1">
              <ChevronRight className="h-4 w-4 text-brand-500 shrink-0" />
              <span>Box APAR & Perlengkapan</span>
            </li>
          </ul>
        </div>

        {/* EMERGENCY HOTLINE BLOCK */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <h4 className="text-white font-bold font-outfit tracking-wide uppercase text-sm">Layanan Darurat</h4>
          <p className="text-sm leading-relaxed">
            Jangan tunda keselamatan! Hubungi nomor krisis darurat kami apabila memerlukan pengadaan APAR segera dalam waktu 24 jam.
          </p>
          <a 
            href="tel:+6285850011989" 
            className="bg-brand-600/20 text-brand-400 border border-brand-500/30 py-2.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-600 hover:text-white transition-all text-sm"
          >
            <PhoneCall className="h-4 w-4 animate-bounce text-brand-500" />
            <span>+62 858-5001-1989</span>
          </a>
        </div>

      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div>
          © 2026 CS FIRE FIGHTER. Hak Cipta Dilindungi Undang-Undang.
        </div>
        <div className="flex gap-4">
          <a href="#privacy" className="hover:text-white transition-colors">Kebijakan Privasi</a>
          <a href="#terms" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  );
}
