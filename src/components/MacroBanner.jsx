import React from 'react';
import data from '../data/concourse.json';

function TickerContent({ prefix }) {
  return data.tickerItems.flatMap((item, i) => {
    const dashIdx = item.indexOf(' — ');
    const headline = dashIdx !== -1 ? item.slice(0, dashIdx) : item;
    const detail = dashIdx !== -1 ? item.slice(dashIdx + 3) : null;
    return [
      <span key={`${prefix}-item-${i}`} className="macro-banner__item">
        <span className="macro-banner__headline">{headline}</span>
        {detail && (
          <>
            <span className="macro-banner__dash"> — </span>
            <span className="macro-banner__detail">{detail}</span>
          </>
        )}
      </span>,
      <span key={`${prefix}-sep-${i}`} className="macro-banner__sep" aria-hidden="true">◆</span>,
    ];
  });
}

export default function MacroBanner() {
  return (
    <div className="macro-banner" role="marquee" aria-label="Live intelligence ticker">
      <div className="macro-banner__label">Intelligence Tape</div>
      <div className="macro-banner__track">
        <div className="macro-banner__inner">
          <TickerContent prefix="a" />
          <TickerContent prefix="b" />
        </div>
      </div>
    </div>
  );
}
