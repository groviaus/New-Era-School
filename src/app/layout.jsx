import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { generateMetadataForPath } from "@/lib/metadata";
import ScrollToTop from "@/components/ScrollToTop";
import { DockButtons } from "@/components/DockButtons";
import { EnquiryModal } from "@/components/EnquiryModal";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  ...generateMetadataForPath("/"),
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {process.env.NODE_ENV === "production" && (
        <GoogleTagManager gtmId="GTM-PFQ9ZDB" />
      )}
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <DockButtons />
        <EnquiryModal />
      </body>
    </html>
  );
}
