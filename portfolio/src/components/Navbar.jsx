const links = [
  { label: 'Home', href: '#home' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Focus', href: '#systems' },
  { label: 'About', href: '#about' },
]

export function Navbar() {
  return (
    <header className="site-header">
      <a className="brand" href="#home">
        Professional Profile
      </a>

      <nav className="site-nav" aria-label="Primary">
        {links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav-cta">
        <a
          className="download-cv-button"
          href="/cv.pdf"
          download="Tshepo_Moloi_CV.pdf"
          aria-label="Download CV"
        >
          Download CV
        </a>
      </div>
    </header>
  )
}
