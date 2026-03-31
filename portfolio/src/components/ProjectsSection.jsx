const projectCards = [
  {
    name: 'Pen-it-Stationery',
    type: 'E-commerce Concept',
    summary:
      'A stationery storefront concept focused on clean browsing, clear product grouping, and a polished shopping flow.',
  },
  {
    name: 'TaskMate',
    type: 'Productivity App',
    summary:
      'A task management project built around tracking priorities, organizing work clearly, and keeping daily progress visible.',
  },
  {
    name: 'DataPulse',
    type: 'Analytics Dashboard',
    summary:
      'A data-focused experience for surfacing trends, simplifying metrics, and presenting information in a more readable way.',
  },
  {
    name: 'FundEase',
    type: 'Finance Platform',
    summary:
      'A finance-oriented product concept designed to make contributions, balances, and money movement easier to understand.',
  },
]

export function ProjectsSection() {
  return (
    <section className="projects-section" id="projects">
      <div className="heading-row">
        <p className="section-kicker">Projects</p>
        <h2>Selected builds that reflect how I approach product design, clarity, and usable digital experiences.</h2>
      </div>

      <div className="projects-grid">
        {projectCards.map((project, index) => (
          <article className="project-card" key={project.name}>
            <span className="project-index">0{index + 1}</span>
            <p className="project-type">{project.type}</p>
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
