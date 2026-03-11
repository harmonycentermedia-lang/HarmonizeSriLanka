"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-primary/10 px-4 sm:px-6 md:px-12 lg:px-20 py-4 bg-bg-light/80 backdrop-blur-md sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-3 text-slate-900">
        <div className="w-8 h-8 text-primary">
          <svg
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_logo)">
              <path
                d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_logo">
                <rect fill="white" height="48" width="48" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-tight">
          Harmonize Sri Lanka
        </h2>
      </Link>

      <div className="hidden md:flex flex-1 justify-end gap-10 items-center">
        <nav className="flex items-center gap-8">
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="/northwest-corridor"
          >
            The Untouched Coast
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="/round-the-island"
          >
            The Full Circle
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="/contact"
          >
            Contact
          </Link>
        </nav>
        <Link
          href="/contact"
          className="flex min-w-[100px] cursor-pointer items-center justify-center rounded-lg h-10 px-5 bg-primary text-bg-dark text-sm font-bold transition-transform active:scale-95"
        >
          Book Now
        </Link>
      </div>

      <button
        className="md:hidden text-slate-900"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span className="material-symbols-outlined">
          {mobileOpen ? "close" : "menu"}
        </span>
      </button>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-bg-light border-b border-primary/10 p-6 flex flex-col gap-4 md:hidden z-50">
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="/northwest-corridor"
            onClick={() => setMobileOpen(false)}
          >
            The Untouched Coast
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="/round-the-island"
            onClick={() => setMobileOpen(false)}
          >
            The Full Circle
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary transition-colors"
            href="/contact"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center rounded-lg h-10 px-5 bg-primary text-bg-dark text-sm font-bold"
            onClick={() => setMobileOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}
