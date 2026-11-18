import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hindi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vyaparsathi.in"),
  title: "VYAPAR SATHI | Premium Digital Growth Agency",
  description:
    "Your Business, Our Digital Partnership. Helping local and growing businesses build market visibility, trust and a stronger digital presence through Google Ads, Google Business Profile, Website Development, and Local SEO.",
  keywords: [
    "Vyapar Sathi",
    "Digital Growth Partner",
    "Local SEO Agency",
    "Google Ads Management",
    "Google Business Profile",
    "Website Development",
    "Ghaziabad Digital Agency",
    "RKGIT",
  ],
  authors: [{ name: "Vyapar Sathi" }],
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/logo.png",
  },
  openGraph: {
    title: "VYAPAR SATHI | Premium Digital Growth Agency",
    description:
      "Your Business, Our Digital Partnership. Royal Cosmic 3D experience and results-driven digital growth for local enterprises.",
    url: "https://vyaparsathi.in",
    siteName: "Vyapar Sathi",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Vyapar Sathi Official Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${plusJakarta.variable} ${notoSansDevanagari.variable} antialiased bg-cosmic-black text-text-primary selection:bg-gold-metallic selection:text-cosmic-black`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
