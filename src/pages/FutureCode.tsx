import React from 'react';
import { Link } from 'react-router-dom';
import './FutureCode.css';

export const FutureCode: React.FC = () => {
  return (
    <div className="fc-page">

      {/* ── Hero ── */}
      <section className="fc-hero">
        <div className="fc-hero-inner">
          <div className="fc-eyebrow-row">
            <span className="fc-eyebrow">FUTURE CODE</span>
            <span className="fc-eyebrow-sep">·</span>
            <span className="fc-eyebrow fc-eyebrow-cohort">COHORT 2</span>
          </div>

          <h1>
            Build real AI products.<br />
            Get real skills.<br />
            Find a real pathway.
          </h1>

          <p className="fc-hero-sub">
            Future Code is DataBloom Africa's flagship data and AI training program. You learn by
            building the same products our solutions team ships, not throwaway exercises.
          </p>

          <div className="fc-stats">
            <div className="fc-stat">
              <span className="fc-stat-value">3 Aug</span>
              <span className="fc-stat-label">Cohort start</span>
            </div>
            <div className="fc-stat-divider" />
            <div className="fc-stat">
              <span className="fc-stat-value">12</span>
              <span className="fc-stat-label">Weeks</span>
            </div>
            <div className="fc-stat-divider" />
            <div className="fc-stat">
              <span className="fc-stat-value">30</span>
              <span className="fc-stat-label">Slots only</span>
            </div>
            <div className="fc-stat-divider" />
            <div className="fc-stat">
              <span className="fc-stat-value">Beginner</span>
              <span className="fc-stat-label">Friendly entry</span>
            </div>
          </div>

          <Link to="/programs/future-code/apply" className="fc-btn-primary fc-hero-cta">
            Apply now
          </Link>

          <p className="fc-trust-line">
            Cohort 1 placed students across various companies.
          </p>
        </div>
      </section>

      {/* ── What you'll learn ── */}
      <section className="fc-section fc-learn-section">
        <div className="fc-container">
          <div className="fc-section-label-row">
            <span className="fc-overline">PROGRAM STRUCTURE</span>
          </div>
          <h2 className="fc-section-title">What you'll learn</h2>

          <div className="fc-phases">
            {/* Phase 1 */}
            <div className="fc-phase-card">
              <div className="fc-phase-header">
                <span className="fc-phase-num">01</span>
                <div>
                  <h3>Skill Phase</h3>
                  <p className="fc-phase-meta">Weeks 1–4 &nbsp;·&nbsp; 2 sessions / week</p>
                </div>
              </div>
              <p className="fc-phase-desc">Foundations to applied AI, fast:</p>
              <ul className="fc-phase-list">
                <li>Python &amp; Git</li>
                <li>FastAPI</li>
                <li>React &amp; full-stack development</li>
                <li>LLMs &amp; RAG</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="fc-phase-card fc-phase-card-accent">
              <div className="fc-phase-header">
                <span className="fc-phase-num fc-phase-num-gold">02</span>
                <div>
                  <h3>Sprint Phase</h3>
                  <p className="fc-phase-meta">Weeks 5–12 &nbsp;·&nbsp; Mentor-supported</p>
                </div>
              </div>
              <p className="fc-phase-desc">
                Select 3 projects from a 20-project pool. Deliver a live 5-minute justification of
                your top choice. Then build a real DataBloom pipeline product end-to-end, culminating
                in Demo Day.
              </p>
            </div>
          </div>

          {/* Track bar — page ends here */}
          <div className="fc-track-bar">
            <div className="fc-track-item">
              <span className="fc-track-key">Track</span>
              <span className="fc-track-val">Full-stack + Applied AI / RAG</span>
            </div>
            <div className="fc-track-divider" />
            <div className="fc-track-item">
              <span className="fc-track-key">Entry level</span>
              <span className="fc-track-val">Near-beginner</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
