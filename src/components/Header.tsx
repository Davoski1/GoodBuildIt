import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className="container">
      <header
        style={{
          padding: '20px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* GOODBUILD BRAND SVG ICON */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="12" fill="#592E81" />
            <path d="M11 11H25V15H15V21H25V25H11V11Z" fill="#FFFFFF" />
            <circle cx="25" cy="13" r="2.5" fill="#FF85D9" />
          </svg>
          <span
            className="font-display"
            style={{
              fontWeight: 800,
              fontSize: '20px',
              letterSpacing: '-0.02em',
              color: 'var(--violet-ink)',
            }}
          >
            GoodBuild
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          <span className="pill-badge header-network-pill">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
              <circle cx="4" cy="4" r="3" fill="#1F9D6B" />
              <circle cx="4" cy="4" r="4" stroke="#1F9D6B" strokeOpacity="0.3" strokeWidth="1.5" />
            </svg>
            Celo Mainnet & Sepolia
          </span>
          <a
            href="#early-access"
            className="btn-primary"
            style={{ padding: '10px 22px', fontSize: '13px' }}
          >
            Join Hackathon
          </a>
        </div>
      </header>
      <style>{`
        @media (max-width: 520px) {
          .header-network-pill {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};
