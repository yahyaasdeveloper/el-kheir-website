import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "El Kheir | Partenaire de confiance en produits alimentaires",
  description: "El Kheir est une entreprise spécialisée dans la distribution et la fourniture de produits alimentaires et de consommation pour professionnels et particuliers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
