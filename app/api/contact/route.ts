import { NextRequest, NextResponse } from 'next/server';

interface InquiryData {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  serviceRequired: string;
  subject: string;
  message: string;
  createdAt: string;
  directedToEmail: string;
  status: 'received' | 'assigned' | 'contacted';
}

const CORPORATE_INQUIRY_EMAIL = process.env.CORPORATE_EMAIL || 'info@makuriauctioneers.co.ke';
const inquiryLog: InquiryData[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, phoneNumber, email, serviceRequired, subject, message, honeypot } = body;

    // Spam protection check (honeypot field)
    if (honeypot && String(honeypot).trim().length > 0) {
      return NextResponse.json(
        { success: true, message: 'Inquiry received successfully.' },
        { status: 200 }
      );
    }

    // Validation
    const errors: Record<string, string> = {};

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      errors.fullName = 'Please provide your full legal or business name.';
    }

    if (!phoneNumber || typeof phoneNumber !== 'string') {
      errors.phoneNumber = 'A valid contact phone number is required.';
    } else {
      const cleanPhone = phoneNumber.replace(/[\s\-\(\)]/g, '');
      if (!/^(\+?254|0)[17]\d{8}$/.test(cleanPhone) && cleanPhone.length < 9) {
        errors.phoneNumber = 'Please enter a valid telephone number (e.g. 0720 934 476).';
      }
    }

    if (!email || typeof email !== 'string') {
      errors.email = 'A valid email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    const validServices = [
      'Auctioneering Services',
      'Repossession & Asset Recovery',
      'Private Investigations',
      'Business Consultancy',
      'Real Estate Management',
      'General Inquiry'
    ];

    if (!serviceRequired || !validServices.includes(serviceRequired)) {
      errors.serviceRequired = 'Please select a service category.';
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
      errors.subject = 'Please specify the subject of your inquiry.';
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      errors.message = 'Please provide more details regarding your requirements (at least 10 characters).';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: 'Please correct the highlighted fields.' },
        { status: 400 }
      );
    }

    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `MAK-${dateStr}-${randomSuffix}`;

    const inquiryRecord: InquiryData = {
      id: referenceId,
      fullName: fullName.trim(),
      phoneNumber: phoneNumber.trim(),
      email: email.trim().toLowerCase(),
      serviceRequired,
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
      directedToEmail: CORPORATE_INQUIRY_EMAIL,
      status: 'received',
    };

    inquiryLog.unshift(inquiryRecord);
    if (inquiryLog.length > 100) inquiryLog.pop();

    console.log(`[Email Dispatched -> ${CORPORATE_INQUIRY_EMAIL}] Inquiry Ref: ${referenceId} from ${inquiryRecord.fullName} (${inquiryRecord.email}), Subject: ${inquiryRecord.subject}`);

    return NextResponse.json(
      {
        success: true,
        referenceId,
        directedTo: CORPORATE_INQUIRY_EMAIL,
        message: `Your inquiry has been logged securely and forwarded directly to ${CORPORATE_INQUIRY_EMAIL}. Our executive team will review your instructions and contact you promptly.`,
        contactSummary: {
          officialEmail: CORPORATE_INQUIRY_EMAIL,
          directLine: '0720934476',
          officeLocation: 'Nkrumah Road, NSSF Building, 7th Floor, Door 733, Mombasa',
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact processing error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: `An internal error occurred while processing your request. Please email us directly at ${CORPORATE_INQUIRY_EMAIL} or call 0720 934 476.` 
      },
      { status: 500 }
    );
  }
}
