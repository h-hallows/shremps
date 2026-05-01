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
  metadataBase: new URL("https://shremps.com"),
  title: {
    default: "Shremps Studios — A studio for original worlds.",
    template: "%s — Shremps Studios",
  },
  description:
    "An independent creative studio building original brands, characters, and content from the ground up.",
  openGraph: {
    title: "Shremps Studios",
    description: "A studio for original worlds.",
    url: "https://shremps.com",
    siteName: "Shremps Studios",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shremps Studios",
    description: "A studio for original worlds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-paper text-ink flex flex-col">
        {children}
        {/*
          Film-grain overlay — fixed full-viewport SVG turbulence at low
          opacity. Adds warmth/depth to the flat B/W without illustration.
          Sits above content but is pointer-events-none so it never blocks.
        */}
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[60] opacity-[0.035] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
        />
      </body>
    </html>
  );
}
