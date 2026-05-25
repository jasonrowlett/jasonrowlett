import React, { useState } from 'react';
import data from '../data/concourse.json';

export default function MacroExposures() {
  const [expanded, setExpanded] = useState({});

  const toggle = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="section-header">
          <div className="section-header__label">Macro</div>
          <h2 className="section-header__title">Macro Exposures</h2>
          <p className="section-header__sub">
            Five directional macro vectors active across tokenized private markets.
          </p>
        </div>

        <div className="macro-exposures-row">
          {data.macroExposures.map((item) => (
            <div className="macro-exposure" key={item.id}>
              <div className="macro-exposure__label">{item.label}</div>
              <div className={`macro-exposure__status macro-exposure__status--${item.tier}`}>
                {item.status}
              </div>
              <p className="macro-exposure__note">{item.note}</p>
              <button
                className="macro-exposure__toggle"
                onClick={() => toggle(item.id)}
                aria-expanded={!!expanded[item.id]}
                aria-controls={`macro-detail-${item.id}`}
              >
                {expanded[item.id] ? 'Hide Detail' : 'Show Detail'}
              </button>
              {expanded[item.id] && (
                <div
                  className="macro-exposure__detail"
                  id={`macro-detail-${item.id}`}
                >
                  {item.detail}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
