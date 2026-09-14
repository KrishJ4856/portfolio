import ExternalBlogList from '@/components/blog/ExternalBlogList';
import ExpandableProjectList from '@/components/projects/ExpandableProjectList';
import SocialIcon from '@/components/svgs/SocialIcon';
import { projects } from '@/config/Projects';
import { socialNavigation } from '@/config/Site';
import { writing } from '@/config/Writing';
import Image from 'next/image';
import Link from 'next/link';

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-bold">{children}</h2>;
}

export default function HomePage() {
  return (
    <main>
      <div className="mx-auto max-w-2xl space-y-10 px-4 pt-8">
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/logo.png"
              alt="Krish Jaiswal"
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
                19 - Figuring out my life...
              </p>
            </div>
          </div>

          <p className="text-muted-foreground max-w-xl pt-2 text-sm">
            I like to write. Also, building some cool apps I always wished
            existed!
          </p>

          {/* <p className="text-muted-foreground flex min-w-0 items-center gap-1.5 text-sm">
            <span className="size-3 shrink-0 rounded-full bg-emerald-500" />
            <span className="text-secondary shrink-0 font-medium">
              Building
            </span>
            <span className="shrink-0">—</span>
            <span className="text-secondary truncate">
              CustomDocs and small developer tools
            </span>
          </p> */}

          <div className="flex flex-wrap gap-0.5">
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
                <SocialIcon name={item.label} />
                <span className="sr-only">{item.label}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-3">
          <div className="mb-5 space-y-1">
            <SectionTitle>Blogs 📝</SectionTitle>
            <p className="text-secondary text-base">
              Notes and tutorials from things I&apos;ve learned while building.
            </p>
          </div>
          <ExternalBlogList posts={writing} initialCount={3} />
        </section>

        <section className="space-y-3">
          <div className="space-y-1">
            <SectionTitle>Projects 👩‍🔬</SectionTitle>
            <p className="text-secondary text-base">
              A few products and experiments I&apos;ve shipped.
            </p>
          </div>
          <ExpandableProjectList
            projects={projects.map((project) => ({
              title: project.title,
              description: project.description,
              href: project.live || project.github || project.link,
            }))}
            initialCount={10}
          />
        </section>
      </div>
    </main>
  );
}
