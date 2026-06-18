import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rodrigograss.com.br"),
  title: "Rodrigo GRASS | Vidros e Espelhos Sob Medida",
  description:
    "Serviços de vidraçaria sob medida para residências, comércios e condomínios. Solicite orçamento pelo WhatsApp.",
  openGraph: {
    title: "Rodrigo GRASS | Vidros e Espelhos Sob Medida",
    description:
      "Box, espelhos, portas, janelas, sacadas, guarda-corpos e projetos sob medida em vidro.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/images/glazier-mascot.png",
        width: 794,
        height: 1110,
        alt: "Mascote vidraceiro da Rodrigo GRASS segurando uma placa de vidro",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
