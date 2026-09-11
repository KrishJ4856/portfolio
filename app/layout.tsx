import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Krish Jaiswal — a small corner of the internet",
  description: "A few things I’ve made for the web and the desktop. Projects, experiments, and writing by Krish Jaiswal.",
  icons: { icon: "/favicon.png" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
