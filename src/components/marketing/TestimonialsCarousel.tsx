'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  school: string;
  avatarText: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'PaperGen replaced hours of copy-pasting past papers from PDF archives. In under 90 seconds, I created a 30-mark Algebra & Trigonometry revision mock complete with student answer lines, our institute emblem, and Cambridge mark schemes.',
    author: 'Tanvir Ahmed',
    role: 'Senior Cambridge Mathematics Faculty',
    school: 'AIMS Cambridge Coaching Center',
    avatarText: 'TA',
  },
  {
    quote:
      'The cognitive difficulty curves are phenomenal. Being able to toggle between Foundation Drill for weaker students and A* Challenger for scholarship batches has completely transformed our exam preparation cycle.',
    author: 'Sarah Jenkins',
    role: 'Head of Physics (IGCSE & A-Level)',
    school: 'British International Academy',
    avatarText: 'SJ',
  },
  {
    quote:
      'The 1-click question swapper is genius. If a past question is too familiar to my batch, I click swap and it rotates to another verified past question with matching marks while updating Section B answers automatically.',
    author: 'Rashid Al-Mansoor',
    role: 'Founder & Principal Academic Director',
    school: 'Apex Cambridge Tutorial',
    avatarText: 'RA',
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-midnight-950/60 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="w-12 h-12 rounded-full bg-accent-purple/20 border border-accent-purple/40 flex items-center justify-center text-accent-purple mx-auto mb-6 shadow-glow">
          <Quote className="w-6 h-6" />
        </div>

        {/* Testimonial Quote */}
        <blockquote className="font-display text-lg sm:text-xl md:text-2xl font-medium text-text-primary mb-8 leading-relaxed min-h-[120px] flex items-center justify-center">
          &ldquo;{current.quote}&rdquo;
        </blockquote>

        {/* Stars */}
        <div className="flex items-center justify-center gap-1 mb-4 text-accent-cyan">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>

        {/* Author Details */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-accent-purple/30 border border-accent-purple text-accent-purple font-mono font-bold text-sm flex items-center justify-center">
            {current.avatarText}
          </div>
          <div className="text-left">
            <div className="font-sans font-bold text-sm text-text-primary">
              {current.author}
            </div>
            <div className="font-mono text-xs text-text-secondary">
              {current.role} • <span className="text-accent-cyan">{current.school}</span>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            className="w-10 h-10 rounded-control bg-surface-glass border border-surface-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-surface-border-hover transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <span className="font-mono text-xs text-text-secondary">
            0{currentIndex + 1} / 0{testimonials.length}
          </span>

          <button
            type="button"
            onClick={next}
            className="w-10 h-10 rounded-control bg-surface-glass border border-surface-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-surface-border-hover transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
