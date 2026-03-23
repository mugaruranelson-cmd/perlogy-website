import { ImageResponse } from 'next/og'

export const runtime     = 'edge'
export const alt         = 'Embassy in Nairobi — Unilumin LSK P2.9 outdoor LED · Perlogy Technologies'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%', height: '100%',
          display: 'flex', flexDirection: 'column',
          background: '#07102B',
          padding: '60px 72px',
          position: 'relative',
        }}
      >
        {/* Accent bar */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: 6, display: 'flex',
          background: 'linear-gradient(90deg, #1635D4 70%, #F25C1A 100%)',
        }} />

        {/* Tag */}
        <div style={{
          display: 'flex', alignItems: 'center',
          gap: 8, marginBottom: 24,
        }}>
          <div style={{
            background: '#F25C1A', color: 'white',
            fontSize: 14, fontWeight: 700,
            letterSpacing: 3, textTransform: 'uppercase',
            padding: '4px 14px', borderRadius: 100,
            display: 'flex',
          }}>
            Case study
          </div>
          <div style={{
            background: 'rgba(22,53,212,0.2)',
            border: '1px solid rgba(22,53,212,0.4)',
            color: '#7B9AFF', fontSize: 13,
            fontWeight: 600, letterSpacing: 2,
            textTransform: 'uppercase',
            padding: '4px 14px', borderRadius: 100,
            display: 'flex',
          }}>
            Digital signage · Kenya
          </div>
        </div>

        {/* Headline */}
        <div style={{
          color: 'white', fontSize: 52, fontWeight: 600,
          lineHeight: 1.15, marginBottom: 20,
          display: 'flex', flexDirection: 'column',
          maxWidth: 700,
        }}>
          <span>Embassy in Nairobi —</span>
          <span style={{ color: '#F25C1A' }}>
            Kenya&apos;s first curved outdoor LED.
          </span>
        </div>

        {/* Spec row */}
        <div style={{
          display: 'flex', gap: 12, marginBottom: 'auto',
        }}>
          {[
            'USD 150,000', '28 SQM',
            'Unilumin LSK P2.9', 'IP69K',
          ].map(s => (
            <div key={s} style={{
              background: 'rgba(22,53,212,0.18)',
              border: '1px solid rgba(22,53,212,0.35)',
              color: '#7B9AFF', fontSize: 16,
              fontWeight: 600, padding: '6px 16px',
              borderRadius: 8, display: 'flex',
            }}>
              {s}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', marginTop: 'auto',
          paddingTop: 24,
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          <div style={{
            color: 'rgba(255,255,255,0.45)', fontSize: 18,
            display: 'flex',
          }}>
            Supplied by Perlogy Technologies LLC
          </div>
          <div style={{
            color: '#F25C1A', fontSize: 18, fontWeight: 600,
            display: 'flex',
          }}>
            perlogy.co.ke
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
