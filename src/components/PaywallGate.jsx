import React from 'react';

export default function PaywallGate({ isPremium, onSubscribe, message }) {
  if (isPremium) return null;

  return (
    <div className="paywall-gate">
      <div className="paywall-gate__card">
        <div className="paywall-gate__icon">🔒</div>
        <div className="paywall-gate__heading">
          {message || 'This content is available to Concourse subscribers.'}
        </div>
        <p className="paywall-gate__sub">
          Access full protocol ratings, intelligence dossiers, and the complete watchlist.
        </p>
        <button className="btn-primary" onClick={onSubscribe}>
          Subscribe for Access →
        </button>
      </div>
    </div>
  );
}
