import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TAS Education - AI-Powered Educational Tools",
  description: "TAS Education offers innovative AI-powered educational tools to enhance learning experiences. Discover our flagship product, Ample, and join our beta testing program.",
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
