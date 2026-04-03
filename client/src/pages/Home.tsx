/**
 * SnugLegX — Coming Soon
 * Design Philosophy: Ultra-Luxury Editorial
 * Inspired by: Alo Yoga, Loewe, Sporty & Rich
 * 
 * Palette: Warm ivory (#FAF8F4), Deep charcoal (#1C1C1A), Gold (#B8965A)
 * Typography: Playfair Display (display) + Jost (body/UI)
 * Layout: Full-bleed hero, generous whitespace, asymmetric editorial grids
 * Responsive: Mobile-first, fluid at every breakpoint
 */

import { useEffect, useState, useRef } from "react";

// ── Brand Assets ──────────────────────────────────────────────────────────────
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
const HERO_IMG    = `${BASE}/assets/snuglegx-hero-light.webp`;
const ICON_LOGO   = `${BASE}/assets/snuglegx-icon.png`;
const WORDMARK    = `${BASE}/assets/snuglegx-wordmark-tight.png`;

// ── Design Tokens ─────────────────────────────────────────────────────────────
const IVORY  = "#FAF8F4";
const DARK   = "#1C1C1A";
const GOLD   = "#B8965A";
const GOLD2  = "#D4AF72";
const MUTED  = "#8A8880";
const BORDER = "rgba(184,150,90,0.2)";

// ── Launch Date ───────────────────────────────────────────────────────────────
const LAUNCH = new Date(Date.now() + 39 * 24 * 60 * 60 * 1000);

function useCountdown() {
  const calc = () => {
    const diff = Math.max(0, LAUNCH.getTime() - Date.now());
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, []);
  return t;
}

// ── Ticker Items ──────────────────────────────────────────────────────────────
const TICKER = ["LEGGINGS", "SPORTS BRAS", "SEAMLESS SETS", "HIGH-WAIST", "4-WAY STRETCH", "SQUAT-PROOF", "MOISTURE-WICKING", "SCULPT FIT"];

// ── Features ──────────────────────────────────────────────────────────────────
const FEATURES = [
  { n: "01", title: "SnugFlex™ Fabric",    body: "Proprietary 4-way stretch engineered to move with every rep, run, and rise. Zero restriction." },
  { n: "02", title: "Sculpt Waistband",    body: "High-waist construction that contours and supports without digging in. Stays in place all day." },
  { n: "03", title: "Moisture Control",    body: "Advanced sweat-wicking micro-mesh panels keep you dry and cool through the most intense sessions." },
  { n: "04", title: "Sustainable Craft",   body: "Made with recycled performance fibres and eco-conscious dyes. Premium quality, ethical production." },
  { n: "05", title: "Inclusive Sizing",    body: "Detailed fit guides and inclusive sizing from S to XL. Every silhouette designed to celebrate every body." },
  { n: "06", title: "Luxury Finish",       body: "Buttery-soft textures with a premium matte finish. Pilling-resistant and colour-fast, wash after wash." },
];

// ── Collections ───────────────────────────────────────────────────────────────
const COLLECTIONS = [
  { tag: "SIGNATURE", title: "Obsidian Collection", sub: "Classic black. Timeless power.", bg: "#1C1C1A", fg: IVORY, img: `${BASE}/assets/collection-obsidian.jpg` },
  { tag: "SOFT EDIT",  title: "Ivory & Gold",        sub: "Soft tones. Bold confidence.",  bg: "#F0EBE1", fg: DARK,  img: `${BASE}/assets/collection-ivory.jpg` },
  { tag: "MOTION",     title: "Motion Series",       sub: "Built for movement. Made for you.", bg: "#2A2A28", fg: IVORY, img: `${BASE}/assets/collection-motion.jpg` },
];

