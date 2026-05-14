"use client";

import React, { useEffect, useState } from 'react';
import { MONETIZATION_CONFIG, type MonetizationProvider } from '@/config/monetization';
import { cn } from '@/lib/utils'; // Assuming cn utility exists, if not I'll use template literals

interface AdSlotProps {
  id: string;
  type: keyof typeof MONETIZATION_CONFIG.dimensions;
  className?: string;
  // Future analytics extensibility
  onVisibility?: () => void;
  onInteraction?: () => void;
  onPerformance?: (metrics: any) => void;
}

/**
 * AdSlot Component
 * 
 * DESIGN RATIONALE:
 * - CLS Prevention: Reserves fixed-height space using configuration presets.
 * - Restrained Motion: No pulsing or aggressive animations.
 * - Provider Agnostic: Ready to switch from placeholder to real providers.
 * - Graceful Degradation: Maintains spacing even if ads fail to load.
 */
export default function AdSlot({
  id,
  type,
  className,
  onVisibility,
  onInteraction,
  onPerformance,
}: AdSlotProps) {
  const [status, setStatus] = useState<'loading' | 'filled' | 'empty'>('loading');
  const dim = MONETIZATION_CONFIG.dimensions[type];

  // Simulate loading and analytics readiness
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('filled');
      if (onPerformance) onPerformance({ loadTime: 400 });
    }, 400);

    return () => clearTimeout(timer);
  }, [onPerformance]);

  if (!MONETIZATION_CONFIG.enabled) return null;

  return (
    <div
      id={`ad-slot-${id}`}
      className={cn(
        "relative overflow-hidden bg-surface-secondary border border-border rounded-lg transition-opacity duration-500",
        status === 'loading' ? 'opacity-50' : 'opacity-100',
        className
      )}
      style={{
        width: typeof dim.width === 'number' ? `${dim.width}px` : dim.width,
        height: typeof dim.height === 'number' ? `${dim.height}px` : dim.height,
      }}
      onClick={() => onInteraction?.()}
    >
      {/* Label / Type Indicator */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <span className="text-[10px] uppercase tracking-[0.2em] text-content-tertiary mb-2">
          Advertisement Experiment
        </span>
        <span className="text-sm font-medium text-content-secondary">
          {dim.label} ({typeof dim.width === 'number' ? `${dim.width}x${dim.height}` : 'Responsive'})
        </span>
        
        {/* Mock Placeholder Detail */}
        <div className="mt-4 w-12 h-[1px] bg-border" />
        
        <p className="mt-4 text-xs text-content-tertiary max-w-[200px] leading-relaxed">
          Slot reserved for provider validation. <br />
          CLS-stable architecture active.
        </p>
      </div>

      {/* Analytics Hook (Visibility) - Placeholder */}
      <div 
        ref={(el) => {
          if (el && onVisibility) {
            // Future IntersectionObserver logic here
          }
        }}
      />
    </div>
  );
}
