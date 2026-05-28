/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Flame, RefreshCw, GraduationCap, CheckCircle } from 'lucide-react';

export default function Layanan() {
  return (
    <section id="layanan" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-brand-600 font-bold text-sm tracking-widest uppercase">Layanan Terbaik Kami</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-outfit">
            Layanan Profesional CS FIRE FIGHTER
          </h2>
          <p className="text-slate-600">
            Kami siap membantu melindungi bangunan, usaha, dan kendaraan Anda dari bahaya kebakaran dengan standar profesional K3 terbaik.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Layanan 1 - Penjualan */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col gap-4">
            <div className="bg-brand-50 text-brand-600 p-4 rounded-xl w-fit self-start">
              <Flame className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-outfit">Penjualan APAR Baru</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Menyediakan berbagai macam ukuran (1kg s.d. 9kg) dengan jenis media terlengkap seperti Dry Chemical Powder, Carbon Dioxide (CO2), Foam AFFF, dan Clean Agent.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 mt-auto pt-4 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> 
                <span>Sudah Termasuk Bracket Dinding</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> 
                <span>Bersertifikat dan Bergaransi Resmi</span>
              </li>
            </ul>
          </div>

          {/* Layanan 2 - Refill */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col gap-4">
            <div className="bg-brand-50 text-brand-600 p-4 rounded-xl w-fit self-start">
              <RefreshCw className="h-6 w-6 animate-spin-slow" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-outfit">Isi Ulang (Refill) APAR</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Tekanan APAR Anda turun atau habis masa berlakunya? Kami melayani pengisian ulang cepat menggunakan media berkualitas tinggi standar Damkar untuk semua merk APAR.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 mt-auto pt-4 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> 
                <span>Dipinjamkan APAR Cadangan Gratis</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> 
                <span>Gratis Layanan Antar-Jemput (Gresik)</span>
              </li>
            </ul>
          </div>

          {/* Layanan 3 - Pelatihan */}
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col gap-4">
            <div className="bg-brand-50 text-brand-600 p-4 rounded-xl w-fit self-start">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-outfit">Pelatihan & Inspeksi K3</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Kami siap memberikan edukasi simulasi pemadaman api (metode P.A.S.S) secara berkala dan inspeksi kelaikan unit APAR di lokasi kerja agar tim Anda selalu siap siaga.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 mt-auto pt-4 border-t border-slate-100">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> 
                <span>Dibimbing Tenaga Ahli Profesional</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" /> 
                <span>Pembuatan Laporan Inspeksi Resmi</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
