"use client";

import { useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, BookOpen, BrainCircuit, BriefcaseBusiness,
  Code2, GraduationCap, Mail, Menu, Network, ShieldCheck, Sparkles, X
} from "lucide-react";

const projects = [
  {
    number: "01",
    type: "GRAPH MACHINE LEARNING",
    title: "Uncertainty-Guided Graph Learning",
    description:
      "Exploring evidential learning and consistency-aware objectives for more reliable fraud detection on graph-structured data.",
    tags: ["GNNs", "Evidential Learning", "Fraud Detection"],
    icon: Network
  },
  {
    number: "02",
    type: "PRIVACY-PRESERVING AI",
    title: "Post-Quantum Secure Inference",
    description:
      "A proposed hybrid HE–MPC direction for confidential neural-network inference using lattice-based cryptographic techniques.",
    tags: ["CKKS", "MPC", "Secure ML"],
    icon: ShieldCheck
  },
  {
    number: "03",
    type: "BLOCKCHAIN · EDGE COMPUTING",
    title: "LedgerCache",
    description:
      "A blockchain-enabled edge caching concept that pairs off-chain payload storage with verifiable on-chain metadata.",
    tags: ["Blockchain", "IoT", "Edge Computing"],
    icon: Code2
  },
  {
    number: "04",
    type: "COMPUTATIONAL INTELLIGENCE",
    title: "Chaos-Based Image Encryption",
    description:
      "Investigating hybrid chaotic maps for image encryption, including key evolution, confusion and diffusion mechanisms.",
    tags: ["Chaotic Maps", "Image Security", "IoT"],
    icon: BrainCircuit
  }
];

