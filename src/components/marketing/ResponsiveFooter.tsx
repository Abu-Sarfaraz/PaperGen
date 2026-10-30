'use client';

import React from 'react';
import Link from 'next/link';
import { GraduationCap, CheckCircle2 } from 'lucide-react';

export function ResponsiveFooter() {
  return (
    <footer className="border-t border-surface-border bg-midnight-950 text-text-secondary font-sans text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-control bg-accent-purple/20 border border-accent-purple/40 flex items-center justify-center text-accent-purple group-hover:border-accent-purple transition-all shadow-glow">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-base text-text-primary tracking-tight">
                PaperGen
              </span>
            </Link>
            <p className="text-text-secondary leading-relaxed">
              Autonomous examination paper synthesizer for Cambridge IGCSE, O-Level, and A-Level educators. Generate print-ready worksheets with official mark schemes in 90 seconds.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-pill bg-status-success/10 border border-status-success/30 text-status-success font-mono text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-status-success animate-ping" />
              <span>All Systems Nominal • IGCSE Bank Active</span>
            </div>
          </div>

          {/* Subjects & Curriculum */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text-primary font-semibold mb-4">
              Curricula & Subjects
            </h4>
            <ul className="space-y-2.5">
              <li>
                <span className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                  Cambridge IGCSE Mathematics (0580)
                </span>
              </li>
              <li>
                <span className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                  Cambridge O-Level Mathematics D (4024)
                </span>
              </li>
              <li>
                <span className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                  Cambridge IGCSE Physics (0625)
                </span>
              </li>
              <li>
                <span className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                  Cambridge A-Level Pure Mathematics (9709)
                </span>
              </li>
              <li>
                <span className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer">
                  Edexcel International GCSE (9-1)
                </span>
              </li>
            </ul>
          </div>

          {/* Platform Features */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text-primary font-semibold mb-4">
              Paper Studio
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-text-primary transition-colors flex items-center gap-1.5"
                >
                  <span>Auto Mock Generator</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-text-primary transition-colors"
                >
                  Past Question Bank Explorer
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-text-primary transition-colors"
                >
                  Institute Watermark & Branding
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="hover:text-text-primary transition-colors"
                >
                  Print-Ready A4 PDF & Word Export
                </Link>
              </li>
              <li>
                <Link
                  href="/#curriculums"
                  className="hover:text-text-primary transition-colors"
                >
                  Cambridge Past Paper Syllabus
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-text-primary font-semibold mb-4">
              Academic Security
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center gap-1.5 text-text-secondary">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Supabase Multi-Tenant RLS</span>
              </li>
              <li className="flex items-center gap-1.5 text-text-secondary">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan" />
                <span>KaTeX Vector Typography</span>
              </li>
              <li className="flex items-center gap-1.5 text-text-secondary">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan" />
                <span>DESIGN.md Token Verified</span>
              </li>
              <li className="flex items-center gap-1.5 text-text-secondary">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan" />
                <span>WCAG AA Accessibility</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} PaperGen AI Studio. Built for Cambridge IGCSE & O-Level educators.
          </div>
          <div className="flex items-center gap-6">
            <span>Cambridge Assessment Aligned</span>
            <span>Zero-Data Leakage RLS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
