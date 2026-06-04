import React, { useEffect } from 'react';

const MONTHLY_URL = import.meta.env.VITE_STRIPE_MONTHLY_URL || '#stripe-monthly';
const ANNUAL_URL  = import.meta.env.VITE_STRIPE_ANNUAL_URL  || '#stripe-annual';

export default function SubscribeModal({ onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="subscribe-modal-overlay" onClick={handleOverlayClick}>
      <div className="subscribe-modal">
        <button className="subscribe-modal__close" onClick={onClose} aria-label="Close">×</button>

        <div className="subscribe-modal__eyebrow">Foretoken Concourse</div>
        <div className="subscribe-modal__heading">Subscription Intelligence for Tokenized Private Markets</div>

        <div className="subscribe-modal__plans">
          <div className="plan-card">
            <div className="plan-card__tier">Free</div>
            <div className="plan-card__name">Foretoken</div>
            <div className="plan-card__features">
              <div className="plan-card__feature">Newsletters &amp; dispatches</div>
              <div className="plan-card__feature">Selected public articles</div>
              <div className="plan-card__feature">Limited sector previews</div>
              <div className="plan-card__feature">Macro banner access</div>
            </div>
            <div className="plan-card__price">$0</div>
            <div className="plan-card__price-note">Always free</div>
            <a href="#" className="plan-card__cta plan-card__cta--outline" onClick={onClose}>
              Continue Free →
            </a>
          </div>

          <div className="plan-card plan-card--featured">
            <div className="plan-card__tier">Premium</div>
            <div className="plan-card__name">Foretoken Concourse</div>
            <div className="plan-card__features">
              <div className="plan-card__feature">Full sector ratings &amp; analysis</div>
              <div className="plan-card__feature">Protocol-level coverage</div>
              <div className="plan-card__feature">Complete watchlist (14+ items)</div>
              <div className="plan-card__feature">All intelligence dossiers</div>
              <div className="plan-card__feature">Macro exposure detail</div>
            </div>
            <div className="plan-card__price">
              $19<span style={{ fontSize: 14, fontWeight: 400, color: 'var(--text-muted)' }}>/mo</span>
            </div>
            <div className="plan-card__price-note">or $490/yr — save 2 months</div>
            <a href={MONTHLY_URL} className="plan-card__cta plan-card__cta--primary" target="_blank" rel="noopener noreferrer">
              Subscribe Monthly →
            </a>
          </div>
        </div>

        <div className="subscribe-modal__annual">
          <span>Annual plan available —</span>
          <a href={ANNUAL_URL} target="_blank" rel="noopener noreferrer">
            Subscribe Annually at $490/yr →
          </a>
        </div>
      </div>
    </div>
  );
}
