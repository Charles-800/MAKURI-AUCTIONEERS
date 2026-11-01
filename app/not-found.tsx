import React from 'react';
import Link from 'next/link';
import { Phone, ArrowLeft, Home, MapPin } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B1730] text-white flex flex-col justify-between">
      {/* Top Bar */}
      <header className="border-b border-slate-800 py-4 px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#163E72] text-[#C6A15B] font-serif font-bold flex items-center justify-center text-sm border border-[#C6A15B]/50">
            M
          </div>
          <span className="font-serif font-bold text-white text-base tracking-tight">
            MAKURI <span className="text-[#C6A15B]">AUCTIONEERS</span>
          </span>
        </Link>

        <a
          href="tel:0720934476"
          className="text-xs font-bold text-[#0B1730] bg-[#C6A15B] hover:bg-[#dfc285] px-4 py-2 rounded transition-colors"
        >
          Call 0720 934 476
        </a>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-3 py-1 bg-white/10 rounded text-xs font-mono font-bold text-[#C6A15B] mb-4">
          ERROR 404 · PAGE NOT FOUND
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
          Notice or Document Not Located
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
          The requested page or auction gazette reference may have been updated, rescheduled, or relocated. Please return to our main corporate portal or contact our Mombasa desk directly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-gradient-to-r from-[#C6A15B] to-[#dfc285] text-[#0B1730] font-bold text-sm tracking-wide shadow-md transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <a
            href="tel:0720934476"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#C6A15B]" />
            <span>Call Desk: 0720 934 476</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 px-6 text-center text-xs text-slate-500">
        Makuri Auctioneers · NSSF Building, 7th Floor, Door 733, Nkrumah Road, Mombasa, Kenya.
      </footer>
    </div>
  );
}
