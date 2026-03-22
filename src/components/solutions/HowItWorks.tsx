const STEPS = [
  {
    num:   '01',
    color: '#1635D4',
    title: 'SI partner specifies',
    body:
      'Your SI partner identifies the right brands and products for the project and contacts Perlogy for pricing and availability.',
  },
  {
    num:   '02',
    color: '#1635D4',
    title: 'Perlogy supplies',
    body:
      'We confirm stock, provide competitive partner pricing, and supply equipment directly to the integrator — never to the end client.',
  },
  {
    num:   '03',
    color: '#1635D4',
    title: 'SI installs & commissions',
    body:
      'Your SI partner delivers and commissions the project. Perlogy provides technical support — the integrator owns the client relationship throughout.',
  },
  {
    num:   '04',
    color: '#F25C1A',
    title: 'Ongoing support',
    body:
      'After-sales technical support, warranty management, and product updates — through Perlogy, backed by the manufacturer.',
  },
] as const

export function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-7 pb-12">

      {/* Section header */}
      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase
        text-[#1635D4] mb-2">
        How it works
      </p>
      <h2 className="text-[20px] font-medium
        text-brand-navy mb-6">
        From specification to commissioning — through your SI partner.
      </h2>

      {/* Steps grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {STEPS.map((step, i) => (
          <div
            key={step.num}
            className={[
              'relative p-5 rounded-xl',
              'bg-gray-50',
              'border border-brand-gray-border',
              // Top accent border in step colour
              'border-t-[3px]',
            ].join(' ')}
            style={{ borderTopColor: step.color }}
          >
            {/* Step number chip */}
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center
                text-[11px] font-bold text-white mb-3"
              style={{ background: step.color }}
            >
              {step.num}
            </div>

            {/* Title */}
            <h4 className="text-[13px] font-semibold
              text-brand-navy mb-1.5">
              {step.title}
            </h4>

            {/* Body */}
            <p className="text-[11px] text-brand-gray-text
              leading-[1.65]">
              {step.body}
            </p>

            {/* Arrow connector between steps (not after last). Hidden below lg. */}
            {i < STEPS.length - 1 && (
              <div
                className="hidden lg:flex absolute -right-[11px] top-1/2 -translate-y-1/2
                  text-brand-gray-text text-sm z-10
                  bg-white w-5 h-5 items-center justify-center rounded-full
                  border border-brand-gray-border"
                aria-hidden="true"
              >
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
