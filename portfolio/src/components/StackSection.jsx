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
    name: 'Figma',
    category: 'Design Planning',
    detail: 'Wireframes and interface planning that help shape cleaner frontend builds.',
    logo: 'https://cdn.simpleicons.org/figma/F24E1E',
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

export function StackSection() {
  return (
    <section className="stack-section" id="stack">
      <div className="heading-row">
        <p className="section-kicker">Selected Tools</p>
        <h2>The tools I use to design, build, and refine polished digital projects.</h2>
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
  )
}
