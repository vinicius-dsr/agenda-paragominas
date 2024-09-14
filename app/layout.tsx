import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/app/_lib/utils";
import { Toaster } from "sonner";
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Agenda Paragominas",
  description: "Todos os empreendimentos da cidade em um só lugar !",
  keywords: [
    "Agenda Paragominas",
    "Estabelecimentos em Paragominas",
    "paragominas",
    "Bares",
    "Academia",
    "Perto de mim",
  ],

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },

  openGraph: {
    title: "Agenda Paragominas",
    description: "Todos os empreendimentos da cidade em um só lugar !",
    type: "website",
    locale: "pt_BR",
    url: "https://agenda-paragominas.vercel.app/",
    images: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark">
      <body
        className={cn(
          "flex min-h-screen flex-col scroll-smooth bg-background antialiased",
          inter.variable,
        )}
      >
        <main className="flex-grow">{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
