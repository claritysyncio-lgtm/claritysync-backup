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
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b border-slate-200 bg-white/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8">
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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEMPLATES.map((template) => (
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
                <div className="p-3 bg-[#e9fbff] rounded-full">
                  <template.Icon className="h-8 w-8 text-[#1dcbf2]" />
                </div>
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
                <div className="text-sm font-semibold text-[#1dcbf2]">
                  Preview
                </div>
                <div className="rounded-full bg-[#1dcbf2] px-3 py-1.5 text-sm font-semibold text-white shadow-sm shadow-[rgba(29,203,242,0.2)] transition-colors group-hover:bg-[hsl(191,89%,46%)]">
                  Use Template
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}