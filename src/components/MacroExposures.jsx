import React, { useState } from 'react';
import data from '../data/concourse.json';
import MacroModal from './MacroModal';

export default function MacroExposures() {
  const [activeItem, setActiveItem] = useState(null);

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
                onClick={() => setActiveItem(item)}
              >
                View Detail →
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeItem && (
        <MacroModal
          item={activeItem}
          onClose={() => setActiveItem(null)}
        />
      )}
    </section>
  );
}
