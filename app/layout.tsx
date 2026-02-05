import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
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

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps): JSX.Element => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;

