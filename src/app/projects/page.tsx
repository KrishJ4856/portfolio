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
            <h2 className="text-lg font-semibold group-hover:underline group-hover:underline-offset-4">
              {project.title}
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
