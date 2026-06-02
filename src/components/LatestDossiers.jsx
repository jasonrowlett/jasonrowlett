import React from 'react';
import data from '../data/concourse.json';
import PaywallGate from './PaywallGate';

export default function LatestDossiers({ isPremium, onSubscribe }) {
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
          {data.intelligenceReports.map((report) => {
            const locked = !report.isFree && !isPremium;
            return (
              <div className="dossier-card" key={report.id} style={{ position: 'relative' }}>
                <div className="dossier-card__meta">
                  <span className="dossier-card__sector">{report.badge}</span>
                  <span className="dossier-card__date">{report.date}</span>
                </div>
                <h3 className="dossier-card__title">{report.title}</h3>
                <p className="dossier-card__lede">{report.lede}</p>
                {report.foretokenLine && (
                  <p style={{ fontSize: 12, color: 'var(--text-muted)', fontStyle: 'italic', marginTop: 8 }}>
                    "{report.foretokenLine}"
                  </p>
                )}

                {report.isFree ? (
                  <span className="dossier-card__link">Read →</span>
                ) : (
                  <span className="dossier-card__link" style={{ color: 'var(--text-muted)' }}>
                    {isPremium ? 'Read →' : 'Subscribers only'}
                  </span>
                )}

                {locked && (
                  <PaywallGate
                    isPremium={false}
                    onSubscribe={onSubscribe}
                    message="This report is available to Concourse subscribers."
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
