'use client';

import React from 'react';
import { BookOpen, Zap, Database, ShieldCheck, TrendingUp } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changePositive: boolean;
  metric: string;
  icon: React.ElementType;
}

const stats: StatCardProps[] = [
  {
    title: 'ACTIVE PROJECTS',
    value: '18 Papers Active',
    change: '+5 generated this week',
    changePositive: true,
    metric: 'Cambridge 0580 / 4024',
    icon: BookOpen,
  },
  {
    title: 'PIPELINE VELOCITY',
    value: '1.4s Synthesis',
    change: '-0.3s vs baseline',
    changePositive: true,
    metric: 'Dual AI Failover Ready',
    icon: Zap,
  },
  {
    title: 'MONTHLY API QUOTA',
    value: '842.1K Tokens',
    change: '84.2% quota available',
    changePositive: true,
    metric: 'Gemini + OpenRouter',
    icon: Database,
  },
  {
    title: 'RLS SECURITY STATUS',
    value: '100% Zero-Trust',
    change: '0 security advisories',
    changePositive: true,
    metric: 'Exam Bank RLS Guarded',
    icon: ShieldCheck,
  },
];

export function TopStatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;

        return (
          <div
            key={idx}
            className="glass-panel p-5 flex flex-col justify-between hover:border-surface-border-hover transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-text-secondary tracking-wider uppercase">
                  {stat.title}
                </span>
                <div className="w-8 h-8 rounded-control bg-accent-purple/15 border border-accent-purple/30 flex items-center justify-center text-accent-purple">
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              <div className="font-display text-2xl font-bold text-text-primary mb-1">
                {stat.value}
              </div>

              <div className="flex items-center gap-1.5 text-xs mb-3">
                <TrendingUp
                  className={`w-3.5 h-3.5 ${
                    stat.changePositive
                      ? 'text-status-success'
                      : 'text-status-danger'
                  }`}
                />
                <span
                  className={
                    stat.changePositive
                      ? 'text-status-success'
                      : 'text-status-danger'
                  }
                >
                  {stat.change}
                </span>
              </div>
            </div>

            <div className="pt-3 border-t border-surface-border text-xs font-mono text-text-secondary">
              {stat.metric}
            </div>
          </div>
        );
      })}
    </div>
  );
}
