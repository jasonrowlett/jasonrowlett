import React from 'react';
import PaywallGate from './PaywallGate';

const PLACEHOLDER_CARDS = Array.from({ length: 6 });

export default function ProtocolSnapshots({ isPremium, onSubscribe }) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-header">
          <div className="section-header__label">Ratings</div>
          <h2 className="section-header__title">Protocol Coverage</h2>
          <p className="section-header__sub">Individual protocol ratings within each sector.</p>
        </div>

        <div className="protocol-wrapper">
          <div className="protocol-blur">
            <div className="protocol-placeholder-grid">
              {PLACEHOLDER_CARDS.map((_, i) => (
                <div key={i} className="protocol-placeholder-card">
                  <div className="protocol-placeholder-card__title" />
                  <div className="protocol-placeholder-card__line" />
                  <div className="protocol-placeholder-card__line protocol-placeholder-card__line--short" />
                </div>
              ))}
            </div>
          </div>

          <PaywallGate
            isPremium={isPremium}
            onSubscribe={onSubscribe}
            message="Protocol-level ratings are available to Concourse subscribers."
          />
        </div>
      </div>
    </section>
  );
}
