"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/utils";
import MDXContent from "../layout/mdxcontent";

export default function ProjectPage({
  slug,
  image,
  title,
  publishedAt,
  summary,
  content,
}: {
  slug: string;
  image: string;
  title?: string;
  publishedAt?: string;
  summary?: string;
  content: string;
}) {
  return (
    <>
      {image && (
        <motion.div
          layoutId={`${slug}_image`}
          className="relative mb-6 h-96 w-full overflow-hidden rounded-lg group bg-black"
        >
          <Image
            src={image}
            alt={title || ""}
            className="object-contain w-full h-full transition-transform transform group-hover:scale-105 group-hover:opacity-70"
            fill
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </motion.div>
      )}

      <header>
        <motion.h1 className="title" layoutId={`${slug}_title`}>
          {title}
        </motion.h1>
        <p className="mt-3 text-xs text-muted-foreground">
          Ashish Agarwal / {formatDate(publishedAt ?? "")}
        </p>
      </header>

      <main className="prose mt-16 dark:prose-invert">
        {summary && (
          <motion.p className="text-lg" layoutId={`${slug}_summary`}>
            {summary}
          </motion.p>
        )}
        <MDXContent source={content} />
      </main>
    </>
  );
}
