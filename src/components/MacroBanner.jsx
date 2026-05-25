import React from 'react';
import data from '../data/concourse.json';

export default function MacroBanner() {
  const text = data.macroBanner;

  return (
    <div className="macro-banner" role="marquee" aria-label="Live intelligence ticker">
      <div className="macro-banner__label">Live Intelligence</div>
      <div className="macro-banner__track">
        <div className="macro-banner__inner">
          <span className="macro-banner__text">{text}</span>
          <span className="macro-banner__text" aria-hidden="true">{text}</span>
        </div>
      </div>
    </div>
  );
}
