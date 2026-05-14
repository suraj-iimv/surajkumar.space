import React from 'react';
import AdSlot from './AdSlot';

/**
 * BannerAdExperiment
 * 
 * Simulates traditional leaderboard banner placements.
 * Ensures the slot respects the grid and prevents CLS.
 */
export default function BannerAdExperiment() {
  return (
    <section className="space-y-8">
      <div className="max-w-2xl">
        <h3 className="text-xl font-medium text-content-primary mb-4">Global Banner Research</h3>
        <p className="text-content-secondary leading-relaxed">
          Simulating traditional leaderboard placements. We focus on ensuring these slots respect the grid 
          and do not cause layout shifts during the lifecycle of the page.
        </p>
      </div>
      <div className="flex justify-center py-8 bg-surface-tertiary/30 rounded-2xl border border-border/50">
        <AdSlot id="banner-1" type="leaderboard" />
      </div>
    </section>
  );
}
