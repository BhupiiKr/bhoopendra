
"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  BookOpen,
  GraduationCap,
  Microscope,
  ShieldCheck,
  Network,
  Cpu,
  Code2,
  Mail,
  Menu,
  X,
  ExternalLink,
  Lightbulb,
  Database,
  Fingerprint,
} from "lucide-react";

const researchAreas = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence & Machine Learning",
  },
  {
    icon: Network,
    title: "Graph Neural Networks & Deep Learning",
  },
  {
    icon: ShieldCheck,
    title: "Intelligent Fraud & Anomaly Detection",
  },
  {
    icon: Cpu,
    title: "Privacy-Preserving Machine Learning",
  },
  {
    icon: Database,
    title: "Secure Computing & Blockchain",
  },
];

const projects = [
  {
    number: "01",
    category: "GRAPH INTELLIGENCE",
    title: "UGEM-CCL",
    description:
      "An evidential learning and graph neural network framework for detecting fraudulent activities in complex graph-structured data.",
    tags: ["GNN", "Fraud Detection", "Evidential Learning"],
    icon: Network,
  },
  {
    number: "02",
    category: "PRIVACY-PRESERVING AI",
    title: "PQ-MPC",
    description:
      "A post-quantum secure multi-party computation framework for confidential neural network inference.",
    tags: ["Post-Quantum", "MPC", "CKKS"],
    icon: Fingerprint,
  },
  {
    number: "03",
    category: "INTELLIGENT SECURITY",
    title: "VAE-TF",
    description:
      "A variational autoencoder-based framework designed for identifying complex and previously unseen financial fraud patterns.",
    tags: ["VAE", "Financial Fraud", "Deep Learning"],
    icon: BrainCircuit,
  },
  {
    number: "04",
    category: "COMPUTATIONAL INTELLIGENCE",
    title: "Hybrid Chaos-Based Image Encryption",
    description:
      "Investigating hybrid chaotic maps and their use in image-encryption workflows, including key evolution, confusion and diffusion.",
    tags: ["Chaotic Maps", "Image Encryption", "IoT"],
    icon: Microscope,
  },
  {
    number: "05",
    category: "BLOCKCHAIN & EDGE COMPUTING",
    title: "LedgerCache",
    description:
      "Exploring blockchain-enabled secure caching mechanisms for edge computing and resource-constrained IoT environments.",
    tags: ["Blockchain", "Edge Computing", "IoT"],
    icon: Database,
  },
  {
    number: "06",
    category: "QUANTUM COMPUTING",
    title: "Quantum Neural Networks",
    description:
      "Investigating noise characteristics, computational behaviour and learning capabilities of quantum neural network models.",
    tags: ["QNN", "PennyLane", "Quantum ML"],
    icon: Cpu,
  },
];

