import RepoStats from "./repostats";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Link className="text-theme text-lg font-medium" href="/">
            Ashish Agarwal
          </Link>
          <div className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
            <p>&copy; 2022-{currentYear} Ashish Agarwal</p>
            <Link
              href="https://github.com/devashish2024/ashish.top"
              target="_blank"
              className="hover:underline underline-offset-2 hover:text-theme transition-colors"
            >
              View source on GitHub
            </Link>
          </div>
          <RepoStats />
        </div>
      </div>
    </footer>
  );
}
