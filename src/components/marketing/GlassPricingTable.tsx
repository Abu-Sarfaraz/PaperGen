'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Check, Sparkles, BookOpen, GraduationCap, Building2 } from 'lucide-react';

interface PricingTier {
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  ctaVariant: 'primary' | 'glass' | 'cyan';
  icon: React.ElementType;
}

const tiers: PricingTier[] = [
  {
    name: 'Solo Educator',
    description: 'Essential mock paper generator and past question banking for independent teachers and tutors.',
    monthlyPrice: 29,
    annualPrice: 24,
    features: [
      'Up to 50 Mock Papers / month',
      'Cambridge IGCSE & O-Level Mathematics',
      'Standard CAIE & Foundation Curves',
      'Download as PDF & Word (.doc)',
      'Institute Name & Teacher Subtitle Branding',
    ],
    ctaText: 'Start Educator Plan',
    ctaVariant: 'glass',
    icon: BookOpen,
  },
  {
    name: 'Coaching Center',
    badge: 'MOST POPULAR',
    isPopular: true,
    description: 'High-velocity exam studio for coaching centers preparing batches for top Cambridge grades.',
    monthlyPrice: 99,
    annualPrice: 79,
    features: [
      'Unlimited Mock Papers & Worksheets',
      'Full Mathematics, Physics, & Chemistry Bank',
      'A* Challenger Cognitive Curve',
      '1-Click Atomic Question Swapping',
      'Custom Emblem Logo & Diagonal Watermark',
      'Official Cambridge Mark Schemes Attached',
      'Multi-Teacher Collaboration (up to 10)',
    ],
    ctaText: 'Launch Coaching Studio',
    ctaVariant: 'primary',
    icon: GraduationCap,
  },
  {
    name: 'School & Academy',
    badge: 'INSTITUTIONAL',
    description: 'Dedicated exam hall solution for Cambridge schools, international academies, and large branches.',
    monthlyPrice: 299,
    annualPrice: 249,
    features: [
      'Campus-Wide Unlimited Access',
      'Custom Past Paper Bank Import',
      'Multi-Branch Branding & Watermarks',
      'Dedicated Exam Board Formatting Support',
      'Automated Marking Scheme Compilations',
      'Priority 24/7 Academic Support',
    ],
    ctaText: 'Contact Academy Sales',
    ctaVariant: 'cyan',
    icon: Building2,
  },
];

export function GlassPricingTable() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-pill bg-accent-purple/10 border border-accent-purple/30 text-accent-purple font-mono text-xs uppercase tracking-wider mb-4">
            TRANSPARENT PRICING
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-4">
            Predictable Pricing for Teachers & Coaching Centers
          </h2>
          <p className="font-sans text-text-secondary text-base sm:text-lg mb-8">
            Save dozens of hours every week. Create exam-ready past paper mock tests with official mark schemes in under 90 seconds.
          </p>

          {/* Billing Interval Toggle */}
          <div className="inline-flex items-center p-1 rounded-pill bg-surface-glass border border-surface-border">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 rounded-pill font-sans text-xs font-semibold transition-all ${
                !isAnnual
                  ? 'bg-accent-purple text-white shadow-glow'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-1.5 rounded-pill font-sans text-xs font-semibold transition-all flex items-center gap-1.5 ${
                isAnnual
                  ? 'bg-accent-purple text-white shadow-glow'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-1.5 py-0.5 rounded-pill bg-accent-cyan/20 text-accent-cyan text-[10px] font-mono">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;

            return (
              <div
                key={idx}
                className={`glass-panel p-8 flex flex-col justify-between relative transition-all duration-300 hover:scale-[1.02] ${
                  tier.isPopular
                    ? 'border-accent-purple shadow-glow bg-midnight-900/80 ring-1 ring-accent-purple'
                    : 'hover:border-surface-border-hover'
                }`}
              >
                {/* Popular Badge */}
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-pill bg-accent-purple text-white font-mono text-[10px] tracking-widest uppercase font-bold shadow-glow flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-accent-cyan" />
                    <span>{tier.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-control bg-accent-purple/20 border border-accent-purple/40 flex items-center justify-center text-accent-purple">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-display font-bold text-xl text-text-primary">
                      {tier.name}
                    </span>
                  </div>

                  <p className="font-sans text-xs text-text-secondary mb-6 min-h-[36px]">
                    {tier.description}
                  </p>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-1 mb-8 pb-6 border-b border-surface-border">
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-text-primary">
                      ${price}
                    </span>
                    <span className="font-sans text-xs text-text-secondary">
                      / month {isAnnual && '(billed annually)'}
                    </span>
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2.5 font-sans text-xs text-text-secondary"
                      >
                        <Check className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <Link href="/auth?flow=signup" className="w-full">
                  <Button
                    variant={tier.ctaVariant}
                    className="w-full justify-center"
                  >
                    {tier.ctaText}
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
