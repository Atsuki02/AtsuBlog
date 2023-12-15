import "./globals.css";
import type { Metadata } from "next";
import { Great_Vibes, Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeProviders from "../../ThemeProviders";
import { ReduxProvider } from "./redux/Provider";
import { SessionProvider } from "next-auth/react";
import React from "react";
import PrelineScript from "./components/PrelineScript";

const inter = Inter({ subsets: ["latin"] });

export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
});

const metadata: Metadata = {
  title: "AtsuBlog",
  description: "Blog created by Atsuki",
};

export default function RootLayout({
  parallel,
  children,
}: {
  parallel: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProviders>
            <div className="relative dark:bg-neutral-900">
              <Header />
              {parallel}
              {children}
              <Footer />
            </div>
          </ThemeProviders>
        </ReduxProvider>
      </body>
      <PrelineScript />
    </html>
  );
}
