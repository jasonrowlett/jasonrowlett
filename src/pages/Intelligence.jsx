import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/concourse.json';
import IntelModal from '../components/IntelModal';

export default function Intelligence() {
  const [activeReport, setActiveReport] = useState(null);

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="section-header">
          <div className="section-header__label">Research</div>
          <h1 className="section-header__title">Intelligence Archive</h1>
          <p className="section-header__sub">
            Sector initiations, stress tests, macro exposure reports, and rating analyses.
          </p>
        </div>

        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 36 }}>
          Foretoken Intelligence publishes deep-format research covering tokenized private market sectors and the protocols operating within them. Each report connects to active sector ratings and watchlist signals on the Concourse dashboard.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {data.intelligenceReports.map((report) => (
            <div
              key={report.id}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 24,
                padding: '20px 0',
                borderBottom: '0.5px solid var(--border)',
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <span style={{
                    fontSize: 9,
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    padding: '2px 7px',
                    border: '0.5px solid var(--accent)',
                    color: 'var(--accent)',
                    borderRadius: 2,
                  }}>{report.badge}</span>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{report.date}</span>
                  <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>· {report.sector}</span>
                </div>
                <h2 style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.35, marginBottom: 6 }}>
                  {report.title}
                </h2>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                  {report.lede}
                </p>
              </div>
              <button
                onClick={() => setActiveReport(report)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  fontSize: 11,
                  fontWeight: 500,
                  color: 'var(--accent)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  paddingTop: 28,
                }}
              >
                View Brief →
              </button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 36, paddingTop: 24, borderTop: '0.5px solid var(--border)' }}>
          <Link to="/" style={{ fontSize: 13, color: 'var(--accent)', textDecoration: 'none' }}>
            ← Back to Concourse Dashboard
          </Link>
        </div>
      </div>

      {activeReport && (
        <IntelModal report={activeReport} onClose={() => setActiveReport(null)} />
      )}
    </div>
  );
}
