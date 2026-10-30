'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { GraduationCap, Sparkles, BookOpen, CheckCircle2, ArrowRight } from 'lucide-react';

export function HeroPaperGen() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Background radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-purple/15 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-accent-cyan/10 blur-[100px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Animated Educational Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-surface-glass border border-surface-border text-accent-purple text-xs font-mono uppercase tracking-widest mb-8 backdrop-blur-glass hover:border-surface-border-hover transition-colors">
          <Sparkles className="w-3.5 h-3.5 text-accent-cyan animate-pulse" />
          <span>Cambridge IGCSE & O/A-Level Past Paper Engine Active</span>
        </div>

        {/* H1 Heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary max-w-4xl mx-auto leading-[1.1] mb-6">
          Create Cambridge{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-purple via-accent-cyan to-accent-purple">
            IGCSE Exam Papers
          </span>{' '}
          in 90 Seconds
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
          The autonomous past paper synthesizer for teachers and coaching centers.
          Filter classified past questions by topic, set cognitive difficulty curves,
          add your custom institute watermark, and export print-ready PDF and Word files with official mark schemes.
        </p>

        {/* Dual CTA Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/dashboard">
            <Button size="lg" variant="primary" className="w-full sm:w-auto gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Open Paper Studio</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>

          <Link href="/auth?flow=signup">
            <Button size="lg" variant="glass" className="w-full sm:w-auto gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Get Started Free</span>
            </Button>
          </Link>
        </div>

        {/* Live Exam Paper Preview Frame */}
        <div className="max-w-4xl mx-auto glass-panel p-4 sm:p-6 text-left shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-surface-border pb-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-status-danger" />
              <div className="w-3 h-3 rounded-full bg-status-warning" />
              <div className="w-3 h-3 rounded-full bg-status-success" />
              <span className="font-mono text-xs text-text-secondary ml-2">
                exam-preview://cambridge-igcse-0580/mock-paper-2026.pdf
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-status-success animate-ping" />
              <span className="font-mono text-xs text-status-success font-medium">
                CAIE STANDARD CURVE (30% E / 50% M / 20% H)
              </span>
            </div>
          </div>

          {/* Exam Sheet Mock Display */}
          <div className="bg-midnight-900/90 rounded-control border border-surface-border p-5 relative overflow-hidden">
            {/* Watermark in Preview */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
              <span className="text-6xl font-black rotate-[-25deg] text-text-primary">
                THE COACH • TANAS SIR
              </span>
            </div>

            {/* Header block */}
            <div className="flex justify-between items-start border-b border-surface-border pb-4 mb-4">
              <div>
                <span className="text-xs font-mono text-accent-cyan tracking-wider uppercase block">
                  Cambridge Assessment International Education
                </span>
                <h3 className="font-display font-bold text-lg text-text-primary">
                  Mathematics (Syllabus D) — 4024 / Extended Mock
                </h3>
                <span className="text-xs text-text-secondary font-mono">
                  Target Marks: 30 Marks • Duration: 45 Mins • Calculator Permitted
                </span>
              </div>
              <div className="text-right">
                <span className="px-2.5 py-1 rounded bg-accent-purple/20 border border-accent-purple/40 text-accent-purple font-mono text-xs font-semibold">
                  Official Mark Scheme Attached
                </span>
              </div>
            </div>

            {/* Sample Question Row */}
            <div className="space-y-4 font-sans text-sm">
              <div className="p-3.5 rounded-control bg-midnight-950/80 border border-surface-border">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-accent-purple">Question 1 • Algebra & Graphs</span>
                  <span className="font-mono text-xs bg-midnight-800 px-2 py-0.5 rounded text-accent-cyan">[4 Marks]</span>
                </div>
                <p className="text-text-primary mb-3">
                  Solve the quadratic equation using the quadratic formula: <span className="font-mono text-accent-cyan">2x² - 7x + 3 = 0</span>. Show all working clearly.
                </p>
                <div className="h-12 border-b border-dashed border-surface-border flex items-end justify-end">
                  <span className="text-xs font-mono text-text-secondary">Answer: x = ______ or x = ______</span>
                </div>
              </div>

              <div className="p-3.5 rounded-control bg-midnight-950/80 border border-surface-border">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-accent-purple">Question 2 • Trigonometry & Vectors</span>
                  <span className="font-mono text-xs bg-midnight-800 px-2 py-0.5 rounded text-accent-cyan">[5 Marks]</span>
                </div>
                <p className="text-text-primary mb-3">
                  In triangle ABC, AB = 8.5 cm, BC = 12.0 cm, and angle ABC = 65°. Calculate the length of AC correct to 3 significant figures.
                </p>
                <div className="h-12 border-b border-dashed border-surface-border flex items-end justify-end">
                  <span className="text-xs font-mono text-text-secondary">Answer: AC = ________ cm</span>
                </div>
              </div>
            </div>

            {/* Feature Highlights bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs mt-4 pt-4 border-t border-surface-border">
              <div className="flex items-center gap-2 text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-status-success shrink-0" />
                <span>1-Click Question Swap</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-status-success shrink-0" />
                <span>Vector KaTeX Math Rendering</span>
              </div>
              <div className="flex items-center gap-2 text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-status-success shrink-0" />
                <span>Download as PDF & DOC</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Backwards-compatible alias
export const HeroLaunchPad = HeroPaperGen;
