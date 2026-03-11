export type TripSlug = "northwest-corridor" | "round-the-island";

export interface DayItinerary {
  day: number;
  title: string;
  narrative: string;
  stops: string[];
}

export interface TargetAudience {
  name: string;
  description: string;
  tagline: string;
}

export interface Trip {
  slug: TripSlug;
  title: string;
  subtitle: string;
  tagline: string;
  duration: string;
  route: string;
  maxGroupSize: number;
  heroImage: string;
  description: string;
  itinerary: DayItinerary[];
  audiences: TargetAudience[];
  highlights: string[];
}

export interface EnquiryFormValues {
  name: string;
  email: string;
  trip: string;
  groupSize: string;
  message: string;
}
