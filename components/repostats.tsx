"use client";

import { useState, useEffect } from "react";
import { getRepoStats } from "@/lib/data";
import { GitFork, Star } from "lucide-react";
import Link from "next/link";

export const RepoStats = () => {
  const [repoStats, setRepoStats] = useState<{
    stars: number;
    forks: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepoStats = async () => {
      try {
        const stats = (await getRepoStats()) as any;
        setRepoStats(stats);
      } catch (err) {
        setError("Failed to fetch repo stats");
        console.error("Failed to fetch repo stats", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepoStats();
  }, []);

  if (loading) return <span>Loading...</span>;
  if (error) return <span>{error}</span>;

  return (
    <Link
      className="font-serif flex text-xs items-center gap-1 hover:underline underline-offset-2 hover:text-primary transition-all duration-75"
      href="https://github.com/devashish2024/ashish.top"
      target="_blank"
    >
      {repoStats?.stars} <Star className="size-3" /> | {repoStats?.forks}{" "}
      <GitFork className="size-3" />
    </Link>
  );
};
