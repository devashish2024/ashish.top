"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/interviews", label: "Interviews" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const isActive = (href: string) => {
    return (
      pathname === href ||
      (pathname.startsWith("/projects") && href.startsWith("/projects"))
    );
  };

  return (
    <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
      <header
        className="sticky top-0 z-50 mt-2 px-6 py-4 md:py-8 backdrop-blur-md md:backdrop-blur-none"
        suppressHydrationWarning
      >
        <div className="flex items-center justify-between md:justify-center">
          <Link
            className="text-primary text-2xl font-semibold md:hidden font-mono"
            href="/"
          >
            {"<Ashish />"}
          </Link>
          <SheetTrigger className="md:hidden">
            <div className="p-2 rounded-full border-2 border-primary bg-accent/10">
              <MenuIcon className="text-primary size-8" />
            </div>
          </SheetTrigger>
          <nav
            className="hidden md:flex items-center gap-2 rounded-full shadow ring-1 ring-gray-400/30 backdrop-blur-md dark:ring-accent/50 py-2 px-4 max-w-2xl bg-white/40 dark:bg-black/40"
            suppressHydrationWarning
          >
            <ul className="gap-x-2 text-sm font-medium flex">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="transition-transform duration-100 hover:scale-[1.1] my-3"
                >
                  <Link
                    href={link.href}
                    scroll={true}
                    className={`group relative rounded-full px-3 py-2 transition-colors duration-200 ${
                      isActive(link.href)
                        ? "font-semibold text-background dark:hover:text-foreground"
                        : "text-foreground"
                    }`}
                  >
                    {isActive(link.href) && (
                      <motion.span
                        layoutId="tab-pill"
                        style={{ originY: "0px" }}
                        animate={{
                          transition: {
                            x: {
                              type: "spring",
                              stiffness: 300,
                              damping: 30,
                            },
                          },
                        }}
                        className="absolute inset-0 -z-10 rounded-full bg-primary group-hover:bg-primary/80"
                      ></motion.span>
                    )}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </nav>
        </div>
      </header>
      <SheetContent side={"bottom"}>
        <SheetHeader>
          <SheetTitle className="sr-only">Navigation Bar</SheetTitle>
          <SheetDescription className="sr-only">
            List of links to navigate through the website.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col items-center gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="my-1"
              onClick={() => setMobileNavOpen(false)}
            >
              <span
                className={`text-xl p-2 rounded-md transition-colors duration-200 ${
                  pathname === link.href
                    ? "bg-primary text-white"
                    : "font-medium text-primary brightness-150"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <Separator orientation="horizontal" />
          <ThemeToggle size={8} />
        </nav>
      </SheetContent>
    </Sheet>
  );
}

function ThemeToggle({ size = 6 }) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="p-2 rounded-full transition-transform duration-100 hover:scale-[1.1]"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className={`size-${size} text-primary hidden dark:block`} />
      <Moon className={`size-${size} text-primary dark:hidden`} />
    </button>
  );
}
