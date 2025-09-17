import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./globals.css";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClaritySync Project",
  description: "Tools and templates to bring focus, alignment, and productivity.",
};

import SiteHeader from "./components/site-header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${saira.variable} antialiased`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
