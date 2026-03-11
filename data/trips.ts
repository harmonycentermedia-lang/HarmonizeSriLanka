import { Trip } from "@/lib/types";

export const trips: Trip[] = [
  {
    slug: "northwest-corridor",
    title: "The Untouched Coast",
    subtitle: "Northwest Corridor",
    tagline: "Three days. Zero tourist traps. The Sri Lanka your friends haven't seen yet.",
    duration: "4 days",
    route: "Colombo → Kalpitiya → Wilpattu → Mannar → Colombo",
    maxGroupSize: 25,
    heroImage: "/images/northwest-hero.jpg",
    description:
      "Most tourists do the cultural triangle or the south coast. This trip sells raw, unfiltered Sri Lanka — dolphins at dawn, safari by day, sleeping under stars, and ending at the edge of a land bridge that almost connects two countries. The northwest corridor is one of the most underexplored parts of Sri Lanka, and that's the biggest selling point. This isn't a tour — it's a narrative.",
    itinerary: [
      {
        day: 1,
        title: "Where the Ocean Breathes",
        narrative:
          "Arrive in Kalpitiya. The Indian Ocean and the Puttalam Lagoon pinch the land into something barely a kilometre wide. This is where the trip begins — not with a landmark, but with water on both sides and no agenda except the tide.",
        stops: [
          "Arrive in Kalpitiya",
          "Boat ride + snorkeling",
          "Lunch",
          "Transfer to island camp",
          "Beach relax",
          "BBQ night / overnight island camping",
        ],
      },
      {
        day: 2,
        title: "Transition to the Wild",
        narrative:
          "The island camp gives way to the jungle. The drive to Wilpattu passes through the northwest's quiet interior — a landscape that carries no tourism infrastructure and makes no apologies for it.",
        stops: [
          "Breakfast on the island",
          "Island transfer",
          "Travel to Wilpattu",
          "Hotel check-in",
          "Lunch / rest",
          "Pool / lake / unwind",
          "Dinner / overnight at Wilpattu hotel",
        ],
      },
      {
        day: 3,
        title: "Safari to the Edge of the Island",
        narrative:
          "Wilpattu at dawn is a different world. Fewer jeeps. Wider space. The leopards here don't perform for cameras — they just exist. By afternoon, the road leads to Mannar and the edge of the island itself: the Baobab Tree, a living relic from the Arab trade routes, and the Dutch Fort watching over the causeway that almost reaches India.",
        stops: [
          "Safari at Wilpattu National Park (packed breakfast inside the park)",
          "Lunch",
          "Travel to Mannar",
          "The Baobab Tree",
          "Dutch Fort / sunset",
          "Hotel check-in / overnight in Mannar",
        ],
      },
      {
        day: 4,
        title: "The Final Chapter",
        narrative:
          "Mannar in the morning light has a stillness the rest of Sri Lanka rarely offers. A city tour before the road south — past the ancient Vannimai territories, back through the northwest corridor, and into Colombo with something that didn't exist four days ago: the whole story.",
        stops: [
          "Breakfast",
          "Mannar city tour",
          "Lunch",
          "Departure to Colombo",
          "Arrive Colombo",
        ],
      },
    ],
    audiences: [
      {
        name: "Urban Professionals",
        description: "25–40, Colombo & expat crowd. Burned out, scrolling Instagram, tired of the Ella–Mirissa loop.",
        tagline: "Three days. Zero tourist traps. The Sri Lanka your friends haven't seen yet.",
      },
      {
        name: "Couples & Small Groups",
        description: "Late 20s–30s. Want something personal, not a bus tour.",
        tagline: "Not a tour. A story you'll tell for years.",
      },
      {
        name: "Foreign Adventure Travellers",
        description: "Mid-range to luxury. Already done Yala and Sigiriya. Looking for the real Sri Lanka.",
        tagline: "Where the map ends, the real island begins.",
      },
      {
        name: "Corporate Small Teams",
        description: "8–15 people. Team outings that don't feel like corporate retreats.",
        tagline: "Bond over something real — not a conference room.",
      },
    ],
    highlights: [
      "Overnight island camping on Kalpitiya",
      "Snorkeling & dolphin mornings",
      "Wilpattu safari — fewer jeeps, wilder feel",
      "Mannar's Baobab Tree & Dutch Fort",
      "Mannar crab curry",
      "Printed route journal + illustrated map",
    ],
  },
  {
    slug: "round-the-island",
    title: "The Full Circle",
    subtitle: "Seven Days Around the Pearl",
    tagline: "Most trips show you a side of Sri Lanka. This one takes you all the way around.",
    duration: "7 days",
    route: "Colombo → South Coast → East Coast → Jaffna → Northwest Corridor → Colombo",
    maxGroupSize: 25,
    heroImage: "/images/round-island-hero.jpg",
    description:
      "Every country has a version of itself that gets packaged for tourists. Sri Lanka's version is the south coast and the cultural triangle. It's beautiful. It's also incomplete. This trip exists because the island is a circle — not just geographically, but culturally, spiritually, historically. The Full Circle tells the whole story.",
    itinerary: [
      {
        day: 1,
        title: "The Southern Descent",
        narrative:
          "The Colombo Lighthouse sets the opening image: the island's oldest port marker, a reminder that people have been arriving and departing from this point for centuries. The first day covers the most familiar stretch of Sri Lanka and strips it back. This isn't a sightseeing crawl. It's a prologue.",
        stops: [
          "Colombo Lighthouse",
          "Kalutara Bodhiya",
          "Kosgama Turtle Hatchery",
          "Galle Fort",
          "Coconut Tree Hill, Mirissa",
          "Dondra Lighthouse (southernmost point of Sri Lanka)",
          "Thissamaharama — overnight",
        ],
      },
      {
        day: 2,
        title: "The Turn East",
        narrative:
          "Day two is the pivot. The south coast crowds thin out the moment you pass Kirinda. Kataragama brings Hindu, Buddhist, Muslim, and indigenous Vedda traditions into a single compound. Then the road turns east and the landscape shifts entirely.",
        stops: [
          "Kirinda clifftop temple",
          "Ranminithenna Tele Cinema Village",
          "Kataragama",
          "Arugam Bay — overnight",
        ],
      },
      {
        day: 3,
        title: "The Eastern Spine",
        narrative:
          "This is the day the trip earns its name. The stretch from Panama to Okanda is one of the most remote coastal roads on the island. Jungle on one side, ocean on the other, and almost no one else on the road.",
        stops: [
          "Panama to Okanda (remote coastal road)",
          "Sangaman Kanda",
          "Batticaloa",
          "Kalladi Bridge",
          "Nilaveli — overnight",
        ],
      },
      {
        day: 4,
        title: "The Northern Crossing",
        narrative:
          "Day four is where the trip crosses from the east coast into the north, and the character of the island shifts again. By the time you reach Jaffna, the landscape, the language, and the architecture have all changed.",
        stops: [
          "Pigeon Island (marine national park)",
          "Koneshwaram Temple, Swami Rock",
          "Kanniya Hot Springs",
          "Jaffna — overnight",
        ],
      },
      {
        day: 5,
        title: "The Peninsula and the Descent",
        narrative:
          "The longest day on the route and the most culturally dense. Jaffna's Tamil identity saturates everything. Point Pedro is the northernmost point of Sri Lanka — the lighthouse there completes a geographic arc that started at Dondra on Day 01.",
        stops: [
          "Nallur Kandaswamy Temple",
          "Rio Ice Cream (Jaffna institution)",
          "Jaffna Fort",
          "Point Pedro & Lighthouse (northernmost point)",
          "Kankesanthurai (KKS)",
          "Uthuru Thal Kelawara",
          "Mannar",
          "Wilpattu — overnight",
        ],
      },
      {
        day: 6,
        title: "The Northwest Corridor",
        narrative:
          "Day six is the northwest corridor, the stretch that started this entire brand. Wilpattu at dawn with breakfast packed for the park, eaten between leopard sightings and sloth bear territory. This is where the emptiness of the northwest hits differently — because you've seen the rest of the island first.",
        stops: [
          "Wilpattu Safari (packed breakfast inside the park)",
          "Kalpitiya",
          "Negombo — overnight",
        ],
      },
      {
        day: 7,
        title: "The Return",
        narrative:
          "The final morning is deliberately quiet. Thewatta Church is a calm, reflective stop before Colombo. The trip ends where it began: the city, the port, the lighthouse in the distance. But the island you're returning to isn't the same one you left. You've seen the whole circle now.",
        stops: [
          "Thewatta Church (Basilica of Our Lady of Lanka)",
          "Colombo — arrival",
        ],
      },
    ],
    audiences: [
      {
        name: "The Completionist",
        description: "Been before. Done the south or the cultural triangle. Knows they've only seen a fraction.",
        tagline: "I've done Ella and Galle. I want the rest of the island, all of it, in one trip.",
      },
      {
        name: "The Ambitious First-Timer",
        description: "One week in Sri Lanka. Refuses to spend it in a single corridor.",
        tagline: "I only have a week. I want to see everything worth seeing, not just the Instagram version.",
      },
      {
        name: "The Friend Group",
        description: "Four to eight people. Late 20s to mid-30s. Splitting costs, building shared stories.",
        tagline: "We've got a week off. We want something that actually brings us closer.",
      },
      {
        name: "The Content Creator",
        description: "Photographer, videographer, travel blogger. Needs visual variety and undocumented locations.",
        tagline: "I need a trip that gives me a week of content, not just one good sunset.",
      },
    ],
    highlights: [
      "Dondra to Point Pedro — geographic bookends",
      "Four coastlines, four cultural identities",
      "Pigeon Island marine national park",
      "Jaffna deep dive — Nallur Temple, Rio Ice Cream, Point Pedro",
      "Wilpattu safari as the climax, not the beginning",
      "The only trip that tells the whole island",
    ],
  },
];

export function getTripBySlug(slug: string): Trip | undefined {
  return trips.find((t) => t.slug === slug);
}
