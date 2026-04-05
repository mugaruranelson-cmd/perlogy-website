import type { Metadata } from 'next'
import { buildCanonical, SEO } from '@/lib/seo-config'
import { AccentBar } from '@/components/ui/AccentBar'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Privacy Policy | Perlogy Technologies LLC',
  description: 'How we collect and protect your data at Perlogy Technologies LLC. Information on data collection, use, and user rights.',
  alternates: { canonical: buildCanonical('/privacy') },
}

const privacyBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SEO.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: buildCanonical('/privacy') },
  ],
}

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <StructuredData data={privacyBreadcrumb} />
      <AccentBar />
      
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-24">
        <h1 className="text-3xl font-extrabold text-brand-navy sm:text-4xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-brand-gray-muted">Last Updated: April 5, 2026</p>
        
        <div className="mt-12 space-y-10 text-brand-gray-text leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">1. Introduction</h2>
            <p>
              Perlogy Technologies LLC ("Perlogy," "we," "us," or "our") respects your privacy. 
              This policy explains how we collect and protect your data across our digital assets. 
              Perlogy Technologies LLC is a company registered in the Republic of Kenya.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">2. Data We Collect</h2>
            <p className="mb-4">We collect information that helps us provide a better service to our partners and clients:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Contact Information</strong>: Name, email, phone (WhatsApp), and company details provided through our Inquiry and Partner Application forms.</li>
              <li><strong>Technical Information</strong>: IP addresses, browser types, and usage data via standard cookies for performance optimization and analytics.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">3. How We Use Your Data</h2>
            <p>We use the collected data for the following purposes:</p>
            <ul className="list-disc pl-5 mt-4 space-y-2">
              <li>To communicate regarding project inquiries and brand specifications.</li>
              <li>To process and manage the Perlogy Partner Programme applications.</li>
              <li>To provide technical support and product updates to registered System Integrators.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">4. Data Sharing & Disclosure</h2>
            <p>
              <strong>No Selling:</strong> We never sell or rent your personal data to third parties.
            </p>
            <p className="mt-4">
              <strong>Service Providers:</strong> We share data with trusted logistics and communication partners 
              solely for the purpose of fulfilling our B2B obligations (e.g., email notifications, shipping carriers).
            </p>
            <p className="mt-4">
              <strong>Legal Requirements:</strong> We may disclose information if required by the laws of the Republic of Kenya.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data from unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the internet 
              is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-navy mb-4">6. Your Rights</h2>
            <p>
              You have the right to request access to the personal data we hold about you, or to request 
              corrections or deletions. To exercise these rights, please contact us at the email address below.
            </p>
          </div>

          <div className="pt-8 border-t border-brand-gray-border">
            <h2 className="text-xl font-bold text-brand-navy mb-2">Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
            <p className="mt-4 font-medium text-brand-navy">Perlogy Technologies LLC</p>
            <p>Westlands, Nairobi, Kenya</p>
            <p>Email: <a href="mailto:hello@perlogy.africa" className="text-brand-blue hover:underline">hello@perlogy.africa</a></p>
          </div>
        </div>
      </section>
    </main>
  )
}
