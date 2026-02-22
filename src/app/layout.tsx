import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://oliviermarteaux.dev'), // Replace with your actual domain
  title: "Olivier Marteaux – Android Developer | Kotlin, Jetpack Compose, MVVM",
  description:
    "Android Developer specialized in Kotlin, Jetpack Compose, MVVM architecture, Firebase. Portfolio showcasing modern Android projects and production-ready mobile applications.",
  keywords: [
    "Android Developer",
    "Kotlin Developer",
    "Jetpack Compose",
    "MVVM Architecture",
    "Mobile App Developer",
    "Firebase Android",
    "Clean Architecture",
	"Android",
	"Kotlin",
  ],

  openGraph: {
    title: "Olivier Marteaux – Android Developer | Kotlin, Jetpack Compose, MVVM",
    description:
      "Android Developer specialized in Kotlin, Jetpack Compose and modern Android architecture.",
    url: "https://oliviermarteaux.dev", // replace with your real domain
    siteName: "Olivier Marteaux Portfolio",
    images: [
      {
		url: "/avatar.jpg", 
		width: 800, 
		height: 600, 
		alt: "Olivier Marteaux Android Developer", 
	  },
      {/*{
        url: "/og-image.png", // Replace avatar.jpg with a real 1200x630 banner
        width: 1200,
        height: 630,
        alt: "Olivier Marteaux – Android Developer",
      },*/}
    ],
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title:
      "Olivier Marteaux – Android Developer | Kotlin, Jetpack Compose, MVVM",
    description:
      "Android Developer specialized in Kotlin, Jetpack Compose and modern Android architecture.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white min-h-screen">
	  
		{/* Structured Data */}
		<script
		  type="application/ld+json"
		  dangerouslySetInnerHTML={{
			__html: JSON.stringify({
			  "@context": "https://schema.org",
			  "@type": "Person",
			  name: "Olivier Marteaux",
			  jobTitle: "Android Developer",
			  url: "https://oliviermarteaux.dev",
			  sameAs: [
				"https://github.com/OlivierMarteaux",
				"https://linkedin.com/in/olivier-marteaux",
				"https://x.com/OlivierMarteaux",
				"https://instagram.com/olivier.marteaux"
			  ],
			}),
		  }}
		/>
		
		{/* Analytics */}
        <Analytics />
        <SpeedInsights />

        <Navbar />
        <main className="bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white min-h-screen">
			<div className = "max-w-6xl mx-auto px-6 py-12">
				{children}
			</div>
        </main>
      </body>
    </html>
  );
}
