"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Halo from "@/components/ui/halo";
import { SearchIcon } from "lucide-react";
import { Project } from "@/data/projects";

type ProjectListProps = {
  projects: Project[];
  showSearch?: boolean;
};

export default function ProjectList({
  projects,
  showSearch = false,
}: ProjectListProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sort, setSort] = useState("newest");

  const categories = useMemo(() => {
    const cats = new Set(projects.flatMap((p) => p.category));
    return Array.from(cats);
  }, [projects]);

  const filteredAndSortedProjects = useMemo(() => {
    return projects
      .filter(
        (project) =>
          (!selectedCategory || project.category.includes(selectedCategory)) &&
          (project.title.toLowerCase().includes(search.toLowerCase()) ||
            project.summary.toLowerCase().includes(search.toLowerCase())),
      )
      .sort((a, b) => {
        if (sort === "newest") return 0;
        if (sort === "oldest") return projects.indexOf(b) - projects.indexOf(a);
        return a.title.localeCompare(b.title);
      });
  }, [projects, search, selectedCategory, sort]);

  return (
    <div className="space-y-6">
      {showSearch && (
        <div className="flex flex-col md:flex-row md:justify-between gap-4 font-serif">
          <Input
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="md:w-full"
          />
          <div className="flex items-center gap-4">
            <Select
              value={selectedCategory ?? "all"}
              onValueChange={(value) =>
                setSelectedCategory(value === "all" ? null : value)
              }
            >
              <SelectTrigger className="md:w-full">
                <SelectValue placeholder="Categories" />
              </SelectTrigger>
              <SelectContent className="font-serif">
                <SelectItem value="all">All</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="md:w-full">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent className="font-serif">
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="oldest">Oldest</SelectItem>
                <SelectItem value="alphabetical">Alphabetical</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      )}

      {filteredAndSortedProjects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10">
          <SearchIcon className="size-12 text-gray-300" />
          <p className="mt-4 text-lg font-semibold font-serif">
            No results found
          </p>
          <p className="text-gray-400 font-serif">
            There seems to be no projects matching your filter.
          </p>
        </div>
      ) : (
        <ul className="animated-list flex flex-col md:flex-row snap-x snap-mandatory scroll-pl-6 grid-cols-2 flex-nowrap gap-9 overflow-x-scroll md:grid md:overflow-auto">
          {filteredAndSortedProjects.map((project) => (
            <li
              key={project.slug}
              className="col-span-1 min-w-80 snap-start transition-opacity group"
            >
              <Link href={`/projects/${project.slug}`} className="space-y-4">
                <div className="aspect-video overflow-hidden rounded-md bg-secondary">
                  <Halo strength={10}>
                    <Image
                      draggable={false}
                      src={project.image}
                      alt={project.title}
                      fill
                      className="h-full w-full object-cover"
                    />
                  </Halo>
                </div>
                <div className="space-y-1">
                  <p className="font-semibold leading-tight group-hover:text-primary">
                    {project.title}
                  </p>
                  <p className="text-foreground/70">{project.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
