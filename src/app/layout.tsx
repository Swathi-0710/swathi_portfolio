import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./components.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swathi.D — Frontend & Mobile Developer",
  description: "Portfolio of Swathi.D, Frontend & Mobile Developer. Specializing in high-performance web applications, cross-platform Flutter apps, and live MQTT/WebSocket IoT integrations.",
  keywords: [
    "Swathi",
    "Swathi Durai",
    "Frontend Developer",
    "Mobile Developer",
    "React Developer",
    "Next.js Developer",
    "Flutter Developer",
    "MQTT Developer",
    "IoT Dashboard",
    "Chennai",
  ],
  authors: [{ name: "Swathi.D" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`} style={{ scrollBehavior: "smooth" }}>
      <body suppressHydrationWarning>
        <div className="grid-bg" />
        {children}
      </body>
    </html>
  );
}
