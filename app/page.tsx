
"use client";

import Image from "next/image";
import { useState } from "react";

const links = [
  ["Home", "#home"],
  ["About Me", "#about"],
  ["Research", "#research"],
  ["Projects", "#projects"],
  ["Publications", "#publications"],
  ["Curriculum Vitae", "/cv.pdf"],
  ["Contact", "mailto:YOUR_EMAIL@example.com"],
];

const cards = [
  {
    icon: "♜",
    title: "Current Position",
    main: "VIPS-TC, Delhi",
    sub: "Assistant Professor",
    highlight: "Computer Science & Applied Mathematics",
  },
  {
    icon: "◇",
    title: "Education",
    main: "M.Tech",
    sub: "MNIT Jaipur",
    highlight: "Computer Science & Information Security",
  },
  {
    icon: "⌘",
    title: "Research Interests",
    main: "AI · ML · DL",
    sub: "Graph Neural Networks",
    highlight: "Intelligent Computing",
  },
  {
    icon: "✧",
    title: "Research Focus",
    main: "Fraud & Anomaly Detection",
    sub: "Secure Intelligent Systems",
    highlight: "Privacy-Preserving Machine Learning",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="home">
      {/* TOP NAVIGATION */}
      <header className="topbar">
        <a href="#home" className="brand">
          <span className="brand-logo">BK</span>
          <span>Bhoopendra Kumar</span>
        </a>

        <nav className="top-links">
          {links.map(([label, href]) => (
            <a key={label} href={href}>
              {label}
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open side navigation"
          aria-expanded={menuOpen}
        >
          <span>{menuOpen ? "✕" : "☰"}</span>
        </button>
      </header>

      {/* SIDE NAVIGATION */}
      <div
        className={`overlay ${menuOpen ? "overlay-visible" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside className={`side-menu ${menuOpen ? "side-open" : ""}`}>
        <div className="side-header">
          <div>
            <span className="side-kicker">ACADEMIC PORTFOLIO</span>
            <h2>Bhoopendra Kumar</h2>
          </div>
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        <div className="side-profile">
          <Image
            src="/profile.jpeg"
            alt="Bhoopendra Kumar"
            width={76}
            height={76}
            className="side-avatar"
          />
          <div>
            <strong>Bhoopendra Kumar</strong>
            <p>Assistant Professor</p>
          </div>
        </div>

        <span className="side-label">EXPLORE</span>

        {links.map(([label, href], index) => (
          <a
            key={label}
            href={href}
            className="side-link"
            onClick={() => setMenuOpen(false)}
          >
            <span className="side-number">0{index + 1}</span>
            {label}
            <span className="side-arrow">↗</span>
          </a>
        ))}

        <div className="side-footer">
          <span className="status-dot" />
          Open to Research Collaboration
        </div>
      </aside>

      {/* MAIN INTRODUCTION */}
      <section className="hero" id="about">
        <div className="neon-glow glow-blue" />
        <div className="neon-glow glow-gold" />

        <div className="hero-inner">
          <div className="hero-text">
            <div className="eyebrow">
              <span className="status-dot" />
              ASSISTANT PROFESSOR
            </div>

            <h1>
              Bhoopendra <span>Kumar</span>
            </h1>

            <h2>Computer Science &amp; Applied Mathematics</h2>

            <p className="signature">
              Exploring intelligent systems for a secure and smart world.
            </p>

            <p className="intro-text">
              I am an Assistant Professor at{" "}
              <em>VIPS-TC, Delhi</em>, in the Department of Computer Science
              and Applied Mathematics. I completed my M.Tech from{" "}
              <em>MNIT Jaipur</em> in Computer Science and Information
              Security. My research interests include{" "}
              <em>Artificial Intelligence, Machine Learning, Deep Learning
              and Graph Neural Networks</em>, with a particular focus on
              financial fraud detection, anomaly detection and intelligent
              computing. I am passionate about{" "}
              <em>teaching, innovative research and solving real-world
              computational challenges.</em>
            </p>

            <div className="highlight-line">
              <span>Researcher</span>
              <i>·</i>
              <span>Educator</span>
              <i>·</i>
              <span>Innovator</span>
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div className="hero-image-area">
            <div className="image-frame">
              <Image
                src="/profile.jpeg"
                alt="Bhoopendra Kumar"
                fill
                priority
                sizes="(max-width: 700px) 80vw, 360px"
                className="profile-image"
              />
              <div className="image-bottom">
                <h3>Bhoopendra Kumar</h3>
                <p>Assistant Professor</p>
                <span>VIPS-TC · Delhi</span>
              </div>
            </div>

            <p className="image-caption">
              <span className="status-dot" />
              Academic Journey &amp; Research
            </p>
          </div>
        </div>

        {/* IMPORTANT INFORMATION CARDS */}
        <div className="info-grid">
          {cards.map((card) => (
            <article className="info-card" key={card.title}>
              <div className="info-icon">{card.icon}</div>
              <div>
                <span className="info-title">{card.title}</span>
                <h3>{card.main}</h3>
                <p>{card.sub}</p>
                <em>{card.highlight}</em>
              </div>
            </article>
          ))}
        </div>

        <div className="hero-bottom">
          <span>ACADEMIA</span>
          <span>RESEARCH</span>
          <span>INTELLIGENT COMPUTING</span>
          <span>INNOVATION</span>
        </div>
      </section>
    </main>
  );
}
