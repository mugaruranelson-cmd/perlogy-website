import type { Metadata } from 'next'
import { buildCanonical, SEO } from '@/lib/seo-config'
import { AccentBar } from '@/components/ui/AccentBar'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Terms of Service | Perlogy Technologies LLC',
  description: 'Terms and conditions for using Perlogy Technologies LLC services and participating in the Perlogy Partner Programme.',
  alternates: { canonical: buildCanonical('/terms') },
}

const termsBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: buildCanonical('/terms') },
  ],
}

export default function TermsPage() {
  return (
    <main className="bg-white">
      <StructuredData data={termsBreadcrumb} />
      <AccentBar />
      
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-24">
        <h1 className="text-3xl font-extrabold text-brand-navy sm:text-4xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-brand-gray-muted">Last Updated: April 5, 2026</p>
        
        <div className="mt-12 space-y-10 text-brand-gray-text leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">1. Business Model (B2B Only)</h2>
            <p>
              Perlogy Technologies LLC operates strictly as an **Authorized B2B Distributor**. 
              All sales and technical partnerships are managed through our registered System Integrators (SIs). 
              We do not provide direct retail services to end-users. Perlogy Technologies LLC 
              is a company registered in Nairobi, Kenya.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">2. Intellectual Property</h2>
            <p>
              All brand logos (LG, Unilumin, Lampro, etc.) and trademarks used on this site are the 
              property of their respective owners. Perlogy uses these as an **Authorised Representative** 
              for distribution within the African market. You may not use these materials 
              without the express written consent of the respective trademark owners.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">3. Partner Programme</h2>
            <p>
              Registration as an SI partner is subject to verification of business status. 
              Perlogy reserves the right to accept or decline applications based on regional 
              distribution strategies and business criteria. Once accepted, partners must 
              adhere to the tier-specific guidelines and service level agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">4. Use of Website</h2>
            <p>
              By accessing this website, you agree to use it only for lawful purposes related 
              to your professional activities with Perlogy. Any unauthorized use or disruption 
              of the website is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">As a distributor, Perlogy provides high-quality ProAV and ICT products. However:</p>
            <ul className="list-disc pl-5 space-y-4">
              <li>
                <strong>Project Implementation:</strong> Perlogy is NOT liable for installation errors or 
                project delays caused by third-party integrators.
              </li>
              <li>
                <strong>Hardware Warranty:</strong> Our liability is limited to the manufacture's 
                warranty provided on the hardware itself.
              </li>
              <li>
                <strong>Indirect Damages:</strong> We are not liable for any indirect, special, 
                or consequential damages arising out of the use of our website or services.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the 
              <strong>laws of the Republic of Kenya</strong>. Any disputes arising from these 
              terms shall be subject to the exclusive jurisdiction of the courts of Kenya.
            </p>
          </div>

          <div className="pt-8 border-t border-brand-gray-border">
            <h2 className="text-xl font-bold text-brand-navy mb-2">Contact Us</h2>
            <p>If you have questions about these Terms of Service, please contact us:</p>
            <p className="mt-4 font-medium text-brand-navy">Perlogy Technologies LLC</p>
            <p>Westlands, Nairobi, Kenya</p>
            <p>Email: <a href="mailto:hello@perlogy.africa" className="text-brand-blue hover:underline">hello@perlogy.africa</a></p>
          </div>
        </div>
      </section>
    </main>
  )
}
