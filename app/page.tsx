const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Research", "research"],
  ["Projects", "projects"],
  ["Teaching", "teaching"],
  ["Writing", "writing"],
  ["Contact", "contact"],
] as const;

const researchAreas = [
  { number: "01", title: "Artificial Intelligence", detail: "Learning systems that support intelligent decision-making." },
  { number: "02", title: "Graph Neural Networks", detail: "Graph representation learning for complex relational data." },
  { number: "03", title: "Fraud & Anomaly Detection", detail: "Discovering suspicious patterns in large-scale data." },
  { number: "04", title: "Trustworthy Computing", detail: "Exploring privacy-aware and secure intelligent systems." },
];

const projects = [
  { tag: "GRAPH LEARNING · FRAUD DETECTION", name: "UGEM-CCL", description: "An evidential graph-learning framework for fraud detection, designed to reason over complex and imbalanced relational data." },
  { tag: "PRIVACY · CRYPTOGRAPHY", name: "PQ-MPC", description: "A post-quantum secure multi-party computation direction for confidential neural-network inference." },
  { tag: "DEEP LEARNING · FINANCE", name: "VAE-TF", description: "A variational-autoencoder-based framework exploring representation learning for financial fraud detection." },
  { tag: "BLOCKCHAIN · EDGE / IoT", name: "LedgerCache", description: "A blockchain-enabled secure caching concept for edge and Internet-of-Things environments." },
];

