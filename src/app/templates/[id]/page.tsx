import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    id: string;
  };
}

// Keep keys aligned with src/app/templates/page.tsx
export type CategoryKey =
  | "student"
  | "life"
  | "business"
  | "content"
  | "finance"
  | "habit"
  | "tasks"
  | "secondBrain"
  | "journals";

const CATEGORY_LABEL: Record<CategoryKey, string> = {
  student: "Student / Academic Templates",
  life: "All-in-One Life / Personal Productivity Planners",
  business: "Business / Business Operations Hubs",
  content: "Content Planning / Creator Tools",
  finance: "Finance / Budget & Expense Trackers",
  habit: "Habit Tracking",
  tasks: "Task & Project Management",
  secondBrain: "“Second Brain” / Knowledge Management",
  journals: "Journals / Mental Wellness / Self-Care",
};

// Accent styles per category
const ACCENT: Record<
  CategoryKey,
  {
    brand: string; // text color
    brandBg: string; // subtle bg
    ring: string; // ring color
    pill: string; // pill bg/text
    gradientFrom: string;
    gradientTo: string;
  }
> = {
  student: {
    brand: "text-sky-600",
    brandBg: "bg-sky-50",
    ring: "ring-sky-200",
    pill: "bg-sky-100 text-sky-800",
    gradientFrom: "from-sky-50",
    gradientTo: "to-sky-100",
  },
  life: {
    brand: "text-emerald-600",
    brandBg: "bg-emerald-50",
    ring: "ring-emerald-200",
    pill: "bg-emerald-100 text-emerald-800",
    gradientFrom: "from-emerald-50",
    gradientTo: "to-emerald-100",
  },
  business: {
    brand: "text-indigo-600",
    brandBg: "bg-indigo-50",
    ring: "ring-indigo-200",
    pill: "bg-indigo-100 text-indigo-800",
    gradientFrom: "from-indigo-50",
    gradientTo: "to-indigo-100",
  },
  content: {
    brand: "text-fuchsia-600",
    brandBg: "bg-fuchsia-50",
    ring: "ring-fuchsia-200",
    pill: "bg-fuchsia-100 text-fuchsia-800",
    gradientFrom: "from-fuchsia-50",
    gradientTo: "to-fuchsia-100",
  },
  finance: {
    brand: "text-teal-600",
    brandBg: "bg-teal-50",
    ring: "ring-teal-200",
    pill: "bg-teal-100 text-teal-800",
    gradientFrom: "from-teal-50",
    gradientTo: "to-teal-100",
  },
  habit: {
    brand: "text-rose-600",
    brandBg: "bg-rose-50",
    ring: "ring-rose-200",
    pill: "bg-rose-100 text-rose-800",
    gradientFrom: "from-rose-50",
    gradientTo: "to-rose-100",
  },
  tasks: {
    brand: "text-cyan-600",
    brandBg: "bg-cyan-50",
    ring: "ring-cyan-200",
    pill: "bg-cyan-100 text-cyan-800",
    gradientFrom: "from-cyan-50",
    gradientTo: "to-cyan-100",
  },
  secondBrain: {
    brand: "text-violet-600",
    brandBg: "bg-violet-50",
    ring: "ring-violet-200",
    pill: "bg-violet-100 text-violet-800",
    gradientFrom: "from-violet-50",
    gradientTo: "to-violet-100",
  },
  journals: {
    brand: "text-amber-700",
    brandBg: "bg-amber-50",
    ring: "ring-amber-200",
    pill: "bg-amber-100 text-amber-900",
    gradientFrom: "from-amber-50",
    gradientTo: "to-amber-100",
  },
};

// Mocked details for all cards from the list
type TemplateDetail = {
  id: string;
  title: string;
  category: CategoryKey;
  description: string;
  features: string[];
};

