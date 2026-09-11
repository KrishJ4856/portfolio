"use client";

import { useState } from "react";

const articles = [
  { title: "How to Build a Task Manager CLI Tool with Node.js", site: "freeCodeCamp", href: "https://www.freecodecamp.org/news/nodejs-tutorial-build-a-task-manager-cli-tool/" },
  { title: "How to Get Started with NodeJS — a Handbook for Beginners", site: "freeCodeCamp", href: "https://www.freecodecamp.org/news/get-started-with-nodejs/" },
  { title: "Learn Linux Basics", site: "Hashnode", href: "https://krishwebdev.hashnode.dev/learn-linux-basics" },
  { title: "Setting Up Your Tailwind CSS Project", site: "Hashnode", href: "https://krishwebdev.hashnode.dev/setting-up-your-tailwind-css-project" },
];
const palettes = ["clay", "moss", "blue"];
const external = { target: "_blank", rel: "noreferrer" };

export default function Home() {
  const [palette, setPalette] = useState(0);
  return (
    <div className="sheet" data-palette={palettes[palette]}>
      <main id="main">
        <header>
          <a className="wordmark" href="#main" aria-label="Krish, home">kj<span>.</span></a>
          <button className="color-button" onClick={() => setPalette((palette + 1) % palettes.length)} aria-label={`Change accent color. Current color: ${palettes[palette]}`} title="A little change of color"><span className="color-dot" /> a little color</button>
        </header>
        <section className="intro" aria-labelledby="hello">
          <p className="eyebrow"><span className="tiny-star" aria-hidden="true">✳</span> A SMALL CORNER OF THE INTERNET</p>
          <h1 id="hello">Hi, I’m Krish<span className="period">.</span></h1>
          <p className="intro-copy">I write about things I’m learning<br className="desktop-break" /> and build things along the way.</p>
        </section>
        <section aria-labelledby="writing-title">
          <div className="section-heading"><h2 id="writing-title">Some writing</h2><span className="count">NOTES & TUTORIALS</span></div>
          <ul className="articles">{articles.map(article => <li key={article.href}><a className="article" href={article.href} {...external}><span><span className="article-title">{article.title}</span><span className="article-site">{article.site}</span></span><span className="arrow" aria-hidden="true">↗</span></a></li>)}</ul>
          <div className="writing-links"><span>More on</span> <a href="https://www.freecodecamp.org/news/author/krish" {...external}>freeCodeCamp ↗</a><span className="separator">&</span><a href="https://krishwebdev.hashnode.dev" {...external}>Hashnode ↗</a></div>
        </section>
        <section className="small-section" aria-labelledby="building-title">
          <h2 id="building-title">Things I’m working on</h2>
          <ul className="building-list">
            <li><a href="https://bhajanalarms.com" {...external}>Bhajan Alarms <span aria-hidden="true">↗</span></a><p>Wake up to your favourite bhajans.</p></li>
            <li><span className="build-name">Doomslog</span><span className="status">in progress</span><p>A Doom-inspired daily journaling app.</p></li>
            <li><a href="https://github.com/KrishJ4856/piclone" {...external}>piclone <span aria-hidden="true">↗</span></a><span className="status">tinkering now</span></li>
          </ul>
        </section>
        <section className="small-section fun-section" aria-labelledby="fun-title"><h2 id="fun-title">Built for fun</h2><p className="section-note">A few little vibecoded things.</p><ul className="fun-list"><li><a href="https://github.com/KrishJ4856/customdocs" {...external}>CustomDocs ↗</a><span>AI-generated docs</span></li><li><a href="https://github.com/KrishJ4856/omarchy-linga-bhairavi-theme" {...external}>Linga Bhairavi theme ↗</a><span>a little Omarchy customization</span></li><li><a href="https://github.com/KrishJ4856/omarchy-linga-bhairavi-stuti" {...external}>Stuti widget ↗</a><span>for the desktop</span></li></ul></section>
        <footer><span>Krish Jaiswal <span className="footer-dot">·</span> India</span><nav aria-label="Social links"><a href="https://github.com/KrishJ4856" {...external}>GitHub ↗</a><a href="https://twitter.com/Krish4856" {...external}>X / Twitter ↗</a></nav><span className="footer-flower" aria-hidden="true">✳</span></footer>
      </main>
    </div>
  );
}
