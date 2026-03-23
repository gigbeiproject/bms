import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/com/Footer";
import Navbar from "@/com/Navbar";
import FloatingActions from "@/com/FloatingActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ==========================================
   SEO METADATA CONFIGURATION
========================================== */
export const metadata = {
  metadataBase: new URL('https://www.bmsdirectadmission.com'), 
  
  title: {
    default: "BMSCE & BMSIT Direct Admission | B.Tech 2026-2027",
    template: "%s | BMS Direct Admission" 
  },
  
  description: "Secure your B.Tech seat at BMSCE and BMSIT through direct admission under the management quota for the 2026-2027 academic year. Expert educational consulting.",
  
  keywords: [
    "BMSCE Direct Admission",
    "BMSIT Direct Admission",
    "BMSCE Management Quota",
    "B.Tech Admission Bangalore",
    "Engineering Admissions 2026",
    "BMS College of Engineering",
    "Direct Admission in BMS",
    "Education Consulting"
  ],

  authors: [{ name: "BMS Direct Admission" }],
  
  // How links look when shared on Facebook/LinkedIn/WhatsApp
  openGraph: {
    title: "BMSCE & BMSIT B.Tech Direct Admission 2026-2027",
    description: "Trusted admission guidance for BMS College of Engineering (BMSCE) and BMSIT under management quota.",
    url: 'https://www.bmsdirectadmission.com',
    siteName: 'BMS Direct Admission',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Ensure you have this image in your public folder
        width: 1200,
        height: 630,
        alt: 'BMSCE Direct Admission 2026-2027',
      },
    ],
  },

  // Twitter Card data
  twitter: {
    card: 'summary_large_image',
    title: "BMSCE & BMSIT Direct Admission",
    description: "Secure your engineering seat today. Expert guidance for management quota admissions.",
    images: ['/og-image.jpg'], 
  },

  icons: {
    icon: '/favicon.ico', 
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for Educational Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "BMS Direct Admission",
              "url": "https://www.bmsdirectadmission.com",
              "description": "Providing B.Tech direct admission guidance for BMSCE and BMSIT under management quota.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8217632035", 
                "contactType": "admissions support"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-900`}
      >
        <Navbar />
        
        <main className="min-h-screen">
            {children}
        </main>
        
        <FloatingActions/>
        <Footer />
      </body>
    </html>
  );
}