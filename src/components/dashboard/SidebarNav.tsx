'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  GraduationCap,
  LayoutDashboard,
  Database,
  Building2,
  BookOpen,
  CreditCard,
  ChevronLeft,
  ChevronRight,
  LogOut,
  ShieldCheck,
  ShieldAlert,
} from 'lucide-react';

interface SidebarNavProps {
  userEmail?: string;
  orgName?: string;
  isAdmin?: boolean;
}

export function SidebarNav({
  userEmail = 'educator@papergen.ai',
  orgName = 'Cambridge Coaching Institute',
  isAdmin: propIsAdmin,
}: SidebarNavProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [isAdmin, setIsAdmin] = useState(propIsAdmin ?? false);
  const pathname = usePathname();

  useEffect(() => {
    if (propIsAdmin !== undefined) {
      setIsAdmin(propIsAdmin);
      return;
    }
    if (typeof document !== 'undefined') {
      const hasAdminCookie =
        document.cookie.includes('papergen-admin-session=true') ||
        document.cookie.includes('launchpad-admin-session=true');
      setIsAdmin(hasAdminCookie);
    }
  }, [propIsAdmin]);

  // Primary navigation for Cambridge educators
  const baseNavItems = [
    { name: 'PaperGen Studio', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Question Bank', href: '/dashboard#question-bank', icon: Database },
    { name: 'Institute Branding', href: '/dashboard#branding', icon: Building2 },
    { name: 'Past Paper Archives', href: '/dashboard#archives', icon: BookOpen },
    { name: 'Subscription & Plans', href: '/#pricing', icon: CreditCard },
  ];

  // Admin Control Plane is strictly gated and ONLY visible to administrators
  const navItems = isAdmin
    ? [
        ...baseNavItems,
        { name: 'Admin Control Plane', href: '/admin', icon: ShieldAlert },
      ]
    : baseNavItems;

  const handleSignOut = () => {
    if (typeof document !== 'undefined') {
      document.cookie = 'papergen-session=; path=/; max-age=0';
      document.cookie = 'papergen-admin-session=; path=/; max-age=0';
      document.cookie = 'papergen-educator-email=; path=/; max-age=0';
      document.cookie = 'papergen-educator-name=; path=/; max-age=0';
    }
    window.location.href = '/auth';
  };

  return (
    <aside
      className={`transition-all duration-300 ease-in-out border-r border-surface-border bg-midnight-950/95 backdrop-blur-glass flex flex-col justify-between shrink-0 h-screen sticky top-0 z-40 ${
        collapsed ? 'w-20' : 'w-[260px]'
      }`}
    >
      <div>
        {/* Top Header */}
        <div className="h-16 border-b border-surface-border flex items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-9 h-9 rounded-control bg-accent-purple/20 border border-accent-purple/40 flex items-center justify-center text-accent-purple shrink-0 shadow-glow">
              <GraduationCap className="w-5 h-5" />
            </div>
            {!collapsed && (
              <div className="flex flex-col truncate">
                <span className="font-display font-bold text-sm text-text-primary tracking-tight truncate">
                  PaperGen
                </span>
                <span className="font-mono text-[9px] text-accent-cyan tracking-widest truncate">
                  CAMBRIDGE EXAM STUDIO
                </span>
              </div>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            className="w-7 h-7 rounded-control bg-surface-glass border border-surface-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-surface-border-hover transition-colors shrink-0"
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Organization / Role Badge */}
        {!collapsed && (
          <div className="p-4 mx-3 my-3 rounded-control bg-surface-glass border border-surface-border">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-status-success animate-ping" />
              <span className="font-mono text-[10px] text-accent-cyan tracking-wider uppercase">
                {isAdmin ? 'ADMINISTRATOR' : 'VERIFIED FACULTY'}
              </span>
            </div>
            <div className="font-display text-sm font-semibold text-text-primary truncate">
              {orgName}
            </div>
          </div>
        )}

        {/* Navigation Items */}
        <nav className="p-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-control font-sans text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-accent-purple text-text-primary shadow-glow font-semibold'
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-glass/60'
                }`}
                title={collapsed ? item.name : undefined}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {!collapsed && <span className="truncate">{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Profile and Sign Out */}
      <div className="p-3 border-t border-surface-border">
        <div
          className={`flex items-center gap-3 p-2 rounded-control bg-midnight-900/60 border border-surface-border ${
            collapsed ? 'justify-center' : ''
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-accent-purple/30 border border-accent-purple/50 flex items-center justify-center text-accent-purple font-mono text-xs font-bold shrink-0">
            {userEmail.charAt(0).toUpperCase()}
          </div>
          {!collapsed && (
            <div className="flex flex-col truncate min-w-0 flex-1">
              <span className="font-sans text-xs text-text-primary font-medium truncate">
                {userEmail}
              </span>
              <span className="font-mono text-[10px] text-status-success flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                <span>{isAdmin ? 'Super Admin' : 'Verified'}</span>
              </span>
            </div>
          )}
          {!collapsed && (
            <button
              type="button"
              onClick={handleSignOut}
              className="p-1.5 text-text-secondary hover:text-status-danger transition-colors shrink-0"
              title="Sign Out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
