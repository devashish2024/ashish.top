"use server";

require("dotenv").config();

export async function getRepoStats() {
  const req = await fetch(
    "https://api.github.com/repos/devashish2024/ashish.top",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: {
        revalidate: 3600,
      },
    },
  );

  const data = await req.json();

  return { stars: data.stargazers_count, forks: data.forks };
}
