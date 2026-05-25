import React from 'react';
import { Link } from 'react-router-dom';

// Clerk <SignIn /> will replace this placeholder in the next build session
export default function Login() {
  return (
    <div className="page-centered">
      <div className="page-centered__card">
        <div className="page-centered__eyebrow">Foretoken Concourse</div>
        <h1 className="page-centered__title">Sign In</h1>
        <p className="page-centered__sub">
          Access your Concourse subscription, saved watchlists, and intelligence dossiers.
        </p>

        <button
          className="btn-primary"
          style={{ width: '100%', padding: '11px 20px', fontSize: 13 }}
          onClick={() => alert('Clerk auth will be wired in the next build session.')}
        >
          Continue with Email →
        </button>

        <p className="page-centered__note">
          Don't have an account?{' '}
          <Link to="/subscribe">Subscribe to Concourse</Link> to get started.
        </p>
      </div>
    </div>
  );
}
