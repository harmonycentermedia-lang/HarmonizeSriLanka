import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Full Circle — Seven Days Around the Pearl | NNC",
  description:
    "A sophisticated journey tracing the diverse edges of the island. Colombo → South Coast → East Coast → North → Jaffna Peninsula → Northwest Corridor → Colombo",
};

export default function RoundTheIslandV2Page() {
  return (
    <div className="bg-bg-light text-slate-800 min-h-screen font-sans selection:bg-primary selection:text-white">
      {/* Immersive Hero Section - New Tropical Image with slight dark overlay to keep text readable */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

        {/* New Hero Image - A vibrant Sri Lankan landscape (Sigiriya/Hills or striking shore) */}
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb9RPa2Tb1zhOul4cNBnLt54qB46oFj-qqWThbdM4NUwuWyQrNHLbuTw81x4rTh16Int89dxXjZAzq9D731YDXbu67tHvfO9aNjWDiAeMmMqqzasgfIi3VtTiJWC9fAVLmhUZggch8Ca5CTPMCLqRZDJAhk8eXOAH-77kVWYJZMNEA-ZngzGzb4akqYz3rcnpyGnbtEv57dqPtspdsW6ALwHsKfhvZy6DBw1-lI3I1vylwlZP_cDsV4x2DpojBsmuf826Eaw66"
          alt="Lush green landscapes of Sri Lanka"
          fill
          className="object-cover scale-105"
          priority
        />

        {/* Dark green gradient overlay — solid at bottom, fading to transparent at top */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#102216] via-[#102216]/40 to-transparent" />

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">
          <span className="text-white font-mono text-sm tracking-[0.3em] uppercase mb-6 block border border-white/40 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md">
            Signature Experience
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1] drop-shadow-xl">
            The Full Circle
            <span className="block text-3xl md:text-5xl lg:text-6xl font-serif text-slate-100 italic mt-4 font-light drop-shadow-lg">
              Seven Days Around the Pearl
            </span>
          </h1>
          <p className="text-lg md:text-xl text-primary max-w-2xl font-medium drop-shadow-md">
            7-Day Route: Colombo &bull; South Coast &bull; East Coast &bull; North &bull; Jaffna &bull; Northwest
          </p>

          {/* Scroll Indicator */}
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
            <div className="h-16 w-[2px] bg-gradient-to-b from-primary to-transparent" />
          </div>
        </div>
      </section>

      {/* The Backstory / Philosophy Section - MODERNIZED */}
      <section className="py-32 px-6 relative bg-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-100 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Side: Modern Typography & Title */}
          <div className="w-full lg:w-5/12">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-sm uppercase tracking-widest text-primary font-bold">The Philosophy</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 leading-tight mb-8">
              The island is a circle.<br />
              <span className="text-slate-400 italic font-light">Your journey should be too.</span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full mb-8" />
          </div>

          {/* Right Side: Philosophy Image */}
          <div className="w-full lg:w-7/12 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/20 group">
            <Image
              src="/images/Screenshot 2026-03-10 at 19.07.41.png"
              alt="Harmonize Sri Lanka Philosophy"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
          </div>

        </div>
      </section>

      {/* The Route Visualization (Four Coastlines) - LIGHT BACKGROUND */}
      <section className="py-24 bg-white border-y border-slate-200 relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Four Coastlines.<br />Four Identities.</h2>
              <p className="text-slate-600 text-lg line-clamp-3">Most itineraries cover a quadrant. We engineered the only curated experience that connects regions most travellers never see in a single journey.</p>
            </div>
            <Link href="#itinerary" className="flex items-center gap-3 text-primary hover:text-green-700 transition-colors group">
              <span className="font-mono uppercase tracking-widest text-sm font-bold">Explore Route</span>
              <div className="w-10 h-10 rounded-full border border-primary/40 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                <span className="material-symbols-outlined group-hover:-rotate-45 transition-transform text-sm group-hover:text-white">arrow_forward</span>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: '01', title: 'The South', desc: 'Colonial & Buddhist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSJWlM7NMCChyjhKHBed1O-Lh61cf8lUACgrcj8hRNF_wso_VGhrp2Nk8Uo04e-B3OE2C6HrJJhpDs-49o44vPRtv5155WSQcHvFQRf55kaJG9-uG-sxWwP_BV8s7Tcis6tl56STNkMcKMt_xUuiplcBmfaw6mwUqMkzDikDekjTJnvmTnug1ipW5q5Dy6a_VAVJwlQtgB2lKcUuW5HwNsJTVhV1ZJY1OHs_BRkqwsw6w-9Q2pgsGec77S70e9A0rSvLmNdv9x' },
              { id: '02', title: 'The East', desc: 'Surf & Tamil-Muslim', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALy_NtXJFsJ22F12xPTL7WGcDheDAkp0T_CF_0E-9tCmY4D7ImlcQGujhojwGdqkynBbMWLohijmF7XMIQeU83m7IS77kcoP83N6GWxtAAJBvKaLriFRjLKQzTkTXuMaV6k0Oc2Ll-K0z40iROSl5TdGo0ABelSeFAJFgQCzXRwg_osk14cKYdFzlHeGXxDMT2r02mNYAtK5u1OQgHV7V9YyWaYNfSy9x0A1z9AeTTTYoe0oYkVX10f5UP_9Rc7uq1KpvJlt0p' },
              { id: '03', title: 'The North', desc: 'Distinctly Jaffna Tamil', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDixFK4YG0rDnM2w1bEoId-9expPff-A9Gyt5EFFz2R4e3w0yhtwa77nouAPU-hEvEVdYVfK6cEnDzOqwGtDtnDh_uQHAZ5jszDpoUYdnuRlo2PN8MUuFC0TwxzOkzfpp801RAn6h22fEk3lDuLm7AYXjYOAfxHqL2KzqKF589VNCc9hh_iApTcbRBf8gN0Wgg20WeTpPi7PRONQ69KcomAlRzsA3xHKREejdzQLUlyQWK6kVNHEuSdbn9YWX69QbbyQvAJV3lR' },
              { id: '04', title: 'The Northwest', desc: 'Wild & Empty', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUxpP0JnhN5iR58vNX1UsUYKy8iBU_PKBkEEdcMZr2-Bt7-hkHR5MBVJ02wjSbAUnEYu8ianS1hrua8Q4Gc1fTXp1nZOJAc_LoqIxX3hy_-RdlwU7ofaV01tsxw6LJq6AyyG9bD7D-3QaxuPpe8XGi-IoO6AuYNV-yc_7jbMbKhZ7FciL70ehR5nUPif-IQZGb4zq31UV9uRJgobfIHPKcKtkYrtNCiJ2NU-JaV0WgDhd6q1q0ZQJJ8pBGqRofta1sXDtXM3Fs' },
            ].map((coast) => (
              <div key={coast.id} className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-shadow duration-500">
                <Image src={coast.img} alt={coast.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:from-black/80 transition-all" />
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-primary font-mono text-xs mb-2 block font-bold">{coast.id}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{coast.title}</h3>
                  <p className="text-slate-200 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-500">{coast.desc}</p>
                </div>
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-sm text-white drop-shadow-md">north_east</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Itinerary - THE ONLY DARK BACKGROUND SECTION */}
      <section className="py-32 px-6 bg-bg-dark text-slate-200" id="itinerary">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-4">The Arc</h2>
            <h3 className="text-5xl font-bold text-white">Day by Day</h3>
          </div>

          <div className="relative space-y-32">
            {/* Timeline track */}
            <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-primary/50 via-white/10 to-primary/20 -translate-x-1/2" />

            {[
              {
                day: '01',
                title: 'The Southern Descent',
                route: 'Colombo → Thissamaharama',
                desc: "The first day covers the most familiar stretch of Sri Lanka and strips it back. This isn't a sightseeing crawl. It's a prologue. From the Colombo Lighthouse to Dondra, where the lighthouse marks the literal bottom of the island. From here, the only direction is forward.",
                highlights: ['Colombo Lighthouse', 'Galle Fort', 'Coconut Tree Hill'],
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSJWlM7NMCChyjhKHBed1O-Lh61cf8lUACgrcj8hRNF_wso_VGhrp2Nk8Uo04e-B3OE2C6HrJJhpDs-49o44vPRtv5155WSQcHvFQRf55kaJG9-uG-sxWwP_BV8s7Tcis6tl56STNkMcKMt_xUuiplcBmfaw6mwUqMkzDikDekjTJnvmTnug1ipW5q5Dy6a_VAVJwlQtgB2lKcUuW5HwNsJTVhV1ZJY1OHs_BRkqwsw6w-9Q2pgsGec77S70e9A0rSvLmNdv9x',
                align: 'left'
              },
              {
                day: '02',
                title: 'The Turn East',
                route: 'Thissamaharama → Arugam Bay',
                desc: "Day two is the pivot. The south coast crowds thin out the moment you pass Kirinda. Kataragama converges multiple faiths, and then the road turns east. Arugam Bay arrives like a different country: surf culture, sandy lanes, a pace the south coast has lost.",
                highlights: ['Kirinda', 'Kataragama', 'Arugam Bay'],
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDixFK4YG0rDnM2w1bEoId-9expPff-A9Gyt5EFFz2R4e3w0yhtwa77nouAPU-hEvEVdYVfK6cEnDzOqwGtDtnDh_uQHAZ5jszDpoUYdnuRlo2PN8MUuFC0TwxzOkzfpp801RAn6h22fEk3lDuLm7AYXjYOAfxHqL2KzqKF589VNCc9hh_iApTcbRBf8gN0Wgg20WeTpPi7PRONQ69KcomAlRzsA3xHKREejdzQLUlyQWK6kVNHEuSdbn9YWX69QbbyQvAJV3lR',
                align: 'right'
              },
              {
                day: '03',
                title: 'The Eastern Spine',
                route: 'Arugam Bay → Nilaveli',
                desc: "The stretch from Panama to Okanda is one of the most remote coastal roads on the island. Jungle on one side, ocean on the other. Batticaloa carries a distinct Tamil and Muslim identity. The day ends at Nilaveli, a pristine beach that somehow remains half-empty.",
                highlights: ['Panama to Okanda', 'Batticaloa', 'Nilaveli Beach'],
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALy_NtXJFsJ22F12xPTL7WGcDheDAkp0T_CF_0E-9tCmY4D7ImlcQGujhojwGdqkynBbMWLohijmF7XMIQeU83m7IS77kcoP83N6GWxtAAJBvKaLriFRjLKQzTkTXuMaV6k0Oc2Ll-K0z40iROSl5TdGo0ABelSeFAJFgQCzXRwg_osk14cKYdFzlHeGXxDMT2r02mNYAtK5u1OQgHV7V9YyWaYNfSy9x0A1z9AeTTTYoe0oYkVX10f5UP_9Rc7uq1KpvJlt0p',
                align: 'left'
              },
              {
                day: '04',
                title: 'The Northern Crossing',
                route: 'Nilaveli → Jaffna',
                desc: "Cross from the east coast into the north, shifting the island's character again. Koneshwaram Temple sits dramatically on a cliff-edge above Trincomalee. By the time you reach Jaffna, the landscape, the language, and the architecture have all changed.",
                highlights: ['Pigeon Island', 'Koneshwaram Temple', 'Kanniya Hot Springs'],
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAb9RPa2Tb1zhOul4cNBnLt54qB46oFj-qqWThbdM4NUwuWyQrNHLbuTw81x4rTh16Int89dxXjZAzq9D731YDXbu67tHvfO9aNjWDiAeMmMqqzasgfIi3VtTiJWC9fAVLmhUZggch8Ca5CTPMCLqRZDJAhk8eXOAH-77kVWYJZMNEA-ZngzGzb4akqYz3rcnpyGnbtEv57dqPtspdsW6ALwHsKfhvZy6DBw1-lI3I1vylwlZP_cDsV4x2DpojBsmuf826Eaw66',
                align: 'right'
              },
              {
                day: '05',
                title: 'The Peninsula & Descent',
                route: 'Jaffna → Wilpattu',
                desc: "The longest, most culturally dense day. Jaffna's Tamil identity saturates everything. Drive south through the quiet post-war Vanni region toward Mannar. The contrast is total: from the cultural density of Jaffna to the wild emptiness of Sri Lanka's largest national park.",
                highlights: ['Nallur Kandaswamy', 'Jaffna Fort', 'Point Pedro'],
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUxpP0JnhN5iR58vNX1UsUYKy8iBU_PKBkEEdcMZr2-Bt7-hkHR5MBVJ02wjSbAUnEYu8ianS1hrua8Q4Gc1fTXp1nZOJAc_LoqIxX3hy_-RdlwU7ofaV01tsxw6LJq6AyyG9bD7D-3QaxuPpe8XGi-IoO6AuYNV-yc_7jbMbKhZ7FciL70ehR5nUPif-IQZGb4zq31UV9uRJgobfIHPKcKtkYrtNCiJ2NU-JaV0WgDhd6q1q0ZQJJ8pBGqRofta1sXDtXM3Fs',
                align: 'left'

              },
              {
                day: '06',
                title: 'The Northwest Corridor',
                route: 'Wilpattu → Negombo',
                desc: "The climax. A dawn safari in Wilpattu with breakfast packed inside the park, among leopards and sloth bears. Then Kalpitiya, a spit of land with turquoise waters, closing the day in Negombo's fishing-village soul.",
                highlights: ['Wilpattu Safari', 'Kalpitiya Lagoon', 'Negombo'],
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSJWlM7NMCChyjhKHBed1O-Lh61cf8lUACgrcj8hRNF_wso_VGhrp2Nk8Uo04e-B3OE2C6HrJJhpDs-49o44vPRtv5155WSQcHvFQRf55kaJG9-uG-sxWwP_BV8s7Tcis6tl56STNkMcKMt_xUuiplcBmfaw6mwUqMkzDikDekjTJnvmTnug1ipW5q5Dy6a_VAVJwlQtgB2lKcUuW5HwNsJTVhV1ZJY1OHs_BRkqwsw6w-9Q2pgsGec77S70e9A0rSvLmNdv9x',
                align: 'right'
              },
              {
                day: '07',
                title: 'The Return',
                route: 'Negombo → Colombo',
                desc: "The final morning is deliberately quiet. The trip ends where it began: the city, the port, the lighthouse in the distance. But the island you're returning to isn't the same one you left. You've seen the whole circle now.",
                highlights: ['Thewatta Church', 'Colombo Arrival'],
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDixFK4YG0rDnM2w1bEoId-9expPff-A9Gyt5EFFz2R4e3w0yhtwa77nouAPU-hEvEVdYVfK6cEnDzOqwGtDtnDh_uQHAZ5jszDpoUYdnuRlo2PN8MUuFC0TwxzOkzfpp801RAn6h22fEk3lDuLm7AYXjYOAfxHqL2KzqKF589VNCc9hh_iApTcbRBf8gN0Wgg20WeTpPi7PRONQ69KcomAlRzsA3xHKREejdzQLUlyQWK6kVNHEuSdbn9YWX69QbbyQvAJV3lR',
                align: 'left'
              }
            ].map((day) => (
              <div key={day.day} className={`relative flex flex-col md:flex-row items-center gap-12 lg:gap-24 w-full ${day.align === 'right' ? 'md:flex-row-reverse' : ''} group`}>

                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 w-14 h-14 bg-bg-dark rounded-full border border-white/20 -translate-x-1/2 flex items-center justify-center z-10 group-hover:border-primary group-hover:scale-110 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.8)]">
                  <span className="font-mono text-lg font-bold text-white group-hover:text-primary transition-colors">{day.day}</span>
                </div>

                {/* Content Block */}
                <div className={`w-full pl-20 md:pl-0 md:w-1/2 ${day.align === 'left' ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                  <p className="text-primary font-mono text-sm uppercase tracking-widest mb-2 font-bold">{day.route}</p>
                  <h4 className="text-3xl font-bold text-white mb-6 font-serif">{day.title}</h4>
                  <p className="text-slate-400 leading-relaxed mb-6 font-light">{day.desc}</p>
                  <div className={`flex flex-wrap gap-2 ${day.align === 'left' ? 'md:justify-end' : 'md:justify-start'}`}>
                    {day.highlights.map(h => (
                      <span key={h} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 backdrop-blur-sm shadow-sm">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image Block */}
                <div className={`hidden md:block w-1/2 relative h-80 rounded-2xl overflow-hidden shadow-2xl border border-white/5 ${day.align === 'left' ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <Image src={day.img} alt={day.title} fill className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-60" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences Grid - LIGHT BACKGROUND */}
      <section className="py-24 bg-white border-t border-slate-200 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Who This Trip Is For</h2>
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">Not everyone wants the whole story. This route demands curiosity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "The Completionist", desc: "Doesn't want the highlight reel. Wants to fill in the map and understand how the regions connect.", quote: "I want the rest of the island, all of it." },
              { title: "The Ambitious First-Timer", desc: "Refuses to spend the week in a single corridor. Wants zero wasted time and the whole picture.", quote: "Everything worth seeing, not just the Instagram version." },
              { title: "The Friend Group", desc: "Looking for shifting scenery and shared stories. Adventurous but curated.", quote: "Something that actually brings us closer." },
              { title: "The Content Creator", desc: "Needs visual variety and narrative structure beyond the standard tourist loops.", quote: "A week of content, not just one good sunset." }
            ].map(persona => (
              <div key={persona.title} className="bg-slate-50 border border-slate-100 shadow-sm p-8 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center border border-primary/20 mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">person</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{persona.title}</h3>
                <p className="text-slate-600 text-sm flex-grow mb-6 leading-relaxed">{persona.desc}</p>
                <blockquote className="border-l-4 border-primary/40 pl-4 text-sm font-serif text-slate-500 italic bg-primary/5 py-2 pr-2 rounded-r-lg">"{persona.quote}"</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA - LIGHT BACKGROUND */}
      <section className="py-32 px-6 relative overflow-hidden bg-bg-light border-t border-slate-200">
        {/* Abstract Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/5 blur-[120px] -z-10 rounded-full" />

        <div className="max-w-3xl mx-auto text-center relative z-20">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
            Ready to Complete<br />the Circle?
          </h2>
          <p className="text-xl text-slate-600 mb-12 font-medium max-w-xl mx-auto">
            Limited departures monthly. Intimate groups. The only trip that tells the whole island.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="group relative px-8 py-4 bg-primary text-white font-bold text-lg rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 w-full sm:w-auto text-center shadow-lg shadow-primary/30 hover:shadow-primary/50">
              <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center justify-center gap-2">
                Book The Full Circle
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
              </span>
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-white border border-slate-300 text-slate-800 font-bold text-lg rounded-xl hover:bg-slate-50 hover:border-slate-400 hover:shadow-md transition-all duration-300 w-full sm:w-auto text-center">
              Request Route Journal
            </Link>
          </div>
          <p className="mt-8 text-xs font-mono text-slate-400 uppercase tracking-widest font-bold">Pricing & dates upon inquiry</p>
        </div>
      </section>
    </div>
  );
}
