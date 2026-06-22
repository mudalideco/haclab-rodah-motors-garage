import type { Metadata } from "next";
import { DM_Sans, Oswald, Outfit } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/primitives/SmoothScrollProvider";
import { CursorFollower } from "@/components/primitives/CursorFollower";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rodah Motors Garage Ltd - Professional Auto Repair & Servicing",
  description: "High-end fully equipped car service garage in Kyanja, Kampala. Professional car servicing, engine repair, wheel alignment, brake repair, and more. Rated 4.4 stars with 16 reviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${oswald.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScrollProvider>
          <CursorFollower />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
