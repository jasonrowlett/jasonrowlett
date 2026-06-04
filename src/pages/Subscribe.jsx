import React from 'react';
import { Link } from 'react-router-dom';

const MONTHLY_URL = import.meta.env.VITE_STRIPE_MONTHLY_URL || '#stripe-monthly';
const ANNUAL_URL  = import.meta.env.VITE_STRIPE_ANNUAL_URL  || '#stripe-annual';

const FREE_FEATURES = [
  'Foretoken newsletter and public dispatches',
  'Selected public articles and previews',
  'Limited sector rating summaries',
  'Macro signal previews',
];

const PREMIUM_FEATURES = [
  'Full sector ratings and analysis',
  'Protocol ratings and scorecards',
  'Five-pillar risk assessments',
  'Intelligence dossier archive',
  'Macro exposure analysis',
  'Premium newsletter access',
  'Ongoing ratings updates',
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
            <Link to="/login" className="plan-full-card__cta plan-full-card__cta--outline">
              Continue Free →
            </Link>
          </div>

          {/* Premium tier */}
          <div className="plan-full-card plan-full-card--featured">
            <div className="plan-full-card__tier">Premium</div>
            <div className="plan-full-card__name">Foretoken Concourse</div>
            <div className="plan-full-card__price">
              $49<span style={{ fontSize: 16, fontWeight: 400, color: 'var(--text-muted)' }}>/mo</span>
            </div>
            <div className="plan-full-card__billing">or $490/yr — save 2 months</div>
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
              href={MONTHLY_URL}
              className="plan-full-card__cta plan-full-card__cta--primary"
              style={{ marginBottom: 10 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe Monthly — $49/mo →
            </a>
            <a
              href={ANNUAL_URL}
              className="plan-full-card__cta plan-full-card__cta--outline"
              style={{ marginTop: 8 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe Annually — $490/yr →
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
