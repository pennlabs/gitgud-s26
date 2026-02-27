import "./App.css";

const metrics = [
  { value: "42%", label: "Lower support load" },
  { value: "3.1x", label: "Faster delivery cycles" },
  { value: "99.95%", label: "Platform uptime SLA" },
  { value: "12 hrs", label: "Saved per manager weekly" },
];

const features = [
  {
    title: "Smart intake routing",
    description:
      "Automatically triage requests, bugs, and customer asks into the right team with AI-assisted priority scoring.",
  },
  {
    title: "Live team workspace",
    description:
      "Keep product, engineering, and ops aligned in one shared timeline with comments, approvals, and release checklists.",
  },
  {
    title: "Revenue-impact analytics",
    description:
      "Track cycle time, conversion impact, and retention lift by feature so roadmap decisions stay tied to business outcomes.",
  },
  {
    title: "No-code automations",
    description:
      "Trigger workflows across Slack, Jira, Notion, and HubSpot without writing scripts or managing brittle custom integrations.",
  },
];

const testimonials = [
  {
    quote:
      "Kaitlyn replaced three disconnected tools in one week. Our handoff time dropped from days to hours.",
    author: "Rhea Singh",
    role: "Head of Product, Northstar Health",
  },
  {
    quote:
      "The biggest win is visibility. Every stakeholder finally sees what is shipping and why.",
    author: "Jonah Alvarez",
    role: "COO, Riverline Commerce",
  },
  {
    quote:
      "We measured a 19% boost in trial-to-paid conversion after using Kaitlyn's prioritization model.",
    author: "Ethan Murphy",
    role: "Growth Lead, AlchemyOS",
  },
];

function App() {
  return (
    <div className="site">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">K</span>
          <span>Kaitlyn</span>
        </div>
        <nav className="nav-links">
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Customers</a>
        </nav>
        <button className="button button-ghost">Book Demo</button>
      </header>

      <main>
        <section className="hero">
          <p className="hero-kicker">Workflow Intelligence Platform</p>
          <h1>Run your product org like a top-performing SaaS team.</h1>
          <p className="hero-copy">
            Kaitlyn helps growth-stage companies turn messy cross-functional
            requests into clear execution plans, measurable outcomes, and
            faster launches.
          </p>
          <div className="hero-actions">
            <button className="button button-primary">Start Free Trial</button>
            <button className="button button-ghost">See Live Dashboard</button>
          </div>
          <div className="hero-metrics">
            {metrics.map((metric) => (
              <article key={metric.label}>
                <p>{metric.value}</p>
                <span>{metric.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="trust-strip">
          <p>Trusted by teams at</p>
          <div className="logos">
            <span>Northstar</span>
            <span>Meridian</span>
            <span>CanvasOne</span>
            <span>Helix Labs</span>
            <span>Riverline</span>
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-heading">
            <p>Everything in one operating layer</p>
            <h2>Built for modern SaaS teams that ship every week.</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section timeline" id="workflow">
          <div className="section-heading">
            <p>How Kaitlyn works</p>
            <h2>Move from idea to release with less friction.</h2>
          </div>
          <div className="timeline-grid">
            <article>
              <span>01</span>
              <h3>Capture</h3>
              <p>
                Intake requests from support, sales, and product into a unified
                queue with automatic context enrichment.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Prioritize</h3>
              <p>
                Score initiatives by customer impact, effort, and revenue
                influence using real-time signal weighting.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Launch</h3>
              <p>
                Push approved work into sprint plans, notify stakeholders, and
                measure release outcomes automatically.
              </p>
            </article>
          </div>
        </section>

        <section className="section pricing" id="pricing">
          <div className="section-heading">
            <p>Pricing</p>
            <h2>Flexible plans for startups and scaleups.</h2>
          </div>
          <div className="pricing-grid">
            <article className="price-card">
              <h3>Growth</h3>
              <p className="price">$79<span>/user</span></p>
              <ul>
                <li>Unlimited roadmap items</li>
                <li>AI prioritization engine</li>
                <li>Core integrations</li>
              </ul>
              <button className="button button-ghost">Choose Growth</button>
            </article>
            <article className="price-card featured">
              <p className="badge">Most Popular</p>
              <h3>Scale</h3>
              <p className="price">$129<span>/user</span></p>
              <ul>
                <li>Advanced analytics suite</li>
                <li>Automation workflows</li>
                <li>Dedicated success manager</li>
              </ul>
              <button className="button button-primary">Choose Scale</button>
            </article>
            <article className="price-card">
              <h3>Enterprise</h3>
              <p className="price">Custom</p>
              <ul>
                <li>SSO + audit trails</li>
                <li>Custom data residency</li>
                <li>Priority engineering support</li>
              </ul>
              <button className="button button-ghost">Contact Sales</button>
            </article>
          </div>
        </section>

        <section className="section testimonials" id="testimonials">
          <div className="section-heading">
            <p>Customer results</p>
            <h2>Teams shipping with Kaitlyn.</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article key={testimonial.author}>
                <p>"{testimonial.quote}"</p>
                <h3>{testimonial.author}</h3>
                <span>{testimonial.role}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section cta">
          <h2>Ready to plan less and ship more?</h2>
          <p>
            Start your 14-day free trial. No credit card required, full access
            included.
          </p>
          <button className="button button-primary">Get Started with Kaitlyn</button>
        </section>
      </main>

      <footer className="footer">
        <div className="brand">
          <span className="brand-mark">K</span>
          <span>Kaitlyn</span>
        </div>
        <div className="footer-links">
          <a href="#features">Product</a>
          <a href="#pricing">Pricing</a>
          <a href="#testimonials">Customers</a>
          <a href="#">Terms</a>
        </div>
        <p>2026 Kaitlyn Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
