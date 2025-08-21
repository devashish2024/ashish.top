import { getRepoStats } from "@/lib/data";
import { GitFork, Star } from "lucide-react";
import Link from "next/link";

export default async function RepoStats() {
  // Temporarily disabled due to API restrictions
  return (
    <Link
      className="text-xs text-gray-500 dark:text-gray-400 hover:underline underline-offset-2 hover:text-theme transition-colors"
      href="https://github.com/devashish2024/ashish.top"
      target="_blank"
    >
      View on GitHub
    </Link>
  );
}