const DETAILS: TemplateDetail[] = [
  {
    id: "t1",
    title: "Student Life OS",
    category: "student",
    description:
      "Track assignments, lectures, exams, and study goals in one organized hub.",
    features: [
      "Assignment tracker with due dates",
      "Weekly lecture schedule",
      "Exam prep checklist",
      "Study goals with progress",
    ],
  },
  {
    id: "t2",
    title: "Daily Life OS",
    category: "life",
    description: "Routines, goals, health, and tasks in one dashboard.",
    features: [
      "Morning/Evening routines",
      "Goals & reflections",
      "Health metrics snapshot",
      "Tasks & calendar",
    ],
  },
  {
    id: "t3",
    title: "Startup Operations Hub",
    category: "business",
    description: "Company wiki, OKRs, projects, and hiring pipeline.",
    features: [
      "Company wiki & policies",
      "Quarterly OKRs",
      "Project portfolio",
      "Hiring pipeline",
    ],
  },
  {
    id: "t4",
    title: "Content Calendar",
    category: "content",
    description: "Plan, draft, schedule and publish across channels.",
    features: [
      "Idea backlog",
      "Editorial calendar",
      "Draft → Review → Publish",
      "Channel scheduling",
    ],
  },
  {
    id: "t5",
    title: "Budget & Expenses",
    category: "finance",
    description: "Monthly budgets, categories and expense tracking.",
    features: [
      "Budget categories",
      "Monthly rollups",
      "Expense imports",
      "Savings goals",
    ],
  },
  {
    id: "t6",
    title: "Habit Tracker",
    category: "habit",
    description: "Build consistent habits with streaks and reflections.",
    features: [
      "Daily/weekly habit grid",
      "Streaks & stats",
      "Reminders",
      "Reflections",
    ],
  },
  {
    id: "t7",
    title: "Project Tracker",
    category: "tasks",
    description: "Plan sprints, milestones, tasks and deliverables.",
    features: [
      "Kanban boards",
      "Milestones & deadlines",
      "Priority tags",
      "Reports",
    ],
  },
  {
    id: "t8",
    title: "Second Brain",
    category: "secondBrain",
    description: "Capture ideas, notes, references and connections.",
    features: [
      "Zettelkasten-style notes",
      "Tags & backlinks",
      "References & sources",
      "Daily notes",
    ],
  },
  {
    id: "t9",
    title: "Wellness Journal",
    category: "journals",
    description: "Mood tracker, prompts, and gratitude reflections.",
    features: [
      "Mood & energy logs",
      "Daily prompts",
      "Gratitude notes",
      "Weekly reflection",
    ],
  },
];

const NAME_TO_ID: Record<string, string> = {
  "all-in-one-life-os": "t2",
  "business-hub": "t3",
  "student-dashboard": "t1",
  "advanced-task-manager": "t7",
  "second-brain": "t8",
  "freelancer-crm": "t3", // maps to business for now
};

function getTemplateById(rawId: string) {
  const id = NAME_TO_ID[rawId] ?? rawId;
  return DETAILS.find((t) => t.id === id);
}

