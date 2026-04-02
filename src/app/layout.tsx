import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ConfigurationBanner } from "@/components/layout/configuration-banner";
import { SkipLink } from "@/components/layout/skip-link";
import { SiteHeader } from "@/components/navigation/site-header";
import { QueryClientProviderWrapper } from "@/components/providers/query-client-provider";
import { getMetadataBase, getSiteUrlString } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const openGraphDescription =
  "State-level trade and economic metrics: interactive US map (MapLibre), sortable table (TanStack Table), and charts (Nivo), backed by Supabase.";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Experimental Economic Dashboard",
    template: "%s · Experimental Economic Dashboard",
  },
  description: openGraphDescription,
  applicationName: "Experimental Economic Dashboard",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: getSiteUrlString(),
    siteName: "Experimental Economic Dashboard",
    title: "Experimental Economic Dashboard",
    description: openGraphDescription,
  },
  twitter: {
    card: "summary",
    title: "Experimental Economic Dashboard",
    description: openGraphDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      lang="en"
    >
      <body className="flex min-h-full flex-col antialiased">
        <SkipLink />
        <ConfigurationBanner />
        <SiteHeader />
        <QueryClientProviderWrapper>
          <main className="flex flex-1 flex-col" id="main-content">
            {children}
          </main>
        </QueryClientProviderWrapper>
      </body>
    </html>
  );
}
