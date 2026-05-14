/**
 * Monetization Configuration & Policy Definitions
 * 
 * RATIONALE:
 * 1. Isolation: Ads are strictly experimental and restricted to the /lab section.
 * 2. Reversibility: Centralizing config allows for immediate global removal.
 * 3. Technical Excellence: Policies prevent "ad creep" and protect premium UX.
 * 4. Ecosystem Integrity: Placeholders are used to validate UX before any real integration.
 */

export type MonetizationProvider = 'placeholder' | 'adsense' | 'carbon' | 'none';

export interface MonetizationConfig {
  enabled: boolean;
  experimentMode: boolean;
  activeProvider: MonetizationProvider;
  
  // Policy Definitions
  policies: {
    experimentalOnly: boolean;
    allowMotion: boolean;
    preserveWhitespacePriority: boolean;
    maxAdsPerPage: number;
    allowedZones: string[];
    restrictedZones: string[];
  };

  // Layout Presets (CLS Prevention)
  dimensions: {
    [key: string]: {
      width: string | number;
      height: string | number;
      label: string;
    };
  };
}

export const MONETIZATION_CONFIG: MonetizationConfig = {
  enabled: true,
  experimentMode: true,
  activeProvider: 'placeholder',

  policies: {
    experimentalOnly: true, // Restrict to Lab
    allowMotion: false,      // Preserve restrained motion philosophy
    preserveWhitespacePriority: true,
    maxAdsPerPage: 3,
    allowedZones: ['/lab/ads'],
    restrictedZones: ['/', '/projects', '/writing'], // Protected premium surfaces
  },

  dimensions: {
    square: { width: 300, height: 250, label: 'Medium Rectangle' },
    leaderboard: { width: 728, height: 90, label: 'Leaderboard' },
    inline: { width: '100%', height: 120, label: 'Inline Content' },
    card: { width: '100%', height: 400, label: 'Sponsored Card' },
  },
};