const publications = [
  {
    kind: "RESEARCH",
    title: "Hybrid Chaos System for Secure Image Encryption",
    description:
      "Research on combining chaotic maps for image encryption, with applications in IoT security.",
    status: "Research work",
  },
  {
    kind: "RESEARCH",
    title: "Variational Autoencoder Framework for Financial Fraud Detection",
    description:
      "Deep learning-based exploration of anomaly detection in financial transaction data.",
    status: "Research work",
  },
  {
    kind: "RESEARCH",
    title: "Post-Quantum Secure Multi-Party Computation",
    description:
      "Investigating confidential neural network inference using post-quantum cryptographic techniques.",
    status: "Research work",
  },
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
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#research" onClick={closeMenu}>Research</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#publications" onClick={closeMenu}>Publications</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a
            href="#contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Get in touch <ArrowUpRight size={14} />
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
            Researcher. Educator. Innovator.
          </p>

          <h1>
            Exploring the
            <br />
            intelligent
            <br />
            future<span className="heading-period">.</span>
          </h1>

          <p className="hero-subheading">
            Researching the intersection of
            <span> AI, security & intelligent systems.</span>
          </p>

          <p className="hero-lede">
            I am an academic and researcher interested in building
            intelligent, reliable and privacy-aware computing systems.
            My research explores how artificial intelligence, machine
            learning and emerging computational technologies can
            address real-world challenges.
          </p>

          <div className="hero-actions">
            <a href="#research" className="button button-primary">
              Explore my research <ArrowRight size={15} />
            </a>
            <a href="#contact" className="button button-secondary">
              <Mail size={14} /> Contact me
            </a>
          </div>

          <div className="hero-meta">
            <div className="meta-item">
              <span className="meta-label">CURRENT ROLE</span>
              <strong>Assistant Professor</strong>
            </div>

            <div className="meta-divider" />

            <div className="meta-item">
              <span className="meta-label">AFFILIATION</span>
              <strong>VIPS-TC, Delhi</strong>
            </div>

            <div className="meta-divider" />

            <div className="meta-item">
              <span className="meta-label">FOCUS</span>
              <strong>AI · Security · ML</strong>
            </div>
          </div>
        </div>

        <div className="hero-panel">
          <div className="panel-topline">
            <span>RESEARCH & INNOVATION</span>
            <span className="panel-index">FIG. 01</span>
          </div>

          <div className="research-emblem">
            <div className="emblem-ring ring-one" />
            <div className="emblem-ring ring-two" />
            <span className="emblem-dot dot-one" />
            <span className="emblem-dot dot-two" />
            <span className="emblem-dot dot-three" />

            <div className="emblem-core">
              <BrainCircuit size={51} strokeWidth={1.25} />
            </div>
          </div>

          <div className="panel-bottom">
            <span className="panel-rule" />
            <div>
              <strong>Intelligence meets innovation.</strong>
              <p>Exploring ideas. Engineering possibilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIAL STRIP */}

      <div className="credential-strip">
        <div className="credential-inner section-wrap">
          <div>
            <GraduationCap size={19} />
            M.Tech · MNIT Jaipur
          </div>
          <div>
            <BookOpen size={18} />
            Academic Research
          </div>
          <div>
            <BrainCircuit size={18} />
            Artificial Intelligence
          </div>
          <div>
            <Code2 size={18} />
            Computational Intelligence
          </div>
        </div>
      </div>

      {/* ABOUT */}

      <section className="content-section section-wrap" id="about">
        <div className="section-heading">
          <div>
            <span className="section-kicker">01 — ABOUT ME</span>
            <h2>
              A passion for
              <br />
              learning and discovery.
            </h2>
          </div>

          <p className="section-intro">
            Bridging academic teaching, scientific exploration and
            practical computing to contribute towards the next
            generation of intelligent technologies.
          </p>
        </div>

        <div className="about-grid">
          <article className="about-card featured-about">
            <div className="card-icon">
              <GraduationCap size={22} />
            </div>
            <span className="card-label">ACADEMIC PROFILE</span>
            <h3>Educator & Researcher</h3>
            <p>
              Currently serving as an Assistant Professor in the
              Department of Computer Science and Applied Mathematics
              at Vivekananda Institute of Professional Studies –
              Technical Campus, Delhi.
            </p>
            <div className="about-foot">
              <span className="tiny-dot" />
              Teaching · Research · Innovation
            </div>
          </article>

          <article className="about-card">
            <div className="card-icon">
              <Microscope size={22} />
            </div>
            <span className="card-label">EDUCATION</span>
            <h3>M.Tech</h3>
            <p>
              Computer Science and Information Security
            </p>
            <div className="card-divider" />
            <strong>MNIT Jaipur</strong>
            <span className="subline">
              Malaviya National Institute of Technology
            </span>
          </article>

          <article className="about-card">
            <div className="card-icon">
              <Lightbulb size={22} />
            </div>
            <span className="card-label">RESEARCH PHILOSOPHY</span>
            <h3>Ideas into impact</h3>
            <p>
              I believe in combining theoretical foundations
              with practical experimentation to develop
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
            <span className="section-kicker">02 — RESEARCH INTERESTS</span>
            <h2>
              Exploring complex
              <br />
              computational challenges.
            </h2>
            <p className="section-intro">
              My research interests focus on intelligent systems,
              advanced learning architectures and secure
              computational frameworks.
            </p>
          </div>

          <div className="interest-list">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <div className="interest-item" key={area.title}>
                  <span className="interest-number">
                    0{index + 1}
                  </span>
                  <span>{area.title}</span>
                  <Icon size={17} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="content-section section-wrap" id="projects">
        <div className="section-heading">
          <div>
            <span className="section-kicker">03 — SELECTED WORK</span>
            <h2>
              Research & projects.
            </h2>
          </div>

          <p className="section-intro">
            A selection of research directions and computational
            projects exploring the possibilities of intelligent
            and secure systems.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number}</span>
                  <Icon size={21} />
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
            );
          })}
        </div>
      </section>

      {/* PUBLICATIONS */}

      <section
        className="publication-section"
        id="publications"
      >
        <div className="section-wrap publication-layout">
          <div>
            <span className="section-kicker">
              04 — PUBLICATIONS & RESEARCH
            </span>
            <h2>
              Knowledge through
              <br />
              research.
            </h2>
            <p className="section-intro">
              Research directions and ongoing explorations in
              intelligent computing, machine learning and
              information security.
            </p>
          </div>

          <div className="publication-list">
            {publications.map((publication, index) => (
              <article
                className="publication-item"
                key={publication.title}
              >
                <span className="pub-kind">
                  {publication.kind} · 0{index + 1}
                </span>

                <div>
                  <h3>{publication.title}</h3>
                  <p>{publication.description}</p>
                  <span className="pub-note">
                    {publication.status}
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
            05 — Let&apos;s connect
          </span>

          <h2>
            Have an idea?
            <br />
            I&apos;m an academic
          </h2>

          <p>
            I welcome opportunities for academic collaboration,
            research discussions, knowledge sharing and innovative
            projects in artificial intelligence and intelligent
            computing.
          </p>

          <div className="contact-actions">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="button button-primary"
            >
              Connect on LinkedIn
              <ExternalLink size={14} />
            </a>

            <a
              href="#home"
              className="button button-secondary"
            >
              Back to top <ArrowDown size={14} />
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
