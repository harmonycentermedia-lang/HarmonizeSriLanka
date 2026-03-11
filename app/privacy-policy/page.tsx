import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Harmonize Sri Lanka and No Names Collective handle the information you share with us.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">
          Legal
        </span>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Privacy Policy
        </h1>
        <p className="text-slate-400 text-sm mb-12">
          Last updated: March 2025
        </p>

        <div className="prose prose-slate max-w-none space-y-10 text-slate-600 text-sm leading-relaxed">

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Who we are</h2>
            <p>
              Harmonize Sri Lanka is a curated travel experience platform operated by{" "}
              <strong className="text-slate-800">No Names Collective (NNC)</strong>, registered in Sri Lanka,
              with offices at No 561, Sirimadura, Gangarama Road, Werahara, Boralasgamuwa.
              When you use this website or reach out to us, we are the ones handling your information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">What we collect and why</h2>
            <p className="mb-4">
              We only collect what we need to respond to your enquiry and plan your trip.
              This website is not a booking engine — it has no payment processing and no user accounts.
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>
                <strong className="text-slate-700">Enquiry form data</strong> — your name, email address,
                trip interest, group size, and message. We collect this solely to respond to your enquiry
                and discuss trip details with you.
              </li>
              <li>
                <strong className="text-slate-700">Email correspondence</strong> — if you contact us
                directly at info@nonames.lk, we retain that conversation to help us assist you.
              </li>
              <li>
                <strong className="text-slate-700">Basic usage data</strong> — we may use privacy-friendly
                analytics (such as Vercel Analytics or Plausible) to understand how people navigate the site.
                This data is aggregated and not tied to any individual.
              </li>
            </ul>
            <p className="mt-4">
              We do not collect payment information. We do not run advertising. We do not build profiles.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">How we use your information</h2>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>To respond to your trip enquiry with dates, pricing, and logistics.</li>
              <li>To communicate with you about a trip you've expressed interest in or confirmed.</li>
              <li>To improve the website and the experience we design around our trips.</li>
            </ul>
            <p className="mt-4">
              We will never sell your information, share it with third-party marketers,
              or use it for any purpose beyond the travel experience you came here for.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">How we store and protect it</h2>
            <p>
              Enquiry form submissions are delivered to our team via{" "}
              <strong className="text-slate-700">Resend</strong>, a transactional email service.
              Data in transit is encrypted. We do not store form submissions in a database at this stage —
              they live in our email inbox and are handled with the same care as any private correspondence.
            </p>
            <p className="mt-3">
              We retain enquiry information for as long as it is relevant to your trip planning,
              and no longer than necessary.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Third-party services</h2>
            <p className="mb-3">This website is hosted on Vercel and uses the following services:</p>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li><strong className="text-slate-700">Vercel</strong> — hosting and deployment</li>
              <li><strong className="text-slate-700">Resend</strong> — transactional email delivery for enquiries</li>
              <li><strong className="text-slate-700">Google Fonts</strong> — typeface loading (Work Sans)</li>
            </ul>
            <p className="mt-4">
              Each of these services operates under their own privacy policies. We choose providers
              that handle data responsibly, but we encourage you to review their policies independently
              if you have specific concerns.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Your rights</h2>
            <p>
              You have the right to know what information we hold about you, to request a correction,
              or to ask us to delete it. If you'd like to do any of these things, write to us at{" "}
              <a href="mailto:info@nonames.lk" className="text-primary hover:underline">
                info@nonames.lk
              </a>{" "}
              and we will respond promptly.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Links to other sites</h2>
            <p>
              This website links to external sites including our Facebook page and the No Names Collective
              website. Once you leave harmonizesrilanka.com, this policy no longer applies.
              We are not responsible for the privacy practices of those sites.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Changes to this policy</h2>
            <p>
              If we make meaningful changes to how we handle your information, we will update this page
              and revise the date at the top. We won't bury the changes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Questions</h2>
            <p>
              If anything here is unclear or you have a concern, reach us at{" "}
              <a href="mailto:info@nonames.lk" className="text-primary hover:underline">
                info@nonames.lk
              </a>
              . We're a small team and we read every message.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
