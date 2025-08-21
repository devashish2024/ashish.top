"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Equal } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
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
  { href: "/work", label: "Work" },
  { href: "/highlights", label: "Highlights" },
  { href: "/sign", label: "Guestbook" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  const handleScroll = () => {
    const currentScrollY = scrollY.get();
    const previous = scrollY.getPrevious() || 0;

    if (currentScrollY > previous && currentScrollY > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  };

  const isActive = (href: string) => {
    return (
      pathname === href ||
      (pathname.startsWith("/projects") && href.startsWith("/projects"))
    );
  };

  useMotionValueEvent(scrollY, "change", handleScroll);

  return (
    <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
      <motion.header
        className="sticky top-0 z-50 mt-2 px-6 py-4 md:py-8 backdrop-blur-md md:backdrop-blur-none"
        suppressHydrationWarning
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          mass: 1,
        }}
      >
        <div className="flex items-center justify-between md:justify-center">
          <Link
            className="text-theme text-xl font-medium md:hidden"
            href="/"
          >
            Ashish
          </Link>
          <SheetTrigger className="md:hidden">
            <div className="flex items-center justify-center p-2 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
              <Equal className="text-gray-600 dark:text-gray-400 h-5 w-5" />
            </div>
          </SheetTrigger>
          <nav
            className="hidden md:flex items-center gap-1 rounded-full shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 backdrop-blur-sm py-2 px-3 bg-white/80 dark:bg-gray-950/80"
            suppressHydrationWarning
          >
            <ul className="gap-x-1 text-sm font-medium flex">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="transition-transform duration-200 hover:scale-[1.02]"
                >
                  <Link
                    href={link.href}
                    scroll={true}
                    className={`group relative rounded-full px-4 py-2 transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-white dark:text-gray-900"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
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
                        className="absolute inset-0 -z-10 rounded-full bg-theme"
                      ></motion.span>
                    )}
                        className="absolute inset-0 -z-10 rounded-full bg-theme group-hover:bg-theme/80"
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
      </motion.header>
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
                    ? "bg-theme text-white"
                    : "font-medium text-theme brightness-150"
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
      <Sun className={`size-${size} text-theme hidden dark:block`} />
      <Moon className={`size-${size} text-theme dark:hidden`} />
    </button>
  );
}
