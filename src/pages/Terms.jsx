import React from 'react';

const SECTIONS = [
  {
    title: 'Acceptance of Terms',
    body: 'By accessing or using Foretoken Concourse, you agree to be bound by these Terms of Use. If you do not agree, do not use the service.',
  },
  {
    title: 'Nature of the Service',
    body: 'Foretoken Concourse provides independent analytical ratings and intelligence coverage for tokenized real-world asset markets. All content is provided for informational purposes only. Nothing on this platform constitutes investment advice, financial advice, trading advice, or a recommendation to buy, sell, or hold any asset.',
  },
  {
    title: 'Not Investment Advice',
    body: 'Foretoken is not a registered investment adviser, broker-dealer, or financial institution. Concourse ratings are analytical opinions reflecting Foretoken\'s independent judgment at the time of publication. Ratings may change without notice. Past ratings are not indicative of future analytical conclusions or asset performance.',
  },
  {
    title: 'Subscriptions and Billing',
    body: 'Premium subscriptions are billed through Stripe. You may cancel at any time; cancellation takes effect at the end of the current billing period. Refunds are not provided for partial subscription periods except as required by applicable law. Foretoken reserves the right to modify subscription pricing with reasonable notice.',
  },
  {
    title: 'Intellectual Property',
    body: 'All content on Foretoken Concourse — including ratings, analysis, intelligence reports, and methodology documentation — is the intellectual property of Foretoken. You may not reproduce, redistribute, or commercialize this content without written permission. Personal, non-commercial use for reference purposes is permitted.',
  },
  {
    title: 'Limitation of Liability',
    body: 'To the maximum extent permitted by law, Foretoken shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of or reliance on content published on this platform. Tokenized asset markets involve significant risk including loss of principal, liquidity risk, regulatory uncertainty, and smart contract risk.',
  },
  {
    title: 'Modifications',
    body: 'Foretoken reserves the right to modify these terms at any time. Material changes will be communicated to subscribers by email. Continued use of the service after notification constitutes acceptance of the modified terms.',
  },
  {
    title: 'Governing Law',
    body: 'These terms are governed by the laws of the State of Texas, United States. Any disputes arising under these terms shall be resolved in the courts of Travis County, Texas.',
  },
];

export default function Terms() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 680 }}>
        <div className="section-header">
          <div className="section-header__label">Legal</div>
          <h1 className="section-header__title">Terms of Use</h1>
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
              Questions about these terms? Contact us at{' '}
              <a href="mailto:info@foretoken.xyz" style={{ color: 'var(--accent)' }}>info@foretoken.xyz</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
