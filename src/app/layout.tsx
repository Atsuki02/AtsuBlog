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
import { SessionProviders } from "./SessionProviders";
import { getCurrentUser } from "./actions/getCurrentUser";

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
  const currentUser = await getCurrentUser();

  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body className={inter.className}>
        <SessionProviders>
          <ReduxProvider>
            <ThemeProviders>
              <div className="relative dark:bg-neutral-900">
                <Header currentUser={currentUser} />
                {parallel}
                {children}
                <Footer />
              </div>
            </ThemeProviders>
          </ReduxProvider>
        </SessionProviders>
      </body>
      <PrelineScript />
    </html>
  );
}
