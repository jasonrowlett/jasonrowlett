import React from 'react';
import { Link } from 'react-router-dom';
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
          {data.dossiers.map((dossier) => {
            const locked = !dossier.isFree && !isPremium;
            return (
              <div className="dossier-card" key={dossier.id} style={{ position: 'relative' }}>
                <div className="dossier-card__meta">
                  <span className="dossier-card__sector">{dossier.sector}</span>
                  <span className="dossier-card__date">{dossier.date}</span>
                </div>
                <h3 className="dossier-card__title">{dossier.title}</h3>
                <p className="dossier-card__lede">{dossier.lede}</p>

                {dossier.isFree ? (
                  <Link to={dossier.href} className="dossier-card__link">
                    Read →
                  </Link>
                ) : (
                  <span className="dossier-card__link" style={{ color: 'var(--text-muted)' }}>
                    Subscribers only
                  </span>
                )}

                {locked && (
                  <PaywallGate
                    isPremium={false}
                    onSubscribe={onSubscribe}
                    message="This dossier is available to Concourse subscribers."
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
