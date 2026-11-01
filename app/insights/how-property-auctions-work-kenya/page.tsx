import type { Metadata } from 'next';
import ArticleShell from '@/components/ArticleShell';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How Property Auctions Work in Kenya | Land Act 2012 Guide',
  description: 'Step-by-step guide on how property auctions work in Kenya under the Land Act 2012. 90-day notices, 40-day intention, 75% reserve price rule & conveyancing.',
  keywords: [
    'How property auctions work in Kenya',
    'Land Act 2012 property auctions',
    '75 percent reserve price rule Kenya',
    'Statutory power of sale Kenya',
    'Real estate auctions Mombasa Nairobi',
    'Makuri Auctioneers'
  ],
  alternates: {
    canonical: 'https://makuri-auctioneers.co.ke/insights/how-property-auctions-work-kenya',
  },
};

export default function ArticleFive() {
  const takeaways = [
    'Property auctions under a mortgage or legal charge are governed by Section 90 to 98 of the Land Act (No. 6 of 2012).',
    'A chargee bank must issue a 90-day statutory notice of default followed by a 40-day notice of intention to sell.',
    'Under Section 97 of the Land Act, the chargee has a duty of care to obtain the best price reasonably obtainable, and the reserve price cannot be less than 75% of market value.',
    'A mandatory 14-day newspaper advertisement must precede the public auction.',
    'Successful bidders pay 25% upon the fall of the gavel, with the 75% balance settled during formal conveyancing completion.',
  ];

  const toc = [
    { title: 'The Statutory Power of Sale Under the Land Act (2012)', id: 'statutory-power-sale' },
    { title: 'Mandatory Timelines: The 90-Day & 40-Day Notices', id: 'mandatory-timelines' },
    { title: 'The 75% Statutory Reserve Price Valuation Rule', id: 'reserve-price-rule' },
    { title: 'Public Gazettement & National Newspaper Notices', id: 'newspaper-notices' },
    { title: 'Bidding Day Protocols, Memorandum of Sale & Conveyancing', id: 'bidding-conveyancing' },
  ];

  return (
    <ArticleShell
      slug="how-property-auctions-work-kenya"
      title="How Property and Real Estate Auctions Work in Kenya: Land Act Compliance"
      excerpt="From default notifications and 40-day notices of sale to public gazettement and conveyancing transfer procedures."
      category="Real Estate Auctions"
      date="October 2026"
      readTime="8 min read"
      author="Property Advisory Desk"
      keyTakeaways={takeaways}
      tableOfContents={toc}
    >
      <h2 id="statutory-power-sale" className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0B1730]">
        1. The Statutory Power of Sale Under the Land Act (2012)
      </h2>
      <p>
        Real estate auctions in Kenya are among the most closely scrutinized legal procedures in commercial practice. When a borrower defaults on a property mortgage, the lender (chargee) cannot simply seize the title deed and dispose of the property. The lender must exercise its <strong>statutory power of sale</strong> in strict compliance with the <strong>Land Act (No. 6 of 2012)</strong>.
      </p>
      <p>
        Failure to follow statutory provisions meticulously exposes the sale to High Court injunctions, declarations of nullity, and substantial liability for damages. At <Link href="/auctioneering-services-kenya" className="text-[#163E72] font-semibold underline">Makuri Auctioneers</Link>, our real estate auction unit coordinates with instructing advocates to guarantee absolute statutory compliance.
      </p>

      <h2 id="mandatory-timelines" className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0B1730]">
        2. Mandatory Timelines: The 90-Day &amp; 40-Day Notices
      </h2>
      <p>
        The Land Act establishes rigid procedural prerequisites that must be satisfied sequentially before an auctioneer is instructed:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <strong>Section 90 Notice (90 Days):</strong> Once default persists for at least one month, the chargee must serve a formal 90-day statutory notice requiring the chargor to rectify default.
        </li>
        <li>
          <strong>Section 96 Notice of Intention to Sell (40 Days):</strong> If default continues after 90 days, the lender must serve a 40-day notice of intention to sell upon the chargor, guarantors, spouses where matrimonial property is concerned, and any prior chargees.
        </li>
        <li>
          <strong>Auctioneer&apos;s 45-Day Redemption Notice:</strong> Under the Auctioneers Rules, upon expiry of the bank&apos;s notices, the licensed auctioneer issues an additional notice giving the debtor a final window to redeem the property prior to advertisement.
        </li>
      </ol>

      <h2 id="reserve-price-rule" className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0B1730]">
        3. The 75% Statutory Reserve Price Valuation Rule
      </h2>
      <p>
        One of the most consequential protections introduced by <strong>Section 97(1) of the Land Act</strong> is the chargee&apos;s statutory duty to take all reasonable steps to obtain the best price reasonably obtainable.
      </p>
      <p>
        Critically, <strong>Section 97(2)</strong> specifies that an auction sale is unlawful if the reserve price is set below <strong>75% of the prevailing open market value</strong> of the property. To satisfy this legal threshold, the auctioneer and lender must commission a comprehensive valuation by an accredited valuer registered under the <em>Valuers Act (Cap. 532)</em> conducted not more than six months prior to the date of sale.
      </p>

      <h2 id="newspaper-notices" className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0B1730]">
        4. Public Gazettement &amp; National Newspaper Notices
      </h2>
      <p>
        At least <strong>14 days prior to the auction</strong>, the licensed auctioneer must publish a comprehensive public advertisement in at least one circulating newspaper of nationwide coverage (such as the <em>Daily Nation</em> or <em>The Standard</em>).
      </p>
      <p>
        The notice must disclose the land registration number, title tenure (freehold or leasehold with unexpired term), land area, physical address, built improvements, viewing arrangements at the site or our offices in <Link href="/auctioneers-in-mombasa" className="text-[#163E72] font-semibold underline">Mombasa</Link> or <Link href="/auctioneers-in-nairobi" className="text-[#163E72] font-semibold underline">Nairobi</Link>, and clear instructions regarding the refundable bidding deposit.
      </p>

      <h2 id="bidding-conveyancing" className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0B1730]">
        5. Bidding Day Protocols, Memorandum of Sale &amp; Conveyancing
      </h2>
      <p>
        On auction day, bidding is conducted transparently. Upon the fall of the hammer:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>The highest bidder immediately executes the binding <em>Memorandum of Sale</em>.</li>
        <li>A non-refundable deposit of 25% of the purchase price is paid immediately by banker&apos;s cheque or direct RTGS.</li>
        <li>The 75% balance is payable within the stipulated period (typically 60 to 90 days).</li>
        <li>Upon complete financial receipt, the transfer of charge under the Land Registration Act is prepared and presented to the Ministry of Lands, granting the purchaser clean, unencumbered statutory title.</li>
      </ul>

      <div className="p-6 rounded-xl bg-[#F4F6F9] border border-slate-200 mt-8">
        <h4 className="font-serif-heading text-base font-bold text-[#0B1730] mb-2">
          Partner With Real Estate Auction Specialists
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 mb-4">
          Makuri Auctioneers provides seamless, legally unassailable real estate auction management across Kenya. Call our specialized property unit at <strong>0720 934 476</strong> or email <a href="mailto:info@makuriauctioneers.co.ke" className="underline font-semibold text-[#163E72]">info@makuriauctioneers.co.ke</a>.
        </p>
        <Link
          href="/real-estate-management-kenya"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#163E72] hover:text-[#C6A15B]"
        >
          <span>Explore our Real Estate Practice &rarr;</span>
        </Link>
      </div>
    </ArticleShell>
  );
}
