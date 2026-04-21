import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Omar Arshad",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        //className={`${geistSans.variable} ${outfit.className} ${geistMono.variable} antialiased`}
        className="bg-gradient-to-b from-[#0A0510] via-[#120A1C] to-black text-white font-sans"
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
