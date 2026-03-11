"use client";

import Link from "next/link";
import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/94773772375?text=Tell%20me%20about%20the%20trips";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
            href="/round-the-island-v2"
          >
            The Full Circle
          </Link>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 cursor-pointer rounded-lg h-10 px-5 bg-[#25D366] text-white text-sm font-bold transition-transform hover:scale-105 active:scale-95 shadow-sm shadow-[#25D366]/30"
        >
          <WhatsAppIcon className="w-4 h-4" />
          WhatsApp
        </a>
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
            href="/round-the-island-v2"
            onClick={() => setMobileOpen(false)}
          >
            The Full Circle
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg h-10 px-5 bg-[#25D366] text-white text-sm font-bold"
            onClick={() => setMobileOpen(false)}
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
