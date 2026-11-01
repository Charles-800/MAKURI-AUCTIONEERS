'use client';

import React from 'react';
import { X, ShieldCheck, Scale, FileText } from 'lucide-react';

interface LegalModalsProps {
  privacyOpen: boolean;
  termsOpen: boolean;
  onClose: () => void;
}

export default function LegalModals({ privacyOpen, termsOpen, onClose }: LegalModalsProps) {
  if (!privacyOpen && !termsOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-[#0B1730] text-white p-6 sm:p-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#163E72] text-[#C6A15B] flex items-center justify-center">
              {privacyOpen ? <ShieldCheck className="w-5 h-5" /> : <Scale className="w-5 h-5" />}
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">
                Makuri Auctioneers · Regulatory Governance
              </span>
              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white">
                {privacyOpen ? 'Privacy Policy & Data Protection' : 'Terms of Service & Engagement'}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-5">
          {privacyOpen ? (
            <>
              <p>
                <strong>Effective Date:</strong> January 2026<br />
                <strong>Entity:</strong> Makuri Auctioneers, Nkrumah Road, NSSF Building, 7th Floor, Door 733, Mombasa, Kenya.
              </p>

              <div>
                <h4 className="font-bold text-[#0B1730] text-sm mb-1">1. Statutory Commitment to Privacy</h4>
                <p>
                  Makuri Auctioneers is fully committed to upholding the Data Protection Act (No. 24 of 2019) of Kenya. In conducting auctioneering, repossession, private investigations, business consultancy, and real estate management, we collect personal and corporate data strictly for lawful, verifiable business purposes.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#0B1730] text-sm mb-1">2. Information We Collect</h4>
                <p>
                  Information submitted through our website or direct consultations—including full legal names, national identification or passport numbers, contact numbers, email addresses, vehicle registration logs, property titles, and judicial case references—is utilized solely to evaluate service viability and execute authorized mandates.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#0B1730] text-sm mb-1">3. Confidentiality of Private Investigations &amp; Asset Tracing</h4>
                <p>
                  All intelligence gathered during corporate investigations and due diligence is held in strict commercial confidence and released exclusively to the instructing principal, advocate of record, or competent judicial authority as required by law.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#0B1730] text-sm mb-1">4. Data Security &amp; Retention</h4>
                <p>
                  Data is retained only for the duration required by statutory retention mandates (including Auctioneers Act records and tax accounting requirements) and is protected by administrative, physical, and technological safeguards.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#0B1730] text-sm mb-1">5. Contact Data Controller</h4>
                <p>
                  For any privacy inquiries or to review retained data related to your matter, contact our leadership in writing at our Mombasa headquarters (NSSF Building, 7th Floor, Door 733, Mombasa) or our Nairobi branch (All Saints Cathedral Office), email us at <a href="mailto:info@makuriauctioneers.co.ke" className="underline font-semibold text-[#163E72]">info@makuriauctioneers.co.ke</a>, or call 0720 934 476.
                </p>
              </div>
            </>
          ) : (
            <>
              <p>
                <strong>Effective Date:</strong> January 2026<br />
                <strong>Entity:</strong> Makuri Auctioneers, Mombasa, Kenya.
              </p>

              <div>
                <h4 className="font-bold text-[#0B1730] text-sm mb-1">1. Statutory Licensing &amp; Legal Capacity</h4>
                <p>
                  Makuri Auctioneers executes auction sales, distressed asset recoveries, and collateral enforcement pursuant to the Auctioneers Act (Cap. 526), the Civil Procedure Act, the Movable Property Security Rights Act, and relevant statutory charge provisions of Kenyan law.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#0B1730] text-sm mb-1">2. Instruction &amp; Service Mandate</h4>
                <p>
                  No enforcement or recovery action commences until lawful instruction documents (warrants, decrees, letters of instruction, and statutory notices) are verified and formally accepted by our licensed officers.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#0B1730] text-sm mb-1">3. Public Auction Bidding Conditions</h4>
                <p>
                  All public auctions announced by Makuri Auctioneers are subject to reserve prices and the Auctioneers Rules. Bidders must register prior to bidding, present authentic identification, and remit the stipulated banker’s cheque deposit upon the fall of the hammer. Title transfer occurs strictly after final payment clearance.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#0B1730] text-sm mb-1">4. Disclaimer of Website Content</h4>
                <p>
                  Information published on this website regarding auction lots and legal procedures is provided for informational and preliminary notice purposes. Prospective purchasers are obligated to independently inspect assets during designated viewing windows.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#0B1730] text-sm mb-1">5. Governing Law</h4>
                <p>
                  All contracts, disputes, and engagements with Makuri Auctioneers are governed exclusively by the laws of the Republic of Kenya, and subject to the jurisdiction of Kenyan courts.
                </p>
              </div>
            </>
          )}

          <div className="pt-4 border-t border-slate-200 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded bg-[#0B1730] hover:bg-[#163E72] text-[#C6A15B] hover:text-white font-semibold text-xs tracking-wider transition-colors"
            >
              I Understand &amp; Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
