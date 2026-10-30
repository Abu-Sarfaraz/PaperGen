import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { HeroPaperGen } from '@/components/marketing/HeroPaperGen';
import { FeatureGrid3Col } from '@/components/marketing/FeatureGrid3Col';
import { GlassPricingTable } from '@/components/marketing/GlassPricingTable';
import { TestimonialsCarousel } from '@/components/marketing/TestimonialsCarousel';
import { ResponsiveFooter } from '@/components/marketing/ResponsiveFooter';

describe('Phase 3 Plane A UI: Marketing Components (PaperGen IGCSE Studio)', () => {
  it('renders HeroPaperGen with Cambridge IGCSE badge, H1, and dual CTAs', () => {
    render(<HeroPaperGen />);
    expect(screen.getByText(/Cambridge IGCSE & O\/A-Level Past Paper Engine Active/i)).toBeInTheDocument();
    expect(screen.getByText(/IGCSE Exam Papers/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Open Paper Studio/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Get Started Free/i })).toBeInTheDocument();
  });

  it('renders FeatureGrid3Col with 3-column features and metrics', () => {
    render(<FeatureGrid3Col />);
    expect(screen.getByText(/Classified IGCSE Past Paper Bank/i)).toBeInTheDocument();
    expect(screen.getByText(/Cognitive Difficulty Curves/i)).toBeInTheDocument();
    expect(screen.getByText(/1-Click Atomic Question Swapping/i)).toBeInTheDocument();
    expect(screen.getByText('1,200+ QUESTIONS')).toBeInTheDocument();
    expect(screen.getByText('3 PEDAGOGIC CURVES')).toBeInTheDocument();
  });

  it('renders GlassPricingTable with Solo Educator, Coaching Center, and School & Academy tiers and toggles monthly/annual', () => {
    render(<GlassPricingTable />);
    expect(screen.getByText('Solo Educator')).toBeInTheDocument();
    expect(screen.getByText('Coaching Center')).toBeInTheDocument();
    expect(screen.getByText('School & Academy')).toBeInTheDocument();

    // Default monthly
    expect(screen.getByText('$29')).toBeInTheDocument();
    expect(screen.getByText('$99')).toBeInTheDocument();
    expect(screen.getByText('$299')).toBeInTheDocument();

    // Switch to annual
    const annualBtn = screen.getByRole('button', { name: /Annual Billing/i });
    fireEvent.click(annualBtn);

    // 20% discounted prices
    expect(screen.getByText('$24')).toBeInTheDocument();
    expect(screen.getByText('$79')).toBeInTheDocument();
    expect(screen.getByText('$249')).toBeInTheDocument();
  });

  it('renders TestimonialsCarousel and navigates between testimonials', () => {
    render(<TestimonialsCarousel />);
    expect(screen.getByText(/Tanvir Ahmed/i)).toBeInTheDocument();

    // Click next
    const nextBtn = screen.getByRole('button', { name: /Next testimonial/i });
    fireEvent.click(nextBtn);
    expect(screen.getByText(/Sarah Jenkins/i)).toBeInTheDocument();
  });

  it('renders ResponsiveFooter with status pill and legal info', () => {
    render(<ResponsiveFooter />);
    expect(screen.getByText(/All Systems Nominal/i)).toBeInTheDocument();
    expect(screen.getByText(/DESIGN.md Token Verified/i)).toBeInTheDocument();
  });
});
