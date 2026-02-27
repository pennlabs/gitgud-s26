import { useState, useEffect, useRef } from "react";

const experiences = [
  { company: "Apple", role: "Software Engineer Intern", period: "May 2025 – Aug 2025", icon: "🍎" },
  { company: "Penn Engineering – CIS 1951", role: "Teaching Assistant", period: "Aug 2025 – Present", icon: "📱" },
  { company: "PennLabs", role: "iOS Mobile Engineer & Social Chair", period: "2024 – Present", icon: "🔵" },
  { company: "Penn Aerial Robotics", role: "Software Engineer", period: "2024 – Present", icon: "🚁" },
  { company: "Wharton Asia Exchange", role: "Co-VP, Professional Committee", period: "2024 – Present", icon: "🏛️" },
  { company: "Penn Women in Computer Science", role: "Education Committee Member", period: "2024 – Present", icon: "💻" },
  { company: "Magikid Robotics", role: "Instructor", period: "Mar 2024 – Aug 2024", icon: "🤖" },
  { company: "University of Southern California", role: "Researcher", period: "Jun 2023 – Aug 2023", icon: "🔬" },
  { company: "BSA Venturing Crew 333", role: "President", period: "2021 – 2024", icon: "⛺" },
  { company: "MSI", role: "Technician", period: "Jun 2022 – Aug 2022", icon: "🖥️" },
];

const awards = [
  { label: "Eagle Scout", icon: "🦅" },
  { label: "President's Volunteer Service Award", icon: "🏅" },
  { label: "The Congressional Award", icon: "🇺🇸" },
  { label: "IgniteCS Programming Expo", icon: "💡" },
  { label: "California Solar Regatta", icon: "☀️" },
];

const skills = ["Artificial Intelligence", "Machine Learning", "TensorFlow", "iOS Development", "Robotics", "Research"];

