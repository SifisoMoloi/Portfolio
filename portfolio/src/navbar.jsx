const links = [
  { label: 'Home', href: '#home' },
  { label: 'Stack', href: '#stack' },
  { label: 'Workflow', href: '#systems' },
  { label: 'About', href: '#about' },
]

export function Navbar() {
  return (
    <header className="site-header">
      <a className="brand" href="#home">
        Tshepo Sifiso Moloi
      </a>

      <nav className="site-nav" aria-label="Primary">
        {links.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
