const systemBlocks = [
  {
    title: 'Interface Layer',
    copy: 'HTML, CSS, JavaScript, and Angular help me craft responsive interfaces with clear structure and modern interaction.',
  },
  {
    title: 'Learning Layer',
    copy: 'Education gives me the foundation to approach projects with structure, curiosity, and a stronger understanding of core concepts.',
  },
  {
    title: 'Data Layer',
    copy: 'SQL and PostgreSQL make the data side dependable, searchable, and ready to support product growth.',
  },
]

export function SystemsSection() {
  return (
    <section className="systems-section" id="systems">
      <div className="heading-row">
        <p className="section-kicker">Focus Areas</p>
        <h2>How my frontend, learning, and data strengths come together in a project.</h2>
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
  )
}
