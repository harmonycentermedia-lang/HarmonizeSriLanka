import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-primary/10 bg-bg-light py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link
            href="/"
            className="flex items-center gap-3 text-slate-900 mb-2"
          >
            <div className="w-6 h-6 text-primary">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <h2 className="text-sm font-bold tracking-tight">
              Harmonize Sri Lanka
            </h2>
          </Link>
          <p className="text-sm italic font-medium text-slate-500">
            Not a tour. A narrative.
          </p>
        </div>
        <div className="flex gap-8 text-sm text-slate-600">
          <a className="hover:text-primary transition-colors" href="#">
            Privacy
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Terms
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Instagram
          </a>
        </div>
        <p className="text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Harmonize Sri Lanka. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
