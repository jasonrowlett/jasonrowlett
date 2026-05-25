import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="site-header__wordmark" style={{ textDecoration: 'none' }}>
          <div className="site-header__brand">
            Foretoken <span>Concourse</span>
          </div>
          <div className="site-header__tagline">Tokenized Private Markets Intelligence</div>
        </Link>

        <nav className="site-header__nav" aria-label="Primary navigation">
          <Link to="/">Ratings</Link>
          <Link to="/">Intelligence</Link>
          <Link to="/">Methodology</Link>
          <Link to="/subscribe" className="site-header__cta">Subscribe</Link>
        </nav>
      </div>
    </header>
  );
}