function CategoryPreview({ category }: { category: CategoryKey }) {
  const accent = ACCENT[category];

  // Render a small, category-specific mock layout
  switch (category) {
    case "tasks":
      return (
        <div className={`h-full w-full ${accent.brandBg} bg-gradient-to-br ${accent.gradientFrom} ${accent.gradientTo} p-5`}> 
          <div className="grid grid-cols-3 gap-4 h-full">
            {["Backlog", "In Progress", "Done"].map((col) => (
              <div key={col} className="rounded-lg bg-white/90 border border-slate-200 p-3 shadow-sm">
                <div className={`text-xs font-semibold ${accent.brand}`}>{col}</div>
                <div className="mt-2 space-y-2">
                  <div className="h-8 rounded-md bg-slate-100" />
                  <div className="h-8 rounded-md bg-slate-100" />
                  <div className="h-8 rounded-md bg-slate-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    case "habit":
      return (
        <div className={`h-full w-full ${accent.brandBg} bg-gradient-to-br ${accent.gradientFrom} ${accent.gradientTo} p-6`}> 
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 28 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-md bg-white/80 border border-slate-200 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-rose-300" />
              </div>
            ))}
          </div>
          <div className="mt-4 text-xs text-slate-500">Daily habit grid with streak markers</div>
        </div>
      );
    case "finance":
      return (
        <div className={`h-full w-full ${accent.brandBg} bg-gradient-to-br ${accent.gradientFrom} ${accent.gradientTo} p-6`}> 
          <div className="grid grid-cols-3 gap-4">
            {["Income", "Expenses", "Savings"].map((k) => (
              <div key={k} className="rounded-lg bg-white/90 border border-slate-200 p-4 shadow-sm">
                <div className="text-xs text-slate-500">{k}</div>
                <div className={`mt-1 text-xl font-bold ${accent.brand}`}>$1,2{k === "Expenses" ? 3 : 8}0</div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-lg bg-white/90 border border-slate-200 p-4 shadow-sm">
            <div className={`text-xs font-semibold ${accent.brand}`}>Monthly Trend</div>
            <div className="mt-2 h-24 rounded-md bg-slate-100" />
          </div>
        </div>
      );
    case "content":
      return (
        <div className={`h-full w-full ${accent.brandBg} bg-gradient-to-br ${accent.gradientFrom} ${accent.gradientTo} p-5`}> 
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 21 }).map((_, i) => (
              <div key={i} className="h-16 rounded-md bg-white/90 border border-slate-200 p-2">
                <div className="h-2 w-10 rounded bg-fuchsia-200" />
                <div className="mt-2 h-2 w-6 rounded bg-slate-200" />
              </div>
            ))}
          </div>
          <div className="mt-3 text-xs text-slate-500">Editorial calendar with scheduled posts</div>
        </div>
      );
    case "business":
      return (
        <div className={`h-full w-full ${accent.brandBg} bg-gradient-to-br ${accent.gradientFrom} ${accent.gradientTo} p-6`}> 
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-white/90 border border-slate-200 p-4 shadow-sm">
              <div className={`text-xs font-semibold ${accent.brand}`}>OKRs</div>
              <div className="mt-3 h-2 w-full rounded bg-slate-100" />
              <div className="mt-2 h-2 w-5/6 rounded bg-slate-100" />
            </div>
            <div className="rounded-lg bg-white/90 border border-slate-200 p-4 shadow-sm">
              <div className="text-xs text-slate-500">Hiring Pipeline</div>
              <div className="mt-2 space-y-2">
                <div className="h-6 rounded bg-slate-100" />
                <div className="h-6 rounded bg-slate-100" />
                <div className="h-6 rounded bg-slate-100" />
              </div>
            </div>
          </div>
        </div>
      );
    case "student":
      return (
        <div className={`h-full w-full ${accent.brandBg} bg-gradient-to-br ${accent.gradientFrom} ${accent.gradientTo} p-6`}> 
          <div className="grid grid-cols-4 gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-lg bg-white/90 border border-slate-200 p-3">
                <div className="h-2 w-16 rounded bg-sky-200" />
                <div className="mt-2 h-2 w-10 rounded bg-slate-200" />
              </div>
            ))}
          </div>
          <div className="mt-3 text-xs text-slate-500">Classes, assignments, and exams</div>
        </div>
      );
    case "life":
      return (
        <div className={`h-full w-full ${accent.brandBg} bg-gradient-to-br ${accent.gradientFrom} ${accent.gradientTo} p-6`}> 
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg bg-white/90 border border-slate-200 p-4 shadow-sm">
              <div className={`text-xs text-slate-500`}>Routines</div>
              <div className="mt-2 h-2 w-full rounded bg-slate-100" />
              <div className="mt-2 h-2 w-5/6 rounded bg-slate-100" />
            </div>
            <div className="rounded-lg bg-white/90 border border-slate-200 p-4 shadow-sm">
              <div className={`text-xs text-slate-500`}>Goals</div>
              <div className="mt-2 h-16 rounded bg-slate-100" />
            </div>
            <div className="rounded-lg bg-white/90 border border-slate-200 p-4 shadow-sm">
              <div className={`text-xs text-slate-500`}>Health</div>
              <div className="mt-2 h-16 rounded bg-slate-100" />
            </div>
          </div>
        </div>
      );
    case "secondBrain":
      return (
        <div className={`h-full w-full ${accent.brandBg} bg-gradient-to-br ${accent.gradientFrom} ${accent.gradientTo} p-6`}> 
          <div className="rounded-lg bg-white/90 border border-slate-200 p-4 shadow-sm">
            <div className={`text-xs font-semibold ${accent.brand}`}>Graph of Notes</div>
            <div className="mt-3 grid grid-cols-6 gap-3">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className="h-6 rounded-full bg-violet-200" />
              ))}
            </div>
            <div className="mt-4 h-20 rounded-md bg-slate-100" />
          </div>
        </div>
      );
    case "journals":
      return (
        <div className={`h-full w-full ${accent.brandBg} bg-gradient-to-br ${accent.gradientFrom} ${accent.gradientTo} p-6`}> 
          <div className="rounded-lg bg-white/90 border border-slate-200 p-4 shadow-sm">
            <div className={`text-xs font-semibold ${accent.brand}`}>Daily Prompt</div>
            <div className="mt-2 h-24 rounded-md bg-slate-50 border border-slate-200" />
            <div className="mt-3 text-xs text-slate-500">Mood, gratitude, and reflection</div>
          </div>
        </div>
      );
  }
}

