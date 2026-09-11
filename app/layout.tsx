import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Krish Jaiswal — a small corner of the internet",
  description: "Writing about what I’m learning, a few things I’m working on, and little projects built for fun. By Krish Jaiswal.",
  icons: { icon: "/favicon.png" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
