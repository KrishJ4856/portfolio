import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import X from '@/components/svgs/X';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

export const skillComponents = {
  TypeScript,
  ReactIcon,
  NextJs,
  NodeJs,
  MongoDB,
  JavaScript,
};

export const heroConfig = {
  name: 'Krish',
  title: 'a full-stack web developer.',
  avatar: '/assets/logo.png',
  skills: [
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'MongoDB',
      href: 'https://www.mongodb.com/',
      component: 'MongoDB',
    },
  ],
  description: {
    template:
      'I build useful web products, AI experiments, and developer tools with {skills:0}, {skills:1}, {skills:2}, {skills:3}, and {skills:4}. I also write practical tutorials about <b>web development</b> and <b>Linux</b>.',
  },
  buttons: [
    {
      variant: 'outline',
      text: 'Explore projects',
      href: '/projects',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Say hello',
      href: 'https://x.com/Krish4856',
      icon: 'Chat',
    },
  ],
};

export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/Krish4856',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/krish4856/',
    icon: <LinkedIn />,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/KrishJ4856',
    icon: <Github />,
  },
];