export default function TemplatePage({ params }: PageProps) {
  const { id } = params;
  const template = getTemplateById(id);

  if (!template) {
    notFound();
  }

  const accent = ACCENT[template!.category];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <div className="border-b border-slate-200 bg-white/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{template!.title}</h1>
            <span className={`inline-flex items-center mt-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${accent.pill}`}>
              {CATEGORY_LABEL[template!.category]}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/templates"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Back to Templates
            </Link>
            <button className={`rounded-full px-4 py-2 text-sm font-semibold text-white hover:opacity-90 ${accent.brand.replace("text-", "bg-")}`}>
              Use Template
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Preview mock */}
        <div className="lg:col-span-2">
          <div className={`aspect-[16/10] w-full overflow-hidden rounded-xl border ${accent.ring} ring-1 bg-white shadow-sm`}>
            <CategoryPreview category={template!.category} />
          </div>
        </div>

        {/* Details */}
        <aside className="lg:col-span-1">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">About this template</h2>
            <p className="mt-2 text-sm text-slate-600">{template!.description}</p>

            <h3 className="mt-5 text-sm font-semibold text-slate-900">What’s inside</h3>
            <ul className="mt-2 space-y-2 text-sm text-slate-600 list-disc pl-5">
              {template!.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            {/* Payment mock */}
            <div className="mt-6 rounded-lg border border-slate-200 p-4">
              <div className="text-sm font-semibold text-slate-900">Purchase</div>
              <p className="mt-1 text-xs text-slate-500">One-time payment. Instant access.</p>
              <form className="mt-3 space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-600">Email</label>
                  <input type="email" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1dcbf2]" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-600">Card</label>
                  <div className="mt-1 grid grid-cols-4 gap-2">
                    <input className="col-span-2 rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="Card number" />
                    <input className="col-span-1 rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="MM/YY" />
                    <input className="col-span-1 rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="CVC" />
                  </div>
                </div>
                <button type="button" className={`w-full rounded-full px-4 py-2 text-sm font-semibold text-white hover:opacity-90 ${accent.brand.replace("text-", "bg-")}`}>
                  Pay $19
                </button>
                <p className="text-[11px] text-slate-500 text-center">Mock checkout — no real charges.</p>
              </form>
            </div>

            <div className="mt-6 flex gap-3">
              <button className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold text-white hover:opacity-90 ${accent.brand.replace("text-", "bg-")}`}>
                Use Template
              </button>
              <Link
                href="/templates"
                className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 text-center"
              >
                Browse More
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

// Optional pre-render for known IDs
export function generateStaticParams() {
  return DETAILS.map((d) => ({ id: d.id }));
}
