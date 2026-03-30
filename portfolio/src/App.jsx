import './App.css'
import { Navbar } from './navbar.jsx'
import heroImage from './assets/Sifiso-cutout.png'

const stackItems = [
  {
    name: 'HTML',
    category: 'Markup',
    detail: 'Semantic foundations for well-structured and accessible interfaces.',
    logo: 'https://cdn.simpleicons.org/html5/E34F26',
  },
  {
    name: 'CSS',
    category: 'Design System',
    detail: 'Responsive layouts, visual hierarchy, and polished presentation.',
    logo: 'https://cdn.simpleicons.org/css/1572B6',
  },
  {
    name: 'JavaScript',
    category: 'Interaction',
    detail: 'Dynamic logic that turns static layouts into useful experiences.',
    logo: 'https://cdn.simpleicons.org/javascript/F7DF1E',
  },
  {
    name: 'Angular',
    category: 'Frontend Framework',
    detail: 'Component-driven apps with scalable structure and strong organization.',
    logo: 'https://cdn.simpleicons.org/angular/DD0031',
  },
  {
    name: 'Spring Boot',
    category: 'Backend Framework',
    detail: 'Reliable APIs and backend architecture for real application workflows.',
    logo: 'https://cdn.simpleicons.org/springboot/6DB33F',
  },
  {
    name: 'SQL',
    category: 'Query Language',
    detail: 'Structured queries for filtering, joining, and managing application data.',
    monogram: 'SQL',
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    detail: 'Relational data modeling with performance and reliability in mind.',
    logo: 'https://cdn.simpleicons.org/postgresql/4169E1',
  },
  {
    name: 'GitHub',
    category: 'Collaboration',
    detail: 'Version control, teamwork, and clean project delivery across development.',
    logo: 'https://cdn.simpleicons.org/github/FFFFFF',
  },
]

const strengths = [
  'Designing clean UI structure',
  'Building scalable frontend apps',
  'Creating backend APIs and services',
  'Managing relational databases',
]

const heroStats = [
  {
    value: 'Frontend',
    label: 'Responsive interfaces with clean visual hierarchy and strong usability.',
  },
  {
    value: 'Backend',
    label: 'Structured services and APIs designed for reliable application workflows.',
  },
  {
    value: 'Data',
    label: 'SQL-driven systems with dependable modeling and clear information flow.',
  },
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
            <div className="hero-intro-band">
              <span className="status-dot" aria-hidden="true" />
              Available for professional opportunities
            </div>
            <h1>
              Full-stack developer building polished interfaces, dependable APIs, and
              data-backed application workflows.
            </h1>
            <p className="hero-summary">
              I focus on creating software that feels clear to use, maintainable to
              build on, and reliable across every layer. My work brings together
              thoughtful frontend design, structured backend logic, and strong database
              foundations.
            </p>

            <div className="hero-actions">
              <a href="#stack" className="primary-action">
                Explore Stack
              </a>
              <a href="mailto:tsheposifisomoloi@gmail.com" className="secondary-action">
                Contact Me
              </a>
            </div>

            <div className="hero-stat-grid">
              {heroStats.map((stat) => (
                <article className="hero-stat-card" key={stat.value}>
                  <strong>{stat.value}</strong>
                  <p>{stat.label}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-side">
            <div className="signal-panel">
              <div className="profile-frame">
                <img src={heroImage} alt="Portrait for portfolio" className="profile-image" />
              </div>

              <span className="signal-label">Professional Profile</span>
              <strong>Tshepo Sifiso Moloi</strong>
              <span className="signal-role">Full-Stack Developer</span>
              <p>
                Focused on shipping modern applications with thoughtful UI, dependable
                backend structure, and practical database design.
              </p>
            </div>

            <div className="strength-panel">
              <p className="strength-heading">What I Bring</p>
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
            I build complete products where the interface, application logic, and data
            layer all support the same outcome.
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
                <div className="stack-logo-row">
                  {item.logo ? (
                    <img src={item.logo} alt={`${item.name} logo`} className="stack-logo" />
                  ) : (
                    <span className="stack-monogram" aria-label={`${item.name} logo`}>
                      {item.monogram}
                    </span>
                  )}
                </div>
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
              My approach is grounded in clean execution: clear layouts, maintainable
              structure, dependable services, and database decisions that support real
              product growth over time.
            </p>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand-block">
            <p className="section-kicker">Portfolio Footer</p>
            <p className="footer-description">
              Full-stack portfolio focused on clean interfaces, dependable backend
              systems, and practical database-driven development.
            </p>
          </div>

          <div className="footer-links-block">
            <div>
              <h3>Navigation</h3>
              <a href="#home">Home</a>
              <a href="#stack">Stack</a>
              <a href="#systems">Workflow</a>
              <a href="#about">About</a>
            </div>

            <div>
              <h3>Core Stack</h3>
              <span>Angular</span>
              <span>Spring Boot</span>
              <span>PostgreSQL</span>
              <span>GitHub</span>
            </div>

            <div className="footer-contact">
              <h3>Contact</h3>
              <a href="mailto:tsheposifisomoloi@gmail.com" className="email-link">
                tsheposifisomoloi@gmail.com
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub Profile
              </a>
              <span>Open to professional opportunities</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Built with HTML, CSS, JavaScript, and modern full-stack tools.</p>
          <p>© 2026. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
