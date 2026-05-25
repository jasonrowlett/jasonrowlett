import React, { useEffect } from 'react';

function getRatingTier(rating) {
  const base = rating.replace(/[+\-]/g, '');
  if (['AAA', 'AA', 'A'].includes(base)) return 'green';
  if (base === 'BBB') return 'blue';
  if (base === 'BB') return 'amber';
  return 'red';
}

function getOutlookSymbol(outlook) {
  switch (outlook) {
    case 'stable':   return { symbol: '→', color: 'var(--text-muted)' };
    case 'positive': return { symbol: '↑', color: 'var(--green)' };
    case 'negative': return { symbol: '↓', color: 'var(--red)' };
    case 'watch':    return { symbol: '⚑', color: 'var(--amber)' };
    default:         return { symbol: '→', color: 'var(--text-muted)' };
  }
}

export default function SectorModal({ sector, onClose, onSubscribe }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const tier = getRatingTier(sector.rating);
  const { symbol, color } = getOutlookSymbol(sector.outlook);
  const outlookLabel = sector.outlook.charAt(0).toUpperCase() + sector.outlook.slice(1);

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="sector-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="sector-modal__close" onClick={onClose} aria-label="Close">×</button>

        <div className="sector-modal__category">{sector.category}</div>
        <h2 className="sector-modal__name" id="modal-title">{sector.name}</h2>

        <div className="sector-modal__meta">
          <span className={`rating-badge rating-badge--${tier}`}>{sector.rating}</span>
          <span className="outlook-symbol" style={{ color }} title={`Outlook: ${outlookLabel}`}>
            {symbol}
          </span>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>{outlookLabel} outlook</span>
        </div>

        <p className="sector-modal__rationale">{sector.rationale}</p>

        <div className="sector-modal__paywall">
          <p>Full sector analysis, protocol breakdowns, and historical ratings are available to Concourse subscribers.</p>
          <button className="btn-primary" onClick={onSubscribe}>
            Subscribe for Full Access →
          </button>
        </div>
      </div>
    </div>
  );
}
