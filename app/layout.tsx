import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
export const metadata: Metadata = {
  title: "Krish Jaiswal",
  description: "Writing about what I’m learning, a few things I’m working on, and small projects built for fun.",
  icons: { icon: "/favicon.png" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={geist.variable}>{children}</body></html>;
}
