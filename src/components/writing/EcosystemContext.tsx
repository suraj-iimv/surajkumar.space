"use client";

import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface EcosystemLink {
  title: string;
  href: string;
  label: string;
}

interface EcosystemContextProps {
  links: EcosystemLink[];
}

export default function EcosystemContext({ links }: EcosystemContextProps) {
  if (!links || links.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-border/40">
      <div className="max-w-2xl">
        <h2 className="text-xs uppercase tracking-[0.3em] text-content-tertiary mb-10 font-normal">
          Ecosystem Context
        </h2>
        <div className="grid gap-8">
          {links.map((link) => (
            <div key={link.href} className="group">
              <Link href={link.href} className="block">
                <span className="text-[10px] uppercase tracking-widest text-content-tertiary mb-2 block transition-colors">
                  {link.label}
                </span>
                <h3 className="text-lg font-medium text-content-primary group-hover:text-content-secondary transition-colors border-b border-transparent group-hover:border-border/50 inline-block pb-0.5">
                  {link.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
