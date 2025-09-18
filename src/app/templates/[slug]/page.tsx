import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Mock template data (could be replaced with real data later)
const TEMPLATES: Record<string, {
  name: string;
  description: string;
  category: string;
  features: string[];
  sections: { title: string; body: string }[];
}> = {
  "student-dashboard": {
    name: "Student Dashboard",
    description: "Keep track of your classes, assignments, and notes in one organized space.",
    category: "Student",
    features: [
      "Class schedule overview",
      "Assignments tracker with due dates",
      "Notes and resources library",
      "GPA calculator",
    ],
    sections: [
      {
        title: "Overview",
        body: "A centralized view of your academic life with upcoming deadlines, schedule highlights, and quick links to notes.",
      },
      {
        title: "Assignments",
        body: "Track assignments by course, status, and priority. Filter by due date to stay on top of workload.",
      },
      {
        title: "Notes & Resources",
        body: "Store class notes, upload files, and tag content for quick retrieval during study sessions.",
      },
    ],
  },
  "all-in-one-life-os": {
    name: "All-in-One Life OS",
    description: "A comprehensive system to manage your personal life, from daily tasks to long-term goals.",
    category: "Life",
    features: [
      "Task & habit tracking",
      "Goal planning & reviews",
      "Calendar integration",
      "Areas & projects organization",
    ],
    sections: [
      {
        title: "Daily Dashboard",
        body: "Start your day with the most important tasks, events, and habits in a single view.",
      },
      {
        title: "Goals",
        body: "Define outcomes, break down into milestones, and review progress weekly and monthly.",
      },
      {
        title: "Areas",
        body: "Organize your life into areas (Health, Work, Finance, Learning) to keep balance.",
      },
    ],
  },
  "business-hub": {
    name: "Business Hub",
    description: "Centralize your business operations, from project management to client relations.",
    category: "Business",
    features: [
      "CRM with pipeline",
      "Project & task boards",
      "Invoices & payments log",
      "Team knowledge base",
    ],
    sections: [
      { title: "Pipeline", body: "Track leads, opportunities, and deals with clear stages and next actions." },
      { title: "Projects", body: "Kanban and list views for execution. Assign tasks, set due dates, and monitor progress." },
      { title: "Finance", body: "Log invoices, expenses, and cash flow snapshots to stay informed." },
    ],
  },
  "advanced-task-manager": {
    name: "Advanced Task Manager",
    description: "A powerful to-do list and project tracker for individuals and teams.",
    category: "Tasks",
    features: [
      "Smart filters & saved views",
      "Recurring tasks & reminders",
      "Labels, priorities, and dependencies",
      "Timeline & calendar views",
    ],
    sections: [
      { title: "Tasks", body: "Capture, organize, and prioritize with flexible metadata and quick actions." },
      { title: "Planning", body: "Plan sprints or weeks with capacity and due date balancing." },
      { title: "Review", body: "End-of-week summaries and upcoming commitments to reduce surprises." },
    ],
  },
  "second-brain": {
    name: "Second Brain",
    description: "Capture and connect your ideas, notes, and knowledge in a digital second brain.",
    category: "Knowledge",
    features: [
      "Bidirectional links",
      "Tags & collections",
      "Captures & highlights",
      "Daily notes & zettels",
    ],
    sections: [
      { title: "Capture", body: "Quickly save ideas, highlights, and references from any device." },
      { title: "Connect", body: "Link notes together to reveal patterns and related concepts." },
      { title: "Create", body: "Turn atomic notes into polished outputs like articles and guides." },
    ],
  },
  "freelancer-crm": {
    name: "Freelancer CRM",
    description: "Manage your clients, projects, and invoices with this all-in-one freelancer toolkit.",
    category: "Freelancer",
    features: [
      "Clients & contacts",
      "Proposals & contracts",
      "Time tracking & invoices",
      "Project dashboards",
    ],
    sections: [
      { title: "Clients", body: "Maintain relationships with a simple but effective CRM." },
      { title: "Projects", body: "See project status, tasks, and deliverables at a glance." },
      { title: "Billing", body: "Track time, generate invoices, and monitor payments." },
    ],
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const template = TEMPLATES[params.slug];
  if (!template) return {};
  return {
    title: `${template.name} — Template`,
    description: template.description,
  };
}

export default function TemplateDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const template = TEMPLATES[slug];

  if (!template) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-6 flex items-center justify-between">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-3">
              <span className="text-xs font-semibold text-white bg-[#1dcbf2] px-2.5 py-1 rounded-full">
                {template.category}
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 truncate">
                {template.name}
              </h1>
            </div>
            <p className="mt-2 text-slate-600 max-w-2xl">{template.description}</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/templates"
              className="px-4 py-2 rounded-full text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
            >
              Back
            </Link>
            <button className="rounded-full bg-[#1dcbf2] px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[rgba(29,203,242,0.2)] hover:bg-[hsl(191,89%,46%)]">
              Use Template
            </button>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Preview/Mock */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <div className="px-5 py-3 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <span className="size-2 rounded-full bg-red-400" />
                <span className="size-2 rounded-full bg-yellow-400" />
                <span className="size-2 rounded-full bg-green-400" />
                <span className="ml-3 font-medium">{template.name} — Preview</span>
              </div>
              <div className="text-xs text-slate-400">Mockup</div>
            </div>

            {/* Mock preview content */}
            <div className="p-6 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-slate-900">Dashboard</h2>
                  <p className="text-sm text-slate-500">This is a non-functional preview showing the general layout.</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 text-sm rounded-md ring-1 ring-slate-200 text-slate-600 hover:bg-slate-50">Day</button>
                  <button className="px-3 py-1.5 text-sm rounded-md ring-1 ring-slate-200 text-slate-600 hover:bg-slate-50">Week</button>
                  <button className="px-3 py-1.5 text-sm rounded-md ring-1 ring-slate-200 text-slate-600 hover:bg-slate-50">Month</button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-2 space-y-4">
                  <div className="rounded-xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Tasks</h3>
                      <span className="text-xs text-slate-400">List view</span>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-[#1dcbf2]"/> Finish wireframes</li>
                      <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-[#1dcbf2]"/> Study session: Linear Algebra</li>
                      <li className="flex items-center gap-2"><span className="size-2 rounded-full bg-[#1dcbf2]"/> Draft client proposal</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Notes</h3>
                      <span className="text-xs text-slate-400">Pinned</span>
                    </div>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div className="rounded-lg border border-slate-200 p-3">Lecture notes — Week 3</div>
                      <div className="rounded-lg border border-slate-200 p-3">Project spec: v1 outline</div>
                      <div className="rounded-lg border border-slate-200 p-3">Research links</div>
                      <div className="rounded-lg border border-slate-200 p-3">Reading list</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-xl border border-slate-200 p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-slate-900">Schedule</h3>
                      <span className="text-xs text-slate-400">Today</span>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      <li>09:00 — Team standup</li>
                      <li>11:30 — Study group</li>
                      <li>15:00 — Client call</li>
                    </ul>
                  </div>
                  <div className="rounded-xl border border-slate-200 p-4">
                    <h3 className="font-semibold text-slate-900">Quick Add</h3>
                    <div className="mt-2 flex gap-2">
                      <input className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1dcbf2]/40" placeholder="Add a task..." />
                      <button className="px-3 py-2 rounded-md bg-[#1dcbf2] text-white text-sm font-semibold hover:bg-[hsl(191,89%,46%)]">Add</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Details */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-slate-900">What’s inside</h2>
            <ul className="mt-3 list-disc pl-5 text-slate-700 space-y-1">
              {template.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5">
            {template.sections.map((s) => (
              <div key={s.title}>
                <h3 className="font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-slate-600 text-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}