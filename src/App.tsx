/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { MessageSquare, ShoppingCart, CheckCircle, X } from 'lucide-react';

import Header from './components/Header';
import Hero from './components/Hero';
import Layanan from './components/Layanan';
import Katalog from './components/Katalog';
import Kalkulator from './components/Kalkulator';
import HubungiKami from './components/HubungiKami';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import DaftarHarga from './components/DaftarHarga';

import { CartItem, MediaType, TransactionType, ContactFormInput } from './types';
import { priceDatabase, mediaLabels } from './data';

export default function App() {
  // Cart state initialized with safe localStorage handling
  const [cart, setCart] = useState<CartItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cs_fire_fighter_cart');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to restore cart', e);
        }
      }
    }
    return [];
  });

  // UI state management
  const [currentView, setCurrentView] = useState<'home' | 'harga'>('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toast, setToast] = useState<{
    show: boolean;
    title: string;
    message: string;
  }>({
    show: false,
    title: '',
    message: ''
  });

  // Pricing calculator state (holds config selections of size, media & multiplier)
  const [calcTransaksi, setCalcTransaksi] = useState<TransactionType>('refill');
  const [calcMedia, setCalcMedia] = useState<MediaType>('powder');
  const [calcSize, setCalcSize] = useState<string>('3');
  const [calcQuantity, setCalcQuantity] = useState<number>(1);

  // Sync cart selections to local storage
  useEffect(() => {
    localStorage.setItem('cs_fire_fighter_cart', JSON.stringify(cart));
  }, [cart]);

  // Toast self-hider effect
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  // Helper utility to trigger toast alerts
  const showToast = (title: string, message: string) => {
    setToast({
      show: true,
      title,
      message
    });
  };

  // Helper to coordinate smooth scroll behaviors across views
  const scrollToSection = (id: string) => {
    if (id === 'daftar-harga') {
      setCurrentView('harga');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 150);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Logic: Add item to shopping cart from external katalog parameters
  const handleAddToCart = (
    transaksi: TransactionType,
    media: MediaType,
    ukuran: string,
    namaDisplay: string,
    hargaDefault: number
  ) => {
    const id = `${transaksi}_${media}_${ukuran}`;
    const labelTransaksi = transaksi === 'refill' ? 'Isi Ulang (Refill)' : 'Beli Baru';
    const labelMedia = mediaLabels[media];

    const item: CartItem = {
      id,
      name: namaDisplay,
      transaksi,
      labelTransaksi,
      media,
      labelMedia,
      size: ukuran,
      price: hargaDefault,
      quantity: 1
    };

    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex((p) => p.id === item.id);
      if (existingIdx > -1) {
        const update = [...prevCart];
        update[existingIdx].quantity += 1;
        return update;
      }
      return [...prevCart, item];
    });

    showToast('Berhasil Masuk Keranjang', `${namaDisplay} (${labelTransaksi}) berhasil ditambahkan.`);
    setIsCartOpen(true);
  };

  // Logic: Load selection directly into details inside the custom calculator
  const handleSelectForCalculator = (transaksi: TransactionType, media: MediaType, ukuran: string) => {
    setCalcTransaksi(transaksi);
    setCalcMedia(media);
    setCalcSize(ukuran);
    setCalcQuantity(1);

    showToast('Konfigurasi Dimuat', 'Item terpilih telah diselaraskan ke dalam kalkulator di bawah.');
    scrollToSection('kalkulator');
  };

  // Logic: Load category filter into the calculator from categories overview cards
  const handleSelectCategory = (mediaType: MediaType) => {
    setCalcMedia(mediaType);
    setCalcSize('3'); // reset to default 3kg
    setCalcQuantity(1);
    scrollToSection('kalkulator');
  };

  // Logic: Add currently configured item in Calculator directly to the Cart
  const handleAddFromCalculator = () => {
    const unitCost = priceDatabase[calcTransaksi][calcMedia][calcSize] || 0;
    const labelTransaksi = calcTransaksi === 'refill' ? 'Isi Ulang (Refill)' : 'Beli Baru';
    const labelMedia = mediaLabels[calcMedia];
    const id = `${calcTransaksi}_${calcMedia}_${calcSize}`;

    const item: CartItem = {
      id,
      name: `APAR ${labelMedia} ${calcSize} Kg`,
      transaksi: calcTransaksi,
      labelTransaksi,
      media: calcMedia,
      labelMedia,
      size: calcSize,
      price: unitCost,
      quantity: calcQuantity
    };

    setCart((prevCart) => {
      const existingIdx = prevCart.findIndex((p) => p.id === item.id);
      if (existingIdx > -1) {
        const update = [...prevCart];
        update[existingIdx].quantity += item.quantity;
        return update;
      }
      return [...prevCart, item];
    });

    showToast('Sukses Ditambahkan', `${item.name} (${labelTransaksi}) berhasil masuk keranjang.`);
    setIsCartOpen(true);
  };

  // Logic: Delete items or adjust numeric quantities inside the cart
  const handleUpdateCartQuantity = (index: number, change: number) => {
    setCart((prevCart) => {
      const update = [...prevCart];
      const newQty = update[index].quantity + change;
      if (newQty >= 1) {
        update[index].quantity = newQty;
      }
      return update;
    });
  };

  const handleRemoveCartItem = (index: number) => {
    const item = cart[index];
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    showToast('Item Dihapus', `${item.name} dikeluarkan dari keranjang.`);
  };

  const handleClearCart = () => {
    setCart([]);
    showToast('Keranjang Dikosongkan', 'Semua item pesanan Anda berhasil dibersihkan.');
  };

  // Logic: Handle consultation forms submissions
  const handleContactFormSubmit = (data: ContactFormInput) => {
    showToast(
      'Formulir Terkirim!',
      `Terima kasih Ibu/Bapak ${data.name}. Keperluan "${data.subject}" Anda telah kami terima, tim CS FIRE FIGHTER akan segera menghubungi ponsel ${data.phone}.`
    );
  };

  // Helper calculation for floating cart badge counts
  const floatingTotalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-slate-50 text-slate-800 flex flex-col min-h-screen antialiased relative overflow-x-hidden">
      
      {/* GLOBAL HEADER/NAVIGATION */}
      <Header 
        cart={cart} 
        onOpenCart={() => setIsCartOpen(true)} 
        onScrollToSection={scrollToSection} 
      />

      {/* CORE WRAPPED CONTENT */}
      <main className="flex-grow">
        {currentView === 'harga' ? (
          <DaftarHarga 
            onBack={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onAddToCart={handleAddToCart}
          />
        ) : (
          <>
            {/* HERO CORNER SEGMENTS */}
            <Hero onScrollToSection={scrollToSection} />

            {/* CORE SERVICES DISPLAY */}
            <Layanan />

            {/* COMPREHENSIVE PRODUCT CATALOGUE */}
            <Katalog 
              onAddToCart={handleAddToCart}
              onSelectForCalculator={handleSelectForCalculator}
              onSelectCategory={handleSelectCategory}
            />

            {/* INTERACTIVE COMPREHENSIVE PRICE ESTIMATIONS */}
            <Kalkulator 
              transaksi={calcTransaksi}
              media={calcMedia}
              size={calcSize}
              quantity={calcQuantity}
              onChangeTransaksi={setCalcTransaksi}
              onChangeMedia={(m) => {
                setCalcMedia(m);
                if (m === 'co2') {
                  setCalcSize('2');
                } else {
                  setCalcSize('3');
                }
              }}
              onChangeSize={setCalcSize}
              onChangeQuantity={setCalcQuantity}
              onAddFromCalculator={handleAddFromCalculator}
            />

            {/* INFORMATIVE MAPS CONTACT INFOS & CONSULTING FORM */}
            <HubungiKami onFormSubmit={handleContactFormSubmit} />
          </>
        )}
      </main>

      {/* LEGAL MAPS COPYRIGHTS FOOTER */}
      <Footer onScrollToSection={scrollToSection} />

      {/* MODAL CART OVERLAY & SLIDER DRAWERS */}
      <CartDrawer 
        isOpen={isCartOpen}
        cart={cart}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
        onScrollToCatalog={() => scrollToSection('produk')}
      />

      {/* FLOAT ACTION 1: FLOATING WHATSAPP CHAT HOT-LINK BUBBLE */}
      <a 
        href="https://wa.me/6285850011989?text=Halo%20CS%20FIRE%20FIGHTER,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20pengadaan%2520atau%2520isi%2520ulang%2520APAR."
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-4 md:bottom-6 right-4 md:right-6 lg:right-8 z-45 bg-emerald-500 hover:bg-emerald-605 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-105 group"
        aria-label="Chat WhatsApp CS FIRE FIGHTER"
      >
        <MessageSquare className="h-7 w-7" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden sm:inline-block border border-slate-700">
          Hubungi CS FIRE FIGHTER
        </span>
      </a>

      {/* FLOAT ACTION 2: FLOATING CART SHORTCUT TRACKER BUBBLE */}
      <button 
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-20 md:bottom-24 right-4 md:right-6 lg:right-8 z-45 bg-brand-600 hover:bg-brand-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-305 hover:scale-105 cursor-pointer"
        aria-label="Buka Keranjang Belanja"
      >
        <ShoppingCart className="h-6 w-6" />
        {floatingTotalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs font-bold w-6 h-6 rounded-full border-2 border-white flex items-center justify-center animate-bounce">
            {floatingTotalItems}
          </span>
        )}
      </button>

      {/* NOTIFICATION FLUID ALERTS (TOASTER CARD) */}
      {toast.show && (
        <div 
          className="fixed top-5 right-5 z-50 max-w-md w-full bg-white border-l-4 border-emerald-500 rounded-r-lg shadow-xl p-4 flex items-start gap-3 animate-slideInRight"
        >
          <div className="bg-emerald-100 p-2 rounded-full text-emerald-600 shrink-0">
            <CheckCircle className="h-5 w-5" />
          </div>
          <div className="flex-grow">
            <h4 className="font-bold text-slate-900 text-sm">{toast.title}</h4>
            <p className="text-xs text-slate-655 mt-1 leading-relaxed">{toast.message}</p>
          </div>
          <button 
            onClick={() => setToast((prev) => ({ ...prev, show: false }))} 
            className="text-slate-400 hover:text-slate-600 transition shrink-0 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

    </div>
  );
}
