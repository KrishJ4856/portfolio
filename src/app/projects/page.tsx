import { EditorialPage } from '@/components/common/EditorialPage';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { projects } from '@/config/Projects';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = getMetadata('/projects');

export default function ProjectsPage() {
  return (
    <EditorialPage
      title="Projects"
      description="A few products and experiments I've shipped."
    >
      <div className="divide-border divide-y">
        {projects.map((project) => (
          <Link
            key={project.title}
            href={project.live || project.github || project.link}
            target="_blank"
            rel="noreferrer"
            className="group block py-4 first:pt-0"
          >
            <h2 className="text-lg font-semibold">
              <span className="relative inline-block after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-[420ms] after:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:after:origin-left group-hover:after:scale-x-100">
                {project.title}
              </span>
            </h2>
            <p className="text-secondary mt-0.5 text-sm">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </EditorialPage>
  );
}
