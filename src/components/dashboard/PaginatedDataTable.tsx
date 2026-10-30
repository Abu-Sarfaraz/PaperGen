'use client';

import React, { useState, useMemo } from 'react';
import {
  Search,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Download,
  CheckCircle2,
  Clock,
  AlertCircle,
  PlayCircle,
  FileText,
} from 'lucide-react';
import { downloadAsPdf } from '@/lib/export/documents';

export interface DeploymentRow {
  id: string;
  projectName: string;
  slug: string;
  commitSha: string;
  status: 'completed' | 'building' | 'queued' | 'failed';
  environment: 'production' | 'preview';
  duration: string;
  createdAt: string;
}

const mockDeployments: DeploymentRow[] = [
  {
    id: 'dep_01',
    projectName: 'Cambridge IGCSE Math 0580 Paper 4 Mock Exam (Orbital Mesh Portal)',
    slug: 'Cambridge CAIE 0580 • Summer 2024 Extended',
    commitSha: 'CAIE-0580',
    status: 'completed',
    environment: 'production',
    duration: '100 Marks',
    createdAt: '2026-10-30 14:22 UTC',
  },
  {
    id: 'dep_02',
    projectName: 'Cambridge O-Level 4024 Pure Algebra (Telemetry WebSocket Relay)',
    slug: 'Cambridge 4024 • Winter 2023 Structured',
    commitSha: 'CAIE-4024',
    status: 'completed',
    environment: 'production',
    duration: '80 Marks',
    createdAt: '2026-10-30 13:10 UTC',
  },
  {
    id: 'dep_03',
    projectName: 'IGCSE Physics 0625 Mechanics & Energy (Multi-Tenant Auth Gateway)',
    slug: 'Cambridge CAIE 0625 • March 2024 Extended',
    commitSha: 'CAIE-0625',
    status: 'building',
    environment: 'preview',
    duration: '80 Marks',
    createdAt: '2026-10-30 12:45 UTC',
  },
  {
    id: 'dep_04',
    projectName: 'IGCSE Chemistry 0620 Stoichiometry (Stripe Checkout Webhook Pod)',
    slug: 'Cambridge CAIE 0620 • Summer 2023 Theory',
    commitSha: 'CAIE-0620',
    status: 'completed',
    environment: 'production',
    duration: '80 Marks',
    createdAt: '2026-10-30 11:30 UTC',
  },
  {
    id: 'dep_05',
    projectName: 'Cambridge IGCSE Biology 0610 Cell Structure (Playwright Browser Cluster)',
    slug: 'Cambridge CAIE 0610 • Paper 2 Multiple Choice',
    commitSha: 'CAIE-0610',
    status: 'queued',
    environment: 'preview',
    duration: '40 Marks',
    createdAt: '2026-10-30 10:15 UTC',
  },
  {
    id: 'dep_06',
    projectName: 'O-Level Mathematics D (4024) Trigonometry & Vectors (Deep Space CDN Mirror)',
    slug: 'Cambridge 4024 • Paper 1 Non-Calculator',
    commitSha: 'CAIE-4024',
    status: 'completed',
    environment: 'production',
    duration: '75 Marks',
    createdAt: '2026-10-29 22:04 UTC',
  },
  {
    id: 'dep_07',
    projectName: 'IGCSE Economics 0455 Macroeconomics Test (Postgres RLS Advisor Monitor)',
    slug: 'Cambridge CAIE 0455 • Paper 2 Structured',
    commitSha: 'CAIE-0455',
    status: 'failed',
    environment: 'preview',
    duration: '60 Marks',
    createdAt: '2026-10-29 19:40 UTC',
  },
  {
    id: 'dep_08',
    projectName: 'Cambridge IGCSE Additional Math 0606 (Spacecraft Sensor Ingestion)',
    slug: 'Cambridge CAIE 0606 • Paper 1 Pure Mathematics',
    commitSha: 'CAIE-0606',
    status: 'completed',
    environment: 'production',
    duration: '50 Marks',
    createdAt: '2026-10-29 16:18 UTC',
  },
];