const loves = [
  { emoji: "🧋", label: "Boba" },
  { emoji: "🧸", label: "Stuffed Animals" },
  { emoji: "🍜", label: "Food" },
  { emoji: "🐢", label: "My Turtles" },
  { emoji: "🌴", label: "Cali Weather" },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(e.target.id));
            setActiveSection(e.target.id.split("-")[0]);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll("[data-observe]").forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const vis = (id: string) => visibleItems.has(id);

  return (
    <div style={s.root}>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { margin: 0; background: #0b0c0e; }
        .nav-link:hover { color: #e8a87c !important; }
        .btn-p:hover { transform: translateY(-3px); box-shadow: 0 10px 36px rgba(232,168,124,0.45); }
        .btn-s:hover { border-color: rgba(232,168,124,0.5) !important; color: #e8a87c !important; }
        .tl:hover { background: rgba(232,168,124,0.05) !important; border-left-color: #e8a87c !important; transform: translateX(4px); }
        .skill:hover { background: rgba(232,168,124,0.12) !important; transform: translateY(-2px); }
        .award:hover { background: rgba(232,168,124,0.06) !important; border-color: rgba(232,168,124,0.3) !important; transform: translateY(-4px); }
        .love-card:hover { background: rgba(232,168,124,0.08) !important; transform: translateY(-6px) scale(1.04); }
      `}</style>

      <div style={s.blob1} />
      <div style={s.blob2} />

      {/* Nav */}
      <nav style={{ ...s.nav, ...(scrolled ? s.navScroll : {}) }}>
        <span style={s.logo} onClick={() => scrollTo("hero")}>KK</span>
        <div style={s.navLinks}>
          {["about", "experience", "skills", "awards"].map((sec) => (
            <button key={sec} className="nav-link" onClick={() => scrollTo(sec)}
              style={{ ...s.navLink, ...(activeSection === sec ? s.navActive : {}) }}>
              {sec}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" data-observe style={s.hero}>
        <div style={s.photoWrap}>
          <div style={{ ...s.photoRing, animation: "spin 22s linear infinite" }} />
          <img src="/Kaitlyn_Kwan.jpeg" alt="Kaitlyn Kwan" style={s.photo} />
        </div>
        <div style={s.heroContent}>
          <p style={s.heroTag}>CS @ University of Pennsylvania · Class of 2028</p>
          <h1 style={s.heroName}>
            Kaitlyn<br />
            <span style={{ color: "#e8a87c" }}>Kwan</span>
          </h1>
          <p style={s.heroSub}>Software Engineer · Researcher · Builder</p>
          <p style={s.heroBio}>
            I build things that matter — from aerial robotics software at Penn to iOS apps
            used by thousands, to production systems at Apple. Driven by the intersection
            of AI, systems, and human impact.
          </p>
          <div style={s.lovesRow}>
            {loves.map(({ emoji, label }) => (
              <div key={label} className="love-card" style={s.loveCard}>
                <span style={s.loveEmoji}>{emoji}</span>
                <span style={s.loveLabel}>{label}</span>
              </div>
            ))}
          </div>
          <div style={s.ctas}>
            <button className="btn-p" style={s.btnP} onClick={() => scrollTo("experience")}>View Experience</button>
            <a className="btn-s" style={s.btnS} href="https://linkedin.com/in/kait-kwan" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" data-observe style={s.section}>
        <p style={s.sectionLabel}>About</p>
        <div style={{ ...s.aboutGrid, ...(vis("about") ? s.fadeIn : s.fadeOut), transition: "opacity 0.7s ease, transform 0.7s ease" }}>
          <h2 style={s.aboutHead}>Passionate about<br />AI & Systems</h2>
          <div>
            <p style={s.bodyText}>
              I'm a sophomore at the University of Pennsylvania studying Computer Science Engineering.
              Most recently, I spent a summer as a Software Engineer at{" "}
              <strong style={{ color: "#e8a87c", fontWeight: 400 }}>Apple</strong>, shipping production systems to millions of devices.
            </p>
            <p style={s.bodyText}>
              At Penn, I'm a TA for iOS development, an iOS engineer at{" "}
              <strong style={{ color: "#e8a87c", fontWeight: 400 }}>PennLabs</strong>, and a software engineer at{" "}
              <strong style={{ color: "#e8a87c", fontWeight: 400 }}>Penn Aerial Robotics</strong>.
              TensorFlow-certified ML practitioner who loves bridging research and real-world systems.
            </p>
            <p style={s.bodyText}>Eagle Scout. Congressional Award. Robotics instructor. Community builder.</p>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" data-observe style={s.section}>
        <p style={s.sectionLabel}>Experience</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {experiences.map((exp, i) => (
            <div key={i} id={`experience-${i}`} data-observe className="tl"
              style={{
                ...s.tlItem,
                ...(vis(`experience-${i}`) ? s.slideIn : s.slideOut),
                transition: `opacity 0.5s ease ${i * 55}ms, transform 0.5s ease ${i * 55}ms, background 0.2s, border-color 0.2s`,
              }}>
              <span style={s.tlIcon}>{exp.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={s.tlTop}>
                  <span style={s.tlCompany}>{exp.company}</span>
                  <span style={s.tlPeriod}>{exp.period}</span>
                </div>
                <p style={s.tlRole}>{exp.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" data-observe style={s.section}>
        <p style={s.sectionLabel}>Skills & Tools</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
          {skills.map((sk, i) => (
            <div key={sk} id={`skills-${i}`} data-observe className="skill"
              style={{
                ...s.skillTag,
                ...(vis(`skills-${i}`) ? s.fadeIn : s.fadeOut),
                transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms, background 0.2s`,
              }}>
              {sk}
            </div>
          ))}
        </div>
        <div style={s.cert}>
          <span style={{ fontSize: 22 }}>📜</span>
          <span>TensorFlow Developer Certificate — Intro to AI, ML & Deep Learning</span>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" data-observe style={s.section}>
        <p style={s.sectionLabel}>Honors & Awards</p>
        <div style={s.awardsGrid}>
          {awards.map((aw, i) => (
            <div key={aw.label} id={`awards-${i}`} data-observe className="award"
              style={{
                ...s.awardCard,
                ...(vis(`awards-${i}`) ? s.fadeIn : s.fadeOut),
                transition: `opacity 0.5s ease ${i * 90}ms, transform 0.5s ease ${i * 90}ms, background 0.2s, border-color 0.2s`,
              }}>
              <span style={{ fontSize: 28 }}>{aw.icon}</span>
              <span style={s.awardLabel}>{aw.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={s.footer}>
        <p style={s.footerText}>© 2025 Kaitlyn Kwan · Los Angeles Metropolitan Area</p>
        <a href="https://linkedin.com/in/kait-kwan" target="_blank" rel="noreferrer" style={s.footerLink}>
          linkedin.com/in/kait-kwan ↗
        </a>
      </footer>
    </div>
  );
}

const ACC = "#e8a87c";
const TEXT = "#ede9e0";
const MUTED = "rgba(237,233,224,0.5)";
const BORDER = "rgba(255,255,255,0.07)";
const MONO = "'DM Mono','Courier New',monospace";
const DISPLAY = "'Playfair Display',Georgia,serif";
const BODY = "'DM Sans',system-ui,sans-serif";

const s: Record<string, React.CSSProperties> = {
  root: { background: "#0b0c0e", color: TEXT, fontFamily: BODY, fontWeight: 300, minHeight: "100vh", overflowX: "hidden", position: "relative" },
  blob1: { position: "fixed", top: "-15%", right: "-10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(232,168,124,0.11) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 },
  blob2: { position: "fixed", bottom: "0", left: "-15%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(90,140,200,0.07) 0%,transparent 65%)", pointerEvents: "none", zIndex: 0 },
  nav: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 500, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 52px", transition: "background 0.4s, border-bottom 0.4s" },
  navScroll: { background: "rgba(11,12,14,0.85)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: `1px solid ${BORDER}` },
  logo: { fontFamily: DISPLAY, fontSize: 20, fontWeight: 900, color: ACC, letterSpacing: 3, cursor: "pointer" },
  navLinks: { display: "flex", gap: 32 },
  navLink: { background: "none", border: "none", fontFamily: MONO, fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", color: MUTED, cursor: "pointer", padding: 0, transition: "color 0.2s" },
  navActive: { color: ACC },
  hero: { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", gap: 72, padding: "120px 52px 80px", flexWrap: "wrap", position: "relative", zIndex: 1 },
  photoWrap: { position: "relative", flexShrink: 0, width: 260, height: 260 },
  photoRing: { position: "absolute", inset: -14, borderRadius: "50%", border: "1px solid rgba(232,168,124,0.3)", zIndex: 0 },
  photo: { width: 260, height: 260, borderRadius: "50%", objectFit: "cover", objectPosition: "center top", border: "3px solid rgba(232,168,124,0.25)", position: "relative", zIndex: 1, display: "block" },
  heroContent: { maxWidth: 580 },
  heroTag: { fontFamily: MONO, fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", color: ACC, marginBottom: 20, opacity: 0.85 },
  heroName: { fontFamily: DISPLAY, fontSize: "clamp(60px,8vw,108px)", fontWeight: 900, lineHeight: 0.92, letterSpacing: -3, marginBottom: 18 },
  heroSub: { fontFamily: MONO, fontSize: 12, letterSpacing: 3, textTransform: "uppercase", color: MUTED, marginBottom: 24 },
  heroBio: { fontSize: 15, lineHeight: 1.85, color: "rgba(237,233,224,0.68)", maxWidth: 460, marginBottom: 32 },
  lovesRow: { display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 36 },
  loveCard: { display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "14px 16px", background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, borderRadius: 12, minWidth: 72, cursor: "default", transition: "background 0.2s, transform 0.2s" },
  loveEmoji: { fontSize: 24 },
  loveLabel: { fontFamily: MONO, fontSize: 10, letterSpacing: 1, color: MUTED, textTransform: "uppercase" },
  ctas: { display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" },
  btnP: { background: ACC, border: "none", color: "#0b0c0e", fontFamily: DISPLAY, fontSize: 14, fontWeight: 700, padding: "13px 34px", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" },
  btnS: { background: "transparent", border: `1px solid ${BORDER}`, color: TEXT, fontFamily: DISPLAY, fontSize: 14, padding: "13px 28px", textDecoration: "none", display: "inline-block", transition: "border-color 0.2s, color 0.2s" },
  section: { maxWidth: 900, margin: "0 auto", padding: "92px 52px", position: "relative", zIndex: 1 },
  sectionLabel: { fontFamily: MONO, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: ACC, marginBottom: 44 },
  aboutGrid: { display: "grid", gridTemplateColumns: "1fr 2fr", gap: 56 },
  aboutHead: { fontFamily: DISPLAY, fontSize: 32, fontWeight: 700, lineHeight: 1.25 },
  bodyText: { fontSize: 15, lineHeight: 1.9, color: "rgba(237,233,224,0.7)", marginBottom: 18 },
  tlItem: { display: "flex", gap: 18, alignItems: "flex-start", padding: "16px 20px", background: "rgba(255,255,255,0.025)", borderLeft: "2px solid transparent", cursor: "default" },
  tlIcon: { fontSize: 20, width: 32, flexShrink: 0, textAlign: "center", paddingTop: 2 },
  tlTop: { display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8, marginBottom: 4 },
  tlCompany: { fontFamily: DISPLAY, fontSize: 15, fontWeight: 700, color: TEXT },
  tlPeriod: { fontFamily: MONO, fontSize: 11, color: ACC, letterSpacing: 1, flexShrink: 0, opacity: 0.8 },
  tlRole: { fontSize: 13, color: MUTED, lineHeight: 1.5 },
  skillTag: { padding: "10px 22px", border: "1px solid rgba(232,168,124,0.28)", color: ACC, fontFamily: MONO, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase", cursor: "default" },
  cert: { display: "inline-flex", alignItems: "center", gap: 14, background: "rgba(232,168,124,0.07)", border: "1px solid rgba(232,168,124,0.18)", padding: "16px 28px", fontFamily: MONO, fontSize: 12, color: "rgba(237,233,224,0.65)", lineHeight: 1.5 },
  awardsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(175px,1fr))", gap: 14 },
  awardCard: { display: "flex", flexDirection: "column", gap: 12, padding: "28px 22px", background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, cursor: "default" },
  awardLabel: { fontFamily: DISPLAY, fontSize: 13, lineHeight: 1.45, color: "rgba(237,233,224,0.78)" },
  footer: { borderTop: `1px solid ${BORDER}`, padding: "36px 52px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, position: "relative", zIndex: 1 },
  footerText: { fontFamily: MONO, fontSize: 11, color: "rgba(237,233,224,0.25)", letterSpacing: 1 },
  footerLink: { fontFamily: MONO, fontSize: 11, color: "rgba(232,168,124,0.55)", textDecoration: "none", letterSpacing: 0.5 },
  fadeIn: { opacity: 1, transform: "translateY(0px)" },
  fadeOut: { opacity: 0, transform: "translateY(28px)" },
  slideIn: { opacity: 1, transform: "translateX(0px)" },
  slideOut: { opacity: 0, transform: "translateX(-20px)" },
};