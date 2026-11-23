import React from 'react';
import { Header } from '../components/Header';

interface RegistrationPageProps {
  registrationUrl: string;
}

export const RegistrationPage: React.FC<RegistrationPageProps> = ({ registrationUrl }) => (
  <div style={{ position: 'relative', overflowX: 'hidden', minHeight: '100vh', paddingBottom: '60px' }}>
    <div className="ambient-glow" style={{ top: '-100px', left: '50%', transform: 'translateX(-50%)' }} />
    <Header scholarshipOnly />

    <main className="container" style={{ maxWidth: '900px', paddingTop: '20px' }}>
      <a
        href="#/scholarship"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '24px',
          color: 'var(--violet)',
          fontSize: '13px',
          fontWeight: 600,
          textDecoration: 'none',
        }}
      >
        ← Back to Scholarship
      </a>

      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <span className="pill-badge" style={{ marginBottom: '12px' }}>Scholarship Application</span>
        <h1
          className="font-display"
          style={{
            fontSize: 'clamp(26px, 4vw, 34px)',
            fontWeight: 800,
            color: 'var(--violet-ink)',
            letterSpacing: '-0.02em',
          }}
        >
          Complete Your Pre-Registration
        </h1>
      </div>

      <div className="card-gb" style={{ padding: '12px', border: '1.5px solid var(--violet-mist)' }}>
        <iframe
          src={registrationUrl}
          title="GoodBuild Scholarship pre-registration form"
          loading="lazy"
          style={{
            display: 'block',
            width: '100%',
            height: '900px',
            border: 0,
            borderRadius: '12px',
            background: 'var(--surface)',
          }}
        />
      </div>

      <p style={{ textAlign: 'center', marginTop: '16px', color: 'var(--grey-600)', fontSize: '13px' }}>
        If the form does not load here,{' '}
        <a href={registrationUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--violet)', fontWeight: 700 }}>
          open it in a new tab
        </a>.
      </p>
    </main>
  </div>
);
