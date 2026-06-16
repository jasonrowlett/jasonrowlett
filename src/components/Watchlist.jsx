import React, { useState } from 'react';
import data from '../data/concourse.json';
import IntelModal from './IntelModal';

const COLUMNS = [
  { key: 'downgrades',     label: 'Downgrades',     colorClass: 'watchlist-col--red',   showChange: true  },
  { key: 'upgrades',       label: 'Upgrades',        colorClass: 'watchlist-col--green', showChange: true  },
  { key: 'underReview',    label: 'Under Review',    colorClass: 'watchlist-col--amber', showChange: false },
  { key: 'liquidityWatch', label: 'Liquidity Watch', colorClass: 'watchlist-col--blue',  showChange: false },
];

export default function Watchlist({ isPremium, onSubscribe }) {
  const { watchlist, intelligenceReports } = data;
  const [expandedItem, setExpandedItem] = useState(null);
  const [activeReport, setActiveReport] = useState(null);

  function toggleExpand(key) {
    setExpandedItem(expandedItem === key ? null : key);
  }

  function openReport(reportId) {
    const report = intelligenceReports.find((r) => r.id === reportId);
    if (report) setActiveReport(report);
  }

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-header">
          <div className="section-header__label">Active Signals</div>
          <h2 className="section-header__title">Watchlist</h2>
          <p className="section-header__sub">Last updated: June 2026</p>
        </div>

        <div className="watchlist-grid">
          {COLUMNS.map(({ key, label, colorClass, showChange }) => (
            <div key={key} className={`watchlist-col ${colorClass}`}>
              <div className="watchlist-col__header">{label}</div>

              {watchlist[key].map((item, i) => {
                const itemKey = `${key}-${i}`;
                const isExpanded = expandedItem === itemKey;
                const hasDetail = !!item.detail;
                const hasReport = !!item.reportId;

                return (
                  <div
                    key={i}
                    className={`watchlist-item${hasDetail ? ' watchlist-item--interactive' : ''}`}
                  >
                    <div className="watchlist-item__top">
                      <div className="watchlist-item__name">{item.name}</div>
                      {item.dateUpdated && (
                        <span className="watchlist-item__date">{item.dateUpdated}</span>
                      )}
                    </div>

                    {showChange && item.change && (
                      <div className="watchlist-item__change">{item.change}</div>
                    )}

                    <div className="watchlist-item__note">{item.note}</div>

                    {(hasDetail || hasReport) && (
                      <div className="watchlist-item__actions">
                        {hasDetail && (
                          <button
                            className="watchlist-item__expand-btn"
                            onClick={() => toggleExpand(itemKey)}
                            aria-expanded={isExpanded}
                          >
                            {isExpanded ? '▲ Less' : '▼ Details'}
                          </button>
                        )}
                        {hasReport && (
                          <button
                            className="watchlist-item__report-btn"
                            onClick={() => openReport(item.reportId)}
                          >
                            View Brief →
                          </button>
                        )}
                      </div>
                    )}

                    {isExpanded && item.detail && (
                      <div className="watchlist-item__detail">
                        {item.detail}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {!isPremium && (
          <div
            className="watchlist-locked"
            onClick={onSubscribe}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onSubscribe()}
            aria-label="Subscribe to access full watchlist"
          >
            <div className="watchlist-locked__text">
              <span className="watchlist-locked__icon">🔒</span>
              <span>Expanded watchlist coverage coming in the next Concourse update.</span>
            </div>
            <span className="watchlist-locked__arrow">Subscribe →</span>
          </div>
        )}
      </div>

      {activeReport && (
        <IntelModal
          report={activeReport}
          onClose={() => setActiveReport(null)}
        />
      )}
    </section>
  );
}
