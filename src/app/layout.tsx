import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TAS Education - AI-Powered Educational Tools",
  description: "TAS Education offers innovative AI-powered educational tools to enhance learning experiences. Discover our flagship product, Ample, and join our beta testing program.",
  keywords: "AI education, educational technology, essay analysis, personalized learning, beta testing, TAS Education, Ample, educational tools",
  authors: [{ name: "Simon Balderson", url: "https://www.linkedin.com/in/simon-balderson" }, { name: "Tabatha Sheehan", url: "https://www.linkedin.com/in/tabatha-sheehan" }],
  creator: "TAS Education",
  publisher: "TAS Education",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://taseducation.github.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "TAS Education - AI-Powered Educational Tools",
    description: "TAS Education offers innovative AI-powered educational tools to enhance learning experiences. Discover our flagship product, Ample, and join our beta testing program.",
    url: 'https://taseducation.github.io',
    siteName: 'TAS Education',
    images: [
      {
        url: '/ai_classroom.png',
        width: 1200,
        height: 630,
        alt: 'AI-powered classroom illustration',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TAS Education - AI-Powered Educational Tools',
    description: 'TAS Education offers innovative AI-powered educational tools to enhance learning experiences.',
    images: ['/ai_classroom.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification', // Replace with your actual verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}
