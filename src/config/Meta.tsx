import { about } from './About';
import { heroConfig } from './Hero';

export interface PageMeta {
  title: string;
  description: string;
  keywords?: string[];
}

export const siteConfig = {
  name: heroConfig.name,
  title: 'itskrish',
  description:
    'Portfolio of Krish Jaiswal, a full-stack developer building web products, AI experiments, and developer tools.',
  url: process.env.NEXT_PUBLIC_URL || 'https://itskrish.vercel.app',
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
    title: 'Krish Jaiswal',
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
      images: [
        {
          url: '/social-preview.jpg',
          width: 1200,
          height: 630,
          alt: 'Krish Jaiswal — Developer, Writer, and Builder',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMeta.title,
      description: pageMeta.description,
      creator: siteConfig.author.twitter,
      images: ['/social-preview.jpg'],
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
