import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vindy.ai"),
  title: {
    default: "Vindy — AI Voice Assistant to Automate Your Hiring Process",
    template: "%s | Vindy",
  },
  description:
    "Vindy is an AI-powered voice assistant designed for hiring teams. Automate candidate screening, pre-interviews, and pre-qualification in minutes. Speed up your hiring process with 270ms response time, 100+ language support, and 99.9% uptime.",
  keywords: [
    "AI voice assistant",
    "recruitment automation",
    "candidate screening",
    "hiring automation",
    "AI recruiting",
    "voice AI",
    "automated interviews",
    "recruitment software",
    "Vindy",
    "AI hiring assistant",
    "recruiter automation",
    "phone screening automation",
  ],
  authors: [{ name: "Vindy" }],
  creator: "Vindy",
  publisher: "Vindy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vindy.ai",
    siteName: "Vindy",
    title: "Vindy — AI Voice Assistant to Automate Your Hiring Process",
    description:
      "Vindy is an AI-powered voice assistant designed for hiring teams. Automate candidate screening, pre-interviews, and pre-qualification in minutes.",
    images: [
      {
        url: "/logo/Vindy-logo.svg",
        width: 1200,
        height: 630,
        alt: "Vindy AI Voice Assistant - Hiring Automation",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  alternates: {
    canonical: "https://vindy.ai",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/favicon.ico", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-white text-slate-50`}
        suppressHydrationWarning
      >
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K95J3F84');`,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K95J3F84"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
