"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const rootDirectory = path.join(process.cwd(), "content", "projects");

export type Project = {
  metadata: ProjectMetadata;
  content: string;
};

export type ProjectMetadata = {
  title: string;
  summary: string;
  image: string;
  categories: string[];
  publishedAt?: string;
  slug: string;
};

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
    const { data, content } = matter(fileContent);
    return {
      metadata: {
        title: data.title,
        summary: data.summary,
        categories: data.categories,
        slug,
        image: data.image,
        publishedAt: data.publishedAt,
      },
      content,
    };
  } catch (error) {
    return null;
  }
}

export async function getProjects(limit?: number): Promise<ProjectMetadata[]> {
  const files = fs.readdirSync(rootDirectory);

  const projects = files
    .map((file) => getProjectMetadata(file))
    .sort((a, b) => {
      if (
        new Date((a as any).publishedAt ?? "") <
        new Date((b as any).publishedAt ?? "")
      ) {
        return 1;
      } else {
        return -1;
      }
    });

  if (limit) {
    return Promise.all(projects).then((projects) => projects.slice(0, limit));
  }

  return Promise.all(projects);
}

export async function getProjectMetadata(
  filepath: string
): Promise<ProjectMetadata> {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const { data } = matter(fileContent);
  return { ...(data as ProjectMetadata), slug };
}
