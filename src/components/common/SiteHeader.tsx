'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function SiteHeader() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-9 z-50">
      <div className="mx-auto flex max-w-2xl justify-end px-4 pt-3">
        <button
          type="button"
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className="text-muted-foreground hover:bg-muted/80 hover:text-primary pointer-events-auto inline-flex size-9 cursor-pointer items-center justify-center rounded-full transition-colors"
          aria-label="Toggle color theme"
        >
          {mounted && resolvedTheme === 'dark' ? (
            <Sun className="size-[18px]" />
          ) : (
            <Moon className="size-[18px]" />
          )}
        </button>
      </div>
    </div>
  );
}
