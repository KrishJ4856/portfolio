import { writing } from '@/config/Writing';
import Link from 'next/link';

import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';

export default function Blog() {
  return (
    <Container className="mt-20">
      <SectionHeading subHeading="Published" heading="Writing" />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {writing.slice(0, 4).map((article) => (
          <Link
            key={article.href}
            href={article.href}
            target="_blank"
            rel="noreferrer"
            className="group hover:border-primary/50 hover:bg-muted/40 rounded-xl border border-dashed border-black/20 p-5 transition-colors dark:border-white/10"
          >
            <p className="text-secondary text-sm">{article.publication}</p>
            <h3 className="group-hover:text-primary mt-2 text-lg leading-snug font-semibold">
              {article.title}
            </h3>
            <p className="text-secondary mt-3 text-sm leading-relaxed">
              {article.description}
            </p>
            <span className="mt-4 inline-block text-sm font-medium underline underline-offset-4">
              Read article ↗
            </span>
          </Link>
        ))}
      </div>
    </Container>
  );
}
