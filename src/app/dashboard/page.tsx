import React from 'react';
import { SidebarNav } from '@/components/dashboard/SidebarNav';
import { TopStatsCards } from '@/components/dashboard/TopStatsCards';
import { OrderStatusTracker } from '@/components/dashboard/OrderStatusTracker';
import { PaginatedDataTable } from '@/components/dashboard/PaginatedDataTable';
import { PaperStudio } from '@/components/dashboard/PaperStudio';
import { GraduationCap } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex bg-midnight-950 text-text-primary">
      {/* 260px Collapsible Sidebar */}
      <SidebarNav />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-6 lg:p-10">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-surface-border gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-xs text-accent-cyan tracking-wider uppercase">
                CAMBRIDGE IGCSE & O-LEVEL EXAM STUDIO
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-status-success animate-ping" />
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight text-text-primary">
              PaperGen Examination Studio
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-control bg-surface-glass border border-surface-border font-mono text-xs">
              <GraduationCap className="w-3.5 h-3.5 text-accent-purple" />
              <span>Syllabus: Cambridge 4024 & 0580</span>
            </div>
          </div>
        </div>

        {/* Real-time Order & Subscription Status */}
        <OrderStatusTracker />

        {/* 4 KPI Cards */}
        <TopStatsCards />

        {/* Interactive PaperGen Studio (Autonomous Paper Generator & PDF/DOC Exporter) */}
        <section id="studio">
          <PaperStudio />
        </section>

        {/* Past Exam Question Bank Logs & History */}
        <div id="archives" className="mb-4 flex items-center justify-between pt-6">
          <div>
            <h2 className="font-display text-xl font-bold text-text-primary">
              Past Paper Archives & Generated Collections
            </h2>
            <p className="font-sans text-xs text-text-secondary">
              Classified Cambridge past papers and compiled worksheet records
            </p>
          </div>
        </div>

        <PaginatedDataTable />
      </main>
    </div>
  );
}
