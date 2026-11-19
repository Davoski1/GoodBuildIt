import React from 'react';

export const Features: React.FC = () => {
  return (
    <section
      style={{
        padding: '60px 0 90px',
        background: '#ffffff',
        borderTop: '1px solid var(--hairline)',
        borderBottom: '1px solid var(--hairline)',
      }}
    >
      <div className="container">
        
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>
          <span className="pill-badge" style={{ marginBottom: '12px' }}>Under the Hood</span>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(26px, 4vw, 34px)',
              fontWeight: 800,
              color: 'var(--violet-ink)',
              letterSpacing: '-0.02em',
            }}
          >
            Built for Speed, Ownership & Simplicity.
          </h2>
        </div>

        <div className="features-grid">
          
          {/* Feature 1 */}
          <div className="card-gb" style={{ padding: '32px' }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: '20px' }}>
              <rect width="48" height="48" rx="16" fill="#F3EEF8" />
              <path d="M16 24L22 30L32 18" stroke="#592E81" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="34" cy="16" r="3" fill="#FF85D9" />
            </svg>
            <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--violet-ink)', marginBottom: '10px' }}>
              1. Audited OpenZeppelin Blocks
            </h3>
            <p style={{ color: 'var(--grey-600)', fontSize: '14.5px', lineHeight: 1.6 }}>
              Every generated smart contract is assembled from battle-tested, standard Solidity templates—preventing reentrancy and unauthorized drains.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="card-gb" style={{ padding: '32px' }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: '20px' }}>
              <rect width="48" height="48" rx="16" fill="#F3EEF8" />
              <rect x="15" y="15" width="18" height="18" rx="4" stroke="#592E81" strokeWidth="2.5" />
              <path d="M20 24H28" stroke="#FF85D9" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M24 20V28" stroke="#FF85D9" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
            <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--violet-ink)', marginBottom: '10px' }}>
              2. Self-Custody by Default
            </h3>
            <p style={{ color: 'var(--grey-600)', fontSize: '14.5px', lineHeight: 1.6 }}>
              GoodBuild never holds your private keys or manages user funds. You sign contract deployments directly through MetaMask, Valora, or MiniPay.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="card-gb" style={{ padding: '32px' }}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: '20px' }}>
              <rect width="48" height="48" rx="16" fill="#F3EEF8" />
              <path d="M16 28L24 16L32 28H16Z" stroke="#592E81" strokeWidth="2.5" strokeLinejoin="round" />
              <circle cx="24" cy="24" r="2" fill="#FF85D9" />
            </svg>
            <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--violet-ink)', marginBottom: '10px' }}>
              3. Instant Subdomain Publishing
            </h3>
            <p style={{ color: 'var(--grey-600)', fontSize: '14.5px', lineHeight: 1.6 }}>
              Your decentralized application goes live with a clean, branded link (<code className="font-mono" style={{ fontSize: '13px', color: 'var(--violet)' }}>your-app.goodbuildit.xyz</code>) ready to share immediately.
            </p>
          </div>

        </div>

      </div>

      <style>{`
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }
      `}</style>
    </section>
  );
};
