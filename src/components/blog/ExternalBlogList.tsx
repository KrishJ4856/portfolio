'use client';

import type { Article } from '@/config/Writing';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

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
              <h3 className="text-lg font-semibold">
                <span className="relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-[420ms] after:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:after:origin-left group-hover:after:scale-x-100">
                  {article.title}
                  <ArrowRight className="ml-1 inline-block size-[17px] align-[-2px]" />
                </span>
              </h3>
              <p className="text-secondary mt-1.5 text-sm">
                {article.description}
              </p>
              <p className="text-muted-foreground mt-1 flex items-center gap-1 text-xs">
                {/* <CalendarDays className="size-3" /> */}
                {/* {formatDate(article.date)} · {article.publication}
                {article.readTime ? ` · ${article.readTime}` : ''} */}

                {article.publication}
              </p>
            </div>
            {/* <span className="text-secondary group-hover:text-primary flex items-center gap-2 text-sm">
              Read more <ArrowRight className="size-4" />
            </span> */}
          </Link>
        ))}
      </div>

      {posts.length > initialCount && (
        <div className="flex justify-center pt-4">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="border-border bg-background hover:bg-muted cursor-pointer rounded-md border px-3 py-1.5 text-sm font-medium transition-colors"
          >
            {showAll ? 'Show less' : 'Show more posts'}
          </button>
        </div>
      )}
    </>
  );
}
