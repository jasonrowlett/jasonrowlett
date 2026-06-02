import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 680 }}>
        <div className="section-header">
          <div className="section-header__label">Foretoken</div>
          <h1 className="section-header__title">About Concourse</h1>
          <p className="section-header__sub">
            Independent ratings and intelligence for tokenized private markets.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div>
            <h2 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 10, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>What We Do</h2>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Foretoken Concourse provides analytical ratings and intelligence coverage for tokenized real-world asset (RWA) sectors and protocols. We evaluate six sectors — Tokenized Treasuries, Private Credit, Trade Finance, Real Estate, Tokenized Equities, and Precious Metals — using a five-pillar framework designed specifically for the structural characteristics of on-chain private markets.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 10, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Why It Matters</h2>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Tokenized RWA markets have grown to $68B+ in TVL. Institutional capital is entering. But the analytical infrastructure to evaluate these assets has not kept pace. Traditional credit frameworks do not account for smart contract risk, redemption mechanics, or on-chain transparency gaps. We built Concourse to fill that gap.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 10, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>What We Are Not</h2>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Foretoken is not a registered investment adviser. Concourse ratings are independent analytical opinions — not investment advice, buy/sell recommendations, or guarantees of performance. We have no commercial relationships with rated protocols. Ratings reflect our analytical judgment at time of publication and are subject to change.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 10, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Based In</h2>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              Austin, Texas · foretoken.xyz
            </p>
          </div>

          <div style={{ paddingTop: 8 }}>
            <Link to="/methodology" style={{ fontSize: 13, color: 'var(--accent)', textDecoration: 'none' }}>
              Read our rating methodology →
            </Link>
            <span style={{ margin: '0 16px', color: 'var(--border)' }}>|</span>
            <Link to="/contact" style={{ fontSize: 13, color: 'var(--accent)', textDecoration: 'none' }}>
              Contact us →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
