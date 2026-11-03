
"use client";

import Image from "next/image";
import { useState } from "react";

const researchAreas = [
  "Artificial Intelligence and Machine Learning",
  "Graph Neural Networks and Deep Learning",
  "Financial Fraud and Anomaly Detection",
  "Privacy-Preserving Machine Learning",
  "Blockchain and Secure Computing",
  "Quantum Machine Learning",
];

const projects = [
  {
    number: "01",
    category: "GRAPH INTELLIGENCE",
    title: "UGEM-CCL",
    description:
      "An evidential learning and graph neural network framework exploring the detection of fraudulent activities in complex graph-structured data.",
    tags: ["GNN", "Fraud Detection", "Evidential Learning"],
  },
  {
    number: "02",
    category: "PRIVACY-PRESERVING AI",
    title: "PQ-MPC",
    description:
      "A post-quantum secure multi-party computation framework for confidential neural network inference.",
    tags: ["Post-Quantum", "MPC", "CKKS"],
  },
  {
    number: "03",
    category: "INTELLIGENT SECURITY",
    title: "VAE-TF",
    description:
      "A variational autoencoder-based approach for identifying complex and previously unseen financial fraud patterns.",
    tags: ["VAE", "Financial Fraud", "Deep Learning"],
  },
  {
    number: "04",
    category: "COMPUTATIONAL INTELLIGENCE",
    title: "Hybrid Chaos-Based Image Encryption",
    description:
      "Exploring hybrid chaotic maps for image encryption, including key evolution, confusion and diffusion.",
    tags: ["Chaotic Maps", "Image Encryption", "IoT"],
  },
  {
    number: "05",
    category: "BLOCKCHAIN AND EDGE COMPUTING",
    title: "LedgerCache",
    description:
      "Exploring blockchain-enabled secure caching mechanisms for edge computing and resource-constrained IoT environments.",
    tags: ["Blockchain", "Edge Computing", "IoT"],
  },
  {
    number: "06",
    category: "QUANTUM COMPUTING",
    title: "Quantum Neural Networks",
    description:
      "Investigating noise characteristics, computational behaviour and learning capabilities of quantum neural network models.",
    tags: ["QNN", "PennyLane", "Quantum ML"],
  },
];

