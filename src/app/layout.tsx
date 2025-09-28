import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import HeaderSectionComponent from "@/components/header-section-component";
import Footer from "@/components/Footer";
import { solanSecurityLogo } from "../../public/images/images";

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
    default: "Solan Security Company - Professional Security Services in Meru",
    template: "%s | Solan Security Company",
  },
  description:
    "Protect yourself and property with Solan Security Company's top-quality security services. We offer private security, event security, and corporate security solutions in Meru, Kenya. Call 0789204855 for emergency security services.",
  keywords: [
    "security services",
    "private security",
    "event security",
    "corporate security",
    "Meru security",
    "Kenya security company",
    "professional security",
    "property protection",
    "business security",
  ],
  authors: [{ name: "Solan Security Company" }],
  creator: "Solan Security Company",
  publisher: "Solan Security Company",
  metadataBase: new URL("https://solansecurity.co.ke"), // Update with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://solansecurity.co.ke", // Update with your actual domain
    siteName: "Solan Security Company",
    title: "Solan Security Company - Professional Security Services",
    description:
      "Protect yourself and property with our top-quality security services. Private, event, and corporate security solutions in Meru, Kenya.",
    images: [
      {
        url: solanSecurityLogo.src, // Add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Solan Security Company - Professional Security Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solan Security Company - Professional Security Services",
    description:
      "Top-quality security services in Meru, Kenya. Private, event, and corporate security solutions.",
    images: [solanSecurityLogo.src],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <HeaderSectionComponent />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
