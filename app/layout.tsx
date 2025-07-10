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
  title: {
    default: "Francisca Udechukwu | Marketing Strategist Portfolio",
    template: "%s | Francisca Udechukwu",
  },
  description:
    "Explore the portfolio of Francisca Udechukwu, a results-driven marketing strategist helping brands grow through data, creativity, and innovation.",
  keywords: [
    "Nigerian Girl",
    "Francisca Udechukwu",
    "Marketing Strategist",
    "Brand Growth",
    "Digital Marketing",
    "Marketing Consultant",
    "Social Media Strategy",
    "Marketing Portfolio",
    "Content Strategy",
    "Campaign Planning",
  ],
  authors: [{ name: "Francisca Udechukwu", url: "https://www.brandlyamaka.com" }],
  creator: "Francisca Udechukwu",
  generator: "Next.js",
  openGraph: {
    title: "Francisca Udechukwu | Marketing Strategist Portfolio",
    description:
      "Browse a portfolio of strategic marketing projects and campaigns by Francisca Udechukwu. Helping brands grow with insight-driven strategies.",
    url: "https://www.brandlyamaka.com",
    siteName: "brandlyamaka",
    images: [
      {
        url: "https://brandlyamaka.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Francisca Udechukwu Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francisca Udechukwu | Marketing Strategist",
    description:
      "Discover the strategic marketing work of Francisca Udechukwu portfolio, case studies, and more.",
    creator: "@brandlyamaka",
    images: ["https://brandlyamaka.com/og-image.jpg"],
  },
  metadataBase: new URL("https://brandlyamaka.com"),
  alternates: {
    canonical: "https://brandlyamaka.com",
  },
};

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
