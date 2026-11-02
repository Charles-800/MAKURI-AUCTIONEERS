'use client';

import React, { useState } from 'react';
import { FileCheck, Shield, ArrowRight } from 'lucide-react';

interface ReadinessGuideProps {
  onSelectServiceForInquiry?: (serviceName: string, subjectText: string) => void;
}

export default function ServiceReadinessGuide({ onSelectServiceForInquiry }: ReadinessGuideProps) {
  const [activeTab, setActiveTab] = useState<'auction' | 'courtOrders' | 'securities' | 'repo' | 'investigation' | 'realestate'>('auction');

  const readinessInfo = {
    auction: {
      title: 'Auctioneering & Asset Disposal Checklist',
      desc: 'Requirements for instructing Makuri Auctioneers on public asset sales or distress execution.',
      documents: [
        'Formal Letter of Instruction detailing principal details and scope of sale',
        'Certified copy of court decree, warrant of attachment, or distress notice',
        'Asset valuation certificate or agreed reserve pricing guidelines',
        'Proof of ownership / title deeds / logbooks for mortgaged assets',
        'Statutory advertisement approval & gazette timeline schedule',
      ],
      turnaround: 'Immediate notice formulation within 24–48 hours upon verification of court/statutory documents.',
      serviceName: 'Auctioneering Services',
    },
    courtOrders: {
      title: 'Execution of Court Orders Checklist',
      desc: 'Prerequisites for instructing our licensed auctioneers on court warrants, eviction decrees, or distress execution.',
      documents: [
        'Original or Certified Extract of Court Decree / Judgment from High Court or Magistrates Court',
        'Valid Warrant of Attachment and Sale issued under Order 22 of the Civil Procedure Rules',
        'Formal Warrant of Eviction or Delivery Order signed by the designated Judicial Officer',
        'Letter of Instruction from Advocate on Record specifying debtor and asset physical location',
        'Police notification escort requisition for secure, peaceful field enforcement',
      ],
      turnaround: 'Proclamation or execution staging mobilized within 24–48 hours of warrant verification.',
      serviceName: 'Execution of Court Orders',
    },
    securities: {
      title: 'Realization of Securities Checklist',
      desc: 'Statutory compliance requirements for commercial banks, SACCOs, and financiers liquidating collateral.',
      documents: [
        'Certified Registered Legal Charge / Mortgage / Chattel Security Agreement',
        'Copy of Statutory 90-Day Notice of Default served under Section 90 of the Land Act 2012',
        'Copy of 40-Day Notice of Intention to Sell served upon the chargor under Section 96',
        'Recent Official Search Certificate confirming encumbrance and title ownership status',
        'Accredited Professional Valuation Report establishing current Forced Sale Value (reserve)',
      ],
      turnaround: 'Statutory 14-day national newspaper advertisement scheduled upon expiry of redemption notices.',
      serviceName: 'Realization of Securities',
    },
    repo: {
      title: 'Repossession & Collateral Recovery Checklist',
      desc: 'Mandatory documentation for securing movable assets, commercial fleets, or heavy equipment.',
      documents: [
        'Credit/Lease Agreement containing explicit chattel mortgage or repossession covenant',
        'Copy of 90-day default and statutory notice issued to the borrower under Kenyan law',
        'Original or certified copy of motor vehicle logbook / equipment serial schedule',
        'Last known physical coordinates, tracking signals, or vehicle sightings',
        'Formal letter authorizing Makuri Auctioneers as designated repossession agents',
      ],
      turnaround: 'Field tracking and staging mobilization begins immediately upon warrant receipt and police notification.',
      serviceName: 'Repossession & Asset Recovery',
    },
    investigation: {
      title: 'Private Investigation & Asset Tracing Checklist',
      desc: 'Prerequisites for commissioning confidential background checks, fraud probes, or asset searches.',
      documents: [
        'Legal authorization or legitimate interest declaration (e.g. post-judgment debt search)',
        'Subject details: Full personal names, national ID, company registration numbers, or pin',
        'Known historical addresses, banking affiliations, or disputed contracts',
        'Summary of suspected financial diversion, hidden transfers, or corporate fraud',
      ],
      turnaround: 'Preliminary asset verification dossier delivered within 3–5 business days.',
      serviceName: 'Private Investigations',
    },
    realestate: {
      title: 'Real Estate Asset Management Checklist',
      desc: 'Required records for onboarding commercial or residential property management portfolios in Mombasa or Nairobi.',
      documents: [
        'Copy of Title Deed (Freehold or Leasehold) and official survey map',
        'Current tenant rent roll, occupancy status, and signed tenancy agreements',
        'Utility account numbers (Kenya Power, Mombasa Water/MAWASCO, Nairobi Water, City land rates)',
        'Signed Property Management Mandate Agreement',
      ],
      turnaround: 'Comprehensive property condition inspection and rent ledger setup within 72 hours.',
      serviceName: 'Real Estate Management',
    },
  };

  const current = readinessInfo[activeTab];

  const handleStartInquiry = () => {
    if (onSelectServiceForInquiry) {
      onSelectServiceForInquiry(current.serviceName, `Instruction Inquiry: ${current.title}`);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#163E72] mb-2">
            <span className="w-6 h-[2px] bg-[#C6A15B]"></span>
            Client Advisory &amp; Statutory Preparation
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3.5xl font-bold text-[#0B1730] mb-3 text-balance">
            Service Instruction &amp; Documentation Guide
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Ensure your matter proceeds without statutory hurdles. Review the required legal documentation for your specific instruction below.
          </p>
        </div>

        {/* Tab Buttons (Touch Friendly & Horizontally Scrollable on Mobile) */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 mb-8 border-b border-slate-200 pb-3 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          <button
            onClick={() => setActiveTab('auction')}
            className={`min-h-[44px] px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'auction'
                ? 'bg-[#0B1730] text-[#C6A15B] shadow-sm'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            Public Auctions
          </button>
          <button
            onClick={() => setActiveTab('courtOrders')}
            className={`min-h-[44px] px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'courtOrders'
                ? 'bg-[#0B1730] text-[#C6A15B] shadow-sm'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            Execution of Court Orders
          </button>
          <button
            onClick={() => setActiveTab('securities')}
            className={`min-h-[44px] px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'securities'
                ? 'bg-[#0B1730] text-[#C6A15B] shadow-sm'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            Realization of Securities
          </button>
          <button
            onClick={() => setActiveTab('repo')}
            className={`min-h-[44px] px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'repo'
                ? 'bg-[#0B1730] text-[#C6A15B] shadow-sm'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            Repossession &amp; Recovery
          </button>
          <button
            onClick={() => setActiveTab('investigation')}
            className={`min-h-[44px] px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'investigation'
                ? 'bg-[#0B1730] text-[#C6A15B] shadow-sm'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            Private Investigations
          </button>
          <button
            onClick={() => setActiveTab('realestate')}
            className={`min-h-[44px] px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'realestate'
                ? 'bg-[#0B1730] text-[#C6A15B] shadow-sm'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            Real Estate Management
          </button>
        </div>

        {/* Tab Content Card */}
        <div className="bg-[#F4F6F9] rounded-xl p-5 sm:p-8 border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-[#0B1730] font-serif-heading">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              {current.desc}
            </p>

            <div className="pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Mandatory Documentation Checklist:
              </h4>
              <ul className="space-y-2.5">
                {current.documents.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                    <FileCheck className="w-4 h-4 text-[#C6A15B] mt-0.5 shrink-0" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200/80 text-xs text-slate-500 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#163E72] shrink-0" />
              <span><strong>Operational Speed:</strong> {current.turnaround}</span>
            </div>
          </div>

          <div className="lg:col-span-4 bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#163E72] block mb-2">
                Have Your Files Ready?
              </span>
              <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                Connect directly with our senior bailiffs and auction managers. We can review your paperwork immediately at our Mombasa NSSF Building headquarters or Nairobi All Saints Cathedral office.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleStartInquiry}
                className="w-full min-h-[44px] py-3 px-4 rounded bg-[#0B1730] hover:bg-[#163E72] text-[#C6A15B] hover:text-white font-bold text-xs tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>Instruct Makuri Auctioneers</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:0720934476"
                className="w-full min-h-[44px] py-2.5 px-4 rounded border border-slate-300 hover:bg-slate-50 text-[#0B1730] font-semibold text-xs tracking-wide text-center flex items-center justify-center transition-colors"
              >
                Direct Call: 0720 934 476
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
