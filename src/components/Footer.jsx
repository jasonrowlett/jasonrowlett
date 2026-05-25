import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/concourse.json';

export default function Footer() {
  const half = Math.ceil(data.ratingScale.length / 2);
  const col1 = data.ratingScale.slice(0, half);
  const col2 = data.ratingScale.slice(half);

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Left column */}
        <div>
          <div className="footer-col__wordmark">Foretoken Concourse</div>
          <p className="footer-col__tagline">
            Independent ratings and intelligence for tokenized private markets.
          </p>
          <nav className="footer-col__nav" aria-label="Footer navigation">
            <Link to="/">Methodology</Link>
            <Link to="/">Rating Scale</Link>
            <Link to="/">About</Link>
            <Link to="/subscribe">Subscribe</Link>
            <a href="mailto:jason@foretoken.co">Contact</a>
          </nav>
        </div>

        {/* Center column — rating scale */}
        <div>
          <div className="footer-col__heading">Rating Scale</div>
          <div className="rating-scale-grid">
            <div>
              {col1.map((item) => (
                <div className="rating-scale-item" key={item.grade}>
                  <span className="rating-scale-item__grade">{item.grade}</span>
                  <span className="rating-scale-item__def">{item.definition}</span>
                </div>
              ))}
            </div>
            <div>
              {col2.map((item) => (
                <div className="rating-scale-item" key={item.grade}>
                  <span className="rating-scale-item__grade">{item.grade}</span>
                  <span className="rating-scale-item__def">{item.definition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div>
          <p className="footer-col__disclaimer">
            Foretoken Concourse ratings are independent analytical assessments and do not constitute
            investment advice, financial recommendations, or solicitations to buy or sell any
            financial instrument. Ratings reflect Foretoken's analytical judgment at the time of
            publication and are subject to change.
          </p>
          <p className="footer-col__legal">
            Tokenized asset markets involve significant risk including loss of principal, liquidity
            risk, regulatory uncertainty, and smart contract risk. Past performance is not indicative
            of future results. Foretoken is not a registered investment adviser.
          </p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <span className="site-footer__copyright">
            © 2026 Foretoken · foretoken.xyz · Austin, Texas
          </span>
          <nav style={{ display: 'flex', gap: 16 }} aria-label="Legal links">
            <Link to="/" style={{ fontSize: 11, color: 'var(--text-muted)' }}>Privacy</Link>
            <Link to="/" style={{ fontSize: 11, color: 'var(--text-muted)' }}>Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
