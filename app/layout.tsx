import type { Metadata } from "next";
import "./../styles/globals.css";
import { Space_Grotesk } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getSiteUrl } from "../utils/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

export const metadata: Metadata = {
  title: "Mir Suhaib — Engineering Intelligent Systems",
  description:
    "Portfolio of Mir Suhaib, final-year CSE student from the University of Kashmir, focused on Machine Learning, Data Science, and Full Stack Development.",
  metadataBase: getSiteUrl(),
  applicationName: "Mir Suhaib Portfolio",
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  openGraph: {
    title: "Mir Suhaib — Engineering Intelligent Systems",
    description:
      "AI-driven, data-centric portfolio showcasing projects in Machine Learning, Data Science, and Full Stack Development.",
    url: "/",
    siteName: "Mir Suhaib Portfolio",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mir Suhaib — Engineering Intelligent Systems",
    description:
      "Final-year CSE student building intelligent systems in ML, Data Science, and full-stack web."
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} font-sans bg-background text-slate-100 antialiased`}
      >
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-radial-gradient"></div>
          <Navbar />
          <main className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-24 pt-24 sm:px-6 lg:px-8 lg:pt-28">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

