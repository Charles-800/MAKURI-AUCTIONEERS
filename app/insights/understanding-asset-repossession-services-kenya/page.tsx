import type { Metadata } from 'next';
import ArticleShell from '@/components/ArticleShell';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Understanding Asset Repossession Services in Kenya | MPSRA 2017',
  description: 'In-depth analysis of legal asset repossession in Kenya under MPSRA 2017. Collateral registry, notice of default, peaceful seizure, and debtor rights explained.',
  keywords: [
    'Asset repossession in Kenya',
    'MPSRA 2017 repossession Kenya',
    'Vehicle repossession laws Kenya',
    'Lawful collateral recovery Kenya',
    'eCitizen collateral registry',
    'Makuri Auctioneers repossession'
  ],
  alternates: {
    canonical: 'https://makuri-auctioneers.co.ke/insights/understanding-asset-repossession-services-kenya',
  },
};

export default function ArticleThree() {
  const takeaways = [
    'Repossession in Kenya is governed primarily by the Movable Property Security Rights Act (MPSRA No. 13 of 2017) and the Auctioneers Act (Cap. 526).',
    'Creditors must hold a valid, registered security right recorded on the eCitizen Collateral Registry before enforcing extrajudicial repossession.',
    'A formal written notice of default must be served on the debtor granting the statutory cure period.',
    'Repossession must be conducted peacefully without breach of the peace, violence, or unauthorized destruction of property.',
    'Recovered assets must be stored in secure bonded yards, and debtors retain statutory redemption rights prior to liquidation.',
  ];

  const toc = [
    { title: 'The Legislative Shift: Enactment of the MPSRA (2017)', id: 'mpsra-enactment' },
    { title: 'The Electronic Collateral Registry Requirement', id: 'collateral-registry' },
    { title: 'Statutory Default Notice & The Cure Window', id: 'default-notice' },
    { title: 'Conducting Lawful Extrajudicial Repossession', id: 'extrajudicial-repossession' },
    { title: 'Storage, Condition Inventory & Debtor Redemption Rights', id: 'storage-redemption' },
  ];

  return (
    <ArticleShell
      slug="understanding-asset-repossession-services-kenya"
      title="Understanding Asset Repossession Services in Kenya: The MPSRA Framework"
      excerpt="How the Movable Property Security Rights Act (MPSRA 2017) governs the lawful seizure, impoundment, and realization of pledged collateral."
      category="Repossession & Recovery"
      date="October 2026"
      readTime="7 min read"
      author="Legal Enforcement Team"
      keyTakeaways={takeaways}
      tableOfContents={toc}
    >
      <h2 id="mpsra-enactment" className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0B1730]">
        1. The Legislative Shift: Enactment of the MPSRA (2017)
      </h2>
      <p>
        Prior to 2017, repossession of movable assets in Kenya was fragmented across archaic colonial-era legislation, including the <em>Chattels Transfer Act (Cap. 28)</em>. The enactment of the <strong>Movable Property Security Rights Act (MPSRA No. 13 of 2017)</strong> fundamentally revolutionized the landscape of secured lending and asset recovery in Kenya.
      </p>
      <p>
        The MPSRA establishes a clear, unified, and modern legal regime governing the creation, perfection, priority, and enforcement of security rights in tangible and intangible movable assets—including motor vehicles, machinery, agricultural livestock, inventory, and accounts receivable.
      </p>

      <h2 id="collateral-registry" className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0B1730]">
        2. The Electronic Collateral Registry Requirement
      </h2>
      <p>
        Under the MPSRA, perfection of a security right requires registration on the <strong>electronic Collateral Registry</strong> hosted on the Kenya eCitizen government portal. For a financial institution or private creditor to exercise lawful repossession upon loan default, the underlying security notice must be registered with priority.
      </p>
      <p>
        Before executing any recovery instruction, <Link href="/repossession-services-kenya" className="text-[#163E72] font-semibold underline">Makuri Auctioneers</Link> conducts preliminary registry verification to ensure our clients hold enforceable first-ranking or subordinate security rights, shielding lenders from third-party ownership disputes or wrongful seizure claims.
      </p>

      <h2 id="default-notice" className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0B1730]">
        3. Statutory Default Notice &amp; The Cure Window
      </h2>
      <p>
        Repossession cannot occur by surprise. The law mandates that when a debtor defaults, the secured creditor must formally issue a <strong>written notice of default</strong> specifying:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>The nature of the default and the exact outstanding arrears.</li>
        <li>The contractual remedy required to rectify the default.</li>
        <li>A statutory cure period (typically not less than thirty days) during which the debtor may settle arrears without penalty.</li>
        <li>The consequences of non-compliance, including the repossession and disposal of the secured collateral.</li>
      </ul>

      <h2 id="extrajudicial-repossession" className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0B1730]">
        4. Conducting Lawful Extrajudicial Repossession
      </h2>
      <p>
        Section 57 of the MPSRA permits secured creditors to take possession of collateral either through judicial process or <strong>extrajudicially without court intervention</strong>, provided the security agreement expressly provides for it and the repossession can proceed <em>without a breach of the peace</em>.
      </p>
      <p>
        This is where professional licensed auctioneers play an essential role. Unlicensed recovery agents risk criminal liability for harassment, trespass, or breach of peace. Licensed officers from Makuri Auctioneers operate with diplomatic de-escalation protocols, presenting valid credentials, certified warrants, and inventory receipt documentation to secure the asset peacefully.
      </p>

      <h2 id="storage-redemption" className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0B1730]">
        5. Storage, Condition Inventory &amp; Debtor Redemption Rights
      </h2>
      <p>
        Once seized, the asset must be transported immediately to an accredited, fully guarded holding yard. In our facilities in <Link href="/auctioneers-in-mombasa" className="text-[#163E72] font-semibold underline">Mombasa</Link> and <Link href="/auctioneers-in-nairobi" className="text-[#163E72] font-semibold underline">Nairobi</Link>, an exhaustive condition checklist and high-resolution photographic evidence are recorded.
      </p>
      <p>
        The debtor retains a statutory right of redemption prior to disposal. If the debtor cures the default and settles accrued recovery and storage expenses within the designated window, the collateral is released. If redemption fails, the creditor may proceed to liquidate the asset via transparent <Link href="/auctioneering-services-kenya" className="text-[#163E72] font-semibold underline">public auction</Link> to satisfy the debt.
      </p>

      <div className="p-6 rounded-xl bg-[#F4F6F9] border border-slate-200 mt-8">
        <h4 className="font-serif-heading text-base font-bold text-[#0B1730] mb-2">
          Protect Your Lending Portfolio
        </h4>
        <p className="text-xs sm:text-sm text-slate-600 mb-4">
          Makuri Auctioneers provides compliant repossession and collateral recovery services for commercial banks, SACCOs, and corporate lenders throughout Kenya. Speak directly with our enforcement coordinators at <strong>0720 934 476</strong>.
        </p>
        <Link
          href="/repossession-services-kenya"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#163E72] hover:text-[#C6A15B]"
        >
          <span>Explore our Full Repossession Solutions &rarr;</span>
        </Link>
      </div>
    </ArticleShell>
  );
}
