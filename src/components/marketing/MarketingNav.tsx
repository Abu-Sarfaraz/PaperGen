'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { GraduationCap, Menu, X, Sparkles } from 'lucide-react';

export function MarketingNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight-950/80 backdrop-blur-glass border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-control bg-accent-purple/20 border border-accent-purple/40 flex items-center justify-center text-accent-purple group-hover:scale-105 group-hover:border-accent-purple transition-all shadow-glow">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg text-text-primary tracking-tight">
              PaperGen
            </span>
            <span className="font-mono text-[9px] text-accent-cyan tracking-widest -mt-1 uppercase">
              IGCSE EXAM STUDIO
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-text-secondary">
          <a
            href="#features"
            className="hover:text-text-primary transition-colors"
          >
            Capabilities
          </a>
          <a
            href="#pricing"
            className="hover:text-text-primary transition-colors"
          >
            Pricing
          </a>
          <Link
            href="/dashboard"
            className="hover:text-text-primary transition-colors flex items-center gap-1.5"
          >
            <span>Paper Studio</span>
            <span className="px-1.5 py-0.5 rounded-pill bg-accent-purple/20 text-accent-purple text-[10px] font-mono">
              LIVE
            </span>
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/auth">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="primary" size="sm" className="gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Create Paper</span>
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-control text-text-secondary hover:text-text-primary hover:bg-surface-glass border border-transparent hover:border-surface-border transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-surface-border bg-midnight-950/95 backdrop-blur-glass px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col gap-3 font-sans text-base text-text-secondary">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-control hover:text-text-primary hover:bg-surface-glass"
            >
              Capabilities
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-control hover:text-text-primary hover:bg-surface-glass"
            >
              Pricing
            </a>
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-control text-accent-purple font-medium flex items-center justify-between hover:bg-surface-glass"
            >
              <span>Paper Studio</span>
              <span className="px-1.5 py-0.5 rounded-pill bg-accent-purple/20 text-[10px] font-mono">
                LIVE
              </span>
            </Link>
          </nav>
          <div className="flex flex-col gap-2 pt-2 border-t border-surface-border">
            <Link href="/auth" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full">
                Sign In
              </Button>
            </Link>
            <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full">
                Create Paper
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
