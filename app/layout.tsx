import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UDB",
  description: "UMKM Digital Blockchain e-commerce",
  icons: {
    icon: "../public/apple-touch-icon.png",
    shortcut: "../public/favicon-16x16.png",
    apple: "../public/apple-touch-icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "../public/apple-touch-icon.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
