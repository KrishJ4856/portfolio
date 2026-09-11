const articles = [
  { title: "How to Build a Task Manager CLI Tool with Node.js", site: "freeCodeCamp", href: "https://www.freecodecamp.org/news/nodejs-tutorial-build-a-task-manager-cli-tool/" },
  { title: "How to Get Started with NodeJS — a Handbook for Beginners", site: "freeCodeCamp", href: "https://www.freecodecamp.org/news/get-started-with-nodejs/" },
  { title: "Learn Linux Basics", site: "Hashnode", href: "https://krishwebdev.hashnode.dev/learn-linux-basics" },
  { title: "Setting Up Your Tailwind CSS Project", site: "Hashnode", href: "https://krishwebdev.hashnode.dev/setting-up-your-tailwind-css-project" },
];
const external = { target: "_blank", rel: "noopener noreferrer" };
function Arrow() { return <span className="external-arrow" aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <div className="site" id="top">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="home-link" href="#top">krish<span>.</span></a>
        <nav aria-label="On this page"><a href="#writing">writing</a><a href="#projects">projects</a><a href="#elsewhere">elsewhere</a></nav>
      </header>
      <main id="main">
        <section className="intro" aria-labelledby="name">
          <h1 id="name">Krish Jaiswal</h1>
          <p>Hey, I’m Krish. I build things for the web, tinker with Linux, and write about what I’m learning.</p>
          <p>You’ll find some of my writing below, a few things I’m working on, and smaller experiments I’ve made for fun.</p>
          <div className="intro-links"><a href="https://github.com/KrishJ4856" {...external}>GitHub <Arrow /></a><a href="https://twitter.com/Krish4856" {...external}>X / Twitter <Arrow /></a><span className="location">Based in India</span></div>
        </section>

        <section className="section-grid" id="writing" aria-labelledby="writing-title">
          <h2 id="writing-title">Writing</h2>
          <div className="section-content">
            <p className="section-intro">Notes and tutorials from figuring things out.</p>
            <ul className="article-list">{articles.map(article => <li key={article.href}><a href={article.href} {...external}><span className="article-title">{article.title} <Arrow /></span><span className="article-source">{article.site}</span></a></li>)}</ul>
            <p className="archive-links">More on <a href="https://www.freecodecamp.org/news/author/krish" {...external}>freeCodeCamp</a> and <a href="https://krishwebdev.hashnode.dev" {...external}>Hashnode</a>.</p>
          </div>
        </section>

        <section className="section-grid" id="projects" aria-labelledby="projects-title">
          <h2 id="projects-title">Projects</h2>
          <div className="section-content">
            <p className="section-intro">A few things I’m working on.</p>
            <dl className="project-list">
              <div><dt><a href="https://bhajanalarms.com" {...external}>Bhajan Alarms <Arrow /></a></dt><dd>An alarm app to wake up to your favourite bhajans.</dd></div>
              <div><dt>Doomslog <span className="status">in progress</span></dt><dd>A Doom-inspired daily journaling app.</dd></div>
              <div><dt><a href="https://github.com/KrishJ4856/piclone" {...external}>piclone <Arrow /></a><span className="status">tinkering now</span></dt></div>
            </dl>
            <div className="experiments"><h3>And a few things built for fun</h3><ul><li><a href="https://github.com/KrishJ4856/customdocs" {...external}>CustomDocs</a><span> — AI-generated docs</span></li><li><a href="https://github.com/KrishJ4856/omarchy-linga-bhairavi-theme" {...external}>Linga Bhairavi theme</a><span> — for Omarchy</span></li><li><a href="https://github.com/KrishJ4856/omarchy-linga-bhairavi-stuti" {...external}>Stuti widget</a><span> — for the desktop</span></li></ul></div>
          </div>
        </section>

        <section className="section-grid elsewhere" id="elsewhere" aria-labelledby="elsewhere-title"><h2 id="elsewhere-title">Elsewhere</h2><div className="section-content"><p>Find me on <a href="https://github.com/KrishJ4856" {...external}>GitHub <Arrow /></a> or <a href="https://twitter.com/Krish4856" {...external}>X / Twitter <Arrow /></a>.</p></div></section>
      </main>
      <footer><span>© {new Date().getFullYear()} Krish Jaiswal</span><a href="#top">Back to top <span aria-hidden="true">↑</span></a></footer>
    </div>
  );
}
