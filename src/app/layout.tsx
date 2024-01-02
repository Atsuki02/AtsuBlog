import "./globals.css";
import type { Metadata } from "next";
import { Great_Vibes, Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeProviders from "../../ThemeProviders";
import { ReduxProvider } from "./redux/Provider";
import React from "react";
import { SessionProviders } from "./SessionProviders";
import PrelineScript from "./components/PrelineScript";
import ToastProvider from "./ToastProvider";

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

export default async function RootLayout({
  parallel,
  children,
}: {
  parallel: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={inter.className}>
        <SessionProviders>
          <ReduxProvider>
            <ThemeProviders>
              <div className="relative dark:bg-neutral-900">
                <Header />
                {parallel}
                {children}
                <Footer />
              </div>
              <ToastProvider />
            </ThemeProviders>
          </ReduxProvider>
        </SessionProviders>
      </body>
      <PrelineScript />
    </html>
  );
}
