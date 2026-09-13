import ExternalBlogList from '@/components/blog/ExternalBlogList';
import { projects } from '@/config/Projects';
import { socialNavigation } from '@/config/Site';
import { writing } from '@/config/Writing';
import { Github, Globe2, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold">{children}</h2>;
}

function OutlineLink({ href, children }: { href: string; children: string }) {
  return (
    <div className="flex justify-center pt-2">
      <Link
        href={href}
        className="border-border bg-background hover:bg-muted rounded-md border px-3 py-1.5 text-sm font-medium transition-colors"
      >
        {children}
      </Link>
    </div>
  );
}

const socialIcons = {
  X: <span className="text-base leading-none">𝕏</span>,
  LinkedIn: <Linkedin className="size-4" />,
  Github: <Github className="size-4" />,
  Hashnode: <Globe2 className="size-4" />,
};

export default function HomePage() {
  return (
    <main>
      <div className="mx-auto max-w-2xl space-y-10 px-4 pt-8">
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/logo.png"
              alt="Krish Jaiswal — Full-stack Developer"
              width={192}
              height={192}
              priority
              className="size-24 rounded-full bg-blue-300 object-cover"
            />
            <div className="min-w-0">
              <h1 className="text-lg font-bold whitespace-nowrap sm:text-2xl">
                Krish Jaiswal
              </h1>
              <p className="text-secondary flex flex-wrap items-center gap-x-1 text-base">
                <span>Developer · Builder</span>
                <span>·</span>
                <Link
                  href="https://github.com/KrishJ4856"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  @KrishJ4856
                </Link>
              </p>
            </div>
          </div>

          <p className="text-muted-foreground max-w-xl text-sm">
            Building useful web products, AI experiments, and developer tools.
          </p>

          <p className="text-muted-foreground flex min-w-0 items-center gap-1.5 text-sm">
            <span className="size-3 shrink-0 rounded-full bg-emerald-500" />
            <span className="text-secondary shrink-0 font-medium">
              Building
            </span>
            <span className="shrink-0">—</span>
            <span className="text-secondary truncate">
              CustomDocs and small developer tools
            </span>
          </p>

          <div className="flex flex-wrap gap-1 text-sm">
            {socialNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-secondary hover:text-primary flex size-6 items-center justify-center transition-colors"
                aria-label={item.label}
                title={item.label}
              >
                {socialIcons[item.label as keyof typeof socialIcons]}
                <span className="sr-only">{item.label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <SectionTitle>Blog</SectionTitle>
          <ExternalBlogList posts={writing} initialCount={3} />
        </section>

        <section className="space-y-3">
          <SectionTitle>Projects</SectionTitle>
          <div className="divide-border divide-y">
            {projects.slice(0, 6).map((project) => (
              <Link
                key={project.title}
                href={project.projectDetailsPageSlug || project.link}
                className="group block py-3 first:pt-1"
              >
                <h3 className="font-semibold group-hover:underline group-hover:underline-offset-4">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm">{project.description}</p>
              </Link>
            ))}
          </div>
          <OutlineLink href="/projects">Show all projects</OutlineLink>
        </section>
      </div>
    </main>
  );
}
