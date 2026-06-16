import React, { useState } from 'react';
import data from '../data/concourse.json';
import IntelModal from './IntelModal';

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
          onClose={() => setActiveReport(null)}
        />
      )}
    </section>
  );
}
