import type { Metadata } from "next";
import { DM_Mono, Inter, Outfit } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";
import "./components.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "Swathi.D — Frontend Developer",
  description: "Portfolio of Swathi.D, Frontend & Mobile Developer. Specializing in high-performance web applications, cross-platform Flutter apps, and live MQTT/WebSocket IoT integrations.",
  keywords: [
    "Swathi",
    "Swathi Durai",
    "Frontend & Mobile Developer",
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
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable} ${dmMono.variable}`} style={{ scrollBehavior: "smooth" }}>
      <body suppressHydrationWarning>
        <div className="grid-bg" />
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
