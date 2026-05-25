import React from 'react';
import data from '../data/concourse.json';

const COLUMNS = [
  {
    key: 'downgrades',
    label: 'Downgrades',
    colorClass: 'watchlist-col--red',
    showChange: true,
  },
  {
    key: 'upgrades',
    label: 'Upgrades',
    colorClass: 'watchlist-col--green',
    showChange: true,
  },
  {
    key: 'underReview',
    label: 'Under Review',
    colorClass: 'watchlist-col--amber',
    showChange: false,
  },
  {
    key: 'liquidityWatch',
    label: 'Liquidity Watch',
    colorClass: 'watchlist-col--blue',
    showChange: false,
  },
];

export default function Watchlist({ onSubscribe }) {
  const { watchlist } = data;

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-header">
          <div className="section-header__label">Active Signals</div>
          <h2 className="section-header__title">Watchlist</h2>
          <p className="section-header__sub">Last updated: May 22, 2026</p>
        </div>

        <div className="watchlist-grid">
          {COLUMNS.map(({ key, label, colorClass, showChange }) => (
            <div key={key} className={`watchlist-col ${colorClass}`}>
              <div className="watchlist-col__header">{label}</div>
              {watchlist[key].map((item, i) => (
                <div className="watchlist-item" key={i}>
                  <div className="watchlist-item__name">{item.name}</div>
                  {showChange && item.change && (
                    <div className="watchlist-item__change">{item.change}</div>
                  )}
                  <div className="watchlist-item__note">{item.note}</div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div
          className="watchlist-locked"
          onClick={onSubscribe}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onSubscribe()}
          aria-label="View additional watchlist items — subscribers only"
        >
          <div className="watchlist-locked__text">
            <span className="watchlist-locked__icon">🔒</span>
            <span>14 additional watchlist items available to subscribers →</span>
          </div>
          <span className="watchlist-locked__arrow">Subscribe →</span>
        </div>
      </div>
    </section>
  );
}
