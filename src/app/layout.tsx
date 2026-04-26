import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gallegos | Best Restaurant in Stapleford Nottingham | gallegos.uk",
  description:
    "Gallegos Restaurant — Bold flavours in Stapleford, Nottingham. Sizzling burgers, fiery sizzlers, pasta & more. Order now or visit us at Unit 3, Hickings Lane, NG9 8PA.",
  keywords: [
    "Gallegos",
    "restaurant Stapleford",
    "Nottingham restaurant",
    "burgers Stapleford",
    "sizzlers Nottingham",
    "pasta restaurant NG9",
    "peri peri chicken Stapleford",
  ],
  openGraph: {
    title: "Gallegos | Best Restaurant in Stapleford Nottingham",
    description:
      "Bold flavours and sizzling dishes in the heart of Stapleford, Nottingham.",
    url: "https://gallegos.uk",
    siteName: "Gallegos",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://gallegos.uk"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Gallegos",
  description:
    "Bold flavours and sizzling dishes — burgers, sizzlers, pasta & more in Stapleford, Nottingham.",
  url: "https://gallegos.uk",
  telephone: "+441156464555",
  email: "gallegospiripiri26@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 3, Hickings Lane",
    addressLocality: "Stapleford",
    addressRegion: "Nottinghamshire",
    postalCode: "NG9 8PA",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.926,
    longitude: -1.273,
  },
  servesCuisine: ["Peri Peri", "Burgers", "Pasta", "Sizzlers", "Fast Casual"],
  priceRange: "£",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "11:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "11:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "21:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
