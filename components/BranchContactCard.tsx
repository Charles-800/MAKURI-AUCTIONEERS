import React from 'react';
import { MapPin, Building2, Phone, MessageSquare, Mail, Navigation, Clock } from 'lucide-react';

interface BranchContactCardProps {
  highlightBranch?: 'mombasa' | 'nairobi';
  title?: string;
  subtitle?: string;
}

export default function BranchContactCard({
  highlightBranch,
  title = 'Our Verified Physical Offices',
  subtitle = 'Visit our licensed consultation offices or speak directly with our directors and case coordinators.',
}: BranchContactCardProps) {
  return (
    <section className="py-12 sm:py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#163E72] block mb-2">
            Mombasa HQ &bull; Nairobi Branch
          </span>
          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-3.5xl font-bold text-[#0B1730]">
            {title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mombasa HQ */}
          <div
            className={`rounded-2xl p-6 sm:p-8 border transition-all ${
              highlightBranch === 'mombasa'
                ? 'border-[#C6A15B] bg-[#0B1730] text-white shadow-xl ring-2 ring-[#C6A15B]/30'
                : 'border-slate-200 bg-[#F4F6F9] text-slate-900 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-300/30">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-[#163E72] text-[#C6A15B] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C6A15B] block">
                    Corporate Headquarters
                  </span>
                  <h3 className={`font-serif-heading text-xl font-bold ${highlightBranch === 'mombasa' ? 'text-white' : 'text-[#0B1730]'}`}>
                    Mombasa Head Office
                  </h3>
                </div>
              </div>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#C6A15B]/20 text-[#C6A15B]">
                Since 1995
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <span className={`font-bold block mb-1 text-xs uppercase tracking-wider ${highlightBranch === 'mombasa' ? 'text-slate-300' : 'text-slate-500'}`}>
                  Physical Address
                </span>
                <p className={`font-medium leading-relaxed ${highlightBranch === 'mombasa' ? 'text-white' : 'text-slate-800'}`}>
                  Nkrumah Road, NSSF Building,<br />
                  7th Floor, Door 733,<br />
                  Mombasa, Kenya.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <span className={`font-bold block mb-1 text-xs uppercase tracking-wider ${highlightBranch === 'mombasa' ? 'text-slate-300' : 'text-slate-500'}`}>
                    Telephone Hotline
                  </span>
                  <a
                    href="tel:0720934476"
                    className="font-bold text-[#C6A15B] hover:underline text-sm inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>0720 934 476</span>
                  </a>
                </div>

                <div>
                  <span className={`font-bold block mb-1 text-xs uppercase tracking-wider ${highlightBranch === 'mombasa' ? 'text-slate-300' : 'text-slate-500'}`}>
                    Direct WhatsApp
                  </span>
                  <a
                    href="https://wa.me/254720934476?text=Hello%20Makuri%20Auctioneers%20Mombasa%20Desk,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-500 hover:underline text-sm inline-flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>0720 934 476</span>
                  </a>
                </div>
              </div>

              <div>
                <span className={`font-bold block mb-1 text-xs uppercase tracking-wider ${highlightBranch === 'mombasa' ? 'text-slate-300' : 'text-slate-500'}`}>
                  Email Instructions
                </span>
                <a
                  href="mailto:info@makuriauctioneers.co.ke"
                  className={`font-semibold hover:text-[#C6A15B] transition-colors inline-flex items-center gap-1.5 ${highlightBranch === 'mombasa' ? 'text-slate-200' : 'text-slate-700'}`}
                >
                  <Mail className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>info@makuriauctioneers.co.ke</span>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-300/30 flex items-center justify-between">
                <span className={`text-[11px] flex items-center gap-1.5 ${highlightBranch === 'mombasa' ? 'text-slate-400' : 'text-slate-500'}`}>
                  <Clock className="w-3.5 h-3.5" />
                  <span>Mon - Fri: 8:00 AM - 5:00 PM | Sat: 8:30 AM - 1:00 PM</span>
                </span>
                <a
                  href="https://maps.google.com/?q=NSSF+Building+Nkrumah+Road+Mombasa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#163E72] hover:text-[#C6A15B] bg-white px-3 py-1.5 rounded-md shadow-xs border border-slate-200 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          {/* Nairobi Branch */}
          <div
            className={`rounded-2xl p-6 sm:p-8 border transition-all ${
              highlightBranch === 'nairobi'
                ? 'border-[#C6A15B] bg-[#0B1730] text-white shadow-xl ring-2 ring-[#C6A15B]/30'
                : 'border-slate-200 bg-[#F4F6F9] text-slate-900 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-300/30">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-lg bg-[#163E72] text-[#C6A15B] flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#C6A15B] block">
                    Capital City Branch
                  </span>
                  <h3 className={`font-serif-heading text-xl font-bold ${highlightBranch === 'nairobi' ? 'text-white' : 'text-[#0B1730]'}`}>
                    Nairobi Branch Office
                  </h3>
                </div>
              </div>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-[#163E72]/20 text-[#163E72]">
                Central Desk
              </span>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div>
                <span className={`font-bold block mb-1 text-xs uppercase tracking-wider ${highlightBranch === 'nairobi' ? 'text-slate-300' : 'text-slate-500'}`}>
                  Physical Address
                </span>
                <p className={`font-medium leading-relaxed ${highlightBranch === 'nairobi' ? 'text-white' : 'text-slate-800'}`}>
                  All Saints Cathedral Office,<br />
                  Kenyatta Avenue / Processional Way,<br />
                  Nairobi, Kenya.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <span className={`font-bold block mb-1 text-xs uppercase tracking-wider ${highlightBranch === 'nairobi' ? 'text-slate-300' : 'text-slate-500'}`}>
                    Telephone Hotline
                  </span>
                  <a
                    href="tel:0720934476"
                    className="font-bold text-[#C6A15B] hover:underline text-sm inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>0720 934 476</span>
                  </a>
                </div>

                <div>
                  <span className={`font-bold block mb-1 text-xs uppercase tracking-wider ${highlightBranch === 'nairobi' ? 'text-slate-300' : 'text-slate-500'}`}>
                    Direct WhatsApp
                  </span>
                  <a
                    href="https://wa.me/254720934476?text=Hello%20Makuri%20Auctioneers%20Nairobi%20Desk,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-500 hover:underline text-sm inline-flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>0720 934 476</span>
                  </a>
                </div>
              </div>

              <div>
                <span className={`font-bold block mb-1 text-xs uppercase tracking-wider ${highlightBranch === 'nairobi' ? 'text-slate-300' : 'text-slate-500'}`}>
                  Email Instructions
                </span>
                <a
                  href="mailto:info@makuriauctioneers.co.ke"
                  className={`font-semibold hover:text-[#C6A15B] transition-colors inline-flex items-center gap-1.5 ${highlightBranch === 'nairobi' ? 'text-slate-200' : 'text-slate-700'}`}
                >
                  <Mail className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>info@makuriauctioneers.co.ke</span>
                </a>
              </div>

              <div className="pt-3 border-t border-slate-300/30 flex items-center justify-between">
                <span className={`text-[11px] flex items-center gap-1.5 ${highlightBranch === 'nairobi' ? 'text-slate-400' : 'text-slate-500'}`}>
                  <Clock className="w-3.5 h-3.5" />
                  <span>Mon - Fri: 8:00 AM - 5:00 PM | Sat: 8:30 AM - 1:00 PM</span>
                </span>
                <a
                  href="https://maps.google.com/?q=All+Saints+Cathedral+Nairobi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#163E72] hover:text-[#C6A15B] bg-white px-3 py-1.5 rounded-md shadow-xs border border-slate-200 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
