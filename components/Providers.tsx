"use client";

import Footer from "./footer";
import Header from "./header";

import { ThemeProvider } from "next-themes";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      defaultTheme="dark"
      attribute="class"
      disableTransitionOnChange
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
      <Header />
      <main className="container min-h-screen">{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Providers;
