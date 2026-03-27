import './App.css'
import { Navbar } from './navbar.jsx'
import heroImage from './assets/Sifiso.jpg'

const stackItems = [
  {
    name: 'HTML',
    category: 'Markup',
    detail: 'Semantic foundations for well-structured and accessible interfaces.',
  },
  {
    name: 'CSS',
    category: 'Design System',
    detail: 'Responsive layouts, visual hierarchy, and polished presentation.',
  },
  {
    name: 'JavaScript',
    category: 'Interaction',
    detail: 'Dynamic logic that turns static layouts into useful experiences.',
  },
  {
    name: 'Angular',
    category: 'Frontend Framework',
    detail: 'Component-driven apps with scalable structure and strong organization.',
  },
  {
    name: 'Spring Boot',
    category: 'Backend Framework',
    detail: 'Reliable APIs and backend architecture for real application workflows.',
  },
  {
    name: 'SQL',
    category: 'Query Language',
    detail: 'Structured queries for filtering, joining, and managing application data.',
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    detail: 'Relational data modeling with performance and reliability in mind.',
  },
  {
    name: 'GitHub',
    category: 'Collaboration',
    detail: 'Version control, teamwork, and clean project delivery across development.',
  },
]

const strengths = [
  'Designing clean UI structure',
  'Building scalable frontend apps',
  'Creating backend APIs and services',
  'Managing relational databases',
]

const systemBlocks = [
  {
    title: 'Interface Layer',
    copy: 'HTML, CSS, JavaScript, and Angular help me craft responsive interfaces with clear structure and modern interaction.',
  },
  {
    title: 'Application Layer',
    copy: 'Spring Boot supports the backend with service logic, APIs, and a reliable structure for full-stack projects.',
  },
  {
    title: 'Data Layer',
    copy: 'SQL and PostgreSQL make the data side dependable, searchable, and ready to support product growth.',
  },
]

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="page-shell">
        <section className="hero-layout" id="home">
          <div className="hero-main">
            <p className="section-kicker">Portfolio / Full Stack</p>
            <h1>
              Building software that connects thoughtful interfaces to powerful systems.
            </h1>
            <p className="hero-summary">
              I use a practical stack across frontend, backend, databases, and
              collaboration workflows. This portfolio highlights the tools I work with
              to build modern applications that feel sharp on the surface and reliable
              underneath.
            </p>

            <div className="hero-actions">
              <a href="#stack" className="primary-action">
                Explore Stack
              </a>
              <a href="#systems" className="secondary-action">
                View Workflow
              </a>
            </div>
          </div>

          <div className="hero-side">
            <div className="signal-panel">
              <div className="profile-frame">
                <img src={heroImage} alt="Portrait for portfolio" className="profile-image" />
              </div>

              <span className="signal-label">Core Direction</span>
              <strong>Frontend + Backend + Data</strong>
              <p>
                I enjoy building complete digital products where each layer supports the
                next with clarity.
              </p>
            </div>

            <div className="strength-panel">
              {strengths.map((strength) => (
                <div className="strength-chip" key={strength}>
                  {strength}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="statement-strip">
          <p>
            My stack is built for complete products, not isolated pieces.
          </p>
        </section>

        <section className="stack-section" id="stack">
          <div className="heading-row">
            <p className="section-kicker">Selected Tools</p>
            <h2>The technologies I use to design, build, and ship real projects.</h2>
          </div>

          <div className="stack-grid">
            {stackItems.map((item) => (
              <article className="stack-card" key={item.name}>
                <p className="stack-category">{item.category}</p>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="systems-section" id="systems">
          <div className="heading-row">
            <p className="section-kicker">Workflow</p>
            <h2>How the stack fits together when I build a complete application.</h2>
          </div>

          <div className="system-grid">
            {systemBlocks.map((block, index) => (
              <article className="system-card" key={block.title}>
                <span className="system-index">0{index + 1}</span>
                <h3>{block.title}</h3>
                <p>{block.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="closing-section" id="about">
          <div className="closing-intro">
            <p className="section-kicker">About This Work</p>
            <h2 className='home'>
              I like creating software that looks intentional, stays maintainable, and
              works cleanly across the full stack.
            </h2>
          </div>

          <div className="closing-copy">
            <p>
              From semantic HTML and refined CSS to JavaScript logic, Angular
              applications, Spring Boot services, SQL queries, PostgreSQL databases,
              and GitHub collaboration, each tool plays a clear role in how I build.
            </p>
          </div>
        </section>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default App
