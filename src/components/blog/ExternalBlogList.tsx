'use client';

import type { Article } from '@/config/Writing';
import { ArrowRight, CalendarDays } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

export default function ExternalBlogList({
  posts,
  initialCount = 6,
}: {
  posts: Article[];
  initialCount?: number;
}) {
  const [showAll, setShowAll] = useState(posts.length <= initialCount);
  const visiblePosts = showAll ? posts : posts.slice(0, initialCount);

  return (
    <>
      <div className="divide-border divide-y">
        {visiblePosts.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            target="_blank"
            rel="noreferrer"
            className="group grid gap-2 py-4 first:pt-0 sm:grid-cols-[1fr_auto] sm:items-center"
          >
            <div>
              <h3 className="text-lg font-semibold group-hover:underline group-hover:underline-offset-4">
                {article.title}
              </h3>
              <p className="text-secondary mt-0.5 text-sm">
                {article.description}
              </p>
              <p className="text-muted-foreground mt-1 flex items-center gap-1 text-xs">
                <CalendarDays className="size-3" />
                {formatDate(article.date)} · {article.publication}
                {article.readTime ? ` · ${article.readTime}` : ''}
              </p>
            </div>
            <span className="text-secondary group-hover:text-primary flex items-center gap-2 text-sm">
              Read more <ArrowRight className="size-4" />
            </span>
          </Link>
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center pt-4">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="border-border bg-background hover:bg-muted rounded-md border px-3 py-1.5 text-sm font-medium transition-colors"
          >
            Load more posts
          </button>
        </div>
      )}
    </>
  );
}
