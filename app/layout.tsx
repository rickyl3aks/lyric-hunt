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
  return (
    <html lang="en">
      <body>
        <Search />
        {children}
      </body>
    </html>
  );
}
