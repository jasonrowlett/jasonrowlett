import React from 'react';
import { Link } from 'react-router-dom';

// Clerk <UserProfile /> and Stripe Customer Portal link wired in next build session
export default function Account() {
  return (
    <div className="page-centered">
      <div className="page-centered__card">
        <div className="page-centered__eyebrow">Foretoken Concourse</div>
        <h1 className="page-centered__title">Your Account</h1>
        <p className="page-centered__sub">
          Manage your subscription, billing, and profile settings.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button
            className="btn-primary"
            style={{ width: '100%', padding: '11px 20px', fontSize: 13 }}
            onClick={() => alert('Clerk user profile will be wired in the next build session.')}
          >
            Manage Profile →
          </button>
          <a
            href="#stripe-portal"
            className="plan-full-card__cta plan-full-card__cta--outline"
            style={{ padding: '11px 20px', fontSize: 13, textAlign: 'center', borderRadius: 2 }}
          >
            Manage Billing (Stripe Portal) →
          </a>
        </div>

        <p className="page-centered__note">
          To cancel or update your subscription, use the Stripe customer portal above.
          Questions? <a href="mailto:jason@foretoken.co">jason@foretoken.co</a>
        </p>
      </div>
    </div>
  );
}
