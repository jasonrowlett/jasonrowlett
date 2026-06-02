import React from 'react';

const PILLARS = [
  { name: 'Credit Quality', weight: '30%', description: 'Underlying borrower creditworthiness, collateral quality, historical default rates, and recovery mechanisms. Assesses whether the claims backing a tokenized asset are sound at the source.' },
  { name: 'Transparency', weight: '20%', description: 'Quality and completeness of public disclosure: reserve attestations, audit coverage, on-chain data accessibility, borrower-level reporting. Opacity is treated as risk, not a neutral feature.' },
  { name: 'Liquidity', weight: '20%', description: 'Redemption mechanics, secondary market infrastructure, and the durability of exit pathways under stress. Distinguishes between normal-condition liquidity and stress-condition liquidity.' },
  { name: 'Macro Exposure', weight: '15%', description: 'Sensitivity to interest rates, FX movements, commodity cycles, geopolitical events, and macroeconomic deterioration. Assesses whether the sector or protocol amplifies or dampens macro risk.' },
  { name: 'Operational', weight: '15%', description: 'Smart contract integrity, governance structure, custodian credibility, regulatory positioning, and audit history. Evaluates the institutional scaffolding that delivers on the protocol\'s stated claims.' },
];

const RATING_SCALE = [
  { grade: 'AAA', band: 'Investment Grade', definition: 'Highest credit quality; minimal risk. Reserved for sovereign-equivalent exposure with institutional verification.' },
  { grade: 'AA', band: 'Investment Grade', definition: 'Very high quality; very low risk. Strong institutional validation, minimal credit exposure.' },
  { grade: 'A', band: 'Investment Grade', definition: 'High quality; low risk. Solid fundamentals with manageable operational constraints.' },
  { grade: 'BBB', band: 'Investment Grade', definition: 'Good quality; moderate risk. Investment grade with identified constraints that do not impair fundamental integrity.' },
  { grade: 'BB', band: 'Speculative', definition: 'Speculative; elevated risk. Below investment grade. Material structural weaknesses present.' },
  { grade: 'B', band: 'Speculative', definition: 'Highly speculative; high risk. Significant credit, liquidity, or operational vulnerabilities.' },
  { grade: 'CCC', band: 'Distressed', definition: 'Substantial risk; default or failure possible under adverse conditions.' },
  { grade: 'CC / C', band: 'Distressed', definition: 'Very high risk or near default. Severe structural impairment.' },
  { grade: 'D', band: 'Default', definition: 'In default or wind-down. Obligations are not being met.' },
  { grade: 'UR', band: 'Special', definition: 'Under Review. Transparency impairment prevents independent rating assessment.' },
  { grade: 'WD', band: 'Special', definition: 'Wind-Down. Protocol has initiated formal closure or transfer process.' },
];

export default function Methodology() {
  return (
    <div className="section">
      <div className="container" style={{ maxWidth: 760 }}>
        <div className="section-header">
          <div className="section-header__label">Framework</div>
          <h1 className="section-header__title">Methodology</h1>
          <p className="section-header__sub">
            How Foretoken Concourse rates tokenized private market sectors and protocols.
          </p>
        </div>

        {/* Purpose */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 12, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Purpose</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 12 }}>
            Foretoken Concourse provides independent analytical ratings for tokenized real-world asset (RWA) sectors and the protocols operating within them. Traditional financial frameworks were not designed for assets that sit simultaneously across credit, transparency, liquidity, macro, and operational risk layers.
          </p>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Our methodology addresses this gap. Ratings are analytical opinions — not investment advice, buy/sell recommendations, or guarantees of performance.
          </p>
        </div>

        {/* Five Pillars */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 20, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Five-Pillar Framework</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>
            Each sector and protocol is evaluated across five dimensions. Scores range from 1 (critical weakness) to 5 (strong). A weighted composite produces a framework score that maps to a preliminary rating.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {PILLARS.map((p) => (
              <div key={p.name} style={{ padding: '16px 18px', background: 'var(--surface)', border: '0.5px solid var(--border)', borderRadius: 3 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{p.name}</span>
                  <span style={{ fontSize: 11, color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{p.weight} weight</span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Floor Rules */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 12, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Floor Rules</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 12 }}>
            A high composite score cannot compensate for a critical failure in a single pillar. Floor rules apply when one or more pillars score 1 (Critical) — the overall rating is capped regardless of other pillar performance.
          </p>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Example: Trade Finance received a Macro Exposure score of 1 due to the active Strait of Hormuz crisis. The floor rule capped the sector rating at BB regardless of the composite score.
          </p>
        </div>

        {/* Rating Scale */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 20, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Rating Scale</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {RATING_SCALE.map((r) => (
              <div key={r.grade} style={{ display: 'flex', gap: 16, padding: '10px 14px', background: 'var(--surface)', borderRadius: 2, alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, fontWeight: 700, color: 'var(--accent)', minWidth: 52, flexShrink: 0 }}>{r.grade}</span>
                <div>
                  <span style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 2 }}>{r.band}</span>
                  <span style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{r.definition}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Update Process */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 12, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Update &amp; Review Process</h2>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 12 }}>
            Sector ratings are reviewed on a rolling basis, with formal re-assessments triggered by material changes in protocol architecture, macro conditions, regulatory environment, or disclosed performance data. Protocol ratings are reviewed following material events.
          </p>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Outlook designations (Stable, Positive, Negative, Constructive, Cautious) indicate the direction of potential rating movement over the next review cycle. An outlook change does not constitute a rating change.
          </p>
        </div>

        {/* Disclaimer */}
        <div style={{ padding: '16px 18px', background: 'rgba(176,138,74,0.05)', border: '0.5px solid rgba(176,138,74,0.15)', borderRadius: 3 }}>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
            Foretoken Concourse ratings are independent analytical opinions and do not constitute investment advice, financial recommendations, or solicitations to buy or sell any financial instrument. Ratings reflect Foretoken's analytical judgment at the time of publication and are subject to change without notice. Foretoken is not a registered investment adviser.
          </p>
        </div>
      </div>
    </div>
  );
}