const researchDirections = [
  {
    title: "Hybrid Chaos System for Secure Image Encryption",
    description:
      "Exploring chaotic maps for secure image encryption and IoT applications.",
  },
  {
    title:
      "Variational Autoencoder Framework for Financial Fraud Detection",
    description:
      "Deep learning-based approaches to anomaly detection in financial transaction data.",
  },
  {
    title: "Post-Quantum Secure Multi-Party Computation",
    description:
      "Exploring confidential neural network inference using post-quantum cryptographic techniques.",
  },
];

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Research", "#research"],
  ["Projects", "#projects"],
  ["Publications", "#publications"],
  ["Contact", "#contact"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      {/* NAVIGATION */}

      <header className="site-header">
        <a href="#home" className="brand" onClick={closeMenu}>
          <div className="brand-mark">BK</div>

          <div className="brand-name">
            Bhoopendra Kumar
            <span className="brand-subtitle">
              Academic Portfolio
            </span>
          </div>
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          {navigation.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}

          <a
            href="#contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Get in Touch <span>↗</span>
          </a>
        </nav>
      </header>

      {/* HERO */}

      <section className="hero section-wrap" id="home">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="status-dot" />
            ASSISTANT PROFESSOR · COMPUTER SCIENCE
          </div>

          <p className="hero-overline">
            Researcher · Educator · Innovator
          </p>

          <h1>
            Bhoopendra
            <br />
            Kumar<span className="heading-period">.</span>
          </h1>

          <p className="hero-subheading">
            Computer Science &amp; Applied Mathematics
          </p>

          <p className="hero-lede">
            Exploring the intersection of{" "}
            <span className="italic-line">
              Artificial Intelligence, Machine Learning
              and Intelligent Systems.
            </span>
          </p>

          <p className="hero-lede">
            I am an academic and researcher interested in
            developing intelligent, reliable and secure
            computing systems. My work explores how emerging
            computational technologies can address
            meaningful real-world challenges.
          </p>

          <div className="hero-actions">
            <a href="#research" className="button button-primary">
              Explore My Work <span>→</span>
            </a>

            <a href="#contact" className="button button-secondary">
              Contact Me <span>↗</span>
            </a>
          </div>

          <div className="hero-meta">
            <div className="meta-item">
              <span className="meta-label">CURRENT POSITION</span>
              <strong>Assistant Professor</strong>
            </div>

            <div className="meta-divider" />

            <div className="meta-item">
              <span className="meta-label">INSTITUTION</span>
              <strong>VIPS-TC, Delhi</strong>
            </div>

            <div className="meta-divider" />

            <div className="meta-item">
              <span className="meta-label">RESEARCH FOCUS</span>
              <strong>AI · ML · GNN</strong>
            </div>
          </div>
        </div>

        {/* YOUR PHOTOGRAPH */}

        <div className="hero-visual">
          <div className="portrait-frame">
            <Image
              src="/profile.jpg"
              alt="Bhoopendra Kumar"
              width={700}
              height={1000}
              priority
              className="portrait-image"
            />

            <div className="portrait-caption">
              <strong>Bhoopendra Kumar</strong>
              <span>
                Assistant Professor · Computer Science
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ACADEMIC HIGHLIGHTS */}

      <div className="credential-strip">
        <div className="credential-inner section-wrap">
          <div>
            <span>✦</span>
            M.Tech · MNIT Jaipur
          </div>

          <div>
            <span>✦</span>
            Academic Research
          </div>

          <div>
            <span>✦</span>
            Artificial Intelligence
          </div>

          <div>
            <span>✦</span>
            Computational Intelligence
          </div>
        </div>
      </div>

      {/* ABOUT */}

      <section className="content-section section-wrap" id="about">
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              01 — ABOUT ME
            </span>

            <h2>
              A journey of
              <br />
              <span className="script-accent">
                curiosity and discovery.
              </span>
            </h2>
          </div>

          <p className="section-intro">
            Bridging academic teaching, scientific exploration
            and practical computing to contribute towards
            the next generation of intelligent technologies.
          </p>
        </div>

        <div className="about-grid">
          <article className="about-card featured-about">
            <div className="card-icon">✦</div>

            <span className="card-label">ACADEMIC PROFILE</span>

            <h3>Educator &amp; Researcher</h3>

            <p>
              Currently serving as an Assistant Professor
              in the Department of Computer Science and
              Applied Mathematics at Vivekananda Institute
              of Professional Studies – Technical Campus,
              Delhi.
            </p>

            <div className="about-foot">
              <span className="tiny-dot" />
              Teaching · Research · Innovation
            </div>
          </article>

          <article className="about-card">
            <div className="card-icon">✧</div>

            <span className="card-label">EDUCATION</span>

            <h3>M.Tech</h3>

            <p>
              Computer Science and Information Security.
            </p>

            <div className="card-divider" />

            <strong>MNIT Jaipur</strong>

            <span className="subline">
              Malaviya National Institute of Technology
            </span>
          </article>

          <article className="about-card">
            <div className="card-icon">✦</div>

            <span className="card-label">
              RESEARCH PHILOSOPHY
            </span>

            <h3>Ideas into impact</h3>

            <p>
              Combining theoretical foundations with
              practical experimentation to develop
              meaningful technological solutions.
            </p>

            <div className="tag-row">
              <span>Explore</span>
              <span>Experiment</span>
              <span>Innovate</span>
            </div>
          </article>
        </div>
      </section>

      {/* RESEARCH INTERESTS */}

      <section className="research-section" id="research">
        <div className="section-wrap research-layout">
          <div>
            <span className="section-kicker">
              02 — RESEARCH INTERESTS
            </span>

            <h2>
              Exploring complex
              <br />
              computational challenges.
            </h2>

            <p className="section-intro">
              My research interests focus on intelligent
              systems, advanced learning architectures and
              secure computational frameworks.
            </p>

            <p className="script-accent">
              Learning without limits.
            </p>
          </div>

          <div className="interest-list">
            {researchAreas.map((area, index) => (
              <div className="interest-item" key={area}>
                <span className="interest-number">
                  0{index + 1}
                </span>

                <span>{area}</span>

                <span>↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="content-section section-wrap" id="projects">
        <div className="section-heading">
          <div>
            <span className="section-kicker">
              03 — SELECTED WORK
            </span>

            <h2>
              Research &amp; projects.
            </h2>

            <p className="script-accent">
              Ideas transformed into experiments.
            </p>
          </div>

          <p className="section-intro">
            Selected research projects and computational
            explorations across artificial intelligence,
            graph learning, quantum computing and security.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <div className="project-top">
                <span>{project.number}</span>
                <span>✧</span>
              </div>

              <span className="project-type">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PUBLICATIONS AND RESEARCH DIRECTIONS */}

      <section
        className="publication-section"
        id="publications"
      >
        <div className="section-wrap publication-layout">
          <div>
            <span className="section-kicker">
              04 — PUBLICATIONS &amp; RESEARCH
            </span>

            <h2>
              Knowledge through
              <br />
              <span className="script-accent">
                research and exploration.
              </span>
            </h2>

            <p className="section-intro">
              Research directions in intelligent computing,
              machine learning and information security.
            </p>
          </div>

          <div className="publication-list">
            {researchDirections.map((item, index) => (
              <article
                className="publication-item"
                key={item.title}
              >
                <span className="pub-kind">
                  RESEARCH · 0{index + 1}
                </span>

                <div>
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <span className="pub-note">
                    Research direction
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section
        className="contact-section section-wrap"
        id="contact"
      >
        <div className="contact-card">
          <span className="section-kicker">
            05 — LET US CONNECT
          </span>

          <h2>
            Great ideas begin
            <br />
            with a conversation.
          </h2>

          <p className="script-accent">
            Let us explore possibilities together.
          </p>

          <p>
            I welcome opportunities for academic collaboration,
            research discussions, knowledge sharing and
            innovative projects in artificial intelligence
            and intelligent computing.
          </p>

          <div className="contact-actions">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:"
              className="button button-secondary"
            >
              Email Me ✉
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="site-footer section-wrap">
        <div className="brand footer-brand">
          <div className="brand-mark">BK</div>

          <div className="brand-name">
            Bhoopendra Kumar
            <span className="brand-subtitle">
              Academic Portfolio
            </span>
          </div>
        </div>

        <span>
          © {new Date().getFullYear()} Bhoopendra Kumar.
          All rights reserved.
        </span>

        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>
    </main>
  );
}
