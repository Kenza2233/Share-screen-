import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cloud Phone Dash",
  description: "Dashboard pengurusan peranti awan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ms" className={inter.className}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
