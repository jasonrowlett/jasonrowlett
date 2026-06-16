import React, { useEffect } from 'react';

export default function MacroModal({ item, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="sector-modal sector-modal--intel sector-modal--macro" role="dialog" aria-modal="true" aria-labelledby="macro-modal-title">
        <div className="sector-modal__header">
          <button className="sector-modal__close" onClick={onClose} aria-label="Close">&times;</button>
        </div>

        <div className="sector-modal__body">
          <div className="intel-modal__meta">
            <span className={`macro-modal__status macro-modal__status--${item.tier}`}>{item.status}</span>
            <span className="intel-modal__date">Active Signal &middot; June 2026</span>
          </div>

          <h2 id="macro-modal-title" className="intel-modal__title">{item.label}</h2>

          <p className="intel-modal__summary">{item.whyItMatters}</p>

          <div className="intel-modal__section">
            <div className="intel-modal__label">Sectors Affected</div>
            <div className="macro-modal__sectors">
              {item.sectorsAffected.map((s) => (
                <span key={s} className="macro-modal__sector-tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="intel-modal__section">
            <div className="intel-modal__label">Current Signal</div>
            <p className="macro-modal__signal">{item.currentSignal}</p>
          </div>

          {item.ratingImplications && (
            <div className="intel-modal__section">
              <div className="intel-modal__label">Rating Implications</div>
              <p className="intel-modal__implications">{item.ratingImplications}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
