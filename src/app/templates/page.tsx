"use client";

import { useMemo, useState } from "react";

type Template = {
  id: string;
  title: string;
  description: string;
  category: CategoryKey;
  popularity: number; // higher = more popular
};

type Category = {
  key: CategoryKey;
  label: string;
};

type CategoryKey =
  | "student"
  | "life"
  | "business"
  | "content"
  | "finance"
  | "habit"
  | "tasks"
  | "secondBrain"
  | "journals"
  | "niche";

const CATEGORIES: Category[] = [
  { key: "student", label: "Student / Academic Templates" },
  { key: "life", label: "All-in-One Life / Personal Productivity Planners" },
  { key: "business", label: "Business / Business Operations Hubs" },
  { key: "content", label: "Content Planning / Creator Tools" },
  { key: "finance", label: "Finance / Budget & Expense Trackers" },
  { key: "habit", label: "Habit Tracking & Self-Improvement / Life-Organization" },
  { key: "tasks", label: "Task & Project Management Templates" },
  { key: "secondBrain", label: "“Second Brain” / Knowledge Management" },
  { key: "journals", label: "Journals / Mental Wellness / Self-Care" },
  { key: "niche", label: "Niche / Vertical Templates" },
];

// Demo seed data (replace with real data later)
const ALL_TEMPLATES: Template[] = [
  {
    id: "t1",
    title: "Semester Planner",
    description: "Track assignments, lectures, exams, and study goals.",
    category: "student",
    popularity: 82,
  },
  {
    id: "t2",
    title: "Daily Life OS",
    description: "Routines, goals, health, and tasks in one dashboard.",
    category: "life",
    popularity: 96,
  },
  {
    id: "t3",
    title: "Startup Operations Hub",
    description: "Company wiki, OKRs, projects, and hiring pipeline.",
    category: "business",
    popularity: 78,
  },
  {
    id: "t4",
    title: "Content Calendar",
    description: "Plan, draft, schedule and publish across channels.",
    category: "content",
    popularity: 88,
  },
  {
    id: "t5",
    title: "Budget & Expenses",
    description: "Monthly budgets, categories and expense tracking.",
    category: "finance",
    popularity: 74,
  },
  {
    id: "t6",
    title: "Habit Tracker",
    description: "Build consistent habits with streaks and reflections.",
    category: "habit",
    popularity: 83,
  },
  {
    id: "t7",
    title: "Project Tracker",
    description: "Plan sprints, milestones, tasks and deliverables.",
    category: "tasks",
    popularity: 91,
  },
  {
    id: "t8",
    title: "Second Brain",
    description: "Capture ideas, notes, references and connections.",
    category: "secondBrain",
    popularity: 89,
  },
  {
    id: "t9",
    title: "Wellness Journal",
    description: "Mood tracker, prompts, and gratitude reflections.",
    category: "journals",
    popularity: 65,
  },
  {
    id: "t10",
    title: "Real Estate CRM",
    description: "Leads, properties, deals and communications.",
    category: "niche",
    popularity: 72,
  },
];

export default function TemplatesPage() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<CategoryKey | "all" | "popular">("popular");

  const filtered = useMemo(() => {
    let list = ALL_TEMPLATES.filter((t) => {
      const matchesQuery = `${t.title} ${t.description}`
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesCategory =
        active === "all" || active === "popular" ? true : t.category === active;
      return matchesQuery && matchesCategory;
    });

    if (active === "popular") {
      list = [...list].sort((a, b) => b.popularity - a.popularity);
    }

    return list;
  }, [query, active]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Explore Templates
            </h1>
            <p className="mt-2 text-slate-600">
              Browse by category and quickly find what you need.
            </p>
          </div>

          {/* Search */}
          <div className="mt-6 max-w-2xl mx-auto">
            <label className="sr-only" htmlFor="search">
              Search templates
            </label>
            <div className="relative">
              <input
                id="search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search templates..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-slate-800 placeholder:text-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[rgba(29,203,242,0.6)]"
              />
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-5 w-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m1.6-5.4a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              className={`rounded-full px-4 py-2 text-sm font-medium ring-1 transition-colors ${
                active === "popular"
                  ? "bg-[#1dcbf2] text-white ring-[#1dcbf2]"
                  : "bg-white text-slate-700 ring-slate-200 hover:bg-slate-50"
              }`}
              onClick={() => setActive("popular")}
            >
              Most Popular
            </button>
            <button
              className={`rounded-full px-4 py-2 text-sm font-medium ring-1 transition-colors ${
                active === "all"
                  ? "bg-[#1dcbf2] text-white ring-[#1dcbf2]"
                  : "bg-white text-slate-700 ring-slate-200 hover:bg-slate-50"
              }`}
              onClick={() => setActive("all")}
            >
              All
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                className={`rounded-full px-4 py-2 text-sm font-medium ring-1 transition-colors ${
                  active === c.key
                    ? "bg-[#1dcbf2] text-white ring-[#1dcbf2]"
                    : "bg-white text-slate-700 ring-slate-200 hover:bg-slate-50"
                }`}
                onClick={() => setActive(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((t) => (
            <article
              key={t.id}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#18b5d7]">
                  {t.title}
                </h3>
                <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {CATEGORIES.find((c) => c.key === t.category)?.label.split("/")[0]}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{t.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <button className="text-sm font-semibold text-[#1dcbf2] hover:text-[#18b5d7]">
                  Preview
                </button>
                <button className="rounded-full bg-[#1dcbf2] px-4 py-2 text-sm font-semibold text-white hover:bg-[#18b5d7]">
                  Use Template
                </button>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-500 mt-10">No templates match your search.</p>
        )}
      </div>
    </div>
  );
}