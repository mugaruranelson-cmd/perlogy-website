// Perlogy Technologies LLC — Brand Design Tokens
// ================================================
// Central source of truth for all brand colours.
// These values are mirrored as CSS custom properties in globals.css
// and registered as Tailwind theme tokens via @theme inline.

export const brand = {
  colors: {
    blue:        '#1635D4',   // Royal blue — dominant brand colour
    blueDark:    '#0D1FB5',   // Hover states, accents
    navy:        '#07102B',   // Hero backgrounds, dark sections
    navyMid:     '#0F1E45',   // Secondary dark backgrounds
    orange:      '#F25C1A',   // Accent — pixel mark in logo, CTAs on dark bg
    orangeLight: '#FF7A3D',   // Hover on orange
    white:       '#FFFFFF',
    grayText:    '#374151',   // Body copy
    grayMuted:   '#6B7280',   // Secondary text
    grayBorder:  '#E5E7EB',   // Dividers
    lightBlueBg: '#E8EEFF',   // Blue-tint backgrounds
  },
} as const;

export type BrandColors = typeof brand.colors;
