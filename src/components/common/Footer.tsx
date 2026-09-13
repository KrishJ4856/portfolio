import Link from 'next/link';

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/KrishJ4856', external: true },
  { label: 'X', href: 'https://x.com/Krish4856', external: true },
  { label: 'RSS FEED', href: '/blog/feed.xml' },
];

export default function Footer() {
  return (
    <footer className="mx-auto mt-20 max-w-2xl px-4 pb-8">
      <div className="border-border flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Krish Jaiswal. All rights reserved.
        </p>
        <nav className="flex items-center gap-4 text-xs">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              className="text-secondary hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
