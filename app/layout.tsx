import type { Metadata } from "next";
import { Montserrat, Outfit } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const sans = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const sansSerif = Outfit({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ashish Agarwal",
  description:
    "Young web developer and designer from India. I love to create beautiful and functional websites that grab users.",
  keywords: [
    "web developer",
    "ashish",
    "ashish agarwal",
    "india",
    "web designer",
    "frontend developer",
    "fullstack developer",
    "programmer",
    "computer boy",
  ],
  authors: [{ name: "Ashish Agarwal" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${sansSerif.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
