import { Metadata } from "next";
import { EnquiryForm } from "@/components/ui/enquiry-form";

export const metadata: Metadata = {
  title: "Enquire",
  description:
    "Get in touch about the Northwest Corridor or Full Circle trips. We'll respond with upcoming dates and everything you need to know.",
};

export default function ContactPage() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">
              Get in touch
            </span>
            <h1 className="text-4xl font-bold text-slate-900 mb-8">
              Tell us about your trip.
            </h1>
            <div className="space-y-4 text-slate-500 text-sm leading-relaxed">
              <p>
                Groups stay small. Spots fill fast. Drop us a note with which
                trip interests you and we&apos;ll come back with upcoming
                departure dates, pricing, and what to expect.
              </p>
              <p>We typically respond within 48 hours.</p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
