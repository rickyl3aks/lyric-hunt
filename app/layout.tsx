import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Search from "./components/search/search";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lyric hunt",
  description: "Looking for your favourite lyric song",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const circleCount = 4;
  return (
    <html lang="en">
      <body>
        <div className="pattern">
          <h1 className="title">Lyric Hunt</h1>
          {Array.from({ length: circleCount }).map((_, index) => (
            <div key={index} className="circle">
              <div className="inner-circle"></div>
            </div>
          ))}
          {children}
        </div>
      </body>
    </html>
  );
}
