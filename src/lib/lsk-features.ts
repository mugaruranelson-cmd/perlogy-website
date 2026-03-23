export interface LSKFeature {
  id:        string
  title:     string
  body:      string
  iconPath:  string
  iconColor: string
  iconBg:    string
}

export const LSK_FEATURES: LSKFeature[] = [
  {
    id:        'hd-display',
    title:     'Outdoor HD display',
    body:
      '14-bit grayscale and 3,840Hz refresh rate produce cinema-quality ' +
      'imagery with zero visible flicker, even in direct African sunlight. ' +
      'Visibly superior to conventional outdoor LED products.',
    iconPath:  'M2 3h20v14H2zM8 21h8M12 17v4',
    iconColor: '#1635D4',
    iconBg:    'rgba(22,53,212,0.08)',
  },
  {
    id:        'ip69k',
    title:     'IP69K waterproof',
    body:
      'The highest protection rating available. Tested at 80–100 bar water ' +
      'pressure, 80°C water temperature, and multiple spray angles. Fully ' +
      'sealed against dust and water ingress in all conditions.',
    iconPath:  'M12 2s-7 4.5-7 10a7 7 0 0014 0c0-5.5-7-10-7-10z',
    iconColor: '#059669',
    iconBg:    'rgba(5,150,105,0.08)',
  },
  {
    id:        'ultra-slim',
    title:     'Ultra-light, ultra-slim',
    body:
      '82mm cabinet thickness and 14.2kg per panel. Significantly lower ' +
      'transport and on-site labour costs for the SI partner compared ' +
      'to conventional outdoor LED cabinet systems.',
    iconPath:
      'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5-5-5m5 5v-4m0 4h-4',
    iconColor: '#F25C1A',
    iconBg:    'rgba(242,92,26,0.08)',
  },
  {
    id:        'anti-drop',
    title:     'Anti-drop design',
    body:
      'Industry\'s first patented module lock with magnetic suction and ' +
      'one-key reset. Double protection keeps modules secured during and ' +
      'after installation. Available on LSK P2.6, P2.9, and P3.9 models.',
    iconPath:
      'M12 22s-8-4.5-8-11.8A8 8 0 0112 2a8 8 0 018 8.2c0 7.3-8 11.8-8 11.8z',
    iconColor: '#1635D4',
    iconBg:    'rgba(22,53,212,0.08)',
  },
  {
    id:        'smart-module',
    title:     'Smart module',
    body:
      'Optional onboard intelligence for status detection, voltage, ' +
      'temperature, cable, and spot detection. Enables remote monitoring ' +
      'and predictive maintenance from a single dashboard.',
    iconPath:
      'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18',
    iconColor: '#1635D4',
    iconBg:    'rgba(22,53,212,0.08)',
  },
  {
    id:        'install',
    title:     'Flexible installation',
    body:
      'Wall, hanging, or embedded installation supported. Front and rear ' +
      'module maintenance on P2.6/P2.9/P3.9 — minimising disruption ' +
      'to site operations during any servicing.',
    iconPath:  'M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z',
    iconColor: '#059669',
    iconBg:    'rgba(5,150,105,0.08)',
  },
]
