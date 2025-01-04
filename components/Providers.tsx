"use client";

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
      <main className="container">{children}</main>
    </ThemeProvider>
  );
};

export default Providers;
