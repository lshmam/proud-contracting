import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Proud Contracting | Building Trust, Delivering Excellence",
  description: "Proud Contracting offers professional electrical, plumbing, residential, commercial, and industrial contracting services in British Columbia. Call 778-919-3195 for a free quote.",
  keywords: "contracting, electrical, plumbing, residential, commercial, industrial, BC, British Columbia",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1, paddingTop: '72px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
