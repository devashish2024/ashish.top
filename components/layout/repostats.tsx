import { getRepoStats } from "@/lib/data";
import { GitFork, Star } from "lucide-react";
import Link from "next/link";

export default async function RepoStats() {
  const repoStats = await getRepoStats();

  return (
    <Link
      className="font-serif flex text-xs items-center gap-1 hover:underline underline-offset-2 hover:text-theme transition-all duration-75"
      href="https://github.com/devashish2024/ashish.top"
      target="_blank"
    >
      {repoStats?.stars} <Star className="size-3" /> | {repoStats?.forks}{" "}
      <GitFork className="size-3" />
    </Link>
  );
}
