import React from 'react';
import AdSlot from './AdSlot';

/**
 * SponsoredCardExperiment
 * 
 * Explores native-style sponsored content modules.
 * Blends with ecosystem visual language while maintaining clear distinctions.
 */
export default function SponsoredCardExperiment() {
  return (
    <section className="space-y-8">
      <div className="max-w-2xl">
        <h3 className="text-xl font-medium text-content-primary mb-4">Native Sponsored Modules</h3>
        <p className="text-content-secondary leading-relaxed">
          Exploring "Sponsored Content" cards that blend into the ecosystem's visual language while 
          maintaining clear ethical boundaries.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Regular Content Sim */}
        <div className="p-6 rounded-2xl border border-border bg-surface-primary flex flex-col justify-between h-[400px]">
          <div>
            <div className="w-12 h-12 rounded-lg bg-surface-tertiary mb-6" />
            <h4 className="text-lg font-medium text-content-primary mb-3">Regular Project</h4>
            <p className="text-sm text-content-secondary leading-relaxed">
              Standard content card from the ecosystem for rhythm comparison.
            </p>
          </div>
          <div className="w-full h-[1px] bg-border my-4" />
          <div className="flex justify-between items-center">
            <span className="text-xs text-content-tertiary uppercase tracking-wider">Internal</span>
          </div>
        </div>

        {/* Sponsored Ad Slot */}
        <AdSlot id="card-1" type="card" className="h-[400px]" />

        {/* Another Regular Card */}
        <div className="p-6 rounded-2xl border border-border bg-surface-primary flex flex-col justify-between h-[400px]">
          <div>
            <div className="w-12 h-12 rounded-lg bg-surface-tertiary mb-6" />
            <h4 className="text-lg font-medium text-content-primary mb-3">Experimental Tool</h4>
            <p className="text-sm text-content-secondary leading-relaxed">
              Comparing spacing and visual weight between organic and sponsored elements.
            </p>
          </div>
          <div className="w-full h-[1px] bg-border my-4" />
          <div className="flex justify-between items-center">
            <span className="text-xs text-content-tertiary uppercase tracking-wider">Research</span>
          </div>
        </div>
      </div>
    </section>
  );
}
