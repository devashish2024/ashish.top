import Footer from "./footer";
import Header from "./header";

import { ThemeProvider } from "next-themes";

const Providers = async ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      defaultTheme="dark"
      attribute="class"
      disableTransitionOnChange
    >
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-theme via-theme/60 to-theme opacity-60"></div>
      <Header />
      <main className="min-h-screen" suppressHydrationWarning>
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default Providers;
