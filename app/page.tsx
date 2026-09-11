"use client";

import { useState } from "react";

const projects = [
  { name: "CustomDocs", note: "Turn a topic into a set of docs with AI.", repo: "customdocs", mark: "Aa", kind: "web app" },
  { name: "Linga Bhairavi", note: "A devotional theme and Stuti widget for Omarchy.", repo: "omarchy-linga-bhairavi-theme", mark: "✳", kind: "desktop" },
  { name: "Task Manager CLI", note: "A little todo list that lives in your terminal.", repo: "task-manager-cli-fcc", mark: ">_", kind: "tool" },
  { name: "techXcel", note: "Guided roadmaps for learning new tech skills.", repo: "techXcel", mark: "↗", kind: "web app" },
];
const palettes = ["clay", "moss", "blue"];

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
          <p className="intro-copy">I make things for the web, tinker with my desktop,<br className="desktop-break" /> and learn as I go.</p>
          <p className="quiet">Some of those things live here.</p>
        </section>
        <section className="work" aria-labelledby="work-title">
          <div className="section-heading"><h2 id="work-title">A few things I’ve made</h2><span className="count">01 — 04</span></div>
          <div className="projects">
            {projects.map((project, index) => <a className="project" key={project.repo} href={`https://github.com/KrishJ4856/${project.repo}`} target="_blank" rel="noreferrer">
              <span className={`project-mark mark-${index}`} aria-hidden="true">{project.mark}</span>
              <span className="project-info"><span className="project-name">{project.name}</span><span className="project-note">{project.note}</span></span>
              <span className="project-kind">{project.kind}</span><span className="arrow" aria-hidden="true">↗</span>
            </a>)}
          </div>
          <a className="all-work" href="https://github.com/KrishJ4856?tab=repositories" target="_blank" rel="noreferrer">More experiments on GitHub <span aria-hidden="true">↗</span></a>
        </section>
        <section className="elsewhere" aria-labelledby="elsewhere-title"><h2 id="elsewhere-title">Elsewhere</h2><p>I also write about things I’m figuring out.</p><nav aria-label="Find me elsewhere"><a href="https://github.com/KrishJ4856" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a><a href="https://krishwebdev.hashnode.dev" target="_blank" rel="noreferrer">Writing <span aria-hidden="true">↗</span></a><a href="https://twitter.com/Krish4856" target="_blank" rel="noreferrer">X / Twitter <span aria-hidden="true">↗</span></a></nav></section>
        <footer><span>Krish Jaiswal <span className="footer-dot">·</span> India</span><span>Thanks for stopping by <span className="footer-flower" aria-hidden="true">✳</span></span></footer>
      </main>
    </div>
  );
}
