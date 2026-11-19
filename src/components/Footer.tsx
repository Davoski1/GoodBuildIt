import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ padding: '40px 0', background: 'var(--canvas)', borderTop: '1px solid var(--hairline)' }}>
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span className="font-display" style={{ fontWeight: 800, fontSize: '16px', color: 'var(--violet-ink)' }}>
            GoodBuild
          </span>
          <span style={{ color: 'var(--grey-400)' }}>•</span>
          <span style={{ fontSize: '13px', color: 'var(--grey-600)' }}>Built on Celo</span>
        </div>
        <p style={{ fontSize: '12px', color: 'var(--grey-600)' }}>
          © {currentYear} GoodBuild. All rights reserved. Deployments are user-generated and self-custodied.
        </p>
      </div>
    </footer>
  );
};
