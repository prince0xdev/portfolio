"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  summary: string;
  image: string;
  date: string;
  slug: string;
}

export default function BlogCard({
  title,
  summary,
  image,
  date,
  slug,
}: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
    >
      <Link href={`/blog/${slug}`} className="flex flex-col h-full">
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="flex flex-col justify-between flex-1 p-5">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
              {title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
              {summary}
            </p>
          </div>

          <p className="text-xs text-gray-400 mt-4">
            {new Date(date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
