"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Simple icon
function WidgetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z" />
    </svg>
  );
}

// Notification Center mock component
function NotificationCenterPreview({
  onMarkAll,
  onView,
}: {
  onMarkAll: () => void;
  onView: (title: string) => void;
}) {
  const items = [
    { title: "New comment on Task A", time: "2m ago", unread: true },
    { title: "You were mentioned by Alex", time: "15m ago", unread: true },
    { title: "Invoice #102 paid", time: "1h ago", unread: false },
    { title: "Reminder: Sprint planning at 3 PM", time: "3h ago", unread: false },
    { title: "New follower: Jordan", time: "Yesterday", unread: false },
  ];
  return (
    <div className="rounded-xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
        <div className="text-sm font-semibold text-slate-900">Notifications</div>
        <button onClick={onMarkAll} className="text-xs text-slate-500 hover:text-slate-700">Mark all as read</button>
      </div>
      <ul className="max-h-64 overflow-auto divide-y divide-slate-200">
        {items.map((n, i) => (
          <li key={i} className={`flex items-start gap-3 px-4 py-3 ${n.unread ? "bg-slate-50" : ""}`}>
            <span className={`mt-1 h-2 w-2 rounded-full ${n.unread ? "bg-[#1dcbf2]" : "bg-slate-300"}`} />
            <div className="flex-1">
              <div className="text-sm text-slate-900">{n.title}</div>
              <div className="text-xs text-slate-500">{n.time}</div>
            </div>
            <button onClick={() => onView(n.title)} className="text-xs text-[#1dcbf2] hover:text-[hsl(191,89%,46%)]">View</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const WIDGETS = [
  { name: "Notification Center", category: "Notifications", description: "Centralized feed of alerts, mentions, and updates.", isPopular: true },
  { name: "Timer", category: "Productivity", description: "Countdown and pomodoro timers.", isPopular: true },
  { name: "Weather", category: "Info", description: "Current weather snapshot." },
  { name: "Quote of the Day", category: "Wellness", description: "Daily inspirational quotes." },
  { name: "Quick Notes", category: "Notes", description: "Scratchpad for thoughts." },
  { name: "Task Widget", category: "Tasks", description: "Mini task list with priorities." },
  { name: "Calendar", category: "Scheduling", description: "This week at a glance." },
];

const FILTERS = ["Most Popular", "All", "Notifications", "Productivity", "Info", "Wellness", "Notes", "Tasks", "Scheduling"] as const;

type Filter = typeof FILTERS[number];

// Simple slugify for building widget detail URLs
const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export default function WidgetsPage() {
  const [selectedFilter, setSelectedFilter] = useState<Filter>("All");
  const [preview, setPreview] = useState<(typeof WIDGETS)[number] | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  // Auto-hide toast
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2500);
    return () => clearTimeout(t);
  }, [toast]);

  const filtered =
    selectedFilter === "All"
      ? WIDGETS
      : selectedFilter === "Most Popular"
      ? WIDGETS.filter((w: any) => w.isPopular)
      : WIDGETS.filter(w => w.category === selectedFilter);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="border-b border-slate-200 bg-white/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Widgets</h1>
          <p className="mt-4 text-base text-slate-400">Explore small, embeddable components you can drop into templates.</p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-6">
        <div className="flex flex-wrap justify-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-4 py-2 text-base font-semibold rounded-full ring-1 ring-inset transition-colors ${
                f === selectedFilter ? "bg-[#00CFFF] text-white ring-transparent" : "text-slate-600 ring-slate-200 hover:bg-slate-100"
              }`}
              aria-pressed={f === selectedFilter}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {preview && (
        <div role="dialog" aria-modal className="fixed inset-0 z-[70] flex items-center justify-center p-4">
          <button className="absolute inset-0 bg-black/40 backdrop-blur-sm" aria-label="Close preview" onClick={() => setPreview(null)} />
          <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#e9fbff] rounded-full">
                  <WidgetIcon className="h-6 w-6 text-[#1dcbf2]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{preview.name}</h3>
                  <div className="text-xs font-medium text-slate-500">{preview.category}</div>
                </div>
              </div>
              <button
                onClick={() => setPreview(null)}
                className="inline-flex items-center justify-center rounded-full p-2 text-slate-600 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,203,242,0.7)]"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-5">
              <p className="text-slate-600 mb-4">{preview.description}</p>
              {preview.name === "Notification Center" ? (
                <NotificationCenterPreview onMarkAll={() => setToast("All notifications marked as read")} onView={(t) => setToast(`Opened: ${t}`)} />
              ) : (
                <div className="h-56 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-400">
                  Widget mock preview for “{preview.name}”.
                </div>
              )}
            </div>
            <div className="px-5 py-4 border-t border-slate-200 flex justify-end gap-2">
              <button onClick={() => setPreview(null)} className="px-3 py-2 rounded-full text-sm font-semibold text-slate-600 hover:bg-slate-100">Close</button>
              <button type="button" onClick={() => setPreview(null)} className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-[#1dcbf2] shadow-sm shadow-[rgba(29,203,242,0.2)] hover:bg-[hsl(191,89%,46%)]">Use Widget (Mock)</button>
            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((w) => (
            <div key={w.name} className="group relative block p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all">
              {/* Category badge: slightly higher than default, not overlapping */}
              <div className="absolute top-8 right-8 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                {w.category}
              </div>
              {/* Popular badge (matches Templates positioning style near top-right) */}
              {w.isPopular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 bg-[#1dcbf2] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md z-10">
                  Popular
                </div>
              )}
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-[#e9fbff] rounded-full">
                  <WidgetIcon className="h-7 w-7 text-[#1dcbf2]" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  <Link
                    href={`/widgets/${slugify(w.name)}`}
                    className="hover:text-[#18b5d7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,203,242,0.7)] rounded"
                    aria-label={`Open full page for ${w.name}`}
                  >
                    {w.name}
                  </Link>
                </h3>
              </div>
              <p className="text-slate-600 mb-4">{w.description}</p>
              <div className="flex justify-between items-center pt-2">
                <button
                  type="button"
                  onClick={() => setPreview(w)}
                  className="text-sm font-semibold text-[#1dcbf2] hover:text-[#18b5d7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,203,242,0.7)] rounded"
                >
                  Preview
                </button>
                <Link
                  href={`/widgets/${slugify(w.name)}`}
                  className="rounded-full bg-[#1dcbf2] px-3 py-1.5 text-sm font-semibold text-white shadow-sm shadow-[rgba(29,203,242,0.2)] transition-colors group-hover:bg-[hsl(191,89%,46%)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,203,242,0.7)]"
                  aria-label={`Use ${w.name} widget`}
                >
                  Use Widget
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[80]">
          <div className="rounded-full bg-slate-900/90 text-white px-4 py-2 text-sm shadow-lg">
            {toast}
          </div>
        </div>
      )}
    </div>
  );
}