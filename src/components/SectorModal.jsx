import React, { useEffect } from 'react';

const PILLAR_KEYS = ['credit', 'transparency', 'liquidity', 'macroExposure', 'operational'];
const PILLAR_LABELS = {
  credit: 'Credit Quality',
  transparency: 'Transparency',
  liquidity: 'Liquidity',
  macroExposure: 'Macro Exposure',
  operational: 'Operational',
};

function getScoreColor(score) {
  if (score >= 4) return 'var(--green)';
  if (score === 3) return 'var(--accent)';
  if (score === 2) return 'var(--amber)';
  return 'var(--red)';
}

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

export default function SectorModal({ sector, isPremium, onClose, onSubscribe }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
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

        {isPremium ? (
          <div className="sector-modal__analysis">
            {sector.keySignal && (
              <div style={{ marginBottom: 16, padding: '10px 14px', background: 'rgba(176,138,74,0.08)', border: '0.5px solid var(--accent)', borderRadius: 3 }}>
                <div style={{ fontSize: 10, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>Key Signal</div>
                <p style={{ fontSize: 13, color: 'var(--text-primary)', margin: 0, lineHeight: 1.5 }}>{sector.keySignal}</p>
              </div>
            )}

            {sector.analysis && (
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Rating Rationale</div>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{sector.analysis}</p>
              </div>
            )}

            {sector.sectorNote && (
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Sector Note</div>
                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{sector.sectorNote}</p>
              </div>
            )}

            {sector.pillars && (
              <div>
                <div style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Five-Pillar Scorecard</div>
                {PILLAR_KEYS.map((key) => {
                  const p = sector.pillars[key];
                  if (!p) return null;
                  return (
                    <div key={key} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: '0.5px solid var(--border)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                        <span style={{ fontSize: 11, color: 'var(--text-primary)', fontWeight: 600 }}>{PILLAR_LABELS[key]}</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          {p.score != null && (
                            <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: getScoreColor(p.score), fontWeight: 700 }}>
                              {p.score}/5
                            </span>
                          )}
                          <span style={{ fontSize: 11, color: 'var(--text-muted)', fontStyle: 'italic' }}>{p.label}</span>
                        </div>
                      </div>
                      <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>{p.note}</p>
                    </div>
                  );
                })}
              </div>
            )}

            {sector.coveredProtocols && (
              <div style={{ marginTop: 4 }}>
                <div style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Covered Protocols</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {sector.coveredProtocols.map((p) => (
                    <span key={p} style={{ fontSize: 11, padding: '2px 8px', background: 'var(--surface-2, var(--surface))', border: '0.5px solid var(--border)', borderRadius: 2, color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>{p}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="sector-modal__paywall">
            <p>Full sector analysis, protocol breakdowns, and historical ratings are available to Concourse subscribers.</p>
            <button className="btn-primary" onClick={onSubscribe}>
              Subscribe for Full Access →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
