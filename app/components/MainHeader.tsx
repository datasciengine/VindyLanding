"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
];

export function MainHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-800/60 bg-black/80 backdrop-blur-sm">
      <div className="mx-auto flex h-[75px] max-w-6xl items-center justify-between px-6 lg:px-10">
        <Link 
          href="#hero" 
          className="flex items-center gap-3 min-h-[48px] min-w-[48px] touch-manipulation"
          aria-label="Vindy Home"
        >
          <Image
            src="/logo/vindy-logo-white.svg"
            width={100}
            height={50}
            priority
            fetchPriority="high"
            quality={90}
            alt="Vindy Logo"
            title="Vindy Logo"
          />
        </Link>

        <div className="flex items-center gap-4">
          <nav
            aria-label="Ana menü"
            className="hidden items-center gap-3 text-[14px] font-medium text-[#B4B6BA] md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center justify-center gap-[10px] rounded-[68px] px-[18px] py-2 min-h-[48px] min-w-[48px] font-medium text-[#B4B6BA] hover:text-white touch-manipulation"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            id="cta-get-started-header"
            href="#demo"
            className="hidden min-h-[48px] min-w-[48px] items-center justify-center gap-[10px] rounded-[4px] bg-[#2962FF] px-[18px] py-2 text-[14px] font-medium text-white hover:bg-[#2f6dff] md:inline-flex touch-manipulation"
          >
            Get started
          </a>

          <button
            type="button"
            aria-label="Toggle navigation"
            className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-md border border-slate-700 text-slate-200 md:hidden touch-manipulation"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">Open menu</span>
            <span className="flex h-3 w-4 flex-col justify-between">
              <span className="h-[2px] w-full rounded bg-slate-200" />
              <span className="h-[2px] w-full rounded bg-slate-200" />
              <span className="h-[2px] w-full rounded bg-slate-200" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-20 bg-black/70 md:hidden">
          <div className="absolute right-0 top-0 h-full w-64 bg-[#050712] shadow-xl">
            <div className="flex items-center justify-between px-5 py-4">
              <span className="text-sm font-semibold text-white">Menu</span>
              <button
                type="button"
                aria-label="Close navigation"
                className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-md border border-slate-700 text-slate-200 touch-manipulation"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
            <nav className="mt-2 flex flex-col gap-2 px-5 text-sm font-medium text-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center min-h-[48px] rounded-md px-4 py-3 hover:bg-slate-800 touch-manipulation"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                id="cta-get-started-mobile"
                href="#demo"
                className="mt-3 inline-flex min-h-[48px] min-w-[48px] items-center justify-center rounded-[6px] bg-[#2962FF] px-[18px] text-[13px] font-medium text-white hover:bg-[#2f6dff] touch-manipulation"
                onClick={() => setOpen(false)}
              >
                Get started
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
