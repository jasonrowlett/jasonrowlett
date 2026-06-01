import React from 'react';
import { UserProfile, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const MONTHLY_URL = import.meta.env.VITE_STRIPE_MONTHLY_URL || '#stripe-monthly';

export default function Account() {
  const { user } = useUser();
  const isPremium = user?.publicMetadata?.isPremium === true;

  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-header__label">Account</div>
          <h1 className="section-header__title">Your Concourse Account</h1>
        </div>

        <div style={{ marginBottom: 28, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          {isPremium ? (
            <a
              href={import.meta.env.VITE_STRIPE_PORTAL_URL || '#stripe-portal'}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Manage Billing (Stripe Portal) →
            </a>
          ) : (
            <>
              <a
                href={MONTHLY_URL}
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Upgrade to Premium — $19/mo →
              </a>
              <Link to="/subscribe" style={{ fontSize: 13, color: 'var(--text-muted)' }}>
                View plans
              </Link>
            </>
          )}
        </div>

        <UserProfile
          appearance={{
            variables: {
              colorPrimary: '#B08A4A',
              colorBackground: '#111318',
              colorInputBackground: '#0a0b0d',
              colorText: '#e8e6e0',
              colorInputText: '#e8e6e0',
              colorTextSecondary: '#6b6a65',
              borderRadius: '4px',
            },
            elements: {
              card: {
                background: '#111318',
                border: '0.5px solid #1e2028',
                boxShadow: 'none',
              },
              avatarImageActionsUpload: { color: '#B08A4A' },
              fileDropAreaIconBox: { color: '#B08A4A' },
            },
          }}
        />
      </div>
    </div>
  );
}
