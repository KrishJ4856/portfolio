'use client';

import Link from 'next/link';
import { useState } from 'react';

type ProjectListItem = {
  title: string;
  description: string;
  href: string;
};

export default function ExpandableProjectList({
  projects,
  initialCount = 6,
}: {
  projects: ProjectListItem[];
  initialCount?: number;
}) {
  const [showAll, setShowAll] = useState(projects.length <= initialCount);
  const visibleProjects = showAll ? projects : projects.slice(0, initialCount);

  return (
    <>
      <div className="divide-border divide-y">
        {visibleProjects.map((project) => (
          <Link
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="group block py-4 first:pt-0"
          >
            <h3 className="text-lg font-semibold">
              <span className="relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-[420ms] after:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:after:origin-left group-hover:after:scale-x-100">
                {project.title}
              </span>
            </h3>
            <p className="text-secondary mt-1.5 text-sm">
              {project.description}
            </p>
          </Link>
        ))}
      </div>

      {projects.length > initialCount && (
        <div className="flex justify-center pt-4">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="border-border bg-background hover:bg-muted cursor-pointer rounded-md border px-3 py-1.5 text-sm font-medium transition-colors"
          >
            {showAll ? 'Show less' : 'Show more projects'}
          </button>
        </div>
      )}
    </>
  );
}
