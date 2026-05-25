import React from 'react';

const FREE_FEATURES = [
  'Foretoken newsletter and dispatches',
  'Selected public articles and previews',
  'Limited sector rating summaries',
  'Macro banner access',
];

const PREMIUM_FEATURES = [
  'Full sector ratings with analysis',
  'Protocol-level coverage and ratings',
  'Complete watchlist (14+ active signals)',
  'All intelligence dossiers',
  'Macro exposure detail reports',
  'Early access to new sector initiations',
];

export default function Subscribe() {
  return (
    <div className="page-subscribe section">
      <div className="container">
        <div className="page-subscribe__hero">
          <div className="page-subscribe__eyebrow">Foretoken Concourse</div>
          <h1 className="page-subscribe__title">Subscription Plans</h1>
          <p className="page-subscribe__sub">
            Independent ratings and intelligence for tokenized private markets.
            Choose the tier that fits your workflow.
          </p>
        </div>

        <div className="page-subscribe__plans">
          {/* Free tier */}
          <div className="plan-full-card">
            <div className="plan-full-card__tier">Free</div>
            <div className="plan-full-card__name">Foretoken</div>
            <div className="plan-full-card__price">$0</div>
            <div className="plan-full-card__billing">No credit card required</div>
            <hr className="plan-full-card__divider" />
            <div className="plan-full-card__features">
              {FREE_FEATURES.map((f) => (
                <div className="plan-full-card__feature" key={f}>
                  <span className="plan-full-card__feature-icon">✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <a href="#" className="plan-full-card__cta plan-full-card__cta--outline">
              Continue Free →
            </a>
          </div>

          {/* Premium tier */}
          <div className="plan-full-card plan-full-card--featured">
            <div className="plan-full-card__tier">Premium</div>
            <div className="plan-full-card__name">Foretoken Concourse</div>
            <div className="plan-full-card__price">
              $19<span style={{ fontSize: 16, fontWeight: 400, color: 'var(--text-muted)' }}>/mo</span>
            </div>
            <div className="plan-full-card__billing">or $190/yr — save 2 months</div>
            <hr className="plan-full-card__divider" />
            <div className="plan-full-card__features">
              {PREMIUM_FEATURES.map((f) => (
                <div className="plan-full-card__feature" key={f}>
                  <span className="plan-full-card__feature-icon">✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <a
              href="#stripe-monthly"
              className="plan-full-card__cta plan-full-card__cta--primary"
              style={{ marginBottom: 10 }}
            >
              Subscribe Monthly — $19/mo →
            </a>
            <a
              href="#stripe-annual"
              className="plan-full-card__cta plan-full-card__cta--outline"
              style={{ marginTop: 8 }}
            >
              Subscribe Annually — $190/yr →
            </a>
          </div>
        </div>

        <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-muted)', marginTop: 40 }}>
          All subscriptions are billed through Stripe. Cancel anytime.
          Foretoken ratings are not investment advice.
        </p>
      </div>
    </div>
  );
}
