import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import GoogleAdsense from "@/components/adsense";

const inter = Inter({ subsets: ["latin"] });
const adsenseID = process.env.ADSENSE_ID

export const viewport: Viewport = {
  themeColor: "#f2f9f9",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "NoteBeam by PatphonSD",
  description:
    "NoteBeam - Your easy and fast way to share notes across devices without the hassle of logging in. Share notes seamlessly with a unique 6-character token.",
  applicationName: "NoteBeam",
  authors: [{ name: "PatphonSD", url: "https://patphonsd.vercel.app" }],
  generator: "Next.js",
  keywords: ["notes", "share notes", "PWA", "NoteBeam", "cross-device notes"],
  creator: "PatphonSD",
  publisher: "PatphonSD",
  robots: "index, follow",
  icons: {
    icon: "/icons/512x512.png",
    apple: "/icons/180x180.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "https://notebeam.vercel.app",
    title: "NoteBeam",
    description:
      "NoteBeam - Your easy and fast way to share notes across devices without the hassle of logging in.",
    siteName: "NoteBeam",
    images: [
      {
        url: "https://notebeam.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "NoteBeam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@PatphonSD",
    creator: "@PatphonSD",
    title: "NoteBeam",
    description:
      "NoteBeam - Your easy and fast way to share notes across devices without the hassle of logging in.",
    images: ["https://notebeam.vercel.app/images/og-image.png"],
  },
  verification: {
    google: "AZhmvKCIaJ2mzw8cfkxz1G7mPDUDAv_ljnvWjYrJPxA",
  },
  appleWebApp: {
    capable: true,
    title: "NoteBeam",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "h-dvh flex flex-col overflow-auto")}
      >
        {
          adsenseID && <GoogleAdsense pId={adsenseID} />
        }
        <Analytics />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
