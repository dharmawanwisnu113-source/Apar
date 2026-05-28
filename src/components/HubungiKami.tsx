/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { ContactFormInput } from '../types';

interface HubungiKamiProps {
  onFormSubmit: (data: ContactFormInput) => void;
}

export default function HubungiKami({ onFormSubmit }: HubungiKamiProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Isi Ulang APAR');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit({ name, phone, subject, message });
    // Reset Form fields
    setName('');
    setPhone('');
    setSubject('Isi Ulang APAR');
    setMessage('');
  };

  return (
    <section id="kontak" className="py-20 bg-slate-100 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid md:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COMPONENT: ADDRESS & CONTACT DETAILS */}
        <div className="md:col-span-5 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <span className="text-brand-600 font-bold text-sm tracking-widest uppercase">Hubungi Kami</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-outfit tracking-tight">
              Butuh Penawaran Khusus Perusahaan?
            </h2>
            <p className="text-slate-600">
              Hubungi kami hari ini untuk berdiskusi dengan tim ahli keselamatan kebakaran kami. Tim kami siap merespons kebutuhan Anda dengan cepat.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            
            {/* Address */}
            <div className="flex gap-4 items-start">
              <div className="bg-brand-50 text-brand-600 p-3.5 rounded-xl shadow-sm border border-brand-100 shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 font-outfit text-base">Alamat Kantor & Gudang</h4>
                <p className="text-slate-500 text-sm mt-0.5 leading-relaxed">
                  Jl. R.A Kartini GgXVI, No 108 Gresik, Jawa Timur
                </p>
              </div>
            </div>

            {/* Telephone Line */}
            <div className="flex gap-4 items-start">
              <div className="bg-brand-50 text-brand-600 p-3.5 rounded-xl shadow-sm border border-brand-100 shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 font-outfit text-base">Hubungi via Telepon / WA</h4>
                <p className="text-slate-500 text-sm mt-0.5 leading-relaxed">
                  +62 858-5001-1989 (Fast Response)
                </p>
              </div>
            </div>

            {/* Email Address */}
            <div className="flex gap-4 items-start">
              <div className="bg-brand-50 text-brand-600 p-3.5 rounded-xl shadow-sm border border-brand-100 shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 font-outfit text-base">Alamat Email</h4>
                <p className="text-slate-500 text-sm mt-0.5 leading-relaxed">
                  Fireprotection@csfirefighter.com
                </p>
              </div>
            </div>

          </div>

          {/* Working Operating Hours Widget */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h4 className="font-bold text-slate-900 font-outfit mb-3 flex items-center gap-2">
              <Clock className="h-5 w-5 text-brand-600" /> 
              <span>Jam Operasional Layanan</span>
            </h4>
            <div className="text-slate-600 text-sm space-y-2">
              <div className="flex justify-between border-b border-slate-100 pb-1.5">
                <span>Senin - Jumat</span>
                <span className="font-semibold text-slate-900">08:00 - 17:00</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1.5">
                <span>Sabtu</span>
                <span className="font-semibold text-slate-900">08:00 - 13:00</span>
              </div>
              <div className="flex justify-between text-brand-600 font-bold">
                <span>Minggu (Gawat Darurat)</span>
                <span>Buka 24 Jam</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COMPONENT: INTERACTIVE CONSULTATION FORM */}
        <div className="md:col-span-7 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-xl">
          <h3 className="text-2xl font-bold text-slate-900 font-outfit mb-6">Kirim Formulir Konsultasi</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="formName" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Nama Lengkap
                </label>
                <input 
                  type="text" 
                  id="formName" 
                  required 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama Anda..." 
                  className="bg-slate-50 border border-slate-300 focus:border-brand-500 focus:outline-none rounded-xl px-4 py-3 text-slate-800 transition-all font-medium" 
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="formPhone" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  No. Telepon / WA
                </label>
                <input 
                  type="tel" 
                  id="formPhone" 
                  required 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Contoh: 085850011989..." 
                  className="bg-slate-50 border border-slate-300 focus:border-brand-500 focus:outline-none rounded-xl px-4 py-3 text-slate-800 transition-all font-medium" 
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="formSubject" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Kategori Keperluan
              </label>
              <select 
                id="formSubject" 
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="bg-slate-50 border border-slate-300 focus:border-brand-500 focus:outline-none rounded-xl px-4 py-3 text-slate-800 transition-all cursor-pointer font-semibold"
              >
                <option value="Isi Ulang APAR">Isi Ulang (Refill) Tabung APAR</option>
                <option value="Pengadaan Unit Baru">Pembelian Unit APAR Baru</option>
                <option value="Pelatihan Penanganan Api">Pelatihan K3 & Simulasi Damkar</option>
                <option value="Lainnya">Lainnya / Pertanyaan Umum</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="formMessage" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Detail Pesan / Pertanyaan
              </label>
              <textarea 
                id="formMessage" 
                rows={4} 
                required 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan detail kebutuhan Anda seperti jumlah tabung, ukuran, lokasi penjemputan..." 
                className="bg-slate-50 border border-slate-300 focus:border-brand-500 focus:outline-none rounded-xl px-4 py-3 text-slate-800 transition-all font-medium"
              />
            </div>

            <button 
              type="submit" 
              className="bg-brand-600 hover:bg-brand-700 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-brand-600/20 hover:scale-[1.01] text-center flex items-center justify-center gap-2 cursor-pointer font-outfit"
            >
              <Send className="h-4.5 w-4.5" />
              <span>Kirim Formulir Sekarang</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
