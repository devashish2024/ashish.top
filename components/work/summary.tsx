"use client";

import { motion } from "framer-motion";

export default function Summary({ summary }: { summary: string }) {
  return (
    <motion.p
      className="text-lg"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25, duration: 0.5 }}
    >
      {summary}
    </motion.p>
  );
}
