  {
    number: "04", category: "COMPUTATIONAL INTELLIGENCE", title: "Hybrid Chaos-Based Image Encryption",
    description: "Investigating hybrid chaotic maps and their use in image-encryption workflows, including key evolution, confusion and diffusion.",
    tags: ["Chaotic Maps", "Image Encryption", "IoT"], icon: BrainCircuit
  }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Bhoopendra Kumar home">
          <span className="brand-mark">BK</span>
          <span className="brand-name">Bhoopendra Kumar<span className="brand-subtitle">Academic Portfolio</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {["About", "Research", "Projects", "Publications", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> ASSISTANT PROFESSOR · COMPUTER SCIENCE & APPLIED MATHEMATICS</div>
          <p className="hero-overline">Hello, I’m</p>
          <h1>Bhoopendra Kumar<span className="heading-period">.</span></h1>
          <h2 className="hero-subheading">Research, teaching and the thoughtful application of <span>artificial intelligence.</span></h2>
          <p className="hero-lede">I am an Assistant Professor in the Department of Computer Science and Applied Mathematics at VIPS-TC, Delhi. My academic interests include machine learning, graph neural networks, fraud detection and intelligent computational methods.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#research">Explore research <ArrowDown size={16} /></a>
            <a className="button button-secondary" href="#contact"><Mail size={16} /> Contact</a>
          </div>
          <div className="hero-meta">
            <div className="meta-item"><span className="meta-label">CURRENT POSITION</span><strong>Assistant Professor</strong></div>
            <span className="meta-divider" />
            <div className="meta-item"><span className="meta-label">INSTITUTION</span><strong>VIPS-TC, Delhi</strong></div>
            <span className="meta-divider" />
            <div className="meta-item"><span className="meta-label">ACADEMIC BACKGROUND</span><strong>M.Tech, MNIT Jaipur</strong></div>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Research themes">
          <div className="panel-topline"><span>RESEARCH PROFILE</span><span className="panel-index">01 — 04</span></div>
          <div className="research-emblem"><div className="emblem-ring ring-one" /><div className="emblem-ring ring-two" /><div className="emblem-core"><BrainCircuit size={47} strokeWidth={1.35} /></div><span className="emblem-dot dot-one" /><span className="emblem-dot dot-two" /><span className="emblem-dot dot-three" /></div>
          <div className="panel-bottom"><span className="panel-rule" /><div><strong>Intelligent systems</strong><p>Learning from data. Building with purpose.</p></div></div>
        </aside>
      </section>

      <section className="credential-strip">
        <div className="section-wrap credential-inner">
          <div><GraduationCap size={19} /><span>M.Tech · MNIT Jaipur</span></div>
          <div><BriefcaseBusiness size={18} /><span>VIPS-TC · Pitampura, Delhi</span></div>
          <div><BrainCircuit size={18} /><span>AI · ML · Graph Learning</span></div>
          <div><BookOpen size={18} /><span>Teaching & Research</span></div>
        </div>
      </section>

      <section className="content-section section-wrap" id="about">
        <div className="section-heading">
          <div><span className="section-kicker">01 / ABOUT</span><h2>Academic work grounded<br />in curiosity and practice.</h2></div>
          <p className="section-intro">I enjoy connecting theoretical ideas with practical experimentation. My work spans intelligent computational techniques, secure systems and computer science education, with an emphasis on clear methods and reproducible research.</p>
        </div>
        <div className="about-grid">
          <article className="about-card featured-about">
            <div className="card-icon"><GraduationCap size={22} /></div><span className="card-label">EDUCATION</span>
            <h3>Computer Science<br />& Information Security</h3>
            <p>Master of Technology from Malaviya National Institute of Technology, Jaipur.</p>
            <div className="card-divider" /><strong>MNIT Jaipur</strong><span className="subline">M.Tech · Computer Science and Information Security</span>
          </article>
          <article className="about-card">
            <div className="card-icon"><BriefcaseBusiness size={22} /></div><span className="card-label">CURRENT APPOINTMENT</span>
            <h3>Assistant Professor</h3>
            <p>Department of Computer Science and Applied Mathematics (CSAM).</p>
            <div className="about-foot"><span className="tiny-dot" /> VIPS-TC, Pitampura, Delhi</div>
          </article>
          <article className="about-card">
            <div className="card-icon"><Code2 size={22} /></div><span className="card-label">TECHNICAL PRACTICE</span>
            <h3>Experiment.<br />Evaluate. Improve.</h3>
            <p>Working with Python, PyTorch and graph-learning workflows to investigate research questions through implementation and evaluation.</p>
            <div className="tag-row"><span>Python</span><span>PyTorch</span><span>GNNs</span></div>
          </article>
        </div>
      </section>

      <section className="research-section" id="research">
        <div className="section-wrap research-layout">
          <div><span className="section-kicker">02 / RESEARCH</span><h2>Areas I’m interested<br />in exploring.</h2><p className="section-intro">Research interests evolve through questions, collaboration and experimentation. These are the themes that currently guide my work.</p></div>
          <div className="interest-list">{research.map((item, i) => <div className="interest-item" key={item}><span className="interest-number">0{i + 1}</span><span>{item}</span><ArrowUpRight size={17} /></div>)}</div>
        </div>
      </section>

      <section className="content-section section-wrap" id="projects">
        <div className="section-heading"><div><span className="section-kicker">03 / SELECTED WORK</span><h2>Research projects<br />and explorations.</h2></div><p className="section-intro">A selection of research projects and technical directions. Descriptions are brief overviews; publication status and project links can be added as each work is finalized.</p></div>
        <div className="project-grid">{projects.map((project) => { const Icon = project.icon; return <article className="project-card" key={project.number}><div className="project-top"><span>{project.number} / 04</span><Icon size={21} /></div><span className="project-type">{project.category}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>; })}</div>
      </section>

      <section className="publication-section" id="publications">
        <div className="section-wrap publication-layout">
          <div><span className="section-kicker">04 / PUBLICATIONS</span><h2>Research in progress<br />and scholarly work.</h2><p className="section-intro">Publication records should include verified bibliographic details. The entries below are research topics and should be updated with final status, venue and DOI before being presented as formal publications.</p></div>
          <div className="publication-list">
            <article className="publication-item"><span className="pub-kind">RESEARCH TOPIC</span><div><h3>VAE-TF: Variational Autoencoder Framework for Financial Fraud Detection</h3><p>Machine learning · Financial fraud detection</p><span className="pub-note">Add verified authors, publication venue, year and DOI if published.</span></div></article>
            <article className="publication-item"><span className="pub-kind">RESEARCH TOPIC</span><div><h3>Noise Analysis in Quantum Neural Networks</h3><p>Quantum machine learning · Noise robustness</p><span className="pub-note">Add current manuscript status and a publication link, if applicable.</span></div></article>
          </div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="contact-card"><div className="contact-mark">BK</div><span className="section-kicker">GET IN TOUCH</span><h2>Let’s exchange ideas<br />and explore possibilities.</h2><p>I welcome conversations around academic collaboration, research discussions, student projects and emerging directions in artificial intelligence and computer science.</p><div className="contact-actions"><a className="button button-primary" href="mailto:ADD-YOUR-EMAIL@example.com"><Mail size={16} /> Email me <ArrowUpRight size={16} /></a><span className="contact-placeholder">Replace the email link with your professional email before publishing.</span></div></div>
      </section>

      <footer className="site-footer section-wrap"><a className="brand footer-brand" href="#home"><span className="brand-mark">BK</span><span className="brand-name">Bhoopendra Kumar<span className="brand-subtitle">Academic Portfolio</span></span></a><span>Research · Teaching · Continuous learning</span><a href="#home" className="back-top">Back to top ↑</a></footer>
    </main>
  );
}
