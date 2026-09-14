export interface Article {
  title: string;
  description: string;
  publication: 'freeCodeCamp' | 'Hashnode';
  href: string;
  date: string;
  readTime?: string;
  canonicalId: string;
}

const articleCatalog: Article[] = [
  {
    title: 'How to Build a Task Manager CLI Tool with Node.js',
    description:
      'Build a CLI based task manager application with create, view, update, and delete workflows.',
    publication: 'freeCodeCamp',
    href: 'https://www.freecodecamp.org/news/nodejs-tutorial-build-a-task-manager-cli-tool/',
    date: '2023-08-29',
    canonicalId: 'task-manager-cli-nodejs',
  },
  {
    title: 'How to Get Started with Node.js',
    description:
      'A comprehensive yet beginner-friendly handbook to help beginners get started with Node.js.',
    publication: 'freeCodeCamp',
    href: 'https://www.freecodecamp.org/news/get-started-with-nodejs/',
    date: '2023-05-02',
    canonicalId: 'nodejs-introduction',
  },
  {
    title: 'Learn Linux System Administration',
    description:
      'A practical guide to Linux users, groups, passwords, permissions, and administration commands.',
    publication: 'Hashnode',
    href: 'https://krishwebdev.hashnode.dev/learn-linux-system-administration',
    date: '2023-03-31',
    readTime: '20 min read',
    canonicalId: 'linux-system-administration',
  },
  {
    title: 'Learn Standard Linux Streams and File Manipulation',
    description:
      'Learn stdin, stdout, stderr, pipes, environment variables, and essential file commands.',
    publication: 'Hashnode',
    href: 'https://krishwebdev.hashnode.dev/learn-standard-linux-streams-and-file-manipulation',
    date: '2023-03-14',
    readTime: '16 min read',
    canonicalId: 'linux-streams-file-manipulation',
  },
  {
    title: 'Learn Linux Basics',
    description:
      'A practical introduction to operating systems, the Linux filesystem, navigation, and common commands.',
    publication: 'Hashnode',
    href: 'https://krishwebdev.hashnode.dev/learn-linux-basics',
    date: '2023-03-11',
    readTime: '21 min read',
    canonicalId: 'linux-basics',
  },
  {
    title: 'LinkFree: Your One-Stop Connection to the Developer Community',
    description:
      'An introduction to LinkFree and building a discoverable open-source developer profile.',
    publication: 'Hashnode',
    href: 'https://krishwebdev.hashnode.dev/linkfree-your-one-stop-connection-to-the-developer-community',
    date: '2023-01-12',
    readTime: '5 min read',
    canonicalId: 'linkfree-developer-community',
  },
  {
    title: 'Destructuring in JavaScript',
    description:
      'A clear walkthrough of array and object destructuring with practical JavaScript examples.',
    publication: 'Hashnode',
    href: 'https://krishwebdev.hashnode.dev/destructuring-in-javascript',
    date: '2023-01-03',
    readTime: '12 min read',
    canonicalId: 'javascript-destructuring',
  },
  {
    title: "Master the Art of Hoisting in JavaScript: A Beginner's Guide",
    description:
      'Understand how JavaScript hoists declarations and how that behavior affects your code.',
    publication: 'Hashnode',
    href: 'https://krishwebdev.hashnode.dev/master-the-art-of-hoisting-in-javascript-a-beginners-guide',
    date: '2022-12-31',
    readTime: '5 min read',
    canonicalId: 'javascript-hoisting',
  },
  {
    title: 'Setting Up Your Tailwind CSS Project',
    description:
      'A straightforward guide to configuring a first Tailwind CSS project correctly.',
    publication: 'Hashnode',
    href: 'https://krishwebdev.hashnode.dev/setting-up-your-tailwind-css-project',
    date: '2022-12-26',
    readTime: '8 min read',
    canonicalId: 'tailwind-project-setup',
  },
  {
    title: 'How Does JavaScript Work Internally?',
    description:
      'A beginner-focused look at the JavaScript engine and what happens when code runs.',
    publication: 'Hashnode',
    href: 'https://krishwebdev.hashnode.dev/chapter-1-how-does-javascript-work-internally',
    date: '2022-12-24',
    readTime: '6 min read',
    canonicalId: 'javascript-internals',
  },
  {
    title: 'Everything About JSON',
    description:
      'Learn the JSON format, its syntax, common use cases, and how it works with JavaScript.',
    publication: 'Hashnode',
    href: 'https://krishwebdev.hashnode.dev/everything-about-json',
    date: '2022-08-13',
    readTime: '5 min read',
    canonicalId: 'everything-json',
  },
  {
    title: 'Script Loading Strategies',
    description:
      'A concise guide to browser script loading and choosing between normal, async, and defer.',
    publication: 'Hashnode',
    href: 'https://krishwebdev.hashnode.dev/script-loading-strategies',
    date: '2022-07-10',
    readTime: '3 min read',
    canonicalId: 'script-loading-strategies',
  },
];

export const writing = articleCatalog
  .filter(
    (article, index, articles) =>
      articles.findIndex(
        (candidate) => candidate.canonicalId === article.canonicalId,
      ) === index,
  )
  .sort((a, b) => b.date.localeCompare(a.date));
