import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/concourse.json';

const COLUMNS = [
  { key: 'downgrades',     label: 'Downgrades',     color: '#c44040', showChange: true  },
  { key: 'upgrades',       label: 'Upgrades',        color: '#1a9e6e', showChange: true  },
  { key: 'underReview',    label: 'Under Review',    color: '#c47d15', showChange: false },
  { key: 'liquidityWatch', label: 'Liquidity Watch', color: '#2a6dd9', showChange: false },
];

export default function WatchlistPage() {
  const { watchlist } = data;

  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 800 }}>
        <div className="section-header">
          <div className="section-header__label">Active Signals</div>
          <h1 className="section-header__title">Watchlist</h1>
          <p className="section-header__sub">Last updated: {data.lastUpdated}</p>
        </div>

        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 36 }}>
          The Foretoken Watchlist tracks active rating movements, sectors and protocols under review, and liquidity conditions requiring close monitoring. Entries are updated in conjunction with formal rating actions and material event assessments.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {COLUMNS.map(({ key, label, color, showChange }) => {
            const items = watchlist[key] || [];
            return (
              <div key={key}>
                <div style={{
                  fontSize: 10,
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color,
                  paddingLeft: 12,
                  borderLeft: `3px solid ${color}`,
                  marginBottom: 14,
                  paddingBottom: 10,
                  borderBottom: '0.5px solid var(--border)',
                }}>
                  {label}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {items.map((item, i) => (
                    <div key={i} style={{
                      padding: '14px 0',
                      borderBottom: i < items.length - 1 ? '0.5px solid var(--border)' : 'none',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 4 }}>
                        <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-primary)' }}>{item.name}</span>
                        {item.dateUpdated && (
                          <span style={{ fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', flexShrink: 0 }}>
                            {item.dateUpdated}
                          </span>
                        )}
                      </div>
                      {showChange && item.change && (
                        <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--accent)', marginBottom: 4, fontFamily: 'var(--font-mono)' }}>
                          {item.change}
                        </div>
                      )}
                      <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>{item.note}</p>
                      {item.detail && (
                        <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6, marginTop: 8, marginBottom: 0, paddingLeft: 12, borderLeft: '1px solid rgba(176,138,74,0.25)' }}>
                          {item.detail}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ marginTop: 36, paddingTop: 24, borderTop: '0.5px solid var(--border)' }}>
          <Link to="/" style={{ fontSize: 13, color: 'var(--accent)', textDecoration: 'none' }}>
            ← Back to Concourse Dashboard
          </Link>
          <span style={{ margin: '0 16px', color: 'var(--border)' }}>|</span>
          <Link to="/ratings" style={{ fontSize: 13, color: 'var(--accent)', textDecoration: 'none' }}>
            View Sector Ratings →
          </Link>
        </div>
      </div>
    </div>
  );
}
