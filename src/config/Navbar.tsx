export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: '/assets/logo.png',
    alt: 'Krish Jaiswal',
    width: 100,
    height: 100,
  },
  navItems: [
    { label: 'Projects', href: '/projects' },
    { label: 'Writing', href: '/blog' },
    { label: 'GitHub', href: 'https://github.com/KrishJ4856' },
  ] as NavItem[],
};
