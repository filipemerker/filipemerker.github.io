import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/home/nav";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Filipe Merker - Software Engineer",
  description: "Software engineer, founder, and technology enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} antialiased`}>
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
