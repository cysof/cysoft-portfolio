import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ogbu Cyprian Omoha | Software Engineer & Founder",
  description: "Full-Stack Software Engineer, Digital Marketer, and Founder of Cysoft Home Technologies. Building scalable digital solutions and AgroTech platforms in Nigeria.",
  keywords: ["Ogbu Cyprian Omoha", "Software Engineer Nigeria", "Cysoft Home Technologies", "FarmRide", "Full-Stack Developer", "Next.js", "Django"],
  authors: [{ name: "Ogbu Cyprian Omoha" }],
  openGraph: {
    type: "website",
    url: "https://cysofthome.tech", // Update with your actual domain when deployed
    title: "Ogbu Cyprian Omoha | Software Engineer & Founder",
    description: "Full-Stack Software Engineer, Digital Marketer, and Founder of Cysoft Home Technologies.",
    siteName: "Ogbu Cyprian Omoha Portfolio",
    images: [{
      url: "/logo_2.jpg",
      width: 1200,
      height: 630,
      alt: "Cysoft Home Technologies Logo",
    }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@otechz",
    title: "Ogbu Cyprian Omoha | Software Engineer",
    description: "Building scalable digital solutions and AgroTech platforms in Nigeria.",
    images: ["/logo_2.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}