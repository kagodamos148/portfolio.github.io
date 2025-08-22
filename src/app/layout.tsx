import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

// Local imports
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
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
      <body className={`${poppins.variable} ${inter.variable} antialiased flex flex-col min-h-screen`}>
        <NavBar />
        <div className={`flex-1 ${poppins.variable} ${inter.variable}`}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
