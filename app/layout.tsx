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
  metadataBase: new URL("https://adaoangelo.com"), // Corrige o aviso do Next.js
  title: "Adão Ângelo João - Front-end Developer",
  description:
    "Front-end developer especializado em TypeScript, Node.js, React.js, Next.js, Nest.js, Tailwind CSS, Figma e UI/UX Design. CEO da Lumina Dev, transformando necessidades em aplicações funcionais.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Adão Ângelo João - Front-end Developer",
    description:
      "Transformo necessidades em aplicações reais, evolutivas e funcionais. Desenvolvo sistemas através da minha paixão por tecnologia, contribuindo para soluções inovadoras e eficazes.",
    url: "https://adaoangelo.com",
    siteName: "Adão Ângelo João Portfolio",
    images: [
      {
        url: "/me.jpeg",
        width: 800,
        height: 800,
        alt: "Adão Ângelo João Foto de Perfil",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adão Ângelo João - Front-end Developer",
    description:
      "Transformo necessidades em aplicações reais, evolutivas e funcionais.",
    images: ["/me.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Adão Ângelo João - Front-end Developer"
        />
        <meta
          property="og:description"
          content="Transformo necessidades em aplicações reais, evolutivas e funcionais. Desenvolvo sistemas através da minha paixão por tecnologia, contribuindo para soluções inovadoras e eficazes."
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
          content="Transformo necessidades em aplicações reais, evolutivas e funcionais."
        />
        <meta name="twitter:image" content="/me.jpeg" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        cz-shortcut-listen="true"
        className={`${inter.variable} ${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
