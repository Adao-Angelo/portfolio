import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adaoangelo.com"), // Fixes Next.js warning
  title: "Adão Ângelo João - Front-end Developer",
  description:
    "Front-end developer specialized in TypeScript, Node.js, React.js, Next.js, Nest.js, Tailwind CSS, Figma and UI/UX Design. CEO of Lumina Dev, transforming needs into functional applications.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Adão Ângelo João - Front-end Developer",
    description:
      "I transform needs into real, evolving and functional applications. I develop systems through my passion for technology, contributing to innovative and effective solutions.",
    url: "https://adaoangelo.com",
    siteName: "Adão Ângelo João Portfolio",
    images: [
      {
        url: "/me.jpeg",
        width: 800,
        height: 800,
        alt: "Adão Ângelo João Profile Picture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adão Ângelo João - Front-end Developer",
    description:
      "I transform needs into real, evolving and functional applications.",
    images: ["/me.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Adão Ângelo João - Front-end Developer"
        />
        <meta
          property="og:description"
          content="I transform needs into real, evolving and functional applications. I develop systems through my passion for technology, contributing to innovative and effective solutions."
        />
        <meta property="og:image" content="/me.jpeg" />
        <meta property="og:url" content="https://adaoangelo.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Adão Ângelo João - Front-end Developer"
        />
        <meta
          name="twitter:description"
          content="I transform needs into real, evolving and functional applications."
        />
        <meta name="twitter:image" content="/me.jpeg" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        cz-shortcut-listen="true"
        className={`${inter.variable} ${roboto.variable} antialiased`}
      >
        <div className="min-h-screen bg-dark-custom text-foreground">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
