import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Untouched Coast — 4 Day Northwest Corridor",
  description:
    "Embark on a journey through the underexplored northwest corridor. Colombo → Kalpitiya → Wilpattu → Mannar → Colombo.",
};

export default function NorthwestCorridorPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Hero */}
      <section className="mb-12">
        <div className="relative h-[220px] sm:h-[350px] md:h-[500px] rounded-3xl overflow-hidden mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb7aQab6Q_sC71kDAnaJbfBTNz9mhbzZqwmZM2oz3dWTyI6MRJfCj26JB3tgccEAIwNJsTHtCDJeyew8Mq4nFyfCgdX4gnPLIRGWIkSgvRVojjm50Xmdjszs_bGAg0qsSFjjKQ4dpBV7sFEnGIbD800L9x_ktAZhU91rA1F9r25XPcF1KNxnqftJ7IgZE1Yhn4U7dfBAymW59KmajDDuo6AVxTAADmjM1FmUh0hCdAmzsW5RBzx05laqAzO8aIsrUox4B61HZt"
            alt="Coastal landscape"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 p-4 sm:p-8 z-20 w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              The Untouched Coast
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-primary">
                  calendar_today
                </span>
                <span className="font-medium">4 Days / 3 Nights</span>
              </div>
              <div className="hidden sm:block text-white/40">|</div>
              <p className="text-lg">
                Colombo &rarr; Kalpitiya &rarr; Wilpattu &rarr; Mannar &rarr;
                Colombo
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-3xl">
          <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-primary pl-6 py-2">
            Embark on a journey through the underexplored northwest corridor.
            This isn&apos;t just a trip; it&apos;s an immersion into the raw,
            quiet beauty of Sri Lanka&apos;s final frontiers, where the crowds
            fade and the landscape speaks.
          </p>
        </div>
      </section>

      {/* Route in Brief */}
      <section className="mb-16 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
        <h3 className="text-lg font-bold mb-6 text-primary uppercase tracking-widest">
          Route in Brief
        </h3>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block" />
          {[
            { icon: "location_on", name: "Colombo" },
            { icon: "sailing", name: "Kalpitiya" },
            { icon: "forest", name: "Wilpattu" },
            { icon: "account_balance", name: "Mannar" },
          ].map((stop) => (
            <div
              key={stop.name}
              className="flex flex-col items-center z-10 bg-white px-4"
            >
              <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-primary">
                  {stop.icon}
                </span>
              </div>
              <span className="text-sm font-bold">{stop.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Day-by-Day Itinerary */}
      <section className="mb-20 space-y-12">
        <h2 className="text-3xl font-bold mb-10">The Journey</h2>

        {/* Day 01 */}
        <div className="relative pl-14 md:pl-0">
          <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
            <div className="hidden md:block">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDobe_YBRqGL6cnL6aedlxAfG6Pu2K4623i08ImHvTufWNcjKY2wkAAYDNieU7tNDwqmeM6PFWlwp2QN9PC8IhxLkhsq_UkcNNyeYg2Bwg-6kqFpHJGiaC7j6KBW-ZXaF5Rj6S5LtwGGXM0dE9WiNMIM-e0FIn14GCGV78nNv1w20WCcvwpQDlHNDD4CyXebtUQFBne7HQ17SXSsysSMn_qyQyjQCLEZfh9PG4F30uhxSIuBC6QcWnhCTTqEsJakOFudGe6tVrr"
                alt="Kalpitiya Lagoon"
                width={600}
                height={320}
                className="rounded-3xl h-80 w-full object-cover shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute -left-12 top-0 h-full w-0.5 bg-slate-200 md:hidden" />
              <div className="absolute -left-[41px] top-0 size-5 rounded-full border-4 border-primary bg-white md:hidden" />
              <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">
                Day 01
              </span>
              <h3 className="text-2xl font-bold mb-4">
                Kalpitiya: Where the Ocean Breathes
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Arrive at the coastal sanctuary of Kalpitiya. Your journey
                begins with a private boat ride through the intricate mangrove
                lagoons. Spend the afternoon snorkeling in clear reefs or opt
                for island camping under the stars. The day ends with a fresh
                seafood BBQ by the shore.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  LAGOON BOAT RIDE
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  SNORKELING
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  ISLAND CAMPING
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Day 02 */}
        <div className="relative pl-14 md:pl-0">
          <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -left-12 top-0 h-full w-0.5 bg-slate-200 md:hidden" />
              <div className="absolute -left-[41px] top-0 size-5 rounded-full border-4 border-primary bg-white md:hidden" />
              <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">
                Day 02
              </span>
              <h3 className="text-2xl font-bold mb-4">
                Wilpattu: Transition to the Wild
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Leave the salt spray behind as we move inland toward the
                majestic Wilpattu National Park. This is a transition from blue
                to green. Experience the unique dry zone scrubland and settle
                into a slower pace of life at a rustic eco-lodge bordering the
                park.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  DRY ZONE SCRUBLAND
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  ECO-LODGE
                </span>
              </div>
            </div>
            <div className="hidden md:block order-1 md:order-2">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAluGnXHoh2GAlQwrq4EoeS4vp8Py1oDfG714cDk6DkDEYXsXiGdXLf5-X1zJXwv2aRyYBMYeE7st5M68Lc0iLCHcnDB7he7QxI_Jg5L1xgED3ZUeWCI9itlNdWn678qm9d4-U1lh47TmHiDNkWXeJNem8gGPIkDAAhTMGIumJDeyHuPTjAbIehYLJcslhNBOBF1hy6nB0A-pbErazXZJdd33tKey-OGGzxRYrd4QK3SBbKgz02miCyf-xkNVb3pWIOpHUS6cpZ"
                alt="Wilpattu Forest"
                width={600}
                height={320}
                className="rounded-3xl h-80 w-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Day 03 */}
        <div className="relative pl-14 md:pl-0">
          <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
            <div className="hidden md:block">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATvfqZqgq-GZXMEIwsKI7GsdmwEccLwChpb0E3KS7e838krDKF_4lVFkReeeKOy1JiDRcOWa12UaZ8ku4kyupPW1RWI5ex6jcM1VXrXuiXUQqcBx6pCKlW82ZWBLdVtRLQQ89KxbJ9S-UeIl12fc_JHiK2pxukZMMYYAsdNgwucgqQbwD7ZhriVfLDqZgSe-kghRq8RltmQb8gUMjNQTmGDe-zZ-vx3dentC41NEXCk8eO8pvTbF8vPQRBfnh12M0zEj5iu54p"
                alt="Mannar Baobab Tree"
                width={600}
                height={320}
                className="rounded-3xl h-80 w-full object-cover shadow-lg"
              />
            </div>
            <div className="relative">
              <div className="absolute -left-12 top-0 h-full w-0.5 bg-slate-200 md:hidden" />
              <div className="absolute -left-[41px] top-0 size-5 rounded-full border-4 border-primary bg-white md:hidden" />
              <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">
                Day 03
              </span>
              <h3 className="text-2xl font-bold mb-4">
                Wilpattu &rarr; Mannar: Safari to the Edge
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                A dawn safari in Wilpattu offers the best chance to spot the
                elusive leopard. Afterward, drive north to Mannar. Marvel at the
                ancient Baobab tree, likely planted by Arab traders centuries
                ago, and witness a hauntingly beautiful sunset from the historic
                Mannar Dutch Fort.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  DAWN SAFARI
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  BAOBAB TREE
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  DUTCH FORT
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Day 04 */}
        <div className="relative pl-14 md:pl-0">
          <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -left-12 top-0 h-full w-0.5 bg-slate-200 md:hidden" />
              <div className="absolute -left-[41px] top-0 size-5 rounded-full border-4 border-primary bg-white md:hidden" />
              <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2 block">
                Day 04
              </span>
              <h3 className="text-2xl font-bold mb-4">
                Mannar &rarr; Colombo: The Final Chapter
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Explore the vibrant Mannar town and its unique causeways. Visit
                the Talaimannar pier where the ferry to India once departed.
                After a final traditional northern lunch, we begin our scenic
                drive back to Colombo, carrying the stillness of the coast with
                us.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  TOWN TOUR
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                  TALAIMANNAR PIER
                </span>
              </div>
            </div>
            <div className="hidden md:block order-1 md:order-2">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-RJVIiwD7OGylIbaT9hU5vY8BeLcr3HoCD_kPwsSuSEgWNWq9bTJH0QZAsCagdCFhyaN2iCjyoolxHse5y2l7ivAdV5m_lEx1nU387zDcbEm9bkAYMK0-pesYieamqL7st77HqOfrj5it-6VNNbcy-ciuK3MjMKDIt7ZnT9KrVAxXS1GyZT0usWe6lcCFEYX-Qu4bJAZy6zyZtNyUO38FJ-eYlyOAldhCGKmGkFwZK7XPfX1yaLQ4Sacgsrk00FoccyZ49tJ5"
                alt="Mannar Town"
                width={600}
                height={320}
                className="rounded-3xl h-80 w-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Who This Trip Is For */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Who This Trip Is For
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "sentiment_dissatisfied",
              title: "Burned out on the usual loop",
              desc: "For those who want to avoid the typical 'cultural triangle' crowds.",
            },
            {
              icon: "favorite",
              title: "Couples and small groups",
              desc: "Perfect for intimate getaways and shared memories in secluded spots.",
            },
            {
              icon: "explore",
              title: "Adventure travellers",
              desc: "For those who seek raw nature, rugged paths, and wildlife encounters.",
            },
            {
              icon: "groups",
              title: "Teams",
              desc: "Great for team bonding away from the noise of the city and office.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="mb-20 bg-primary/5 rounded-3xl p-6 md:p-12">
        <h2 className="text-3xl font-bold mb-10">What&apos;s Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Private AC Transport throughout",
            "All entrance fees & park permits",
            "3 nights boutique accommodation",
            "Half-board meal plan (Breakfast & Dinner)",
            "Special Seafood BBQ in Kalpitiya",
            "4x4 Private Safari Jeep in Wilpattu",
            "Lagoon boat ride & snorkeling gear",
            "Mineral water & local snacks",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">
                check_circle
              </span>
              <span className="text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mb-20 text-center bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
        <h2 className="text-4xl font-bold mb-4">
          Three days. Zero tourist traps.
        </h2>
        <p className="text-slate-500 mb-8 max-w-xl mx-auto text-lg">
          Ready to see the side of Sri Lanka that most travelers never witness?
          Book your spot on our next departure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-primary text-bg-dark px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            Book this trip
          </Link>
          <Link
            href="/contact"
            className="bg-slate-100 text-slate-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition-all"
          >
            Ask us anything
          </Link>
        </div>
      </section>
    </div>
  );
}
