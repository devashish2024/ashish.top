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
import { motion } from "framer-motion";
import { ProjectMetadata } from "@/lib/projects";

type ProjectListProps = {
  projects: ProjectMetadata[];
  showSearch?: boolean;
  featured?: boolean;
};

export default function ProjectList({
  projects,
  showSearch = false,
  featured = false,
}: ProjectListProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sort, setSort] = useState("newest");

  const categories = useMemo(() => {
    const cats = new Set(projects.flatMap((p) => p.categories));
    return Array.from(cats);
  }, [projects]);

  const filteredAndSortedProjects = useMemo(() => {
    return projects
      .filter(
        (project) =>
          (!selectedCategory ||
            project.categories.includes(selectedCategory)) &&
          (project.title.toLowerCase().includes(search.toLowerCase()) ||
            project.summary.toLowerCase().includes(search.toLowerCase()))
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
          <p className="mt-4 text-lg font-semibold font-serif text-center">
            No results found
          </p>
          <p className="text-gray-400 text-center font-serif">
            There seems to be no projects matching your filter.
          </p>
        </div>
      ) : (
        <ul className="animated-list flex flex-col md:flex-row snap-x snap-mandatory scroll-pl-6 grid-cols-2 flex-nowrap gap-9 overflow-x-scroll md:grid md:overflow-auto">
          {projects.map((project) => (
            <motion.li
              key={project.slug}
              className="col-span-1 min-w-60 snap-start transition-opacity group"
              layout={featured}
              style={{
                display: filteredAndSortedProjects.includes(project)
                  ? "block"
                  : "none",
              }}
              transition={{ duration: 0.4 }}
            >
              <Link href={`/work/${project.slug}`} className="space-y-4">
                <motion.div
                  layoutId={`${project.slug}_image${featured ? "_featured" : ""}`}
                  className="aspect-video overflow-hidden rounded-md bg-secondary"
                >
                  <Halo strength={10}>
                    <Image
                      draggable={false}
                      src={project.image}
                      alt={project.title}
                      fill
                      className="h-full w-full object-cover"
                    />
                  </Halo>
                </motion.div>
                <div className="space-y-1">
                  <motion.p
                    className="font-semibold leading-tight group-hover:text-primary"
                    layoutId={`${project.slug}_title${featured ? "_featured" : ""}`}
                  >
                    {project.title}
                  </motion.p>
                  <div className="flex gap-2 my-2">
                    {project.categories.map((category, index) => (
                      <motion.span
                        key={category}
                        className="text-xs text-muted-foreground font-serif bg-primary/80 rounded-full px-2 py-1 text-white font-semibold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.05 + 0.2,
                        }}
                      >
                        {category}
                      </motion.span>
                    ))}
                  </div>
                  <motion.p
                    layoutId={`${project.slug}_summary${featured ? "_featured" : ""}`}
                    className="text-foreground/70"
                  >
                    {project.summary}
                  </motion.p>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
}
