export function SiteFooter() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top">
        <div className="footer-brand-block">
          <p className="section-kicker">Portfolio Footer</p>
          <p className="footer-description">
            Portfolio focused on clean interfaces, thoughtful learning, and practical
            database-driven development.
          </p>
        </div>

        <div className="footer-links-block">
          <div>
            <h3>Navigation</h3>
            <a href="#home">Home</a>
            <a href="#stack">Stack</a>
            <a href="#systems">Focus</a>
            <a href="#about">About</a>
          </div>

          <div>
            <h3>Core Stack</h3>
            <span>Angular</span>
            <span>Figma</span>
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
        <p>Built with HTML, CSS, JavaScript, and modern interface-focused tools.</p>
        <p>© 2026. All rights reserved.</p>
      </div>
    </footer>
  )
}
