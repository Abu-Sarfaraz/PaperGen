'use client';

import React from 'react';
import { Database, TrendingUp, RefreshCw, Layers, ShieldCheck, Printer } from 'lucide-react';

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
  metric: string;
  badge: string;
}

const features: FeatureItem[] = [
  {
    icon: Database,
    title: 'Classified IGCSE Past Paper Bank',
    description:
      'Categorized past exam questions from Cambridge Mathematics (0580/4024), Physics (0625/9702), and Chemistry indexed by chapter, year, and paper.',
    metric: '1,200+ QUESTIONS',
    badge: 'QUESTION BANK',
  },
  {
    icon: TrendingUp,
    title: 'Cognitive Difficulty Curves',
    description:
      'Calibrate mock papers automatically with CAIE Standard (30% Easy, 50% Medium, 20% Hard), Foundation Drill, or A* Challenger curves.',
    metric: '3 PEDAGOGIC CURVES',
    badge: 'COGNITIVE TIERS',
  },
  {
    icon: RefreshCw,
    title: '1-Click Atomic Question Swapping',
    description:
      'Instantly swap any candidate question while preserving target marks and synchronizing Section B official mark schemes simultaneously.',
    metric: 'ATOMIC SYNC',
    badge: 'CIRCULAR ROTATION',
  },
  {
    icon: Layers,
    title: 'Vector KaTeX Mathematical Typography',
    description:
      'Sharp rendering for quadratic formulas, fractions, matrices, and geometry coordinates without blurry scanned past paper screenshots.',
    metric: 'VECTOR SHARP',
    badge: 'KATEX MATH',
  },
  {
    icon: ShieldCheck,
    title: 'Institute Branding & Watermark',
    description:
      'Stamp your coaching center emblem logo, teacher subtitle, diagonal watermark, candidate score box, and official exam instructions.',
    metric: 'CUSTOM BRANDING',
    badge: 'WATERMARK ENGINE',
  },
  {
    icon: Printer,
    title: 'Print-Ready PDF & Word (.doc) Export',
    description:
      'Formatted for A4 sheets with mark-proportional student answer spaces, avoiding mid-question page slicing with isolated print stylesheets.',
    metric: 'ZERO-DEPENDENCY',
    badge: 'PDF & DOC EXPORT',
  },
];

export function FeatureGrid3Col() {
  return (
    <section id="features" className="py-20 bg-midnight-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-pill bg-accent-purple/10 border border-accent-purple/30 text-accent-purple font-mono text-xs uppercase tracking-wider mb-4">
            CORE CAPABILITIES
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
            Engineered Specifically for Cambridge IGCSE & O/A-Level Educators
          </h2>
          <p className="font-sans text-text-secondary text-base sm:text-lg">
            Stop spending hours manually copy-pasting past papers or paying TAs. Create customized, syllabus-aligned worksheets in under 90 seconds.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 flex flex-col justify-between group hover:border-surface-border-hover transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-control bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple group-hover:scale-105 group-hover:border-accent-purple transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded-pill bg-midnight-900 border border-surface-border text-accent-cyan">
                      {feature.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-sans text-sm text-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between font-mono text-xs">
                  <span className="text-text-secondary">BENCHMARK</span>
                  <span className="text-accent-cyan font-bold">{feature.metric}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
