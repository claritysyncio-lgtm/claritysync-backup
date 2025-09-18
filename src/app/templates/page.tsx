"use client";

import { useState, useEffect, type FC, type SVGProps } from "react";
import Link from "next/link";

// --- Icon Components ---

const SearchIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
      clipRule="evenodd"
    />
  </svg>
);

const GenericIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v2h-2zm0 4h2v6h-2z" />
  </svg>
);

const SecondBrainIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
);

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const TEMPLATES = [
  {
    name: "Student Dashboard",
    description: "Keep track of your classes, assignments, and notes in one organized space.",
    category: "Student",
    Icon: GenericIcon,
    isPopular: true,
  },
  {
    name: "All-in-One Life OS",
    description: "A comprehensive system to manage your personal life, from daily tasks to long-term goals.",
    category: "Life",
    Icon: GenericIcon,
    isPopular: true,
  },
  {
    name: "Business Hub",
    description: "Centralize your business operations, from project management to client relations.",
    category: "Business",
    Icon: GenericIcon,
  },
  {
    name: "Advanced Task Manager",
    description: "A powerful to-do list and project tracker for individuals and teams.",
    category: "Tasks",
    Icon: GenericIcon,
  },
  {
    name: "Second Brain",
    description: "Capture and connect your ideas, notes, and knowledge in a digital second brain.",
    category: "Knowledge",
    Icon: SecondBrainIcon,
  },
  {
    name: "Freelancer CRM",
    description: "Manage your clients, projects, and invoices with this all-in-one freelancer toolkit.",
    category: "Freelancer",
    Icon: GenericIcon,
  },
  {
    name: "Content Creator Hub",
    description: "Plan and organize your content creation workflow, from ideation to publishing.",
    category: "Content",
    Icon: GenericIcon,
  },
  {
    name: "Personal Finance Tracker",
    description: "Manage your budget, expenses, and savings goals effectively.",
    category: "Finance",
    Icon: GenericIcon,
  },
  {
    name: "Habit Builder",
    description: "Track and build positive habits with daily check-ins and progress reports.",
    category: "Habit",
    Icon: GenericIcon,
  },
  {
    name: "Daily Journal",
    description: "Reflect on your day, track your mood, and practice mindfulness.",
    category: "Journals",
    Icon: GenericIcon,
  },
];

const FILTERS = [
  "Most Popular",
  "All",
  "Student / Academic Templates",
  "All-in-One Life / Personal Productivity Planners",
  "Business / Business Operations Hubs",
  "Content Planning / Creator Tools",
  "Finance / Budget & Expense Trackers",
  "Habit Tracking",
  "Task & Project Management",
  "“Second Brain” / Knowledge Management",
  "Journals / Mental Wellness / Self-Care",
];

