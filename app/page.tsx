import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCro75lUOt97Ch5hcq27VaRBBFH4fViKMz3patJ_yTcFsh5g9zEi3iXF2_zl7FPvdOovsmlobNFVPKMMYSZJoeaeT_8dMYy1ONRCTo3M9krC2BeN_G3HD8Nl_MqO_8Fs4B1BMUjeiW5UEDR6YpHVCjq-EA-Jb3xqpBNE_N_AbpUYWPAyIqqJy7O6CVcp2oiCDnc-3fII_4GLRA_933z5ZzDBLM4OzdR4-zVrCAlxyZZ7HMGHhZVlEsx0x-SoDY3Ntbbfc4pd9b2"
          alt="Sri Lankan tropical landscape"
          fill
          className="object-cover"
          priority
        />

        {/* Dark green gradient overlay — solid at bottom, fading to transparent at top */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#102216] via-[#102216]/40 to-transparent" />

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <span className="text-white font-mono text-sm tracking-[0.3em] uppercase mb-6 block border border-white/40 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md">
            Curated Journeys
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1] drop-shadow-xl">
            The island is a circle.
            <span className="block text-3xl md:text-5xl lg:text-6xl font-serif text-slate-100 italic mt-4 font-light drop-shadow-lg">
              Most people only see a line.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl font-medium drop-shadow-md mb-10">
            Curated journeys across Sri Lanka&apos;s untold coasts, corridors, and communities.
          </p>
          <Link
            href="#journeys"
            className="group relative px-8 py-4 bg-primary text-bg-dark font-bold text-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/30"
          >
            <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center gap-2">
              Explore our trips
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
            </span>
          </Link>

          {/* Scroll Indicator */}
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
            <div className="h-16 w-[2px] bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center" id="about">
        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">
          Our Philosophy
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 leading-tight">
          Beyond the Tourist Loop
        </h2>
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light italic">
            &ldquo;We design travel experiences through the parts of Sri Lanka
            the tourist loop never reaches. The wild northwest. The remote
            eastern coast. The Tamil north.&rdquo;
          </p>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Places that don&apos;t make the highlight reel but stay with you
            longer than the ones that do. Every trip is built as a sequence. The
            order matters. The transitions matter. Nothing is filler.
          </p>
        </div>
      </section>

      {/* Our Journeys Section */}
      <section className="bg-primary/5 py-24" id="journeys">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Our Journeys
            </h2>
            <p className="text-lg text-slate-600">
              Two journeys. Two ways to see an island most people only glimpse.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Journey Card 1 */}
            <Link
              href="/northwest-corridor"
              className="bg-white border border-primary/10 rounded-xl overflow-hidden shadow-sm flex flex-col group"
            >
              <div className="h-72 overflow-hidden relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX-S0XPSDAmNGyZi1z7VFDcRIyH3CHvOFypjIpW_N1YWheGQQmRR-I4U5bujT_QzYgA33XTW-8WwYdXGBbCWvnpI-UmIK3IxsQYXS1N7rGlEWXjCKRiQ7_PPSjQJD_3gDMmH47tLAmC8yr166Ea4FiRqrsxuc1L2ndknoHChGQFyEpOrPtMjpfE-vzCpfA0JEAPJEBRKZdAvEtUbUrR4kX7fvKZPQS3sx08nVgBAiyHXFfU8P2fhl1Xw2suiIC0SGiFvsxyc1a"
                  alt="Remote coastline of Kalpitiya"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-bg-dark px-3 py-1 rounded-full text-xs font-bold uppercase z-10">
                  4 Days / 3 Nights
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">
                  The Untouched Coast
                </h3>
                <p className="text-primary font-medium text-sm mb-4">
                  Colombo &rarr; Kalpitiya &rarr; Wilpattu &rarr; Mannar &rarr;
                  Colombo
                </p>
                <p className="text-slate-600 mb-8 flex-grow">
                  Experience island camping under the stars, deep safaris in
                  Wilpattu&apos;s wilderness, and the historic land bridge to the
                  north. A journey for the soul.
                </p>
                <span className="w-full flex items-center justify-center gap-2 rounded-lg h-12 bg-slate-900 text-white font-bold transition-colors group-hover:bg-primary group-hover:text-bg-dark">
                  View this trip
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>

            {/* Journey Card 2 */}
            <Link
              href="/round-the-island"
              className="bg-white border border-primary/10 rounded-xl overflow-hidden shadow-sm flex flex-col group"
            >
              <div className="h-72 overflow-hidden relative">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZw7SGEwj7NnwypXWXiKZw889WRd9okuP9nOeZYgQIpVBTQKmO-aTJVyNH_D1FJR_V2wQxUyTbKWhZXxUNXF1B6SUyrt92gkQ_5y0h9ewOrOiRR53CGlwlSHPMdgAGQBBtoqq58mSQ2zeqvDpmVRT18ydDvJDNP4pURXBZswIOya1FncwyvhYLWbG_-ZIt7FhHCbBbeNPIfLIrJUh6T7TzHuvyDrPWyJmVNgxnF0T1r2mYTzQC1mm75eu46_xWBoOGFyXHtxpi"
                  alt="Jaffna landscape"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary text-bg-dark px-3 py-1 rounded-full text-xs font-bold uppercase z-10">
                  7 Days / 6 Nights
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">The Full Circle</h3>
                <p className="text-primary font-medium text-sm mb-4">
                  Colombo &rarr; South &rarr; East &rarr; North &rarr; Northwest
                  &rarr; Colombo
                </p>
                <p className="text-slate-600 mb-8 flex-grow">
                  The ultimate narrative experience. Four distinct coastlines,
                  zero repeated ground. Witness the total transformation of the
                  island&apos;s culture and terrain.
                </p>
                <span className="w-full flex items-center justify-center gap-2 rounded-lg h-12 bg-slate-900 text-white font-bold transition-colors group-hover:bg-primary group-hover:text-bg-dark">
                  View this trip
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Harmonize Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto" id="why">
        <h2 className="text-3xl font-bold text-center mb-16">Why Harmonize</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 border border-primary/5 rounded-xl hover:bg-primary/5 transition-colors">
            <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined">route</span>
            </div>
            <h4 className="font-bold mb-2">The route is the product</h4>
            <p className="text-sm text-slate-600">
              Intentionally designed sequences where every transition adds to the
              story.
            </p>
          </div>
          <div className="text-center p-6 border border-primary/5 rounded-xl hover:bg-primary/5 transition-colors">
            <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined">restaurant</span>
            </div>
            <h4 className="font-bold mb-2">Food tied to geography</h4>
            <p className="text-sm text-slate-600">
              Local delicacies that exist only in the specific soil and sea of
              that region.
            </p>
          </div>
          <div className="text-center p-6 border border-primary/5 rounded-xl hover:bg-primary/5 transition-colors">
            <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined">group</span>
            </div>
            <h4 className="font-bold mb-2">Small groups, always</h4>
            <p className="text-sm text-slate-600">
              Intimacy is key. We never exceed 25 guests to ensure genuine local
              connection.
            </p>
          </div>
          <div className="text-center p-6 border border-primary/5 rounded-xl hover:bg-primary/5 transition-colors">
            <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="material-symbols-outlined">book</span>
            </div>
            <h4 className="font-bold mb-2">Something to keep</h4>
            <p className="text-sm text-slate-600">
              A hand-crafted printed journal and map to document your specific
              narrative.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="bg-bg-dark text-slate-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Who This Is For
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Done the loop, want the rest",
              "One week, zero filler",
              "The friend group",
              "The creator",
              "The team",
            ].map((label) => (
              <div
                key={label}
                className="px-6 py-4 border border-slate-700 rounded-full hover:border-primary transition-colors cursor-default"
              >
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 text-center bg-white">
        <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tight">
          The story starts when you do.
        </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="w-full md:w-auto min-w-[200px] h-14 flex items-center justify-center bg-primary text-bg-dark font-bold rounded-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
          >
            Get in touch
          </Link>
          <Link
            href="#journeys"
            className="w-full md:w-auto min-w-[200px] h-14 flex items-center justify-center border-2 border-slate-900 text-slate-900 font-bold rounded-lg hover:bg-slate-900 hover:text-white transition-all"
          >
            View our journeys
          </Link>
        </div>
      </section>
    </div>
  );
}
