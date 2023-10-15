import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Footer from "./components/footer/footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lyric hunt",
  description: "Looking for your favourite lyric song",
  viewport: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const circleCount = 4;
  return (
    <html lang="en">
      <body>
        <div className="pattern">
          <main>
            <h1 className="title">Lyric Hunt</h1>
          </main>
          {Array.from({ length: circleCount }).map((_, index) => (
            <div key={index} className="circle">
              <div className="inner-circle"></div>
            </div>
          ))}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
