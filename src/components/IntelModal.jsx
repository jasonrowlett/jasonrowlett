import React, { useEffect } from 'react';

export default function IntelModal({ report, onClose }) {
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
      <div className="sector-modal sector-modal--intel" role="dialog" aria-modal="true" aria-labelledby="intel-modal-title">
        <div className="sector-modal__header">
          <button className="sector-modal__close" onClick={onClose} aria-label="Close">×</button>
        </div>

        <div className="sector-modal__body">
          <div className="intel-modal__meta">
            <span className="intel-modal__badge">{report.badge}</span>
            <span className="intel-modal__date">{report.date}</span>
            <span className="intel-modal__sector">· {report.sector}</span>
          </div>

          <h2 id="intel-modal-title" className="intel-modal__title">{report.title}</h2>

          <p className="intel-modal__summary">{report.summary || report.lede}</p>

          {report.foretokenLine && (
            <div className="intel-modal__thesis">
              <p>"{report.foretokenLine}"</p>
            </div>
          )}

          {report.keyTakeaways && report.keyTakeaways.length > 0 && (
            <div className="intel-modal__section">
              <div className="intel-modal__label">Key Takeaways</div>
              <ul className="intel-modal__takeaways">
                {report.keyTakeaways.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          {report.ratingImplications && (
            <div className="intel-modal__section">
              <div className="intel-modal__label">Rating Implications</div>
              <p className="intel-modal__implications">{report.ratingImplications}</p>
            </div>
          )}

          <div className="intel-modal__cta">
            <a
              href={report.beehiivUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Read Full Analysis →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
