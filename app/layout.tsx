import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
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
  title: "EduMaster - SSC, Railway & Banking Exam Preparation",
  description: "Comprehensive online platform for SSC, Railway, and Banking exam preparation. Practice with MCQs, study materials, and detailed solutions.",
  keywords: [
    "exam preparation",
    "ssc exam",
    "railway exam",
    "banking exam",
    "competitive exams",
    "online study",
    "mcq practice"
  ],
  metadataBase: new URL("https://edumaster.live"),
  authors: [{ name: "EduMaster" }],
  creator: "EduMaster",
  publisher: "EduMaster",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://edumaster.live",
    siteName: "EduMaster",
    title: "EduMaster - SSC, Railway & Banking Exam Preparation",
    description: "Comprehensive online platform for SSC, Railway, and Banking exam preparation. Practice with MCQs, study materials, and detailed solutions.",
    images: [
      {
        url: "https://edumaster.live/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EduMaster - Exam Preparation Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EduMaster - SSC, Railway & Banking Exam Preparation",
    description: "Comprehensive online platform for SSC, Railway, and Banking exam preparation",
    site: "@edumaster_live",
    creator: "@edumaster_live",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="max-image-preview:large"></meta>
        <meta name="google-site-verification" content="7-6j7haeyJWEhikD2wtLIv8Ei8tdX7VOIO3amkGNYdo" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col`}
      >
        <Header />
        <main className="container mx-auto px-4 py-6 flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
