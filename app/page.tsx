"use client";

import Image from "next/image";
import { useState } from "react";

const interests = [
  "Artificial Intelligence & Machine Learning",
  "Graph Neural Networks",
  "Financial Fraud & Anomaly Detection",
  "Privacy-Preserving Machine Learning",
  "Blockchain & Secure Computing",
  "Quantum Machine Learning",
];

const projects = [
  ["UGEM-CCL", "GNN framework for fraud detection"],
  ["PQ-MPC", "Post-quantum secure neural inference"],
  ["VAE-TF", "Variational autoencoder for fraud detection"],
  ["LedgerCache", "Blockchain-enabled secure edge caching"],
];

const publications = [
  "Hybrid Chaos System for Secure Image Encryption",
  "Variational Autoencoder Framework for Financial Fraud Detection",
  "Post-Quantum Secure Multi-Party Computation",
];

const navItems = [
  ["Home", "#home", "⌂"],
  ["About Me", "#about", "♙"],
  ["Research", "#research", "⚗"],
  ["Projects", "#projects", "▦"],
  ["Publications", "#publications", "▤"],
  ["Contact", "#contact", "✉"],
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <main className={`portfolio-shell ${sidebarOpen ? "" : "sidebar-collapsed"}`}>
      <aside className="sidebar">
        <a className="identity" href="#home" aria-label="Bhoopendra Kumar home">
          <span className="monogram">BK</span>
          <span className="identity-copy">
            <strong>Bhoopendra Kumar</strong>
            <small>Academic Portfolio</small>
          </span>
        </a>

        <nav className="side-nav" aria-label="Main navigation">
          {navItems.map(([label, href, icon], index) => (
            <a className={index === 0 ? "active" : ""} href={href} key={label}>
              <span className="nav-icon">{icon}</span>
              <span className="nav-label">{label}</span>
            </a>
          ))}
        </nav>

        <div className="sidebar-motto">
          <span>Research</span>
          <span>Teach</span>
          <span>Innovate</span>
          <i />
        </div>
        <div className="sidebar-bottom">COMPUTE · CREATE · CONTRIBUTE</div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div className="topbar-left">
            <button
              className="sidebar-toggle"
              type="button"
              onClick={() => setSidebarOpen((value) => !value)}
              aria-label={sidebarOpen ? "Collapse sidebar" : "Expand sidebar"}
              aria-expanded={sidebarOpen}
            >
              <span />
              <span />
              <span />
            </button>
            <div className="topbar-name">
              <strong>Bhoopendra Kumar</strong>
              <small>Assistant Professor</small>
            </div>
          </div>

          <div className="topbar-links">
            <a href="mailto:YOUR_EMAIL@example.com">✉ <span>Email</span></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">in <span>LinkedIn</span></a>
            <a href="https://scholar.google.com/" target="_blank" rel="noreferrer">♧ <span>Google Scholar</span></a>
            <a href="/cv.pdf" target="_blank" rel="noreferrer">↓ <span>CV</span></a>
          </div>
        </header>

        <div className="dashboard" id="home">
          <section className="hero-panel">
            <div className="hero-copy">
              <div className="eyebrow"><span className="live-dot" /> ASSISTANT PROFESSOR</div>
              <h1>Bhoopendra <em>Kumar</em></h1>
              <h2>Computer Science &amp; Applied Mathematics</h2>
              <p className="handwritten">Exploring intelligent systems for a secure and smart world.</p>
              <p className="hero-description">
                Researching the intersection of Artificial Intelligence, Machine Learning,
                Graph Neural Networks and intelligent computing systems.
              </p>
              <div className="hero-actions">
                <a className="button button-blue" href="#projects">Explore My Work <b>→</b></a>
                <a className="button button-outline" href="mailto:YOUR_EMAIL@example.com">Get in Touch <b>✉</b></a>
              </div>
            </div>

            <div className="portrait-wrap">
              <div className="portrait-glow" />
              <div className="portrait-frame">
                <Image
                  src="/profile.jpg"
                  alt="Bhoopendra Kumar"
                  fill
                  priority
                  sizes="(max-width: 800px) 70vw, 250px"
                  className="portrait"
                />
              </div>
              <div className="portrait-label">
                <strong>Bhoopendra Kumar</strong>
                <span>Assistant Professor · Computer Science</span>
              </div>
            </div>
          </section>

          <section className="stats-grid" id="about" aria-label="Academic profile highlights">
            <article className="stat-card">
              <span className="stat-icon">♜</span>
              <div><strong>VIPS-TC, Delhi</strong><small>Assistant Professor</small></div>
            </article>
            <article className="stat-card">
              <span className="stat-icon">◇</span>
              <div><strong>M.Tech</strong><small>MNIT Jaipur</small></div>
            </article>
            <article className="stat-card">
              <span className="stat-icon">⚗</span>
              <div><strong>Research Areas</strong><small>AI · ML · GNN · Security</small></div>
            </article>
            <article className="stat-card">
              <span className="stat-icon">▱</span>
              <div><strong>Research Focus</strong><small>Intelligent &amp; Secure Computing</small></div>
            </article>
          </section>

          <section className="lower-grid">
            <article className="info-panel" id="research">
              <h3><span className="panel-icon">◎</span> Research Interests</h3>
              <ul className="interest-list">
                {interests.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>

            <article className="info-panel" id="projects">
              <h3><span className="panel-icon code-icon">&lt;/&gt;</span> Selected Projects</h3>
              <ul className="project-list">
                {projects.map(([name, detail]) => (
                  <li key={name}><b>{name}</b><span> — {detail}</span></li>
                ))}
              </ul>
            </article>

            <article className="info-panel" id="publications">
              <h3><span className="panel-icon">▤</span> Recent Research</h3>
              <ul className="publication-list">
                {publications.map((item) => <li key={item}>{item}<span>↗</span></li>)}
              </ul>
            </article>
          </section>

          <footer className="dashboard-footer" id="contact">
            <span>© {new Date().getFullYear()} Bhoopendra Kumar</span>
            <span>Research · Teaching · Innovation</span>
            <a href="mailto:kumarbhoop7@gmail.com">Let’s collaborate ↗</a>
          </footer>
        </div>
      </section>
    </main>
  );
}
