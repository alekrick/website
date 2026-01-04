import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alessandra Krick – Product Manager",
  description: "Portfolio of Alessandra Krick, Product Manager with expertise in UX, digital products, and cross-platform product delivery. Explore case studies, UX insights, and product projects.",
  icons: {
    icon: [
      { url: "/icon.png", sizes: "128x128", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

