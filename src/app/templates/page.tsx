import type { FC, SVGProps } from "react";
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

// New icons for templates

const BookIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 4H9a2 2 0 00-2 2v12a2 2 0 002 2h10a1 1 0 001-1V5a1 1 0 00-1-1zM9 6h9v11H9a1 1 0 01-1-1V7a1 1 0 011-1z" />
    <path d="M7 6H5a2 2 0 00-2 2v9a2 2 0 002 2h2V6z" />
  </svg>
);

const CalendarIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M7 11h5v5H7z" />
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm0 14H5V9h14z" />
  </svg>
);

const ProjectIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8v-10h-8v10zm0-18v6h8V3h-8z" />
  </svg>
);

const ContentIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M4 4h16v2H4zM4 8h16v2H4zM4 12h10v2H4zM4 16h16v2H4z" />
  </svg>
);

const HabitIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

const BusinessIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 8h14v-2H7v2zm0-4h14v-2H7v2zm0-6v2h14V7H7z" />
  </svg>
);

const DollarIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
  </svg>
);

const JournalIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M6 2h9a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2zM8 6h5v2H8V6z" />
  </svg>
);

const TEMPLATES = [
  {
    name: "Student Life OS",
    description: "Track assignments, lectures, exams, and study goals.",
    category: "Student",
    Icon: BookIcon,
    isPopular: false,
  },
  {
    name: "Daily Life OS",
    description: "Routines, goals, health, and tasks in one dashboard.",
    category: "All-in-One Life",
    Icon: CalendarIcon,
    isPopular: false,
  },
  {
    name: "Project Tracker",
    description: "Plan sprints, milestones, tasks and deliverables.",
    category: "Task & Project Management",
    Icon: ProjectIcon,
    isPopular: false,
  },
  {
    name: "Second Brain",
    description: "Capture ideas, notes, references and connections.",
    category: "“Second Brain”",
    Icon: SecondBrainIcon,
    isPopular: false,
  },
  {
    name: "Content Calendar",
    description: "Plan, draft, schedule and publish across channels.",
    category: "Content Planning",
    Icon: ContentIcon,
    isPopular: false,
  },
  {
    name: "Habit Tracker",
    description: "Build consistent habits with streaks and reflections.",
    category: "Habit Tracking",
    Icon: HabitIcon,
    isPopular: false,
  },
  {
    name: "Startup Operations Hub",
    description: "Company wiki, OKRs, projects, and hiring pipeline.",
    category: "Business",
    Icon: BusinessIcon,
    isPopular: false,
  },
  {
    name: "Budget & Expenses",
    description: "Monthly budgets, categories and expense tracking.",
    category: "Finance",
    Icon: DollarIcon,
    isPopular: false,
  },
  {
    name: "Wellness Journal",
    description: "Mood tracker, prompts, and gratitude reflections.",
    category: "Journals",
    Icon: JournalIcon,
    isPopular: false,
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

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
              Templates
            </h1>
            <p className="mt-4 text-base text-slate-400">
              Kickstart your journey with our pre-built templates.
            </p>
          </div>
        </div>
      </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-6">
          <div className="relative max-w-2xl mx-auto mb-6">
            <input
              type="search"
              placeholder="Search templates…"
              className="w-full pl-4 pr-10 py-3 rounded-full border border-slate-300 focus:ring-2 focus:ring-[#1dcbf2]/50 focus:border-[#1dcbf2] outline-none transition-colors"
            />
            <SearchIcon className="absolute top-1/2 right-4 -translate-y-1/2 h-5 w-5 text-slate-400" />
          </div>
          <div className="flex flex-wrap justify-center gap-2" style={{ marginTop: '0.5rem' }}>
            {FILTERS.map((filter, index) => (
              <button
                key={filter}
                className={`px-4 py-2 text-base font-semibold rounded-full ring-1 ring-inset transition-colors ${
                  index === 0
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
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TEMPLATES.map((template) => (
            <div
              key={template.name}
            className="group relative flex flex-col p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all"
            >
              {template.isPopular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 bg-[#1dcbf2] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                  Popular
                </div>
              )}
              <div className="absolute top-3 right-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500 max-w-[8rem] truncate text-ellipsis overflow-hidden">
                {template.category}
              </div>
              <div className="flex flex-col gap-1 mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#e9fbff] rounded-full">
                    <template.Icon className="h-8 w-8 text-[#1dcbf2]" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    <Link href={`/templates/${slugify(template.name)}`} className="hover:text-[#18b5d7]">
                      {template.name}
                    </Link>
                  </h3>
                </div>
                <p className="text-slate-600">{template.description}</p>
              </div>
              <div className="flex justify-between items-center mt-auto pt-2">
                <div className="text-sm font-semibold text-[#1dcbf2]">
                  Preview
                </div>
                <Link href={`/templates/${slugify(template.name)}`} className="rounded-full bg-[#1dcbf2] px-3 py-1.5 text-sm font-semibold text-white shadow-sm shadow-[rgba(29,203,242,0.2)] transition-colors group-hover:bg-[hsl(191,89%,46%)]">
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
