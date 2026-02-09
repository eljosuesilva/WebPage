import type { Metadata } from "next";
import { Inter, Shanti } from "next/font/google";
import "./globals.css";
import { MapBackground } from "@/components/map/MapBackground";

const inter = Inter({ subsets: ["latin"] });
const shanti = Shanti({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Columbus",
  description: "AI-powered location and market research",
  icons: {
    icon: "/logobueno.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${shanti.className} antialiased`}>
        {/* <MapBackground /> removed for home page redesign */}
        {children}
      </body>
    </html>
  );
}
