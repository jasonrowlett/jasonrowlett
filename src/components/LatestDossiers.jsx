import React, { useState, useEffect } from 'react';
import data from '../data/concourse.json';
import PaywallGate from './PaywallGate';

function IntelModal({ report, isPremium, onClose, onSubscribe }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="sector-modal" role="dialog" aria-modal="true" aria-labelledby="intel-modal-title">
        <div className="sector-modal__header">
          <button className="sector-modal__close" onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className="sector-modal__body">
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontSize: 9, fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', padding: '2px 7px', border: '0.5px solid var(--accent)', color: 'var(--accent)', borderRadius: 2 }}>
              {report.badge}
            </span>
            <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>{report.date}</span>
            <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>· {report.sector}</span>
          </div>

          <h2 id="intel-modal-title" style={{ fontSize: 18, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 16, lineHeight: 1.35 }}>
            {report.title}
          </h2>

          <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: 20 }}>
            {report.lede}
          </p>

          {report.foretokenLine && (
            <div style={{ padding: '12px 16px', borderLeft: '2px solid var(--accent)', marginBottom: 20 }}>
              <p style={{ fontSize: 13, color: 'var(--accent)', fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>
                "{report.foretokenLine}"
              </p>
            </div>
          )}

          {isPremium ? (
            <div style={{ padding: '14px 16px', background: 'rgba(176,138,74,0.06)', border: '0.5px solid rgba(176,138,74,0.2)', borderRadius: 3 }}>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: 0 }}>
                Full report access coming to the intelligence archive. This brief reflects the published analysis.
              </p>
            </div>
          ) : (
            <div className="sector-modal__paywall">
              <p>Full intelligence reports are available to Concourse subscribers.</p>
              <button className="btn-primary" onClick={onSubscribe}>
                Subscribe for Full Access →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LatestDossiers({ isPremium, onSubscribe }) {
  const [activeReport, setActiveReport] = useState(null);

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-header">
          <div className="section-header__label">Research</div>
          <h2 className="section-header__title">Intelligence</h2>
          <p className="section-header__sub">
            Sector initiations, stress tests, and macro exposure reports.
          </p>
        </div>

        <div className="dossiers-grid">
          {data.intelligenceReports.map((report) => (
            <div className="dossier-card" key={report.id}>
              <div className="dossier-card__meta">
                <span className="dossier-card__sector">{report.badge}</span>
                <span className="dossier-card__date">{report.date}</span>
              </div>
              <h3 className="dossier-card__title">{report.title}</h3>
              <p className="dossier-card__lede">{report.lede}</p>
              {report.foretokenLine && (
                <p style={{ fontSize: 12, color: 'var(--text-muted)', fontStyle: 'italic', marginTop: 8, marginBottom: 12 }}>
                  "{report.foretokenLine}"
                </p>
              )}
              <button
                className="dossier-card__link"
                onClick={() => setActiveReport(report)}
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}
              >
                View brief →
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeReport && (
        <IntelModal
          report={activeReport}
          isPremium={isPremium}
          onClose={() => setActiveReport(null)}
          onSubscribe={() => {
            setActiveReport(null);
            onSubscribe();
          }}
        />
      )}
    </section>
  );
}
