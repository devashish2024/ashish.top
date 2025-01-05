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
      <Header />
      <main className="container min-h-screen">{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Providers;
