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
