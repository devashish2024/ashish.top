import { GitFork, Star } from "lucide-react";
import Link from "next/link";

export default function Footer({
  repoStats,
}: {
  repoStats: { stars: number; forks: number };
}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-400 py-8 border-t">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4 text-gray-500 dark:text-gray-400">
        <Link className="text-primary text-xl font-semibold font-mono" href="/">
          {"<Ashish />"}
        </Link>
        <p className="font-serif text-xs text-center">
          &copy; 2022-{currentYear} Ashish Agarwal
          <br />
          <Link
            href="https://github.com/devashish2024/ashish.top"
            target="_blank"
            className="font-serif hover:underline underline-offset-2 hover:text-primary transition-all duration-75"
          >
            Open-source portfolio.
          </Link>
        </p>
        <Link
          className="font-serif flex text-xs items-center gap-1 hover:underline underline-offset-2 hover:text-primary transition-all duration-75"
          href="https://github.com/devashish2024/ashish.top"
          target="_blank"
        >
          {repoStats.stars} <Star className="size-3" /> | {repoStats.forks}{" "}
          <GitFork className="size-3" />
        </Link>
      </div>
    </footer>
  );
}
