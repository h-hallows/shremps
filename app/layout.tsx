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
      </body>
    </html>
  );
}
