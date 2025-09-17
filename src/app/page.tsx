import type { FC, SVGProps } from "react";
import Image from "next/image";

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
        <section className="relative isolate flex items-center justify-center min-h-[80vh] py-24 sm:py-28 overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
          <div className="absolute -z-10 inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_30%,_black,_transparent)]">
            <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-sky-100/60 to-transparent" />
          </div>

          <div className="px-6 sm:px-8 lg:px-10 w-full">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Image
                  src="/Clarity%20Sync%20Logo%20transparent%20bg.png"
                  alt="Clarity Sync Logo"
                  width={1000}
                  height={400}
                  priority
                  className="w-full max-w-3xl h-auto"
                />
              </div>

              <p className="mt-3 text-xl md:text-2xl font-medium text-slate-700">
                Unlock Clarity. Live in Sync.
              </p>
              <p className="mt-4 text-lg md:text-xl leading-relaxed text-slate-600">
                Tools and templates to bring focus, alignment, and productivity.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/templates"
                  className="px-6 sm:px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-sm shadow-blue-600/10 hover:bg-blue-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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
                <FocusIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Stay Focused</h3>
                <p className="text-slate-600">
                  Minimize distractions with streamlined templates and a centralized notification system.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-slate-200">
                <AlignIcon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-slate-900">Stay Aligned</h3>
                <p className="text-slate-600">
                  Keep your team on the same page with shared resources and clear, concise updates.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-slate-200">
                <LightbulbIcon className="h-12 w-12 text-blue-600 mb-4" />
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
        <section id="cta" className="bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto text-center py-16 sm:py-20 px-6 sm:px-8 lg:px-10">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Start building clarity into your workflow today.</span>
            </h2>
            <a
              href="#"
              className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full text-blue-700 bg-white font-bold hover:bg-blue-50 transition-colors shadow-sm"
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
            &copy; {new Date().getFullYear()} ClaritySync Project. All rights reserved.
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
