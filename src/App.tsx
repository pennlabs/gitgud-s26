import './App.css'
import { profile } from './content'

function App() {
  const primaryLinks = profile.links.filter((l) => l.href.trim().length > 0)
  const initials = profile.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')

  return (
    <div className="page" id="top">
      <header className="topbar">
        <a className="brand" href="#top" aria-label={`${profile.name} home`}>
          <span className="avatar" aria-hidden="true">
            {initials || 'KK'}
          </span>
          <span className="brandText">
            <span className="brandName">{profile.name}</span>
            <span className="brandRole">{profile.role}</span>
          </span>
        </a>

        <nav className="nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="main">
        <section className="hero" aria-label="Intro">
          <div className="heroCopy">
            <p className="eyebrow">{profile.role}</p>
            <h1 className="heroTitle">Building iOS experiences that feel easy.</h1>
            <p className="lede">{profile.bio}</p>

            <div className="ctaRow">
              {primaryLinks.slice(0, 3).map((link) => (
                <a
                  key={link.label}
                  className={link.label === 'Email' ? 'button primary' : 'button'}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {(profile.orgLine || profile.locationLine) && (
              <p className="meta">
                {[profile.orgLine, profile.locationLine].filter(Boolean).join(' • ')}
              </p>
            )}
          </div>

          <aside className="heroCard" aria-label="Highlights">
            <h2 className="cardTitle">Highlights</h2>
            <ul className="bullets">
              {profile.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>

            <div className="divider" role="presentation" />

            <h3 className="cardSubtitle">Skills</h3>
            <div className="chips" aria-label="Skills list">
              {profile.skills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </aside>
        </section>

        <section className="section" id="about" aria-label="About">
          <div className="sectionHeader">
            <h2>About</h2>
            <p>
              This is a lightweight, single-page profile site. Edit the content in{' '}
              <code>src/content.ts</code> to update text, skills, projects, and links.
            </p>
          </div>

          <div className="aboutGrid">
            <div className="aboutCard">
              <h3>What I value</h3>
              <p>
                Clear user flows, thoughtful details, and engineering choices that make the product
                easier to maintain over time.
              </p>
            </div>
            <div className="aboutCard">
              <h3>How I work</h3>
              <p>
                I like tight feedback loops: prototypes early, measure performance, and ship
                incremental improvements with strong defaults.
              </p>
            </div>
            <div className="aboutCard">
              <h3>What I’m learning</h3>
              <p>
                Modern iOS concurrency patterns, app architecture trade-offs, and building
                accessible interfaces that scale.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="projects" aria-label="Projects">
          <div className="sectionHeader">
            <h2>Projects</h2>
            <p>A few things I’ve built or would like to build. Swap these for real links anytime.</p>
          </div>

          <div className="projectsGrid">
            {profile.projects.map((p) => {
              const isLink = Boolean(p.href && p.href.trim().length > 0)
              const Tag = isLink ? 'a' : 'div'

              return (
                <Tag
                  key={p.title}
                  className={`projectCard ${isLink ? 'clickable' : ''}`}
                  href={isLink ? p.href : undefined}
                  target={isLink ? '_blank' : undefined}
                  rel={isLink ? 'noreferrer' : undefined}
                >
                  <div className="projectTop">
                    <h3>{p.title}</h3>
                    {isLink && <span className="projectArrow" aria-hidden="true">↗</span>}
                  </div>
                  <p className="projectDesc">{p.description}</p>
                  <div className="tags" aria-label={`${p.title} tags`}>
                    {p.tags.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </Tag>
              )
            })}
          </div>
        </section>

        <section className="section" id="contact" aria-label="Contact">
          <div className="sectionHeader">
            <h2>Contact</h2>
            <p>
              Want to collaborate or chat? Send an email or connect via the links below.
            </p>
          </div>

          <div className="contactRow">
            {primaryLinks.map((link) => (
              <a
                key={link.label}
                className="contactLink"
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
        </p>
      </footer>
    </div>
  )
}

export default App
