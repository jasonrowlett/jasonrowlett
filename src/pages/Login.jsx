import React from 'react';
import { SignIn } from '@clerk/clerk-react';

export default function Login() {
  return (
    <div className="page-centered">
      <SignIn
        routing="path"
        path="/login"
        afterSignInUrl="/"
        appearance={{
          variables: {
            colorPrimary: '#B08A4A',
            colorBackground: '#111318',
            colorInputBackground: '#0a0b0d',
            colorText: '#e8e6e0',
            colorInputText: '#e8e6e0',
            colorTextSecondary: '#6b6a65',
            borderRadius: '4px',
          },
          elements: {
            card: {
              background: '#111318',
              border: '0.5px solid #1e2028',
              boxShadow: 'none',
            },
            headerTitle: { color: '#e8e6e0' },
            headerSubtitle: { color: '#6b6a65' },
            formButtonPrimary: {
              background: '#B08A4A',
              color: '#0a0b0d',
              fontSize: '12px',
            },
            footerActionLink: { color: '#B08A4A' },
          },
        }}
      />
    </div>
  );
}
