import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-primary/10 bg-bg-light py-14 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand + contact */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 text-slate-900">
              <div className="w-6 h-6 text-primary">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-sm font-bold tracking-tight">Harmonize Sri Lanka</span>
            </Link>
            <p className="text-sm italic font-medium text-slate-500">Not a tour. A narrative.</p>
            <div className="text-sm text-slate-500 leading-relaxed mt-1">
              <p className="font-semibold text-slate-700 not-italic">No Names Collective</p>
              <p>No 561, Sirimadura,</p>
              <p>Gangarama Road, Werahara,</p>
              <p>Boralasgamuwa.</p>
            </div>
          </div>

          {/* Sitemap */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Explore</h3>
            <nav className="flex flex-col gap-2 text-sm text-slate-600">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/northwest-corridor" className="hover:text-primary transition-colors">The Untouched Coast</Link>
              <Link href="/round-the-island" className="hover:text-primary transition-colors">The Full Circle</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Get in Touch</Link>
            </nav>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <a href="mailto:info@nonames.lk" className="hover:text-primary transition-colors">info@nonames.lk</a>
              <a href="tel:+94776999318" className="hover:text-primary transition-colors">+94 77 699 9318</a>
              <a href="tel:+94112090133" className="hover:text-primary transition-colors">+94 11 209 0133</a>
              <a
                href="https://www.nonames.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                www.nonames.lk
              </a>
              <a
                href="https://www.facebook.com/HarmonizeSriLanka"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors flex items-center gap-1.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Harmonize Sri Lanka. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-primary transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
