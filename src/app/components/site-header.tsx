"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Templates", href: "/templates" },
  { label: "About", href: "/#about" },
  { label: "Features", href: "/#features" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/70 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 text-slate-900 font-semibold">
            {/* Hexagon outline logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              className="h-7 w-7 text-[#1dcbf2]"
              aria-hidden
            >
              <path d="M7 3.75l-4 6.5v3.5l4 6.5h10l4-6.5v-3.5l-4-6.5H7z" />
            </svg>
            <span>ClaritySync</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href.replace("/#", "/"));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,203,242,0.7)] ${
                    isActive
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-700 hover:bg-slate-50"
                  }`
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,203,242,0.7)]"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/80 backdrop-blur">
          <nav className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-2 flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}