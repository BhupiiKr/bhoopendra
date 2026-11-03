
"use client";

import Image from "next/image";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "CV", href: "/cv.pdf" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="topbar">
        <a href="#home" className="brand">
          <span className="brand-mark">BK</span>
          <span>Bhoopendra Kumar</span>
        </a>

        <nav className="desktop-nav">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "CV" ? "_blank" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span>{menuOpen ? "✕" : "☰"}</span>
        </button>
      </header>

      <div
        className={`sidebar-overlay ${menuOpen ? "show" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside className={`side-menu ${menuOpen ? "open" : ""}`}>
        <div className="side-heading">
          <span>Navigation</span>
          <button onClick={() => setMenuOpen(false)}>✕</button>
        </div>

        {navigation.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={item.label === "CV" ? "_blank" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
            <span>↗</span>
          </a>
        ))}
      </aside>

      <section className="hero" id="home">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="hero-content">
          <div className="hero-left">
            <div className="eyebrow">
              <span className="status-dot" />
              ASSISTANT PROFESSOR
            </div>

            <h1>
              Bhoopendra <span>Kumar</span>
            </h1>

            <h2>Computer Science &amp; Applied Mathematics</h2>

            <p className="tagline">
              Exploring intelligent systems for a secure and smart world.
            </p>

            <div className="intro" id="about">
              I am an Assistant Professor at <strong>VIPS-TC, Delhi</strong>,
              in the Department of Computer Science and Applied Mathematics.
              I hold an M.Tech in Computer Science and Information Security
              from <strong>MNIT Jaipur</strong>. My academic and research
              interests lie in Artificial Intelligence, Machine Learning,
              Deep Learning and Graph Neural Networks, with a focus on
              financial fraud detection, anomaly detection and intelligent
              computing systems. I am passionate about teaching, research
              and developing practical solutions to real-world challenges.
            </div>

            <div className="hero-tags">
              <span>Artificial Intelligence</span>
              <span>Machine Learning</span>
              <span>Graph Neural Networks</span>
              <span>Intelligent Computing</span>
            </div>
          </div>

          <div className="hero-right">
            <div className="portrait-frame">
              <div className="portrait-glow" />
              <Image
                src="/profile.jpg"
                alt="Bhoopendra Kumar"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 360px"
                className="portrait"
              />

              <div className="portrait-caption">
                <h3>Bhoopendra Kumar</h3>
                <p>Assistant Professor</p>
                <span>Computer Science &amp; Applied Mathematics</span>
              </div>
            </div>

            <div className="image-caption-small">
              <span className="status-dot" />
              Researcher · Educator · Innovator
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="research">
        <div className="section-heading">
          <span>01 / WHAT I EXPLORE</span>
          <h2>Research Interests</h2>
          <p>
            Exploring intelligent and secure computational approaches to
            complex real-world problems.
          </p>
        </div>

        <div className="research-grid">
          {[
            ["01", "Artificial Intelligence", "Intelligent systems and AI-driven problem solving."],
            ["02", "Machine & Deep Learning", "Learning representations and predictive models."],
            ["03", "Graph Neural Networks", "Graph-based learning and relational intelligence."],
            ["04", "Fraud & Anomaly Detection", "Detecting suspicious patterns in complex data."],
            ["05", "Privacy-Preserving ML", "Secure and privacy-aware intelligent computation."],
            ["06", "Blockchain & Secure Computing", "Trustworthy and decentralized computing systems."],
          ].map(([number, title, description]) => (
            <article className="research-card" key={number}>
              <span className="card-number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section projects-section" id="projects">
        <div className="section-heading">
          <span>02 / SELECTED WORK</span>
          <h2>Research &amp; Projects</h2>
        </div>

        <div className="project-list">
          <article>
            <span>01</span>
            <div>
              <h3>UGEM-CCL</h3>
              <p>GNN-based framework for financial fraud detection.</p>
            </div>
          </article>

          <article>
            <span>02</span>
            <div>
              <h3>PQ-MPC</h3>
              <p>Post-quantum secure multi-party computation for confidential inference.</p>
            </div>
          </article>

          <article>
            <span>03</span>
            <div>
              <h3>VAE-TF</h3>
              <p>Variational autoencoder framework for financial fraud detection.</p>
            </div>
          </article>

          <article>
            <span>04</span>
            <div>
              <h3>LedgerCache</h3>
              <p>Blockchain-enabled secure caching for edge and IoT systems.</p>
            </div>
          </article>

          <article>
            <span>05</span>
            <div>
              <h3>Hybrid Chaos-Based Image Encryption</h3>
              <p>Chaotic-map-based image encryption for secure communication.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="content-section publications-section" id="publications">
        <div className="section-heading">
          <span>03 / ACADEMIC CONTRIBUTIONS</span>
          <h2>Publications</h2>
          <p>
            Research contributions in intelligent computing, machine learning
            and information security.
          </p>
        </div>
        <div className="publication-note">
          <h3>Research in Progress</h3>
          <p>
            Exploring emerging research directions in AI, graph learning,
            secure computing and intelligent systems.
          </p>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div>
          <span className="footer-label">LET&apos;S CONNECT</span>
          <h2>Have a research idea?</h2>
          <p>
            Open to academic collaboration, research discussions and
            knowledge sharing.
          </p>
        </div>

        <a href="mailto:YOUR_EMAIL@example.com" className="email-link">
          Get in touch ↗
        </a>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Bhoopendra Kumar</span>
          <span>Designed with curiosity &amp; purpose.</span>
        </div>
      </footer>
    </main>
  );
}
