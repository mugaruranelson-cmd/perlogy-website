'use client'

import { useState, useRef } from 'react'
import { getYouTubeEmbedUrl, getYouTubeThumbnail } from '@/lib/project-videos'

interface YouTubeEmbedProps {
  videoId:     string
  title:       string
  // Hero mode: thumbnail shown first, click loads iframe
  // Avoids loading YouTube iframe on page load (better performance)
  mode?:       'hero' | 'inline' | 'modal-trigger'
  aspectRatio?: '16/9' | '4/3'
  className?:  string
  // Called when user clicks play — useful for modal-trigger mode
  onPlay?:     () => void
}

export function YouTubeEmbed({
  videoId,
  title,
  mode = 'inline',
  aspectRatio = '16/9',
  className = '',
  onPlay,
}: YouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const thumbnailUrl = getYouTubeThumbnail(videoId, 'maxres')
  const embedUrl     = getYouTubeEmbedUrl(videoId, {
    autoplay: true,
    controls: true,
    rel:      false,
  } as any)

  const handlePlay = () => {
    if (onPlay) {
      onPlay()
      return
    }
    setIsPlaying(true)
  }

  // ── HERO MODE ──────────────────────────────────────────────
  // Shows thumbnail with large orange play button
  // Click replaces thumbnail with live iframe
  if (mode === 'hero') {
    return (
      <div
        className={`relative w-full overflow-hidden bg-black ${className}`}
        style={{ aspectRatio }}
      >
        {!isPlaying ? (
          <>
            {/* Thumbnail */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnailUrl}
              alt={`${title} — project video thumbnail`}
              className="absolute inset-0 w-full h-full object-cover
                opacity-60"
              // Fallback if maxresdefault not available
              onError={(e) => {
                const img = e.target as HTMLImageElement
                img.src = getYouTubeThumbnail(videoId, 'hq')
              }}
            />

            {/* Dark gradient overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, rgba(7,16,43,0.75) 0%, rgba(0,0,0,0.35) 100%)',
              }}
            />

            {/* Play button + caption */}
            <div className="absolute inset-0 flex flex-col items-center
              justify-center gap-4 z-10">

              {/* Play button */}
              <button
                onClick={handlePlay}
                className={[
                  'w-16 h-16 rounded-full bg-[#F25C1A]',
                  'flex items-center justify-center',
                  'transition-transform duration-150',
                  'hover:scale-110 active:scale-95',
                  'focus:outline-none focus-visible:ring-4',
                  'focus-visible:ring-[#F25C1A]/50',
                ].join(' ')}
                aria-label={`Play ${title}`}
              >
                {/* Triangle play icon */}
                <svg
                  width="22" height="22" viewBox="0 0 22 22"
                  fill="none" aria-hidden="true"
                >
                  <path
                    d="M7 4.5l12 6.5-12 6.5V4.5z"
                    fill="white"
                  />
                </svg>
              </button>

              {/* Caption */}
              <div className="text-center">
                <p className="text-[13px] font-medium text-white/85">
                  {title}
                </p>
                <p className="text-[11px] text-white/40 mt-1">
                  Click to watch with sound
                </p>
              </div>
            </div>
          </>
        ) : (
          /* Live iframe — loads after click */
          <iframe
            ref={iframeRef}
            src={embedUrl}
            title={title}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write;
              encrypted-media; gyroscope; picture-in-picture;
              web-share"
            allowFullScreen
          />
        )}
      </div>
    )
  }

  // ── INLINE MODE ────────────────────────────────────────────
  // Direct iframe embed — used for in-page sections
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl bg-black ${className}`}
      style={{ aspectRatio }}
    >
      <iframe
        src={getYouTubeEmbedUrl(videoId, { autoplay: false })}
        title={title}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
