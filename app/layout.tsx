import type { Metadata } from "next";
import "./globals.css";

import { shanti } from "@/lib/fonts";

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