export function PaginatedDataTable() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [sortKey, setSortKey] = useState<keyof DeploymentRow>('createdAt');
  const [sortAsc, setSortAsc] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const filteredData = useMemo(() => {
    return mockDeployments.filter((item) => {
      const matchesSearch =
        search === '' ||
        item.projectName.toLowerCase().includes(search.toLowerCase()) ||
        item.commitSha.toLowerCase().includes(search.toLowerCase()) ||
        item.slug.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === 'all' || item.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [search, statusFilter]);

  const sortedData = useMemo(() => {
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      if (aVal < bVal) return sortAsc ? -1 : 1;
      if (aVal > bVal) return sortAsc ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortKey, sortAsc]);

  const totalPages = Math.max(1, Math.ceil(sortedData.length / pageSize));
  const validCurrentPage = Math.min(currentPage, totalPages);

  const paginatedData = useMemo(() => {
    const startIndex = (validCurrentPage - 1) * pageSize;
    return sortedData.slice(startIndex, startIndex + pageSize);
  }, [sortedData, validCurrentPage, pageSize]);

  const handleSort = (key: keyof DeploymentRow) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const getStatusBadge = (status: DeploymentRow['status']) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-pill bg-status-success/15 text-status-success border border-status-success/30 font-mono text-[11px] font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>READY</span>
          </span>
        );
      case 'building':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-pill bg-accent-purple/15 text-accent-purple border border-accent-purple/30 font-mono text-[11px] font-semibold">
            <Clock className="w-3.5 h-3.5 animate-spin" />
            <span>SYNTHESIZING</span>
          </span>
        );
      case 'queued':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-pill bg-status-warning/15 text-status-warning border border-status-warning/30 font-mono text-[11px] font-semibold">
            <PlayCircle className="w-3.5 h-3.5" />
            <span>QUEUED</span>
          </span>
        );
      case 'failed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-pill bg-status-danger/15 text-status-danger border border-status-danger/30 font-mono text-[11px] font-semibold">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>ARCHIVED</span>
          </span>
        );
    }
  };

  return (
    <div className="glass-panel p-6">
      {/* Controls: Search and Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-text-secondary absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search projects or commit / papers..."
            className="w-full pl-9 pr-4 py-2 bg-midnight-900 border border-surface-border rounded-control text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-purple font-sans"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <label htmlFor="status-filter-select" className="text-xs text-text-secondary font-mono">
            STATUS:
          </label>
          <select
            id="status-filter-select"
            aria-label="Filter deployments by status"
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="bg-midnight-900 border border-surface-border text-text-primary text-xs rounded-control px-3 py-2 focus:outline-none focus:border-accent-purple font-sans"
          >
            <option value="all">All Statuses</option>
            <option value="completed">Ready</option>
            <option value="building">Synthesizing</option>
            <option value="queued">Queued</option>
            <option value="failed">Archived</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse font-sans text-sm">
          <thead>
            <tr className="border-b border-surface-border text-text-secondary font-mono text-xs uppercase tracking-wider">
              <th className="py-3 px-4">
                <button
                  type="button"
                  onClick={() => handleSort('projectName')}
                  className="flex items-center gap-1.5 hover:text-text-primary"
                >
                  <span>Exam Paper & Syllabus</span>
                  <ArrowUpDown className="w-3.5 h-3.5" />
                </button>
              </th>
              <th className="py-3 px-4">
                <button
                  type="button"
                  onClick={() => handleSort('status')}
                  className="flex items-center gap-1.5 hover:text-text-primary"
                >
                  <span>Status</span>
                  <ArrowUpDown className="w-3.5 h-3.5" />
                </button>
              </th>
              <th className="py-3 px-4">Syllabus Code</th>
              <th className="py-3 px-4">Format</th>
              <th className="py-3 px-4">Marks</th>
              <th className="py-3 px-4">
                <button
                  type="button"
                  onClick={() => handleSort('createdAt')}
                  className="flex items-center gap-1.5 hover:text-text-primary"
                >
                  <span>Generated Date</span>
                  <ArrowUpDown className="w-3.5 h-3.5" />
                </button>
              </th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-border">
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-8 text-center text-text-secondary">
                  No examination papers matched your search criteria.
                </td>
              </tr>
            ) : (
              paginatedData.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-surface-glass/40 transition-colors"
                >
                  <td className="py-3.5 px-4">
                    <div className="font-display font-semibold text-text-primary flex items-center gap-2">
                      <FileText className="w-4 h-4 text-accent-purple shrink-0" />
                      <span>{row.projectName}</span>
                    </div>
                    <div className="font-mono text-xs text-text-secondary pl-6">
                      {row.slug}
                    </div>
                  </td>
                  <td className="py-3.5 px-4">{getStatusBadge(row.status)}</td>
                  <td className="py-3.5 px-4">
                    <span className="font-mono text-xs px-2 py-0.5 rounded bg-midnight-900 border border-surface-border text-accent-cyan font-semibold">
                      {row.commitSha}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs">
                    <span
                      className={`px-2 py-0.5 rounded-pill ${
                        row.environment === 'production'
                          ? 'bg-accent-purple/20 text-accent-purple'
                          : 'bg-midnight-900 text-text-secondary'
                      }`}
                    >
                      {row.environment === 'production' ? 'PDF & DOCX' : 'Draft'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-text-secondary">
                    {row.duration}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-xs text-text-secondary">
                    {row.createdAt}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      type="button"
                      onClick={() => {
                        downloadAsPdf(
                          `# ${row.projectName}\n\n**Curriculum Details:** ${row.slug}\n**Code:** ${row.commitSha}\n**Total Marks:** ${row.duration}\n\n## Section A: Examination Questions\n[Official Cambridge past paper questions and sub-parts]\n\n## Section B: Mark Scheme\n[Official Cambridge marking scheme]`,
                          row.projectName.replace(/[^a-zA-Z0-9]/g, '_').slice(0, 30)
                        );
                      }}
                      className="px-2.5 py-1 text-xs text-accent-cyan hover:text-white bg-accent-purple/20 hover:bg-accent-purple border border-accent-purple/40 rounded transition-all inline-flex items-center gap-1.5 font-sans font-medium"
                      title="Download Exam Paper PDF"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-surface-border">
        <div className="text-xs font-mono text-text-secondary">
          Showing{' '}
          <span className="text-text-primary font-semibold">
            {sortedData.length === 0
              ? 0
              : (validCurrentPage - 1) * pageSize + 1}
          </span>{' '}
          to{' '}
          <span className="text-text-primary font-semibold">
            {Math.min(validCurrentPage * pageSize, sortedData.length)}
          </span>{' '}
          of{' '}
          <span className="text-text-primary font-semibold">
            {sortedData.length}
          </span>{' '}
          collections
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={validCurrentPage === 1}
            aria-label="Previous Page"
            className="p-2 rounded-control bg-surface-glass border border-surface-border text-text-secondary hover:text-text-primary hover:border-surface-border-hover disabled:opacity-40 disabled:pointer-events-none transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-xs font-mono px-3 text-text-secondary">
            Page {validCurrentPage} of {totalPages}
          </span>

          <button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={validCurrentPage === totalPages}
            aria-label="Next Page"
            className="p-2 rounded-control bg-surface-glass border border-surface-border text-text-secondary hover:text-text-primary hover:border-surface-border-hover disabled:opacity-40 disabled:pointer-events-none transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
