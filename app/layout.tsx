import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "@/components/navigation/Navbar";

const SF = localFont({ src: "../public/fonts/SF-Pro-Display-Light.otf" });

export const metadata: Metadata = {
  title: "iPhone 15 Pro",
  description: "iPhone 15 Pro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black scroll-smooth">
      <body className={SF.className}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
