import React from 'react';
import AdSlot from './AdSlot';

/**
 * InlineAdExperiment
 * 
 * Simulates ad placement within editorial content.
 * Focuses on maintaining layout rhythm and typography consistency.
 */
export default function InlineAdExperiment() {
  return (
    <section className="space-y-8">
      <div className="max-w-2xl">
        <h3 className="text-xl font-medium text-content-primary mb-4">Inline Content Placement</h3>
        <p className="text-content-secondary leading-relaxed">
          Testing how ad blocks interact with editorial flow. The objective is to maintain readability 
          and rhythm while providing high-visibility slots.
        </p>
      </div>
      <div className="prose prose-neutral max-w-3xl">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        
        {/* Ad Placement */}
        <div className="my-12">
          <AdSlot id="inline-1" type="inline" />
        </div>

        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}