// ── Inline CSS ─────────────────────────────────────────────────────────────────
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Jost:wght@200;300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: ${IVORY};
    color: ${DARK};
    font-family: 'Jost', system-ui, sans-serif;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* ── Header ── */
  /* Mobile: flex, icon+wordmark left, social right */
  .slx-header {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 clamp(1.25rem, 5vw, 3.5rem);
    height: 72px;
    background: rgba(250,248,244,0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid ${BORDER};
  }
  /* Mobile-only header: flex layout */
  .slx-header-mobile-only {
    display: flex !important;
  }
  /* Desktop-only header: 3-col grid */
  .slx-header-desktop-only {
    display: none !important;
  }
  @media (min-width: 640px) {
    .slx-header-mobile-only {
      display: none !important;
    }
    .slx-header-desktop-only {
      display: grid !important;
      grid-template-columns: 1fr auto 1fr;
    }
  }
  .slx-header-logo {
    display: flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;
    justify-self: start;
  }
  .slx-header-icon { display: none; }
  .slx-header-wordmark {
    height: 28px;
    width: auto;
    max-width: 220px;
    object-fit: contain;
    display: block;
  }
  /* Mobile spinning icon next to wordmark */
  .slx-header-mobile-icon {
    width: 40px;
    height: 40px;
    object-fit: contain;
    animation: slx-spin 3s linear infinite;
    mix-blend-mode: multiply;
    flex-shrink: 0;
  }
  /* Desktop center spinning icon */
  .slx-header-center {
    display: none;
  }
  .slx-header-spin-icon {
    width: 34px;
    height: 34px;
    object-fit: contain;
    animation: slx-spin 3s linear infinite;
    mix-blend-mode: multiply;
  }
  @media (min-width: 640px) {
    .slx-header-mobile-icon { display: none; }
    .slx-header-center { display: flex; align-items: center; justify-content: center; }
  }
  /* Right nav */
  .slx-header-nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    justify-self: end;
  }
  .slx-header-nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }
  .slx-nav-link {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${DARK};
    text-decoration: none;
    font-size: 11px;
    letter-spacing: 2px;
    font-weight: 400;
    transition: color 0.2s;
  }
  .slx-nav-link:hover { color: ${GOLD}; }
  .slx-nav-label { display: none; }
  @media (min-width: 768px) { .slx-nav-label { display: inline; } }

  /* ── Hero ── */
  .slx-hero {
    position: relative;
    width: 100%;
    padding-top: 72px; /* header height */
  }
  .slx-hero-img-wrap {
    position: relative;
    width: 100%;
    /* Use a taller ratio so the full figure (head to feet) is always visible */
    aspect-ratio: 16 / 9;
    min-height: 400px;
    max-height: 95vh;
    overflow: hidden;
  }
  .slx-hero-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }
  /* Subtle gradient overlay on the left for text legibility */
  .slx-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(250,248,244,0.72) 0%,
      rgba(250,248,244,0.45) 35%,
      rgba(250,248,244,0.0) 65%
    );
    pointer-events: none;
  }
  /* Hero text — positioned over the image on the left */
  .slx-hero-text {
    position: absolute;
    top: 50%;
    left: clamp(1.25rem, 6vw, 5rem);
    transform: translateY(-50%);
    max-width: min(480px, 48%);
  }
  .slx-hero-eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1rem;
  }
  .slx-hero-eyebrow-line {
    width: 28px;
    height: 1px;
    background: ${GOLD};
    flex-shrink: 0;
  }
  .slx-hero-eyebrow-text {
    font-size: 10px;
    letter-spacing: 3px;
    color: ${GOLD};
    font-weight: 500;
    white-space: nowrap;
  }
  .slx-hero-h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1.8rem, 4.5vw, 5rem);
    font-weight: 400;
    line-height: 1.1;
    color: ${DARK};
    margin-bottom: 1.25rem;
  }
  .slx-hero-h1 em {
    font-style: italic;
    color: ${GOLD};
  }
  .slx-hero-tagline {
    font-size: clamp(0.75rem, 1.2vw, 0.95rem);
    line-height: 1.7;
    color: #5A5855;
    margin-bottom: 1.5rem;
    font-weight: 300;
  }
  /* Countdown inside hero */
  .slx-hero-countdown-label {
    font-size: 9px;
    letter-spacing: 3px;
    color: ${GOLD};
    font-weight: 500;
    margin-bottom: 0.6rem;
  }
  .slx-hero-countdown-row {
    display: flex;
    gap: clamp(0.4rem, 1.5vw, 0.875rem);
    margin-bottom: 1.5rem;
  }
  .slx-hero-countdown-unit {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
  .slx-hero-countdown-box {
    width: clamp(44px, 7vw, 64px);
    height: clamp(44px, 7vw, 64px);
    border: 1px solid rgba(28,28,26,0.2);
    background: rgba(250,248,244,0.55);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1rem, 2.5vw, 1.75rem);
    font-weight: 400;
    color: ${DARK};
  }
  .slx-hero-countdown-sub {
    font-size: 8px;
    letter-spacing: 2px;
    color: #5A5855;
    font-weight: 500;
  }
  /* Email form inside hero */
  .slx-hero-email-label {
    font-size: 9px;
    letter-spacing: 3px;
    color: ${GOLD};
    font-weight: 500;
    margin-bottom: 0.6rem;
    display: block;
  }
  .slx-hero-email-form {
    display: flex;
    gap: 0;
    max-width: min(380px, 100%);
  }
  .slx-hero-email-input {
    flex: 1;
    height: 44px;
    padding: 0 1rem;
    border: 1px solid rgba(28,28,26,0.25);
    border-right: none;
    background: rgba(250,248,244,0.7);
    backdrop-filter: blur(4px);
    font-size: 12px;
    color: ${DARK};
    font-family: 'Jost', sans-serif;
    outline: none;
    min-width: 0;
  }
  .slx-hero-email-input::placeholder { color: #9A9590; }
  .slx-hero-email-btn {
    height: 44px;
    padding: 0 1.25rem;
    background: ${DARK};
    color: #FAF8F4;
    font-size: 10px;
    letter-spacing: 2px;
    font-weight: 500;
    font-family: 'Jost', sans-serif;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.2s;
  }
  .slx-hero-email-btn:hover { background: ${GOLD}; }

  /* Spinning icon — vertical (Y-axis / coin flip) */
  @keyframes slx-spin {
    0%   { transform: rotateY(0deg); }
    100% { transform: rotateY(360deg); }
  }
  .slx-hero-spin-icon {
    width: clamp(36px, 5vw, 52px);
    height: clamp(36px, 5vw, 52px);
    object-fit: contain;
    animation: slx-spin 3s linear infinite;
    margin-bottom: 1rem;
    display: block;
    mix-blend-mode: multiply;
  }

  /* Mobile: hide overlay text, show mobile text block */
  .slx-hero-mobile-text {
    display: block;
    padding: 1.5rem 1.25rem 0;
  }
  @media (min-width: 541px) {
    .slx-hero-mobile-text { display: none; }
    .slx-hero-text { display: block; }
  }
  @media (max-width: 540px) {
    .slx-hero-text { display: none; }
    .slx-hero-img-wrap {
      aspect-ratio: 16 / 9;
      min-height: 200px;
      max-height: 60vw;
    }
  }

  /* ── Countdown ── */
  .slx-countdown-section {
    padding: clamp(2.5rem, 5vw, 4.5rem) clamp(1.25rem, 6vw, 5rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }
  .slx-countdown-label {
    font-size: 10px;
    letter-spacing: 3px;
    color: ${GOLD};
    font-weight: 500;
    margin-bottom: 1.25rem;
    text-align: center;
  }
  .slx-countdown-row {
    display: flex;
    gap: clamp(0.75rem, 2.5vw, 1.5rem);
    justify-content: center;
  }
  .slx-countdown-unit {
    text-align: center;
    min-width: 0;
  }
  .slx-countdown-box {
    width: clamp(56px, 10vw, 88px);
    height: clamp(56px, 10vw, 88px);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${BORDER};
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1.4rem, 3vw, 2.5rem);
    font-weight: 400;
    color: ${DARK};
    background: white;
  }
  .slx-countdown-sub {
    font-size: 8px;
    letter-spacing: 2px;
    color: ${MUTED};
    margin-top: 6px;
    display: block;
    text-align: center;
  }
  /* Email form */
  .slx-email-wrap {
    width: 100%;
    max-width: 480px;
    text-align: center;
  }
  .slx-email-label {
    font-size: 10px;
    letter-spacing: 3px;
    color: ${GOLD};
    font-weight: 500;
    margin-bottom: 0.75rem;
    display: block;
    text-align: center;
  }
  .slx-email-form {
    display: flex;
    width: 100%;
    border: 1px solid ${DARK};
    overflow: hidden;
  }
  .slx-email-input {
    flex: 1 1 0;
    min-width: 0;
    padding: 0.875rem 1rem;
    font-family: 'Jost', sans-serif;
    font-size: 13px;
    font-weight: 300;
    background: transparent;
    border: none;
    outline: none;
    color: ${DARK};
  }
  .slx-email-input::placeholder { color: ${MUTED}; }
  .slx-email-btn {
    flex-shrink: 0;
    padding: 0.875rem 1.5rem;
    background: ${DARK};
    color: ${IVORY};
    font-family: 'Jost', sans-serif;
    font-size: 11px;
    letter-spacing: 2.5px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.2s;
  }
  .slx-email-btn:hover { background: ${GOLD}; }

  /* ── Divider ── */
  .slx-divider {
    width: 100%;
    height: 1px;
    background: ${BORDER};
  }

  /* ── Ticker ── */
  .slx-ticker {
    background: ${DARK};
    overflow: hidden;
    padding: 0;
    height: 48px;
    display: flex;
    align-items: center;
  }
  .slx-ticker-track {
    display: flex;
    gap: 0;
    animation: ticker 28s linear infinite;
    white-space: nowrap;
    will-change: transform;
  }
  .slx-ticker-item {
    font-size: 10px;
    letter-spacing: 3px;
    font-weight: 500;
    color: ${IVORY};
    padding: 0 2rem;
    flex-shrink: 0;
  }
  .slx-ticker-dot {
    color: ${GOLD2};
    padding: 0 0.5rem;
  }
  @keyframes ticker {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  /* ── About Section ── */
  .slx-about {
    padding: clamp(4rem, 8vw, 7rem) clamp(1.25rem, 6vw, 5rem);
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    align-items: center;
  }
  @media (min-width: 768px) {
    .slx-about {
      grid-template-columns: 1fr 1fr;
      gap: clamp(3rem, 6vw, 6rem);
    }
  }
  .slx-about-eyebrow {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 1.25rem;
  }
  .slx-about-eyebrow-line {
    width: 40px;
    height: 1px;
    background: ${GOLD};
  }
  .slx-about-eyebrow-text {
    font-size: 10px;
    letter-spacing: 3px;
    color: ${GOLD};
    font-weight: 500;
  }
  .slx-about-h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 400;
    line-height: 1.15;
    color: ${DARK};
    margin-bottom: 1.5rem;
  }
  .slx-about-h2 em {
    font-style: italic;
    color: ${GOLD};
  }
  .slx-about-body {
    font-size: clamp(0.875rem, 1.2vw, 1rem);
    line-height: 1.85;
    color: #5A5855;
    font-weight: 300;
    max-width: 480px;
  }
  .slx-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
    padding-top: 2.5rem;
    border-top: 1px solid ${BORDER};
    margin-top: 2.5rem;
  }
  .slx-stat-num {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1.5rem, 3vw, 2.5rem);
    font-weight: 400;
    color: ${DARK};
    line-height: 1;
    margin-bottom: 0.4rem;
  }
  .slx-stat-label {
    font-size: 9px;
    letter-spacing: 2.5px;
    color: ${MUTED};
    font-weight: 500;
  }
  .slx-about-visual {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slx-about-model-img {
    width: 100%;
    max-width: 420px;
    height: auto;
    display: block;
    object-fit: contain;
    border-radius: 2px;
  }
  .slx-about-icon {
    width: 100%;
    max-width: 180px;
    height: auto;
    opacity: 0.85;
  }
  .slx-about-caption {
    text-align: center;
    margin-top: 1.25rem;
    font-size: 10px;
    letter-spacing: 3px;
    color: ${MUTED};
    font-weight: 500;
  }

  /* ── Features ── */
  .slx-features {
    padding: clamp(4rem, 8vw, 7rem) clamp(1.25rem, 6vw, 5rem);
    background: white;
  }
  .slx-section-header {
    margin-bottom: clamp(2.5rem, 5vw, 4rem);
  }
  .slx-section-eyebrow {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 1rem;
  }
  .slx-section-eyebrow-line {
    width: 40px;
    height: 1px;
    background: ${GOLD};
  }
  .slx-section-eyebrow-text {
    font-size: 10px;
    letter-spacing: 3px;
    color: ${GOLD};
    font-weight: 500;
  }
  .slx-section-h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1.75rem, 3.5vw, 3rem);
    font-weight: 400;
    line-height: 1.2;
    color: ${DARK};
  }
  .slx-section-h2 em {
    font-style: italic;
    color: ${GOLD};
  }
  .slx-features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    border-top: 1px solid ${BORDER};
  }
  @media (min-width: 600px) {
    .slx-features-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (min-width: 1024px) {
    .slx-features-grid { grid-template-columns: repeat(3, 1fr); }
  }
  .slx-feature-item {
    padding: clamp(1.5rem, 3vw, 2.5rem);
    border-bottom: 1px solid ${BORDER};
    border-right: none;
    transition: background 0.2s;
  }
  .slx-feature-item:hover { background: ${IVORY}; }
  @media (min-width: 600px) {
    .slx-feature-item:nth-child(odd) { border-right: 1px solid ${BORDER}; }
  }
  @media (min-width: 1024px) {
    .slx-feature-item { border-right: 1px solid ${BORDER}; }
    .slx-feature-item:nth-child(3n) { border-right: none; }
  }
  .slx-feature-num {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 2rem;
    font-weight: 400;
    color: ${BORDER};
    line-height: 1;
    margin-bottom: 1rem;
  }
  .slx-feature-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    font-weight: 500;
    color: ${DARK};
    margin-bottom: 0.75rem;
    line-height: 1.3;
  }
  .slx-feature-body {
    font-size: 13px;
    line-height: 1.75;
    color: #7A7875;
    font-weight: 300;
  }

  /* ── Collections ── */
  .slx-collections {
    padding: clamp(4rem, 8vw, 7rem) clamp(1.25rem, 6vw, 5rem);
  }
  .slx-collections-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;
    background: ${BORDER};
    border: 1px solid ${BORDER};
    margin-top: clamp(2.5rem, 5vw, 4rem);
  }
  @media (min-width: 768px) {
    .slx-collections-grid { grid-template-columns: repeat(3, 1fr); }
  }
  .slx-collection-card {
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    min-height: clamp(220px, 28vw, 340px);
    position: relative;
    overflow: hidden;
    transition: transform 0.3s;
  }
  .slx-collection-card:hover { transform: translateY(-2px); }
  .slx-collection-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: clamp(1.5rem, 3vw, 2.5rem);
    justify-content: flex-end;
  }
  .slx-collection-img-wrap {
    width: 42%;
    flex-shrink: 0;
    overflow: hidden;
  }
  .slx-collection-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    display: block;
  }
  .slx-collection-tag {
    font-size: 9px;
    letter-spacing: 3px;
    font-weight: 600;
    opacity: 0.6;
  }
  .slx-collection-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1.1rem, 2vw, 1.6rem);
    font-weight: 400;
    line-height: 1.2;
  }
  .slx-collection-sub {
    font-size: 13px;
    font-weight: 300;
    opacity: 0.7;
    line-height: 1.5;
  }
  .slx-collection-arrow {
    font-size: 1.25rem;
    opacity: 0.4;
    margin-top: 0.25rem;
  }

  /* ── Promise ── */
  .slx-promise {
    padding: clamp(4rem, 8vw, 7rem) clamp(1.25rem, 6vw, 5rem);
    background: ${DARK};
    text-align: center;
  }
  .slx-promise-eyebrow {
    font-size: 10px;
    letter-spacing: 3px;
    color: ${GOLD};
    font-weight: 500;
    margin-bottom: 1.5rem;
    display: block;
  }
  .slx-promise-h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1.75rem, 4vw, 3.5rem);
    font-weight: 400;
    color: ${IVORY};
    line-height: 1.2;
    max-width: 700px;
    margin: 0 auto 1.5rem;
  }
  .slx-promise-h2 em {
    font-style: italic;
    color: ${GOLD2};
  }
  .slx-promise-body {
    font-size: clamp(0.875rem, 1.2vw, 1rem);
    line-height: 1.85;
    color: rgba(250,248,244,0.6);
    font-weight: 300;
    max-width: 560px;
    margin: 0 auto 3rem;
  }
  .slx-promise-pillars {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: clamp(1.5rem, 4vw, 4rem);
    padding-top: 2.5rem;
    border-top: 1px solid rgba(184,150,90,0.2);
  }
  .slx-pillar {
    text-align: center;
  }
  .slx-pillar-word {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(1.25rem, 2vw, 1.75rem);
    font-weight: 400;
    color: ${IVORY};
    display: block;
    margin-bottom: 0.25rem;
  }
  .slx-pillar-label {
    font-size: 9px;
    letter-spacing: 3px;
    color: ${GOLD2};
    font-weight: 500;
  }

  /* ── Footer ── */
  .slx-footer {
    padding: clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 6vw, 5rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background: #1a1815;
    border-top: 1px solid rgba(184,150,90,0.4);
  }
  @media (min-width: 768px) {
    .slx-footer {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  .slx-footer-logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .slx-footer-icon {
    width: 56px;
    height: 56px;
    object-fit: contain;
    filter: invert(1) brightness(2);
    opacity: 0.9;
  }
  .slx-footer-wordmark {
    height: 44px;
    width: auto;
    max-width: 260px;
    object-fit: contain;
    filter: invert(1) brightness(2);
    opacity: 0.95;
  }
  .slx-footer-copy {
    font-size: 11px;
    color: rgba(250,248,244,0.55);
    letter-spacing: 1.5px;
    font-weight: 300;
  }
  .slx-footer-links {
    display: flex;
    gap: 2rem;
  }
  .slx-footer-link {
    font-size: 11px;
    letter-spacing: 2.5px;
    color: rgba(250,248,244,0.7);
    text-decoration: none;
    font-weight: 400;
    transition: color 0.2s;
  }
  .slx-footer-link:hover { color: ${GOLD2}; }

  /* ── Luxury Scroll Reveal ── */
  @keyframes slx-fadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes slx-fadeLeft {
    from { opacity: 0; transform: translateX(-28px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slx-fadeRight {
    from { opacity: 0; transform: translateX(28px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slx-scaleIn {
    from { opacity: 0; transform: scale(0.94); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes slx-lineGrow {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  @keyframes slx-heroEntrance {
    0%   { opacity: 0; transform: translateY(-50%) translateX(-18px); }
    100% { opacity: 1; transform: translateY(-50%) translateX(0); }
  }
  @keyframes slx-heroMobileEntrance {
    0%   { opacity: 0; transform: translateX(-18px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  @keyframes slx-counterPop {
    0%   { opacity: 0; transform: scale(0.7); }
    60%  { transform: scale(1.08); }
    100% { opacity: 1; transform: scale(1); }
  }

  /* Reveal base state — hidden until .slx-revealed is added */
  [data-reveal] {
    opacity: 0;
    transition: opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1);
  }
  [data-reveal='up']    { transform: translateY(36px); }
  [data-reveal='left']  { transform: translateX(-28px); }
  [data-reveal='right'] { transform: translateX(28px); }
  [data-reveal='scale'] { transform: scale(0.93); }
  [data-reveal].slx-revealed {
    opacity: 1 !important;
    transform: none !important;
  }

  /* Hero text entrance on load */
  .slx-hero-text {
    animation: slx-heroEntrance 1.1s cubic-bezier(0.22,1,0.36,1) 0.3s both;
  }
  .slx-hero-mobile-text {
    animation: slx-heroMobileEntrance 1s cubic-bezier(0.22,1,0.36,1) 0.2s both;
  }

  /* Eyebrow line draw */
  .slx-about-eyebrow-line,
  .slx-section-eyebrow-line {
    transform-origin: left center;
    animation: slx-lineGrow 0.8s cubic-bezier(0.22,1,0.36,1) 0.4s both;
  }

  /* Feature item hover lift */
  .slx-feature-item {
    transition: background 0.25s, transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s;
  }
  .slx-feature-item:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(28,28,26,0.07);
  }

  /* Collection card hover zoom image */
  .slx-collection-img {
    transition: transform 0.6s cubic-bezier(0.22,1,0.36,1);
  }
  .slx-collection-card:hover .slx-collection-img {
    transform: scale(1.06);
  }

  /* Pillar word shimmer on hover */
  .slx-pillar-word {
    transition: color 0.3s;
  }
  .slx-pillar:hover .slx-pillar-word { color: ${GOLD2}; }

  /* Stat number pop */
  .slx-stat-num {
    transition: color 0.3s;
  }
  .slx-stats:hover .slx-stat-num { color: ${GOLD}; }

  /* Countdown box pulse on second tick */
  @keyframes slx-tick {
    0%   { transform: scale(1); }
    15%  { transform: scale(1.04); }
    30%  { transform: scale(1); }
  }
  .slx-countdown-box { animation: slx-tick 1s ease; }

  /* Legacy fade classes kept for compatibility */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .slx-fade { animation: fadeUp 0.8s ease both; }
  .slx-fade-d1 { animation-delay: 0.1s; }
  .slx-fade-d2 { animation-delay: 0.25s; }
  .slx-fade-d3 { animation-delay: 0.4s; }
  .slx-fade-d4 { animation-delay: 0.55s; }
`;

// ── Icons ─────────────────────────────────────────────────────────────────────
function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}
function TkIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.17a8.16 8.16 0 0 0 4.77 1.52V7.25a4.85 4.85 0 0 1-1-.56z"/>
    </svg>
  );
}

// ── Scroll Reveal Hook ───────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = el.dataset.delay || '0';
          setTimeout(() => el.classList.add('slx-revealed'), Number(delay));
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function Home() {
  const { days, hours, minutes, seconds } = useCountdown();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(() => {
    try { return localStorage.getItem("slx_notified") === "1"; } catch { return false; }
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  useReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || submitting) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("https://formspree.io/f/xgopnnvj", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        try { localStorage.setItem("slx_notified", "1"); } catch {}
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const tickerItems = [...TICKER, ...TICKER]; // doubled for seamless loop

  return (
    <>
      <style>{CSS}</style>

      {/* ── HEADER MOBILE (< 640px): icon + wordmark left, social right ── */}
      <header className="slx-header slx-header-mobile-only">
        <a href="#" className="slx-header-logo">
          <img src={ICON_LOGO} alt="" className="slx-header-mobile-icon" />
          <img src={WORDMARK} alt="SNUGLEGX" className="slx-header-wordmark" />
        </a>
        <nav className="slx-header-nav">
          <a href="https://www.instagram.com/snuglegx" target="_blank" rel="noopener noreferrer" className="slx-nav-link">
            <IgIcon />
          </a>
          <a href="https://www.tiktok.com/@snuglegx_official" target="_blank" rel="noopener noreferrer" className="slx-nav-link">
            <TkIcon />
          </a>
        </nav>
      </header>

      {/* ── HEADER DESKTOP (≥ 640px): wordmark left, icon center, social right ── */}
      <header className="slx-header slx-header-desktop-only">
        <a href="#" className="slx-header-logo">
          <img src={WORDMARK} alt="SNUGLEGX" className="slx-header-wordmark" />
        </a>
        <div className="slx-header-center">
          <img src={ICON_LOGO} alt="SnugLegX" className="slx-header-spin-icon" />
        </div>
        <nav className="slx-header-nav">
          <a href="https://www.instagram.com/snuglegx" target="_blank" rel="noopener noreferrer" className="slx-nav-link">
            <IgIcon />
            <span className="slx-nav-label">INSTAGRAM</span>
          </a>
          <a href="https://www.tiktok.com/@snuglegx_official" target="_blank" rel="noopener noreferrer" className="slx-nav-link">
            <TkIcon />
            <span className="slx-nav-label">TIKTOK</span>
          </a>
        </nav>
      </header>

      {/* ── HERO ── */}
      <section className="slx-hero">
        <div className="slx-hero-img-wrap">
          <img
            src={HERO_IMG}
            alt="Woman in SnugLegX activewear running"
            className="slx-hero-img"
          />
          <div className="slx-hero-overlay" />
          {/* Text overlay — visible on tablet/desktop via CSS */}
          <div className="slx-hero-text">
            <div className="slx-hero-eyebrow">
              <div className="slx-hero-eyebrow-line" />
              <span className="slx-hero-eyebrow-text">WOMEN'S FITNESS APPAREL</span>
            </div>
            <h1 className="slx-hero-h1">
              Something<br /><em>extraordinary</em><br />is coming.
            </h1>
            <p className="slx-hero-tagline">
              Engineered for strength. Designed for her.<br />
              Built to move with you — every rep, every run, every rise.
            </p>
          </div>
        </div>

        {/* Text below image — only on mobile */}
        <div className="slx-hero-mobile-text">
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "0.875rem" }}>
            <div style={{ width: 24, height: 1, background: GOLD, flexShrink: 0 }} />
            <span style={{ fontSize: 10, letterSpacing: 2.5, color: GOLD, fontWeight: 500, whiteSpace: "nowrap" }}>WOMEN'S FITNESS APPAREL</span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.75rem, 8vw, 2.5rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            color: DARK,
            marginBottom: "0.75rem",
          }}>
            Something <em style={{ fontStyle: "italic", color: GOLD }}>extraordinary</em><br />is coming.
          </h1>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "#5A5855", fontWeight: 300 }}>
            Engineered for strength. Designed for her.
          </p>
        </div>
      </section>

      {/* ── COUNTDOWN + EMAIL ── */}
      <section className="slx-countdown-section" data-reveal="up">
        <div>
          <p className="slx-countdown-label">THE COLLECTION UNVEILS IN</p>
          <div className="slx-countdown-row">
            {[
              { v: days,    l: "DAYS" },
              { v: hours,   l: "HOURS" },
              { v: minutes, l: "MINS" },
              { v: seconds, l: "SECS" },
            ].map(({ v, l }) => (
              <div key={l} className="slx-countdown-unit">
                <div className="slx-countdown-box">{String(v).padStart(2, "0")}</div>
                <span className="slx-countdown-sub">{l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="slx-email-wrap">
          <span className="slx-email-label">BE THE FIRST TO KNOW</span>
          {submitted ? (
            <p style={{ fontSize: 13, color: GOLD, letterSpacing: 1, fontWeight: 400 }}>
              ✓ You're on the list — we'll be in touch.
            </p>
          ) : (
            <>
              <form className="slx-email-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  className="slx-email-input"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  disabled={submitting}
                />
                <button type="submit" className="slx-email-btn" disabled={submitting} style={{ opacity: submitting ? 0.7 : 1 }}>
                  {submitting ? "..." : "NOTIFY ME"}
                </button>
              </form>
              {error && <p style={{ fontSize: 12, color: "#c0392b", marginTop: 8, letterSpacing: 0.5 }}>{error}</p>}
            </>
          )}
        </div>
      </section>

      <div className="slx-divider" />

      {/* ── TICKER ── */}
      <div className="slx-ticker" aria-hidden="true">
        <div className="slx-ticker-track">
          {tickerItems.map((item, i) => (
            <span key={i} className="slx-ticker-item">
              {item}
              <span className="slx-ticker-dot">{i % 2 === 0 ? " ✦" : " ·"}</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section className="slx-about">
        <div data-reveal="left">
          <div className="slx-about-eyebrow">
            <div className="slx-about-eyebrow-line" />
            <span className="slx-about-eyebrow-text">WHAT WE'RE BUILDING</span>
          </div>
          <h2 className="slx-about-h2">
            Crafted For<br /><em>Every Woman</em>
          </h2>
          <p className="slx-about-body">
            SnugLegX is more than activewear — it's a second skin. Each piece is obsessively engineered to move with your body, support your ambitions, and make you feel unstoppable from the first rep to the last.
          </p>
          <div className="slx-stats">
            <div>
              <div className="slx-stat-num">40+</div>
              <div className="slx-stat-label">DAYS TO LAUNCH</div>
            </div>
            <div>
              <div className="slx-stat-num">S–XL</div>
              <div className="slx-stat-label">INCLUSIVE SIZING</div>
            </div>
            <div>
              <div className="slx-stat-num">100%</div>
              <div className="slx-stat-label">SQUAT-PROOF</div>
            </div>
          </div>
        </div>
        <div className="slx-about-visual" data-reveal="right">
          <img
            src={`${BASE}/assets/legging-model.jpg`}
            alt="SnugLegX legging model"
            className="slx-about-model-img"
          />
        </div>
      </section>

      <div className="slx-divider" />

      {/* ── FEATURES ── */}
      <section className="slx-features">
        <div className="slx-section-header" data-reveal="up">
          <div className="slx-section-eyebrow">
            <div className="slx-section-eyebrow-line" />
            <span className="slx-section-eyebrow-text">THE SNUGLEGX STANDARD</span>
          </div>
          <h2 className="slx-section-h2">
            Engineered to <em>Perform</em>
          </h2>
        </div>
        <div className="slx-features-grid">
          {FEATURES.map((f, i) => (
            <div key={f.n} className="slx-feature-item" data-reveal="up" data-delay={String(i * 80)}>
              <div className="slx-feature-num">{f.n}</div>
              <h3 className="slx-feature-title">{f.title}</h3>
              <p className="slx-feature-body">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── COLLECTIONS ── */}
      <section className="slx-collections">
        <div className="slx-section-header" data-reveal="up">
          <div className="slx-section-eyebrow">
            <div className="slx-section-eyebrow-line" />
            <span className="slx-section-eyebrow-text">LAUNCH COLLECTIONS</span>
          </div>
          <h2 className="slx-section-h2">
            Three Collections.<br /><em>One Standard.</em>
          </h2>
        </div>
        <div className="slx-collections-grid">
          {COLLECTIONS.map((c, i) => (
            <div
              key={c.title}
              className="slx-collection-card"
              data-reveal="up" data-delay={String(i * 120)}
              style={{ background: c.bg, color: c.fg }}
            >
              <div className="slx-collection-content">
                <span className="slx-collection-tag">{c.tag}</span>
                <h3 className="slx-collection-title">{c.title}</h3>
                <p className="slx-collection-sub">{c.sub}</p>
                <div className="slx-collection-arrow">→</div>
              </div>
              <div className="slx-collection-img-wrap">
                <img src={c.img} alt={c.title} className="slx-collection-img" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROMISE ── */}
      <section className="slx-promise" data-reveal="up">
        <span className="slx-promise-eyebrow">OUR PROMISE</span>
        <h2 className="slx-promise-h2">
          Where <em>Luxury</em> Meets Performance
        </h2>
        <p className="slx-promise-body">
          Every stitch, every seam, every fibre is chosen with intention. SnugLegX isn't just activewear — it's a statement. For women who refuse to compromise between looking extraordinary and performing at their peak.
        </p>
        <div className="slx-promise-pillars">
          {[
            { w: "Premium",  l: "MATERIALS" },
            { w: "Ethical",  l: "PRODUCTION" },
            { w: "Inclusive", l: "SIZING" },
            { w: "Luxury",   l: "FINISH" },
          ].map((p, i) => (
            <div key={p.l} className="slx-pillar" data-reveal="up" data-delay={String(i * 100)}>
              <span className="slx-pillar-word">{p.w}</span>
              <span className="slx-pillar-label">{p.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="slx-footer">
        <div className="slx-footer-logo">
          <img src={ICON_LOGO} alt="" className="slx-footer-icon" />
          <img src={WORDMARK} alt="SNUGLEGX" className="slx-footer-wordmark" />
        </div>
        <p className="slx-footer-copy">© {new Date().getFullYear()} SnugLegX. All rights reserved.</p>
        <div className="slx-footer-links">
          <a href="https://www.instagram.com/snuglegx" target="_blank" rel="noopener noreferrer" className="slx-footer-link">INSTAGRAM</a>
          <a href="https://www.tiktok.com/@snuglegx_official" target="_blank" rel="noopener noreferrer" className="slx-footer-link">TIKTOK</a>
        </div>
      </footer>
    </>
  );
}

// ── Hero Text Block (responsive: over image on md+, below image on mobile) ────
function HeroTextBlock() {
  return (
    <>
      {/* Mobile: below image */}
      <div style={{
        padding: "1.75rem 1.25rem 0",
        display: "block",
      }} className="slx-hero-text-mobile">
        <style>{`
          .slx-hero-text-mobile { display: block; }
          .slx-hero-text-desktop { display: none; }
          @media (min-width: 541px) {
            .slx-hero-text-mobile { display: none; }
            .slx-hero-text-desktop { display: block; }
          }
        `}</style>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "0.875rem" }}>
          <div style={{ width: 24, height: 1, background: GOLD, flexShrink: 0 }} />
          <span style={{ fontSize: 10, letterSpacing: 2.5, color: GOLD, fontWeight: 500, whiteSpace: "nowrap" }}>WOMEN'S FITNESS APPAREL</span>
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.75rem, 8vw, 2.5rem)",
          fontWeight: 400,
          lineHeight: 1.15,
          color: DARK,
          marginBottom: "0.75rem",
        }}>
          Something <em style={{ fontStyle: "italic", color: GOLD }}>extraordinary</em><br />is coming.
        </h1>
        <p style={{ fontSize: 14, lineHeight: 1.7, color: "#5A5855", fontWeight: 300 }}>
          Engineered for strength. Designed for her.
        </p>
      </div>

      {/* Desktop/Tablet: overlaid on image */}
      <div className="slx-hero-text-desktop" style={{
        position: "absolute",
        top: "calc(72px + 50%)",
        left: "clamp(1.25rem, 6vw, 5rem)",
        transform: "translateY(-50%)",
        maxWidth: "min(520px, 48%)",
        pointerEvents: "none",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: "1.25rem" }}>
          <div style={{ width: 32, height: 1, background: GOLD, flexShrink: 0 }} />
          <span style={{ fontSize: 10, letterSpacing: 3, color: GOLD, fontWeight: 500, whiteSpace: "nowrap" }}>WOMEN'S FITNESS APPAREL</span>
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(2rem, 4.5vw, 5rem)",
          fontWeight: 400,
          lineHeight: 1.1,
          color: DARK,
          marginBottom: "1.25rem",
        }}>
          Something<br /><em style={{ fontStyle: "italic", color: GOLD }}>extraordinary</em><br />is coming.
        </h1>
        <p style={{ fontSize: "clamp(0.8rem, 1.2vw, 1rem)", lineHeight: 1.75, color: "#5A5855", fontWeight: 300 }}>
          Engineered for strength. Designed for her.<br />
          Built to move with you — every rep, every run, every rise.
        </p>
      </div>
    </>
  );
}