const research = [
  "Trustworthy machine learning & graph neural networks",
  "Fraud detection and uncertainty-aware AI",
  "Privacy-preserving and post-quantum secure computation",
  "Blockchain, edge computing and IoT security",
  "Computational intelligence and image encryption"
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  async function copyEmail() {
    const email = "your.email@example.com";
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <main>
      <div className="top-glow" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Home">
          <span className="brand-mark">CS</span>
          <span>Academic<span className="muted-brand"> / Portfolio</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          {["About", "Research", "Projects", "Publications", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> ASSISTANT PROFESSOR · COMPUTER SCIENCE</div>
          <h1>Researching the space where <span className="gradient-text">AI, security</span> &amp; intelligent systems meet.</h1>
          <p className="hero-lede">
            I’m a Computer Science and Engineering academic interested in building intelligent,
            reliable and privacy-aware computing systems—and helping the next generation of
            technologists learn to build them.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
            <a className="button button-secondary" href="#contact"><Mail size={16} /> Contact me</a>
          </div>
          <div className="hero-meta">
            <div className="meta-item"><span className="meta-label">CURRENT ROLE</span><strong>Assistant Professor</strong></div>
            <div className="meta-divider" />
            <div className="meta-item"><span className="meta-label">AFFILIATION</span><strong>VIPS-TC, Delhi</strong></div>
            <div className="meta-divider" />
            <div className="meta-item"><span className="meta-label">FOCUS</span><strong>AI · Security · ML</strong></div>
          </div>
        </div>
        <div className="hero-visual" aria-label="Abstract network illustration">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-orbit orbit-three" />
          <div className="visual-core"><BrainCircuit size={52} strokeWidth={1.15} /></div>
          <div className="float-card float-card-top"><span className="float-icon purple"><Network size={16} /></span><span><b>Graph Learning</b><small>Structure · Signals · Patterns</small></span></div>
          <div className="float-card float-card-bottom"><span className="float-icon green"><ShieldCheck size={16} /></span><span><b>Trustworthy AI</b><small>Privacy · Robustness · Trust</small></span></div>
          <div className="visual-caption">EXPLORING COMPLEXITY, BUILDING TRUST</div>
          <span className="node node-a" /><span className="node node-b" /><span className="node node-c" /><span className="node node-d" />
        </div>
      </section>

      <section className="quick-strip">
        <div className="section-wrap strip-inner">
          <div><Sparkles size={17} /><span>Research-led teaching</span></div>
          <div><BrainCircuit size={17} /><span>Machine learning &amp; AI</span></div>
          <div><ShieldCheck size={17} /><span>Security &amp; privacy</span></div>
          <div><BookOpen size={17} /><span>Continuous learning</span></div>
        </div>
      </section>

      <section className="content-section section-wrap" id="about">
        <div className="section-heading">
          <div><span className="section-kicker">A LITTLE ABOUT ME</span><h2>Curiosity, research<br />and the classroom.</h2></div>
          <p className="section-intro">My work brings together applied machine learning, secure computing, and practical computer science education. I enjoy turning research questions into experiments, systems, and ideas that students can explore.</p>
        </div>
        <div className="about-grid">
          <article className="about-card featured-about">
            <div className="card-icon"><GraduationCap size={22} /></div>
            <span className="card-label">ACADEMIC JOURNEY</span>
            <h3>Learning deeply.<br />Teaching clearly.</h3>
            <p>Master’s-level training in Computer Science and Information Security, with a foundation in Computer Science Engineering and a continuing interest in research.</p>
            <div className="mini-line" />
            <strong>MNIT Jaipur</strong><span className="subline">M.Tech · Computer Science and Information Security</span>
          </article>
          <article className="about-card">
            <div className="card-icon"><BriefcaseBusiness size={22} /></div>
            <span className="card-label">CURRENT APPOINTMENT</span>
            <h3>Assistant Professor</h3>
            <p>Computer Science and Applied Mathematics (CSAM)</p>
            <div className="about-foot"><span className="tiny-dot" /> VIPS-TC, Pitampura, Delhi</div>
          </article>
          <article className="about-card">
            <div className="card-icon"><Code2 size={22} /></div>
            <span className="card-label">BEYOND THE THEORY</span>
            <h3>Build, test, refine.</h3>
            <p>Hands-on experimentation with Python, deep-learning frameworks, graph learning, and reproducible research workflows.</p>
            <div className="tag-row"><span>Python</span><span>PyTorch</span><span>Research</span></div>
          </article>
        </div>
      </section>

      <section className="research-section" id="research">
        <div className="section-wrap research-layout">
          <div>
            <span className="section-kicker">RESEARCH INTERESTS</span>
            <h2>Questions worth<br />working on.</h2>
            <p className="section-intro">I’m interested in methods that make intelligent systems more useful, dependable, and secure in real-world settings.</p>
          </div>
          <div className="interest-list">
            {research.map((item, i) => (
              <div className="interest-item" key={item}>
                <span className="interest-number">0{i + 1}</span><span>{item}</span><ArrowUpRight size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section section-wrap" id="projects">
        <div className="section-heading">
          <div><span className="section-kicker">SELECTED WORK</span><h2>Projects &amp; ideas<br />in progress.</h2></div>
          <p className="section-intro">A snapshot of research directions and technical projects. Project descriptions are concise summaries; update each entry with final publication status and repository links before publishing.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.number}>
                <div className="project-top"><span>{project.number} / 04</span><Icon size={21} /></div>
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="publication-section" id="publications">
        <div className="section-wrap publication-layout">
          <div>
            <span className="section-kicker">PUBLICATIONS</span>
            <h2>Ideas shared<br />with the community.</h2>
            <p className="section-intro">Add verified citations, publication venues, years, and DOI or publisher links here so readers can go directly to your work.</p>
          </div>
          <div className="publication-list">
            <article className="publication-item">
              <span className="pub-year">RESEARCH PAPER</span>
              <div><h3>VAE-TF: Variational Autoencoder Framework for Financial Fraud Detection</h3><p>Machine learning · Financial fraud detection</p><span className="pub-note">Add authors, venue, year and DOI</span></div>
              <span className="pub-link"><ArrowUpRight size={18} /></span>
            </article>
            <article className="publication-item">
              <span className="pub-year">RESEARCH DIRECTION</span>
              <div><h3>Noise Analysis in Quantum Neural Networks</h3><p>Quantum machine learning · Noise robustness</p><span className="pub-note">Add current manuscript status and link</span></div>
              <span className="pub-link"><ArrowUpRight size={18} /></span>
            </article>
          </div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="contact-card">
          <div className="contact-orb" />
          <span className="section-kicker">LET’S CONNECT</span>
          <h2>Have a research idea<br />or teaching collaboration?</h2>
          <p>I&apos;m open to thoughtful conversations about research, academic collaboration, student projects, and emerging directions in AI and secure computing.</p>
          <div className="contact-actions">
            <button className="button button-primary" onClick={copyEmail}><Mail size={16} /> {copied ? "Email copied" : "Copy email placeholder"}</button>
            <a className="button button-secondary" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Find me on LinkedIn <ArrowUpRight size={16} /></a>
          </div>
          <p className="contact-note">Before publishing: replace the email placeholder and LinkedIn URL with your actual details.</p>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">CS</span><span>Academic<span className="muted-brand"> / Portfolio</span></span></a>
        <span>Designed for research, teaching &amp; ideas.</span>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
    </main>
  );
}
