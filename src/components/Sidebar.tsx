"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  CalendarDays,
  FileText,
  LayoutDashboard,
  Settings,
  Sparkles,
  Waypoints,
} from "lucide-react";
import type { NavigationItem } from "@/types/domain";

const navigationItems: NavigationItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/projects", label: "Projects", icon: Waypoints },
  { href: "/actions", label: "Actions", icon: Sparkles },
  { href: "/documents", label: "Documents", icon: FileText },
  { href: "/calendar", label: "Calendar", icon: CalendarDays },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="hidden w-64 shrink-0 border-r border-field-200 bg-white px-4 py-5 lg:flex lg:flex-col">
        <Link href="/dashboard" className="flex items-center gap-3 px-2">
          <div className="flex size-10 items-center justify-center rounded-lg bg-ink-950 text-white">
            <BarChart3 size={20} aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-950">Operiq</p>
            <p className="text-xs text-ink-600">Operational Intelligence</p>
          </div>
        </Link>

        <nav className="mt-8 space-y-1" aria-label="Main navigation">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex h-10 items-center gap-3 rounded-md px-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-field-100 text-ink-950"
                    : "text-ink-600 hover:bg-field-50 hover:text-ink-950"
                }`}
              >
                <Icon size={18} aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-md border border-field-200 bg-field-50 p-3">
          <p className="text-xs font-semibold uppercase text-ink-600">Briefing State</p>
          <p className="mt-2 text-sm font-medium text-ink-950">3 risk signals need review</p>
          <p className="mt-1 text-xs leading-5 text-ink-600">
            Updated from mock operational data. No integrations connected.
          </p>
        </div>
      </aside>

      <nav
        className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-6 border-t border-field-200 bg-white px-2 py-2 lg:hidden"
        aria-label="Mobile navigation"
      >
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex h-12 flex-col items-center justify-center gap-1 rounded-md text-[11px] font-medium ${
                isActive ? "bg-field-100 text-ink-950" : "text-ink-600"
              }`}
            >
              <Icon size={17} aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
