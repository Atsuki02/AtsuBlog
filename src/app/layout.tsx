import "./globals.css";
import type { Metadata } from "next";
import { Great_Vibes, Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeProviders from "../../ThemeProviders";

const inter = Inter({ subsets: ["latin"] });

export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-great-vibes",
});

export const metadata: Metadata = {
  title: "AtsuBlog",
  description: "Blog created by Atsuki",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='light' style={{ colorScheme: "light" }}>
      <body className={inter.className}>
        <ThemeProviders>
          <div className=''>
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
