import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/app/_lib/utils";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Agenda Paragominas",
  description: "Todos os estabelecimentos da cidade em um só lugar!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark">
      <body
        className={cn("min-h-screen bg-background antialiased", inter.variable)}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
