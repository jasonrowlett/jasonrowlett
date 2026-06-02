import React from 'react';

export default function Contact() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 560 }}>
        <div className="section-header">
          <div className="section-header__label">Foretoken</div>
          <h1 className="section-header__title">Contact</h1>
          <p className="section-header__sub">
            Questions, feedback, or press inquiries.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ padding: '20px 22px', background: 'var(--surface)', border: '0.5px solid var(--border)', borderRadius: 3 }}>
            <div style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>General Inquiries</div>
            <a
              href="mailto:info@foretoken.xyz"
              style={{ fontSize: 15, color: 'var(--accent)', fontFamily: 'var(--font-mono)', textDecoration: 'none' }}
            >
              info@foretoken.xyz
            </a>
          </div>

          <div style={{ padding: '20px 22px', background: 'var(--surface)', border: '0.5px solid var(--border)', borderRadius: 3 }}>
            <div style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>Location</div>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', margin: 0 }}>Austin, Texas</p>
          </div>

          <div style={{ padding: '16px 18px', background: 'rgba(176,138,74,0.05)', border: '0.5px solid rgba(176,138,74,0.15)', borderRadius: 3 }}>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
              Foretoken does not accept unsolicited rating requests or commercial arrangements that could compromise analytical independence. All ratings are issued at Foretoken's sole discretion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
