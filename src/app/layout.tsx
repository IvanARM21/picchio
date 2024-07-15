import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Picchio",
  description: "En Picchio elaboramos piezas únicas en hierro y madera, dirigido a la gastronomía y al hogar, realizamos envios a todo el país",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
