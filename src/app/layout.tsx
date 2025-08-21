import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Local imports
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { HeroPage } from "@/components/HeroPage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Meghana Rao Nadendla - Clinical Pharmacist & Psychologist',
  description: 'Portfolio of Meghana Rao Nadendla - Clinical Pharmacist, Psychologist, and Social Entrepreneur.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <NavBar />
        <div className="flex-1">
          <HeroPage />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
