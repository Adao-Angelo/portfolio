import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeScript } from "@/components/ThemeScript";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-ciq5.vercel.app/"),
  title: {
    default: "Adão Ângelo João - Front-end Developer",
    template: "%s | Adão Ângelo João",
  },
  description:
    "Front-end developer specialized in TypeScript, Node.js, React.js, Next.js, Nest.js, Tailwind CSS, Figma and UI/UX Design. CEO of Lumina Dev, transforming needs into functional applications.",
  keywords: [
    "Frontend Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "UI/UX Design",
    "Web Development",
    "JavaScript",
    "Lumina Dev",
  ],
  authors: [{ name: "Adão Ângelo João" }],
  creator: "Adão Ângelo João",
  publisher: "Adão Ângelo João",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/me.jpeg",
    apple: "/me.jpeg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-ciq5.vercel.app/",
    siteName: "Adão Ângelo João Portfolio",
    title: "Adão Ângelo João - Front-end Developer",
    description:
      "I transform needs into real, evolving and functional applications. I develop systems through my passion for technology, contributing to innovative and effective solutions.",
    images: [
      {
        url: "/me.jpeg",
        width: 1200,
        height: 630,
        alt: "Adão Ângelo João Profile Picture",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adão Ângelo João - Front-end Developer",
    description:
      "I transform needs into real, evolving and functional applications. I develop systems through my passion for technology, contributing to innovative and effective solutions.",
    images: [
      {
        url: "/me.jpeg",
        alt: "Adão Ângelo João Profile Picture",
      },
    ],
    creator: "@adaoangelo",
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
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <ThemeScript />
      </head>
      <body
        className="
          antialiased 
          bg-white 
          dark:bg-gray-950 
          text-gray-900 
          dark:text-gray-50 
          font-sans 
          px-4 
          md:px-8 
          max-w-2xl 
          mx-auto
        "
      >
        <div className="min-h-screen">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
