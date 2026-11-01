'use client';

import React, { useState } from 'react';
import { Phone, MessageSquare, X } from 'lucide-react';

export default function FloatingActions() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      {/* Desktop & Tablet Floating WhatsApp Button (Bottom Right) */}
      <aside 
        aria-label="Instant Contact Options"
        className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2"
      >
        {/* Quick Popover Tooltip */}
        {showTooltip && (
          <div className="bg-[#0B1730] text-white p-3 rounded-xl shadow-2xl border border-slate-700 text-xs max-w-[220px] animate-in fade-in slide-in-from-bottom-2 duration-200 relative mb-1">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-1.5 right-1.5 text-slate-400 hover:text-white p-1"
              aria-label="Dismiss chat tip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <p className="font-bold text-[#C6A15B] mb-0.5">Direct Desk Support</p>
            <p className="text-slate-300">
              Need immediate advice or an auction listing query? Message us on WhatsApp.
            </p>
          </div>
        )}

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/254720934476?text=Hello%20Makuri%20Auctioneers,%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setShowTooltip(true)}
            aria-label="Chat on WhatsApp with Makuri Auctioneers"
            className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-200 border-2 border-white/20 hover:scale-105 min-h-[44px]"
          >
            <MessageSquare className="w-5 h-5 fill-white text-emerald-600 shrink-0" />
            <span className="text-xs font-bold tracking-wide pr-1">
              WhatsApp Desk
            </span>
          </a>
        </div>
      </aside>

      {/* Mobile Sticky Quick-Action Bar (Fixed Bottom, strictly <= 64px, safe area aware, < 10% screen height) */}
      <aside 
        aria-label="Mobile Quick Call and WhatsApp Actions"
        className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-[#070e20]/95 backdrop-blur-md border-t border-slate-800 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom,0px))] shadow-2xl"
      >
        <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
          {/* Mobile Call Now */}
          <a
            href="tel:0720934476"
            className="min-h-[44px] flex items-center justify-center gap-2 px-3 rounded-lg bg-gradient-to-r from-[#C6A15B] to-[#dfc285] text-[#0B1730] font-bold text-xs tracking-wider shadow-md active:scale-98 transition-transform"
          >
            <Phone className="w-4 h-4 text-[#0B1730] shrink-0" />
            <span>CALL NOW</span>
          </a>

          {/* Mobile WhatsApp */}
          <a
            href="https://wa.me/254720934476?text=Hello%20Makuri%20Auctioneers,%20I%20would%20like%20to%20inquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] flex items-center justify-center gap-2 px-3 rounded-lg bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs tracking-wider shadow-md active:scale-98 transition-transform"
          >
            <MessageSquare className="w-4 h-4 fill-white text-emerald-600 shrink-0" />
            <span>WHATSAPP</span>
          </a>
        </div>
      </aside>
    </>
  );
}
