export async function getRepoStats() {
  const req = await fetch(
    "https://api.github.com/repos/devashish2024/ashish.top",
    {
      method: "GET",
    },
  );

  const data = await req.json();

  return { stars: data.stargazers_count, forks: data.forks };
}
