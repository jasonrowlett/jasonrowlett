import React from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

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
          <a href="https://foretoken.beehiiv.com" target="_blank" rel="noopener noreferrer">Intelligence</a>
          <a href="https://foretoken.xyz/methodology" target="_blank" rel="noopener noreferrer">Methodology</a>
          <SignedOut>
            <Link to="/login" style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>Sign In</Link>
            <Link to="/subscribe" className="site-header__cta">Subscribe</Link>
          </SignedOut>
          <SignedIn>
            <Link to="/account" style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.04em' }}>Account</Link>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                variables: { colorPrimary: '#B08A4A' },
                elements: {
                  avatarBox: { width: 28, height: 28 },
                },
              }}
            />
          </SignedIn>
        </nav>
      </div>
    </header>
  );
}
