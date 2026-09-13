import Github from '@/components/technologies/Github';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import type { Project } from '@/types/project';

export const projects: Project[] = [
  {
    title: 'CustomDocs',
    description:
      'An AI-powered workspace that plans and writes structured documentation, then presents it in a polished three-column reader.',
    image: '/project/customdocs.png',
    link: 'https://customdocs.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
    ],
    github: 'https://github.com/KrishJ4856/customdocs',
    live: 'https://customdocs.app/',
    details: true,
    projectDetailsPageSlug: '/projects/customdocs',
    isWorking: true,
  },
  {
    title: 'IdeaToPrototype',
    description:
      'A multi-agent workflow that researches an app idea, defines the MVP, generates the frontend, and deploys a live prototype.',
    image: '/project/idea-to-prototype.png',
    link: 'https://github.com/KrishJ4856/IdeaToPrototype',
    technologies: [
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'GitHub', icon: <Github key="github" /> },
    ],
    github: 'https://github.com/KrishJ4856/IdeaToPrototype',
    live: 'https://github.com/KrishJ4856/IdeaToPrototype',
    details: true,
    projectDetailsPageSlug: '/projects/idea-to-prototype',
    isWorking: true,
  },
  {
    title: 'Linga Bhairavi for Omarchy',
    description:
      'A high-contrast Omarchy desktop theme with a companion QML Stuti widget, a custom palette, and five curated wallpapers.',
    image: '/project/linga-bhairavi.png',
    link: 'https://github.com/KrishJ4856/omarchy-linga-bhairavi-theme',
    technologies: [
      { name: 'GitHub', icon: <Github key="github" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
    ],
    github: 'https://github.com/KrishJ4856/omarchy-linga-bhairavi-theme',
    live: 'https://omarchyplugins.com',
    details: true,
    projectDetailsPageSlug: '/projects/linga-bhairavi-omarchy',
    isWorking: true,
  },
  {
    title: 'Osho247',
    description:
      'A minimal Osho talk player built on the official YouTube IFrame Player API with browser-only playback progress.',
    image: '/project/osho247.png',
    link: 'https://osho247.vercel.app',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
    ],
    github: 'https://github.com/KrishJ4856/osho247',
    live: 'https://osho247.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/osho247',
    isWorking: true,
  },
  {
    title: 'Linga Bhairavi Stuti',
    description:
      'A minimal QML bar widget for Omarchy Quattro with a compact, interactive Stuti panel and quick access to the official recording.',
    image: '/project/linga-bhairavi.png',
    link: 'https://github.com/KrishJ4856/omarchy-linga-bhairavi-stuti',
    technologies: [{ name: 'GitHub', icon: <Github key="github" /> }],
    github: 'https://github.com/KrishJ4856/omarchy-linga-bhairavi-stuti',
    live: 'https://omarchyplugins.com',
    details: false,
    projectDetailsPageSlug:
      'https://github.com/KrishJ4856/omarchy-linga-bhairavi-stuti',
    isWorking: true,
  },
  {
    title: 'Task Manager CLI',
    description:
      'A Node.js command-line task manager with MongoDB persistence and complete create, read, update, and delete commands.',
    image: '/project/task-manager-cli.png',
    link: 'https://github.com/KrishJ4856/task-manager-cli-fcc',
    technologies: [
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
    ],
    github: 'https://github.com/KrishJ4856/task-manager-cli-fcc',
    live: 'https://github.com/KrishJ4856/task-manager-cli-fcc',
    details: true,
    projectDetailsPageSlug: '/projects/task-manager-cli',
    isWorking: true,
  },
  {
    title: 'TechXcel',
    description:
      'A focused learning platform for building new technical skills through guided roadmaps and a responsive Next.js interface.',
    image: '/project/techxcel.png',
    link: 'https://tech-xcel.vercel.app',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
    ],
    github: 'https://github.com/KrishJ4856/techXcel',
    live: 'https://tech-xcel.vercel.app',
    details: true,
    projectDetailsPageSlug: '/projects/techxcel',
    isWorking: true,
  },
  {
    title: 'Jobs API',
    description:
      'A production-style REST API for registering users and securely creating, updating, filtering, and tracking job applications.',
    image: '/project/task-manager-cli.png',
    link: 'https://jobsapi-krish4856.up.railway.app/',
    technologies: [
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'MongoDB', icon: <MongoDB key="mongodb" /> },
    ],
    github: 'https://github.com/KrishJ4856/JobsAPI',
    live: 'https://jobsapi-krish4856.up.railway.app/',
    details: false,
    projectDetailsPageSlug: 'https://github.com/KrishJ4856/JobsAPI',
    isWorking: true,
  },
  {
    title: 'Kwik File Create',
    description:
      'A small command-line utility for creating and deleting batches of files quickly from the terminal.',
    image: '/project/task-manager-cli.png',
    link: 'https://github.com/KrishJ4856/kwik-file-create',
    technologies: [
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
    ],
    github: 'https://github.com/KrishJ4856/kwik-file-create',
    live: 'https://github.com/KrishJ4856/kwik-file-create',
    details: false,
    projectDetailsPageSlug: 'https://github.com/KrishJ4856/kwik-file-create',
    isWorking: true,
  },
  {
    title: 'QR Code Generator',
    description:
      'A focused browser app for turning text and URLs into downloadable QR codes.',
    image: '/project/techxcel.png',
    link: 'https://qr-generator-krish4856.netlify.app/',
    technologies: [
      { name: 'JavaScript', icon: <JavaScript key="javascript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwind" /> },
    ],
    github: 'https://github.com/KrishJ4856/QR-Code-Generator',
    live: 'https://qr-generator-krish4856.netlify.app/',
    details: false,
    projectDetailsPageSlug: 'https://github.com/KrishJ4856/QR-Code-Generator',
    isWorking: true,
  },
];
