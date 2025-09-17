import type { FC, SVGProps } from "react";

// --- Icon Components ---
const FocusIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const AlignIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const LightbulbIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.75 17.25a6.75 6.75 0 113.5 0v1.25a1.5 1.5 0 01-1.5 1.5h-0.5a1.5 1.5 0 01-1.5-1.5v-1.25z"
    />
  </svg>
);

// --- Main Page Component ---
export default function Home() {
  return (
    <div className="font-sans text-slate-800">
      <main className="flex flex-col">
        {/* Hero Section */}
        <section className="relative isolate flex items-center justify-center min-h-[calc(100svh-4rem)] py-24 sm:py-28 overflow-hidden bg-gradient-to-b from-[#e9fbff] via-white to-white">
          <div className="absolute -z-10 inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_30%,_black,_transparent)]">
            <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[rgba(29,203,242,0.2)] to-transparent" />
          </div>

          <div className="px-6 sm:px-8 lg:px-10 w-full">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6 text-center">
                <div className="flex justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-28 w-28 text-[#1dcbf2]"
                    aria-hidden
                  >
                    {/* Hexagon outline */}
                    <path d="M7 3.75l-4 6.5v3.5l4 6.5h10l4-6.5v-3.5l-4-6.5H7z" />
                    {/* Eye inside */}
                    <ellipse cx="12" cy="12" rx="5" ry="3.2" />
                    <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
                  ClaritySync
                </h1>
                <p className="mt-3 text-xl md:text-2xl font-semibold text-slate-700">
                  Unlock clarity. Live in sync.
                </p>
              </div>


              <p className="mt-4 text-lg md:text-xl leading-relaxed text-slate-600">
                Tools and templates to bring focus, alignment, and productivity.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/templates"
                  className="px-6 sm:px-8 py-3 rounded-full bg-[#1dcbf2] text-white font-semibold shadow-sm shadow-[rgba(29,203,242,0.2)] hover:bg-[hsl(191,89%,46%)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,203,242,0.6)]"
                >
                  Explore Templates
                </a>
                <a
                  href="#cta"
                  className="px-6 sm:px-8 py-3 rounded-full bg-white text-slate-700 ring-1 ring-slate-200 font-semibold hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
                >
                  Widgets
                </a>
              </div>
            </div>
          </div>
          {/* Scroll hint arrow */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              className="h-6 w-6 animate-bounce"
              aria-hidden
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 sm:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
              Why ClaritySync?
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-slate-600">
              Our mission is to eliminate the noise and friction in modern workflows. We provide simple, effective tools that help you and your team stay focused on what truly matters, fostering alignment and boosting productivity without the clutter.
            </p>

            <div className="mt-16 grid gap-6 sm:gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-slate-200">
                <FocusIcon className="h-12 w-12 text-[#1dcbf2] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Stay Focused</h3>
                <p className="text-slate-600">
                  Minimize distractions with streamlined templates and a centralized notification system.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-slate-200">
                <AlignIcon className="h-12 w-12 text-[#1dcbf2] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Turn Chaos into Clarity</h3>
                <p className="text-slate-600">
                  Stay organized with notes, reminders, and updates all in one place. Use it for your own studies or with friends—so nothing slips through the cracks.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-slate-200">
                <LightbulbIcon className="h-12 w-12 text-[#1dcbf2] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Work Smarter</h3>
                <p className="text-slate-600">
                  Leverage powerful tools designed for efficiency, not complexity. Get more done with less effort.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 sm:py-28 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
              Powerful Features, Simple Interface
            </h2>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-sm transition-shadow">
                <h3 className="text-2xl font-semibold mb-3 text-slate-900">Project Templates</h3>
                <p className="text-slate-600">
                  Kickstart your projects with pre-built templates for planning, tracking, and reporting.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-sm transition-shadow">
                <h3 className="text-2xl font-semibold mb-3 text-slate-900">Notification Center</h3>
                <p className="text-slate-600">
                  A unified inbox for all your important updates, keeping you informed without the noise.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-sm transition-shadow">
                <h3 className="text-2xl font-semibold mb-3 text-slate-900">Focus Mode</h3>
                <p className="text-slate-600">
                  A distraction-free environment to help you concentrate on your most important tasks.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-sm transition-shadow">
                <h3 className="text-2xl font-semibold mb-3 text-slate-900">Team Alignment Tools</h3>
                <p className="text-slate-600">
                  Shared goals, progress tracking, and automated check-ins to keep everyone in sync.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-sm transition-shadow">
                <h3 className="text-2xl font-semibold mb-3 text-slate-900">Analytics</h3>
                <p className="text-slate-600">
                  Gain insights with lightweight dashboards that highlight what matters most.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-sm transition-shadow">
                <h3 className="text-2xl font-semibold mb-3 text-slate-900">Integrations</h3>
                <p className="text-slate-600">
                  Connect your favorite tools to keep your workflow seamless and centralized.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="bg-[linear-gradient(to_right,_#1dcbf2,_#1dcbf2)]">
          <div className="max-w-4xl mx-auto text-center py-16 sm:py-20 px-6 sm:px-8 lg:px-10">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Start building clarity into your workflow today.</span>
            </h2>
            <a
              href="/templates"
              className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full text-[rgba(29,203,242,1)] bg-white font-bold hover:bg-[color-mix(in_oklab,rgba(29,203,242,0.08),white)] transition-colors shadow-sm"
            >
              Get Started
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 text-slate-500">
        <div className="max-w-6xl mx-auto py-8 px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ClaritySync. All rights reserved.
          </p>
          <div className="flex gap-x-6">
            <a href="#about" className="hover:text-slate-900 hover:underline underline-offset-4">
              About
            </a>
            <a href="#features" className="hover:text-slate-900 hover:underline underline-offset-4">
              Features
            </a>
            <a href="#" className="hover:text-slate-900 hover:underline underline-offset-4">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
