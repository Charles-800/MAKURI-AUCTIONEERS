'use client';

import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from 'lucide-react';

interface ServiceInquiryFormProps {
  defaultService?: string;
  defaultSubject?: string;
  title?: string;
  subtitle?: string;
}

export default function ServiceInquiryForm({
  defaultService = 'Auctioneering Services',
  defaultSubject = '',
  title = 'Request Immediate Professional Services',
  subtitle = 'Provide instruction details below for swift evaluation by our Mombasa and Nairobi case managers.',
}: ServiceInquiryFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    serviceRequired: defaultService,
    subject: defaultSubject,
    message: '',
    honeypot: '',
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState<null | { referenceId: string; message: string }>(null);
  const [generalError, setGeneralError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        if (result.errors) {
          setFieldErrors(result.errors);
        }
        setGeneralError(result.message || 'Please verify your entries and try again.');
      } else {
        setSuccess({
          referenceId: result.referenceId,
          message: result.message,
        });
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          serviceRequired: defaultService,
          subject: defaultSubject,
          message: '',
          honeypot: '',
        });
      }
    } catch {
      setGeneralError('Network connection error. Please call our urgent desk directly at 0720 934 476.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inquiry-form" className="py-12 sm:py-16 bg-[#0B1730] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163E72] text-[#C6A15B] text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Strict Client Confidentiality Assured</span>
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-3.5xl font-bold text-white">
            {title}
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          {success ? (
            <div className="p-6 rounded-xl bg-emerald-950/80 border border-emerald-500/60 text-emerald-100 text-center animate-in fade-in">
              <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-2">Inquiry Formally Registered</h3>
              <p className="text-xs sm:text-sm text-emerald-200 mb-4">{success.message}</p>
              <div className="p-2.5 bg-black/40 rounded-lg inline-block text-xs font-mono font-bold text-[#C6A15B]">
                Reference ID: {success.referenceId}
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs">
                <a href="tel:0720934476" className="text-white hover:text-[#C6A15B] underline">
                  Call Desk: 0720 934 476
                </a>
                <span>&bull;</span>
                <a href="mailto:info@makuriauctioneers.co.ke" className="text-white hover:text-[#C6A15B] underline">
                  info@makuriauctioneers.co.ke
                </a>
              </div>
              <button
                type="button"
                onClick={() => setSuccess(null)}
                className="mt-6 text-xs text-slate-400 underline hover:text-white"
              >
                Submit another instruction
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="honeypot"
                  tabIndex={-1}
                  value={formData.honeypot}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              {generalError && (
                <div className="p-3.5 rounded-lg bg-red-950/80 border border-red-500/60 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{generalError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name / Institution <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Samuel Kariuki / Equity Partner"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] outline-none"
                  />
                  {fieldErrors.fullName && <p className="text-xs text-red-400 mt-1">{fieldErrors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="e.g. 0720 934 476"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] outline-none"
                  />
                  {fieldErrors.phoneNumber && <p className="text-xs text-red-400 mt-1">{fieldErrors.phoneNumber}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Official Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. name@company.co.ke"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] outline-none"
                  />
                  {fieldErrors.email && <p className="text-xs text-red-400 mt-1">{fieldErrors.email}</p>}
                </div>

                <div>
                  <label htmlFor="serviceRequired" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Select Practice Area <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="serviceRequired"
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800/90 border border-slate-700 text-white text-sm focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] outline-none"
                  >
                    <option value="Auctioneering Services">Auctioneering Services</option>
                    <option value="Repossession & Asset Recovery">Repossession &amp; Asset Recovery</option>
                    <option value="Private Investigations">Private Investigations</option>
                    <option value="Business Consultancy">Business Consultancy</option>
                    <option value="Real Estate Management">Real Estate Management</option>
                    <option value="General Inquiry">General Legal Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Matter Description / Asset Subject <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Commercial property auction in Mombasa or vehicle recovery in Nairobi"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] outline-none"
                />
                {fieldErrors.subject && <p className="text-xs text-red-400 mt-1">{fieldErrors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Case Details &amp; Location <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe the asset type, location, timeline, court order or loan default status..."
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:border-[#C6A15B] focus:ring-1 focus:ring-[#C6A15B] outline-none"
                />
                {fieldErrors.message && <p className="text-xs text-red-400 mt-1">{fieldErrors.message}</p>}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#C6A15B] to-[#dfc285] hover:from-[#b5914a] hover:to-[#C6A15B] text-[#0B1730] font-bold text-sm tracking-wide shadow-md transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#0B1730]" />
                      <span>Submitting Brief...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#0B1730]" />
                      <span>SUBMIT CONFIDENTIAL INSTRUCTION</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span>Direct phone line:</span>
                  <a href="tel:0720934476" className="text-[#C6A15B] font-bold hover:underline">
                    0720 934 476
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
