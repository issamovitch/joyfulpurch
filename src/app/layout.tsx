import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
    default: "Joyfulpurch | 2D to 3D Product Modeling for Ecommerce",
    template: "%s | Joyfulpurch",
  },
  description:
    "Turn flat product photos into interactive 3D and AR models. Boost conversions and cut returns for furniture and product brands.",
  keywords: [
    "3D product modeling services",
    "2D to 3D product conversion",
    "3D product visualization",
    "product 3D models for ecommerce",
    "3D furniture modeling",
    "AR product viewer for ecommerce",
    "interactive 3D product viewer for website",
    "360 product spin for furniture store",
    "reduce returns with 3D product visualization",
    "GLB 3D models for furniture brands",
    "embed 3D models on product pages",
    "convert product photos to 3D models",
    "turn 2D images into 3D models for online store",
    "3D furniture models for Shopify",
    "affordable 3D product modeling for small brands",
  ],
  authors: [{ name: "Joyfulpurch" }],
  icons: {
    icon: "/logo.png",
  },
  metadataBase: new URL("https://joyfulpurch.com"),
  openGraph: {
    title: "Joyfulpurch | 2D to 3D Product Modeling for Ecommerce",
    description:
      "Turn flat product photos into interactive 3D and AR models. Boost conversions and cut returns for furniture and product brands.",
    url: "https://joyfulpurch.com",
    siteName: "Joyfulpurch",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joyfulpurch | 2D to 3D Product Modeling for Ecommerce",
    description:
      "Turn flat product photos into interactive 3D and AR models. Boost conversions and cut returns.",
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
  alternates: {
    canonical: "https://joyfulpurch.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Joyfulpurch",
  url: "https://joyfulpurch.com",
  logo: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  description:
    "3D product modeling agency converting 2D product photos into interactive 3D and AR models for ecommerce brands.",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@joyfulpurch.com",
    contactType: "sales",
    areaServed: "Worldwide",
    availableLanguage: ["English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          type="module"
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js"
          strategy="beforeInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <NextTopLoader
          color="#f28c38"
          height={3}
          showSpinner={false}
          shadow="0 0 10px rgba(242,140,56,0.4)"
          crawlSpeed={200}
          easing="ease"
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
