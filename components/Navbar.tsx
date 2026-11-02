'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Phone, MessageSquare, Menu, X, Shield, MapPin, Mail, Building, ChevronDown, BookOpen } from 'lucide-react';

interface NavbarProps {
  onOpenPrivacyModal?: () => void;
  onOpenTermsModal?: () => void;
}

export default function Navbar({ onOpenPrivacyModal, onOpenTermsModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
        setLocationsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceLinks = [
    { name: 'Auctioneering Services', href: '/auctioneering-services-kenya', desc: 'Public auctions & asset disposal' },
    { name: 'Execution of Court Orders', href: '/execution-of-court-orders-kenya', desc: 'Attachment warrants, evictions & distress' },
    { name: 'Realization of Securities', href: '/realization-of-securities-kenya', desc: 'Bank & SACCO collateral liquidation' },
    { name: 'Repossession Services', href: '/repossession-services-kenya', desc: 'Vehicles, plant & equipment recovery' },
    { name: 'Asset Recovery Services', href: '/asset-recovery-services-kenya', desc: 'Debtor tracing & collateral recovery' },
    { name: 'Private Investigations', href: '/private-investigation-services-kenya', desc: 'Corporate fraud & asset tracing' },
    { name: 'Business Consultancy', href: '/business-consultancy-kenya', desc: 'Corporate strategy & recovery advisory' },
    { name: 'Real Estate Management', href: '/real-estate-management-kenya', desc: 'Property management & tenancy' },
  ];

  const locationLinks = [
    { name: 'Mombasa Head Office', href: '/auctioneers-in-mombasa', desc: 'NSSF Building, 7th Flr, Door 733' },
    { name: 'Nairobi Branch Office', href: '/auctioneers-in-nairobi', desc: 'All Saints Cathedral Office' },
    { name: 'All Locations & Corridors', href: '/locations', desc: 'Nationwide coverage across Kenya' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setLocationsDropdownOpen(false);
  };

  return (
    <>
      {/* Top micro contact strip on desktop & tablet */}
      <div className="hidden lg:block bg-[#070e20] text-slate-300 text-xs py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center gap-4">
          <div className="flex items-center gap-4 truncate">
            <Link href="/auctioneers-in-mombasa" className="flex items-center gap-1.5 text-slate-300 hover:text-[#C6A15B] transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
              <span><strong>Mombasa (HQ):</strong> NSSF Bldg, 7th Flr, Door 733</span>
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/auctioneers-in-nairobi" className="flex items-center gap-1.5 text-slate-300 hover:text-[#C6A15B] transition-colors">
              <Building className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
              <span><strong>Nairobi:</strong> All Saints Cathedral Office</span>
            </Link>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a 
              href="mailto:info@makuriauctioneers.co.ke" 
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#C6A15B] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span className="tabular-nums">info@makuriauctioneers.co.ke</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="tel:0720934476" 
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#C6A15B] transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>0720 934 476</span>
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="https://wa.me/254720934476?text=Hello%20Makuri%20Auctioneers,%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation bar */}
      <header 
        ref={dropdownRef}
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0B1730]/95 backdrop-blur-md shadow-xl py-2.5 sm:py-3 border-b border-slate-800/80' 
            : 'bg-[#0B1730] py-3 sm:py-4 border-b border-slate-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-3 sm:gap-6">
          {/* Brand Wordmark */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 shrink-0 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#163E72] to-[#0B1730] border border-[#C6A15B]/60 flex items-center justify-center text-[#C6A15B] shadow-md group-hover:border-[#C6A15B] transition-colors">
              <span className="font-serif-heading font-bold text-lg sm:text-xl tracking-wider">M</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-heading text-base sm:text-xl font-bold tracking-tight text-white whitespace-nowrap">
                MAKURI <span className="text-[#C6A15B]">AUCTIONEERS</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-slate-400 font-medium whitespace-nowrap">
                Mombasa &amp; Nairobi &bull; Est. 1995
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links with Dropdowns */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-slate-200">
            <Link
              href="/"
              className="whitespace-nowrap hover:text-[#C6A15B] transition-colors py-1"
            >
              Home
            </Link>

            <Link
              href="/about-us"
              className="whitespace-nowrap hover:text-[#C6A15B] transition-colors py-1"
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setServicesDropdownOpen(!servicesDropdownOpen);
                  setLocationsDropdownOpen(false);
                }}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                className="flex items-center gap-1 whitespace-nowrap hover:text-[#C6A15B] transition-colors py-1"
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#C6A15B]" />
              </button>

              {servicesDropdownOpen && (
                <div
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="absolute top-full left-0 w-80 bg-[#0B1730] border border-slate-700/80 rounded-xl shadow-2xl p-2.5 mt-2 space-y-1 animate-in fade-in slide-in-from-top-2"
                >
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#C6A15B] border-b border-slate-800">
                    Regulated Practice Areas
                  </div>
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleLinkClick}
                      className="block p-2.5 rounded-lg hover:bg-slate-800/80 transition-colors group"
                    >
                      <div className="font-semibold text-xs text-white group-hover:text-[#C6A15B]">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => {
                  setLocationsDropdownOpen(!locationsDropdownOpen);
                  setServicesDropdownOpen(false);
                }}
                onMouseEnter={() => setLocationsDropdownOpen(true)}
                className="flex items-center gap-1 whitespace-nowrap hover:text-[#C6A15B] transition-colors py-1"
                aria-expanded={locationsDropdownOpen}
              >
                <span>Locations</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#C6A15B]" />
              </button>

              {locationsDropdownOpen && (
                <div
                  onMouseLeave={() => setLocationsDropdownOpen(false)}
                  className="absolute top-full left-0 w-72 bg-[#0B1730] border border-slate-700/80 rounded-xl shadow-2xl p-2.5 mt-2 space-y-1 animate-in fade-in slide-in-from-top-2"
                >
                  <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#C6A15B] border-b border-slate-800">
                    Branch Offices
                  </div>
                  {locationLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleLinkClick}
                      className="block p-2.5 rounded-lg hover:bg-slate-800/80 transition-colors group"
                    >
                      <div className="font-semibold text-xs text-white group-hover:text-[#C6A15B]">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {item.desc}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/insights"
              className="whitespace-nowrap hover:text-[#C6A15B] transition-colors py-1 flex items-center gap-1"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Insights</span>
            </Link>

            <Link
              href="/contact-us"
              className="whitespace-nowrap hover:text-[#C6A15B] transition-colors py-1"
            >
              Contact Us
            </Link>
          </nav>

          {/* Primary CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="tel:0720934476"
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-md bg-gradient-to-r from-[#C6A15B] to-[#dfc285] hover:from-[#b5914a] hover:to-[#C6A15B] text-[#0B1730] font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all whitespace-nowrap shrink-0 min-h-[44px]"
            >
              <Phone className="w-4 h-4 text-[#0B1730]" />
              <span>CALL NOW</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-slate-300 hover:text-white bg-slate-800/40 hover:bg-slate-800 border border-slate-700/60 focus:outline-none focus:ring-2 focus:ring-[#C6A15B] min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#C6A15B]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[65px] bottom-0 bg-[#070e20]/98 backdrop-blur-xl border-t border-slate-800 z-50 overflow-y-auto px-5 py-6 shadow-2xl flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold border-b border-slate-800 pb-2">
                Navigation Directory
              </div>

              <nav className="flex flex-col gap-1 text-base font-medium text-slate-200">
                <Link
                  href="/"
                  onClick={handleLinkClick}
                  className="py-2.5 px-3 rounded-lg hover:bg-slate-800 text-slate-100 min-h-[44px] flex items-center justify-between"
                >
                  <span>Home</span>
                  <span className="text-slate-500 text-xs">&rarr;</span>
                </Link>

                <Link
                  href="/about-us"
                  onClick={handleLinkClick}
                  className="py-2.5 px-3 rounded-lg hover:bg-slate-800 text-slate-100 min-h-[44px] flex items-center justify-between"
                >
                  <span>About Us (Est. 1995)</span>
                  <span className="text-slate-500 text-xs">&rarr;</span>
                </Link>

                {/* Mobile Services Expansion */}
                <div className="py-2 border-y border-slate-800/80 my-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C6A15B] px-3 block mb-1">
                    Services
                  </span>
                  <div className="space-y-1 pl-2">
                    {serviceLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={handleLinkClick}
                        className="py-2 px-3 rounded-lg hover:bg-slate-800 text-xs text-slate-300 hover:text-white flex items-center justify-between min-h-[38px]"
                      >
                        <span>{item.name}</span>
                        <span className="text-slate-600">&bull;</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Locations Expansion */}
                <div className="py-2 border-b border-slate-800/80 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#C6A15B] px-3 block mb-1">
                    Locations
                  </span>
                  <div className="space-y-1 pl-2">
                    <Link
                      href="/auctioneers-in-mombasa"
                      onClick={handleLinkClick}
                      className="py-2 px-3 rounded-lg hover:bg-slate-800 text-xs text-slate-300 hover:text-white flex items-center justify-between min-h-[38px]"
                    >
                      <span>Mombasa Head Office</span>
                      <span className="text-slate-600">&bull;</span>
                    </Link>
                    <Link
                      href="/auctioneers-in-nairobi"
                      onClick={handleLinkClick}
                      className="py-2 px-3 rounded-lg hover:bg-slate-800 text-xs text-slate-300 hover:text-white flex items-center justify-between min-h-[38px]"
                    >
                      <span>Nairobi Branch Office</span>
                      <span className="text-slate-600">&bull;</span>
                    </Link>
                    <Link
                      href="/locations"
                      onClick={handleLinkClick}
                      className="py-2 px-3 rounded-lg hover:bg-slate-800 text-xs text-slate-300 hover:text-white flex items-center justify-between min-h-[38px]"
                    >
                      <span>All Locations &amp; Corridors</span>
                      <span className="text-slate-600">&bull;</span>
                    </Link>
                  </div>
                </div>

                <Link
                  href="/insights"
                  onClick={handleLinkClick}
                  className="py-2.5 px-3 rounded-lg hover:bg-slate-800 text-slate-100 min-h-[44px] flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#C6A15B]" />
                    <span>Insights &amp; Resources</span>
                  </span>
                  <span className="text-slate-500 text-xs">&rarr;</span>
                </Link>

                <Link
                  href="/contact-us"
                  onClick={handleLinkClick}
                  className="py-2.5 px-3 rounded-lg hover:bg-slate-800 text-slate-100 min-h-[44px] flex items-center justify-between"
                >
                  <span>Contact Us</span>
                  <span className="text-slate-500 text-xs">&rarr;</span>
                </Link>
              </nav>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 pt-3 border-t border-slate-800">
                <a
                  href="tel:0720934476"
                  onClick={handleLinkClick}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg bg-gradient-to-r from-[#C6A15B] to-[#dfc285] text-[#0B1730] font-bold text-sm shadow-md min-h-[48px]"
                >
                  <Phone className="w-4 h-4 text-[#0B1730]" />
                  <span>CALL NOW: 0720 934 476</span>
                </a>
                
                <a
                  href="https://wa.me/254720934476?text=Hello%20Makuri%20Auctioneers,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-emerald-600 text-white font-medium text-sm border border-emerald-500 min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry Desk</span>
                </a>

                <a 
                  href="mailto:info@makuriauctioneers.co.ke" 
                  onClick={handleLinkClick}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800/80 text-slate-200 text-xs border border-slate-700 min-h-[44px]"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>info@makuriauctioneers.co.ke</span>
                </a>
              </div>
            </div>

            {/* Mobile Drawer Branch Details */}
            <div className="mt-6 text-xs text-slate-400 space-y-2 border-t border-slate-800/80 pt-4 pb-16">
              <p className="font-bold text-white text-xs uppercase tracking-wider text-[#C6A15B]">
                Branch Offices:
              </p>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px]">
                <p className="font-semibold text-white">MOMBASA (HQ): NSSF Building, 7th Flr, Door 733</p>
                <p className="font-semibold text-slate-300 mt-1">NAIROBI: All Saints Cathedral Office</p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
