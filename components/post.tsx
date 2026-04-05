"use client";

import { useState } from "react";
import Link from "next/link";

interface Post {
  slug: string;
  metadata: {
    title: string;
    summary: string;
    image?: string;
    publishedAt: string;
  };
}

export default function BlogList({ posts, isHome }: { posts: Post[], isHome?: boolean }) {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? posts.filter(
      (p) =>
        p.metadata.title.toLowerCase().includes(query.toLowerCase()) ||
        p.metadata.summary.toLowerCase().includes(query.toLowerCase())
    )
    : posts;

  return (
    <div>
      {isHome === false && (
        <div className="relative mb-10">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
            width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>

          <input
            type="text"
            placeholder="Search an article by title or summary…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
          />
        </div>
      )}

      <p className="text-xs text-neutral-400 mb-4">
        {filtered.length} article{filtered.length > 1 ? "s" : ""}
      </p>

      <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
        {filtered.length === 0 ? (
          <p className="text-center py-12 text-sm text-neutral-400">
            Aucun résultat.
          </p>
        ) : (
          filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group grid grid-cols-[1fr_88px] border-b-2 border-neutral-200 dark:border-neutral-600 gap-5 py-5 items-start"
            >
              <div>
                <p className="text-[11px] uppercase tracking-widest text-neutral-400 mb-2">
                  {new Date(post.metadata.publishedAt).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="text-base font-medium text-neutral-900 dark:text-white leading-snug mb-1.5 group-hover:text-neutral-500 transition-colors">
                  {post.metadata.title}
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-2">
                  {post.metadata.summary}
                </p>
              </div>
              {post.metadata.image ? (
                <img
                  src={post.metadata.image}
                  alt={post.metadata.title}
                  className="w-[88px] h-[66px] rounded-lg object-cover"
                />
              ) : (
                <div className="w-[88px] h-[66px] rounded-lg bg-neutral-100 dark:bg-neutral-800" />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
}