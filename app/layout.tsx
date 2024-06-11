import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

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
    google:
      "google-site-verification=5zSvY41Ogj4-Si7RoW7cnuvFgKQUr2VBojhydlRg1rY",
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
      <Head>
        <link rel="manifest" href="manifest.json" />
      </Head>
      <body
        className={cn(inter.className, "h-dvh flex flex-col overflow-auto")}
      >
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