const work = [
  { year: "2024", title: "Image Encryption using Chaotic Maps", note: "Exploration of Logistic, Arnold Cat and Henon maps for image-encryption applications." },
  { year: "Research", title: "VAE-TF: Variational Autoencoder Framework for Financial Fraud Detection", note: "Deep generative representation learning for financial fraud detection." },
  { year: "Research", title: "Graph Learning for Fraud Detection", note: "Evidential learning and graph neural network approaches for relational fraud datasets." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Bhoopendra Kumar home">
          <span className="brand-mark">BK<span>.</span></span>
          <span className="brand-copy"><strong>Bhoopendra Kumar</strong><small>Academic Portfolio</small></span>
        </a>
        <nav className="top-nav" aria-label="Main navigation">
          {navItems.map(([label, id], index) => (
            <a className={index === 0 ? "nav-link active" : "nav-link"} href={`#${id}`} key={id}>{label}</a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s connect <span>↗</span></a>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> ASSISTANT PROFESSOR · VIPS-TC, DELHI</div>
          <h1>Curious about<br />intelligence. <em>Driven</em><br />by research.</h1>
          <p className="hero-lede">I&apos;m Bhoopendra Kumar, working at the intersection of computer science, applied mathematics and intelligent systems.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#research">Explore my research <span>↗</span></a>
            <a className="text-link" href="#about">A little about me <span>↓</span></a>
          </div>
          <div className="hero-meta"><span>AI / ML / DL</span><i /> <span>Graph Learning</span><i /> <span>Fraud Detection</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract network visualization">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="art-core"><span>AI</span><b>✳</b></div>
          <div className="art-node node-a" /><div className="art-node node-b" /><div className="art-node node-c" /><div className="art-node node-d" />
          <div className="art-label label-top">LEARNING SYSTEMS <span>↗</span></div>
          <div className="art-label label-bottom">DATA · MODELS · DISCOVERY</div>
          <div className="art-index">01 <span> / 07</span></div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>NEW IDEAS, OPEN QUESTIONS</span></div>
      </section>

      <section className="intro section-wrap" id="about">
        <div className="section-kicker">01 / ACADEMIC PROFILE</div>
        <div className="intro-grid">
          <h2>Researcher.<br /><em>Educator.</em><br />Problem solver.</h2>
          <div className="intro-text"><p>I am an Assistant Professor in the Department of Computer Science and Applied Mathematics at Vivekananda Institute of Professional Studies – Technical Campus (VIPS-TC), Delhi.</p><p>My interests span artificial intelligence, machine learning, deep learning and graph neural networks, with applications in fraud and anomaly detection. I enjoy connecting theoretical ideas with practical computational challenges.</p><a className="underlined-link" href="#contact">Get in touch <span>↗</span></a></div>
        </div>
        <div className="facts-row">
          <div><small>01 / EDUCATION</small><strong>M.Tech</strong><span>Computer Science & Information Security · MNIT Jaipur</span></div>
          <div><small>02 / EDUCATION</small><strong>B.Tech</strong><span>Computer Science Engineering · VBSPU Jaunpur</span></div>
          <div><small>03 / QUALIFICATION</small><strong>GATE</strong><span>Qualified</span></div>
          <div><small>04 / CURRENT ROLE</small><strong>Faculty</strong><span>VIPS-TC · Delhi</span></div>
        </div>
      </section>

      <section className="research section-wrap" id="research">
        <div className="section-heading"><div><div className="section-kicker">02 / QUESTIONS I EXPLORE</div><h2>Research <em>interests</em></h2></div><p>Building intelligent methods to understand complex data and make computational systems more useful, reliable and responsible.</p></div>
        <div className="research-grid">{researchAreas.map((item) => <article className="research-card" key={item.number}><div className="card-top"><span>{item.number}</span><span>↗</span></div><h3>{item.title}</h3><p>{item.detail}</p><div className="card-rule" /></article>)}</div>
      </section>

      <section className="projects section-wrap" id="projects">
        <div className="section-heading"><div><div className="section-kicker">03 / SELECTED WORK</div><h2>Ideas into <em>projects</em></h2></div><p>A selection of research directions and technical projects across graph learning, secure computation and intelligent analytics.</p></div>
        <div className="project-list">{projects.map((project, index) => <article className="project-row" key={project.name}><span className="project-number">0{index + 1}</span><div className="project-main"><small>{project.tag}</small><h3>{project.name}</h3><p>{project.description}</p></div><span className="project-arrow">↗</span></article>)}</div>
      </section>

      <section className="teaching section-wrap" id="teaching">
        <div className="section-kicker">04 / TEACHING & ACADEMIC LIFE</div>
        <div className="teaching-grid"><h2>Making concepts<br />clear. <em>Making curiosity</em><br />contagious.</h2><div><p>Teaching is an opportunity to turn fundamentals into confidence. My academic work connects core computer science concepts with hands-on problem solving and current research.</p><div className="topic-chips"><span>Python Programming</span><span>Data Structures</span><span>Computer Organization</span><span>Computer Networks</span><span>Applied Mathematics</span></div></div></div>
      </section>

      <section className="writing section-wrap" id="writing">
        <div className="section-heading"><div><div className="section-kicker">05 / RESEARCH OUTPUT</div><h2>Research notes & <em>writing</em></h2></div><p>Selected research themes and work in progress. Publication venues, DOI details and final bibliographic information can be added as verified records are available.</p></div>
        <div className="writing-list">{work.map((item, index) => <article className="writing-item" key={item.title}><span>{item.year}</span><div><h3>{item.title}</h3><p>{item.note}</p></div><span className="writing-arrow">↗</span></article>)}</div>
      </section>

      <section className="contact section-wrap" id="contact">
        <div className="section-kicker">06 / START A CONVERSATION</div>
        <div className="contact-grid"><h2>Have a question<br />or an idea? <em>Let&apos;s talk.</em></h2><div><p>I&apos;m interested in meaningful academic conversations, research collaborations and opportunities to work on challenging problems in intelligent computing.</p><a className="button button-light" href="https://github.com/BhupiiKr" target="_blank" rel="noreferrer">Find me on GitHub <span>↗</span></a><div className="contact-foot"><span>VIPS-TC · PITAMPURA, DELHI</span><a href="https://github.com/BhupiiKr" target="_blank" rel="noreferrer">GITHUB ↗</a></div></div></div>
      </section>
      <footer className="site-footer"><a className="brand" href="#home"><span className="brand-mark">BK<span>.</span></span><span className="brand-copy"><strong>Bhoopendra Kumar</strong><small>Academic Portfolio</small></span></a><span>Designed for curiosity and discovery.</span><a href="#home">BACK TO TOP ↑</a><small>© {new Date().getFullYear()} Bhoopendra Kumar</small></footer>
    </main>
  );
}
