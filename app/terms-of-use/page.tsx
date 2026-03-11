import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern your use of the Harmonize Sri Lanka website and your engagement with No Names Collective trips.",
};

export default function TermsOfUsePage() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">
          Legal
        </span>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Terms of Use
        </h1>
        <p className="text-slate-400 text-sm mb-12">
          Last updated: March 2025
        </p>

        <div className="prose prose-slate max-w-none space-y-10 text-slate-600 text-sm leading-relaxed">

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">About this document</h2>
            <p>
              These terms govern your use of the Harmonize Sri Lanka website (harmonizesrilanka.com)
              and your engagement with trips organised by{" "}
              <strong className="text-slate-800">No Names Collective (NNC)</strong>.
              By using this site or submitting an enquiry, you agree to these terms.
              If anything here gives you pause, write to us before proceeding —
              we would rather talk it through than have you accept something you're uncertain about.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">What this website is</h2>
            <p>
              This is a marketing and enquiry platform, not a booking engine.
              Submitting an enquiry form does not constitute a reservation, confirmation, or contract.
              A trip is only confirmed when NNC has communicated acceptance in writing and
              any required deposit or payment arrangement has been agreed upon directly with our team.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Trip information and accuracy</h2>
            <p className="mb-3">
              We take care to ensure the trip details, itineraries, and descriptions on this website
              are accurate. However:
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>
                Itineraries are subject to change based on weather, road conditions, park regulations,
                or circumstances beyond our control. We will always communicate changes promptly
                and work to maintain the spirit of the experience.
              </li>
              <li>
                Pricing and availability are confirmed only through direct correspondence with our team.
                Website content should be treated as indicative, not contractual.
              </li>
              <li>
                Photographs and descriptions reflect the character of each destination.
                Specific wildlife, sea conditions, or local experiences cannot be guaranteed.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Your responsibilities as a traveller</h2>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li>
                You are responsible for ensuring you hold a valid passport and any required visa
                to enter Sri Lanka. Requirements vary by nationality — check with the Sri Lanka
                Department of Immigration or your country's embassy.
              </li>
              <li>
                Travel insurance is strongly recommended. NNC is not liable for costs arising
                from medical emergencies, trip interruptions, or lost property.
              </li>
              <li>
                You must disclose any health conditions, dietary requirements, or mobility
                considerations that may affect your participation in trip activities.
                This is for your safety and the safety of the group.
              </li>
              <li>
                Our trips involve outdoor environments — beaches, national parks, open water,
                and rural roads. You are responsible for assessing your own fitness and readiness
                for the activities involved.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Group conduct</h2>
            <p>
              NNC keeps groups small deliberately. The quality of the experience depends on
              the people in it. We reserve the right to refuse participation or remove a traveller
              from a trip if their conduct negatively affects the group, the local communities
              we visit, or the natural environments we travel through.
              No refund will be issued in such circumstances.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Cancellations and refunds</h2>
            <p>
              Cancellation and refund terms are agreed upon at the time of trip confirmation
              and communicated in writing. As a general guide:
            </p>
            <ul className="list-disc list-outside ml-5 space-y-2 mt-3">
              <li>Cancellations made with sufficient notice (typically 14+ days) may be eligible for a partial or full refund depending on costs already incurred.</li>
              <li>Late cancellations may result in forfeiture of deposits or payments made.</li>
              <li>If NNC cancels a trip due to circumstances beyond our control, we will offer an alternative date or a full refund.</li>
            </ul>
            <p className="mt-4">
              Specific terms will always be confirmed in writing before any payment is made.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Photography and content</h2>
            <p>
              NNC may photograph or film trips for use in marketing and social media content.
              If you do not wish to appear in any published imagery, let us know before the trip begins.
              By participating without raising this objection, you grant NNC a non-exclusive licence
              to use your likeness in trip-related content.
            </p>
            <p className="mt-3">
              All original content on this website — text, design, and imagery — belongs to
              No Names Collective unless otherwise credited. Do not reproduce it without permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Limitation of liability</h2>
            <p>
              NNC operates with care and local knowledge built over years on these routes.
              However, travel inherently involves risk. To the extent permitted by law,
              NNC is not liable for injury, loss, or damage arising from participation in our trips,
              use of this website, or reliance on its content.
              Nothing in these terms limits liability for death or personal injury caused by negligence.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Governing law</h2>
            <p>
              These terms are governed by the laws of Sri Lanka.
              Any disputes arising from the use of this website or participation in NNC trips
              will be subject to the exclusive jurisdiction of the courts of Sri Lanka.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 mb-3">Contact</h2>
            <p>
              If you have questions about these terms or anything related to your trip,
              reach us at{" "}
              <a href="mailto:info@nonames.lk" className="text-primary hover:underline">
                info@nonames.lk
              </a>
              . We are a small team. You will hear from a person, not a template.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
