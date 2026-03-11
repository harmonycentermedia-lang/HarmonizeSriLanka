import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Full Circle — 7 Day Sri Lanka Itinerary",
  description:
    "A sophisticated journey tracing the diverse edges of the island. 7-Day Route: Colombo, Galle, Tangalle, Ella, Kandy, Negombo.",
};

export default function RoundTheIslandPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero */}
      <section className="px-6 py-10 lg:py-16">
        <div className="relative h-[220px] sm:h-[350px] md:h-[500px] w-full rounded-xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb9RPa2Tb1zhOul4cNBnLt54qB46oFj-qqWThbdM4NUwuWyQrNHLbuTw81x4rTh16Int89dxXjZAzq9D731YDXbu67tHvfO9aNjWDiAeMmMqqzasgfIi3VtTiJWC9fAVLmhUZggch8Ca5CTPMCLqRZDJAhk8eXOAH-77kVWYJZMNEA-ZngzGzb4akqYz3rcnpyGnbtEv57dqPtspdsW6ALwHsKfhvZy6DBw1-lI3I1vylwlZP_cDsV4x2DpojBsmuf826Eaw66"
            alt="Aerial view of Sri Lankan tropical coastline"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-12 z-20 max-w-3xl">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-4">
              Seven Days Around the Pearl
            </h1>
            <p className="text-primary text-xl font-medium">
              7-Day Route: Colombo &bull; Galle &bull; Tangalle &bull; Ella
              &bull; Kandy &bull; Negombo
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-6 py-12 lg:flex gap-16 items-start">
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold mb-6">
            The Four Coastlines Concept
          </h2>
          <div className="h-1 w-20 bg-primary mb-6" />
        </div>
        <div className="lg:w-2/3">
          <p className="text-lg leading-relaxed text-slate-700 mb-6 italic">
            &ldquo;A sophisticated journey tracing the diverse edges of the
            island, from the colonial charm of the West to the wild southern
            shores, the misty eastern highlands, and the golden northern
            plains.&rdquo;
          </p>
          <p className="text-lg leading-relaxed text-slate-700">
            Unlike traditional tours that focus on single regions, The Full
            Circle is designed as a narrative arc. It captures the transition of
            Sri Lanka&apos;s soul&mdash;from the bustling mercantile energy of
            Colombo to the silent, spiritual peaks of the central highlands,
            concluding with the serene, salt-sprayed air of the fishing lagoons.
          </p>
        </div>
      </section>

      {/* Route Visualization */}
      <section className="px-6 py-12 bg-primary/5 rounded-xl mx-6" id="route">
        <h3 className="text-center text-sm font-bold uppercase tracking-widest text-primary mb-8">
          Route in Brief
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
          {["Colombo", "Galle", "Tangalle", "Ella", "Kandy", "Negombo"].map(
            (city, i, arr) => (
              <div key={city} className="flex items-center gap-4">
                <span className="font-bold">{city}</span>
                {i < arr.length - 1 && (
                  <span className="material-symbols-outlined text-primary">
                    arrow_forward
                  </span>
                )}
              </div>
            )
          )}
        </div>
        <div className="mt-12 h-64 rounded-lg overflow-hidden relative">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUxpP0JnhN5iR58vNX1UsUYKy8iBU_PKBkEEdcMZr2-Bt7-hkHR5MBVJ02wjSbAUnEYu8ianS1hrua8Q4Gc1fTXp1nZOJAc_LoqIxX3hy_-RdlwU7ofaV01tsxw6LJq6AyyG9bD7D-3QaxuPpe8XGi-IoO6AuYNV-yc_7jbMbKhZ7FciL70ehR5nUPif-IQZGb4zq31UV9uRJgobfIHPKcKtkYrtNCiJ2NU-JaV0WgDhd6q1q0ZQJJ8pBGqRofta1sXDtXM3Fs"
            alt="Sri Lankan hills and train tracks"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-bg-dark/20 flex items-center justify-center">
            <span className="bg-white text-bg-dark px-6 py-3 rounded-full flex items-center gap-2 font-bold shadow-xl">
              <span className="material-symbols-outlined">map</span> View
              Interactive Map
            </span>
          </div>
        </div>
      </section>

      {/* Day by Day Itinerary */}
      <section className="px-6 py-20" id="itinerary">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Day by Day</h2>
          <p className="text-slate-500">
            The curated flow of your 168-hour island immersion.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 timeline-line -translate-x-1/2 hidden md:block" />

          {/* Day 01 */}
          <div className="relative mb-20 md:flex items-center justify-between w-full">
            <div className="md:w-[45%] mb-8 md:mb-0 text-right pr-12 hidden md:block">
              <h3 className="text-2xl font-bold mb-2">
                Arrival &amp; Urban Pulse
              </h3>
              <p className="text-slate-600">
                Touch down at BIA and head into the heart of Colombo. Enjoy a
                sunset gin &amp; tonic at the Galle Face Hotel as the Indian
                Ocean crashes against the promenade.
              </p>
              <div className="mt-4 flex gap-2 justify-end">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-bold text-primary">
                  Colombo
                </span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-bold text-primary">
                  Sunset G&amp;T
                </span>
              </div>
            </div>
            <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-bg-light z-20 flex items-center justify-center">
              <span className="text-[10px] font-bold text-bg-dark">01</span>
            </div>
            <div className="md:w-[45%] pl-12">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSJWlM7NMCChyjhKHBed1O-Lh61cf8lUACgrcj8hRNF_wso_VGhrp2Nk8Uo04e-B3OE2C6HrJJhpDs-49o44vPRtv5155WSQcHvFQRf55kaJG9-uG-sxWwP_BV8s7Tcis6tl56STNkMcKMt_xUuiplcBmfaw6mwUqMkzDikDekjTJnvmTnug1ipW5q5Dy6a_VAVJwlQtgB2lKcUuW5HwNsJTVhV1ZJY1OHs_BRkqwsw6w-9Q2pgsGec77S70e9A0rSvLmNdv9x"
                alt="Modern Colombo skyline"
                width={600}
                height={192}
                className="rounded-xl shadow-lg w-full h-48 object-cover mb-4"
              />
              <div className="md:hidden">
                <h3 className="text-xl font-bold mb-2">
                  Arrival &amp; Urban Pulse
                </h3>
                <p className="text-slate-600">
                  Start your journey in the capital&apos;s historic colonial
                  district.
                </p>
              </div>
            </div>
          </div>

          {/* Day 02 */}
          <div className="relative mb-20 md:flex items-center justify-between w-full flex-row-reverse">
            <div className="md:w-[45%] mb-8 md:mb-0 text-left pl-12 hidden md:block">
              <h3 className="text-2xl font-bold mb-2">Fortified Elegance</h3>
              <p className="text-slate-600">
                Transfer to the UNESCO World Heritage Galle Fort. Walk the
                17th-century ramparts and dine in a restored Dutch merchant
                house.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-bold text-primary">
                  Galle Fort
                </span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-bold text-primary">
                  UNESCO Heritage
                </span>
              </div>
            </div>
            <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-bg-light z-20 flex items-center justify-center">
              <span className="text-[10px] font-bold text-bg-dark">02</span>
            </div>
            <div className="md:w-[45%] pr-12">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDixFK4YG0rDnM2w1bEoId-9expPff-A9Gyt5EFFz2R4e3w0yhtwa77nouAPU-hEvEVdYVfK6cEnDzOqwGtDtnDh_uQHAZ5jszDpoUYdnuRlo2PN8MUuFC0TwxzOkzfpp801RAn6h22fEk3lDuLm7AYXjYOAfxHqL2KzqKF589VNCc9hh_iApTcbRBf8gN0Wgg20WeTpPi7PRONQ69KcomAlRzsA3xHKREejdzQLUlyQWK6kVNHEuSdbn9YWX69QbbyQvAJV3lR"
                alt="Galle Fort lighthouse"
                width={600}
                height={192}
                className="rounded-xl shadow-lg w-full h-48 object-cover mb-4"
              />
              <div className="md:hidden">
                <h3 className="text-xl font-bold mb-2">Fortified Elegance</h3>
                <p className="text-slate-600">
                  The charm of 17th-century ramparts and cobblestone streets.
                </p>
              </div>
            </div>
          </div>

          {/* Day 03 */}
          <div className="relative mb-20 md:flex items-center justify-between w-full">
            <div className="md:w-[45%] text-right pr-12 hidden md:block">
              <h3 className="text-2xl font-bold mb-2">Southern Wilds</h3>
              <p className="text-slate-600">
                Continue along the coast to Tangalle. Spend the evening tracking
                nesting turtles or simply absorbing the wild, rugged beauty of
                the south coast.
              </p>
              <div className="mt-4 flex gap-2 justify-end">
                <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-bold text-primary">
                  Tangalle
                </span>
                <span className="px-3 py-1 bg-primary/10 rounded-full text-xs font-bold text-primary">
                  Nature Focus
                </span>
              </div>
            </div>
            <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-bg-light z-20 flex items-center justify-center">
              <span className="text-[10px] font-bold text-bg-dark">03</span>
            </div>
            <div className="md:w-[45%] pl-12">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuALy_NtXJFsJ22F12xPTL7WGcDheDAkp0T_CF_0E-9tCmY4D7ImlcQGujhojwGdqkynBbMWLohijmF7XMIQeU83m7IS77kcoP83N6GWxtAAJBvKaLriFRjLKQzTkTXuMaV6k0Oc2Ll-K0z40iROSl5TdGo0ABelSeFAJFgQCzXRwg_osk14cKYdFzlHeGXxDMT2r02mNYAtK5u1OQgHV7V9YyWaYNfSy9x0A1z9AeTTTYoe0oYkVX10f5UP_9Rc7uq1KpvJlt0p"
                alt="Golden sand beach with palms"
                width={600}
                height={192}
                className="rounded-xl shadow-lg w-full h-48 object-cover mb-4"
              />
              <div className="md:hidden">
                <h3 className="text-xl font-bold mb-2">Southern Wilds</h3>
                <p className="text-slate-600">
                  Turtle tracking and the rugged beauty of the south coast.
                </p>
              </div>
            </div>
          </div>

          {/* Days 04-07 Summary */}
          <div className="relative md:flex flex-col items-center">
            <div className="bg-white border border-primary/20 p-8 rounded-xl shadow-sm text-center max-w-2xl">
              <h4 className="font-bold text-xl mb-4">
                Into the Mountains &amp; Back
              </h4>
              <p className="text-slate-600 mb-6">
                Days 4-7 take you through the Nine Arch Bridge in Ella, the
                sacred Temple of the Tooth in Kandy, and a final sunset by the
                lagoons of Negombo.
              </p>
              <Link
                href="/contact"
                className="text-primary font-bold flex items-center gap-2 mx-auto justify-center"
              >
                Enquire for full breakdown{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Trip Is For */}
      <section className="px-6 py-20 bg-slate-900 text-white rounded-3xl mx-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Who This Trip Is For
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "camera_enhance",
              title: "Visual Storytellers",
              desc: "From colonial architecture to misty tea estates, every turn is a cinematic moment waiting to be captured.",
            },
            {
              icon: "history_edu",
              title: "Culture Seekers",
              desc: "Deep dives into the island's layered history, spanning Dutch, Portuguese, British, and ancient Sinhalese eras.",
            },
            {
              icon: "self_care",
              title: "Luxury Explorers",
              desc: "Those who value high-thread-count linens and curated dining experiences as much as the rugged outdoors.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-8 border border-white/10 rounded-2xl bg-white/5"
            >
              <span className="material-symbols-outlined text-primary text-4xl mb-4 block">
                {item.icon}
              </span>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="px-6 py-20" id="inclusions">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 border-l-4 border-primary pl-6">
            What&apos;s Included
          </h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              {
                title: "Boutique Stays",
                desc: "6 nights in curated heritage hotels and luxury lodges.",
              },
              {
                title: "Private Chauffeur",
                desc: "English-speaking guide with private AC vehicle throughout.",
              },
              {
                title: "Curated Dining",
                desc: "Daily breakfast plus 3 signature dinner experiences.",
              },
              {
                title: "All Access",
                desc: "Entry fees to UNESCO sites, safaris, and train tickets.",
              },
              {
                title: "Airport Transfers",
                desc: "Seamless meet-and-greet on arrival and departure.",
              },
              {
                title: "24/7 Concierge",
                desc: "Round-the-clock support from our island team.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary">
                  check_circle
                </span>
                <div>
                  <p className="font-bold">{item.title}</p>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 text-center" id="book">
        <div className="max-w-3xl mx-auto bg-primary/10 rounded-3xl p-6 sm:p-8 md:p-12 border border-primary/20">
          <h2 className="text-4xl font-bold mb-6">
            The only trip that tells the whole island.
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Limited departures monthly to ensure the highest standard of service
            and exclusivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary text-bg-dark px-10 py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              Book this trip
            </Link>
            <Link
              href="/contact"
              className="bg-white border border-slate-200 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors"
            >
              Ask us anything
            </Link>
          </div>
          <p className="mt-8 text-sm text-slate-400">
            No commitment required. Speak to a specialist first.
          </p>
        </div>
      </section>
    </div>
  );
}
