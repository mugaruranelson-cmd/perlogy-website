// src/lib/project-videos.ts
// Central store for all project video IDs
// Update YouTube IDs here when videos change

export const PROJECT_VIDEOS = {
  uhuruGardens: {
    youtubeId:    'Tw3ZZ5bV3rM', // Custom unlisted embedded integration id
    title:        'Uhuru Gardens Museum — AV System Installation',
    description:  'East Africa\'s largest LCD video wall installation at Uhuru Gardens national heritage site, Nairobi, Kenya.',
    thumbnailUrl: '', // leave blank — auto-generated from YouTube ID
    duration:     '', // e.g. '3:42' — fill in after watching
  },
} as const

// YouTube thumbnail URL builder
export function getYouTubeThumbnail(
  videoId: string,
  quality: 'default' | 'hq' | 'maxres' = 'maxres'
): string {
  const qualityMap = {
    default: 'hqdefault',
    hq:      'hqdefault',
    maxres:  'maxresdefault',
  }
  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`
}

// YouTube embed URL builder
export function getYouTubeEmbedUrl(
  videoId: string,
  options: {
    autoplay?: boolean
    muted?: boolean
    loop?: boolean
    controls?: boolean
    startSeconds?: number
  } = {}
): string {
  const params = new URLSearchParams({
    rel:             '0',
    modestbranding:  '1',
    color:           'white',
    enablejsapi:     '1',
    autoplay:        options.autoplay ? '1' : '0',
    mute:            options.muted ? '1' : '0',
    loop:            options.loop ? '1' : '0',
    controls:        options.controls === false ? '0' : '1',
    ...(options.startSeconds
      ? { start: String(options.startSeconds) }
      : {}),
    ...(options.loop
      ? { playlist: videoId }  // required for loop to work
      : {}),
  })
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`
}
