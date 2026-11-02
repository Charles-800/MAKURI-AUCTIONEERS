'use client';

import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock, Send, CheckCircle2, AlertCircle, Loader2, Mail, Building2, Navigation } from 'lucide-react';

interface ContactSectionProps {
  preselectedService?: string;
  preselectedSubject?: string;
}

export default function ContactSection({ preselectedService, preselectedSubject }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    serviceRequired: preselectedService || 'Auctioneering Services',
    subject: preselectedSubject || '',
    message: '',
    honeypot: '', // anti-spam bot trap
  });

  const [activeBranchMap, setActiveBranchMap] = useState<'mombasa' | 'nairobi'>('mombasa');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<null | {
    referenceId: string;
    message: string;
  }>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
    setGeneralError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setGeneralError(null);
    setFieldErrors({});

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        if (result.errors) {
          setFieldErrors(result.errors);
        }
        setGeneralError(result.message || 'Please check your inputs and try again.');
      } else {
        setSubmissionSuccess({
          referenceId: result.referenceId,
          message: result.message,
        });
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          serviceRequired: 'Auctioneering Services',
          subject: '',
          message: '',
          honeypot: '',
        });
      }
    } catch {
      setGeneralError('Network error connecting to our server. Please call us directly at 0720 934 476.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    'Auctioneering Services',
    'Execution of Court Orders',
    'Realization of Securities',
    'Repossession & Asset Recovery',
    'Private Investigations',
    'Business Consultancy',
    'Real Estate Management',
    'General Inquiry',
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-[#F4F6F9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#163E72] mb-3">
            <span className="w-6 h-[2px] bg-[#C6A15B]"></span>
            Dual Branch Contact &amp; Inquiries
            <span className="w-6 h-[2px] bg-[#C6A15B]"></span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3.5xl lg:text-4.5xl font-bold text-[#0B1730] mb-4 text-balance">
            Consult With Our Executive Team
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
            Reach out directly to our licensed auctioneers and investigators across our <strong>Mombasa Headquarters</strong> and <strong>Nairobi Branch</strong>, or submit your instruction below for swift handling.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT SIDE: DUAL BRANCH INFORMATION & INTERACTIVE MAP (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Dark Card: Contact Details */}
            <div className="bg-[#0B1730] text-white rounded-xl p-6 sm:p-8 shadow-lg border border-slate-800">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white">
                  Makuri Auctioneers
                </h3>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-[#163E72] text-[#C6A15B] uppercase tracking-wider">
                  Mombasa &bull; Nairobi
                </span>
              </div>

              <div className="space-y-6 text-sm">
                
                {/* Branch 1: Mombasa HQ */}
                <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-[#C6A15B]">
                    <Building2 className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Mombasa (Headquarters)
                    </span>
                  </div>
                  <p className="text-white text-xs sm:text-sm font-medium leading-relaxed pl-6">
                    Nkrumah Road, NSSF Building,<br />
                    7th Floor, Door 733,<br />
                    Mombasa, Kenya.
                  </p>
                </div>

                {/* Branch 2: Nairobi Branch */}
                <div className="p-4 rounded-lg bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-[#C6A15B]">
                    <Building2 className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Nairobi Branch Office
                    </span>
                  </div>
                  <p className="text-white text-xs sm:text-sm font-medium leading-relaxed pl-6">
                    All Saints Cathedral Office,<br />
                    Nairobi, Kenya.
                  </p>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3 pt-2">
                  <div className="w-10 h-10 rounded-lg bg-[#163E72] text-[#C6A15B] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                      Direct Telephone Line
                    </span>
                    <a
                      href="tel:0720934476"
                      className="text-base sm:text-lg font-bold text-[#C6A15B] hover:text-[#dfc285] transition-colors inline-block tracking-wide min-h-[44px] flex items-center"
                    >
                      0720 934 476
                    </a>
                    <p className="text-[11px] text-slate-400">
                      Central desk for both Mombasa &amp; Nairobi matters
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#163E72] text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                      Instant WhatsApp Messaging
                    </span>
                    <a
                      href="https://wa.me/254720934476?text=Hello%20Makuri%20Auctioneers,%20I%20would%20like%20to%20inquire%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center min-h-[44px]"
                    >
                      Chat on WhatsApp (0720 934 476) &rarr;
                    </a>
                  </div>
                </div>

                {/* Official Corporate Email */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#163E72] text-[#C6A15B] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                      Official Email Address
                    </span>
                    <a
                      href="mailto:info@makuriauctioneers.co.ke"
                      className="text-xs sm:text-sm font-bold text-white hover:text-[#C6A15B] transition-colors inline-flex items-center tracking-wide break-all min-h-[44px]"
                    >
                      info@makuriauctioneers.co.ke
                    </a>
                    <p className="text-[11px] text-slate-400">
                      All formal instructions &amp; electronic briefs directed here
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-[#163E72] text-[#C6A15B] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                      Business Operating Hours
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Monday &ndash; Friday: 8:00 AM &ndash; 5:00 PM<br />
                      Saturday: 8:30 AM &ndash; 1:00 PM<br />
                      Sunday &amp; Public Holidays: Closed
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive Dual-Branch Google Maps Embed */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <div className="p-3 bg-slate-100/90 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#0B1730] uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
                  Branch Location Map
                </span>
                
                {/* Map Branch Switcher Tabs */}
                <div className="inline-flex rounded-lg bg-slate-200/90 p-0.5 text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setActiveBranchMap('mombasa')}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      activeBranchMap === 'mombasa'
                        ? 'bg-[#0B1730] text-[#C6A15B] font-bold shadow-xs'
                        : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    Mombasa HQ
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveBranchMap('nairobi')}
                    className={`px-3 py-1.5 rounded-md transition-colors ${
                      activeBranchMap === 'nairobi'
                        ? 'bg-[#0B1730] text-[#C6A15B] font-bold shadow-xs'
                        : 'text-slate-700 hover:text-slate-900'
                    }`}
                  >
                    Nairobi Office
                  </button>
                </div>
              </div>

              {/* Map View */}
              <div className="w-full h-64 sm:h-72 bg-slate-200 relative">
                {activeBranchMap === 'mombasa' ? (
                  <iframe
                    title="Makuri Auctioneers Mombasa HQ at NSSF Building"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://maps.google.com/maps?q=NSSF%20Building,%20Nkrumah%20Road,%20Mombasa,%20Kenya&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  />
                ) : (
                  <iframe
                    title="Makuri Auctioneers Nairobi Branch at All Saints Cathedral"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://maps.google.com/maps?q=All%20Saints%20Cathedral,%20Kenyatta%20Avenue,%20Nairobi,%20Kenya&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  />
                )}
              </div>

              <div className="p-3 bg-white text-xs flex items-center justify-between text-slate-600">
                <span>
                  {activeBranchMap === 'mombasa'
                    ? 'NSSF Building, 7th Flr, Door 733, Nkrumah Rd, Mombasa'
                    : 'All Saints Cathedral Office, Nairobi'}
                </span>
                <a
                  href={
                    activeBranchMap === 'mombasa'
                      ? 'https://maps.google.com/?q=NSSF+Building+Nkrumah+Road+Mombasa'
                      : 'https://maps.google.com/?q=All+Saints+Cathedral+Kenyatta+Avenue+Nairobi'
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#163E72] hover:text-[#C6A15B] flex items-center gap-1 shrink-0 ml-2"
                >
                  <Navigation className="w-3 h-3 text-[#C6A15B]" />
                  <span>Navigate</span>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: INQUIRY FORM (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm">
            <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0B1730] mb-2">
              Service Inquiry &amp; Consultation Request
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6 sm:mb-8">
              Complete the verified form below. All corporate briefs and asset inquiries are handled with strict commercial confidentiality.
            </p>

            {/* Submission Feedback Message */}
            {submissionSuccess ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 mb-6 animate-in fade-in">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-emerald-900 mb-1">
                      Inquiry Successfully Received
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed mb-4">
                      {submissionSuccess.message}
                    </p>
                    <div className="p-3 bg-white rounded-lg border border-emerald-200 inline-block text-xs font-mono font-bold text-emerald-900">
                      Tracking Reference ID: {submissionSuccess.referenceId}
                    </div>
                    <div className="mt-4 pt-3 border-t border-emerald-200 text-xs text-emerald-800 flex flex-wrap items-center gap-3">
                      <span>Routed directly to:</span>
                      <a href="mailto:info@makuriauctioneers.co.ke" className="font-bold underline text-emerald-950">
                        info@makuriauctioneers.co.ke
                      </a>
                      <span className="text-emerald-400">&bull;</span>
                      <span>Urgent desk:</span>
                      <a href="tel:0720934476" className="font-bold underline text-emerald-950">
                        0720 934 476
                      </a>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmissionSuccess(null)}
                  className="mt-6 text-xs font-semibold text-emerald-800 underline hover:text-emerald-950 min-h-[44px] flex items-center"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : null}

            {generalError ? (
              <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2.5 mb-6">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <span>{generalError}</span>
              </div>
            ) : null}

            {!submissionSuccess && (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
                {/* Honeypot field (hidden from real users, traps bots) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="honeypot">Leave this blank</label>
                  <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    tabIndex={-1}
                    value={formData.honeypot}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                {/* Name & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label 
                      htmlFor="fullName" 
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Full Name / Entity Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. John Mwangi or Apex Capital Ltd"
                      className={`w-full min-h-[48px] px-4 py-3 rounded-lg border text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                        fieldErrors.fullName 
                          ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                          : 'border-slate-300 focus:border-[#C6A15B] focus:ring-[#C6A15B]/20 bg-white'
                      }`}
                    />
                    {fieldErrors.fullName && (
                      <p className="text-xs text-red-600 mt-1">{fieldErrors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label 
                      htmlFor="phoneNumber" 
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      required
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="e.g. 0720 934 476"
                      className={`w-full min-h-[48px] px-4 py-3 rounded-lg border text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                        fieldErrors.phoneNumber 
                          ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                          : 'border-slate-300 focus:border-[#C6A15B] focus:ring-[#C6A15B]/20 bg-white'
                      }`}
                    />
                    {fieldErrors.phoneNumber && (
                      <p className="text-xs text-red-600 mt-1">{fieldErrors.phoneNumber}</p>
                    )}
                  </div>
                </div>

                {/* Email Address & Service Required Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. contact@domain.co.ke"
                      className={`w-full min-h-[48px] px-4 py-3 rounded-lg border text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                        fieldErrors.email 
                          ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                          : 'border-slate-300 focus:border-[#C6A15B] focus:ring-[#C6A15B]/20 bg-white'
                      }`}
                    />
                    {fieldErrors.email && (
                      <p className="text-xs text-red-600 mt-1">{fieldErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label 
                      htmlFor="serviceRequired" 
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                    >
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="serviceRequired"
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleChange}
                      className="w-full min-h-[48px] px-4 py-3 rounded-lg border border-slate-300 text-base sm:text-sm text-slate-900 focus:border-[#C6A15B] focus:ring-2 focus:ring-[#C6A15B]/20 bg-white"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {fieldErrors.serviceRequired && (
                      <p className="text-xs text-red-600 mt-1">{fieldErrors.serviceRequired}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label 
                    htmlFor="subject" 
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                  >
                    Subject / Matter Reference <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Asset Recovery for Commercial Fleet or Distress for Rent Consultation"
                    className={`w-full min-h-[48px] px-4 py-3 rounded-lg border text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                      fieldErrors.subject 
                        ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                        : 'border-slate-300 focus:border-[#C6A15B] focus:ring-[#C6A15B]/20 bg-white'
                    }`}
                  />
                  {fieldErrors.subject && (
                    <p className="text-xs text-red-600 mt-1">{fieldErrors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
                  >
                    Detailed Requirements / Scenario <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please summarize your requirements, asset location, timing expectations, and any relevant details..."
                    className={`w-full px-4 py-3 rounded-lg border text-base sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-colors ${
                      fieldErrors.message 
                        ? 'border-red-400 focus:ring-red-300 bg-red-50/20' 
                        : 'border-slate-300 focus:border-[#C6A15B] focus:ring-[#C6A15B]/20 bg-white'
                    }`}
                  />
                  {fieldErrors.message && (
                    <p className="text-xs text-red-600 mt-1">{fieldErrors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-md bg-[#0B1730] hover:bg-[#163E72] text-[#C6A15B] hover:text-white font-bold text-sm tracking-wide shadow-md transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#C6A15B]" />
                      <span>LOGGING INQUIRY...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#C6A15B]" />
                      <span>SEND INQUIRY</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-slate-500 pt-2 leading-relaxed">
                  * By submitting, your information is routed directly to <strong>info@makuriauctioneers.co.ke</strong> and monitored by our leadership desks in Mombasa &amp; Nairobi.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
