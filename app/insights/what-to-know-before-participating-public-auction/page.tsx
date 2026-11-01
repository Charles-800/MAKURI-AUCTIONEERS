import type { Metadata } from 'next';
import ArticleShell from '@/components/ArticleShell';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What to Know Before Participating in a Public Auction | Bidder Guide',
  description: 'Essential guide for auction bidders in Kenya. Title verification, bidding deposits, reserve prices, and "as-is where-is" purchase rules explained.',
  keywords: [
    'Participating in public auction Kenya',
    'Auction bidder guide Kenya',
    'How to buy property at auction Kenya',
    'Auction bidding deposit Kenya',
    'Vehicle auction guide Mombasa Nairobi',
    'Makuri Auctioneers'
  ],
  alternates: {
    canonical: 'https://makuri-auctioneers.co.ke/insights/what-to-know-before-participating-public-auction',
  },
};

export default function ArticleTwo() {
  const takeaways = [
    'Always conduct independent physical inspections during designated viewing days before bidding.',
    'For real estate, perform an official title search (via Ardhisasa or local land registries) to verify boundaries and encumbrances.',
    'Auction sales are conducted on a strict "as-is, where-is" basis with no post-auction warranty.',
    'Prepare your refundable bidding deposit (banker’s cheque or RTGS) in advance to obtain your bidder number.',
    'Winning bidders must pay 25% immediately upon the fall of the hammer and settle the 75% balance within statutory deadlines.',
  ];

  const toc = [
    { title: 'The Principle of "As-Is, Where-Is" (Caveat Emptor)', id: 'as-is-principle' },
    { title: 'Critical Pre-Auction Due Diligence Checks', id: 'pre-auction-checks' },
    { title: 'Understanding Bidding Deposits & Registration', id: 'bidding-deposits' },
    { title: 'Strategic Bidding Discipline on Auction Day', id: 'bidding-discipline' },
    { title: 'Post-Hammer Settlement & Completion Timelines', id: 'post-hammer-settlement' },
  ];

  return (
    <ArticleShell
      slug="what-to-know-before-participating-public-auction"
      title="What to Know Before Participating in a Public Auction in Kenya: Bidders Guide"
      excerpt="Essential due diligence, bidding deposits, reserve prices, and post-auction settlement requirements for prospective asset buyers."
      category="Buyer Guide"
      date="October 2026"
      readTime="5 min read"
      author="Makuri Auctioneers Advisory Desk"
      keyTakeaways={takeaways}
      tableOfContents={toc}
    >
      <h2 id="as-is-principle" className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0B1730]">
        1. The Principle of &ldquo;As-Is, Where-Is&rdquo; (Caveat Emptor)
      </h2>
      <p>
        Public auctions present outstanding opportunities to acquire commercial real estate, prime residential plots, heavy earthmoving equipment, and corporate vehicles at attractive valuations. However, participating successfully requires an understanding of auction law.
      </p>
      <p>
        Under Kenyan auction law, all lots are sold on a strict <strong>&ldquo;as-is, where-is&rdquo; (caveat emptor)</strong> basis. This means the buyer assumes all responsibility for the condition, state of repair, and mechanical fitness of the asset. The auctioneer and the vendor provide no post-sale warranty. Hence, thorough pre-auction due diligence is indispensable.
      </p>

      <h2 id="pre-auction-checks" className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0B1730]">
        2. Critical Pre-Auction Due Diligence Checks
      </h2>
      <p>
        Never bid blindly on an asset advertised in the newspaper or online catalog. Before auction day, prospective buyers must undertake:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>Physical Site / Yard Inspection:</strong> Visit our holding yards in <Link href="/auctioneers-in-mombasa" className="text-[#163E72] font-semibold underline">Mombasa</Link> or <Link href="/auctioneers-in-nairobi" className="text-[#163E72] font-semibold underline">Nairobi</Link> accompanied by a qualified mechanic or mechanical engineer to test vehicle engines, gearboxes, and structural integrity.
        </li>
        <li>
          <strong>Land Registry Searches:</strong> For real estate, perform an official search through the Ministry of Lands portal (Ardhisasa) or the county land registry to verify registered parcel ownership, boundary beacon certificates, and zoning restrictions.
        </li>
        <li>
          <strong>Rates &amp; Utilities Clearance:</strong> Verify whether outstanding county land rates, land rent, or utility arrears exist, and confirm in the Conditions of Sale whether the purchaser or the chargee is liable for apportionment.
        </li>
      </ul>

      <h2 id="bidding-deposits" className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0B1730]">
        3. Understanding Bidding Deposits &amp; Registration
      </h2>
      <p>
        To preserve auction decorum and eliminate frivolous bidding, licensed auctioneers require prospective participants to register before bidding commences. Registration typically entails presenting a national ID or passport, KRA PIN, and submitting a refundable bidding deposit.
      </p>
      <p>
        For vehicles and movable equipment, deposits typically range between KES 50,000 and KES 200,000. For real estate, deposits can range from KES 200,000 to KES 1,000,000 depending on the property value. If you do not win the bid, your deposit is refunded in full immediately following the auction.
      </p>

      <h2 id="bidding-discipline" className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0B1730]">
        4. Strategic Bidding Discipline on Auction Day
      </h2>
      <p>
        On auction day, emotions can run high. Experienced participants set a strict maximum ceiling price in advance and do not exceed it in the heat of competition. Watch the auctioneer attentively, signal your bids clearly by raising your bidding card, and pay close attention to increment announcements.
      </p>
      <p>
        Remember that the auctioneer will announce whether the lot has reached its <strong>reserve price</strong>. Once the reserve is met, the asset is actively on the market, and the highest bidder at the fall of the hammer is contractually committed to complete the purchase.
      </p>

      <h2 id="post-hammer-settlement" className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0B1730]">
        5. Post-Hammer Settlement &amp; Completion Timelines
      </h2>
      <p>
        Upon winning the bid, you will be escorted to the auction desk to execute the memorandum of sale and deposit the required 25% earnest money. The remaining 75% balance must be paid within the contractually specified duration—usually 30 calendar days for movable goods or up to 90 days for real estate.
      </p>
      <p>
        Ensure your financing is pre-approved with your commercial bank or SACCO prior to bidding. Failure to pay the balance within the stipulated window results in forfeiture of your 25% deposit pursuant to the statutory Conditions of Sale.
      </p>

      <div className="p-6 rounded-xl bg-[#F4F6F9] border border-slate-200 mt-8">
        <h4 className="font-serif-heading text-base font-bold text-[#0B1730] mb-2">
          Participate in Upcoming Makuri Auctions
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 mb-4">
          For inquiries about upcoming vehicle auctions, property notices, or viewing appointments at our Mombasa and Nairobi holding facilities, call <strong>0720 934 476</strong> or email <a href="mailto:info@makuriauctioneers.co.ke" className="underline font-semibold text-[#163E72]">info@makuriauctioneers.co.ke</a>.
        </p>
        <Link
          href="/auctioneering-services-kenya"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#163E72] hover:text-[#C6A15B]"
        >
          <span>Learn About Our Auctioneering Services &rarr;</span>
        </Link>
      </div>
    </ArticleShell>
  );
}