export default function TemplatesPage() {
  const [selectedFilter, setSelectedFilter] = useState("Most Popular");
  const [previewTemplate, setPreviewTemplate] = useState<typeof TEMPLATES[number] | null>(null);

  const categoryMap: Record<string, string> = {
    "Student / Academic Templates": "Student",
    "All-in-One Life / Personal Productivity Planners": "Life",
    "Business / Business Operations Hubs": "Business",
    "Content Planning / Creator Tools": "Content",
    "Finance / Budget & Expense Trackers": "Finance",
    "Habit Tracking": "Habit",
    "Task & Project Management": "Tasks",
    "“Second Brain” / Knowledge Management": "Knowledge",
    "Journals / Mental Wellness / Self-Care": "Journals",
  };

  const getFilteredTemplates = () => {
    if (selectedFilter === "All") return TEMPLATES;
    if (selectedFilter === "Most Popular") return TEMPLATES.filter(t => t.isPopular);
    const category = categoryMap[selectedFilter];
    if (category) return TEMPLATES.filter(t => t.category === category);
    return TEMPLATES;
  };
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 flex items-center justify-center gap-2">
              <span>Templates</span>

            </h1>
            <p className="mt-4 text-base text-slate-400">
              Kickstart your journey with our pre-built templates.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-6">
        <div className="relative max-w-2xl mx-auto mb-6">
          <input
            type="search"
            placeholder="Search templates…"
            className="w-full pl-4 pr-10 py-3 rounded-full border border-slate-300 focus:ring-2 focus:ring-[#1dcbf2]/50 focus:border-[#1dcbf2] outline-none transition-colors"
          />
          <SearchIcon className="absolute top-1/2 right-4 -translate-y-1/2 h-5 w-5 text-slate-400" />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 text-base font-semibold rounded-full ring-1 ring-inset transition-colors ${
                filter === selectedFilter
                  ? "bg-[#00CFFF] text-white ring-transparent"
                  : "text-slate-600 ring-slate-200 hover:bg-slate-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10">
        {/* Centered Preview Modal */}
        {previewTemplate && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${previewTemplate.name} preview`}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          >
            {/* Backdrop */}
            <button
              aria-label="Close preview"
              onClick={() => setPreviewTemplate(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Modal content */}
            <div className="relative w-full max-w-3xl rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#e9fbff] rounded-full">
                    <previewTemplate.Icon className="h-6 w-6 text-[#1dcbf2]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{previewTemplate.name}</h3>
                    <div className="text-xs font-medium text-slate-500">{previewTemplate.category}</div>
                  </div>
                </div>
                <button
                  onClick={() => setPreviewTemplate(null)}
                  className="inline-flex items-center justify-center rounded-full p-2 text-slate-600 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,203,242,0.7)]"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Body: simple preview block */}
              <div className="p-5">
                <p className="text-slate-600 mb-4">{previewTemplate.description}</p>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-semibold text-slate-500 mb-2">Preview</div>
                  <div className="h-56 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400">
                    Coming soon: rich preview for “{previewTemplate.name}”.
                  </div>
                </div>
              </div>

              {/* Footer actions */}
              <div className="px-5 py-4 border-t border-slate-200 flex justify-end gap-2">
                <button
                  onClick={() => setPreviewTemplate(null)}
                  className="px-3 py-2 rounded-full text-sm font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Close
                </button>
                <Link
                  href={`/templates/${slugify(previewTemplate.name)}`}
                  className="px-4 py-2 rounded-full text-sm font-semibold text-white bg-[#1dcbf2] shadow-sm shadow-[rgba(29,203,242,0.2)] hover:bg-[hsl(191,89%,46%)]"
                  aria-label={`Open full page for ${previewTemplate.name}`}
                  onClick={() => setPreviewTemplate(null)}
                >
                  Open Full Page
                </Link>
              </div>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredTemplates().map((template) => (
            <div
              key={template.name}
            className="group relative block p-8 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all"
            >
              {template.isPopular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 bg-[#1dcbf2] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                  Popular
                </div>
              )}
              <div className="absolute top-8 right-8 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                {template.category}
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Link href={`/templates/${slugify(template.name)}`} className="p-3 bg-[#e9fbff] rounded-full hover:opacity-90" aria-label={`Open full page for ${template.name}`}>
                  <template.Icon className="h-8 w-8 text-[#1dcbf2]" />
                </Link>
                <div className="mr-24">
                  <h3 className="text-xl font-semibold text-slate-900">
                    <Link href={`/templates/${slugify(template.name)}`} className="hover:text-[#18b5d7]">
                      {template.name}
                    </Link>
                  </h3>
                </div>
              </div>
              <p className="text-slate-600 mb-4">{template.description}</p>
              <div className="flex justify-between items-center mt-auto pt-2">
                <button
                  type="button"
                  onClick={() => setPreviewTemplate(template)}
                  className="text-sm font-semibold text-[#1dcbf2] hover:text-[#18b5d7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,203,242,0.7)] rounded"
                  aria-label={`Preview ${template.name} template`}
                >
                  Preview
                </button>
                <Link
                  href={`/templates/${slugify(template.name)}`}
                  className="rounded-full bg-[#1dcbf2] px-3 py-1.5 text-sm font-semibold text-white shadow-sm shadow-[rgba(29,203,242,0.2)] transition-colors group-hover:bg-[hsl(191,89%,46%)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,203,242,0.7)]"
                  aria-label={`Use the ${template.name} template`}
                >
                  Use Template
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}