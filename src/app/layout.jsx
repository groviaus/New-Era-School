import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { generateMetadataForPath } from "@/lib/metadata";
import ScrollToTop from "@/components/ScrollToTop";
import { DockButtons } from "@/components/DockButtons";
import { EnquiryModal } from "@/components/EnquiryModal";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import GlobalEventPopup from "@/components/GlobalEventPopup";

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
  icons: { icon: "/assets/nes-assets/logo.jpeg" },
  metadataBase: new URL("https://www.neweraschool.com"),
  title: {
    default:
      "New Era School | Progressive English Medium School in Jamia Nagar, Delhi",
    template: "%s | New Era School",
  },
  description:
    "New Era School, established in 1968, is a recognized progressive English Medium School in Jamia Nagar, Delhi. Committed to value-based education and holistic development of students with the vision 'TO REACH OUT AND HELP OTHERS'.",
  keywords: [
    "New Era School",
    "English Medium School",
    "Jamia Nagar Delhi",
    "Progressive School",
    "Value-based Education",
    "Dr Saeed Ansari",
    "Established 1968",
    "DOE Recognized School",
    "School ID 1925454",
    "Hina Adnan",
    "Shamroz Ansari",
    "Mahmood Ansari",
    "Education Delhi",
    "School Near Jamia",
    "Best School Delhi",
  ],
  authors: [{ name: "New Era School" }],
  creator: "New Era School",
  publisher: "New Era School",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.neweraschool.com",
    siteName: "New Era School",
    title:
      "New Era School | Progressive English Medium School in Jamia Nagar, Delhi",
    description:
      "New Era School, established in 1968, is a recognized progressive English Medium School in Jamia Nagar, Delhi. Committed to value-based education and holistic development of students.",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "New Era School Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "New Era School | Progressive English Medium School in Jamia Nagar, Delhi",
    description:
      "New Era School, established in 1968, is a recognized progressive English Medium School in Jamia Nagar, Delhi. Committed to value-based education and holistic development of students.",
    images: ["/assets/logo.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://www.neweraschool.com",
  },
  category: "education",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "New Era School",
    alternateName: "NES",
    description:
      "New Era School, established in 1968, is a recognized progressive English Medium School in Jamia Nagar, Delhi. Committed to value-based education and holistic development of students.",
    url: "https://www.neweraschool.com",
    logo: "https://www.neweraschool.com/assets/logo.png",
    image: "https://www.neweraschool.com/assets/logo.png",
    foundingDate: "1968",
    founder: {
      "@type": "Person",
      name: "Dr. Saeed Ansari",
      birthDate: "1904",
      deathDate: "1984",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "261, Jamia Nagar Noor Nagar Road",
      addressLocality: "Jamia Nagar",
      addressRegion: "Delhi",
      postalCode: "110025",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9958715277",
        contactType: "Admissions",
        areaServed: "IN",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9311396532",
        contactType: "General Inquiry",
        areaServed: "IN",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        email: "newera540@gmail.com",
        contactType: "General Inquiry",
        areaServed: "IN",
        availableLanguage: "English",
      },
    ],
    sameAs: ["https://www.neweraschool.com"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Educational Programs",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Primary Education",
            description: "Value-based primary education program",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Course",
            name: "Secondary Education",
            description: "Progressive secondary education program",
          },
        },
      ],
    },
    slogan: "TO REACH OUT AND HELP OTHERS",
    knowsAbout: [
      "Value-based Education",
      "Progressive Learning",
      "Holistic Development",
      "English Medium Education",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      {process.env.NODE_ENV === "production" && (
        <>
          <GoogleTagManager gtmId="GTM-PFQ9ZDB" />
          <GoogleAnalytics gaId="G-QJTE1GFB7M" />
        </>
      )}
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <DockButtons />
        <EnquiryModal />
        {/* <GlobalEventPopup /> */}
      </body>
    </html>
  );
}
