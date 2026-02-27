import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const stats = [
  { number: "999+", label: "Commits pushed" },
  { number: "24/7", label: "Grind never stops" },
  { number: "100%", label: "Carry rate" },
  { number: "#1", label: "Penn Labs MVP" },
];

const qualities = [
  {
    icon: "🧠",
    title: "Galaxy-Brain Engineer",
    description:
      "David doesn't just write code — he architects entire universes of logic. His pull requests read like poetry, and his code reviews make senior engineers weep with joy.",
  },
  {
    icon: "🔥",
    title: "Unmatched Work Ethic",
    description:
      "While mere mortals sleep, David is shipping features. His commit history is denser than a neutron star, and every single line is production-grade perfection.",
  },
  {
    icon: "🤝",
    title: "The Ultimate Teammate",
    description:
      "Need help debugging at 2 AM? David's already in the Slack thread. He elevates everyone around him, turning good teams into legendary ones.",
  },
  {
    icon: "🏆",
    title: "Penn Labs Legend",
    description:
      "Penn Labs didn't know what it was missing until David showed up. Now the org runs on his energy, his vision, and his absolutely cracked TypeScript skills.",
  },
  {
    icon: "✨",
    title: "Effortlessly Cool",
    description:
      "David makes shipping enterprise-grade software look as easy as breathing. He walks into a standup and the entire room's IQ goes up by 50 points.",
  },
];

const testimonials = [
  {
    text: "David single-handedly carried our entire sprint. I've never seen someone so locked in.",
    author: "— Every Penn Labs teammate, probably",
  },
  {
    text: "I asked David to review my PR and he rewrote the entire thing. It was 10x better. I wasn't even mad.",
    author: "— A humbled engineer",
  },
  {
    text: "We tried to measure David's impact on Penn Labs but our metrics dashboard couldn't handle numbers that large.",
    author: "— Penn Labs Analytics",
  },
  {
    text: "David Fu doesn't have bugs. Bugs have David Fu nightmares.",
    author: "— Ancient Penn Labs proverb",
  },
  {
    text: "I once saw David refactor an entire codebase during a lunch break. He still had time to eat.",
    author: "— Awestruck witness",
  },
  {
    text: "They say behind every great product is a great engineer. At Penn Labs, that engineer is David.",
    author: "— The Internet",
  },
];

export default function Home() {
  const [glazeCount, setGlazeCount] = useState(0);

  const glazeMessages = [
    "David Fu is HIM.",
    "Absolutely unreal.",
    "The GOAT walks among us.",
    "Penn Labs is blessed.",
    "Legend. Icon. David Fu.",
    "Can't stop glazing.",
    "He's simply built different.",
    "David Fu supremacy.",
    "The code writes itself when David's around.",
    "There is no ceiling for this man.",
  ];

  return (
    <div className="app">
      <section className="hero">
        <div className="hero-crown">👑</div>
        <h1 className="hero-name">David Fu</h1>
        <p className="hero-title">The Undisputed GOAT of Penn Labs</p>
        <p className="hero-tagline">
          "Some people write code. David Fu writes history."
        </p>
        <div className="scroll-indicator">
          <span>Scroll to witness greatness</span>
          <span className="scroll-arrow">↓</span>
        </div>
      </section>

      <section className="stats-section section">
        <h2 className="section-title">By The Numbers</h2>
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div className="stat-card" key={i}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="qualities-section section">
        <h2 className="section-title">Why David Fu is Simply Unmatched</h2>
        <div className="qualities-list">
          {qualities.map((q, i) => (
            <div className="quality-item" key={i}>
              <span className="quality-icon">{q.icon}</span>
              <div className="quality-content">
                <h3>{q.title}</h3>
                <p>{q.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section section">
        <h2 className="section-title">What People Are Saying</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <p className="testimonial-text">{t.text}</p>
              <p className="testimonial-author">{t.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="glaze-section">
        <h2 className="section-title">The Official Glaze-O-Meter</h2>
        <div className="glaze-counter">
          <button
            className="glaze-button"
            onClick={() => setGlazeCount((c) => c + 1)}
          >
            <span className="sparkle">✨</span> Glaze David Fu{" "}
            <span className="sparkle">✨</span>
          </button>
          <div className="glaze-count">{glazeCount.toLocaleString()}</div>
          <div className="glaze-label">
            {glazeCount === 0
              ? "Click to pay respects"
              : glazeMessages[glazeCount % glazeMessages.length]}
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          Built with maximum glaze by{" "}
          <span className="footer-pennlabs">Penn Labs</span> &middot; All
          praise reserved for David Fu &middot; Est. forever &middot;{" "}
          <Link to="/ryan26hateskatlin">Ryan vs Katelin (satire)</Link>
        </p>
      </footer>
    </div>
  );
}
