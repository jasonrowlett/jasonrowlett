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
            <Link to="/about">About</Link>
            <a href="mailto:info@foretoken.xyz">Contact</a>
            <Link to="/subscribe">Subscribe</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </nav>
        </div>

        <div>
          <div className="footer-col__heading">Research</div>
          <nav className="footer-col__nav" aria-label="Research navigation">
            <Link to="/intelligence">Intelligence Archive</Link>
            <Link to="/ratings">Sector Ratings</Link>
            <Link to="/watchlist">Watchlist</Link>
            <Link to="/methodology">Methodology</Link>
          </nav>
        </div>

        <div>
          <p className="footer-col__disclaimer">
            Foretoken Concourse ratings are independent analytical opinions and do not constitute
            investment advice. Foretoken is not a registered investment adviser.
          </p>
          <p className="footer-col__legal">
            Ratings reflect publicly available information as of the date of publication.
            Coverage is limited to protocols reviewed by the Foretoken editorial team.
          </p>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <span className="site-footer__copyright">
            © 2026 Foretoken · foretoken.xyz · Austin, Texas
          </span>
          <nav style={{ display: 'flex', gap: 16 }} aria-label="Legal links">
            <Link to="/privacy" style={{ fontSize: 11, color: 'var(--text-muted)' }}>Privacy</Link>
            <Link to="/terms" style={{ fontSize: 11, color: 'var(--text-muted)' }}>Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
