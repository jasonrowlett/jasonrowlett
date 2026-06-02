import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div>
          <div className="footer-col__wordmark">Foretoken Concourse</div>
          <p className="footer-col__tagline">
            Independent ratings and intelligence for tokenized private markets.
          </p>
          <nav className="footer-col__nav" aria-label="Footer navigation">
            <Link to="/">Methodology</Link>
            <Link to="/">About</Link>
            <a href="mailto:info@foretoken.xyz">Contact</a>
            <Link to="/">Privacy</Link>
            <Link to="/">Terms</Link>
            <Link to="/subscribe">Subscribe</Link>
          </nav>
        </div>

        <div>
          <p className="footer-col__disclaimer">
            Foretoken Concourse ratings are independent analytical opinions and do not constitute
            investment advice. Foretoken is not a registered investment adviser.
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
