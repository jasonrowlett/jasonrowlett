import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/concourse.json';

const OUTLOOK_SYMBOLS = {
  stable: { symbol: '→', label: 'Stable' },
  positive: { symbol: '↑', label: 'Positive' },
  negative: { symbol: '↓', label: 'Negative' },
  watch: { symbol: '⚑', label: 'Watch' },
  constructive: { symbol: '↑', label: 'Constructive' },
  cautious: { symbol: '↓', label: 'Cautious' },
  developing: { symbol: '⚑', label: 'Developing' },
};

function getRatingTier(rating) {
  const base = rating.replace(/[+\-−]/g, '');
  if (['AAA', 'AA', 'A'].includes(base)) return { color: 'var(--green)', bg: 'rgba(26,158,110,0.12)', border: 'rgba(26,158,110,0.3)' };
  if (base === 'BBB') return { color: '#2a6dd9', bg: 'rgba(42,109,217,0.12)', border: 'rgba(42,109,217,0.3)' };
  if (base === 'BB') return { color: 'var(--amber)', bg: 'rgba(196,125,21,0.12)', border: 'rgba(196,125,21,0.3)' };
  return { color: 'var(--red)', bg: 'rgba(196,64,64,0.12)', border: 'rgba(196,64,64,0.3)' };
}

const SECTOR_ORDER = ['tokenized-treasuries', 'trade-finance', 'private-credit', 'precious-metals', 'real-estate', 'tokenized-equities'];

export default function Ratings() {
  const sectors = SECTOR_ORDER.map((id) => data.sectors.find((s) => s.id === id)).filter(Boolean);

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <div className="section-header">
          <div className="section-header__label">Coverage</div>
          <h1 className="section-header__title">Sector Ratings</h1>
          <p className="section-header__sub">
            Foretoken Concourse — Updated {data.lastUpdated}
          </p>
        </div>

        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 36 }}>
          Sector ratings reflect Foretoken's independent assessment of credit quality, transparency, liquidity, macro exposure, and operational integrity across each tokenized real-world asset category. Ratings are updated on a rolling basis as material conditions change.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {sectors.map((sector) => {
            const tier = getRatingTier(sector.rating);
            const outlook = OUTLOOK_SYMBOLS[sector.outlook] || { symbol: '→', label: sector.outlook };
            return (
              <div
                key={sector.id}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 20,
                  padding: '18px 0',
                  borderBottom: '0.5px solid var(--border)',
                }}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
                  flexShrink: 0,
                  minWidth: 64,
                }}>
                  <span style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: tier.color,
                    background: tier.bg,
                    border: `0.5px solid ${tier.border}`,
                    padding: '3px 10px',
                    borderRadius: 2,
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.04em',
                  }}>{sector.rating}</span>
                  <span style={{ fontSize: 10, color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                    {outlook.symbol} {outlook.label}
                  </span>
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 }}>
                    {sector.category}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 6 }}>
                    {sector.name}
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    {sector.rationale}
                  </p>
                </div>

                <div style={{ fontSize: 10, color: 'var(--text-muted)', flexShrink: 0, paddingTop: 20 }}>
                  {sector.lastReviewed}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 32, padding: '14px 16px', background: 'rgba(176,138,74,0.05)', border: '0.5px solid rgba(176,138,74,0.15)', borderRadius: 3 }}>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
            Ratings are independent analytical opinions and do not constitute investment advice.
            Protocol-level ratings within each sector are available to Concourse subscribers. See{' '}
            <Link to="/methodology" style={{ color: 'var(--accent)' }}>Methodology</Link> for scoring framework details.
          </p>
        </div>

        <div style={{ marginTop: 28 }}>
          <Link to="/" style={{ fontSize: 13, color: 'var(--accent)', textDecoration: 'none' }}>
            ← Back to Concourse Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
