import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Juliane Rodrigues | UX/UI Designer & Front-End",
  description:
    "Portfólio pessoal de Juliane Rodrigues, com projetos de UX/UI Design e desenvolvimento Front-End.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={geist.variable}>
        {children}
      </body>
    </html>
  );
}