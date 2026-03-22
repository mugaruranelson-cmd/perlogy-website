// src/app/opengraph-image.tsx
import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Perlogy Technologies — ProAV & ICT Distribution Across Africa'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#07102B',
          padding: '64px 72px',
          position: 'relative',
        }}
      >
        {/* Accent bar */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: 6,
          background: 'linear-gradient(90deg, #1635D4 70%, #F25C1A 100%)',
          display: 'flex',
        }} />

        {/* Logo area */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          marginBottom: 'auto',
        }}>
          <div style={{
            width: 40, height: 40,
            display: 'flex',
            background: '#1635D4',
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 3, width: 22, height: 22,
            }}>
              <div style={{ background: '#F25C1A', borderRadius: 2 }} />
              <div style={{ background: '#1635D4', borderRadius: 2, opacity: 0.4 }} />
              <div style={{ background: '#1635D4', borderRadius: 2, opacity: 0.4 }} />
              <div style={{ background: '#F25C1A', borderRadius: 2, opacity: 0.3 }} />
            </div>
          </div>
          <span style={{
            color: 'white',
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: '-0.5px',
          }}>
            Perlogy Technologies
          </span>
        </div>

        {/* Headline */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 'auto',
          paddingTop: 40,
        }}>
          <span style={{
            color: '#7B9AFF',
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 16,
            display: 'flex',
          }}>
            ProAV &amp; ICT Distribution
          </span>
          <span style={{
            color: 'white',
            fontSize: 52,
            fontWeight: 700,
            lineHeight: 1.15,
            display: 'flex',
          }}>
            Africa&apos;s technology distribution partner.
          </span>
          <span style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: 20,
            marginTop: 20,
            lineHeight: 1.6,
            display: 'flex',
          }}>
            Authorised LG Electronics &amp; Unilumin distributor ·
            13 world-class brands · East, West &amp; Southern Africa
          </span>
        </div>

        {/* Orange accent dot */}
        <div style={{
          position: 'absolute',
          bottom: 64,
          right: 72,
          width: 12,
          height: 12,
          borderRadius: '50%',
          background: '#F25C1A',
          display: 'flex',
        }} />
      </div>
    ),
    { ...size }
  )
}
