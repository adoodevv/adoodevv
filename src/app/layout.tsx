import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jonathan Adoo",
  description: "Robotics software engineer, open-source contributor, and Computer Engineering student.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} font-sans antialiased bg-background text-muted`}
      >
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}