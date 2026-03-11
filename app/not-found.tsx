import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <span className="text-primary font-bold uppercase tracking-widest text-xs mb-6 block">
        404
      </span>
      <h1 className="text-4xl font-bold text-slate-900 mb-6">
        This page doesn&apos;t exist.
      </h1>
      <p className="text-slate-500 mb-12 max-w-sm">
        The northwest is full of unmarked roads — this one leads nowhere. Head
        back and find the route.
      </p>
      <Link
        href="/"
        className="bg-primary text-bg-dark px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
      >
        Back to the island
      </Link>
    </section>
  );
}
