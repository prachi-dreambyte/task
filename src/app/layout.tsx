import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
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
  title: "VD Infotech Technologies - Web Development, SEO & App Development",
  description: "Professional web development, SEO optimization, Google Ads management, and app development services. Transform your digital presence with VD Infotech.",
  keywords: "web development, SEO, Google Ads, app development, digital marketing",
  openGraph: {
    title: "VD Infotech Technologies - Digital Solutions",
    description: "Professional web development, SEO, and app development services",
    url: "https://www.vdinfotech.in",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
