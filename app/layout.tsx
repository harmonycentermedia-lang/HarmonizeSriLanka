import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Harmonize Sri Lanka | Curated Narrative Journeys",
    template: "%s | Harmonize Sri Lanka",
  },
  description:
    "Curated journeys across Sri Lanka's untold coasts, corridors, and communities. Not a tour — a narrative.",
  keywords: [
    "Sri Lanka travel",
    "adventure travel Sri Lanka",
    "Wilpattu safari",
    "Kalpitiya camping",
    "Jaffna travel",
    "Sri Lanka round trip",
    "Harmonize Sri Lanka",
  ],
  openGraph: {
    title: "Harmonize Sri Lanka | Curated Narrative Journeys",
    description:
      "Curated journeys across Sri Lanka's untold coasts, corridors, and communities.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harmonize Sri Lanka",
    description: "Curated narrative journeys across Sri Lanka.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${workSans.className} antialiased overflow-x-hidden bg-bg-light text-slate-900`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
