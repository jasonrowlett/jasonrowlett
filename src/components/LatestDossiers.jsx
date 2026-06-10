import React, { useState, useEffect } from 'react';
import data from '../data/concourse.json';

function IntelModal({ report, onClose }) {
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
      <div className="sector-modal sector-modal--intel" role="dialog" aria-modal="true" aria-labelledby="intel-modal-title">
        <div className="sector-modal__header">
          <button className="sector-modal__close" onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className="sector-modal__body">
          <div className="intel-modal__meta">
            <span className="intel-modal__badge">{report.badge}</span>
            <span className="intel-modal__date">{report.date}</span>
            <span className="intel-modal__sector">· {report.sector}</span>
          </div>
          <h2 id="intel-modal-title" className="intel-modal__title">{report.title}</h2>
          <p className="intel-modal__summary">{report.summary || report.lede}</p>
          {report.foretokenLine && (
            <div className="intel-modal__thesis">
              <p>"{report.foretokenLine}"</p>
            </div>
          )}
          {report.keyTakeaways && report.keyTakeaways.length > 0 && (
            <div className="intel-modal__section">
              <div className="intel-modal__label">Key Takeaways</div>
              <ul className="intel-modal__takeaways">
                {report.keyTakeaways.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )}
          {report.ratingImplications && (
            <div className="intel-modal__section">
              <div className="intel-modal__label">Rating Implications</div>
              <p className="intel-modal__implications">{report.ratingImplications}</p>
            </div>
          )}
          <div className="intel-modal__cta">
            <a href={report.beehiivUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Read Full Analysis →
            </a>
          </div>
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
          <p className="section-header__sub">Sector initiations, stress tests, and macro exposure reports.</p>
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
        <IntelModal report={activeReport} onClose={() => setActiveReport(null)} />
      )}
    </section>
  );
}
