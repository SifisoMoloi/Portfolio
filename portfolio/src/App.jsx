import './App.css'
import { Navbar } from './components/Navbar.jsx'
import { HeroSection } from './components/HeroSection.jsx'
import { StackSection } from './components/StackSection.jsx'
import { ProjectsSection } from './components/ProjectsSection.jsx'
import { SystemsSection } from './components/SystemsSection.jsx'
import { ClosingSection } from './components/ClosingSection.jsx'
import { SiteFooter } from './components/SiteFooter.jsx'

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="page-shell">
        <HeroSection />

        <section className="statement-strip">
          <p>
            I build projects where the interface, visual structure, and data layer
            support the same clear outcome.
          </p>
        </section>

        <StackSection />
        <ProjectsSection />
        <SystemsSection />
        <ClosingSection />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
