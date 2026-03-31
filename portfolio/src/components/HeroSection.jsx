import heroImage from '../assets/background-removed.png'

const strengths = [
  'Designing clean UI structure',
  'Building scalable frontend apps',
  'Managing relational databases',
  'Applying academic knowledge to practical projects',
]

const heroStats = [
  {
    value: 'Frontend',
    label: 'Responsive interfaces with clean visual hierarchy and strong usability.',
  },
  {
    value: 'Data',
    label: 'SQL-driven systems with dependable modeling and clear information flow.',
  },
  {
    value: 'Education',
    label: 'Academic training that strengthens practical development skills and long-term technical growth.',
  },
]

export function HeroSection() {
  return (
    <section className="hero-layout" id="home">
      <div className="hero-main">
        <p className="section-kicker">Portfolio / Frontend and Data</p>
        <div className="hero-intro-band">
          <span className="status-dot" aria-hidden="true" />
          Available for professional opportunities
        </div>
        <h1>
          Frontend-focused developer building polished interfaces and thoughtful
          data-driven experiences.
        </h1>
        <p className="hero-summary">
          I focus on creating software that feels clear to use, maintainable to
          build on, and reliable in practice. My work brings together thoughtful
          frontend design, strong database foundations, and academic discipline that
          supports steady technical growth.
        </p>

        <div className="hero-actions">
          <a href="#stack" className="primary-action">
            Explore Stack
          </a>
          <a href="#contact" className="secondary-action">
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
          <span className="signal-role">Frontend Developer</span>
          <p>
            Focused on shipping modern interfaces with thoughtful UI and practical
            database-aware decision making.
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
  )
}
