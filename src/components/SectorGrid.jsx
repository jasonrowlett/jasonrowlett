import React, { useState } from 'react';
import data from '../data/concourse.json';
import SectorModal from './SectorModal';

const SECTOR_DISPLAY_ORDER = [
  'tokenized-treasuries',
  'trade-finance',
  'private-credit',
  'tokenized-equities',
  'precious-metals',
  'real-estate',
];

const OUTLOOK_LABELS = {
  stable: 'Stable',
  positive: 'Positive',
  negative: 'Negative',
  watch: 'Watch',
  constructive: 'Constructive',
  cautious: 'Cautious',
  developing: 'Developing',
};

function getRatingTier(rating) {
  const base = rating.replace(/[+\-−]/g, '');
  if (['AAA', 'AA', 'A'].includes(base)) return 'green';
  if (base === 'BBB') return 'blue';
  if (base === 'BB') return 'amber';
  return 'red';
}

function getOutlookSymbol(outlook) {
  switch (outlook) {
    case 'stable':       return { symbol: '→', color: 'var(--text-muted)' };
    case 'positive':     return { symbol: '↑', color: 'var(--green)' };
    case 'negative':     return { symbol: '↓', color: 'var(--red)' };
    case 'watch':        return { symbol: '⚑', color: 'var(--amber)' };
    case 'constructive': return { symbol: '↑', color: 'var(--green)' };
    case 'cautious':     return { symbol: '↓', color: 'var(--amber)' };
    case 'developing':   return { symbol: '⚑', color: 'var(--amber)' };
    default:             return { symbol: '→', color: 'var(--text-muted)' };
  }
}

export default function SectorGrid({ isPremium, onSubscribe }) {
  const [activeSector, setActiveSector] = useState(null);

  const sectors = SECTOR_DISPLAY_ORDER
    .map((id) => data.sectors.find((s) => s.id === id))
    .filter(Boolean);

  return (
    <>
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-header__label">Coverage</div>
            <h2 className="section-header__title">Sector Ratings</h2>
            <p className="section-header__sub">
              Foretoken Concourse — Updated {data.lastUpdated}
            </p>
          </div>

          <div className="sector-grid">
            {sectors.map((sector) => {
              const tier = getRatingTier(sector.rating);
              const { symbol, color } = getOutlookSymbol(sector.outlook);
              const outlookLabel = OUTLOOK_LABELS[sector.outlook] || sector.outlook;
              return (
                <div
                  key={sector.id}
                  className="sector-card"
                  onClick={() => setActiveSector(sector)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveSector(sector)}
                  aria-label={`View ${sector.name} analysis`}
                >
                  <div className="sector-card__header">
                    <div className="sector-card__name">{sector.name}</div>
                    <div className="sector-card__rating">
                      <span className={`rating-badge rating-badge--${tier}`}>{sector.rating}</span>
                      <span
                        className="sector-card__outlook"
                        style={{ color }}
                        title={`Outlook: ${outlookLabel}`}
                      >
                        {symbol} {outlookLabel}
                      </span>
                    </div>
                  </div>
                  <div className="sector-card__category">{sector.category}</div>
                  <p className="sector-card__rationale">{sector.rationale}</p>
                  <span className="sector-card__link">View Analysis →</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {activeSector && (
        <SectorModal
          sector={activeSector}
          isPremium={isPremium}
          onClose={() => setActiveSector(null)}
          onSubscribe={() => {
            setActiveSector(null);
            onSubscribe();
          }}
        />
      )}
    </>
  );
}
