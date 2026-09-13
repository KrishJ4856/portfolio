import { about } from './About';
import { heroConfig } from './Hero';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
}

export const siteConfig = {
  name: heroConfig.name,
  title: 'Krish Jaiswal — Full-stack Developer',
  description:
    'Portfolio of Krish Jaiswal, a full-stack developer building web products, AI experiments, and developer tools.',
  url: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
  author: {
    name: about.name,
    twitter: '@Krish4856',
    github: 'KrishJ4856',
    linkedin: 'krish4856',
  },
  keywords: [
    'Krish Jaiswal',
    'full-stack developer',
    'Next.js',
    'TypeScript',
    'React',
    'Node.js',
    'portfolio',
  ],
};

export const pageMetadata: Record<string, PageMeta> = {
  '/': {
    title: 'Krish Jaiswal — Full-stack Developer',
    description: siteConfig.description,
  },
  '/projects': {
    title: 'Projects — Krish Jaiswal',
    description:
      'Selected web products, AI experiments, command-line tools, and desktop projects by Krish Jaiswal.',
  },
  '/blog': {
    title: 'Writing — Krish Jaiswal',
    description:
      'Practical tutorials by Krish Jaiswal about Node.js, web development, Linux, and Tailwind CSS.',
  },
};

export function getPageMetadata(pathname: string): PageMeta {
  return pageMetadata[pathname] || pageMetadata['/'];
}

export function generateMetadata(pathname: string) {
  const pageMeta = getPageMetadata(pathname);

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    openGraph: {
      type: 'website',
      url: `${siteConfig.url}${pathname}`,
      title: pageMeta.title,
      description: pageMeta.description,
      siteName: siteConfig.title,
    },
    twitter: {
      card: 'summary',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteConfig.url}${pathname}`,
    },
  };
}
