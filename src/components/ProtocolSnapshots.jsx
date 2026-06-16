import React, { useState } from 'react';
import data from '../data/concourse.json';
import PaywallGate from './PaywallGate';

const PILLAR_KEYS = ['credit', 'transparency', 'liquidity', 'macroExposure', 'operational'];
const PILLAR_LABELS = {
  credit: 'Credit',
  transparency: 'Transparency',
  liquidity: 'Liquidity',
  macroExposure: 'Macro',
  operational: 'Operational',
};

function getRatingColor(rating) {
  const base = rating.replace(/[+\-−]/g, '');
  if (['AAA', 'AA', 'A'].includes(base)) return 'var(--green)';
  if (base === 'BBB') return 'var(--accent)';
  if (base === 'BB') return 'var(--amber)';
  return 'var(--red)';
}

function ProtocolCard({ protocol }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="protocol-card" style={{ background: 'var(--surface)', border: '0.5px solid var(--border)', borderRadius: 4, padding: '16px 18px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>{protocol.name}</div>
          <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{protocol.ticker}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, color: getRatingColor(protocol.rating) }}>{protocol.rating}</div>
          <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 1 }}>{protocol.ratingLabel}</div>
        </div>
      </div>

      <div style={{ fontSize: 10, color: 'var(--accent)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{protocol.sectorLabel}</div>

      <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: 10 }}>{protocol.summary}</p>

      <button
        onClick={() => setExpanded(!expanded)}
        style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, color: 'var(--accent)', padding: 0, fontFamily: 'var(--font-mono)' }}
      >
        {expanded ? '▲ Hide Pillars' : '▼ View Pillars'}
      </button>

      {expanded && (
        <div style={{ marginTop: 10, borderTop: '0.5px solid var(--border)', paddingTop: 10 }}>
          {PILLAR_KEYS.map((key) => {
            const p = protocol.pillars[key];
            if (!p) return null;
            return (
              <div key={key} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                  <span style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{PILLAR_LABELS[key]}</span>
                  <span style={{ fontSize: 10, color: 'var(--text-secondary)', fontStyle: 'italic' }}>{p.label}</span>
                </div>
                <p style={{ fontSize: 11, color: 'var(--text-muted)', lineHeight: 1.4, margin: 0 }}>{p.note}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function ProtocolSnapshots({ isPremium, onSubscribe }) {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-header">
          <div className="section-header__label">Ratings</div>
          <h2 className="section-header__title">Protocol Coverage</h2>
          <p className="section-header__sub">Individual protocol ratings within each sector.</p>
        </div>

        <div className="protocol-wrapper">
          <div className={isPremium ? '' : 'protocol-blur'}>
            <div className="protocol-placeholder-grid">
              {data.protocols.map((protocol) => (
                <ProtocolCard key={protocol.id} protocol={protocol} />
              ))}
            </div>
          </div>

          {!isPremium && (
            <PaywallGate
              isPremium={false}
              onSubscribe={onSubscribe}
              message="Protocol-level ratings are available to Concourse subscribers."
            />
          )}
        </div>
      </div>
    </section>
  );
}
