import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perlogy Technologies Appoints Franklin Ogonji as Managing Director",
  description: "Official press release regarding the appointment of Franklin Ogonji as Managing Director at Perlogy Technologies.",
};

export default function LeadershipUpdatePage() {
  return (
    <div className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl prose prose-slate lg:prose-lg">
        <h1 className="text-4xl font-bold tracking-tight text-brand-navy mb-4">
          Perlogy Technologies Appoints Franklin Ogonji as Managing Director
        </h1>
        <div className="flex items-center text-brand-gray-muted text-sm mb-8">
          <time dateTime="2026-07-02">2 July 2026</time>
          <span className="mx-2">•</span>
          <span>Nairobi, Kenya</span>
        </div>

        <p className="lead text-xl text-brand-gray-text mb-8">
          Perlogy Technologies is pleased to announce the appointment of Franklin Ogonji Omondi as Managing Director, marking an important milestone in the Company's continued growth and commitment to delivering world-class Professional Audio Visual (ProAV), Hospitality Technology, IPTV, and Digital Signage solutions across Africa.
        </p>

        <div className="space-y-6 text-brand-gray-text">
          <p>
            This leadership appointment forms part of Perlogy's long-term strategy to strengthen its operational excellence, deepen customer engagement, and expand its network of System Integrators throughout the continent.
          </p>

          <h2 className="text-2xl font-semibold text-brand-navy mt-10 mb-4">A New Chapter for Perlogy Technologies</h2>
          <p>
            Since founding Perlogy Technologies, Nelson Mugarura has led the Company's growth into a trusted regional distributor serving customers and partners across East, Central, and West Africa. As the business has matured, Nelson has made the strategic decision to transition the Company's day-to-day operations to dedicated executive leadership while he continues to provide strategic direction as <strong>Founder and Shareholder</strong>.
          </p>
          <p>
            This transition also follows Nelson's appointment as Sales Manager – East Africa at Uniguest, a global technology company serving the hospitality and healthcare industries. To ensure the highest standards of corporate governance and to provide Perlogy with dedicated executive leadership, operational responsibility has now been entrusted to Franklin Ogonji.
          </p>

          <blockquote className="border-l-4 border-brand-blue pl-4 italic my-8 text-lg">
            "Perlogy has always been built on long-term relationships, integrity, and technical excellence. As the Company continues to grow, it is important that our customers, manufacturers, and System Integrator partners receive dedicated leadership and full operational focus. Franklin brings exactly the experience, professionalism, and regional expertise needed to lead Perlogy into its next phase of growth."
            <br />
            <span className="text-base font-semibold block mt-4 text-brand-navy">— Nelson Mugarura, Founder & Shareholder</span>
          </blockquote>

          <h2 className="text-2xl font-semibold text-brand-navy mt-10 mb-4">Meet Franklin Ogonji</h2>
          <p>
            Franklin joins Perlogy Technologies with more than 14 years of experience in business development, enterprise sales, customer experience, and technology solutions across East and West Africa. His background includes leadership positions with organizations such as Safaricom, Airtel Kenya, Infobip, Eclectics International, Hospitality Systems Consultants (OTRUM), and Sun King.
          </p>
          <p>
            His experience is particularly relevant to Perlogy's markets and customers. Throughout his career, Franklin has successfully developed enterprise business across both English-speaking and French-speaking African markets. He possesses a strong technical foundation, holding a Bachelor of Science in Computer Science alongside professional certifications including Cisco Certified Network Professional (CCNP) and membership of the Chartered Institute of Marketing (CIM).
          </p>

          <h2 className="text-2xl font-semibold text-brand-navy mt-10 mb-4">Commitment to Our Customers and Partners</h2>
          <p>
            This leadership transition does not change Perlogy's mission or values. The Company remains committed to empowering System Integrators throughout Africa with innovative technologies, trusted distribution partnerships, responsive technical support, and exceptional customer service.
          </p>
          <p>
            Effective immediately, all enquiries relating to sales, quotations, project support, partnerships, and business development should be directed to Franklin and the Perlogy team via <strong>frank@perlogy.africa</strong>.
          </p>
        </div>
      </article>
    </div>
  );
}
