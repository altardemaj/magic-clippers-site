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

export const metadata = {
  title: "Magic Clippers | Premium Barbershop",
  description: "Magic Clippers offers expert fades, beard trims, and modern haircuts. Book your appointment today.",
  openGraph: {
    title: "Magic Clippers",
    description: "Expert fades, beard trims, and premium barber services.",
    url: "https://magicclippers.net",
    siteName: "Magic Clippers",
    images: [
      {
        url: "/barber-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Magic Clippers Barbershop",
      },
    ],
    type: "website",
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
