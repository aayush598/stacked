import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist_Mono, Instrument_Sans } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stacked — Learn the frontend stack, one layer at a time",
  description:
    "Short, visual lessons across HTML, CSS, JavaScript, Bootstrap, React and TypeScript. Notes and diagrams attached to every question.",
};

export const viewport: Viewport = {
  themeColor: "#f7f8f5",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${geistMono.variable} h-full overflow-x-clip antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-clip">
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
      </body>
    </html>
  );
}
