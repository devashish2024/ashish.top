import RepoStats from "./repostats";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-400 py-8 border-t">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4 text-gray-500 dark:text-gray-400">
        <Link className="text-theme text-xl font-semibold font-mono" href="/">
          {"<Ashish />"}
        </Link>
        <p className="font-serif text-xs text-center">
          &copy; 2022-{currentYear} Ashish Agarwal
          <br />
          <Link
            href="https://github.com/devashish2024/ashish.top"
            target="_blank"
            className="font-serif hover:underline underline-offset-2 hover:text-theme transition-all duration-75"
          >
            Open-source portfolio.
          </Link>
        </p>
        <RepoStats />
      </div>
    </footer>
  );
}
