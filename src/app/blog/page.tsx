import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { writing } from '@/config/Writing';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = getMetadata('/blog');

export default function WritingPage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Writing
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Practical notes and tutorials about building for the web.
          </p>
        </div>
        <Separator />
        <div className="grid gap-4 md:grid-cols-2">
          {writing.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              target="_blank"
              rel="noreferrer"
              className="group hover:border-primary/50 hover:bg-muted/40 rounded-xl border border-dashed border-black/20 p-6 transition-colors dark:border-white/10"
            >
              <p className="text-secondary text-sm">{article.publication}</p>
              <h2 className="group-hover:text-primary mt-2 text-xl leading-snug font-semibold">
                {article.title}
              </h2>
              <p className="text-secondary mt-3 leading-relaxed">
                {article.description}
              </p>
              <span className="mt-5 inline-block text-sm font-medium underline underline-offset-4">
                Read article ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
