"use client";

import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Meta({
  title,
  image = null,
  slug,
  publishedAt,
  categories,
}: {
  title: string | undefined;
  image?: string | undefined | null;
  slug: string;
  publishedAt: string | undefined;
  categories: string[];
}) {
  return (
    <div>
      {image !== null && image !== undefined && (
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

      <header className="space-y-2 my-2">
        <motion.h1
          className="text-4xl font-semibold font-serif"
          layoutId={`${slug}_title`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-3 text-xs text-muted-foreground font-serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Ashish Agarwal / {formatDate(publishedAt ?? "")}
        </motion.p>
        <div className="flex gap-2">
          {categories.map((category, index) => (
            <motion.span
              key={category}
              className="text-xs text-muted-foreground font-serif bg-primary/80 rounded-full px-2 py-1 text-white font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {category}
            </motion.span>
          ))}
        </div>
      </header>
    </div>
  );
}
