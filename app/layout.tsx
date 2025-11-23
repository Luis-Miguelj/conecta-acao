import type { Metadata } from "next";
import { Hedvig_Letters_Serif } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const hedvigLettersSerif = Hedvig_Letters_Serif({
  variable: "--font-hedvig-letters-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ConectaAção",
  description: "Site criado para ajudar as pessoas!",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hedvigLettersSerif.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
