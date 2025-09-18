import Link from "next/link";

// Map widget names to slugs
const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const WIDGETS = [
  { name: "Notification Center", category: "Notifications", description: "Centralized feed of alerts, mentions, and updates.", price: 9 },
  { name: "Timer", category: "Productivity", description: "Countdown and pomodoro timers.", price: 5 },
  { name: "Weather", category: "Info", description: "Current weather snapshot.", price: 4 },
  { name: "Quote of the Day", category: "Wellness", description: "Daily inspirational quotes.", price: 3 },
  { name: "Quick Notes", category: "Notes", description: "Scratchpad for thoughts.", price: 4 },
  { name: "Task Widget", category: "Tasks", description: "Mini task list with priorities.", price: 6 },
  { name: "Calendar", category: "Scheduling", description: "This week at a glance.", price: 7 },
] as const;

type Widget = typeof WIDGETS[number];

function findWidgetBySlug(slug: string): Widget | null {
  return WIDGETS.find(w => slugify(w.name) === slug) ?? null;
}

function WidgetPreview({ name }: { name: string }) {
  // Simple mock preview area similar style to templates detail
  return (
    <div className="h-full w-full bg-slate-50 p-5">
      <div className="rounded-xl bg-white/90 border border-slate-200 p-5 h-full shadow-sm">
        <div className="text-sm font-semibold text-slate-900 mb-3">{name} — Preview</div>
        <div className="h-56 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400">
          Widget mock preview for “{name}”.
        </div>
      </div>
    </div>
  );
}

export default async function WidgetDetailPage({ params }: { params: { slug: string } }) {
  const awaited = await params;
  const widget = findWidgetBySlug(awaited.slug);

  if (!widget) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-slate-900">Widget not found</div>
          <p className="mt-2 text-slate-600">The widget you’re looking for doesn’t exist.</p>
          <Link href="/widgets" className="mt-4 inline-block rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Back to Widgets</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top bar */}
      <div className="border-b border-slate-200 bg-white/60 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">{widget.name}</h1>
            <span className="inline-flex items-center mt-1 rounded-full px-2.5 py-0.5 text-xs font-semibold bg-slate-100 text-slate-700">
              {widget.category}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/widgets" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">Back to Widgets</Link>
            <button className="rounded-full px-4 py-2 text-sm font-semibold text-white bg-[#1dcbf2] hover:opacity-90">
              Use Widget
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Preview mock */}
        <div className="lg:col-span-2">
          <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border ring-1 ring-slate-200 bg-white shadow-sm">
            <WidgetPreview name={widget.name} />
          </div>
        </div>

        {/* Details and payment mock */}
        <aside className="lg:col-span-1">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">About this widget</h2>
            <p className="mt-2 text-sm text-slate-600">{widget.description}</p>

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
                <button type="button" className="w-full rounded-full px-4 py-2 text-sm font-semibold text-white bg-[#1dcbf2] hover:opacity-90">
                  Pay ${widget.price}
                </button>
                <p className="text-[11px] text-slate-500 text-center">Mock checkout — no real charges.</p>
              </form>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="flex-1 rounded-full px-4 py-2 text-sm font-semibold text-white bg-[#1dcbf2] hover:opacity-90">
                Use Widget
              </button>
              <Link href="/widgets" className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 text-center">
                Browse More
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

// Optional pre-render for known slugs
export function generateStaticParams() {
  return WIDGETS.map((w) => ({ slug: slugify(w.name) }));
}