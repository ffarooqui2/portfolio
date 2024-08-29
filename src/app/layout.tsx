import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Faaizuddin's Portfolio",
  description: "Explore Faaizuddin's portfolio and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/faaiz-logo.svg"></link>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-5xl mx-auto",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
