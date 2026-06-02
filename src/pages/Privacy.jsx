import React from 'react';

const SECTIONS = [
  {
    title: 'Information We Collect',
    body: 'When you subscribe to Foretoken Concourse, we collect your email address and payment information (processed by Stripe — we do not store card details). We collect standard server logs and analytics data (page views, session duration) to improve the service.',
  },
  {
    title: 'How We Use Your Information',
    body: 'We use your email address to send the Foretoken newsletter and service notifications. We use Stripe to manage billing and subscriptions. We do not sell, rent, or share your personal information with third parties for marketing purposes.',
  },
  {
    title: 'Authentication',
    body: 'Account authentication is handled by Clerk. Your login credentials and session data are managed by Clerk in accordance with their privacy policy. We store only your subscription status (free or premium) in our systems.',
  },
  {
    title: 'Cookies and Tracking',
    body: 'We use cookies for authentication session management and basic analytics. We do not use third-party advertising trackers. You can disable cookies in your browser settings, though this may affect site functionality.',
  },
  {
    title: 'Data Retention',
    body: 'We retain your account data for as long as your account is active. You may request deletion of your account and associated data by contacting info@foretoken.xyz. Stripe retains billing records in accordance with their data retention policies.',
  },
  {
    title: 'Security',
    body: 'We use industry-standard encryption (TLS) for data transmission. Passwords are not stored — authentication is managed by Clerk. Payment data is handled by Stripe, which maintains PCI compliance.',
  },
  {
    title: 'Changes to This Policy',
    body: 'We may update this privacy policy as our service evolves. Material changes will be communicated to subscribers by email. Continued use of the service after notification constitutes acceptance of the updated policy.',
  },
];

export default function Privacy() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 680 }}>
        <div className="section-header">
          <div className="section-header__label">Legal</div>
          <h1 className="section-header__title">Privacy Policy</h1>
          <p className="section-header__sub">Last updated: June 2026</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <h2 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 8, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>{s.title}</h2>
              <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{s.body}</p>
            </div>
          ))}

          <div style={{ padding: '14px 16px', background: 'var(--surface)', border: '0.5px solid var(--border)', borderRadius: 3 }}>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', margin: 0 }}>
              Questions about this policy? Contact us at{' '}
              <a href="mailto:info@foretoken.xyz" style={{ color: 'var(--accent)' }}>info@foretoken.xyz</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
