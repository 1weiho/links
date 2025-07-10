import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yiwei's Links Collection",
  description:
    "A curated collection of my favorite resources—insightful articles, handy tools, and inspiring discoveries.",
  openGraph: {
    title: "Yiwei's Links Collection",
    description:
      "A curated collection of my favorite resources—insightful articles, handy tools, and inspiring discoveries.",
    url: 'https://links.1wei.dev',
    siteName: "Yiwei's Links Collection",
  },
  twitter: {
    card: 'summary_large_image',
    site: '@1weiho',
    creator: '@1weiho',
  },
  metadataBase: new URL('https://links.1wei.dev'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FBFBFB]`}
      >
        <main className="font-[family-name:var(--font-geist-mono)]">
        {children}

        </main>
      </body>
    </html>
  );
}
