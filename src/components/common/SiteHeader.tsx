'use client';

import { searchItems, siteNavigation } from '@/config/Site';
import { Moon, Search, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SiteHeader() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen((open) => !open);
      }
      if (event.key === 'Escape') setSearchOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const matches = searchItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full backdrop-blur">
        <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-4">
          <nav className="flex items-center gap-4 text-sm font-medium sm:gap-6">
            {siteNavigation.map((item) => {
              const active =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-primary transition-colors ${active ? 'text-primary' : 'text-secondary'}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="border-border bg-background text-muted-foreground hover:text-primary flex h-8 items-center gap-1.5 rounded-full border px-2.5 transition-colors"
              aria-label="Open site search"
            >
              <Search className="size-4" />
              <span className="hidden items-center gap-1 sm:flex">
                <kbd className="rounded-sm bg-black/5 px-1 py-0.5 text-xs dark:bg-white/10">
                  Ctrl
                </kbd>
                <kbd className="rounded-sm bg-black/5 px-1 py-0.5 text-xs dark:bg-white/10">
                  K
                </kbd>
              </span>
            </button>
            <button
              type="button"
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
              className="text-muted-foreground hover:text-primary inline-flex size-8 items-center justify-center rounded-md transition-colors"
              aria-label="Toggle color theme"
            >
              {mounted && resolvedTheme === 'dark' ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center bg-black/20 px-4 pt-[18vh] backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSearchOpen(false);
          }}
        >
          <div className="border-border bg-background w-full max-w-lg overflow-hidden rounded-xl border shadow-2xl">
            <div className="border-border flex items-center gap-3 border-b px-4">
              <Search className="text-muted-foreground size-4" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search pages…"
                className="placeholder:text-muted-foreground h-12 min-w-0 flex-1 bg-transparent text-sm outline-none"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-muted-foreground hover:text-primary"
                aria-label="Close search"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="max-h-72 overflow-y-auto p-2">
              {matches.map((item) => (
                <Link
                  key={`${item.label}-${item.href}`}
                  href={item.href}
                  onClick={() => setSearchOpen(false)}
                  className="hover:bg-muted flex items-center justify-between rounded-lg px-3 py-2 text-sm"
                >
                  {item.label}
                  <span className="text-muted-foreground">↗</span>
                </Link>
              ))}
              {matches.length === 0 && (
                <p className="text-muted-foreground px-3 py-6 text-center text-sm">
                  No pages found.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
